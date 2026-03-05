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

ESTRUCTURA DEL REPORTE (genera exactamente esto, con estas clases CSS):

<section class="ds-saludo">
  [Una línea. Dirígete al cargo específico ({payload["P1"]}).]
</section>

<section class="ds-nivel">
  [El nivel y su etiqueta en negrita. Una oración que contextualice qué significa
  este nivel para una empresa de {payload["P2"]} personas en {payload["P3"]}.
  Verde: tono positivo y de oportunidad.
  Ámbar: tono neutro y factual sobre la brecha existente.
  Rojo: tono factual sobre la distribución de la fricción, sin alarmismo.]
</section>

<section class="ds-arquetipo">
  <h3 class="ds-arquetipo-titulo">{resultado.arquetipo_nombre}</h3>
  [Verde: 2 oraciones. Ámbar: 3 oraciones. Rojo: 4 oraciones.
  Describir el patrón operativo específico de ESTA empresa según las respuestas.
  Debe sentirse como si alguien ya estuvo en la empresa. Específico para {payload["P3"]}
  y {payload["P2"]} personas. No repetir la descripción genérica del arquetipo — interpretarla
  con las respuestas concretas del formulario.]
</section>

<section class="ds-focos">
  <div class="ds-foco">
    <h4 class="ds-foco-titulo">{resultado.foco_1_nombre}</h4>
    <p>[Verde: 2 oraciones. Ámbar: 2-3 oraciones. Rojo: 3 oraciones.
    Qué está pasando en esta dimensión según la respuesta del usuario.
    Qué tipo de costo operativo genera: tiempo, decisiones lentas, riesgo.
    No inventar cifras. Nombrar el tipo de impacto, no el monto.]</p>
  </div>
  <div class="ds-foco">
    <h4 class="ds-foco-titulo">{resultado.foco_2_nombre}</h4>
    <p>[Mismo patrón. Si en nivel Rojo los dos focos están relacionados,
    señalar explícitamente esa relación.]</p>
  </div>
</section>

{"" if not resultado.alerta_activa else f"""<section class="ds-alerta">
  <h4 class="ds-alerta-titulo">Observación puntual — {dimension_alerta_nombre}</h4>
  <p>[Verde: 1-2 oraciones, tono de oportunidad de mejora.
  Ámbar: 2 oraciones, señalar relación con el patrón de desalineación.
  Rojo: 2 oraciones, señalar rol de esta dimensión en el patrón sistémico.
  Si la dimensión es D7 o D8, indicar que es el núcleo del problema.]</p>
</section>"""}

<section class="ds-cierre">
  [3-4 oraciones. Mencionar el arquetipo por nombre ({resultado.arquetipo_nombre}) y al menos uno de los focos ({resultado.foco_1_nombre}).
  Terminar con la invitación a la reunión de 15 minutos.
  Sin lenguaje de ventas. El tono es: "sabemos qué está pasando, conversemos."
  Texto de cierre de referencia para nivel {resultado.nivel}:
  {"Una operación en este nivel tiene condiciones para escalar. Las fricciones residuales tienden a amplificarse con el crecimiento si no se abordan antes de que el volumen operativo aumente. En 15 minutos podemos mostrarte exactamente qué está detrás de esas fricciones y qué requeriría resolverlas. Sin presentación de servicios. Sin compromiso." if resultado.nivel == "verde" else
   "El patrón que identifica este diagnóstico es resoluble. Lo que requiere es un diagnóstico más profundo del proceso específico donde la brecha es mayor. Eso es exactamente lo que hacemos en los primeros 15 minutos: identificar dónde está el cuello de botella real y qué implicaría resolverlo. Sin jerga técnica. Sin compromiso." if resultado.nivel == "ambar" else
   "Lo que describe este diagnóstico no es un problema de herramientas — es un problema de arquitectura operativa. La solución requiere primero entender exactamente dónde está el origen de la fricción, antes de proponer cualquier cambio al sistema. En 15 minutos podemos hacer esa primera lectura contigo. Sin diagnóstico previo, sin agenda de ventas. Solo una conversación sobre tu operación real."}]
</section>

EXTENSIÓN TOTAL: entre 250 y 380 palabras. No más.
Palabras prohibidas: ceguera, caos, catastrófico, urgente, alarmante, grave, crítico (como adjetivo de situación)."""


def generar_reporte_html(payload: dict, resultado: ResultadoScoring) -> str:
    client = anthropic.Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))

    system_prompt = """Eres el sistema de diagnóstico automatizado de Sint, una agencia B2B especializada
en resolver fricciones operativas mediante software. Tu función es generar el texto
de un reporte ejecutivo para un directivo que acaba de completar el Diagnóstico Sint.

Tono irrenunciable: objetivo, consultivo, directo. Sin alarmismo, sin descalificación,
sin jerga técnica. Hablas el idioma del directorio: costos, eficiencia, fricción.
Actúas con la rigurosidad de un sociólogo y la frialdad resolutiva de un ingeniero.

Palabras prohibidas: ceguera, caos, catastrófico, urgente, alarmante, grave,
crítico (como adjetivo de situación). Reemplázalas con descripciones factuales
del impacto operativo."""

    message = client.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=1000,
        temperature=0.4,
        system=system_prompt,
        messages=[
            {"role": "user", "content": construir_prompt(payload, resultado)}
        ]
    )

    return message.content[0].text
