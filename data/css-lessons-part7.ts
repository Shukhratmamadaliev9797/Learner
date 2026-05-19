// ─── PART 7: Responsive, Variables, Functions, ilg'or mavzular ───────────

export const cssPart7Groups = [
  {
    title: "Responsive dizayn",
    lessons: [
      {
        id: "css-responsive",
        slug: "responsive",
        title: "Responsive dizayn",
        description: "Media queries, mobile-first, breakpointlar va zamonaviy responsive usullar",
        sections: [
          { id: "media", title: "Media Queries" },
          { id: "mobile-first", title: "Mobile-first yondashuv" },
          { id: "modern", title: "Zamonaviy responsive" },
        ],
        content: `
<h1>Responsive dizayn</h1>
<p>Responsive dizayn — sahifa barcha qurilmalarda (telefon, planshet, kompyuter) to'g'ri ko'rinishini ta'minlaydi. Hozirgi davrda mobil foydalanuvchilar ko'pchilikni tashkil qiladi.</p>

<h2 id="media">Media Queries</h2>
<p>Media query — ekran o'lchami yoki boshqa qurilma xususiyatlariga qarab CSS qo'llash:</p>
<ul>
  <li><code>@media (max-width: 768px) { }</code> — 768px dan kichik</li>
  <li><code>@media (min-width: 768px) { }</code> — 768px dan katta</li>
  <li><code>@media (min-width: 768px) and (max-width: 1200px) { }</code> — oraliq</li>
  <li><code>@media (orientation: portrait) { }</code> — portret rejimi</li>
  <li><code>@media (prefers-color-scheme: dark) { }</code> — dark mode</li>
  <li><code>@media (hover: hover) { }</code> — sichqoncha bor qurilmalar</li>
</ul>

<h2 id="mobile-first">Mobile-first yondashuv</h2>
<p>Avval kichik ekran uchun yozing, keyin <code>min-width</code> bilan katta ekranlarni kengaytiring:</p>
<ul>
  <li>Mobil: asosiy CSS (media query siz)</li>
  <li><code>@media (min-width: 640px)</code> — planshet va undan katta</li>
  <li><code>@media (min-width: 1024px)</code> — katta ekran</li>
  <li>Afzalligi: yengil kod, zamonaviy standart</li>
</ul>
<p><strong>Keng tarqalgan breakpointlar:</strong> 480px, 640px, 768px, 1024px, 1280px, 1536px</p>

<h2 id="modern">Zamonaviy responsive usullar</h2>
<ul>
  <li><strong>CSS Grid auto-fit/auto-fill:</strong> media query siz responsive grid</li>
  <li><strong>Clamp():</strong> <code>font-size: clamp(1rem, 2.5vw, 2rem)</code> — fluid typography</li>
  <li><strong>Container queries:</strong> <code>@container (min-width: 400px) { }</code> — element o'lchamiga qarab</li>
  <li><strong>vw/vh/svh:</strong> viewport ga nisbatan o'lchamlar</li>
  <li><strong>aspect-ratio:</strong> nisbatni qotirish</li>
</ul>
        `,
        codeExample: {
          title: "Responsive CSS namunalar",
          language: "css",
          code: `/* ── Mobile-first grid ─────────────── */
.cards {
  display: grid;
  grid-template-columns: 1fr;      /* mobil: 1 ustun */
  gap: 16px;
}

@media (min-width: 640px) {
  .cards {
    grid-template-columns: repeat(2, 1fr); /* planshet: 2 ustun */
  }
}

@media (min-width: 1024px) {
  .cards {
    grid-template-columns: repeat(3, 1fr); /* desktop: 3 ustun */
  }
}

/* ── Fluid typography — clamp ───────── */
h1 {
  /* min: 1.5rem, ideal: 4vw, max: 3rem */
  font-size: clamp(1.5rem, 4vw, 3rem);
}

p {
  font-size: clamp(0.875rem, 2vw, 1.125rem);
}

/* ── Navbar — mobile responsive ────── */
.navbar {
  display: flex;
  align-items: center;
  padding: 0 16px;
  height: 56px;
}

.nav-links {
  display: none; /* mobil: yashirin */
}

.hamburger {
  display: block; /* mobil: ko'rinadi */
}

@media (min-width: 768px) {
  .nav-links {
    display: flex;
    gap: 8px;
  }
  .hamburger {
    display: none;
  }
}

/* ── Container query ────────────────── */
.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: flex;
    flex-direction: row;
    gap: 16px;
  }
}

/* ── Viewport units ─────────────────── */
.hero {
  min-height: 100svh; /* Small Viewport Height — mobil toolbar ni hisobga oladi */
}

.sidebar {
  width: min(280px, 30vw); /* 280px va 30vw dan kichigi */
}`,
        },
        liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * { box-sizing: border-box; margin: 0; }
    body { font-family: sans-serif; background: #f6f6f7; }

    /* Navbar */
    .navbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #0a0a0f;
      color: white;
      padding: 0 20px;
      height: 52px;
      position: sticky;
      top: 0;
    }
    .nav-brand { font-weight: 800; font-size: 15px; }
    .nav-links { display: none; gap: 4px; }
    .nav-links a {
      padding: 6px 12px;
      color: #8888a0;
      text-decoration: none;
      border-radius: 6px;
      font-size: 13px;
      transition: color 0.15s;
    }
    .nav-links a:hover { color: white; }
    .hamburger {
      background: none;
      border: 1px solid #1e1e2a;
      color: white;
      padding: 6px 10px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 18px;
    }

    @media (min-width: 768px) {
      .nav-links { display: flex; }
      .hamburger { display: none; }
    }

    /* Hero */
    .hero {
      padding: 48px 20px;
      text-align: center;
      background: #0a0a0f;
      color: white;
    }
    .hero h1 {
      font-size: clamp(1.8rem, 5vw, 3.5rem);
      font-weight: 800;
      letter-spacing: -0.04em;
      margin-bottom: 12px;
    }
    .hero p {
      font-size: clamp(0.9rem, 2vw, 1.1rem);
      color: #8888a0;
      max-width: 500px;
      margin: 0 auto;
    }

    /* Responsive cards grid */
    .section { padding: 32px 20px; }
    .cards {
      display: grid;
      grid-template-columns: 1fr;
      gap: 12px;
    }
    @media (min-width: 600px) {
      .cards { grid-template-columns: repeat(2, 1fr); }
    }
    @media (min-width: 900px) {
      .cards { grid-template-columns: repeat(3, 1fr); }
    }

    .card {
      background: white;
      border: 1px solid #e2e2e8;
      border-radius: 12px;
      padding: 20px;
    }
    .card-icon { font-size: 28px; margin-bottom: 10px; }
    .card h3 { font-size: 15px; margin: 0 0 6px; }
    .card p { font-size: 13px; color: #8888a0; margin: 0; line-height: 1.5; }
  </style>
</head>
<body>
  <nav class="navbar">
    <div class="nav-brand">Learner.uz</div>
    <div class="nav-links">
      <a href="#">HTML</a>
      <a href="#">CSS</a>
      <a href="#">JavaScript</a>
    </div>
    <button class="hamburger">☰</button>
  </nav>

  <div class="hero">
    <h1>Responsive dizayn</h1>
    <p>Ekran o'lchamini o'zgartiring — layout o'zgarishini kuting!</p>
  </div>

  <div class="section">
    <div class="cards">
      <div class="card">
        <div class="card-icon">🌐</div>
        <h3>HTML</h3>
        <p>Veb sahifaning tuzilishini o'rganing.</p>
      </div>
      <div class="card">
        <div class="card-icon">🎨</div>
        <h3>CSS</h3>
        <p>Sahifaga chiroyli ko'rinish bering.</p>
      </div>
      <div class="card">
        <div class="card-icon">⚡</div>
        <h3>JavaScript</h3>
        <p>Interaktivlik va dinamik kontent.</p>
      </div>
    </div>
  </div>
</body>
</html>`,
        notes: [
          "<code>clamp(min, ideal, max)</code> — fluid o'lchov uchun eng zamonaviy usul. Media query siz.",
          "<code>min-width</code> (mobile-first) yaxshiroq — kamroq kod, zamonaviy standart.",
          "<code>100svh</code> — mobil qurilmalarda address bar ni hisobga oladi. <code>100vh</code> mobilda muammoli.",
        ],
        commonMistakes: [
          "<code>&lt;meta name='viewport'&gt;</code> ni unutish — responsive CSS ishlamaydi.",
          "Max-width da yozib, mobile-first ni aralashtirib yuborish.",
          "<code>px</code> bilan breakpoint berish va foydalanuvchi zoom qilganda muammo.",
        ],
        practiceTask:
          "To'liq responsive sayt yarating: mobilda (1 ustun, hamburger menyu), planshetda (2 ustun), desktopda (3 ustun + gorizontal navbar). Sarlavha <code>clamp()</code> bilan fluid bo'lsin.",
        quiz: [
          {
            question: "Mobile-first yondashuvda asosiy CSS qanday yoziladi?",
            options: [
              "<code>@media (max-width: 768px)</code> bilan",
              "Media query siz — kichik ekran uchun",
              "<code>@media (min-width: 1200px)</code> bilan",
              "JavaScript bilan",
            ],
            correct: 1,
            explanation: "Mobile-first — asosiy CSS media query siz yoziladi (mobil uchun). Katta ekranlar <code>@media (min-width: ...)</code> bilan kengaytiriladi.",
          },
          {
            question: "<code>clamp(1rem, 3vw, 2rem)</code> da qiymatlar nima?",
            options: [
              "O'rtacha, minimum, maximum",
              "Minimum, ideal, maximum",
              "Maximum, minimum, ideal",
              "Minimum, maksimum, default",
            ],
            correct: 1,
            explanation: "<code>clamp(min, ideal, max)</code>: minimum 1rem (kichraymaslik), ideal 3vw (viewport ga nisbatan), maximum 2rem (kengaymaslik).",
          },
        ],
      },
    ],
  },
  {
    title: "CSS o'zgaruvchilar va funksiyalar",
    lessons: [
      {
        id: "css-variables",
        slug: "ozgaruvchilar",
        title: "CSS Custom Properties (Variables)",
        description: "CSS o'zgaruvchilari, dynamic theming va kaskadli o'zgaruvchilar",
        sections: [
          { id: "basics", title: "Custom properties asoslari" },
          { id: "theming", title: "Theming va dark mode" },
          { id: "js", title: "JavaScript bilan" },
        ],
        content: `
<h1>CSS Custom Properties (Variables)</h1>
<p>CSS custom properties — CSS da o'zgaruvchilar. Qiymatlarni bir joyda belgilab, hamma yerda ishlatish. Kaskad va meros qoidalariga bo'ysunadi.</p>

<h2 id="basics">Custom properties asoslari</h2>
<ul>
  <li>E'lon: <code>--nom: qiymat;</code> (ikki chiziqcha bilan boshlanadi)</li>
  <li>Ishlatish: <code>var(--nom)</code></li>
  <li>Default qiymat: <code>var(--rang, blue)</code> — agar --rang yo'q bo'lsa, blue</li>
  <li>Scope: <code>:root { }</code> da e'lon qilinsa — global. Element ichida — faqat shu element va bolalariga</li>
  <li>Meros: bolalar ota elementning custom property larini oladi</li>
</ul>

<h2 id="theming">Theming va dark mode</h2>
<p>CSS variables bilan dark mode eng samarali usulda yaratiladi:</p>
<ul>
  <li><code>:root</code> da light mode qiymatlari</li>
  <li><code>[data-theme="dark"]</code> yoki <code>.dark</code> da override qilish</li>
  <li><code>@media (prefers-color-scheme: dark)</code> — tizim sozlamasiga qarab</li>
</ul>

<h2 id="js">JavaScript bilan ishlash</h2>
<ul>
  <li>O'qish: <code>getComputedStyle(el).getPropertyValue('--nom')</code></li>
  <li>O'zgartirish: <code>el.style.setProperty('--nom', 'qiymat')</code></li>
  <li>Stagger delay: <code>el.style.setProperty('--i', index)</code> va CSS da <code>calc(var(--i) * 0.1s)</code></li>
</ul>
        `,
        codeExample: {
          title: "CSS Variables va theming",
          language: "css",
          code: `/* ── Design token tizimi ────────────── */
:root {
  /* Ranglar */
  --color-primary:   #2250e8;
  --color-secondary: #059669;
  --color-danger:    #dc2626;

  /* Matn */
  --text-1: #0a0a0f;
  --text-2: #44444f;
  --text-3: #8888a0;

  /* Sirt */
  --bg:      #f6f6f7;
  --surface: #ffffff;
  --border:  #e2e2e8;

  /* O'lchamlar */
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 32px;

  /* Border radius */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;

  /* Animatsiya */
  --duration-fast:   0.15s;
  --duration-normal: 0.25s;
  --easing-spring:   cubic-bezier(0.16, 1, 0.3, 1);
}

/* ── Dark mode ──────────────────────── */
.dark {
  --text-1: #f0f0f8;
  --text-2: #9494b0;
  --text-3: #55556a;
  --bg:      #0d0d11;
  --surface: #141418;
  --border:  #202028;
}

/* Komponentlarda ishlatish */
.btn {
  background: var(--color-primary);
  color: white;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  transition: opacity var(--duration-fast) ease;
  border: none;
  cursor: pointer;
}

.btn:hover { opacity: 0.85; }

.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  color: var(--text-1);
}

/* ── Stagger bilan ──────────────────── */
.item {
  animation: fadeUp 0.4s var(--easing-spring) both;
  animation-delay: calc(var(--i, 0) * 0.08s);
}`,
        },
        liveEditorDefault: `<!DOCTYPE html>
<html lang="uz" data-theme="light">
<head>
  <meta charset="UTF-8">
  <style>
    :root {
      --primary: #2250e8;
      --text-1: #0a0a0f;
      --text-2: #44444f;
      --text-3: #8888a0;
      --bg: #f6f6f7;
      --surface: #ffffff;
      --border: #e2e2e8;
      --radius: 12px;
      --dur: 0.2s;
    }

    [data-theme="dark"] {
      --text-1: #f0f0f8;
      --text-2: #9494b0;
      --text-3: #55556a;
      --bg: #0d0d11;
      --surface: #141418;
      --border: #202028;
      --primary: #4f86fa;
    }

    * { box-sizing: border-box; transition: background var(--dur), color var(--dur), border-color var(--dur); }
    body { font-family: sans-serif; background: var(--bg); color: var(--text-1); padding: 32px; min-height: 100vh; }

    .navbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 12px 20px;
      margin-bottom: 24px;
    }
    .brand { font-weight: 800; font-size: 15px; }
    .toggle-btn {
      background: var(--bg);
      border: 1px solid var(--border);
      color: var(--text-1);
      padding: 6px 14px;
      border-radius: 8px;
      cursor: pointer;
      font-size: 13px;
      font-family: inherit;
    }

    .cards { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 12px; }
    .card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 20px;
    }
    .card-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: var(--primary); margin-bottom: 8px; }
    .card h3 { font-size: 16px; font-weight: 700; margin: 0 0 6px; }
    .card p { font-size: 13px; color: var(--text-2); margin: 0; line-height: 1.5; }
  </style>
</head>
<body>
  <nav class="navbar">
    <div class="brand">Learner.uz</div>
    <button class="toggle-btn" onclick="toggleTheme()">🌙 Dark mode</button>
  </nav>

  <div class="cards">
    <div class="card">
      <div class="card-label">Asoslar</div>
      <h3>CSS Variables</h3>
      <p>Design token tizimi yarating.</p>
    </div>
    <div class="card">
      <div class="card-label">Theming</div>
      <h3>Dark Mode</h3>
      <p>Bir tugma bilan mavzu almashin.</p>
    </div>
    <div class="card">
      <div class="card-label">Komponent</div>
      <h3>Reusable UI</h3>
      <p>Variables bilan moslashuvchan komponentlar.</p>
    </div>
  </div>

  <script>
    function toggleTheme() {
      const html = document.documentElement;
      const isDark = html.dataset.theme === 'dark';
      html.dataset.theme = isDark ? 'light' : 'dark';
      document.querySelector('.toggle-btn').textContent = isDark ? '🌙 Dark mode' : '☀️ Light mode';
    }
  </script>
</body>
</html>`,
        notes: [
          "CSS variables kaskad va merosga bo'ysunadi — SCSS/LESS variablesidan farqli.",
          "Design token tizimi yarating: <code>--color-primary</code> kabi mantiqiy nomlar ishlating.",
          "JavaScript bilan <code>setProperty</code> — runtime da ranglar va animatsiya vaqtlarini o'zgartirish.",
        ],
        commonMistakes: [
          "CSS variable nomini <code>--</code> siz yozish — e'lon qilinmaydi.",
          "<code>var(--nom)</code> da nom noto'g'ri — brauzer fallback yoki initial qiymat ishlatadi.",
          "Custom property ni <code>calc()</code> siz arifmetika qilishga urinish: <code>--spacing + 8px</code> — ishlamaydi, <code>calc(var(--spacing) + 8px)</code> kerak.",
        ],
        practiceTask:
          "Design token tizimi yarating: ranglar (primary, secondary, success), spacing (sm, md, lg), radius. Shu tokenlar bilan tugma, karta va input komponentlari yarating. Bir class bilan dark mode qo'llaning.",
        quiz: [
          {
            question: "CSS custom property qanday e'lon qilinadi?",
            options: ["<code>$nom: qiymat</code>", "<code>@nom: qiymat</code>", "<code>--nom: qiymat</code>", "<code>var-nom: qiymat</code>"],
            correct: 2,
            explanation: "CSS custom properties ikki chiziqcha (<code>--</code>) bilan boshlanadi: <code>--primary-color: #2250e8;</code>. SCSS ($) dan farqli.",
          },
          {
            question: "<code>var(--color, red)</code> da <code>red</code> nima?",
            options: [
              "Majburiy qiymat",
              "Fallback qiymat — --color yo'q bo'lsa ishlatiladi",
              "Override qiymat",
              "Default brauzer qiymati",
            ],
            correct: 1,
            explanation: "<code>var(--nom, fallback)</code> — agar <code>--nom</code> e'lon qilinmagan yoki noto'g'ri bo'lsa, <code>fallback</code> qiymati ishlatiladi.",
          },
        ],
      },
      {
        id: "css-functions",
        slug: "funksiyalar",
        title: "CSS Funksiyalari va ilg'or mavzular",
        description: "calc, clamp, min, max, filter, clip-path va zamonaviy CSS",
        sections: [
          { id: "math", title: "Matematik funksiyalar" },
          { id: "visual", title: "Vizual funksiyalar" },
          { id: "modern-css", title: "Zamonaviy CSS" },
        ],
        content: `
<h1>CSS Funksiyalari va ilg'or mavzular</h1>
<p>CSS da ko'plab built-in funksiyalar mavjud — hisoblash, vizual effektlar va zamonaviy layout uchun.</p>

<h2 id="math">Matematik funksiyalar</h2>
<ul>
  <li><code>calc()</code> — hisoblash: <code>calc(100% - 240px)</code>, <code>calc(var(--spacing) * 2)</code></li>
  <li><code>min(a, b)</code> — kichigini oladi: <code>min(500px, 100%)</code></li>
  <li><code>max(a, b)</code> — kattasini oladi: <code>max(200px, 20%)</code></li>
  <li><code>clamp(min, ideal, max)</code> — oraliqda ushlab turadi</li>
  <li><code>round()</code>, <code>mod()</code> — zamonaviy matematik (CSS Houdini)</li>
</ul>

<h2 id="visual">Vizual effekt funksiyalari</h2>
<ul>
  <li><code>filter: blur(4px)</code> — blur effekti</li>
  <li><code>filter: brightness(0.8)</code> — yorqinlik</li>
  <li><code>filter: contrast(1.2)</code> — kontrast</li>
  <li><code>filter: grayscale(1)</code> — kulrang (hover da rangli qilish effekti)</li>
  <li><code>filter: drop-shadow(0 4px 12px rgba(0,0,0,0.2))</code> — SVG/PNG ga shadow</li>
  <li><code>clip-path</code> — element shaklini kesish: <code>clip-path: circle(50%)</code>, polygon</li>
</ul>

<h2 id="modern-css">Zamonaviy CSS xususiyatlari</h2>
<ul>
  <li><code>:is(h1, h2, h3)</code> — guruhlash, spetsifiklik birinchi elementnikiga teng</li>
  <li><code>:where(h1, h2)</code> — guruhlash, spetsifiklik 0</li>
  <li><code>:has(img)</code> — ota selektor (ichida img bo'lsa)</li>
  <li><code>@layer</code> — CSS qatlam tartibini aniq boshqarish</li>
  <li><code>@scope</code> — CSS scoping</li>
  <li><code>scroll-behavior: smooth</code>, <code>scroll-snap-type</code> — scroll effektlar</li>
  <li><code>accent-color</code> — input, checkbox, radio rang berish</li>
</ul>
        `,
        codeExample: {
          title: "CSS funksiyalari va zamonaviy CSS",
          language: "css",
          code: `/* ── Matematik funksiyalar ──────────── */

/* calc — aralash birliklar */
.sidebar {
  width: calc(100% - 240px); /* container minus sidebar */
}

.perfect-margin {
  margin: 0 max(16px, calc((100% - 1200px) / 2)); /* max 1200px, yon tomonlar teng */
}

/* Fluid font — clamp */
html {
  font-size: clamp(14px, 1.5vw, 18px);
}

h1 {
  font-size: clamp(2rem, 5vw + 1rem, 5rem); /* responsive, viewport ga qarab */
}

/* ── Vizual effektlar ────────────────── */

/* Grayscale hover */
.portfolio-img {
  filter: grayscale(1) opacity(0.7);
  transition: filter 0.3s ease;
}
.portfolio-img:hover {
  filter: grayscale(0) opacity(1);
}

/* clip-path — shakl kesish */
.diamond {
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}

.hexagon {
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
}

.wave-bottom {
  clip-path: ellipse(100% 80% at 50% 0%);
}

/* ── Zamonaviy selektorlar ──────────── */

/* :is — spetsifiklikni birlashtirish */
:is(h1, h2, h3, h4) {
  color: var(--text-1);
  font-weight: 700;
  line-height: 1.2;
}

/* :has — ota selektor */
.card:has(img) {
  padding: 0; /* rasmli kartada padding yo'q */
}

.card:has(img) .card__body {
  padding: 16px;
}

/* ── Scroll snap ────────────────────── */
.slider {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 16px;
}

.slide {
  min-width: 300px;
  scroll-snap-align: start;
}

/* ── accent-color ───────────────────── */
:root {
  accent-color: #2250e8;
}
/* Input, checkbox, radio bir chizig'ida ranglanadi */`,
        },
        liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; }
    body { font-family: sans-serif; padding: 32px; background: #0a0a0f; color: white; }
    h3 { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #8888a0; margin: 28px 0 14px; }

    /* Fluid typography */
    .fluid-title {
      font-size: clamp(2rem, 6vw, 5rem);
      font-weight: 800;
      letter-spacing: -0.04em;
      background: linear-gradient(135deg, #4f86fa, #a78bfa);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin: 0;
    }

    /* Filter effektlar */
    .filter-grid { display: flex; gap: 12px; flex-wrap: wrap; }
    .f-box {
      width: 120px; height: 80px;
      background: linear-gradient(135deg, #2250e8, #059669);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: 700;
      cursor: pointer;
      transition: filter 0.3s;
    }
    .f-blur:hover    { filter: blur(4px); }
    .f-bright:hover  { filter: brightness(1.4); }
    .f-gray:hover    { filter: grayscale(1); }
    .f-shadow:hover  { filter: drop-shadow(0 0 16px rgba(79,134,250,.8)); }

    /* clip-path shakllar */
    .shapes { display: flex; gap: 20px; align-items: center; flex-wrap: wrap; margin-top: 8px; }
    .shape {
      width: 80px; height: 80px;
      background: linear-gradient(135deg, #4f86fa, #a78bfa);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 11px;
      color: white;
      font-weight: 700;
      text-align: center;
    }
    .circle  { clip-path: circle(50%); }
    .diamond { clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); }
    .hex     { clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%); }
    .arrow   { clip-path: polygon(0 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0 80%); }

    /* accent-color */
    :root { accent-color: #4f86fa; }
    .form-demo { display: flex; flex-direction: column; gap: 12px; }
    .form-demo label { display: flex; align-items: center; gap: 8px; font-size: 14px; cursor: pointer; }

    /* Scroll snap */
    .snap-container {
      display: flex;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      gap: 12px;
      scrollbar-width: thin;
      scrollbar-color: #1e1e2a transparent;
      padding-bottom: 8px;
    }
    .snap-item {
      min-width: 220px;
      height: 100px;
      border-radius: 12px;
      scroll-snap-align: start;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 14px;
      flex-shrink: 0;
    }
    .snap-item:nth-child(1) { background: linear-gradient(135deg, #2250e8, #7c3aed); }
    .snap-item:nth-child(2) { background: linear-gradient(135deg, #059669, #0ea5e9); }
    .snap-item:nth-child(3) { background: linear-gradient(135deg, #dc2626, #f59e0b); }
    .snap-item:nth-child(4) { background: linear-gradient(135deg, #7c3aed, #ec4899); }
  </style>
</head>
<body>
  <h3>Fluid Typography — clamp()</h3>
  <p class="fluid-title">Learner.uz</p>

  <h3>Filter effektlar — hover qiling</h3>
  <div class="filter-grid">
    <div class="f-box f-blur">blur</div>
    <div class="f-box f-bright">brightness</div>
    <div class="f-box f-gray">grayscale</div>
    <div class="f-box f-shadow">drop-shadow</div>
  </div>

  <h3>clip-path shakllar</h3>
  <div class="shapes">
    <div class="shape circle">circle</div>
    <div class="shape diamond">diamond</div>
    <div class="shape hex">hex</div>
    <div class="shape arrow">arrow</div>
  </div>

  <h3>accent-color (checkbox, radio)</h3>
  <div class="form-demo">
    <label><input type="checkbox" checked> CSS Variables</label>
    <label><input type="checkbox"> Responsive Design</label>
    <label><input type="radio" name="r" checked> Flexbox</label>
    <label><input type="radio" name="r"> Grid</label>
  </div>

  <h3>scroll-snap — o'ngga suring</h3>
  <div class="snap-container">
    <div class="snap-item">HTML</div>
    <div class="snap-item">CSS</div>
    <div class="snap-item">JavaScript</div>
    <div class="snap-item">React</div>
  </div>
</body>
</html>`,
        notes: [
          "<code>:has()</code> — CSS da ota selektor. Hozirgi barcha zamonaviy brauzerlar qo'llaydi.",
          "<code>clip-path: polygon()</code> — har qanday shaklni yaratish mumkin. Online generator ishlating.",
          "<code>filter</code> elementning o'ziga ta'sir qiladi. <code>backdrop-filter</code> orqasiga ta'sir qiladi.",
        ],
        commonMistakes: [
          "<code>filter: drop-shadow()</code> va <code>box-shadow</code> farqi: drop-shadow rasmning real shaklini kuzatadi.",
          "<code>calc()</code> da operator atrofida bo'sh joy bo'lishi kerak: <code>calc(100% -240px)</code> — xato!",
          "<code>:has()</code> ni Firefox eski versiyasida qo'llab-quvvatlanmasligini bilmaslik.",
        ],
        practiceTask:
          "Portfolio karta yarating: rasm ustida grayscale filter (hover da rangli bo'lsin), karta yuqori burchagi clip-path bilan kesib, pastki sektsiya wave clip-path bilan. calc() bilan dinamik padding hisoblang.",
        quiz: [
          {
            question: "<code>min(500px, 100%)</code> nima qiladi?",
            options: [
              "Har doim 500px",
              "Har doim 100%",
              "500px va 100% dan kichigini tanlaydi",
              "500px va 100% dan kattasini tanlaydi",
            ],
            correct: 2,
            explanation: "<code>min()</code> — kichik qiymatni tanlaydi. Container 500px dan kichik bo'lsa 100% bo'ladi, katta bo'lsa 500px da cheklanadi.",
          },
          {
            question: "<code>:has()</code> selektor nima qiladi?",
            options: [
              "Element o'zining class ini tekshiradi",
              "Elementning ichida ma'lum element bor bo'lsa tanlaydi (ota selektor)",
              "Elementning ota elementini tanlaydi",
              "Pseudo-element yaratadi",
            ],
            correct: 1,
            explanation: "<code>:has(img)</code> — ichida img bo'lgan elementni tanlaydi. Bu CSS da ota selektori — uzoq kutilgan funksiya.",
          },
        ],
      },
    ],
  },
];
