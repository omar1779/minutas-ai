# Actas AI - Landing Page & MVP

> Plataforma para generar actas inteligentes a partir de audio con IA.

---

## 🎯 Estado Actual: Landing Page Completa

### ✅ Completado (Agosto 2025)

**Landing Page Funcional:**
- ✅ **Diseño responsive** con Next.js 15 + Tailwind CSS v4
- ✅ **Branding personalizado** - Logo "Actas AI" con icono de documento
- ✅ **Secciones completas**: Hero, Features, Waitlist, Footer
- ✅ **Captura de emails** - Formulario funcional con validación
- ✅ **Estados de UI** - Loading, success, error en formulario
- ✅ **Persistencia local** - Emails guardados en localStorage
- ✅ **Paleta brand** - Colores naranja personalizados
- ✅ **Metadata SEO** - Título y descripción optimizados

**Tecnologías implementadas:**
- Next.js 15.5.2 con App Router
- Tailwind CSS v4 con configuración personalizada
- React Icons para iconografía
- TypeScript para type safety
- Formularios controlados con React hooks

---

## 🚀 Próximos Pasos: MVP Backend

### Fase 1: Persistencia de Datos + Email Marketing
| Prioridad | Tarea | Estimación | Estado |
|-----------|-------|------------|--------|
| 🔴 Alta | Instalar dependencias Supabase | 5 min | ⏳ En progreso |
| 🔴 Alta | Crear tabla `waitlist_emails` en Supabase | 10 min | ⏳ Pendiente |
| 🔴 Alta | Actualizar formulario con Supabase | 15 min | ⏳ Pendiente |
| 🔴 Alta | Variables de entorno (.env.local) | 5 min | ⏳ Pendiente |
| 🟡 Media | Integración Resend para email marketing | 20 min | ⏳ Pendiente |
| 🟡 Media | Dashboard admin para ver registros | 30 min | ⏳ Pendiente |

**Total estimado: ~1.5 horas**

### Fase 2: Core MVP (Planificado)
| Día | Entregable principal | Detalles |
|-----|---------------------|----------|
| 1   | Auth + Dashboard Supabase | • Magic-link authentication\n• Rutas protegidas `/dashboard` |
| 2   | API `/api/transcribe` (Whisper) | • Subida `mp3/mp4` (20 min máx)\n• Integración OpenAI Whisper |
| 3   | API `/api/summary` (GPT-4) | • Prompt para resumen estructurado\n• JSON: `title`, `attendees`, `tasks` |
| 4   | Editor + Export PDF | • Resumen editable\n• Download PDF/Word |
| 5   | Deploy + Límites | • 60 min audio/mes gratis\n• Pruebas beta |

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
```bash
# Supabase (para captura de emails)
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...

# Resend (para email marketing)
RESEND_API_KEY=re_123456789...

# OpenAI (para MVP futuro)
OPENAI_API_KEY=sk-...
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

## 📊 Métricas de Desarrollo

**Tiempo invertido Landing Page:** ~4 horas
- Diseño y componentes: 2h
- Integración Tailwind v4: 1h  
- Formulario y validación: 1h

**Archivos principales:**
- `src/app/page.tsx` - Página principal
- `src/components/waitlist.tsx` - Captura de emails
- `src/components/features.tsx` - Sección beneficios
- `tailwind.config.js` - Configuración de tema

**Para ver emails capturados:**
```javascript
// En consola del navegador:
JSON.parse(localStorage.getItem('waitlist-emails') || '[]')
```

---

_Última actualización: 2025-08-26_
