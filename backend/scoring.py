from dataclasses import dataclass
from typing import Literal

# ── Tipos ──────────────────────────────────────────────────────────────────
Respuesta = Literal["A", "B", "C"]

VALORES: dict[str, int] = {"A": 0, "B": 1, "C": 3}

PESOS: dict[str, float] = {
    "D1": 1.2, "D2": 1.2, "D3": 1.0,
    "D4": 1.4, "D5": 0.8, "D6": 1.6,
    "D7": 1.6, "D8": 1.6,
}

NOMBRES_EJECUTIVOS: dict[str, str] = {
    "D1": "Resiliencia de infraestructura",
    "D2": "Experiencia operativa del equipo con el sistema",
    "D3": "Autonomía operativa del equipo",
    "D4": "Gobernanza tecnológica",
    "D5": "Cultura de mejora continua",
    "D6": "Alineación sistema–proceso",
    "D7": "Dependencia de soluciones alternativas",
    "D8": "Visibilidad operativa de la gerencia",
}

ARQUETIPOS: dict[str, dict] = {
    "ARQ-0": {
        "nombre": "Fricción distribuida",
        "descripcion": "Fricciones moderadas en múltiples dimensiones. Patrón frecuente en organizaciones donde la tecnología no ha escalado al mismo ritmo que el negocio.",
    },
    "ARQ-1": {
        "nombre": "Operación en modo manual",
        "descripcion": "El equipo ha desarrollado circuitos alternativos para compensar lo que el sistema no resuelve, generando costos ocultos difíciles de cuantificar sin un diagnóstico profundo.",
    },
    "ARQ-2": {
        "nombre": "Decisiones con información parcial",
        "descripcion": "La gerencia opera con visibilidad incompleta de la cadena de valor. Las decisiones estratégicas se toman sobre datos que llegan tarde o fragmentados.",
    },
    "ARQ-3": {
        "nombre": "Infraestructura con exposición operativa",
        "descripcion": "Existen condiciones técnicas y culturales que, combinadas, amplían el impacto potencial de un fallo del sistema. La resiliencia operativa requiere atención estructural.",
    },
    "ARQ-4": {
        "nombre": "Sistema con resistencia de adopción",
        "descripcion": "La interfaz tecnológica genera fricción diaria en el equipo: productividad por debajo del potencial, curvas de aprendizaje prolongadas y errores evitables.",
    },
    "ARQ-5": {
        "nombre": "Gobernanza tecnológica difusa",
        "descripcion": "No existe un responsable único y empoderado de la tecnología como activo estratégico. Las decisiones de sistema se toman por inercia o dependencia del proveedor.",
    },
}

DIMENSIONES = ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8"]
DIMENSIONES_ALERTA = ["D4", "D6", "D7", "D8"]

TEXTOS_RESPUESTA: dict[str, dict[str, str]] = {
    "D1": {
        "A": "Se recupera de inmediato, sin pérdida de datos.",
        "B": "Impacto severo: días de inactividad y pérdida parcial de información.",
        "C": "La operación se detiene: sin respaldo ni plan de recuperación activo.",
    },
    "D2": {
        "A": "Fluida: sin pasos innecesarios ni redundancias.",
        "B": "Funcional, pero con fricciones repetitivas.",
        "C": "Rígida: genera fatiga y errores operativos.",
    },
    "D3": {
        "A": "Independiente: resuelven sin asistencia.",
        "B": "Requieren validación o ayuda ocasional.",
        "C": "Dependen de soporte técnico o supervisión constante.",
    },
    "D4": {
        "A": "Un rol directivo único y claramente definido.",
        "B": "Un comité: proceso con múltiples aprobaciones.",
        "C": "Nadie está claramente a cargo, o dependemos del proveedor.",
    },
    "D5": {
        "A": "Se reporta y documenta de inmediato.",
        "B": "Se resuelve en silencio, sin registro.",
        "C": "Se oculta por miedo a represalias o burocracia.",
    },
    "D6": {
        "A": "Sí: hay sintonía total entre el sistema y el negocio.",
        "B": "Parcialmente: hay desviaciones relevantes.",
        "C": "No: el sistema dicta cómo trabajar y entorpece el flujo.",
    },
    "D7": {
        "A": "Nunca: el sistema cubre todo.",
        "B": "Ocasionalmente.",
        "C": "Siempre: es parte de la rutina diaria.",
    },
    "D8": {
        "A": "Total y en tiempo real.",
        "B": "Parcial: basada en reportes manuales o parciales.",
        "C": "Nula: no tenemos visibilidad sobre lo que ocurre entre áreas.",
    },
}


@dataclass
class ResultadoScoring:
    sfs: float
    nivel: str          # "verde" | "ambar" | "rojo"
    nivel_etiqueta: str
    arquetipo_id: str
    arquetipo_nombre: str
    arquetipo_descripcion: str
    foco_1_id: str
    foco_1_nombre: str
    foco_1_score: float
    foco_2_id: str
    foco_2_nombre: str
    foco_2_score: float
    alerta_activa: bool
    dimension_alerta: str | None
    scores_ponderados: dict[str, float]
    respuestas_texto: dict[str, str]


def calcular_scoring(respuestas: dict[str, str]) -> ResultadoScoring:
    # ── SFS ────────────────────────────────────────────────────────────────
    scores_ponderados: dict[str, float] = {}
    sfs = 0.0
    for dim in DIMENSIONES:
        score = VALORES[respuestas[dim]] * PESOS[dim]
        scores_ponderados[dim] = round(score, 2)
        sfs += score
    sfs = round(sfs, 1)

    # ── Nivel ──────────────────────────────────────────────────────────────
    if sfs < 10:
        nivel, nivel_etiqueta = "verde", "Operación con fricciones residuales"
    elif sfs < 20:
        nivel, nivel_etiqueta = "ambar", "Desalineación operativa activa"
    else:
        nivel, nivel_etiqueta = "rojo", "Fricción sistémica con impacto en resultados"

    # ── Focos (top 2) ──────────────────────────────────────────────────────
    focos = sorted(scores_ponderados.items(), key=lambda x: x[1], reverse=True)[:2]
    foco_1_id, foco_1_score = focos[0]
    foco_2_id, foco_2_score = focos[1]

    # ── Alerta ────────────────────────────────────────────────────────────
    dims_con_c = [d for d in DIMENSIONES_ALERTA if respuestas[d] == "C"]
    alerta_activa = len(dims_con_c) > 0
    dimension_alerta = None
    if alerta_activa:
        dimension_alerta = max(dims_con_c, key=lambda d: scores_ponderados[d])

    # ── Arquetipo ─────────────────────────────────────────────────────────
    sp = scores_ponderados
    v = {d: VALORES[respuestas[d]] for d in DIMENSIONES}

    if sp["D8"] >= 3.2 and sp["D4"] >= 1.4:
        arq_id = "ARQ-2"
    elif sp["D6"] >= 1.6 and v["D7"] == 3:
        arq_id = "ARQ-1"
    elif v["D4"] == 3 and v["D5"] >= 1:
        arq_id = "ARQ-5"
    elif v["D2"] >= 2 and v["D3"] >= 2:
        arq_id = "ARQ-4"
    elif v["D1"] == 3 and v["D5"] >= 1:
        arq_id = "ARQ-3"
    else:
        arq_id = "ARQ-0"

    # ── Textos de respuesta ───────────────────────────────────────────────
    respuestas_texto = {
        dim: TEXTOS_RESPUESTA[dim][respuestas[dim]]
        for dim in DIMENSIONES
    }

    return ResultadoScoring(
        sfs=sfs,
        nivel=nivel,
        nivel_etiqueta=nivel_etiqueta,
        arquetipo_id=arq_id,
        arquetipo_nombre=ARQUETIPOS[arq_id]["nombre"],
        arquetipo_descripcion=ARQUETIPOS[arq_id]["descripcion"],
        foco_1_id=foco_1_id,
        foco_1_nombre=NOMBRES_EJECUTIVOS[foco_1_id],
        foco_1_score=foco_1_score,
        foco_2_id=foco_2_id,
        foco_2_nombre=NOMBRES_EJECUTIVOS[foco_2_id],
        foco_2_score=foco_2_score,
        alerta_activa=alerta_activa,
        dimension_alerta=dimension_alerta,
        scores_ponderados=scores_ponderados,
        respuestas_texto=respuestas_texto,
    )
