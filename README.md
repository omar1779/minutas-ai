# MVP – Actas y Minutas Automáticas

> Versión inicial enfocada en estudiantes y grupos de trabajo académicos.

---

## 0. Visión
Transformar audios o transcripciones en **actas estructuradas** (título, asistentes, tareas, fechas) en segundos, sin pagar suites corporativas.

---

## 1. Alcance del MVP (Sprint de 5 días)

| Día | Entregable principal | Detalles |
|-----|---------------------|----------|
| 1   | Esqueleto Next.js 14 + Auth Supabase | • Config TypeScript, Tailwind + Shadcn UI\n• Magic-link / GitHub auth\n• Rutas protegidas `/dashboard` |
| 2   | API `/api/transcribe` (Whisper) | • Subida `mp3/mp4` (20 min máx)\n• Llama a Whisper API y devuelve texto |
| 3   | API `/api/summary` (GPT-3.5) | • Prompt para resumen estructurado\n• Devuelve JSON (`title`, `attendees`, `points`, `tasks`) |
| 4   | Editor Lexical + Export PDF | • Pre-carga resumen editable\n• Botones Copy / Download PDF |
| 5   | Límites + Deploy Vercel | • 60 min audio/mes en plan Free\n• Variables env + pruebas con 3 betas |

---

## 2. Arquitectura

```
[Next.js App Router]
    ├─ /upload  (React Dropzone)
    │   └─ POST /api/transcribe —— Whisper (OpenAI)
    ├─ /dashboard
    │   └─ POST /api/summary —— OpenAI GPT-3.5 Turbo
    ├─ /auth (Supabase)
    └─ /db   (PostgreSQL @ Supabase – tablas: users, sessions, usage)
```

### Tech Stack
* **Frontend**: Next.js 14, React 18, Tailwind + Shadcn UI, Lexical Editor
* **Backend**: Next.js API Routes (Edge Functions opc.), OpenAI Whisper & Chat
* **DB/Auth**: Supabase (PostgreSQL + Auth)
* **Infra**: Vercel (preview + prod)

---

## 3. Costos estimados beta
| Recurso | Precio | Límite beta |
|---------|--------|-------------|
| Whisper | 0.006 USD/min | 60 min/mes = 0.36 USD/user |
| GPT-3.5 | 0.50 USD/1M tokens | 2 k tokens/reunión ≈ 0.001 USD |
| Supabase | Free tier | 500 MB DB |
| Vercel   | Hobby | Free |

Margen plan **Student 4 USD/mes** ≈ 55 %.

---

## 4. Variables de entorno
```
SUPABASE_URL=…
SUPABASE_ANON_KEY=…
OPENAI_API_KEY=…
WHISPER_MODEL=whisper-1
```

---

## 5. Setup local rápido
```bash
pnpm i  # o yarn / npm ci
cp .env.example .env.local  # y definir keys
pnpm dev
```
Abrir `http://localhost:3000` y registrarse con email mágico.

---

## 6. Deployment
1. Conectar repo a Vercel → Import Project.
2. Añadir mismas variables de entorno.
3. Seleccionar framework **Next.js** y Build Command `pnpm build`.

---

## 7. Backlog post-MVP
* Soporte archivos `.wav`, `.m4a`.
* Integración Zoom API → URL directa.
* Historial de actas y búsqueda.
* Compartir acta vía enlace público.
* Rol “profesor” con export masivo.

---

_Última actualización: 2025-08-24_
