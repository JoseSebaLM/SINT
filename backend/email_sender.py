import resend
import os
from scoring import ResultadoScoring
from datetime import datetime

resend.api_key = os.getenv("RESEND_API_KEY", "")
INTERNAL_EMAIL = os.getenv("INTERNAL_EMAIL", "hola@sint.cl")

_MESES = [
    "", "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
]

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
    hoy = datetime.now()
    fecha = f"{hoy.day} de {_MESES[hoy.month]} de {hoy.year}"

    # Gauge SFS invertido: mayor % = mejor salud
    porcentaje_salud = round((1 - resultado.sfs / 31.2) * 100)
    porcentaje_salud = max(0, min(100, porcentaje_salud))
    porcentaje_vacio = 100 - porcentaje_salud

    # Construir la barra de progreso HTML según el porcentaje
    if porcentaje_salud == 100:
        barra_gauge = f'<td width="100%" style="background-color:{color}; height:8px; line-height:8px; font-size:0;">&nbsp;</td>'
    elif porcentaje_salud == 0:
        barra_gauge = f'<td width="100%" style="background-color:#E4E4E7; height:8px; line-height:8px; font-size:0;">&nbsp;</td>'
    else:
        barra_gauge = (
            f'<td width="{porcentaje_salud}%" style="background-color:{color}; height:8px; line-height:8px; font-size:0;">&nbsp;</td>'
            f'<td width="{porcentaje_vacio}%" style="background-color:#E4E4E7; height:8px; line-height:8px; font-size:0;">&nbsp;</td>'
        )

    return f"""<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Diagnóstico Sint</title>
  <style>
    .ds-saludo {{ font-size: 14px; color: #52525B; margin-bottom: 16px; }}
    .ds-nivel {{ font-size: 15px; line-height: 1.6; margin-bottom: 20px; color: #18181B; }}
    .ds-arquetipo {{ background: #F9F9FA; border-radius: 6px; padding: 16px 20px; margin-bottom: 20px; }}
    .ds-arquetipo-titulo {{ font-size: 15px; font-weight: 700; color: #FF6B4A; margin: 0 0 10px 0; }}
    .ds-arquetipo p {{ font-size: 14px; line-height: 1.7; color: #18181B; margin: 0; }}
    .ds-focos {{ margin-bottom: 20px; }}
    .ds-foco {{ border-left: 3px solid {color}; padding-left: 14px; margin-bottom: 14px; }}
    .ds-foco-titulo {{ font-size: 11px; font-weight: 700; color: {color}; margin: 0 0 6px 0; text-transform: uppercase; letter-spacing: 0.5px; }}
    .ds-foco p {{ font-size: 14px; line-height: 1.7; color: #18181B; margin: 0; }}
    .ds-alerta {{ background: #FFF7F5; border: 1px solid #FF6B4A30; border-radius: 6px; padding: 14px 18px; margin-bottom: 20px; }}
    .ds-alerta-titulo {{ font-size: 12px; font-weight: 700; color: #FF6B4A; margin: 0 0 6px 0; }}
    .ds-alerta p {{ font-size: 14px; line-height: 1.7; color: #18181B; margin: 0; }}
    .ds-cierre {{ font-size: 14px; line-height: 1.8; color: #18181B; border-top: 1px solid #E4E4E7; padding-top: 16px; margin-bottom: 24px; }}
  </style>
</head>
<body style="margin:0; padding:0; background-color:#F4F4F5; font-family:Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#F4F4F5;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px; width:100%; background-color:#FFFFFF; border-radius:8px; overflow:hidden;">
          
          <!-- HEADER -->
          <tr>
            <td style="padding:24px; background-color:#FFFFFF;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="font-size:20px; font-weight:700; color:#FF6B4A; letter-spacing:-0.5px;">Sint</td>
                </tr>
                <tr>
                  <td style="font-size:13px; color:#52525B; padding-top:4px;">Diagnóstico Sint · {fecha}</td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- BANDA DE NIVEL -->
          <tr>
            <td style="padding:0 24px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:{color}15; border-left:4px solid {color}; border-radius:0 8px 8px 0;">
                <tr>
                  <td style="padding:16px 20px;">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="font-size:15px; font-weight:600; color:{color};">{emoji} {resultado.nivel_etiqueta}</td>
                      </tr>
                      <tr>
                        <td style="font-size:12px; color:#52525B; padding-top:4px;">SFS {resultado.sfs} / 31.2 · {resultado.arquetipo_nombre}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- GAUGE SFS -->
          <tr>
            <td style="padding:16px 24px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-radius:4px; overflow:hidden; height:8px;">
                <tr>
                  {barra_gauge}
                </tr>
              </table>
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="font-size:12px; color:#52525B; padding-top:6px;">{porcentaje_salud}% de salud operativa</td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- CONTENIDO DEL REPORTE -->
          <tr>
            <td style="padding:0 24px;">
              {reporte_html}
            </td>
          </tr>
          
          <!-- CTA -->
          <tr>
            <td style="padding:24px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center">
                    <a href="{CAL_LINK}" style="display:inline-block; background-color:#FF6B4A; color:#FFFFFF; font-weight:700; font-size:15px; padding:14px 36px; border-radius:6px; text-decoration:none;">Agendar 15 minutos →</a>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="font-size:12px; color:#52525B; padding-top:8px;">Sin compromiso · Reunión de 15 minutos por videollamada</td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- FOOTER -->
          <tr>
            <td style="padding:20px 24px; border-top:1px solid #E4E4E7;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="font-size:13px; font-weight:600; color:#18181B;">Sint</td>
                </tr>
                <tr>
                  <td style="font-size:12px; color:#52525B; padding-top:2px;">Software basado en diagnóstico organizacional</td>
                </tr>
                <tr>
                  <td style="font-size:11px; color:#A1A1AA; padding-top:8px;">Sint utiliza tus respuestas exclusivamente para generar tu diagnóstico. No compartimos tu información con terceros.</td>
                </tr>
              </table>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>"""


def enviar_email(email_destinatario: str, reporte_html: str, resultado: ResultadoScoring) -> bool:
    html_completo = construir_email_html(reporte_html, resultado)
    asunto = ASUNTOS_NIVEL[resultado.nivel]

    try:
        resend.Emails.send({
            "from": "Sint Diagnóstico <diagnostico@sint.cl>",
            "to": [email_destinatario],
            "bcc": [INTERNAL_EMAIL],
            "subject": asunto,
            "html": html_completo,
        })
        return True
    except Exception as e:
        print(f"[email_sender] Error al enviar email: {e}")
        return False
