// ─── PART 3: Flexbox ──────────────────────────────────────────────────────

export const cssPart3Groups = [
  {
    title: "Flexbox",
    lessons: [
      {
        id: "css-flex-basics",
        slug: "flexbox-asoslari",
        title: "Flexbox asoslari",
        description: "Flex container va flex items — asosiy tushunchalar",
        sections: [
          { id: "nima", title: "Flexbox nima?" },
          { id: "container", title: "Flex container xususiyatlari" },
          { id: "justify-align", title: "justify-content va align-items" },
        ],
        content: `
<h1>Flexbox asoslari</h1>
<p>Flexbox — bir o'lchovli (1D) layout tizimi. Elementlarni qator yoki ustun bo'yicha moslashuvchan tarzda joylashtiradi. Zamonaviy CSS da eng keng ishlatiladigan layout usuli.</p>

<h2 id="nima">Flexbox nima va qachon ishlatiladi?</h2>
<ul>
  <li>Navbar elementlarini gorizontal joylashtirish</li>
  <li>Markazlash (gorizontal va vertikal)</li>
  <li>Teng kenglikdagi ustunlar</li>
  <li>Elementlar orasidagi bo'shliqni teng taqsimlash</li>
</ul>
<p><code>display: flex</code> qo'shilgan element <strong>flex container</strong>, uning bevosita bolalari esa <strong>flex items</strong> bo'ladi.</p>

<h2 id="container">Flex container xususiyatlari</h2>
<ul>
  <li><code>flex-direction</code> — yo'nalish: <code>row</code> (default), <code>column</code>, <code>row-reverse</code>, <code>column-reverse</code></li>
  <li><code>flex-wrap</code> — qator/ustun o'rashga ruxsat: <code>nowrap</code> (default), <code>wrap</code>, <code>wrap-reverse</code></li>
  <li><code>gap</code> — elementlar orasidagi masofa (<code>row-gap</code>, <code>column-gap</code>)</li>
  <li><code>flex-flow</code> — <code>flex-direction</code> + <code>flex-wrap</code> qisqartmasi</li>
</ul>

<h2 id="justify-align">justify-content va align-items</h2>
<ul>
  <li><code>justify-content</code> — asosiy o'q bo'yicha hizalash (row da: gorizontal)</li>
  <li><code>align-items</code> — ko'ndalang o'q bo'yicha hizalash (row da: vertikal)</li>
  <li><code>align-content</code> — ko'p qatorli wrap da qatorlar hizalanishi</li>
</ul>
<p><strong>justify-content qiymatlari:</strong> <code>flex-start</code>, <code>flex-end</code>, <code>center</code>, <code>space-between</code>, <code>space-around</code>, <code>space-evenly</code></p>
<p><strong>align-items qiymatlari:</strong> <code>flex-start</code>, <code>flex-end</code>, <code>center</code>, <code>stretch</code> (default), <code>baseline</code></p>
        `,
        codeExample: {
          title: "Flex container asoslari",
          language: "css",
          code: `/* Flex container aktivlashtirish */
.navbar {
  display: flex;
  align-items: center;       /* vertikal markazlashtirish */
  justify-content: space-between; /* ikki tomonga */
  gap: 16px;
  padding: 0 24px;
  height: 60px;
}

/* Ustun yo'nalishi */
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

/* Markazlashtirish — eng oddiy usul */
.centered {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* vertikal va gorizontal markaz */
}

/* Wrap — sig'masa keyingi qatorga */
.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

/* Space-between: birinchi va oxirgi chetlarda, oralari teng */
.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: #f6f6f7;
  border-radius: 8px;
}`,
        },
        liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; }
    body { font-family: sans-serif; padding: 24px; background: #f6f6f7; }

    .demo { margin-bottom: 24px; }
    label { font-size: 12px; font-weight: 700; color: #8888a0; text-transform: uppercase; display: block; margin-bottom: 8px; }

    /* Navbar */
    .navbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #0a0a0f;
      color: white;
      padding: 0 20px;
      height: 52px;
      border-radius: 8px;
    }
    .nav-brand { font-weight: 800; font-size: 16px; }
    .nav-links { display: flex; gap: 16px; list-style: none; margin: 0; padding: 0; }
    .nav-links a { color: #8888a0; text-decoration: none; font-size: 14px; }

    /* Markazlashtirish */
    .center-demo {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100px;
      background: white;
      border: 1px solid #e2e2e8;
      border-radius: 8px;
    }
    .center-demo span {
      background: #2250e8;
      color: white;
      padding: 8px 20px;
      border-radius: 6px;
    }

    /* Wrap */
    .wrap-demo {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .wrap-item {
      background: #2250e8;
      color: white;
      padding: 8px 16px;
      border-radius: 6px;
      font-size: 13px;
    }
  </style>
</head>
<body>
  <div class="demo">
    <label>Navbar (justify-content: space-between)</label>
    <nav class="navbar">
      <div class="nav-brand">Learner</div>
      <ul class="nav-links">
        <li><a href="#">HTML</a></li>
        <li><a href="#">CSS</a></li>
        <li><a href="#">JS</a></li>
      </ul>
    </nav>
  </div>

  <div class="demo">
    <label>Gorizontal + vertikal markaz</label>
    <div class="center-demo">
      <span>Men markazda!</span>
    </div>
  </div>

  <div class="demo">
    <label>flex-wrap: wrap</label>
    <div class="wrap-demo">
      <div class="wrap-item">HTML</div>
      <div class="wrap-item">CSS</div>
      <div class="wrap-item">JavaScript</div>
      <div class="wrap-item">TypeScript</div>
      <div class="wrap-item">React</div>
      <div class="wrap-item">Next.js</div>
    </div>
  </div>
</body>
</html>`,
        notes: [
          "<code>gap</code> xususiyati Flexbox va Grid ikkalasida ishlaydi — <code>margin</code> dan afzal.",
          "<code>align-items: center</code> + <code>justify-content: center</code> — elementni to'liq markazlaydi.",
          "Flex direction <code>column</code> da <code>justify-content</code> vertikal, <code>align-items</code> gorizontal ishlaydi — o'q aylanadi!",
        ],
        commonMistakes: [
          "<code>justify-content</code> va <code>align-items</code> ni aralashtirib yuborish — qaysi o'q ekanini unutish.",
          "Flex items ga <code>display: flex</code> bilan <code>flex-direction: column</code> qo'ymasdan vertikal hizalashni kutish.",
          "<code>gap</code> o'rniga hamma tomonga margin qo'shish — ikki barobar bo'shliq hosil bo'ladi.",
        ],
        practiceTask:
          "Flexbox yordamida professional navbar yarating: chapda logo, o'rtada menyu havolalari, o'ngda 'Kirish' tugmasi. Barcha elementlar vertikal markazlashgan bo'lsin.",
        quiz: [
          {
            question: "<code>flex-direction: column</code> da <code>justify-content</code> qaysi o'q bo'yicha ishlaydi?",
            options: ["Gorizontal", "Vertikal", "Ikkalasi", "Hech biri"],
            correct: 1,
            explanation: "<code>flex-direction: column</code> da asosiy o'q vertikal bo'ladi. Shuning uchun <code>justify-content</code> vertikal bo'yicha hizalaydi.",
          },
          {
            question: "Elementni Flexbox yordamida gorizontal va vertikal markazlash uchun nima kerak?",
            options: [
              "<code>align-items: center</code>",
              "<code>justify-content: center</code>",
              "<code>justify-content: center</code> va <code>align-items: center</code>",
              "<code>text-align: center</code>",
            ],
            correct: 2,
            explanation: "To'liq markazlash uchun ikkalasi ham kerak: <code>justify-content: center</code> (asosiy o'q) va <code>align-items: center</code> (ko'ndalang o'q).",
          },
        ],
      },
      {
        id: "css-flex-items",
        slug: "flexbox-items",
        title: "Flex Items xususiyatlari",
        description: "flex-grow, flex-shrink, flex-basis, align-self, order",
        sections: [
          { id: "flex-prop", title: "flex xususiyati" },
          { id: "grow-shrink", title: "grow va shrink" },
          { id: "self-order", title: "align-self va order" },
        ],
        content: `
<h1>Flex Items xususiyatlari</h1>
<p>Flex container ga qo'llangan xususiyatlar hamma bolalarni boshqarsa, flex item xususiyatlari har bir elementni alohida sozlaydi.</p>

<h2 id="flex-prop">flex xususiyati — qisqartma</h2>
<p><code>flex: grow shrink basis</code> — uch qiymatni birgalikda yozish:</p>
<ul>
  <li><code>flex: 1</code> → <code>flex: 1 1 0</code> — bo'sh joyni teng bo'lishadi</li>
  <li><code>flex: auto</code> → <code>flex: 1 1 auto</code> — kontent o'lchamiga qarab</li>
  <li><code>flex: none</code> → <code>flex: 0 0 auto</code> — o'lchami o'zgarmaydi</li>
  <li><code>flex: 0 0 200px</code> — aniq 200px, o'zgarmaydi</li>
</ul>

<h2 id="grow-shrink">flex-grow va flex-shrink</h2>
<ul>
  <li><code>flex-grow: 0</code> (default) — bo'sh joy olmaydi</li>
  <li><code>flex-grow: 1</code> — mavjud bo'sh joyni oladi</li>
  <li><code>flex-grow: 2</code> — boshqadan 2 barobar ko'p joy oladi</li>
  <li><code>flex-shrink: 0</code> — kichraymaslik (overflow bo'lsa ham)</li>
  <li><code>flex-shrink: 1</code> (default) — kerak bo'lsa kichrayadi</li>
</ul>
<p><code>flex-basis</code> — elementning boshlang'ich o'lchami (<code>width</code> ga o'xshash).</p>

<h2 id="self-order">align-self va order</h2>
<ul>
  <li><code>align-self</code> — faqat shu elementning ko'ndalang o'qdagi hizalanishi (<code>align-items</code> ni bekor qiladi)</li>
  <li><code>order</code> — elementning tartib raqami. Default: <code>0</code>. Kichikroq raqam oldinroq.</li>
</ul>
        `,
        codeExample: {
          title: "Flex items xususiyatlari",
          language: "css",
          code: `/* flex: 1 — barcha elementlar teng joy oladi */
.sidebar { flex: 0 0 240px; }    /* 240px — o'zgarmaydi */
.main    { flex: 1; }            /* qolgan barcha joyni oladi */

/* Ikki ustunli layout */
.layout {
  display: flex;
  gap: 24px;
}

/* Uchta teng ustun */
.col {
  flex: 1; /* har biri 1/3 */
}

/* Rasm kichraymasin */
.avatar {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  border-radius: 50%;
}

/* align-self — alohida element hizalanishi */
.stretch-item {
  align-self: stretch; /* container balandligini to'ldirsin */
}

.end-item {
  align-self: flex-end; /* pastga */
}

/* order — tartibni o'zgartirish */
.mobile-first {
  order: -1; /* boshqalardan oldin */
}

/* Tugma doim o'ngda bo'lsin */
.spacer {
  flex: 1; /* bo'sh joyni oladi, pushlab yuboradi */
}`,
        },
        liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; }
    body { font-family: sans-serif; padding: 24px; background: #f6f6f7; }

    /* flex: 1 — bo'sh joyni to'ldirish */
    .search-bar {
      display: flex;
      gap: 8px;
      align-items: center;
      background: white;
      padding: 8px;
      border-radius: 8px;
      border: 1px solid #e2e2e8;
      margin-bottom: 16px;
    }
    .search-bar input {
      flex: 1; /* qolgan joyni oladi */
      border: none;
      outline: none;
      font-size: 14px;
      padding: 4px 8px;
    }
    .search-bar button {
      background: #2250e8;
      color: white;
      border: none;
      padding: 6px 16px;
      border-radius: 6px;
      cursor: pointer;
      flex-shrink: 0; /* kichraymasin */
    }

    /* Sidebar + main layout */
    .page-layout {
      display: flex;
      gap: 16px;
      margin-bottom: 16px;
    }
    .sidebar-panel {
      flex: 0 0 180px;
      background: #0a0a0f;
      color: white;
      padding: 16px;
      border-radius: 8px;
    }
    .main-panel {
      flex: 1;
      background: white;
      padding: 16px;
      border-radius: 8px;
      border: 1px solid #e2e2e8;
    }

    /* align-self */
    .align-demo {
      display: flex;
      height: 100px;
      gap: 8px;
      background: #e8f0fe;
      padding: 8px;
      border-radius: 8px;
      align-items: flex-start; /* default */
    }
    .align-demo div {
      background: #2250e8;
      color: white;
      padding: 8px 12px;
      border-radius: 6px;
      font-size: 12px;
    }
    .self-end { align-self: flex-end; }
    .self-center { align-self: center; }
    .self-stretch { align-self: stretch; }
  </style>
</head>
<body>
  <div class="search-bar">
    <input placeholder="Qidirish...">
    <button>Qidirish</button>
  </div>

  <div class="page-layout">
    <div class="sidebar-panel">
      <strong>Sidebar</strong><br>
      flex: 0 0 180px
    </div>
    <div class="main-panel">
      <strong>Asosiy kontent</strong><br>
      flex: 1 — qolgan barcha joy
    </div>
  </div>

  <div class="align-demo">
    <div>flex-start</div>
    <div class="self-center">self: center</div>
    <div class="self-end">self: end</div>
    <div class="self-stretch">self: stretch</div>
  </div>
</body>
</html>`,
        notes: [
          "<code>flex: 1</code> — eng ko'p ishlatiladigan qiymat. Barcha elementlarga bersangiz, teng bo'linadi.",
          "<code>flex-shrink: 0</code> — rasmlar va belgilangan o'lchamli elementlarga qo'ying, kichraymaydi.",
          "<code>order</code> xususiyati vizual tartibni o'zgartiradi, DOM tartibini emas — accessibility uchun ehtiyot bo'ling.",
        ],
        commonMistakes: [
          "<code>flex: 1</code> vs <code>flex-grow: 1</code> farqi: <code>flex: 1</code> <code>flex-basis: 0</code> qiladi, <code>flex-grow: 1</code> esa <code>flex-basis: auto</code> qoldiradi.",
          "Flex container ga <code>width</code> bermasdan <code>flex: 1</code> kutish — container o'lchami bo'lishi kerak.",
          "<code>align-self</code> faqat flex item da ishlaydi, container da emas.",
        ],
        practiceTask:
          "Search bar yarating: chapda qidiruv ikonkasi (<code>flex-shrink: 0</code>), o'rtada input (<code>flex: 1</code>), o'ngda tugma (<code>flex-shrink: 0</code>). Sidebar (240px) + main content layout ham yarating.",
        quiz: [
          {
            question: "<code>flex: 1</code> nimaga teng?",
            options: ["<code>flex: 1 1 auto</code>", "<code>flex: 1 0 auto</code>", "<code>flex: 1 1 0</code>", "<code>flex: 0 1 1</code>"],
            correct: 2,
            explanation: "<code>flex: 1</code> — <code>flex: 1 1 0</code> ga teng (grow:1, shrink:1, basis:0%). Bu elementni mavjud bo'sh joyni teng bo'lishishga majbur qiladi.",
          },
          {
            question: "Rasm flex container ichida kichraymaydi deb ta'minlash uchun nima kerak?",
            options: ["<code>flex-grow: 0</code>", "<code>flex-shrink: 0</code>", "<code>flex-basis: auto</code>", "<code>align-self: center</code>"],
            correct: 1,
            explanation: "<code>flex-shrink: 0</code> — element hech qachon kichraymaydi. Rasmlar va belgilangan o'lchamli elementlar uchun muhim.",
          },
        ],
      },
      {
        id: "css-flex-patterns",
        slug: "flexbox-patterns",
        title: "Flexbox amaliy patternlar",
        description: "Real loyihalarda keng ishlatiladigan Flexbox layout patternlari",
        sections: [
          { id: "holy-grail", title: "Holy Grail Layout" },
          { id: "card-layout", title: "Karta layoutlari" },
          { id: "form-layout", title: "Form elementlari" },
        ],
        content: `
<h1>Flexbox amaliy patternlar</h1>
<p>Flexbox ning kuchini real loyiha patternlarida ko'ramiz. Bu patternlar deyarli har qanday zamonaviy saytda uchraydi.</p>

<h2 id="holy-grail">Holy Grail Layout</h2>
<p>Klassik veb layout: header, footer va o'rtada sidebar + main + sidebar. Flexbox buni juda oson qiladi:</p>
<ul>
  <li>Tashqi container: <code>flex-direction: column</code></li>
  <li>Ichki content area: <code>flex-direction: row</code> va <code>flex: 1</code></li>
  <li>Sidebar: aniq kenglik, <code>flex-shrink: 0</code></li>
  <li>Main: <code>flex: 1</code></li>
</ul>

<h2 id="card-layout">Karta layoutlari</h2>
<ul>
  <li><strong>Equal height cards</strong> — flex container ichida barcha kartalar bir balandlikda</li>
  <li><strong>Card footer push</strong> — karta ichida footer doim pastda: karta <code>flex-direction: column</code>, content <code>flex: 1</code></li>
  <li><strong>Responsive cards</strong> — <code>flex-wrap: wrap</code> + <code>flex: 1 1 280px</code> (min 280px)</li>
</ul>

<h2 id="form-layout">Form elementlari</h2>
<ul>
  <li>Label + input gorizontal: <code>display: flex; align-items: center; gap: 12px</code></li>
  <li>Tugmalar guruhi: <code>display: flex; gap: 8px</code></li>
  <li>Input group (icon + input): <code>display: flex; align-items: center</code></li>
</ul>
        `,
        codeExample: {
          title: "Amaliy Flexbox patternlar",
          language: "css",
          code: `/* ── Holy Grail Layout ─────────────── */
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.app__header { flex-shrink: 0; }
.app__body {
  display: flex;
  flex: 1;
}
.app__sidebar { flex: 0 0 240px; }
.app__main    { flex: 1; overflow: auto; }
.app__footer  { flex-shrink: 0; }

/* ── Card footer push ───────────────── */
.card {
  display: flex;
  flex-direction: column;
  border: 1px solid #e2e2e8;
  border-radius: 12px;
  overflow: hidden;
}
.card__body   { flex: 1; padding: 20px; }
.card__footer {
  padding: 12px 20px;
  border-top: 1px solid #e2e2e8;
  background: #f6f6f7;
}

/* ── Responsive cards ───────────────── */
.cards-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.cards-grid .card {
  flex: 1 1 280px; /* min 280px, kerak bo'lsa kengayadi */
  max-width: 380px;
}

/* ── Input group ────────────────────── */
.input-group {
  display: flex;
  align-items: center;
  border: 1px solid #e2e2e8;
  border-radius: 8px;
  overflow: hidden;
}
.input-group__prefix {
  padding: 0 12px;
  background: #f6f6f7;
  color: #8888a0;
  border-right: 1px solid #e2e2e8;
  align-self: stretch;
  display: flex;
  align-items: center;
}
.input-group__input {
  flex: 1;
  border: none;
  padding: 10px 12px;
  outline: none;
}`,
        },
        liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: sans-serif; background: #f6f6f7; min-height: 100vh; display: flex; flex-direction: column; }

    header {
      background: #0a0a0f;
      color: white;
      padding: 0 24px;
      height: 52px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-shrink: 0;
    }

    .body {
      display: flex;
      flex: 1;
    }

    aside {
      flex: 0 0 200px;
      background: white;
      border-right: 1px solid #e2e2e8;
      padding: 20px 16px;
    }
    aside ul { list-style: none; padding: 0; }
    aside li { padding: 6px 8px; border-radius: 6px; font-size: 14px; color: #44444f; cursor: pointer; }
    aside li:hover { background: #f0f0f3; }

    main {
      flex: 1;
      padding: 24px;
      overflow: auto;
    }

    /* Karta footer push */
    .cards { display: flex; flex-wrap: wrap; gap: 16px; }
    .card {
      flex: 1 1 220px;
      display: flex;
      flex-direction: column;
      background: white;
      border: 1px solid #e2e2e8;
      border-radius: 12px;
      overflow: hidden;
    }
    .card__body { flex: 1; padding: 16px; }
    .card__body h3 { font-size: 15px; margin-bottom: 6px; }
    .card__body p { font-size: 13px; color: #8888a0; }
    .card__foot {
      padding: 10px 16px;
      background: #f6f6f7;
      border-top: 1px solid #e2e2e8;
      font-size: 12px;
      color: #2250e8;
      font-weight: 600;
    }

    footer {
      background: #0a0a0f;
      color: #8888a0;
      text-align: center;
      padding: 12px;
      font-size: 13px;
      flex-shrink: 0;
    }
  </style>
</head>
<body>
  <header>
    <strong>Learner.uz</strong>
    <nav style="display:flex;gap:16px;font-size:14px">
      <a href="#" style="color:#8888a0;text-decoration:none">HTML</a>
      <a href="#" style="color:#8888a0;text-decoration:none">CSS</a>
    </nav>
  </header>

  <div class="body">
    <aside>
      <p style="font-size:11px;font-weight:700;color:#8888a0;text-transform:uppercase;margin-bottom:8px">Darslar</p>
      <ul>
        <li>Kirish</li>
        <li>Selektorlar</li>
        <li>Box Model</li>
        <li>Flexbox</li>
        <li>Grid</li>
      </ul>
    </aside>

    <main>
      <h2 style="margin-bottom:16px;font-size:18px">Kurslar</h2>
      <div class="cards">
        <div class="card">
          <div class="card__body">
            <h3>HTML Asoslari</h3>
            <p>Veb-sahifaning tuzilishini o'rganing</p>
          </div>
          <div class="card__foot">Boshlash →</div>
        </div>
        <div class="card">
          <div class="card__body">
            <h3>CSS Layout</h3>
            <p>Flexbox va Grid yordamida zamonaviy layoutlar</p>
          </div>
          <div class="card__foot">Boshlash →</div>
        </div>
        <div class="card">
          <div class="card__body">
            <h3>JavaScript</h3>
            <p>Interaktiv sahifalar yaratish</p>
          </div>
          <div class="card__foot">Boshlash →</div>
        </div>
      </div>
    </main>
  </div>

  <footer>© 2025 Learner.uz</footer>
</body>
</html>`,
        notes: [
          "Karta footer push pattern — real loyihalarda juda keng ishlatiladi. Karta <code>flex-direction: column</code>, content <code>flex: 1</code>.",
          "<code>flex: 1 1 280px</code> — responsive karta o'lchami: minimum 280px, kerak bo'lsa kengayadi.",
          "Holy Grail layout uchun tashqi container <code>min-height: 100vh</code> va <code>flex-direction: column</code> bo'lishi kerak.",
        ],
        commonMistakes: [
          "Flex container ga <code>height</code> bermasdan vertikal markazlashni kutish.",
          "Flex wrap bilan birga <code>align-content</code> ni <code>align-items</code> bilan adashtirish.",
          "Responsive flex kartalarida <code>max-width</code> qo'ymaslik — juda keng bo'lib ketadi.",
        ],
        practiceTask:
          "To'liq sahifa layouti yarating: sticky header, chap sidebar (240px), asosiy kontent (flex: 1), sticky footer. Asosiy kontent ichida 3 ta karta bo'lsin — barcha kartalar bir balandlikda, footer har doim pastda.",
        quiz: [
          {
            question: "Karta footer ni doim pastga itarish uchun nima kerak?",
            options: [
              "Kartaga <code>position: relative</code>",
              "Kartaga <code>flex-direction: column</code>, kontent qismiga <code>flex: 1</code>",
              "Footerga <code>margin-top: auto</code>",
              "B va C ikkalasi to'g'ri",
            ],
            correct: 3,
            explanation: "Ikki usul ham to'g'ri: 1) Kartaga <code>flex-direction: column</code> + kontentga <code>flex: 1</code>. 2) Footerga <code>margin-top: auto</code> — margin auto flex da bo'sh joyni oladi.",
          },
          {
            question: "<code>flex: 1 1 280px</code> da raqamlar nima ma'noni anglatadi?",
            options: [
              "width, height, margin",
              "grow, shrink, basis",
              "min, max, default",
              "x, y, z",
            ],
            correct: 1,
            explanation: "<code>flex: grow shrink basis</code> — tartib: 1 (grow), 1 (shrink), 280px (basis). Element minimal 280px, kengaya oladi va kichrayishi mumkin.",
          },
        ],
      },
    ],
  },
];
