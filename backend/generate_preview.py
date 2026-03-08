import sys, os
sys.path.insert(0, '.')
from dotenv import load_dotenv
load_dotenv()

from scoring import calcular_scoring
from report_generator import generar_reporte_html
from email_sender import construir_email_html

payload = {
    "email": "test@sint.cl",
    "P1": "COO / Gerente de Operaciones",
    "P2": "51 – 100",
    "P3": "Manufactura, Construcción o Logística",
    "D1": "B", "D2": "B", "D3": "B",
    "D4": "B", "D5": "B", "D6": "C",
    "D7": "B", "D8": "B"
}

resultado = calcular_scoring(payload)
print(f"SFS: {resultado.sfs}")
print(f"Nivel: {resultado.nivel}")
print(f"Arquetipo: {resultado.arquetipo_nombre}")

reporte_html = generar_reporte_html(payload, resultado)
email_html = construir_email_html(reporte_html, resultado)

with open("email_preview_ambar.html", "w", encoding="utf-8") as f:
    f.write(email_html)

print("✅ Generado: backend/email_preview_ambar.html")
