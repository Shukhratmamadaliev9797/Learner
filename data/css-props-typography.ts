import type { Lesson } from "@/lib/types";

export const cssTypographyProps: Lesson[] = [
  {
    id: "prop-color",
    slug: "prop-color",
    title: "color",
    description: "Matn rangini belgilaydi",
    sections: [{ id: "overview", title: "Tavsif" }],
    content: `<h2 id="overview">Tavsif</h2>
<p><code>color</code> — matn va text decoration rangini belgilaydi. Meros olinadigan (inheritable) xususiyat — farzandlar ota elementdan oladi.</p>
<ul>
  <li>Named: <code>red</code>, <code>blue</code>, <code>transparent</code></li>
  <li>Hex: <code>#ff0000</code>, <code>#f00</code></li>
  <li>RGB: <code>rgb(255, 0, 0)</code></li>
  <li>RGBA: <code>rgba(255, 0, 0, 0.5)</code> — shaffoflik bilan</li>
  <li>HSL: <code>hsl(0, 100%, 50%)</code></li>
  <li>HSLA: <code>hsla(0, 100%, 50%, 0.5)</code></li>
  <li>Modern: <code>oklch()</code>, <code>lab()</code>, <code>color()</code></li>
  <li><code>currentColor</code> — hozirgi color qiymatidan foydalanish</li>
</ul>`,
    codeExample: {
      title: "color xususiyati",
      language: "css",
      code: `h1 { color: #e34c26; }
p  { color: rgb(68, 68, 79); }
a  { color: hsl(220, 80%, 55%); }

/* RGBA — shaffoflik */
.muted { color: rgba(0, 0, 0, 0.45); }

/* currentColor — SVG va border uchun */
.icon {
  color: #2965f1;
  border: 2px solid currentColor; /* #2965f1 */
}
.icon svg { fill: currentColor; }  /* #2965f1 */

/* CSS o'zgaruvchi */
:root { --text-primary: #0a0a0f; }
body  { color: var(--text-primary); }`,
    },
    liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>color</title>
  <style>
    body { font-family: Arial; padding: 20px; }
    .red     { color: #e34c26; }
    .blue    { color: #2965f1; }
    .muted   { color: rgba(0,0,0,0.4); }
    .hsl     { color: hsl(140, 60%, 35%); }
    .inherit { color: inherit; }
    .parent  { color: #e34c26; }
  </style>
</head>
<body>
  <p class="red">color: #e34c26 (hex)</p>
  <p class="blue">color: #2965f1 (hex)</p>
  <p class="muted">color: rgba(0,0,0,0.4) — 40% shaffoflik</p>
  <p class="hsl">color: hsl(140, 60%, 35%)</p>
  <div class="parent">
    Ota (qizil)
    <p class="inherit">Farzand — color: inherit (ham qizil)</p>
  </div>
</body>
</html>`,
    notes: [
      "color — meros olinadi (farzandlarga avtomatik o'tadi)",
      "currentColor — mavjud color ni boshqa xususiyatlarda qayta ishlatish",
      "oklch() — zamonaviy, keng gamut ranglar uchun",
    ],
    commonMistakes: [
      "background-color bilan color ni aralashtirib yuborish",
      "Low contrast — accessibility uchun minimum 4.5:1 kontrast nisbat",
    ],
    practiceTask: "Sarlavhaga hex, paragrafga rgba va havola uchun hsl rang bering.",
    quiz: [
      {
        question: "currentColor nima qiladi?",
        options: [
          "Elementning background rangini oladi",
          "Hozirgi color xususiyatining qiymatidan foydalanadi",
          "Brauzer default rangini oladi",
          "Ota elementning background ini oladi",
        ],
        correct: 1,
        explanation: "currentColor — elementning hozirgi color qiymatini referans qiladi. border, fill, SVG da foydali.",
      },
    ],
  },

  {
    id: "prop-font-family",
    slug: "prop-font-family",
    title: "font-family",
    description: "Shrift oilasini belgilaydi",
    sections: [{ id: "overview", title: "Tavsif" }],
    content: `<h2 id="overview">Tavsif</h2>
<p><code>font-family</code> — matn uchun shrift oilasini belgilaydi. Bir nechta shrift virgul bilan beriladi — fallback zanjiri.</p>
<ul>
  <li>Shrift nomi bo'sh joy bo'lsa tirnoq ichida: <code>'Open Sans'</code></li>
  <li>Generic oilalar: <code>serif</code>, <code>sans-serif</code>, <code>monospace</code>, <code>cursive</code>, <code>fantasy</code>, <code>system-ui</code></li>
  <li>Har doim generic oila bilan tugatish</li>
  <li>Google Fonts, Adobe Fonts yoki @font-face bilan custom shrift</li>
  <li>CSS o'zgaruvchi: <code>--font-sans: 'Inter', sans-serif</code></li>
</ul>`,
    codeExample: {
      title: "font-family",
      language: "css",
      code: `/* Fallback zanjiri */
body {
  font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
}

/* Monospace — kod uchun */
code, pre {
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
}

/* System font stack */
body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont,
               'Segoe UI', Roboto, sans-serif;
}

/* @font-face custom shrift */
@font-face {
  font-family: 'MyFont';
  src: url('myfont.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
}`,
    },
    liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>font-family</title>
  <style>
    body { padding: 20px; }
    .sans   { font-family: Arial, sans-serif; font-size: 18px; }
    .serif  { font-family: Georgia, 'Times New Roman', serif; font-size: 18px; }
    .mono   { font-family: 'Courier New', monospace; font-size: 18px; }
    .system { font-family: system-ui, sans-serif; font-size: 18px; }
  </style>
</head>
<body>
  <p class="sans">sans-serif: Arial — zamonaviy, o'qish oson</p>
  <p class="serif">serif: Georgia — klassik, elegantlik</p>
  <p class="mono">monospace: Courier — kod yozish uchun</p>
  <p class="system">system-ui — tizim shrifti</p>
</body>
</html>`,
    notes: [
      "Har doim generic oila bilan tugating (sans-serif, serif, monospace)",
      "woff2 format — eng yaxshi kompressiya, zamonaviy brauzerlar qo'llaydi",
      "font-display: swap — shrift yuklanguncha tizim shriftini ko'rsatadi",
    ],
    commonMistakes: [
      "Shrift nomida bo'sh joy bo'lsa tirnoq qo'ymaslik",
      "Generic oilasiz qoldirish — shrift yuklanmasa hech narsa ko'rinmaydi",
    ],
    practiceTask: "Sarlavha uchun serif, matn uchun sans-serif, kod uchun monospace shrift bering.",
    quiz: [
      {
        question: "font-family da shrift topilmasa nima bo'ladi?",
        options: [
          "Xato chiqadi",
          "Keyingi shriftga o'tadi (fallback)",
          "Matn ko'rinmaydi",
          "Default font saqlanadi",
        ],
        correct: 1,
        explanation: "font-family — fallback zanjiri. Birinchi shrift topilmasa, ikkinchisiga o'tadi va hokazo. Oxiridagi generic oila kafolat.",
      },
    ],
  },

  {
    id: "prop-font-size",
    slug: "prop-font-size",
    title: "font-size",
    description: "Shrift o'lchamini belgilaydi",
    sections: [{ id: "overview", title: "Tavsif" }],
    content: `<h2 id="overview">Tavsif</h2>
<p><code>font-size</code> — shrift o'lchamini belgilaydi. Meros olinadi.</p>
<ul>
  <li><code>px</code> — piksel, absolyut (default: 16px)</li>
  <li><code>em</code> — ota elementning font-size ga nisbatan</li>
  <li><code>rem</code> — root elementning font-size ga nisbatan (tavsiya)</li>
  <li><code>%</code> — ota font-size ning foizi</li>
  <li><code>vw</code> — viewport kengligining foizi (fluid)</li>
  <li><code>clamp(min, preferred, max)</code> — responsive font (tavsiya)</li>
  <li>Kalit so'zlar: <code>small</code>, <code>medium</code>, <code>large</code>, <code>x-large</code>, <code>smaller</code>, <code>larger</code></li>
</ul>`,
    codeExample: {
      title: "font-size",
      language: "css",
      code: `/* Absolyut */
h1 { font-size: 36px; }
p  { font-size: 16px; }

/* rem — root ga nisbatan (tavsiya) */
html { font-size: 16px; }  /* 1rem = 16px */
h1   { font-size: 2.25rem; }   /* 36px */
h2   { font-size: 1.5rem; }    /* 24px */
p    { font-size: 1rem; }      /* 16px */
small{ font-size: 0.875rem; }  /* 14px */

/* Responsive fluid */
h1 {
  font-size: clamp(1.5rem, 5vw, 3rem);
}

/* em — ota font-size ga nisbatan */
.container { font-size: 18px; }
.child     { font-size: 1.5em; } /* 27px */`,
    },
    liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>font-size</title>
  <style>
    body { font-family: Arial; padding: 20px; }
    .px   { font-size: 24px; }
    .rem  { font-size: 1.5rem; }
    .em   { font-size: 1.5em; }
    .clamp{ font-size: clamp(1rem, 4vw, 2.5rem); }
    .parent { font-size: 16px; border: 1px dashed #ccc; padding: 8px; }
    .child  { font-size: 1.5em; }
  </style>
</head>
<body>
  <p class="px">font-size: 24px</p>
  <p class="rem">font-size: 1.5rem (24px)</p>
  <p class="clamp">font-size: clamp(1rem, 4vw, 2.5rem) — oynani kichraytib ko'ring</p>
  <div class="parent">
    Ota: 16px
    <p class="child">Farzand: 1.5em = 24px</p>
  </div>
</body>
</html>`,
    notes: [
      "rem — eng bashoratli (ota font-size ga bog'liq emas)",
      "clamp() — fluid typography, media query siz",
      "html { font-size: 62.5% } — 1rem = 10px (hisoblash oson)",
    ],
    commonMistakes: [
      "em ni ichma-ich ishlatish — kaskad effekti (1.2em × 1.2em = 1.44em)",
      "Juda kichik font-size (12px dan kichik) — o'qish qiyin",
    ],
    practiceTask: "clamp(1rem, 3vw, 2.5rem) bilan responsive sarlavha yarating.",
    quiz: [
      {
        question: "rem va em farqi nima?",
        options: [
          "Hech qanday farqi yo'q",
          "rem — root html font-size ga, em — ota element font-size ga nisbatan",
          "em — root ga, rem — ota elementga nisbatan",
          "rem piksel, em foiz",
        ],
        correct: 1,
        explanation: "rem — doim html (root) elementning font-size iga nisbatan. em — to'g'ridan-to'g'ri ota elementiga nisbatan (kaskadlanadi).",
      },
    ],
  },

  {
    id: "prop-font-weight",
    slug: "prop-font-weight",
    title: "font-weight",
    description: "Shrift qalinligini belgilaydi",
    sections: [{ id: "overview", title: "Tavsif" }],
    content: `<h2 id="overview">Tavsif</h2>
<p><code>font-weight</code> — shrift qalinligi. 100 dan 900 gacha yoki kalit so'z bilan.</p>
<ul>
  <li><code>100</code> — Thin</li>
  <li><code>200</code> — ExtraLight</li>
  <li><code>300</code> — Light</li>
  <li><code>400</code> — Regular (normal)</li>
  <li><code>500</code> — Medium</li>
  <li><code>600</code> — SemiBold</li>
  <li><code>700</code> — Bold</li>
  <li><code>800</code> — ExtraBold</li>
  <li><code>900</code> — Black</li>
  <li><code>normal</code> = 400, <code>bold</code> = 700</li>
  <li><code>bolder</code> / <code>lighter</code> — ota elementga nisbatan</li>
</ul>`,
    codeExample: {
      title: "font-weight",
      language: "css",
      code: `.thin       { font-weight: 100; }
.light      { font-weight: 300; }
.normal     { font-weight: 400; }  /* = normal */
.medium     { font-weight: 500; }
.semibold   { font-weight: 600; }
.bold       { font-weight: 700; }  /* = bold */
.extrabold  { font-weight: 800; }
.black      { font-weight: 900; }`,
    },
    liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>font-weight</title>
  <style>
    body { font-family: Arial; padding: 20px; font-size: 18px; }
    .w100 { font-weight: 100; }
    .w300 { font-weight: 300; }
    .w400 { font-weight: 400; }
    .w500 { font-weight: 500; }
    .w600 { font-weight: 600; }
    .w700 { font-weight: 700; }
    .w800 { font-weight: 800; }
    .w900 { font-weight: 900; }
  </style>
</head>
<body>
  <p class="w100">font-weight: 100 — Thin</p>
  <p class="w300">font-weight: 300 — Light</p>
  <p class="w400">font-weight: 400 — Regular</p>
  <p class="w500">font-weight: 500 — Medium</p>
  <p class="w600">font-weight: 600 — SemiBold</p>
  <p class="w700">font-weight: 700 — Bold</p>
  <p class="w800">font-weight: 800 — ExtraBold</p>
  <p class="w900">font-weight: 900 — Black</p>
</body>
</html>`,
    notes: [
      "Shrift fayli o'sha qalinlikni qo'llab-quvvatlamasa brauzer eng yaqin topadi",
      "Variable fonts — bitta fayl bilan barcha qalinliklar",
      "font-weight: bold = 700, normal = 400",
    ],
    commonMistakes: [
      "Shrift 400 va 700 dan boshqa qalinliklarni yuklamaslik",
    ],
    practiceTask: "Sarlavha 700, matn 400, yordam matn 300 qalinlikda yozing.",
    quiz: [
      {
        question: "font-weight: bold qaysi raqamga teng?",
        options: ["600", "700", "800", "900"],
        correct: 1,
        explanation: "bold = 700, normal = 400. Qolgan qiymatlar uchun raqam ishlatiladi.",
      },
    ],
  },

  {
    id: "prop-font-style",
    slug: "prop-font-style",
    title: "font-style",
    description: "Shrift uslubini belgilaydi",
    sections: [{ id: "overview", title: "Tavsif" }],
    content: `<h2 id="overview">Tavsif</h2>
<p><code>font-style</code> — shriftning kursiv yoki oddiy ko'rinishini belgilaydi.</p>
<ul>
  <li><code>normal</code> — oddiy (default)</li>
  <li><code>italic</code> — kursiv shrift (shrift maxsus kursiv versiyasi)</li>
  <li><code>oblique</code> — oddiy shrift qiyalantiriladi (5deg dan 90deg gacha)</li>
</ul>`,
    codeExample: {
      title: "font-style",
      language: "css",
      code: `.normal   { font-style: normal; }
.italic   { font-style: italic; }
.oblique  { font-style: oblique 15deg; }

/* Kursiv o'chirish */
em, i { font-style: normal; }`,
    },
    liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>font-style</title>
  <style>
    body { font-family: Georgia, serif; padding: 20px; font-size: 20px; }
    .normal  { font-style: normal; }
    .italic  { font-style: italic; }
    .oblique { font-style: oblique; }
  </style>
</head>
<body>
  <p class="normal">font-style: normal — oddiy</p>
  <p class="italic">font-style: italic — haqiqiy kursiv</p>
  <p class="oblique">font-style: oblique — qiyalangan</p>
</body>
</html>`,
    notes: [
      "italic — shriftning alohida kursiv versiyasi",
      "oblique — oddiy shriftni matematikavi qiyalantiradi",
      "Serif shriftlarda italic yaxshi ko'rinadi",
    ],
    commonMistakes: ["italic va oblique ni bir xil deb hisoblash"],
    practiceTask: "Iqtibos bloki uchun font-style: italic bering.",
    quiz: [
      {
        question: "italic va oblique farqi nima?",
        options: [
          "Hech qanday farqi yo'q",
          "italic — shriftning kursiv versiyasi, oblique — matematik qiyalash",
          "oblique — shriftning kursiv versiyasi",
          "italic faqat serif shriftlarda",
        ],
        correct: 1,
        explanation: "italic — shrift oilasida maxsus kursiv versiya bo'lsa ishlatadi. oblique — oddiy shriftni burchakka qiyalashtiradi.",
      },
    ],
  },

  {
    id: "prop-line-height",
    slug: "prop-line-height",
    title: "line-height",
    description: "Qator balandligini belgilaydi",
    sections: [{ id: "overview", title: "Tavsif" }],
    content: `<h2 id="overview">Tavsif</h2>
<p><code>line-height</code> — qator balandligi. O'qish qulayligi uchun juda muhim. Meros olinadi.</p>
<ul>
  <li>Birliksiz raqam (tavsiya): <code>1.5</code> — font-size ga ko'paytiriladi</li>
  <li>px: <code>24px</code> — absolyut</li>
  <li>em/rem: <code>1.5em</code></li>
  <li>Foiz: <code>150%</code></li>
  <li><code>normal</code> — brauzer default (~1.2)</li>
  <li>Matn uchun 1.4–1.6 tavsiya, sarlavha uchun 1.1–1.3</li>
</ul>`,
    codeExample: {
      title: "line-height",
      language: "css",
      code: `/* Birliksiz (tavsiya) */
body { line-height: 1.6; }

/* Sarlavha */
h1 { line-height: 1.15; font-size: 3rem; }
h2 { line-height: 1.2; }

/* Qalin matn */
p { line-height: 1.7; }

/* Kod bloki */
pre { line-height: 1.5; }

/* Bir qatorli — vertikal markazlashtirish */
.btn { height: 48px; line-height: 48px; }`,
    },
    liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>line-height</title>
  <style>
    body { font-family: Arial; padding: 20px; }
    .lh1   { line-height: 1; background: #fff3f0; padding: 8px; margin: 8px 0; border-radius: 4px; }
    .lh15  { line-height: 1.5; background: #f0f3ff; padding: 8px; margin: 8px 0; border-radius: 4px; }
    .lh2   { line-height: 2; background: #f0fff4; padding: 8px; margin: 8px 0; border-radius: 4px; }
  </style>
</head>
<body>
  <p class="lh1">line-height: 1 — juda zich. Bu uzoq matn uchun o'qish qiyin bo'ladi. Qatorlar bir-biriga yaqin.</p>
  <p class="lh15">line-height: 1.5 — optimal. Bu uzoq matn uchun qulay o'qiladi. Qatorlar orasida yetarli joy.</p>
  <p class="lh2">line-height: 2 — keng. Bu uzoq matn uchun biroz keng, lekin ayrim joylarda ishlatiladi.</p>
</body>
</html>`,
    notes: [
      "Birliksiz raqam tavsiya — farzandlar ota font-size ga nisbatan hisoblaydi",
      "Em bilan line-height — farzandlarda kaskad muammosi bo'lishi mumkin",
      "Matn uchun 1.4–1.7 ideal oraliq",
    ],
    commonMistakes: [
      "line-height: 1 — qatorlar bir-biriga tegadi",
      "line-height em bilan berish — ichma-ich elementlarda muammo",
    ],
    practiceTask: "Sarlavha uchun 1.2, paragraf uchun 1.6 line-height bering.",
    quiz: [
      {
        question: "line-height uchun qaysi format tavsiya etiladi?",
        options: [
          "Piksel (24px)",
          "Foiz (150%)",
          "Birliksiz raqam (1.5)",
          "Em (1.5em)",
        ],
        correct: 2,
        explanation: "Birliksiz raqam (1.5) tavsiya — farzandlar o'zlarining font-size ga ko'paytiradi. em/% kaskad muammo yaratishi mumkin.",
      },
    ],
  },

  {
    id: "prop-text-align",
    slug: "prop-text-align",
    title: "text-align",
    description: "Matn gorizontal tekislash",
    sections: [{ id: "overview", title: "Tavsif" }],
    content: `<h2 id="overview">Tavsif</h2>
<p><code>text-align</code> — inline kontent va matnni gorizontal tekislaydi. Block elementlarga qo'llanadi.</p>
<ul>
  <li><code>left</code> — chapga (LTR uchun default)</li>
  <li><code>right</code> — o'ngga</li>
  <li><code>center</code> — markazga</li>
  <li><code>justify</code> — ikki tomonga tekislash (so'zlar orasidagi bo'shliq kengayadi)</li>
  <li><code>start</code> — matn yo'nalishi boshlang'ichiga (LTR da left, RTL da right)</li>
  <li><code>end</code> — matn yo'nalishi oxiriga</li>
</ul>`,
    codeExample: {
      title: "text-align",
      language: "css",
      code: `.left    { text-align: left; }
.right   { text-align: right; }
.center  { text-align: center; }
.justify { text-align: justify; }

/* RTL xavfsiz */
.start   { text-align: start; }
.end     { text-align: end; }

/* Jadvalda */
th { text-align: left; }
.price { text-align: right; }`,
    },
    liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>text-align</title>
  <style>
    body { font-family: Arial; padding: 20px; }
    p { border: 1px solid #ddd; padding: 8px; margin: 8px 0; border-radius: 4px; }
    .left    { text-align: left; }
    .right   { text-align: right; }
    .center  { text-align: center; }
    .justify { text-align: justify; }
  </style>
</head>
<body>
  <p class="left">left — chapga tekislangan. Bu standart yo'nalish.</p>
  <p class="right">right — o'ngga tekislangan. Narxlar uchun qulay.</p>
  <p class="center">center — markazga. Sarlavha va tugmalar uchun.</p>
  <p class="justify">justify — ikki tomonga. Gazeta maqolalari kabi. Uzun matndaqa yaxshi ko'rinadi, qisqa matndaqa emas.</p>
</body>
</html>`,
    notes: [
      "justify — qisqa matndagi oxirgi qator chapga qoladi (text-align-last bilan boshqariladi)",
      "text-align faqat inline kontent va matnni tekislaydi (block elementni emas)",
      "start/end — RTL tillar uchun to'g'ri yo'nalish",
    ],
    commonMistakes: [
      "Block elementni markazlash uchun text-align: center ishlatish (margin: auto kerak)",
      "justify ni qisqa matnga qo'llash",
    ],
    practiceTask: "Maqola: sarlavha center, paragraflar justify, kod right tekislash.",
    quiz: [
      {
        question: "text-align: justify nima qiladi?",
        options: [
          "Matnni markazga qo'yadi",
          "Matnni chapga tekislaydi",
          "Matnni ikkala tomondan tekislaydi (so'zlar orasini kengaytiradi)",
          "Matnni o'ngga tekislaydi",
        ],
        correct: 2,
        explanation: "justify — so'zlar orasidagi masofani kengaytirib, matnni ikkala tomondan tekislaydi. Gazeta formati.",
      },
    ],
  },

  {
    id: "prop-text-decoration",
    slug: "prop-text-decoration",
    title: "text-decoration",
    description: "Matn bezaklari: tagiziq, ustiziq, o'rtaiziq",
    sections: [{ id: "overview", title: "Tavsif" }],
    content: `<h2 id="overview">Tavsif</h2>
<p><code>text-decoration</code> — matn ostida, ustida yoki o'rtasida chiziq. Shorthand: line, color, style, thickness.</p>
<ul>
  <li><code>none</code> — chiziq yo'q (havola underline ni o'chirish uchun)</li>
  <li><code>underline</code> — tagiziq</li>
  <li><code>overline</code> — ustiziq</li>
  <li><code>line-through</code> — o'rtaiziq (del element uchun)</li>
  <li><code>text-decoration-color</code> — chiziq rangi</li>
  <li><code>text-decoration-style</code> — solid, dashed, dotted, double, wavy</li>
  <li><code>text-decoration-thickness</code> — chiziq qalinligi</li>
  <li><code>text-underline-offset</code> — tagiziq va matn orasidagi masofa</li>
</ul>`,
    codeExample: {
      title: "text-decoration",
      language: "css",
      code: `/* Asosiy */
a    { text-decoration: none; }
del  { text-decoration: line-through; }
ins  { text-decoration: underline; }

/* Shorthand: line color style thickness */
.fancy {
  text-decoration: underline #e34c26 wavy 2px;
}

/* Alohida xususiyatlar */
.custom {
  text-decoration-line: underline;
  text-decoration-color: #2965f1;
  text-decoration-style: dotted;
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
}`,
    },
    liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>text-decoration</title>
  <style>
    body { font-family: Arial; padding: 20px; font-size: 18px; }
    p { margin: 10px 0; }
    .none    { text-decoration: none; color: blue; }
    .under   { text-decoration: underline; }
    .over    { text-decoration: overline; }
    .through { text-decoration: line-through; }
    .wavy    { text-decoration: underline wavy #e34c26 2px; text-underline-offset: 4px; }
    .dotted  { text-decoration: underline dotted #2965f1; text-underline-offset: 4px; }
  </style>
</head>
<body>
  <p class="none">text-decoration: none — havola underline o'chirildi</p>
  <p class="under">text-decoration: underline</p>
  <p class="over">text-decoration: overline</p>
  <p class="through">text-decoration: line-through (narx kesish)</p>
  <p class="wavy">text-decoration: underline wavy #e34c26</p>
  <p class="dotted">text-decoration: underline dotted #2965f1</p>
</body>
</html>`,
    notes: [
      "text-underline-offset — tagiziq va harflar orasidagi masofa (4px tavsiya)",
      "wavy underline — xato ko'rsatish, ta'kidlash uchun",
      "Havolalar text-decoration: none bilan stillanadi, lekin hover da qayta qo'shiladi",
    ],
    commonMistakes: [
      "text-decoration: none bilan ::before/::after chiziqni o'chira olmaslik",
    ],
    practiceTask: "Chegirma narxi uchun line-through, yangi narx uchun underline wavy bering.",
    quiz: [
      {
        question: "Havolaning tagiziqini o'chirish uchun?",
        options: [
          "underline: none",
          "text-decoration: none",
          "text-underline: none",
          "decoration: hidden",
        ],
        correct: 1,
        explanation: "text-decoration: none — havolaning default underline ni o'chiradi.",
      },
    ],
  },

  {
    id: "prop-text-transform",
    slug: "prop-text-transform",
    title: "text-transform",
    description: "Matn harflarini o'zgartirish",
    sections: [{ id: "overview", title: "Tavsif" }],
    content: `<h2 id="overview">Tavsif</h2>
<p><code>text-transform</code> — matn harflarini katta yoki kichiklatiradi. HTML o'zgarmaydi, faqat vizual.</p>
<ul>
  <li><code>none</code> — o'zgarmaydi (default)</li>
  <li><code>uppercase</code> — BARCHASI KATTA</li>
  <li><code>lowercase</code> — barchasi kichik</li>
  <li><code>capitalize</code> — Har So'zning Birinchi Harfi Katta</li>
  <li><code>full-width</code> — keng belgilar (Yapon/Xitoy matnlari bilan)</li>
</ul>`,
    codeExample: {
      title: "text-transform",
      language: "css",
      code: `.upper { text-transform: uppercase; }
.lower { text-transform: lowercase; }
.cap   { text-transform: capitalize; }

/* UI patternlar */
.btn-label { text-transform: uppercase; letter-spacing: 0.05em; }
.tag       { text-transform: capitalize; }
.error-msg { text-transform: none; }`,
    },
    liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>text-transform</title>
  <style>
    body { font-family: Arial; padding: 20px; font-size: 18px; }
    p { margin: 8px 0; }
    .upper { text-transform: uppercase; }
    .lower { text-transform: lowercase; }
    .cap   { text-transform: capitalize; }
    .btn   { text-transform: uppercase; letter-spacing: 0.1em; background: #e34c26; color: white; padding: 10px 20px; border-radius: 6px; display: inline-block; margin-top: 12px; }
  </style>
</head>
<body>
  <p class="upper">uppercase: salom dunyo</p>
  <p class="lower">lowercase: SALOM DUNYO</p>
  <p class="cap">capitalize: salom dunyo</p>
  <div class="btn">yuborish (uppercase)</div>
</body>
</html>`,
    notes: [
      "HTML kodi o'zgarmaydi — faqat vizual ko'rinish",
      "capitalize — har so'zning BIRINCHI harfi, qolgani o'zgarmaydi",
      "Tugmalar uchun uppercase + letter-spacing kombinatsiyasi keng ishlatiladi",
    ],
    commonMistakes: [
      "capitalize va uppercase ni aralashtirib yuborish",
    ],
    practiceTask: "Navigatsiya linklari uchun uppercase, blog yorliqlari uchun capitalize bering.",
    quiz: [
      {
        question: "text-transform: capitalize nima qiladi?",
        options: [
          "Barcha harflarni katta qiladi",
          "Har bir so'zning birinchi harfini katta qiladi",
          "Barcha harflarni kichik qiladi",
          "Faqat birinchi so'zning birinchi harfini katta qiladi",
        ],
        correct: 1,
        explanation: "capitalize — har bir so'zning birinchi harfini katta qiladi. Qolgan harflar o'zgarmaydi.",
      },
    ],
  },

  {
    id: "prop-letter-word-spacing",
    slug: "prop-letter-word-spacing",
    title: "letter-spacing / word-spacing",
    description: "Harf va so'z oraliqlarini belgilaydi",
    sections: [{ id: "overview", title: "Tavsif" }],
    content: `<h2 id="overview">Tavsif</h2>
<p><code>letter-spacing</code> — harflar orasidagi qo'shimcha masofa (tracking). <code>word-spacing</code> — so'zlar orasidagi masofa.</p>
<ul>
  <li>px, em, rem qiymatlar (manfiy ham mumkin)</li>
  <li>Uppercase matn uchun letter-spacing: 0.05–0.1em tavsiya</li>
  <li>word-spacing default: 0.25em</li>
</ul>`,
    codeExample: {
      title: "letter-spacing va word-spacing",
      language: "css",
      code: `/* Keng harf oralig'i — uppercase bilan */
.label {
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

/* Tor — zamonaviy sarlavha */
.hero { letter-spacing: -0.03em; font-size: 4rem; }

/* So'z oralig'i */
.spaced { word-spacing: 0.3em; }

/* Manfiy */
.tight { letter-spacing: -0.02em; }`,
    },
    liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>letter-spacing</title>
  <style>
    body { font-family: Arial; padding: 20px; }
    p { font-size: 20px; margin: 10px 0; }
    .normal  { letter-spacing: normal; }
    .wide    { letter-spacing: 0.1em; }
    .tight   { letter-spacing: -0.03em; }
    .upper   { text-transform: uppercase; letter-spacing: 0.15em; font-size: 14px; color: #888; }
    .word    { word-spacing: 0.5em; }
  </style>
</head>
<body>
  <p class="normal">letter-spacing: normal</p>
  <p class="wide">letter-spacing: 0.1em — keng</p>
  <p class="tight">letter-spacing: -0.03em — tor sarlavha</p>
  <p class="upper">uppercase + letter-spacing: 0.15em</p>
  <p class="word">word-spacing: 0.5em — so'zlar oralig'i</p>
</body>
</html>`,
    notes: [
      "Manfiy letter-spacing — katta sarlavhalarda yaxshi ko'rinishi mumkin",
      "Uppercase matn uchun biroz keng letter-spacing tavsiya",
      "Juda katta qiymatlar o'qishni qiyinlashtiradi",
    ],
    commonMistakes: [
      "Oddiy matnda letter-spacing ishlatish — o'qish qiyinlashadi",
    ],
    practiceTask: "Sarlavha uchun manfiy letter-spacing, nav uchun uppercase + keng letter-spacing.",
    quiz: [
      {
        question: "Uppercase matn uchun letter-spacing qanday bo'lishi tavsiya etiladi?",
        options: [
          "Manfiy qiymat",
          "0 (default)",
          "0.05–0.1em biroz keng",
          "letter-spacing kerak emas",
        ],
        correct: 2,
        explanation: "Uppercase matnda harflar zich ko'rinadi. 0.05–0.1em kenglik o'qishni yaxshilaydi.",
      },
    ],
  },

  {
    id: "prop-white-space",
    slug: "prop-white-space",
    title: "white-space",
    description: "Bo'sh joylar va satr uzishlarni boshqarish",
    sections: [{ id: "overview", title: "Tavsif" }],
    content: `<h2 id="overview">Tavsif</h2>
<p><code>white-space</code> — HTML dagi bo'sh joy, tab va yangi qatorlarni qanday ko'rsatishni belgilaydi.</p>
<ul>
  <li><code>normal</code> — default. Bo'sh joylar birlashadi, satr uziladi</li>
  <li><code>nowrap</code> — satr uzilmaydi (text-overflow bilan ishlatiladi)</li>
  <li><code>pre</code> — bo'sh joylar saqlanadi, satr uzilmaydi (<code>&lt;pre&gt;</code> kabi)</li>
  <li><code>pre-wrap</code> — bo'sh joylar saqlanadi, satr uziladi</li>
  <li><code>pre-line</code> — bo'sh joylar birlashadi, yangi qator saqlanadi</li>
  <li><code>break-spaces</code> — pre-wrap o'xshash, bo'sh joylar har doim joyini egallaydi</li>
</ul>`,
    codeExample: {
      title: "white-space",
      language: "css",
      code: `/* Matn qisqartirish pattern */
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Kod bloki */
pre, code {
  white-space: pre-wrap;
}

/* Jadval katakchasi — uzilmasin */
.no-wrap { white-space: nowrap; }`,
    },
    liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>white-space</title>
  <style>
    body { font-family: Arial; padding: 20px; }
    .box { border: 1px solid #ddd; padding: 8px; margin: 8px 0; width: 250px; border-radius: 4px; }
    .normal  { white-space: normal; }
    .nowrap  { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .pre     { white-space: pre; }
    .prewrap { white-space: pre-wrap; }
  </style>
</head>
<body>
  <p><strong>normal:</strong></p>
  <div class="box normal">Bu juda uzun matn normal holatda satr uzadi va muammosiz ko'rsatiladi.</div>

  <p><strong>nowrap + ellipsis:</strong></p>
  <div class="box nowrap">Bu juda uzun matn qisqartiriladi va uch nuqta bilan tugaydi.</div>

  <p><strong>pre (bo'sh joylar saqlanadi):</strong></p>
  <div class="box pre">Birinchi   qator
  Ikkinchi qator
    Uchinchi</div>

  <p><strong>pre-wrap:</strong></p>
  <div class="box prewrap">Bo'sh    joylar saqlanadi
lekin satr uziladi agar joy yetmasa.</div>
</body>
</html>`,
    notes: [
      "nowrap — matnni bir qatorda ushlab turadi, text-overflow bilan ishlatiladi",
      "pre — kod bloklari uchun",
      "pre-wrap — pre + satr uziladi (kod bloklari uchun yaxshiroq)",
    ],
    commonMistakes: [
      "text-overflow: ellipsis ni overflow: hidden va white-space: nowrap siz ishlatish",
    ],
    practiceTask: "Jadval katakchasida uzun matnni nowrap + ellipsis bilan qisqartiring.",
    quiz: [
      {
        question: "Matnni ... bilan qisqartirish uchun qaysi 3 xususiyat kerak?",
        options: [
          "clip + nowrap + hidden",
          "white-space: nowrap + overflow: hidden + text-overflow: ellipsis",
          "text-overflow: ellipsis faqat",
          "overflow: clip + text-overflow: ellipsis",
        ],
        correct: 1,
        explanation: "Uchala xususiyat majburiy: nowrap (satr uzmaslik), overflow: hidden (kesish), text-overflow: ellipsis (... ko'rsatish).",
      },
    ],
  },
];
