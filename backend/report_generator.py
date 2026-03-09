import anthropic
import os
from scoring import ResultadoScoring

NOMBRES_EJECUTIVOS = {
    "D1": "Resiliencia de infraestructura",
    "D2": "Experiencia operativa del equipo con el sistema",
    "D3": "Autonomía operativa del equipo",
    "D4": "Gobernanza tecnológica",
    "D5": "Cultura de mejora continua",
    "D6": "Alineación sistema–proceso",
    "D7": "Dependencia de soluciones alternativas",
    "D8": "Visibilidad operativa de la gerencia",
}


def construir_prompt(payload: dict, resultado: ResultadoScoring) -> str:
    dimension_alerta_nombre = (
        NOMBRES_EJECUTIVOS.get(resultado.dimension_alerta, resultado.dimension_alerta)
        if resultado.dimension_alerta
        else "N/A"
    )

    cierres = {
        "verde": (
            "El patrón que sugieren tus respuestas tiene condiciones para mejorar antes "
            "de que el crecimiento lo amplifique. En 15 minutos podemos mostrarte qué está "
            "detrás de las señales que identificamos y qué requeriría resolverlas. "
            "Sin presentación de servicios. Sin compromiso."
        ),
        "ambar": (
            "El patrón que sugieren estas respuestas tiene solución — pero requiere entender "
            "primero dónde está exactamente el punto de mayor desgaste, antes de proponer "
            "cualquier cambio. Eso es lo que hacemos en los primeros 15 minutos: identificar "
            "el origen, no los síntomas. Sin jerga técnica. Sin compromiso."
        ),
        "rojo": (
            "Lo que sugiere este diagnóstico no se resuelve cambiando una herramienta. "
            "Requiere entender primero cómo está organizada la operación real y dónde está "
            "el origen de las señales que vemos. En 15 minutos podemos hacer esa primera "
            "lectura contigo. Sin agenda de ventas. Solo una conversación sobre lo que está pasando."
        ),
    }
    cierre_base = cierres[resultado.nivel]

    seccion_alerta = ""
    if resultado.alerta_activa:
        seccion_alerta = (
            '<section class="ds-alerta">\n'
            f'  <h4 class="ds-alerta-titulo">Algo que vale la pena nombrar — {dimension_alerta_nombre}</h4>\n'
            '  <p>[1-2 oraciones. Cita la respuesta específica.\n'
            '  Explica por qué llama la atención en el contexto de las otras respuestas.\n'
            '  Tono: observación honesta, no alarma.]</p>\n'
            '</section>'
        )

    return f"""Genera el reporte ejecutivo del Diagnóstico Sint para la siguiente empresa.
Devuelve ÚNICAMENTE el HTML solicitado. Sin explicaciones, sin markdown, sin
bloques de código. Solo el HTML limpio con las clases especificadas.

PERFIL DE LA EMPRESA:
- Cargo del respondente: {payload["P1"]}
- Tamaño de la empresa: {payload["P2"]} personas
- Industria: {payload["P3"]}
- Score de Fricción Sociotécnica (SFS): {resultado.sfs} / 31.2
- Nivel de diagnóstico: {resultado.nivel_etiqueta}
- Arquetipo diagnóstico: {resultado.arquetipo_nombre}
- Descripción del arquetipo: {resultado.arquetipo_descripcion}
- Foco de Fricción #1: {resultado.foco_1_nombre} (score ponderado: {resultado.foco_1_score})
- Foco de Fricción #2: {resultado.foco_2_nombre} (score ponderado: {resultado.foco_2_score})
- Alerta activa: {str(resultado.alerta_activa).lower()}
- Dimensión en alerta: {dimension_alerta_nombre}

RESPUESTAS COMPLETAS:
- D1 Resiliencia de infraestructura: {resultado.respuestas_texto["D1"]}
- D2 Experiencia operativa con el sistema: {resultado.respuestas_texto["D2"]}
- D3 Autonomía operativa del equipo: {resultado.respuestas_texto["D3"]}
- D4 Gobernanza tecnológica: {resultado.respuestas_texto["D4"]}
- D5 Cultura de mejora continua: {resultado.respuestas_texto["D5"]}
- D6 Alineación sistema–proceso: {resultado.respuestas_texto["D6"]}
- D7 Dependencia de soluciones alternativas: {resultado.respuestas_texto["D7"]}
- D8 Visibilidad operativa de la gerencia: {resultado.respuestas_texto["D8"]}

ESTRUCTURA DEL REPORTE (genera estas secciones con estas clases CSS):

<section class="ds-saludo">
  [Una línea. Dirígete directamente a {payload["P1"]}.
  Tono directo y cálido, no burocrático.
  Ejemplo de registro correcto: "Este informe es para ti, como [cargo]."]
</section>

<section class="ds-nivel">
  [2-3 oraciones. Sin términos técnicos de Sint.
  Explica el nivel en lenguaje de operaciones y negocio.
  Contextualiza para {payload["P2"]} personas en {payload["P3"]}.
  Verde: la operación funciona bien, hay señales menores que vale la pena revisar.
  Ámbar: hay una brecha entre cómo debería funcionar y cómo funciona hoy,
         y esa brecha tiene un costo que no siempre aparece en los reportes.
  Rojo: varias respuestas apuntan en la misma dirección,
        algo está costando más de lo que debería en tiempo y en personas.]
</section>

<section class="ds-arquetipo">
  <h3 class="ds-arquetipo-titulo">{resultado.arquetipo_nombre}</h3>
  [Verde: 2 oraciones. Ámbar: 3 oraciones. Rojo: 4 oraciones.
  Cita 2-3 respuestas específicas del formulario que originan este patrón.
  Formato de cita: "Indicaste que [respuesta textual]".
  Luego describe el patrón en lenguaje cotidiano con un ejemplo reconocible
  del mundo de {payload["P3"]}.
  No uses el nombre técnico del arquetipo para explicarlo — tradúcelo a situaciones reales.]
</section>

INSTRUCCIÓN PARA LOS TÍTULOS DE FOCOS:
No uses el nombre técnico de la dimensión como título.
Tradúcelo a una frase corta en lenguaje cotidiano que describa el síntoma,
no el concepto. Ejemplos:
- "Alineación sistema–proceso" → "El sistema y el equipo no hablan el mismo idioma"
- "Dependencia de soluciones alternativas" → "El equipo resuelve por fuera del sistema"
- "Visibilidad operativa de la gerencia" → "La gerencia decide con información incompleta"
- "Gobernanza tecnológica" → "Nadie tiene autoridad clara sobre el sistema"
- "Resiliencia de infraestructura" → "Qué pasa si el sistema falla hoy"
- "Autonomía operativa del equipo" → "El equipo depende de ayuda para operar"
- "Cultura de mejora continua" → "Los problemas se resuelven en silencio"
- "Experiencia operativa del equipo con el sistema" → "Trabajar con el sistema cuesta más de lo que debería"

<section class="ds-focos">
  <div class="ds-foco">
    <h4 class="ds-foco-titulo">[Título en lenguaje operacional para {resultado.foco_1_nombre}]</h4>
    <p>[Verde: 2 oraciones. Ámbar: 2-3 oraciones. Rojo: 3 oraciones.
    Primero: cita la respuesta específica que activa esta señal.
    Luego: nombra el impacto en el negocio Y en las personas del equipo.
    Párrafos cortos. Máximo 3 oraciones seguidas.]</p>
  </div>
  <div class="ds-foco">
    <h4 class="ds-foco-titulo">[Título en lenguaje operacional para {resultado.foco_2_nombre}]</h4>
    <p>[Mismo patrón. Si los dos focos están relacionados,
    explica la relación en una oración simple.]</p>
  </div>
</section>

{seccion_alerta}

<section class="ds-cierre">
  [3-4 oraciones. Menciona el patrón ({resultado.arquetipo_nombre})
  y al menos una señal ({resultado.foco_1_nombre}).
  Tono: "esto es lo que vimos — si resuena, conversemos."
  Usa este texto base adaptándolo al perfil:
  {cierre_base}]
</section>

EXTENSIÓN TOTAL: entre 220 y 320 palabras.
Formato: negritas en la frase clave de cada sección. Párrafos de máximo 3 oraciones.
Prohibido sin traducir: fricción · sociotécnico · workaround · arquitectura operativa.
Prohibido: ceguera · caos · catastrófico · urgente · alarmante · grave · crítico."""


def generar_reporte_html(payload: dict, resultado: ResultadoScoring) -> str:
    client = anthropic.Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))

    system_prompt = """Eres el sistema de reporte del Diagnóstico Sint.

Tu función es escribir un informe ejecutivo breve para quien acaba de responder
el Diagnóstico Sint — 8 preguntas sobre cómo funciona su operación.

PRINCIPIO CENTRAL:
Tienes 8 respuestas de opción múltiple de una sola persona. Es una señal,
no una radiografía completa de la empresa. Nunca afirmes lo que no puedes
saber con certeza. Usa: "tus respuestas sugieren", "esto puede indicar",
"en operaciones similares esto suele verse como".

LENGUAJE:
Habla como habla tu audiencia: CEOs, COOs y CTOs chilenos.
Su lenguaje es: tiempo, plata, personas, decisiones, equipos, procesos.
Si usas un término técnico, tradúcelo de inmediato con un ejemplo concreto
de la vida laboral cotidiana.
Nunca uses sin traducir: fricción, sociotécnico, workaround,
arquitectura operativa, gobernanza tecnológica, alineación sistema-proceso.

TONO:
Directo. Respetuoso. Sin alarmismo. Sin lenguaje de ventas.
Serviciales, no arrogantes. Sint no presume saber más de lo que sabe.

DOBLE IMPACTO — nombra siempre los dos:
1. Impacto en el negocio: tiempo, decisiones lentas, costos ocultos, riesgo.
2. Impacto en las personas: desgaste, trabajo duplicado, frustración evitable.

Palabras prohibidas: ceguera, caos, catastrófico, urgente, alarmante,
grave, crítico (como adjetivo de situación)."""

    message = client.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=1500,
        temperature=0.4,
        system=system_prompt,
        messages=[
            {"role": "user", "content": construir_prompt(payload, resultado)}
        ]
    )

    return message.content[0].text
