# Plan: Portfolio Personal de Andrés Prado
**Brief completo para diseño con Gemini**

---

## CONTEXTO Y OBJETIVO

Andrés Prado Vicente es Data Analyst con 3 años de experiencia en finanzas sostenibles (Clarity AI) y actualmente trabaja como freelance implementando soluciones de IA para pequeñas empresas. Tiene formación en Física Computacional (Universidad de Granada) y un TFG de redes neuronales.

**Objetivo del portfolio:** Conseguir trabajo como Data Analyst o en un rol de IA/tecnología. El site debe transmitir dos mensajes simultáneos:
1. Soy un analista de datos sólido, con base técnica real y experiencia en empresa
2. También construyo cosas con IA de verdad, no solo hablo de ello

**Idioma:** Inglés (CV ya está en inglés, audiencia es internacional/nacional)

---

## IDENTIDAD VISUAL

### Paleta de colores
- Estilo: **tech moderno pero humano** — no el típico portfolio de developer todo negro
- Propuesta: fondo oscuro azul-marino (`#0D1117` o similar), acentos en un color vibrante (cian eléctrico `#00D4FF` o verde lima `#39FF14`) para destacar tech skills
- Alternativa más sobria: fondo blanco/gris claro con azul oscuro + naranja como acento
- Que se vea profesional para una entrevista en empresa de datos, pero con personalidad suficiente para destacar

### Tipografía
- Heading: fuente moderna tipo **Inter**, **Sora** o **Space Grotesk**
- Body: limpia, legible, sans-serif
- Algún detalle monospace (tipo `code`) para las skills técnicas

### Estilo general
- Layout clean, mucho espacio en blanco (o dark mode con aire)
- Animaciones sutiles al hacer scroll (nada exagerado)
- Cards con hover effect para los proyectos
- Mobile-first

---

## ESTRUCTURA DE LA PÁGINA (una sola página con scroll / SPA)

### SECCIÓN 1: HERO
**Contenido:**
```
Andrés Prado
Data Analyst · AI Builder

I turn data into decisions and ideas into products.
3 years of experience in sustainable finance + building AI tools for real businesses.

[View my work ↓]   [Download CV]   [LinkedIn]
```

**Diseño:**
- Nombre grande, subtítulo en dos líneas
- Foto de perfil (circular, la del CV — joven, sonriente, informal pero presentable)
- Fondo con algún elemento sutil: partículas, gradiente, o una visualización de datos abstracta (guiño al TFG)
- CTA principal: scroll a proyectos

---

### SECCIÓN 2: SOBRE MÍ (About)
**Contenido:**
```
I'm a physicist-turned-data analyst who got hooked on building things.

After 3 years at Clarity AI working on ESG data infrastructure — improving validation 
pipelines by 38%, defining metrics for their SaaS platform, and building dashboards 
that ended up in joint reports with CDP — I spent a year in Australia and came back 
with a clear direction: use AI to build real tools for real people.

Now I freelance building chatbots, web apps, and automation systems for small businesses 
using Claude, n8n, and Supabase. And I'm looking for a team where I can do both: 
serious data work and smart AI applications.

Physics → Finance Data → AI Products
```

**Diseño:**
- Texto en dos columnas: izquierda el párrafo, derecha una línea de tiempo visual simplificada
- Línea de tiempo: UGR (2017-2021) → Clarity AI (2022-2024) → Australia (2025) → AI Freelance (2026→)

---

### SECCIÓN 3: SKILLS
**Contenido organizado en 3 grupos:**

**Data & Analytics**
`Python` `SQL` `Pandas` `NumPy` `Matplotlib` `TensorFlow` `Power BI` `Snowflake` `AWS`

**AI & Automation**
`Claude / Claude Code` `n8n` `Supabase` `ChatGPT` `Antigravity` `Prompt Engineering`

**Other**
`C++` `A/B Testing` `Data Governance` `ESG / Sustainable Finance` `Jira` `Git`

**Diseño:**
- Tags/badges con iconos o sin ellos
- Agrupados visualmente, no una lista plana
- Posiblemente con una barra de "proficiency" sutil o simplemente agrupados por nivel implícito

---

### SECCIÓN 4: PROYECTOS AI (la sección estrella)

Título de sección: **"Things I've Built"** o **"AI Projects"**

Subtítulo: *"Real tools deployed for real clients — built fast, using modern AI stacks."*

**6 project cards:**

---

**Card 1: Physio Chatbot**
- Emoji/icono: 🤖 o icono de chat
- Título: `Physiotherapy Assistant Chatbot`
- Tag: `Chatbot · AI`
- Descripción: AI-powered chatbot for a physiotherapy clinic. Answers patient questions, explains treatments, and handles appointment-related queries 24/7.
- Stack: `Claude API` `n8n` `Supabase`
- [Ver demo / Ver proyecto]

**Card 2: Physio Web**
- Emoji/icono: 🌐
- Título: `Physiotherapy Clinic Website`
- Tag: `Web · Fullstack`
- Descripción: Complete web presence for a physiotherapy practice. Clean design, booking integration, and content management.
- Stack: `Next.js` `Supabase` `Tailwind`
- [Ver demo / Ver proyecto]

**Card 3: Sports Directory Valencia**
- Emoji/icono: 🏃 o 🗺️
- Título: `Valencia Sports Directory`
- Tag: `Directory · Web App`
- Descripción: A searchable directory of sports clubs, gyms, and activities in Valencia. Users can filter by sport, neighborhood, and schedule.
- Stack: `Next.js` `Supabase` `Claude`
- [Ver demo / Ver proyecto]

**Card 4: Runner App**
- Emoji/icono: 👟
- Título: `Runner Companion App`
- Tag: `Mobile App · React Native`
- Descripción: Mobile app for runners with route tracking, training plans, and performance insights.
- Stack: `React Native` `Expo` `TypeScript`
- [Ver demo / Ver proyecto]

**Card 5: Highlights Creator**
- Emoji/icono: 🎬
- Título: `AI Highlights Generator`
- Tag: `AI · Video · Automation`
- Descripción: Automated pipeline that takes long-form video content and generates short highlights / clips for social media. Uses AI to identify the best moments.
- Stack: `Python` `AI APIs` `n8n`
- [Ver demo / Ver proyecto]

**Card 6 (BONUS — TFG): Dental Image Segmentation**
- Emoji/icono: 🦷
- Título: `Dental Neural Network (Thesis)`
- Tag: `Deep Learning · Computer Vision`
- Descripción: U-Net convolutional neural network for dental image segmentation. Achieved 87% accuracy (IoU) identifying upper incisors and characterising their colour properties using CIELAB + K-Means clustering.
- Stack: `TensorFlow` `Python` `K-Means` `CIELAB`
- [Ver en GitHub]
- GitHub: `github.com/andresprado99/Teeth-Characterization`

**Diseño de las cards:**
- Grid de 2-3 columnas en desktop, 1 en mobile
- Cards con fondo ligeramente elevado (shadow o borde sutil)
- Hover: el card se eleva o cambia de color ligeramente
- Cada card tiene: icono/emoji arriba, título, tags de stack como badges de colores, descripción corta (2-3 líneas), y botón de link
- Si hay imagen/screenshot disponible, mostrarla en la parte superior de la card

---

### SECCIÓN 5: EXPERIENCIA PROFESIONAL

**Título:** `Experience`

**Formato:** línea de tiempo vertical, limpia

```
AI Freelance · Jan 2026 – Present
Implementation of chatbots and web solutions for small businesses.
Building apps and directories using modern AI tools.

─────────────────────────────────

Clarity AI · Feb 2022 – Dec 2024
Madrid, Spain

Associate – Regulation (Sep 2023 – Dec 2024)
• Complex data analysis and dashboards (incl. joint report with CDP)
• Defined 10+ ESG metrics for the company's SaaS platform
• ETL pipeline development for multiple external data providers

Junior Associate – Regulation (Jul 2022 – Sep 2023)
• Improved data validation processes by 38% using SQL & Python
• Data integration solutions for the main database

Intern – Regulation (Feb 2022 – Jul 2022)
• First exposure to real-world data infrastructure

─────────────────────────────────

International Experience · Jan 2025 – Nov 2025
Australia — Career break with professional experience in fast-paced environments
```

---

### SECCIÓN 6: FORMACIÓN

```
BSc Physics (Computational Physics)
University of Granada · 2017 – 2021
Academic exchanges: University of Turin (ERASMUS+) · Complutense University of Madrid
```

Destacar: el TFG en Computer Vision / Deep Learning como muestra de capacidad técnica real.

---

### SECCIÓN 7: CONTACTO (Footer / Contact)

**Título:** `Let's work together` o `Get in touch`

**Contenido:**
```
📧 andres.pradovicente@gmail.com
📞 +34 624 080 642
🔗 LinkedIn: Andrés Prado
```

- Botón grande: `Send me an email`
- Link a LinkedIn
- Botón de descarga del CV en PDF

**Diseño:** sección final con fondo diferente (más oscuro o con un gradiente), sensación de cierre

---

## STACK TÉCNICO RECOMENDADO

Para que luego sea fácil de construir/modificar:

- **Framework:** Next.js 14 (App Router) — React, fácil de desplegar en Vercel
- **Estilos:** Tailwind CSS — rápido, limpio, responsive
- **Animaciones:** Framer Motion — scroll animations suaves
- **Despliegue:** Vercel — gratis para portfolios estáticos
- **Alternativa más simple:** HTML/CSS/JS vanilla con un poco de GSAP si se quiere más control

---

## NOTAS PARA EL DISEÑO DE GEMINI

1. **El orden importa:** Los proyectos AI deben aparecer antes que la experiencia — son lo más diferencial de Andrés ahora mismo
2. **No es un developer típico:** El portfolio debe mezclar rigor analítico (gráficas, datos, precisión) con la creatividad de quien construye productos
3. **El TFG es un activo oculto:** Una red neuronal con 87% de accuracy hecha como TFG de Física es impresionante — no enterrarlo, mostrarlo como proyecto
4. **CTAs claros:** El visitante debe poder en 30 segundos: ver quién es, ver qué ha construido, y contactarle
5. **Responsive crítico:** Los reclutadores abren portfolios en móvil

---

## CONTENIDO QUE ANDRÉS DEBE PREPARAR ANTES DE IMPLEMENTAR

- [ ] Screenshots o GIFs de cada proyecto AI
- [ ] URLs de demos en vivo (si existen)
- [ ] Foto de perfil en buena calidad (se puede usar la del CV)
- [ ] Decidir si el site va en inglés, español o bilingüe
- [ ] URL del portfolio (ej: andresprado.dev o similar)
