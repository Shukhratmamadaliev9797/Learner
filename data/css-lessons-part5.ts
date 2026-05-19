// ─── PART 5: Typography, Colors, Backgrounds ──────────────────────────────

export const cssPart5Groups = [
  {
    title: "Vizual dizayn",
    lessons: [
      {
        id: "css-typography",
        slug: "tipografiya",
        title: "Tipografiya",
        description: "Font, o'lcham, vazn, line-height, letter-spacing va matn uslublari",
        sections: [
          { id: "font", title: "Font xususiyatlari" },
          { id: "text", title: "Matn xususiyatlari" },
          { id: "web-fonts", title: "Web fontlar" },
        ],
        content: `
<h1>Tipografiya</h1>
<p>Tipografiya — matnni o'qilishi qulay va estetik qilib ko'rsatish san'ati. Veb dizaynda tipografiya foydalanuvchi tajribasiga katta ta'sir qiladi.</p>

<h2 id="font">Font xususiyatlari</h2>
<ul>
  <li><code>font-family</code> — shrift nomi. Fallback zanjiri: <code>font-family: 'Inter', system-ui, sans-serif</code></li>
  <li><code>font-size</code> — o'lcham. <code>rem</code> (root-ga nisbatan), <code>em</code> (ota-ga nisbatan), <code>px</code></li>
  <li><code>font-weight</code> — qalinlik: 100–900 yoki <code>normal</code> (400), <code>bold</code> (700)</li>
  <li><code>font-style</code> — <code>italic</code>, <code>normal</code></li>
  <li><code>font-variant</code> — <code>small-caps</code></li>
  <li><code>font</code> — qisqartma: <code>font: italic 700 1.2rem/1.5 'Inter', sans-serif</code></li>
</ul>

<h2 id="text">Matn xususiyatlari</h2>
<ul>
  <li><code>line-height</code> — qator balandligi. Raqam: <code>1.6</code> (font-size ga nisbatan). Tavsiya: 1.5–1.7 kontent uchun</li>
  <li><code>letter-spacing</code> — harflar orasidagi masofa. Sarlavhalar: <code>-0.03em</code>, uppercase: <code>0.08em</code></li>
  <li><code>text-align</code> — <code>left</code>, <code>right</code>, <code>center</code>, <code>justify</code></li>
  <li><code>text-decoration</code> — <code>underline</code>, <code>line-through</code>, <code>none</code></li>
  <li><code>text-transform</code> — <code>uppercase</code>, <code>lowercase</code>, <code>capitalize</code></li>
  <li><code>white-space</code> — <code>nowrap</code>, <code>pre</code>, <code>pre-wrap</code></li>
  <li><code>word-break</code>, <code>overflow-wrap</code> — so'z ko'chishi</li>
</ul>

<h2 id="web-fonts">Web fontlar va Google Fonts</h2>
<p>Google Fonts dan import qilish:</p>
<ul>
  <li>HTML da: <code>&lt;link&gt;</code> bilan import</li>
  <li>CSS da: <code>@import url('...')</code></li>
  <li><code>@font-face</code> — o'z fontingizni qo'shish</li>
</ul>
<p><strong>Performans:</strong> <code>font-display: swap</code> — font yuklanmasa, system font ko'rsatadi, yuklanib bo'lgach almashadi.</p>
        `,
        codeExample: {
          title: "Tipografiya sistemi",
          language: "css",
          code: `/* Font scale — type scale */
:root {
  --text-xs:   0.75rem;   /* 12px */
  --text-sm:   0.875rem;  /* 14px */
  --text-base: 1rem;      /* 16px */
  --text-lg:   1.125rem;  /* 18px */
  --text-xl:   1.25rem;   /* 20px */
  --text-2xl:  1.5rem;    /* 24px */
  --text-3xl:  1.875rem;  /* 30px */
  --text-4xl:  2.25rem;   /* 36px */
}

/* Base tipografiya */
body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: var(--text-base);
  line-height: 1.6;
  color: #0a0a0f;
  -webkit-font-smoothing: antialiased;
}

/* Sarlavhalar */
h1 {
  font-size: var(--text-4xl);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.15;
}

h2 {
  font-size: var(--text-2xl);
  font-weight: 700;
  letter-spacing: -0.025em;
}

/* Kontent matni */
.prose p {
  font-size: var(--text-base);
  line-height: 1.75;
  color: #44444f;
}

/* Badge / label */
.label {
  font-size: var(--text-xs);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #8888a0;
}

/* Kod bloklari */
code {
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.875em;
  font-variant-ligatures: normal;
}

/* Web font — @font-face */
@font-face {
  font-family: 'CustomFont';
  src: url('/fonts/custom.woff2') format('woff2');
  font-weight: 400 700;
  font-style: normal;
  font-display: swap;
}`,
        },
        liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; }
    body {
      font-family: 'Inter', sans-serif;
      padding: 32px;
      background: #f6f6f7;
      color: #0a0a0f;
      max-width: 680px;
      margin: 0 auto;
    }

    .label {
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #2250e8;
      margin-bottom: 8px;
    }

    h1 {
      font-size: 2.5rem;
      font-weight: 800;
      letter-spacing: -0.04em;
      line-height: 1.1;
      margin: 0 0 12px;
    }

    .subtitle {
      font-size: 1.125rem;
      color: #8888a0;
      line-height: 1.6;
      margin-bottom: 32px;
    }

    p {
      font-size: 1rem;
      line-height: 1.75;
      color: #44444f;
      margin-bottom: 16px;
    }

    blockquote {
      border-left: 3px solid #2250e8;
      padding: 12px 20px;
      margin: 24px 0;
      background: #e8f0fe;
      border-radius: 0 8px 8px 0;
    }
    blockquote p {
      font-style: italic;
      font-size: 1.1rem;
      color: #2250e8;
      margin: 0;
    }

    .mono {
      font-family: monospace;
      background: #1e1e2a;
      color: #86efac;
      padding: 12px 16px;
      border-radius: 8px;
      font-size: 14px;
      line-height: 1.6;
    }
  </style>
</head>
<body>
  <div class="label">Tipografiya namunasi</div>
  <h1>Zamonaviy veb tipografiyasi</h1>
  <p class="subtitle">To'g'ri tipografiya sahifani professional ko'rsatadi.</p>

  <p>
    <strong>Inter</strong> — Google Fonts dan yuklangan shrift. <code>font-weight: 800</code>
    sarlavhalar uchun, <code>400</code> kontent uchun. <code>letter-spacing: -0.04em</code>
    katta sarlavhalarni yanada chiroyli qiladi.
  </p>

  <blockquote><p>Typography is not about fonts. It's about communication.</p></blockquote>

  <div class="mono">font-family: 'JetBrains Mono', monospace;<br>font-size: 14px;</div>
</body>
</html>`,
        notes: [
          "<code>rem</code> ishlatish tavsiya etiladi — foydalanuvchi brauzer shrift o'lchamini o'zgartirganda responsive bo'ladi.",
          "Sarlavhalar uchun <code>letter-spacing: -0.03em</code> — professional ko'rinish beradi.",
          "<code>-webkit-font-smoothing: antialiased</code> — Mac da shrift silliq ko'rinishi uchun.",
        ],
        commonMistakes: [
          "Juda ko'p shrift o'lchami — 3-4 ta o'lcham yetarli. Type scale ishlating.",
          "<code>px</code> bilan <code>line-height</code> berish — raqam (1.6) afzalroq, responsive.",
          "Google Fonts ni <code>@import</code> bilan yuklamasdan foydalanishga urinish.",
        ],
        practiceTask:
          "Blog maqolasi sahifasi yarating: sarlavha (katta, qalin, tight letter-spacing), muallif va sana (kichik, kulrang), kontent matni (qulay line-height), iqtibos bloki (border-left bilan). Barcha o'lchamlar rem da bo'lsin.",
        quiz: [
          {
            question: "Kontent matni uchun qaysi line-height tavsiya etiladi?",
            options: ["1.0", "1.2", "1.6", "2.5"],
            correct: 2,
            explanation: "Kontent uchun <code>line-height: 1.5–1.7</code> optimal. 1.6 eng keng qo'llaniladigan qiymat — o'qilishi qulay.",
          },
          {
            question: "<code>rem</code> va <code>em</code> farqi nima?",
            options: [
              "Farqi yo'q",
              "<code>rem</code> root (html) elementga, <code>em</code> ota elementga nisbatan",
              "<code>em</code> root ga, <code>rem</code> ota ga nisbatan",
              "Ikkalasi ham piksel",
            ],
            correct: 1,
            explanation: "<code>rem</code> — root element (html) ning font-size ga nisbatan. <code>em</code> — to'g'ridan-to'g'ri ota elementning font-size ga nisbatan. rem ishlatish odatda qulay.",
          },
        ],
      },
      {
        id: "css-colors",
        slug: "ranglar",
        title: "Ranglar va Gradientlar",
        description: "HEX, RGB, HSL, oklch, gradientlar va CSS rang tizimlari",
        sections: [
          { id: "formats", title: "Rang formatlari" },
          { id: "gradients", title: "Gradientlar" },
          { id: "modern", title: "Zamonaviy rang tizimlari" },
        ],
        content: `
<h1>Ranglar va Gradientlar</h1>
<p>CSS da ranglarni ifodalashning bir necha usuli bor. Har birining o'z afzalligi va ishlatilish joyi mavjud.</p>

<h2 id="formats">Rang formatlari</h2>
<ul>
  <li><strong>Keyword:</strong> <code>red</code>, <code>blue</code>, <code>transparent</code> — 148 ta nom</li>
  <li><strong>HEX:</strong> <code>#2250e8</code> yoki qisqa <code>#fff</code>. Alpha: <code>#2250e880</code> (50% shaffof)</li>
  <li><strong>RGB:</strong> <code>rgb(34, 80, 232)</code> — qizil, yashil, ko'k (0–255)</li>
  <li><strong>RGBA:</strong> <code>rgba(34, 80, 232, 0.5)</code> — alpha: 0 (shaffof) – 1 (qattiq)</li>
  <li><strong>HSL:</strong> <code>hsl(228, 79%, 52%)</code> — hue (0-360), saturation (%), lightness (%)</li>
  <li><strong>HSLA:</strong> <code>hsla(228, 79%, 52%, 0.8)</code></li>
</ul>

<h2 id="gradients">Gradientlar</h2>
<ul>
  <li><code>linear-gradient()</code> — chiziqli: <code>linear-gradient(135deg, #2250e8, #059669)</code></li>
  <li><code>radial-gradient()</code> — radial (markaz-dan): <code>radial-gradient(circle, #2250e8, #0a0a0f)</code></li>
  <li><code>conic-gradient()</code> — konik (aylanavchi): <code>conic-gradient(#2250e8, #059669, #2250e8)</code></li>
  <li>Ko'p rang stop: <code>linear-gradient(#f00 0%, #0f0 50%, #00f 100%)</code></li>
</ul>

<h2 id="modern">Zamonaviy: oklch va color-mix</h2>
<ul>
  <li><code>oklch(L C H)</code> — Lightness, Chroma, Hue. Perceptual uniform (ko'z uchun teng) rang fazosi</li>
  <li><code>color-mix(in srgb, blue 30%, white)</code> — ikki rangni aralashtirish</li>
  <li><code>color-mix</code> CSS variables bilan juda qulay: <code>color-mix(in srgb, var(--primary) 15%, transparent)</code></li>
</ul>
        `,
        codeExample: {
          title: "Rang va gradient namunalar",
          language: "css",
          code: `/* HSL — eng intuitiv format */
:root {
  --hue: 228;
  --primary: hsl(var(--hue), 79%, 52%);
  --primary-light: hsl(var(--hue), 79%, 95%);
  --primary-dark:  hsl(var(--hue), 79%, 35%);
}

/* Linear gradient */
.hero-bg {
  background: linear-gradient(135deg, #2250e8 0%, #7c3aed 100%);
}

/* Ko'p nuqtali gradient */
.rainbow {
  background: linear-gradient(
    90deg,
    #e34c26 0%,
    #f7df1e 25%,
    #61dafb 50%,
    #3178c6 75%,
    #68a063 100%
  );
}

/* Radial gradient — glow effekti */
.glow {
  background: radial-gradient(
    circle at center,
    rgba(34, 80, 232, 0.3) 0%,
    transparent 70%
  );
}

/* Gradient matn */
.gradient-text {
  background: linear-gradient(135deg, #2250e8, #7c3aed);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* color-mix — CSS da rang aralashtirish */
.tinted {
  background: color-mix(in srgb, #2250e8 15%, white);
}

/* Mesh gradient */
.mesh-bg {
  background-color: #0a0a0f;
  background-image:
    radial-gradient(at 40% 20%, hsl(228, 79%, 52%) 0px, transparent 50%),
    radial-gradient(at 80% 80%, hsl(142, 70%, 45%) 0px, transparent 50%),
    radial-gradient(at 20% 80%, hsl(270, 70%, 60%) 0px, transparent 50%);
}`,
        },
        liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; }
    body { font-family: sans-serif; padding: 24px; background: #0a0a0f; color: white; }

    h3 { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #8888a0; margin: 24px 0 10px; }

    /* Gradient kartalar */
    .cards { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 12px; }

    .g-card {
      height: 100px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 13px;
      font-weight: 600;
    }

    .g1 { background: linear-gradient(135deg, #2250e8, #7c3aed); }
    .g2 { background: linear-gradient(135deg, #059669, #0ea5e9); }
    .g3 { background: linear-gradient(135deg, #dc2626, #f59e0b); }
    .g4 { background: radial-gradient(circle at 30% 30%, #7c3aed, #0a0a0f); }

    /* Gradient matn */
    .gradient-title {
      font-size: 2.5rem;
      font-weight: 800;
      letter-spacing: -0.04em;
      background: linear-gradient(135deg, #4f86fa, #a78bfa);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin: 24px 0 8px;
    }

    /* Mesh background demo */
    .mesh {
      background-color: #0d0d11;
      background-image:
        radial-gradient(at 20% 30%, hsla(228, 79%, 52%, 0.5) 0px, transparent 50%),
        radial-gradient(at 80% 70%, hsla(142, 70%, 45%, 0.4) 0px, transparent 50%),
        radial-gradient(at 60% 20%, hsla(270, 70%, 60%, 0.4) 0px, transparent 50%);
      height: 120px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 15px;
      margin-top: 24px;
    }
  </style>
</head>
<body>
  <h3>Linear gradientlar</h3>
  <div class="cards">
    <div class="g-card g1">Binafsha → Ko'k</div>
    <div class="g-card g2">Yashil → Gʻovur</div>
    <div class="g-card g3">Qizil → Sariq</div>
    <div class="g-card g4">Radial gradient</div>
  </div>

  <div class="gradient-title">Gradient matn</div>
  <p style="color:#8888a0;font-size:14px">-webkit-background-clip: text bilan yaratilgan</p>

  <div class="mesh">Mesh Gradient fon</div>
</body>
</html>`,
        notes: [
          "HSL formatida rang sxemasi yaratish oson — bir xil hue, har xil lightness.",
          "<code>color-mix()</code> zamonaviy brauzerlar qo'llaydi — CSS preprocessor siz rang aralashtirishga imkon beradi.",
          "Gradient matn uchun: <code>background-clip: text</code> + <code>-webkit-text-fill-color: transparent</code>.",
        ],
        commonMistakes: [
          "Gradient matnda <code>color</code> o'rniga faqat <code>-webkit-text-fill-color</code> ni unuting — ikkalasi kerak.",
          "RGBA shaffoflik uchun <code>rgba()</code> va HEX alpha (<code>#ffffff80</code>) aralashtirib ishlatish — tutarsizlik.",
          "Ko'p rangli gradient da rang stop larni foiz bilan aniq belgilamas — kutilmagan natija chiqadi.",
        ],
        practiceTask:
          "Qoʻngʻiroq kartasi yarating: gradient fon (135deg, ikki rang), gradient sarlavha matni, va RGBA overlay bilan fon qoraytirish effekti. Ustiga kelganda (hover) gradient yo'nalishi o'zgarsin.",
        quiz: [
          {
            question: "<code>hsl(228, 79%, 52%)</code> da 52% nima?",
            options: ["Hue (rang turi)", "Saturation (to'yinlik)", "Lightness (yorqinlik)", "Alpha (shaffoflik)"],
            correct: 2,
            explanation: "HSL: Hue (0-360, rang turi), Saturation (0-100%, to'yinlik), Lightness (0-100%, yorqinlik). 52% — yorqinlik (lightness).",
          },
          {
            question: "Gradient matn yaratish uchun qaysi xususiyat kerak?",
            options: [
              "<code>color: gradient</code>",
              "<code>background: gradient</code> va <code>background-clip: text</code>",
              "<code>text-gradient: linear</code>",
              "<code>fill: gradient</code>",
            ],
            correct: 1,
            explanation: "Gradient matn: <code>background: linear-gradient(...)</code> + <code>background-clip: text</code> + <code>-webkit-text-fill-color: transparent</code>.",
          },
        ],
      },
      {
        id: "css-backgrounds",
        slug: "fonlar",
        title: "Background xususiyatlari",
        description: "background-color, image, size, position, repeat, blend-mode",
        sections: [
          { id: "basics", title: "Asosiy xususiyatlar" },
          { id: "image", title: "Background image" },
          { id: "advanced", title: "Ilg'or xususiyatlar" },
        ],
        content: `
<h1>Background xususiyatlari</h1>
<p>CSS background xususiyatlari sahifa va elementlarning fonini to'liq boshqaradi — rang, rasm, o'lcham, joylashuv, takrorlanish va ko'p qatlamli fonlar.</p>

<h2 id="basics">Asosiy background xususiyatlari</h2>
<ul>
  <li><code>background-color</code> — fon rangi</li>
  <li><code>background-image</code> — fon rasmi yoki gradient</li>
  <li><code>background-repeat</code> — takrorlanish: <code>no-repeat</code>, <code>repeat</code>, <code>repeat-x</code>, <code>repeat-y</code></li>
  <li><code>background-position</code> — joylashuv: <code>center</code>, <code>top right</code>, <code>50% 30%</code></li>
  <li><code>background-size</code> — o'lcham: <code>cover</code>, <code>contain</code>, <code>100px 200px</code>, <code>50%</code></li>
  <li><code>background-attachment</code> — scroll bilan harakat: <code>scroll</code> (default), <code>fixed</code> (parallax), <code>local</code></li>
  <li><code>background</code> — qisqartma</li>
</ul>

<h2 id="image">background-image va background-size</h2>
<ul>
  <li><code>background-size: cover</code> — element to'liq to'ldiradi, nisbat saqlanadi (keng ishlatiladi)</li>
  <li><code>background-size: contain</code> — to'liq ko'rinadi, element to'liq to'lmaydi</li>
  <li>Gradient + rasm kombinatsiyasi: <code>background-image: linear-gradient(...), url(...)</code></li>
</ul>

<h2 id="advanced">Ilg'or xususiyatlar</h2>
<ul>
  <li><code>background-clip</code> — fon qaysi qatlamda ko'rinadi: <code>border-box</code>, <code>padding-box</code>, <code>content-box</code>, <code>text</code></li>
  <li><code>background-origin</code> — fon boshlash nuqtasi</li>
  <li><code>mix-blend-mode</code> — qatlam effektlari: <code>multiply</code>, <code>screen</code>, <code>overlay</code></li>
  <li><code>backdrop-filter</code> — orqa fondagi effektlar: <code>blur()</code>, <code>brightness()</code> — frosted glass uchun</li>
  <li>Ko'p qatlamli fon: vergul bilan ajratilgan bir necha gradient/rasm</li>
</ul>
        `,
        codeExample: {
          title: "Background namunalar",
          language: "css",
          code: `/* Asosiy rasm fon */
.hero {
  background-image: url('/images/hero.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 400px;
}

/* Gradient + rasm — bir vaqtda */
.overlay-hero {
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),
    url('/images/hero.jpg');
  background-size: cover;
  background-position: center;
}

/* Frosted glass — zamonaviy effekt */
.glass-card {
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
}

/* Parallax effekti */
.parallax {
  background-image: url('/bg.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}

/* Ko'p qatlamli gradient fon */
.multi-layer {
  background:
    radial-gradient(at 0% 0%, hsl(228, 79%, 52%) 0px, transparent 40%),
    radial-gradient(at 100% 100%, hsl(142, 70%, 45%) 0px, transparent 40%),
    #0a0a0f;
}

/* Pattern — CSS bilan geometrik naqsh */
.dots-pattern {
  background-color: #f6f6f7;
  background-image: radial-gradient(circle, #d0d0e0 1px, transparent 1px);
  background-size: 20px 20px;
}

.grid-pattern {
  background-color: #ffffff;
  background-image:
    linear-gradient(rgba(34, 80, 232, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(34, 80, 232, 0.08) 1px, transparent 1px);
  background-size: 40px 40px;
}`,
        },
        liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; }
    body { font-family: sans-serif; margin: 0; }

    .demo {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0;
      min-height: 100vh;
    }

    /* Gradient hero */
    .hero-section {
      background: linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 100%);
      background-image:
        radial-gradient(at 20% 30%, hsla(228, 79%, 52%, 0.4) 0px, transparent 50%),
        radial-gradient(at 80% 70%, hsla(142, 70%, 45%, 0.3) 0px, transparent 50%),
        linear-gradient(135deg, #0a0a0f, #1a1a2e);
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 48px;
      color: white;
    }

    .hero-section h1 {
      font-size: 2.5rem;
      font-weight: 800;
      letter-spacing: -0.04em;
      margin: 0 0 12px;
    }

    .hero-section p {
      color: rgba(255,255,255,0.6);
      font-size: 1.1rem;
      line-height: 1.6;
      margin: 0 0 24px;
    }

    .hero-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(255,255,255,0.1);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(255,255,255,0.2);
      color: white;
      padding: 10px 20px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 600;
      width: fit-content;
    }

    /* Grid pattern panel */
    .pattern-section {
      background-color: #ffffff;
      background-image:
        linear-gradient(rgba(34, 80, 232, 0.06) 1px, transparent 1px),
        linear-gradient(90deg, rgba(34, 80, 232, 0.06) 1px, transparent 1px);
      background-size: 32px 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 48px;
    }

    /* Frosted glass karta */
    .glass {
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255,255,255,0.9);
      border-radius: 16px;
      padding: 28px;
      box-shadow: 0 4px 24px rgba(34,80,232,0.12);
      width: 100%;
      max-width: 280px;
    }

    .glass h3 { margin: 0 0 8px; font-size: 16px; }
    .glass p { color: #8888a0; font-size: 13px; line-height: 1.5; margin: 0; }
  </style>
</head>
<body>
  <div class="demo">
    <div class="hero-section">
      <h1>CSS Backgrounds</h1>
      <p>Mesh gradient fon, ko'p qatlamli backgroundlar va zamonaviy effektlar.</p>
      <div class="hero-btn">Boshlash →</div>
    </div>

    <div class="pattern-section">
      <div class="glass">
        <h3>Frosted Glass</h3>
        <p>backdrop-filter: blur(12px) bilan yaratilgan. Grid pattern fonida ko'rinmoqda.</p>
      </div>
    </div>
  </div>
</body>
</html>`,
        notes: [
          "<code>background-size: cover</code> — hero seksiyalar uchun standart. Rasm kesmaydi, to'liq to'ldiradi.",
          "<code>backdrop-filter</code> — frosted glass effekti uchun. Ota element nisbiy pozitsiyada bo'lishi shart.",
          "CSS pattern lar (dots, grid) SVG yoki rasm ishlatmasdan yaratiladi — yengil va scalable.",
        ],
        commonMistakes: [
          "Background rasm yo'li noto'g'ri — brauzer devtoolsda 404 tekshiring.",
          "<code>background-attachment: fixed</code> — iOS Safari da parallax ishlamaydi.",
          "Ko'p qatlamli backgroundda gradient birinchi, rasm ikkinchi bo'lishi kerak (ustdan pastga tartib).",
        ],
        practiceTask:
          "Hero sektsiya yarating: to'liq ekran balandligi, gradient fon (2 rang, diagonal), ustiga overlay (qorong'ilashtiruvchi gradient), markazda oq matn va frosted glass tugma. Dots pattern bilan ajratilgan pastki sektsiya.",
        quiz: [
          {
            question: "<code>background-size: cover</code> nima qiladi?",
            options: [
              "Rasm o'z o'lchamida qoladi",
              "Rasm to'liq ko'rinadi, element bo'sh qolishi mumkin",
              "Rasm elementni to'liq to'ldiradi, nisbat saqlanadi",
              "Rasm cho'ziladi",
            ],
            correct: 2,
            explanation: "<code>cover</code> — rasm elementni to'liq to'ldiradi, nisbat saqlanadi, lekin tomonlari kesilib chiqishi mumkin. Hero rasmlari uchun ideal.",
          },
          {
            question: "Frosted glass effekti uchun qaysi xususiyat ishlatiladi?",
            options: ["<code>background: blur</code>", "<code>filter: blur</code>", "<code>backdrop-filter: blur()</code>", "<code>opacity: 0.5</code>"],
            correct: 2,
            explanation: "<code>backdrop-filter: blur()</code> — element orqasidagi kontentni (fonni) blur qiladi. Bu frosted glass effektini hosil qiladi. <code>filter: blur</code> esa elementning o'zini blur qiladi.",
          },
        ],
      },
    ],
  },
];
