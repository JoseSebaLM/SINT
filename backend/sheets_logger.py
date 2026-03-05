import gspread
import json
import os
from google.oauth2.service_account import Credentials
from scoring import ResultadoScoring
from datetime import datetime

SCOPES = [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive",
]


def _get_client():
    creds_json = os.getenv("GOOGLE_CREDENTIALS_JSON")
    if not creds_json:
        raise ValueError("GOOGLE_CREDENTIALS_JSON no está configurado")
    creds_dict = json.loads(creds_json)
    creds = Credentials.from_service_account_info(creds_dict, scopes=SCOPES)
    return gspread.authorize(creds)


def registrar_en_sheets(
    email: str,
    payload: dict,
    resultado: ResultadoScoring,
    respuestas_raw: dict,
) -> bool:
    try:
        client = _get_client()
        sheet_id = os.getenv("GOOGLE_SHEETS_ID")
        spreadsheet = client.open_by_key(sheet_id)
        worksheet = spreadsheet.sheet1

        fila = [
            datetime.now().isoformat(),
            email,
            payload["P1"],
            payload["P2"],
            payload["P3"],
            resultado.sfs,
            resultado.nivel,
            resultado.arquetipo_id,
            resultado.arquetipo_nombre,
            resultado.foco_1_id,
            resultado.foco_1_nombre,
            resultado.foco_2_id,
            resultado.foco_2_nombre,
            str(resultado.alerta_activa),
            resultado.dimension_alerta or "",
            respuestas_raw.get("D1", ""),
            respuestas_raw.get("D2", ""),
            respuestas_raw.get("D3", ""),
            respuestas_raw.get("D4", ""),
            respuestas_raw.get("D5", ""),
            respuestas_raw.get("D6", ""),
            respuestas_raw.get("D7", ""),
            respuestas_raw.get("D8", ""),
        ]

        worksheet.append_row(fila)
        return True
    except Exception as e:
        print(f"[sheets_logger] Error al registrar en Sheets: {e}")
        return False


HEADERS = [
    "timestamp", "email", "P1", "P2", "P3",
    "SFS", "nivel", "arquetipo_id", "arquetipo_nombre",
    "foco_1_id", "foco_1_nombre", "foco_2_id", "foco_2_nombre",
    "alerta_activa", "dimension_alerta",
    "D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8",
]
