// ─── PART 4: CSS Grid ─────────────────────────────────────────────────────

export const cssPart4Groups = [
  {
    title: "CSS Grid",
    lessons: [
      {
        id: "css-grid-basics",
        slug: "grid-asoslari",
        title: "Grid asoslari",
        description: "Grid container, ustunlar, qatorlar va gap",
        sections: [
          { id: "nima", title: "Grid nima?" },
          { id: "template", title: "grid-template-columns/rows" },
          { id: "gap", title: "gap va fr birligi" },
        ],
        content: `
<h1>CSS Grid asoslari</h1>
<p>CSS Grid — ikki o'lchovli (2D) layout tizimi. Flexbox bir yo'nalishda ishlasa, Grid qator va ustunlarni bir vaqtda boshqaradi. Murakkab sahifa layoutlari uchun ideal.</p>

<h2 id="nima">Grid nima va Flexbox dan farqi</h2>
<ul>
  <li><strong>Flexbox</strong> — 1D: yoki qator, yoki ustun</li>
  <li><strong>Grid</strong> — 2D: qator VA ustun bir vaqtda</li>
  <li>Sahifa maketi → Grid. Komponent ichki tuzilishi → Flexbox</li>
  <li>Ikkalasini birga ishlatish mumkin va ko'p hollarda kerak</li>
</ul>
<p><code>display: grid</code> qo'shilgan element <strong>grid container</strong>, bolalari esa <strong>grid items</strong>.</p>

<h2 id="template">grid-template-columns va rows</h2>
<ul>
  <li><code>grid-template-columns: 200px 1fr 200px</code> — uch ustun</li>
  <li><code>grid-template-columns: repeat(3, 1fr)</code> — uchta teng ustun</li>
  <li><code>grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))</code> — responsive</li>
  <li><code>grid-template-rows: auto 1fr auto</code> — header, main, footer</li>
</ul>

<h2 id="gap">gap va fr birligi</h2>
<ul>
  <li><code>fr</code> — fraction (ulush). Mavjud bo'sh joyni ulashadi: <code>1fr 2fr</code> = 1/3 va 2/3</li>
  <li><code>gap: 16px</code> — barcha bo'shliqlar</li>
  <li><code>column-gap: 24px; row-gap: 16px;</code> — alohida</li>
</ul>
        `,
        codeExample: {
          title: "Grid asosiy sintaksis",
          language: "css",
          code: `/* Sodda 3 ustunli grid */
.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

/* Holy grail: sidebar + main + sidebar */
.page-layout {
  display: grid;
  grid-template-columns: 240px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  gap: 0;
}

/* fr va px kombinatsiyasi */
.mixed {
  display: grid;
  grid-template-columns: 200px 1fr; /* sidebar + main */
  gap: 24px;
}

/* Responsive kartalar — media query siz! */
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}

/* Aniq qator balandligi */
.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 300px;
  gap: 24px;
}`,
        },
        liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; }
    body { font-family: sans-serif; padding: 24px; background: #f6f6f7; }

    h3 { margin: 16px 0 8px; font-size: 13px; color: #8888a0; text-transform: uppercase; }

    /* 3 teng ustun */
    .g3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
      margin-bottom: 24px;
    }

    /* Responsive auto-fill */
    .g-auto {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      gap: 12px;
      margin-bottom: 24px;
    }

    /* Mixed units */
    .g-mixed {
      display: grid;
      grid-template-columns: 160px 1fr;
      gap: 12px;
    }

    /* Item styling */
    .item {
      background: #2250e8;
      color: white;
      padding: 16px;
      border-radius: 8px;
      text-align: center;
      font-size: 13px;
      font-weight: 600;
    }
    .item.gray { background: #0a0a0f; }
    .item.green { background: #059669; }
  </style>
</head>
<body>
  <h3>repeat(3, 1fr) — 3 teng ustun</h3>
  <div class="g3">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
  </div>

  <h3>auto-fill + minmax — responsive</h3>
  <div class="g-auto">
    <div class="item green">A</div>
    <div class="item green">B</div>
    <div class="item green">C</div>
    <div class="item green">D</div>
    <div class="item green">E</div>
  </div>

  <h3>160px + 1fr — sidebar + main</h3>
  <div class="g-mixed">
    <div class="item gray">Sidebar<br>160px</div>
    <div class="item">Main content (1fr)</div>
  </div>
</body>
</html>`,
        notes: [
          "<code>fr</code> birligi faqat grid da ishlaydi. <code>1fr</code> — mavjud bo'sh joyning bitta ulushi.",
          "<code>auto-fill</code> vs <code>auto-fit</code>: <code>auto-fill</code> bo'sh ustunlar qoldiradi, <code>auto-fit</code> ularni yo'q qiladi.",
          "<code>minmax(280px, 1fr)</code> — media query siz responsive grid yaratish eng oddiy usuli.",
        ],
        commonMistakes: [
          "<code>fr</code> ni <code>%</code> bilan adashtirish — <code>fr</code> gap dan keyin qolgan joyni hisoblaydi.",
          "Grid items ga <code>width: 100%</code> berish — keraksiz, grid avtomatik boshqaradi.",
          "<code>grid-template-columns</code> ni grid container emas, grid item ga berish.",
        ],
        practiceTask:
          "Sayt sahifasi yarating: tepada navbar (to'liq kenglik), o'rtada 3 ustunli kontent (280px sidebar + main + 200px aside), pastda footer. Grid yordamida.",
        quiz: [
          {
            question: "<code>repeat(auto-fill, minmax(200px, 1fr))</code> nima qiladi?",
            options: [
              "Aniq 200px li ustunlar yaratadi",
              "Konteyner kengligiga qarab sig'adigan, minimum 200px li ustunlar yaratadi",
              "3 ta ustun yaratadi",
              "Faqat bitta ustun yaratadi",
            ],
            correct: 1,
            explanation: "<code>auto-fill</code> konteyner kengligiga qarab nechta sig'sa shuncha ustun yaratadi. Har bir ustun minimum 200px, bo'sh joy bo'lsa <code>1fr</code> gacha kengayadi.",
          },
          {
            question: "<code>1fr 2fr 1fr</code> da uchta ustun nisbati qanday?",
            options: ["1:1:1", "1:2:1", "33%:33%:33%", "25%:50%:25%"],
            correct: 3,
            explanation: "Jami 4 fr. Birinchi: 1/4=25%, Ikkinchi: 2/4=50%, Uchinchi: 1/4=25%. Gap ajratilgandan keyin qolgan joyni shunday bo'lishadi.",
          },
        ],
      },
      {
        id: "css-grid-placement",
        slug: "grid-joylashuv",
        title: "Grid elementlarini joylashtirish",
        description: "grid-column, grid-row, grid-area va named areas",
        sections: [
          { id: "span", title: "column-span va row-span" },
          { id: "areas", title: "grid-template-areas" },
          { id: "auto-placement", title: "Auto placement" },
        ],
        content: `
<h1>Grid elementlarini joylashtirish</h1>
<p>Grid ning kuchli tomoni — elementlarni aniq katakka joylashtirish. Shu imkoniyat bilan murakkab layoutlar sodda CSS bilan yaratiladi.</p>

<h2 id="span">grid-column va grid-row</h2>
<p>Grid liniyalari 1 dan boshlab sanaladi. 3 ustunli gridda 4 ta vertikal liniya bor (1, 2, 3, 4).</p>
<ul>
  <li><code>grid-column: 1 / 3</code> — 1-liniyadan 3-liniyagacha (2 ustunni egallaydi)</li>
  <li><code>grid-column: 1 / span 2</code> — 1-dan boshlab 2 ustun egallaydi</li>
  <li><code>grid-column: 1 / -1</code> — oxirigacha (to'liq kenglik)</li>
  <li><code>grid-row: 1 / span 2</code> — 2 qatorni egallaydi</li>
</ul>

<h2 id="areas">grid-template-areas</h2>
<p>Griddagi katakchalar uchun nomlar berib, vizual xarita yaratish:</p>
<pre><code>grid-template-areas:
  "header header header"
  "sidebar main   aside"
  "footer  footer footer";</code></pre>
<p>Har bir grid item: <code>grid-area: header;</code> kabi nom oladi. Qulay va o'qilishi oson.</p>

<h2 id="auto-placement">Auto placement va grid-auto-flow</h2>
<ul>
  <li><code>grid-auto-flow: row</code> (default) — elementlar qator bo'yicha to'ladi</li>
  <li><code>grid-auto-flow: column</code> — ustun bo'yicha</li>
  <li><code>grid-auto-flow: dense</code> — bo'sh joylarni to'ldiradi (qoidabuzar tartib)</li>
</ul>
        `,
        codeExample: {
          title: "Grid placement",
          language: "css",
          code: `/* grid-column va grid-row */
.feature-card {
  grid-column: 1 / span 2; /* 2 ustunni egallaydi */
  grid-row: 1 / span 2;    /* 2 qatorni egallaydi */
}

.full-width {
  grid-column: 1 / -1; /* to'liq kenglik */
}

/* ── named areas — eng qulay usul ──── */
.page {
  display: grid;
  grid-template-columns: 240px 1fr 200px;
  grid-template-rows: 60px 1fr 60px;
  grid-template-areas:
    "header header  header"
    "sidebar main   aside"
    "footer  footer footer";
  min-height: 100vh;
}

.page__header  { grid-area: header; }
.page__sidebar { grid-area: sidebar; }
.page__main    { grid-area: main; }
.page__aside   { grid-area: aside; }
.page__footer  { grid-area: footer; }

/* Responsive: kichik ekranda layout o'zgarishi */
@media (max-width: 768px) {
  .page {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      "header"
      "main"
      "sidebar"
      "aside"
      "footer";
  }
}`,
        },
        liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; margin: 0; }
    body { font-family: sans-serif; background: #f6f6f7; }

    .page {
      display: grid;
      grid-template-columns: 200px 1fr 160px;
      grid-template-rows: 52px 1fr 48px;
      grid-template-areas:
        "header  header  header"
        "sidebar main    aside"
        "footer  footer  footer";
      min-height: 100vh;
    }

    .page__header {
      grid-area: header;
      background: #0a0a0f;
      color: white;
      display: flex;
      align-items: center;
      padding: 0 20px;
      font-weight: 700;
    }

    .page__sidebar {
      grid-area: sidebar;
      background: white;
      border-right: 1px solid #e2e2e8;
      padding: 20px 16px;
    }
    .page__sidebar ul { list-style: none; padding: 0; }
    .page__sidebar li { padding: 7px 10px; border-radius: 6px; font-size: 14px; color: #44444f; cursor: pointer; }
    .page__sidebar li:hover { background: #f0f0f3; }
    .page__sidebar li.active { background: #e8f0fe; color: #2250e8; font-weight: 600; }

    .page__main {
      grid-area: main;
      padding: 24px;
      overflow: auto;
    }

    /* Grid ichida grid */
    .mini-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
      margin-top: 16px;
    }
    .mini-item {
      background: white;
      border: 1px solid #e2e2e8;
      border-radius: 10px;
      padding: 16px;
    }
    .mini-item.span2 { grid-column: span 2; background: #e8f0fe; border-color: #2250e8; }

    .page__aside {
      grid-area: aside;
      background: #f6f6f7;
      border-left: 1px solid #e2e2e8;
      padding: 16px;
    }
    .page__aside p { font-size: 12px; color: #8888a0; }

    .page__footer {
      grid-area: footer;
      background: #0a0a0f;
      color: #8888a0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 13px;
    }
  </style>
</head>
<body>
  <div class="page">
    <header class="page__header">Learner.uz — Grid Layout Demo</header>

    <aside class="page__sidebar">
      <ul>
        <li class="active">Grid asoslari</li>
        <li>Grid placement</li>
        <li>Named areas</li>
        <li>Auto placement</li>
      </ul>
    </aside>

    <main class="page__main">
      <h2 style="font-size:18px;margin-bottom:8px">Grid placement namunasi</h2>
      <p style="color:#8888a0;font-size:14px">Grid-template-areas yordamida qurilgan layout</p>

      <div class="mini-grid">
        <div class="mini-item span2">
          <strong>span 2</strong> — 2 ustunni egallaydi
        </div>
        <div class="mini-item">Normal</div>
        <div class="mini-item">Normal</div>
        <div class="mini-item">Normal</div>
        <div class="mini-item span2"><strong>span 2</strong> yana</div>
      </div>
    </main>

    <aside class="page__aside">
      <strong style="font-size:13px">Ma'lumot</strong>
      <p style="margin-top:8px">Bu aside grid-area: aside bilan joylashgan.</p>
    </aside>

    <footer class="page__footer">© 2025 Learner.uz</footer>
  </div>
</body>
</html>`,
        notes: [
          "<code>grid-column: 1 / -1</code> — <code>-1</code> oxirgi liniyani anglatadi. To'liq kenglik uchun qulay.",
          "<code>grid-template-areas</code> da nuqta (<code>.</code>) bo'sh katak. Masalan: <code>'. main aside'</code>.",
          "Named areas da har bir nom chiziqcha shaklida bo'lishi kerak — bir qatordagi nomlar bitta hududni hosil qiladi.",
        ],
        commonMistakes: [
          "Grid liniyalari 1 dan boshlanishini unutish (0 dan emas).",
          "<code>grid-area</code> ni <code>grid-column</code> bilan adashtirish — bu qisqartma emas, nom.",
          "<code>grid-column: span 2</code> — bu qisqartma, liniya raqamsiz. To'liq: <code>grid-column: 2 / span 2</code> (2-liniyadan boshlab).",
        ],
        practiceTask:
          "Magazine layouti yarating: katta asosiy maqola (birinchi 2 ustun + 2 qator), kichik maqolalar o'ng tomonda. Pastda to'liq kengligi footer. <code>grid-template-areas</code> ishlatib ko'ring.",
        quiz: [
          {
            question: "<code>grid-column: 1 / -1</code> nima anglatadi?",
            options: [
              "Birinchi ustun",
              "Oxirgi ustun",
              "Barcha ustunlar bo'yicha to'liq kenglik",
              "Birinchi va oxirgi ustun",
            ],
            correct: 2,
            explanation: "<code>-1</code> oxirgi grid liniyasini anglatadi. Demak <code>1 / -1</code> — birinchi liniyadan oxirgi liniyagacha, ya'ni to'liq kenglik.",
          },
          {
            question: "<code>grid-template-areas</code> da bo'sh katakni qanday belgilaydi?",
            options: ["<code>0</code>", "<code>null</code>", "<code>.</code> (nuqta)", "<code>empty</code>"],
            correct: 2,
            explanation: "Nuqta (<code>.</code>) grid-template-areas da bo'sh (nomsiz) katakni ifodalaydi.",
          },
        ],
      },
      {
        id: "css-grid-advanced",
        slug: "grid-ilgor",
        title: "Grid — ilg'or mavzular",
        description: "align/justify items, implicit grid, subgrid va real patternlar",
        sections: [
          { id: "align", title: "Hizalash xususiyatlari" },
          { id: "implicit", title: "Implicit Grid" },
          { id: "patterns", title: "Real patternlar" },
        ],
        content: `
<h1>Grid — ilg'or mavzular</h1>

<h2 id="align">Grid hizalash xususiyatlari</h2>
<p>Grid ikki o'lchovli bo'lgani uchun hizalash xususiyatlari ko'proq:</p>
<ul>
  <li><code>justify-items</code> — barcha itemlarni ustun o'qi bo'yicha hizalaydi (<code>start</code>, <code>end</code>, <code>center</code>, <code>stretch</code>)</li>
  <li><code>align-items</code> — barcha itemlarni qator o'qi bo'yicha hizalaydi</li>
  <li><code>justify-content</code> — butun gridni konteyner ichida gorizontal hizalaydi</li>
  <li><code>align-content</code> — butun gridni konteyner ichida vertikal hizalaydi</li>
  <li><code>justify-self</code> / <code>align-self</code> — alohida item uchun override</li>
  <li><code>place-items: center</code> — <code>align-items: center; justify-items: center</code> qisqartmasi</li>
</ul>

<h2 id="implicit">Implicit Grid</h2>
<p><code>grid-template</code> da belgilanmagan qo'shimcha elementlar uchun CSS o'zi qator/ustun yaratadi (implicit).</p>
<ul>
  <li><code>grid-auto-rows: 200px</code> — implicit qatorlar balandligi</li>
  <li><code>grid-auto-rows: minmax(100px, auto)</code> — minimum 100px, kontentga qarab kengayadi</li>
  <li><code>grid-auto-columns</code> — implicit ustunlar kengligi</li>
</ul>

<h2 id="patterns">Real amaliy patternlar</h2>
<ul>
  <li><strong>Masonry-like grid:</strong> <code>auto-fill</code> + <code>dense</code> packing</li>
  <li><strong>Aspect ratio karta:</strong> <code>aspect-ratio: 16/9</code> bilan grid item</li>
  <li><strong>Overlap:</strong> bir xil grid area ga joylashtirib effektlar</li>
  <li><strong>Responsive bez media query:</strong> <code>minmax</code> + <code>auto-fill</code></li>
</ul>
        `,
        codeExample: {
          title: "Grid ilg'or xususiyatlar",
          language: "css",
          code: `/* place-items qisqartmasi */
.centered-grid {
  display: grid;
  place-items: center; /* align + justify */
  min-height: 100vh;
}

/* Implicit qatorlar balandligi */
.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 200px; /* barcha implicit qatorlar 200px */
  gap: 12px;
}

/* minmax — kontentga qarab kengayadi */
.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(180px, auto);
  gap: 20px;
}

/* Overlap — bir xil area */
.hero {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
}
.hero__image,
.hero__content {
  grid-column: 1;
  grid-row: 1;
}
.hero__content {
  z-index: 1;
  align-self: end;
  padding: 32px;
  background: linear-gradient(transparent, rgba(0,0,0,0.7));
}

/* Aspect ratio qatiyatlash */
.thumbnail {
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 8px;
}

/* Responsive grid — media query siz */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}`,
        },
        liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; }
    body { font-family: sans-serif; padding: 24px; background: #f6f6f7; }
    h3 { margin: 24px 0 10px; font-size: 13px; color: #8888a0; text-transform: uppercase; }

    /* Photo grid — implicit rows */
    .photo-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
      grid-auto-rows: 120px;
      gap: 8px;
      margin-bottom: 24px;
    }
    .photo-item {
      background: #2250e8;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 13px;
      font-weight: 600;
    }
    .photo-item:nth-child(3n) { background: #059669; }
    .photo-item:nth-child(5n) { background: #dc2626; }

    /* Overlap hero */
    .hero {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 200px;
      border-radius: 12px;
      overflow: hidden;
      margin-bottom: 24px;
    }
    .hero__bg {
      grid-column: 1; grid-row: 1;
      background: linear-gradient(135deg, #2250e8, #059669);
    }
    .hero__content {
      grid-column: 1; grid-row: 1;
      z-index: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 24px;
      background: linear-gradient(transparent, rgba(0,0,0,0.5));
      color: white;
    }
    .hero__content h2 { font-size: 22px; margin: 0 0 4px; }
    .hero__content p { margin: 0; opacity: 0.8; font-size: 14px; }

    /* Product grid */
    .product-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: 12px;
    }
    .product-card {
      background: white;
      border: 1px solid #e2e2e8;
      border-radius: 10px;
      overflow: hidden;
    }
    .product-thumb {
      aspect-ratio: 4/3;
      background: #e8f0fe;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 28px;
    }
    .product-info { padding: 12px; }
    .product-info strong { font-size: 14px; display: block; }
    .product-info span { font-size: 12px; color: #8888a0; }
  </style>
</head>
<body>
  <h3>Photo Grid (auto-fill + implicit rows)</h3>
  <div class="photo-grid">
    <div class="photo-item">1</div>
    <div class="photo-item">2</div>
    <div class="photo-item">3</div>
    <div class="photo-item">4</div>
    <div class="photo-item">5</div>
    <div class="photo-item">6</div>
    <div class="photo-item">7</div>
    <div class="photo-item">8</div>
  </div>

  <h3>Hero (Grid Overlap)</h3>
  <div class="hero">
    <div class="hero__bg"></div>
    <div class="hero__content">
      <h2>CSS Grid ilg'or</h2>
      <p>Overlap — bir xil katakka joylashtirilgan</p>
    </div>
  </div>

  <h3>Product Grid (auto-fit + aspect-ratio)</h3>
  <div class="product-grid">
    <div class="product-card">
      <div class="product-thumb">🎨</div>
      <div class="product-info"><strong>CSS Kursi</strong><span>24 dars</span></div>
    </div>
    <div class="product-card">
      <div class="product-thumb">⚡</div>
      <div class="product-info"><strong>JS Kursi</strong><span>40 dars</span></div>
    </div>
    <div class="product-card">
      <div class="product-thumb">⚛️</div>
      <div class="product-info"><strong>React</strong><span>30 dars</span></div>
    </div>
    <div class="product-card">
      <div class="product-thumb">🌐</div>
      <div class="product-info"><strong>HTML</strong><span>20 dars</span></div>
    </div>
  </div>
</body>
</html>`,
        notes: [
          "<code>place-items: center</code> — grid elementni to'liq markazlashning eng qisqa yozuvi.",
          "<code>aspect-ratio</code> — rasmlar va kartalar uchun nisbat qotiradi, responsive da foydali.",
          "<code>auto-fill</code> bo'sh katak qoldiradi, <code>auto-fit</code> esa bo'sh katakni yo'q qiladi — elementlar kengayadi.",
        ],
        commonMistakes: [
          "<code>grid-auto-rows</code> ni <code>grid-template-rows</code> bilan adashtirish — auto belgilangan kataklar uchun.",
          "Overlap da <code>z-index</code> qo'ymaslik — ikki element ustma-ust tushganda tartibni belgilash kerak.",
          "<code>auto-fill</code> vs <code>auto-fit</code> — ko'p element bo'lsa farqi sezilmaydi, kam element bo'lsa katta farq.",
        ],
        practiceTask:
          "Foto galereya yarating: 4 ustunli grid, har bir surat <code>aspect-ratio: 1</code> (kvadrat), hover da o'lcham kichrayin va opacity o'zgarsin. Katta ekranda 4, kichikda 2 ustun bo'lsin.",
        quiz: [
          {
            question: "<code>place-items: center</code> nimaga teng?",
            options: [
              "<code>justify-content: center; align-content: center</code>",
              "<code>justify-items: center; align-items: center</code>",
              "<code>margin: 0 auto</code>",
              "<code>text-align: center; vertical-align: center</code>",
            ],
            correct: 1,
            explanation: "<code>place-items</code> — <code>align-items</code> va <code>justify-items</code> ning qisqartmasi. Grid item larni katak ichida hizalaydi.",
          },
          {
            question: "<code>grid-auto-rows: minmax(100px, auto)</code> nima qiladi?",
            options: [
              "Faqat 100px balandlikdagi qatorlar",
              "Minimum 100px, kontent balandligiga qarab kengayadi",
              "Maximum 100px balandlik",
              "Avtomatik qatorlar yaratmaydi",
            ],
            correct: 1,
            explanation: "<code>minmax(100px, auto)</code> — minimum 100px, lekin kontent ko'p bo'lsa auto (kontentga qarab) kengayadi. Implisit qatorlar uchun keng ishlatiladi.",
          },
        ],
      },
    ],
  },
];
