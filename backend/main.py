from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import Literal
import os
from dotenv import load_dotenv

from scoring import calcular_scoring
from report_generator import generar_reporte_html
from email_sender import enviar_email
from sheets_logger import registrar_en_sheets

load_dotenv()

app = FastAPI(title="Sint DS Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.getenv("FRONTEND_URL", "http://localhost:3000")],
    allow_methods=["POST"],
    allow_headers=["*"],
)

RespuestaDS = Literal["A", "B", "C"]


class DiagnosticoPayload(BaseModel):
    email: EmailStr
    P1: str
    P2: str
    P3: str
    D1: RespuestaDS
    D2: RespuestaDS
    D3: RespuestaDS
    D4: RespuestaDS
    D5: RespuestaDS
    D6: RespuestaDS
    D7: RespuestaDS
    D8: RespuestaDS


@app.post("/diagnostico")
async def recibir_diagnostico(payload: DiagnosticoPayload):
    respuestas_raw = {
        "D1": payload.D1, "D2": payload.D2, "D3": payload.D3,
        "D4": payload.D4, "D5": payload.D5, "D6": payload.D6,
        "D7": payload.D7, "D8": payload.D8,
    }
    payload_dict = {
        "P1": payload.P1, "P2": payload.P2, "P3": payload.P3,
    }

    # 1. Scoring
    resultado = calcular_scoring(respuestas_raw)

    # 2. Generar reporte con Claude
    try:
        reporte_html = generar_reporte_html(payload_dict, resultado)
    except Exception as e:
        print(f"[main] Error en Claude API: {e}")
        raise HTTPException(status_code=502, detail="Error al generar el reporte")

    # 3. Enviar email (no bloquea si falla)
    email_ok = enviar_email(payload.email, reporte_html, resultado)
    if not email_ok:
        print(f"[main] Email no enviado a {payload.email}")

    # 4. Log a Google Sheets (no bloquea si falla)
    sheets_ok = registrar_en_sheets(payload.email, payload_dict, resultado, respuestas_raw)
    if not sheets_ok:
        print(f"[main] Log a Sheets fallido para {payload.email}")

    return {
        "status": "ok",
        "nivel": resultado.nivel,
        "email_enviado": email_ok,
        "sheets_ok": sheets_ok,
    }


@app.get("/health")
def health():
    return {"status": "ok"}
