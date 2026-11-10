# sint.cl v4 · Misión

Versión definitiva de la página principal de sint.cl para 2027. Se publica **esta semana**.

## La misión en una frase

Convertir el prototipo v3 en un sitio que se vea **profesional**, al nivel de los referentes que José admira (Decagon y Sierra), y que ofrezca **solo lo que Sint puede entregar de verdad** con José, Carlos y un equipo mínimo remoto.

## Quién hace qué

| Quién | Rol |
| --- | --- |
| **José (Seba) Latorre** | Fundador. Aprueba todo sobre la vista previa. Decide la oferta. |
| **Carlos Martínez** | Dirección técnica. Revisa cuando tiene tiempo (2 a 3 h diarias). |
| **Fable 5.2 (esfuerzo alto)** | Planifica: sistema visual (`design.md`) y tareas (`tasks.md`). No escribe código de la aplicación. |
| **Opus 5.5 (esfuerzo medio)** | Ejecuta `tasks.md`, tarea por tarea, con un commit por tarea. |

## Qué leer, en orden

1. `spec.md`: quién hace el trabajo, decisiones, oferta v4, dirección de diseño y confirmaciones pendientes. **Es la fuente de verdad sobre la oferta.**
2. `content.md`: textos propuestos.
3. `plan.md`: punto de partida técnico, límites fijos, entorno y división del trabajo.
4. El código actual en `app/` y la vista previa del prototipo: `https://sint-v3-prototipo.sint-web.pages.dev`.
5. `specs/sint-v3/`, solo como historia.

## Qué cambió desde v3

- **Oferta.** Se ajustó a la capacidad real del equipo. Salen Integración, Modernización y Operación continua como servicio aparte. La línea "Sistemas" pasa a ser "Web y plataformas". SENCE y Alumbra.ai quedan tras interruptores.
- **Diagnóstico.** Ya no se presenta como un paso fijo: el cliente elige la profundidad.
- **Diseño.** De "bonito pero no profesional" a sobrio y profesional, probablemente en tema claro. Interfaces de producto en vez de fotos de banco.
- **`/diagnostico`.** Sale del índice de Google y del menú, pero sigue funcionando.

## Cómo comunicarse con José

- En español, con frases cortas y, de preferencia, en tablas o listas.
- Es nuevo en Linux. Si necesita hacer algo, darle pasos concretos y, cuando se pueda, que solo tenga que usar el navegador.
- Las confirmaciones pendientes se le preguntan **juntas, una sola vez**, mientras se sigue trabajando con los valores por defecto.

## Mensaje para iniciar la sesión de Opus 5.5

Fable lo ajusta al terminar `tasks.md`:

```
Lee specs/sint-v4/README.md, spec.md, plan.md, design.md y tasks.md.
Ejecuta las tareas P0 de tasks.md en orden, en el branch sint_v4, con un
commit por tarea y npm run lint y npm run build limpios en cada una.
Respeta los límites fijos de plan.md. Haz push al terminar cada bloque y,
al final, muéstrame capturas a 375 y 1280 px y el enlace de la vista previa.
```
