# sint.cl v4 · Misión

Versión definitiva de la página principal de sint.cl para 2027. Se publica **esta semana**.

## La misión en una frase

Convertir el prototipo v3 en un sitio que se vea **profesional**, al nivel de los referentes que José admira (Decagon y Sierra), y que ofrezca **solo lo que Sint puede entregar de verdad** con José, Carlos y un equipo mínimo remoto. Todo bajo **Sint. Sistemas Inteligentes** y su propósito: ***Personas y tecnología, trabajando mejor juntas.***

## En la partida, Fable manda

Fable 5.2 lidera esta etapa. Tiene libertad para **investigar, diagnosticar, modificar y preguntar** lo que necesite: el código, estos documentos, el diseño, la tecnología y la forma de trabajo.

Solo tres cosas se consultan antes con José (detalle en `plan.md` §2):

1. Llevar algo a producción (`master`).
2. Cambiar la oferta de servicios o afirmar algo que no esté en `spec.md`.
3. Apagar o borrar infraestructura con costo o datos (Fly.io, `backend/`, Cloudflare).

## Quién hace qué

| Quién | Rol |
| --- | --- |
| **José (Seba) Latorre** | Fundador. Decide la oferta y aprueba sobre la vista previa. |
| **Carlos Martínez** | Dirección técnica. Revisa cuando tiene tiempo (2 a 3 h diarias). |
| **Fable 5.2 (esfuerzo alto)** | Lidera: investiga, diagnostica, decide el diseño y planifica. |
| **Opus 5.5 (esfuerzo medio)** | Escribe el código según lo que Fable deje en `tasks.md`. Fable decide si conviene otra división. |

## Estado al 10 de noviembre de 2026

| Etapa | Estado |
| --- | --- |
| Diseño y plan (Fable) | **Listo:** `design.md`, `tasks.md` y la maqueta `referencia/index.html` |
| Imagen para redes e íconos | **Listos:** `public/og-image.png`, `app/icon.svg`, `app/favicon.ico`, `app/apple-icon.png` |
| Código (Opus) | Pendiente: tareas P0 de `tasks.md` |
| Publicación en `master` | Pendiente: la aprueba José sobre la vista previa |

## Qué leer, en orden

1. `spec.md`: quién hace el trabajo, decisiones de José, oferta v4 y dirección de diseño. **Es la fuente de verdad sobre la oferta.**
2. `content.md`: textos, con los ajustes de Fable marcados.
3. `plan.md`: punto de partida técnico, reglas y entorno.
4. `design.md`: el sistema visual y la composición de cada sección.
5. `tasks.md`: las tareas, en orden.
6. `referencia/`: la maqueta completa (`index.html`), sus capturas y el contenido final (`home.ts`). **Es el modelo que se porta.**
7. `specs/sint-v3/`, solo como historia.

## Qué cambió desde v3

- **Cuatro líneas:** Diagnóstico · Formación · Agentes IA · Plataformas, con 12 servicios.
- **Salen** Integración con ERP y CRM, Modernización de software antiguo y Operación continua como servicio aparte.
- **SENCE activo**, mediante "OTEC asociado", sin nombrar a la OTEC.
- **Sin Alumbra.ai** y **sin filtro de clientes**.
- **Se retira `/diagnostico`:** todo lleva a la agenda o a WhatsApp.
- **Diseño:** de "bonito pero no profesional" a sobrio y profesional. Fable eligió **tema claro** ("papel y tinta"), con dos bandas oscuras; el porqué está en `design.md` §1 y §2.

## Cómo comunicarse con José

- En español, con frases cortas y, de preferencia, en tablas o listas.
- Es nuevo en Linux. Si necesita hacer algo, darle pasos concretos y, cuando se pueda, que solo tenga que usar el navegador.
- Juntar las preguntas en una sola tanda y seguir trabajando mientras responde.

## Mensaje para iniciar la sesión de Opus 5.5

Abrir la sesión en la carpeta `~/Escritorio/SINT/SINT-v4` y pegar:

```
Lee specs/sint-v4/README.md, spec.md, plan.md, design.md y tasks.md, y abre
specs/sint-v4/referencia/index.html y sus capturas: esa maqueta es el modelo.
Ejecuta las tareas P0 de tasks.md en orden (T1 a T13), en el branch sint_v4,
con un commit por tarea y npm run lint y npm run build limpios en cada una.
Copia las clases de la maqueta tal cual; no rediseñes ni cambies textos.
Haz push al terminar cada bloque (A, B, C y D). Nunca hagas push a master ni
abras el pull request. Al final muéstrame capturas a 375 y 1280 px comparadas
con las de referencia, los puntajes de Lighthouse, el enlace de la vista
previa y la lista de dudas.
```
