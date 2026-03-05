from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import Literal
import os
from dotenv import load_dotenv
from scoring import calcular_scoring

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
    respuestas = {
        "D1": payload.D1, "D2": payload.D2, "D3": payload.D3,
        "D4": payload.D4, "D5": payload.D5, "D6": payload.D6,
        "D7": payload.D7, "D8": payload.D8,
    }

    resultado = calcular_scoring(respuestas)

    # Por ahora devuelve el scoring completo para verificación
    return {
        "status": "ok",
        "email": payload.email,
        "perfil": {"P1": payload.P1, "P2": payload.P2, "P3": payload.P3},
        "scoring": {
            "sfs": resultado.sfs,
            "nivel": resultado.nivel,
            "nivel_etiqueta": resultado.nivel_etiqueta,
            "arquetipo_id": resultado.arquetipo_id,
            "arquetipo_nombre": resultado.arquetipo_nombre,
            "foco_1": {"id": resultado.foco_1_id, "nombre": resultado.foco_1_nombre, "score": resultado.foco_1_score},
            "foco_2": {"id": resultado.foco_2_id, "nombre": resultado.foco_2_nombre, "score": resultado.foco_2_score},
            "alerta_activa": resultado.alerta_activa,
            "dimension_alerta": resultado.dimension_alerta,
            "scores_ponderados": resultado.scores_ponderados,
        }
    }


@app.get("/health")
def health():
    return {"status": "ok"}
