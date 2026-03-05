# Sint DS — QA Checklist End-to-End

Ejecutar antes del deploy a producción.
Requiere: API keys configuradas en `backend/.env`

## 1. Previo al test

- [ ] `ANTHROPIC_API_KEY` configurada y válida
- [ ] `RESEND_API_KEY` configurada y dominio `sint.cl` verificado en Resend
- [ ] `GOOGLE_SHEETS_ID` configurado y service account con acceso al sheet
- [ ] `GOOGLE_CREDENTIALS_JSON` configurado (JSON en una línea)
- [ ] Sheet de Google con headers en fila 1:
  `timestamp | email | P1 | P2 | P3 | SFS | nivel | arquetipo_id | arquetipo_nombre | foco_1_id | foco_1_nombre | foco_2_id | foco_2_nombre | alerta_activa | dimension_alerta | D1 | D2 | D3 | D4 | D5 | D6 | D7 | D8`

## 2. Ejecutar QA automático

```bash
cd backend
python qa_test.py
```

Resultado esperado: `3/3 perfiles OK`

## 3. Verificación manual de emails

Revisar las tres bandejas de entrada (o una sola si usas el mismo email):

- [ ] Email Verde recibido con asunto: `Tu Diagnóstico Sint — Operación con fricciones residuales`
- [ ] Email Ámbar recibido con asunto: `Tu Diagnóstico Sint — Desalineación operativa activa`
- [ ] Email Rojo recibido con asunto: `Tu Diagnóstico Sint — Fricción sistémica con impacto en resultados`

Para cada email verificar:
- [ ] Header con logo Sint y fecha
- [ ] Banda de nivel con color correcto (verde/ámbar/rojo)
- [ ] Sección `ds-arquetipo` con nombre correcto
- [ ] Dos focos visibles
- [ ] Sección `ds-alerta` presente solo en perfiles que la activan
- [ ] Botón CTA "Agendar 15 minutos →" visible y con link correcto
- [ ] Footer con aviso de privacidad

## 4. Verificación Google Sheets

- [ ] 3 filas nuevas registradas
- [ ] Timestamps correctos
- [ ] Niveles: verde / ambar / rojo en orden
- [ ] Arquetipos: ARQ-0 / ARQ-1 / ARQ-2 en orden

## 5. Flujo completo desde el navegador

- [ ] Abrir `http://localhost:3000/diagnostico`
- [ ] Completar el formulario con un email real
- [ ] Confirmar redirección a `/diagnostico/resultado`
- [ ] Confirmar recepción del email en la bandeja real
- [ ] Confirmar fila en Google Sheets

## Estado

- [ ] QA aprobado — listo para deploy
