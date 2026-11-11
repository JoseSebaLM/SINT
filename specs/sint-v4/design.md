# sint.cl v4 · Diseño

10 de noviembre de 2026 · Fable 5.2. Define cómo se ve y cómo se arma la página. La oferta sigue mandando desde `spec.md`.

**La referencia visual es `referencia/index.html`.** Es la página completa, maquetada con Tailwind y con los textos finales. Este documento explica las reglas; si este documento y la maqueta se contradicen, **manda la maqueta**.

| Archivo | Qué es |
| --- | --- |
| `referencia/index.html` | Maqueta completa. Sus clases de Tailwind se copian tal cual a los componentes. Con `?estatico` se ve sin animaciones |
| `referencia/capturas/escritorio-1280.png` · `celular-375.png` | Capturas de la maqueta. Son el objetivo visual de cada sección |
| `referencia/home.ts` | Contenido final. La tarea T3 lo mueve a `app/content/home.ts` |
| `referencia/og.html` | Fuente de `public/og-image.png` (ya generada) |

Para abrir la maqueta: doble clic en `specs/sint-v4/referencia/index.html` (necesita internet: carga Tailwind, las tipografías y los íconos desde un CDN; el sitio real no usa CDN).

---

## 1. Diagnóstico del prototipo v3

José lo ve "bonito, pero no profesional". Estas son las causas y lo que cambia.

| Lo que pasa en v3 | Por qué se ve poco profesional | Decisión en v4 |
| --- | --- | --- |
| Fondo negro con cuatro acentos (naranja, morado, verde, ámbar) | Es el aspecto de plantilla de "sitio de IA"; los colores no significan nada | Tema claro. Un solo acento (naranja). Verde solo para estados |
| Foto de banco oscurecida en la portada | No muestra nada de lo que Sint hace | Sin fotos. La portada muestra las cuatro líneas con una viñeta de producto cada una |
| Unas 25 tarjetas iguales con borde, ícono naranja y texto gris de 14 px | Todo pesa lo mismo: no hay jerarquía ni ritmo | Listas con líneas finas. Las tarjetas quedan solo para la portada y las interfaces de ejemplo |
| Titulares en negrita de 36 a 60 px, etiquetas en mayúsculas monoespaciadas | Tipografía tímida y con tics de plantilla | Titulares de 38 a 72 px, peso 600, interletrado negativo. Etiquetas en texto normal |
| Ejemplos chicos, a un costado; diagrama SVG con líneas que se mueven sin parar | El "producto" se ve como adorno | Un ejemplo grande por línea, sobre un fondo propio, con una secuencia breve que ocurre una vez |
| Tres líneas más un bloque aparte para el diagnóstico | No calza con la oferta v4 | Cuatro líneas con la misma estructura. El diagnóstico es la línea 01 |
| Botones rectangulares naranjas y burbuja flotante de WhatsApp | Compiten entre sí | Botón principal oscuro, en píldora. "Conversemos" siempre visible en el encabezado. Sin burbuja |

## 2. Dirección: papel y tinta

- **Tema claro.** Los dos referentes de José (Decagon y Sierra) son claros. El claro deja que los ejemplos se lean como documentos e interfaces reales y se aleja del aspecto "plantilla de IA" del v3. Es además el código más habitual de consultoría y formación en Chile.
- **El oscuro no desaparece:** queda en dos bandas (Evidencia y Cierre), que dan ritmo y son el único lugar donde el naranja se usa grande.
- **El naranja `#FF6B4A` sigue siendo la marca,** pero escaso: el guion del logo, la cifra "Solo 9%", el botón del cierre y pequeños detalles de los ejemplos.
- **Pocas cosas por pantalla, tipografía grande, líneas finas en vez de cajas.**
- **El producto como imagen:** informe, programa de taller, conversación y respuesta de un asistente de IA. Siempre con la etiqueta "Ejemplo".

## 3. Tokens

> **Cambio del 11 de noviembre de 2026:** José eligió la paleta C de Carlos ("blanco y verde") para alejarse del marfil con coral. Los valores vigentes están en `app/globals.css`: fondo blanco, tinta `#111214`, acento verde Sint `#2EB886` (texto `#157A56`) y el naranja `#FF6B4A` solo en el guion del logo (token `brand`). La tabla de abajo es la paleta original "papel y tinta", solo historia; las reglas de uso siguen iguales.

Se definen como variables CSS en `app/globals.css` y se exponen en `tailwind.config.ts`. **En los componentes no se escribe ningún color en hexadecimal.** (Única excepción: los dos tonos de `hover` de los botones, que viven en `globals.css`.)

| Token | Hex | Uso | Contraste |
| --- | --- | --- | --- |
| `paper` | `#FAF9F6` | Fondo de la página | |
| `paper-2` | `#F3F1EC` | Fondo de los ejemplos (`.stage`) y de la banda "Cómo trabajamos" | |
| `surface` | `#FFFFFF` | Tarjetas e interfaces de ejemplo | |
| `ink` | `#16140F` | Texto principal, botón principal, bandas oscuras | 17,5:1 sobre `paper` |
| `ink-2` | `#55514A` | Texto secundario | 7,5:1 |
| `ink-3` | `#6B665D` | Texto terciario, etiquetas, numeración | 5,4:1 (5,1:1 sobre `paper-2`) |
| `line` | `#E6E2DA` | Líneas finas y bordes de tarjetas | |
| `line-2` | `#D5D0C6` | Bordes de controles (botón secundario, subrayados) | |
| `accent` | `#FF6B4A` | Naranja Sint. Rellenos y gráficos. **Nunca como texto sobre claro** (2,7:1) | 6,5:1 sobre `ink` |
| `accent-ink` | `#B8371A` | Naranja para texto sobre claro: antetítulos, cargos, numeración de listas | 5,2:1 sobre `paper-2` |
| `accent-soft` | `#FFE9E2` | Fondo suave de acento (ícono de documento, etiqueta SENCE) | |
| `ok` | `#1B7A4B` | Solo estados: "en línea" y anillos de indicadores | 5,3:1 sobre blanco |
| `on-night` | `#F5F3EE` | Texto sobre `ink` | 16,6:1 |
| `on-night-2` | `#A8A39A` | Texto secundario sobre `ink` | 7,3:1 |
| `line-night` | `#34312B` | Líneas sobre `ink` | |

`tailwind.config.ts` (reemplaza los colores v2; `content` queda solo con `./app/**/*.{ts,tsx}`):

```ts
import type { Config } from "tailwindcss";

const c = (v: string) => `rgb(var(--${v}) / <alpha-value>)`;

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: c("paper"), "paper-2": c("paper-2"), surface: c("surface"),
        ink: c("ink"), "ink-2": c("ink-2"), "ink-3": c("ink-3"),
        line: c("line"), "line-2": c("line-2"),
        accent: c("accent"), "accent-ink": c("accent-ink"), "accent-soft": c("accent-soft"),
        ok: c("ok"),
        "on-night": c("on-night"), "on-night-2": c("on-night-2"), "line-night": c("line-night"),
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        card: "0 1px 2px rgb(22 20 15 / 0.04), 0 8px 24px -6px rgb(22 20 15 / 0.08)",
        float: "0 2px 4px rgb(22 20 15 / 0.04), 0 24px 48px -12px rgb(22 20 15 / 0.16)",
      },
    },
  },
  plugins: [],
};
export default config;
```

`app/globals.css`: las tres directivas `@tailwind` y, a continuación, **todo el contenido de `<style type="text/tailwindcss">` de la maqueta**, sin las dos líneas `--font-sans` y `--font-mono` (en el sitio las define `next/font`).

## 4. Tipografía

Dos familias, las mismas de siempre, cargadas con `next/font/google` (se sirven desde el propio sitio):

```ts
const sans = Inter({ subsets: ["latin"], axes: ["opsz"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });
// <html lang="es-CL" className={`${sans.variable} ${mono.variable}`}>
```

- **Inter con eje óptico (`opsz`).** Es lo que hace que los titulares grandes se vean finos y compactos, como en la maqueta. Si `axes: ["opsz"]` diera error al compilar, se quita y se sigue: el cambio es sutil.
- **JetBrains Mono solo para:** el logo `sint_`, la numeración `01`–`04` (clase `.index`) y `tusitio.cl`. Nada más. Se acabaron las etiquetas monoespaciadas en mayúsculas.

| Clase | Celular | Escritorio | Peso · interletrado | Uso |
| --- | --- | --- | --- | --- |
| `.h-display` | 38 px / 1,05 | 56 px (sm) · 72 px (lg) / 1,02 | 600 · −0,035em | Solo el `h1` |
| `.h-section` | 30 px / 1,1 | 44 px / 1,08 | 600 · −0,03em | `h2` de cada sección |
| `.h-line` | 28 px / 1,1 | 36 px | 600 · −0,025em | Nombre de cada línea (`h3`) |
| `.lead` | 17 px / 1,625 | 20 px | 400 · color `ink-2` | Bajadas |
| cuerpo | 15 px (`text-[0.9375rem]`) a 16 px / 1,625 | igual | 400 · `ink-2` | Descripciones |
| `.eyebrow` | 14 px | 14 px | 500 · `accent-ink` | Antetítulos, sin mayúsculas |
| `.index` | 13 px mono | 13 px | 400 · `ink-3` | Numeración |

Los títulos de servicios, pasos y preguntas van en peso 500 (`font-medium`), no en negrita. El 600 se reserva para titulares.

## 5. Espacio, grilla y formas

- **Contenedor:** `.container-page` = ancho máximo de 1200 px, con 20 px de margen lateral en celular y 32 px desde 640 px.
- **Grilla:** 12 columnas desde `lg` (1024 px), separación de 48 px. En Servicios: texto 5 columnas, ejemplo 7. Bajo `lg`, todo en una columna.
- **Aire entre secciones:** 80 px en celular, 112 a 128 px en escritorio (`py-20 md:py-28`).
- **Bandas** (Evidencia, Cómo trabajamos, Cierre): bloque de ancho máximo 1440 px con 8 a 16 px de margen lateral y esquinas de 28 a 32 px.
- **Radios:** botones y etiquetas en píldora (`rounded-full`); tarjetas e interfaces 16 px (`rounded-2xl`); `.stage` 24 px (`rounded-3xl`).
- **Sombras:** `shadow-float` solo en las interfaces de ejemplo (`.mock`); `shadow-card` solo al pasar el cursor sobre las tarjetas de la portada. Nada más lleva sombra.
- **Líneas:** `border-line` de 1 px separa servicios, preguntas y bloques. La línea superior de los pasos de "Cómo trabajamos" va en `ink`.

## 6. Componentes

| Componente | Clases | Notas |
| --- | --- | --- |
| Botón principal | `.btn .btn-primary` | Fondo `ink`, texto blanco. Siempre lleva a la agenda |
| Botón secundario | `.btn .btn-secondary` | Blanco con borde. WhatsApp, con su ícono |
| Botón del cierre | `.btn .btn-accent` · `.btn .btn-night` | Solo dentro de la banda oscura del cierre |
| Botón del encabezado | agrega `.btn-sm` | 40 px de alto |
| Enlace con flecha | `.link-arrow` | Al final de cada línea de servicio y en LinkedIn |
| Encabezado de sección | `.eyebrow` + `.h-section` + `.lead` | Alineado a la izquierda, ancho máximo `max-w-3xl` |
| Marco de ejemplo | `.stage` + `.stage-label` + `.tag-ejemplo` + `.mock` | `<figure>` con `<figcaption>`. La etiqueta "Ejemplo" va siempre |
| Íconos | `lucide-react`, `strokeWidth={1.75}`, `aria-hidden` | 20 px en listas, 24 px en "Por qué Sint". Color `ink`; sin cajas de color alrededor |
| Logo | `font-mono font-medium` + guion `text-accent` | El guion parpadea tres veces al cargar y descansa (`.logo-cursor`). En el pie, sin parpadeo |

Todos los enlaces externos (agenda, WhatsApp, LinkedIn, fuente) llevan `target="_blank" rel="noopener noreferrer"`.

## 7. Composición de la página

Orden: Encabezado → Portada → Evidencia → Servicios (4 líneas) → Por qué Sint → Cómo trabajamos → Equipo → Preguntas → Cierre → Pie.

| Sección | Celular (375) | Escritorio (1280) |
| --- | --- | --- |
| **Encabezado** | Fijo arriba (`sticky`), translúcido. Logo, "Conversemos" y menú | Logo, cuatro enlaces y "Conversemos" |
| **Portada** | Antetítulo, `h1`, bajada, dos botones apilados y las cuatro líneas en una grilla de 2 × 2 **sin viñeta** (número y nombre). Todo cabe en la primera pantalla | `h1` en dos líneas a 72 px. Las cuatro líneas en una fila de tarjetas: número, nombre, viñeta y frase. Los cuatro nombres se ven sin desplazarse incluso con 650 px de alto |
| **Evidencia** | Banda oscura. "Solo 9%" a 72 px, barra de 9 de 100 y tres cifras en lista | Dos columnas: la cifra a 112 px a la izquierda; las tres cifras a la derecha, alineadas abajo |
| **Servicios** | Por línea: número, nombre, frase, lista de servicios, enlace y, debajo, el ejemplo | Por línea: texto a la izquierda (5 columnas) y ejemplo a la derecha (7), que acompaña el desplazamiento (`lg:sticky lg:top-24`) |
| **Por qué Sint** | Título y tres bloques apilados | Título a la izquierda (4 columnas) y tres columnas a la derecha |
| **Cómo trabajamos** | Banda `paper-2`. Cuatro pasos apilados y garantías en una tarjeta blanca | Cuatro pasos en fila; garantías en tres columnas |
| **Equipo** | Foto de 112 px sobre el texto | Dos columnas; foto de 160 px a la izquierda de cada texto |
| **Preguntas** | Título y lista plegable (`<details>`). La primera pregunta va abierta | Título a la izquierda (4 columnas), lista a la derecha (8) |
| **Cierre** | Banda oscura, botones apilados | Titular a 60 px; botón naranja y botón con borde |
| **Pie** | Una columna | Tres columnas (6 · 3 · 3) |

Decisiones que conviene no perder al portar:

- **La portada no usa imagen.** El `h1` es el elemento más grande de la primera pantalla y no lleva animación de entrada: así se pinta de inmediato.
- **Las tarjetas de la portada son enlaces** a `#diagnostico`, `#formacion`, `#agentes` y `#plataformas`. Sus viñetas son decorativas (`aria-hidden`) y se ocultan bajo 640 px.
- **Los títulos:** un solo `h1`; `h2` por sección; `h3` para líneas, pasos, personas y preguntas; `h4` para cada servicio.
- **Se elimina `WhatsAppFloat`.** WhatsApp queda en la portada, el cierre y el pie.

## 8. Ejemplos visuales

Uno por línea, todos dentro de `.stage` con la etiqueta "Ejemplo". Los datos están en `ejemplos` de `home.ts`.

| Línea | Componente | Qué muestra |
| --- | --- | --- |
| Diagnóstico | `ejemplos/Informe.tsx` | Informe de punto de partida: nivel por dimensión (en palabras, con tres tramos que lo refuerzan) y tres oportunidades priorizadas |
| Formación | `ejemplos/Programa.tsx` (nuevo) | Programa de un taller: cuatro módulos (dos hechos, uno en curso, uno pendiente), etiqueta "Franquicia SENCE". **Sin horas, fechas ni precios** |
| Agentes IA | `ejemplos/Conversacion.tsx` | Conversación de cuatro mensajes con un adjunto. El cliente en `ink`, el asistente en blanco |
| Plataformas | `ejemplos/Buscador.tsx` (nuevo, reemplaza a `Integracion.tsx`) | Pregunta "¿Qué hace Tu organización?", respuesta con barras grises donde irían los datos de cada cliente, fuente `tusitio.cl` y cuatro indicadores (98 · 100 · 100 · 100). No imita a ningún buscador ni asistente real |

Los anillos de los indicadores son un `<svg viewBox="0 0 36 36">` con `r="15.915"`: así la circunferencia mide 100 y `stroke-dashoffset = 100 − puntaje`.

## 9. Movimiento

Movimiento con intención: mostrar algo funcionando, una sola vez.

| Qué | Cómo |
| --- | --- |
| Cursor del logo | Parpadea tres veces al cargar (`.logo-cursor`) |
| Ejemplos de Servicios | Al entrar en pantalla se reproducen una vez: los mensajes aparecen uno tras otro (0,9 s entre cada uno), las barras del informe se llenan, los módulos del taller aparecen en orden y los anillos se dibujan |
| Tarjetas, botones y enlaces | Solo transición de color o sombra al pasar el cursor (200 a 300 ms) |

Mecánica (ya escrita en la maqueta):

- Las clases `.seq`, `.seq-bar` y `.seq-ring` marcan qué se anima; `--i` define el orden y `--step` el intervalo.
- **Por defecto todo está en su estado final.** Un componente de cliente, `Secuencia`, pone `data-seq="wait"` al montar y `data-seq="run"` cuando el ejemplo entra en pantalla (`IntersectionObserver`, umbral 0,35). Sin JavaScript, la página se ve completa.
- Con `prefers-reduced-motion: reduce`, `Secuencia` no hace nada y el CSS anula animaciones y transiciones.
- Solo se animan `opacity`, `transform` y `stroke-dashoffset`: nada mueve el diseño (sin saltos de contenido).
- No hay animaciones en bucle en ninguna parte.

## 10. Accesibilidad y rendimiento

- Contraste AA verificado para todos los pares de la tabla de tokens. No usar `ink-3` sobre `accent-soft` ni `accent` como texto sobre claro.
- Foco visible: contorno de 2 px en `ink` (naranja dentro de `.night`). Enlace "Saltar al contenido" al inicio.
- Áreas táctiles de 44 px o más en botones y en el botón de menú.
- Sin desplazamiento horizontal a 375 px (revisar sobre todo los ejemplos).
- Todo es componente de servidor, salvo `Navbar` (menú) y `Secuencia`. Sin `framer-motion`.
- Sin imágenes en la primera pantalla. Las fotos del equipo van con `loading="lazy"` y tamaño declarado.
- Meta: Lighthouse móvil 90 o más en rendimiento y 100 en accesibilidad, buenas prácticas y SEO.

## 11. Estructura de archivos al terminar

```
app/
├── layout.tsx              fuentes, metadatos, themeColor #FAF9F6
├── page.tsx                orden de las secciones + JSON-LD
├── globals.css             tokens y clases de la maqueta
├── icon.svg · favicon.ico · apple-icon.png    (ya actualizados)
├── content/home.ts         textos (viene de referencia/home.ts)
├── content/schema.ts       JSON-LD derivado de home.ts
├── components/
│   ├── Logo.tsx
│   ├── ui.tsx              WhatsAppIcon, AgendaButton, WhatsAppButton, SectionHeader, Stage, Mock
│   ├── Secuencia.tsx       cliente: activa las animaciones al entrar en pantalla
│   └── ejemplos/           Informe · Programa · Conversacion · Buscador
└── sections/               Navbar · Hero · Evidencia · Servicios · PorQue · Metodo · Equipo · Faq · Cierre · Footer
public/
├── _redirects              /diagnostico → /
├── og-image.png            (ya actualizada)
└── images/equipo/*.webp
```

Se eliminan: `app/diagnostico/`, `sections/Diagnostico.tsx`, `ejemplos/Integracion.tsx`, `components/WhatsAppFloat.tsx` y `public/images/hero-*.webp`.

## 12. Cambios de texto respecto de `content.md`

Fable ajustó redacción, no oferta. `content.md` ya está actualizado con esto:

| Dónde | Cambio | Por qué |
| --- | --- | --- |
| Cómo trabajamos, título | "Del diagnóstico a la operación." → **"De la primera conversación a la operación."** | El diagnóstico ya no es obligatorio; el título antiguo decía lo contrario |
| Evidencia | Antetítulo nuevo: "La IA en las empresas chilenas" | Da contexto a las cifras |
| Formación | Ejemplo visual nuevo: programa de un taller | Las cuatro líneas quedan con ejemplo; antes Formación no tenía |
| Plataformas, ejemplo | Texto de la respuesta con barras en vez de datos inventados | No inventar nada |
| Servicios | Enlace al final de cada línea ("Conversemos sobre un diagnóstico", etc.) | Cada línea es una puerta de entrada directa |
| Portada | Frases cortas en las tarjetas de Formación, Agentes IA y Plataformas | Caben en una tarjeta |
| Equipo | Enlace al LinkedIn de Carlos, igual que el de José | Confirmado por José el 10 de noviembre |
| Pie | Enlace al LinkedIn de Sint en "Contacto" | Confirmado por José el 10 de noviembre |

**Criterio de José (10 de noviembre): la página da seguridad.** No se explica cómo se arma el equipo de cada proyecto ni que se suman personas por encargo o en remoto. Se descartó la nota que lo decía bajo el equipo. Ante la duda entre ser más transparente o verse más sólido, se consulta a José.

**Cifras de Evidencia, verificadas el 10 de noviembre de 2026** contra el artículo del Diario Financiero (4 de agosto de 2026): 740 empresas, 85%, 79% y 58% aparecen tal cual. "91%" es la suma de las etapas de pilotaje (66%) y exploración (25%); "9%" es la suma de escalamiento (8%) y liderazgo (1%).

## 13. Lo que no se hace

- No se agregan colores, tipografías, sombras ni radios fuera de este documento.
- No vuelven las etiquetas en mayúsculas monoespaciadas, los degradados, los brillos ni los fondos con textura.
- No se agregan logos, cifras, testimonios ni casos. Ningún ejemplo pierde su etiqueta "Ejemplo".
- No se publican precios ni se nombra a la OTEC, a Alumbra.ai ni a clientes.
- No se dice que el equipo se arma por proyecto ni que se suman personas externas.
- No se toca `backend/`.
