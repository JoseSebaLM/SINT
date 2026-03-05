import resend
import os
from scoring import ResultadoScoring
from datetime import datetime

resend.api_key = os.getenv("RESEND_API_KEY", "")

COLORES_NIVEL = {
    "verde": "#2EB886",
    "ambar": "#F59E0B",
    "rojo":  "#FF6B4A",
}

EMOJIS_NIVEL = {
    "verde": "🟢",
    "ambar": "🟡",
    "rojo":  "🔴",
}

ASUNTOS_NIVEL = {
    "verde": "Tu Diagnóstico Sint — Operación con fricciones residuales",
    "ambar": "Tu Diagnóstico Sint — Desalineación operativa activa",
    "rojo":  "Tu Diagnóstico Sint — Fricción sistémica con impacto en resultados",
}

CAL_LINK = os.getenv("CAL_LINK", "https://cal.com/sint")


def construir_email_html(reporte_html: str, resultado: ResultadoScoring) -> str:
    color = COLORES_NIVEL[resultado.nivel]
    emoji = EMOJIS_NIVEL[resultado.nivel]
    fecha = datetime.now().strftime("%d de %B de %Y")

    return f"""<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Diagnóstico Sint</title>
  <style>
    body {{ margin: 0; padding: 0; background-color: #09090B; font-family: Inter, -apple-system, sans-serif; color: #E5E6EB; }}
    .wrapper {{ max-width: 600px; margin: 0 auto; padding: 32px 16px; }}
    .header {{ border-bottom: 1px solid #27272A; padding-bottom: 24px; margin-bottom: 0; }}
    .logo {{ font-size: 18px; font-weight: 700; color: #FF6B4A; letter-spacing: -0.5px; }}
    .header-sub {{ font-size: 13px; color: #8A8F98; margin-top: 4px; }}
    .banda-nivel {{ background-color: {color}18; border-left: 4px solid {color}; padding: 16px 20px; margin: 24px 0; border-radius: 0 8px 8px 0; }}
    .banda-nivel-label {{ font-size: 14px; font-weight: 600; color: {color}; }}
    .banda-nivel-sfs {{ font-size: 12px; color: #8A8F98; margin-top: 4px; }}
    .reporte {{ padding: 8px 0; }}
    .ds-saludo {{ font-size: 15px; color: #8A8F98; margin-bottom: 20px; }}
    .ds-nivel {{ font-size: 15px; line-height: 1.6; margin-bottom: 24px; color: #E5E6EB; }}
    .ds-arquetipo {{ background: #18181B; border-radius: 8px; padding: 20px; margin-bottom: 24px; }}
    .ds-arquetipo-titulo {{ font-size: 16px; font-weight: 700; color: #FF6B4A; margin: 0 0 12px 0; }}
    .ds-arquetipo p {{ font-size: 14px; line-height: 1.7; color: #E5E6EB; margin: 0; }}
    .ds-focos {{ margin-bottom: 24px; }}
    .ds-foco {{ border-left: 3px solid {color}; padding-left: 16px; margin-bottom: 16px; }}
    .ds-foco-titulo {{ font-size: 13px; font-weight: 600; color: {color}; margin: 0 0 6px 0; text-transform: uppercase; letter-spacing: 0.5px; }}
    .ds-foco p {{ font-size: 14px; line-height: 1.7; color: #E5E6EB; margin: 0; }}
    .ds-alerta {{ background: #FF6B4A12; border: 1px solid #FF6B4A40; border-radius: 8px; padding: 16px 20px; margin-bottom: 24px; }}
    .ds-alerta-titulo {{ font-size: 13px; font-weight: 600; color: #FF6B4A; margin: 0 0 8px 0; }}
    .ds-alerta p {{ font-size: 14px; line-height: 1.7; color: #E5E6EB; margin: 0; }}
    .ds-cierre {{ font-size: 15px; line-height: 1.8; color: #E5E6EB; border-top: 1px solid #27272A; padding-top: 20px; margin-bottom: 32px; }}
    .cta-wrapper {{ text-align: center; margin: 32px 0; }}
    .cta-btn {{ display: inline-block; background-color: #FF6B4A; color: #09090B; font-weight: 700; font-size: 15px; padding: 14px 32px; border-radius: 8px; text-decoration: none; letter-spacing: -0.3px; }}
    .footer {{ border-top: 1px solid #27272A; padding-top: 24px; margin-top: 32px; }}
    .footer-brand {{ font-size: 13px; font-weight: 600; color: #E5E6EB; }}
    .footer-sub {{ font-size: 12px; color: #8A8F98; margin-top: 4px; }}
    .footer-privacy {{ font-size: 11px; color: #52525B; margin-top: 12px; }}
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <div class="logo">Sint</div>
      <div class="header-sub">Diagnóstico Sint · {fecha}</div>
    </div>

    <div class="banda-nivel">
      <div class="banda-nivel-label">{emoji} {resultado.nivel_etiqueta}</div>
      <div class="banda-nivel-sfs">SFS {resultado.sfs} / 31.2 · {resultado.arquetipo_nombre}</div>
    </div>

    <div class="reporte">
      {reporte_html}
    </div>

    <div class="cta-wrapper">
      <a href="{CAL_LINK}" class="cta-btn">Agendar 15 minutos →</a>
    </div>

    <div class="footer">
      <div class="footer-brand">Sint</div>
      <div class="footer-sub">Software basado en diagnóstico organizacional</div>
      <div class="footer-privacy">Sint utiliza tus respuestas exclusivamente para generar tu diagnóstico. No compartimos tu información con terceros.</div>
    </div>
  </div>
</body>
</html>"""


def enviar_email(email_destinatario: str, reporte_html: str, resultado: ResultadoScoring) -> bool:
    html_completo = construir_email_html(reporte_html, resultado)
    asunto = ASUNTOS_NIVEL[resultado.nivel]

    try:
        resend.Emails.send({
            "from": "Sint Diagnóstico <diagnostico@sint.cl>",
            "to": [email_destinatario],
            "subject": asunto,
            "html": html_completo,
        })
        return True
    except Exception as e:
        print(f"[email_sender] Error al enviar email: {e}")
        return False
