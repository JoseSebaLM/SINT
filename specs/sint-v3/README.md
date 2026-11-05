# sint.cl v3 · Punto de partida

Esta carpeta reúne la dirección propuesta para la nueva página principal de sint.cl: qué queremos comunicar, el texto sugerido y un plan técnico inicial. Es un punto de partida, no un contrato.

## Cómo llegamos aquí

José trabajó con Claude (noviembre de 2026) todo lo conceptual antes de escribir estos archivos:

- **Comparación de tres versiones de la página:** el sint.cl publicado, un primer prototipo propio y el prototipo que revisó Carlos.
- **Investigación de líderes del rubro en San Francisco:** firmas que construyen IA para empresas (Sierra, Decagon, Distyl, Ode) y líderes de producto (Linear, Vercel, Stripe, Anthropic). Las lecciones están en `spec.md`.
- **Definiciones de Sint:** el propósito, el cambio de "Software Intelligence" a "Sistemas Inteligentes", las líneas de servicio y la oferta.
- **Posicionamiento en búsquedas:** cómo describen hoy a Sint Google y los buscadores con IA, y qué cambiar.

## Paso de batuta

Desde aquí, **Carlos lidera el desarrollo con plena libertad creativa y técnica**: diseño (incluida la paleta de colores, que hoy es muy oscura), estructura, textos, tecnología y forma de trabajo.

Lo único que conviene conversar antes con José son los **cambios importantes en la oferta de servicios**: agregar, quitar o redefinir un servicio.

## Archivos

| Archivo | Qué contiene |
| --- | --- |
| `spec.md` | Qué queremos lograr y por qué, lecciones de referentes y recomendaciones de posicionamiento en Google y en búsqueda con IA |
| `content.md` | Texto propuesto para cada sección, incluidas preguntas frecuentes y datos estructurados |
| `plan.md` | Plan técnico sugerido, para ajustar o reemplazar |

## Forma de trabajo sugerida

Usamos una versión liviana de Spec-Driven Development: estos archivos ayudan a partir con contexto claro, sin frenar a nadie. Algunas sugerencias, todas opcionales:

- Trabajar en el branch `sint_v3` y pasar a `master` cuando esté listo, porque `master` despliega sint.cl automáticamente.
- Actualizar estos archivos cuando cambie algo importante, para que sirvan de memoria del proyecto.

## Mensaje inicial sugerido para Claude Code

```
Lee specs/sint-v3/README.md, spec.md, content.md y plan.md. Son un punto de
partida para la nueva página principal de sint.cl, no un contrato: tienes
libertad para proponer cambios de diseño, estructura, textos y técnica.
Antes de cambiar la oferta de servicios, consulta.

Empieza por resumir lo que entendiste y proponer cómo lo construirías.
```
