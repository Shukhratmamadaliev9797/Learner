// ─── PART 2: Display, Positioning, Z-index, Overflow ──────────────────────

export const cssPart2Groups = [
  {
    title: "Layout asoslari",
    lessons: [
      {
        id: "css-display",
        slug: "display",
        title: "Display xususiyati",
        description: "block, inline, inline-block, none — elementlarning ko'rinish turi",
        sections: [
          { id: "block-inline", title: "Block va Inline" },
          { id: "inline-block", title: "inline-block" },
          { id: "none-hidden", title: "none va hidden" },
        ],
        content: `
<h1>Display xususiyati</h1>
<p><code>display</code> — elementning qanday ko'rsatilishini belgilovchi eng muhim CSS xususiyati. Layout (joylashuv) tizimini ham shu xususiyat aktivlashtiradi.</p>

<h2 id="block-inline">Block va Inline</h2>
<ul>
  <li><strong>block</strong> — yangi qatordan boshlanadi, to'liq kenglikni egallaydi. <code>div, p, h1-h6, section, article</code> va hokazo</li>
  <li><strong>inline</strong> — oqimda davom etadi, faqat kontent kengligini oladi. <code>span, a, strong, em</code> va hokazo. <code>width/height</code> ta'sir qilmaydi</li>
</ul>

<h2 id="inline-block">inline-block</h2>
<p>Ikkalasining afzalligini birlashtiradi:</p>
<ul>
  <li>Inline kabi oqimda joylashadi (yangi qator ochilmaydi)</li>
  <li>Block kabi <code>width</code>, <code>height</code>, <code>padding</code>, <code>margin</code> qabul qiladi</li>
  <li>Nav, tugmalar qatori uchun qulay (Flexbox dan oldin ishlatilgan)</li>
</ul>

<h2 id="none-hidden">display: none va visibility: hidden</h2>
<ul>
  <li><code>display: none</code> — element butunlay yo'qoladi, joy ham olmaydi</li>
  <li><code>visibility: hidden</code> — element ko'rinmaydi, lekin joy egallaydi</li>
  <li><code>opacity: 0</code> — shaffof bo'ladi, joy egallaydi, kliklanadi</li>
</ul>
        `,
        codeExample: {
          title: "Display qiymatlari",
          language: "css",
          code: `/* Block element — to'liq kenglik, yangi qator */
.block-el {
  display: block;
  width: 100%;
  padding: 12px;
  background: #e8f0fe;
}

/* Inline element — oqimda, o'lchami kontent bilan */
.inline-el {
  display: inline;
  /* width: 200px; — ta'sir qilmaydi! */
  color: #2250e8;
  font-weight: 600;
}

/* inline-block — ikkalasining afzalligi */
.nav-item {
  display: inline-block;
  width: 120px;
  padding: 8px 16px;
  text-align: center;
  background: #2250e8;
  color: white;
  border-radius: 6px;
  margin: 4px;
}

/* display: none — butunlay yo'qoladi */
.hidden {
  display: none;
}

/* visibility: hidden — joy egallaydi */
.invisible {
  visibility: hidden;
}

/* Elementni ko'rsatish/yashirish pattern */
.modal {
  display: none;
}
.modal.active {
  display: block;
}`,
        },
        liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: sans-serif; padding: 24px; }

    .block { display: block; background: #e8f0fe; padding: 8px; margin: 4px 0; }
    .inline { display: inline; background: #fef9c3; padding: 4px; }
    .inline-block {
      display: inline-block;
      width: 100px;
      height: 60px;
      background: #dcfce7;
      border: 1px solid #059669;
      text-align: center;
      line-height: 60px;
      margin: 4px;
    }

    .d-none { display: none; }
    .vis-hidden { visibility: hidden; }
  </style>
</head>
<body>
  <div class="block">Block element 1</div>
  <div class="block">Block element 2</div>

  <span class="inline">inline 1</span>
  <span class="inline">inline 2</span>
  <span class="inline">inline 3</span>

  <br><br>

  <div class="inline-block">IB 1</div>
  <div class="inline-block">IB 2</div>
  <div class="inline-block">IB 3</div>

  <br><br>
  <p>Ko'rinmas: [<span class="d-none">display:none</span>] joy yo'q</p>
  <p>Yashirin: [<span class="vis-hidden">visibility:hidden</span>] joy bor</p>
</body>
</html>`,
        notes: [
          "<code>display: none</code> elementni DOM dan olib tashlamaydi — faqat ko'rinmasligini ta'minlaydi.",
          "Inline elementlarga <code>width</code> va <code>height</code> ta'sir qilmaydi — buning uchun <code>inline-block</code> yoki <code>block</code> kerak.",
          "Zamonaviy layoutlarda <code>inline-block</code> o'rniga <code>flexbox</code> ishlatiladi.",
        ],
        commonMistakes: [
          "Inline elementga <code>width</code> berish — ta'sir qilmaydi, avval <code>display: block</code> yoki <code>inline-block</code> qiling.",
          "<code>display: none</code> va <code>visibility: hidden</code> farqini bilmaslik.",
          "Block element ichida block element muammosi: <code>&lt;p&gt;</code> ichida <code>&lt;div&gt;</code> — HTML xato.",
        ],
        practiceTask:
          "Gorizontal navigatsiya menyusi yarating: <code>inline-block</code> yordamida 5 ta menyu elementi ketma-ket joylashsin. Har biriga hover da rang o'zgarishi bering.",
        quiz: [
          {
            question: "Qaysi elementga <code>width: 200px</code> ta'sir qilmaydi?",
            options: ["<code>div</code>", "<code>section</code>", "<code>span</code>", "<code>article</code>"],
            correct: 2,
            explanation: "<code>span</code> — inline element. Inline elementlarga <code>width</code> va <code>height</code> ta'sir qilmaydi.",
          },
          {
            question: "<code>display: none</code> va <code>visibility: hidden</code> farqi nima?",
            options: [
              "Farqi yo'q",
              "<code>none</code> joy olmaydi, <code>hidden</code> joy egallaydi",
              "<code>hidden</code> joy olmaydi, <code>none</code> joy egallaydi",
              "Ikkalasi ham joy olmaydi",
            ],
            correct: 1,
            explanation: "<code>display: none</code> elementni oqimdan butunlay olib tashlaydi. <code>visibility: hidden</code> esa ko'rinmaydi, lekin joy egallaydi.",
          },
        ],
      },
      {
        id: "css-position",
        slug: "position",
        title: "Positioning (Joylashuv)",
        description: "static, relative, absolute, fixed, sticky — elementlarni joylashtirish",
        sections: [
          { id: "static-relative", title: "static va relative" },
          { id: "absolute-fixed", title: "absolute va fixed" },
          { id: "sticky", title: "sticky" },
        ],
        content: `
<h1>Positioning (Joylashuv)</h1>
<p>CSS <code>position</code> xususiyati elementning sahifada qanday joylashishini boshqaradi. <code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code> xususiyatlari bilan birgalikda ishlatiladi.</p>

<h2 id="static-relative">static va relative</h2>
<ul>
  <li><strong>static</strong> (default) — oddiy oqimda joylashadi. <code>top/left</code> ta'sir qilmaydi.</li>
  <li><strong>relative</strong> — o'z normal pozitsiyasiga nisbatan siljiydi. Atrof elementlar joy bermaydi. <code>z-index</code> ishlaydi.</li>
</ul>

<h2 id="absolute-fixed">absolute va fixed</h2>
<ul>
  <li><strong>absolute</strong> — oqimdan chiqadi. Eng yaqin <code>position: relative/absolute/fixed</code> ota elementga nisbatan joylashadi. Ota yo'q bo'lsa — <code>&lt;html&gt;</code> ga nisbatan.</li>
  <li><strong>fixed</strong> — oqimdan chiqadi. Har doim <strong>viewport</strong> (brauzer oynasi)ga nisbatan joylashadi. Scroll qilganda ham qimirlamaydi.</li>
</ul>

<h2 id="sticky">sticky</h2>
<p>Relative va fixed ning kombinatsiyasi. Oddiy oqimda joylashadi, lekin belgilangan nuqtaga yetganda "yopishib" qoladi. <code>top: 0</code> bilan navbar uchun keng ishlatiladi.</p>
        `,
        codeExample: {
          title: "Position turlari",
          language: "css",
          code: `/* Relative — o'z pozitsiyasidan siljiydi */
.badge {
  position: relative;
  top: -4px;    /* 4px yuqoriga ko'tariladi */
  left: 2px;
}

/* Absolute — ota elementga nisbatan (ota: relative bo'lishi kerak) */
.card {
  position: relative; /* Anchor vazifasi */
}

.card__badge {
  position: absolute;
  top: 8px;
  right: 8px;
  background: red;
  color: white;
  padding: 2px 8px;
  border-radius: 99px;
  font-size: 12px;
}

/* Fixed — viewport ga nisbatan, scroll da qimirlamaydi */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: white;
  z-index: 100;
  box-shadow: 0 1px 4px rgba(0,0,0,0.1);
}

/* Sticky — belgilangan nuqtaga yetganda yopishadi */
.sidebar-title {
  position: sticky;
  top: 16px; /* Scroll qilganda tepadan 16px da qoladi */
  background: white;
  padding: 8px 0;
}`,
        },
        liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: sans-serif; padding: 80px 24px 24px; background: #f6f6f7; }

    /* Fixed navbar */
    .navbar {
      position: fixed;
      top: 0; left: 0; right: 0;
      height: 56px;
      background: #0a0a0f;
      color: white;
      display: flex;
      align-items: center;
      padding: 0 24px;
      z-index: 100;
    }

    /* Relative + absolute karta */
    .card {
      position: relative;
      background: white;
      border-radius: 12px;
      padding: 20px;
      margin: 12px 0;
      border: 1px solid #e2e2e8;
      width: 300px;
    }

    .card__tag {
      position: absolute;
      top: 12px;
      right: 12px;
      background: #2250e8;
      color: white;
      font-size: 11px;
      padding: 2px 8px;
      border-radius: 99px;
    }

    /* Sticky header */
    .sticky-hd {
      position: sticky;
      top: 60px;
      background: #fef9c3;
      padding: 8px 16px;
      border-left: 3px solid #d97706;
      margin: 16px 0 8px;
    }
  </style>
</head>
<body>
  <nav class="navbar">Fixed Navbar — scroll qiling</nav>

  <div class="card">
    <div class="card__tag">Yangi</div>
    <h3>Absolute pozitsiya</h3>
    <p>Tag yuqori o'ngda joylashgan.</p>
  </div>

  <div class="sticky-hd">Sticky sarlavha (scroll da yopishadi)</div>

  <div style="height: 600px; background: linear-gradient(#e8f0fe, #f6f6f7); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #2250e8;">
    Scroll qiling...
  </div>
</body>
</html>`,
        notes: [
          "<code>position: absolute</code> uchun ota element <code>position: relative</code> bo'lishi kerak, aks holda <code>&lt;html&gt;</code> ga nisbatan joylashadi.",
          "<code>position: fixed</code> elementi oqimdan chiqadi — uning ostidagi kontent ustiga chiqib ketmasligi uchun body ga <code>padding-top</code> bering.",
          "<code>sticky</code> ishlashi uchun ota elementning overflow <code>hidden</code> yoki <code>auto</code> bo'lmasligi kerak.",
        ],
        commonMistakes: [
          "Absolute element ota elementida <code>position: relative</code> yo'q — element noto'g'ri joyda.",
          "Fixed elementning ostidagi kontentni padding bilan tushirmaslik.",
          "<code>z-index</code> faqat <code>position</code> berilgan elementlarda ishlaydi (static emas).",
        ],
        practiceTask:
          "Karta (<code>div.card</code>) yarating. Uning yuqori o'ng burchagida 'YANGI' badge joylashsin (<code>position: absolute</code>). Karta <code>position: relative</code> bo'lishi kerak. Fixed navbar ham qo'shing.",
        quiz: [
          {
            question: "<code>position: absolute</code> element qaysi ota elementga nisbatan joylashadi?",
            options: [
              "Faqat to'g'ridan-to'g'ri ota elementga",
              "Viewport ga",
              "Eng yaqin positioned (non-static) ota elementga",
              "Body ga",
            ],
            correct: 2,
            explanation: "Absolute element eng yaqin <code>position: relative | absolute | fixed | sticky</code> ota elementga nisbatan joylashadi. Bunday ota yo'q bo'lsa, viewport (html) ga nisbatan joylashadi.",
          },
          {
            question: "<code>position: sticky</code> qanday ishlaydi?",
            options: [
              "Har doim viewport ga yopishib turadi",
              "Oddiy oqimda turadi, belgilangan scroll nuqtasida yopishadi",
              "Oqimdan chiqadi va fixed bo'ladi",
              "Relative kabi ishlaydi",
            ],
            correct: 1,
            explanation: "Sticky element dastlab normal oqimda turadi. Scroll qilganda belgilangan nuqtaga (masalan <code>top: 0</code>) yetganda o'sha yerda yopishib qoladi.",
          },
        ],
      },
      {
        id: "css-zindex-overflow",
        slug: "zindex-overflow",
        title: "Z-index va Overflow",
        description: "Elementlarning qatlam tartibini va kontent chiqib ketishini boshqarish",
        sections: [
          { id: "zindex", title: "Z-index" },
          { id: "stacking", title: "Stacking context" },
          { id: "overflow", title: "Overflow" },
        ],
        content: `
<h1>Z-index va Overflow</h1>

<h2 id="zindex">Z-index — qatlam tartibini boshqarish</h2>
<p><code>z-index</code> elementlarning bir-birining ustiga chiqish tartibini (z-o'qi bo'yicha) boshqaradi. Katta qiymat — ustga chiqadi.</p>
<ul>
  <li>Faqat <code>position</code> berilgan elementlarda ishlaydi (<code>static</code> da ishlamaydi)</li>
  <li>Default: <code>auto</code> (0 ga teng)</li>
  <li>Manfiy qiymat ham bo'lishi mumkin: <code>z-index: -1</code></li>
</ul>

<h2 id="stacking">Stacking Context</h2>
<p>Ba'zi elementlar o'z "stacking context" ini yaratadi — bu ichidagi z-index lar faqat o'sha context ichida raqobat qiladi:</p>
<ul>
  <li><code>position + z-index</code> (auto emas)</li>
  <li><code>opacity &lt; 1</code></li>
  <li><code>transform</code></li>
  <li><code>filter</code></li>
  <li><code>isolation: isolate</code></li>
</ul>

<h2 id="overflow">Overflow — kontent chiqib ketganda</h2>
<ul>
  <li><code>overflow: visible</code> (default) — kontent chiqib ketadi</li>
  <li><code>overflow: hidden</code> — kesib tashlaydi</li>
  <li><code>overflow: scroll</code> — doim scroll paneli ko'rsatadi</li>
  <li><code>overflow: auto</code> — kerak bo'lganda scroll ko'rsatadi</li>
  <li><code>overflow-x</code> / <code>overflow-y</code> — alohida boshqarish</li>
  <li><code>text-overflow: ellipsis</code> — matn uchun "..." ko'rsatish</li>
</ul>
        `,
        codeExample: {
          title: "Z-index va overflow",
          language: "css",
          code: `/* Z-index — qatlam tartibini belgilash */
.modal-backdrop {
  position: fixed;
  inset: 0; /* top:0; right:0; bottom:0; left:0; */
  background: rgba(0, 0, 0, 0.5);
  z-index: 200;
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 201; /* backdrop dan yuqori */
  background: white;
  border-radius: 12px;
  padding: 32px;
}

.tooltip {
  position: absolute;
  z-index: 50;
  background: #0a0a0f;
  color: white;
  padding: 4px 10px;
  border-radius: 6px;
}

/* Overflow — kontent boshqaruvi */
.scrollable-list {
  height: 200px;
  overflow-y: auto;   /* kerak bo'lsa vertikal scroll */
  overflow-x: hidden; /* gorizontal yo'q */
  border: 1px solid #e2e2e8;
  border-radius: 8px;
}

/* Bir qatorlik matn — "..." bilan kesish */
.card-title {
  white-space: nowrap;      /* yangi qatorga o'tmasin */
  overflow: hidden;          /* chiqib ketmasin */
  text-overflow: ellipsis;   /* "..." qo'shsin */
}

/* Ko'p qatorli matn kesish (3 qator) */
.card-desc {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}`,
        },
        liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: sans-serif; padding: 24px; background: #f6f6f7; }

    /* Z-index namunasi */
    .z-wrap {
      position: relative;
      height: 120px;
      margin-bottom: 24px;
    }
    .z-box {
      position: absolute;
      width: 120px;
      height: 80px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      color: white;
      font-size: 13px;
    }
    .z1 { background: #2250e8; top: 0; left: 0; z-index: 1; }
    .z2 { background: #059669; top: 20px; left: 60px; z-index: 2; }
    .z3 { background: #dc2626; top: 40px; left: 120px; z-index: 3; }

    /* Overflow namunasi */
    .scroll-box {
      height: 120px;
      overflow-y: auto;
      border: 1px solid #e2e2e8;
      border-radius: 8px;
      padding: 12px;
      background: white;
      margin-bottom: 16px;
    }

    .ellipsis {
      width: 200px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      background: white;
      padding: 8px 12px;
      border: 1px solid #e2e2e8;
      border-radius: 6px;
    }
  </style>
</head>
<body>
  <h3>Z-index (qatlam tartibi)</h3>
  <div class="z-wrap">
    <div class="z-box z1">z-index: 1</div>
    <div class="z-box z2">z-index: 2</div>
    <div class="z-box z3">z-index: 3</div>
  </div>

  <h3>Overflow: auto (scroll)</h3>
  <div class="scroll-box">
    <p>1. Birinchi element</p><p>2. Ikkinchi</p><p>3. Uchinchi</p>
    <p>4. To'rtinchi</p><p>5. Beshinchi</p><p>6. Oltinchi</p>
  </div>

  <h3>text-overflow: ellipsis</h3>
  <div class="ellipsis">Bu juda uzun matn, u kesib tashlanadi...</div>
</body>
</html>`,
        notes: [
          "<code>z-index</code> faqat <code>position: static</code> bo'lmagan elementlarda ishlaydi.",
          "<code>overflow: hidden</code> — <code>sticky</code> ni buzadi, ehtiyot bo'ling.",
          "<code>inset: 0</code> — <code>top: 0; right: 0; bottom: 0; left: 0</code> ning qisqartmasi (zamonaviy CSS).",
        ],
        commonMistakes: [
          "<code>z-index: 9999</code> ishlatish — bu kerak emas, mantiqiy tartib (10, 100, 1000) yetarli.",
          "Stacking context ni tushunmaslik — boshqa context ichidagi element balandroq z-index bilan ham ustga chiqa olmaydi.",
          "<code>text-overflow: ellipsis</code> ishlatganda <code>white-space: nowrap</code> va <code>overflow: hidden</code> ham kerak.",
        ],
        practiceTask:
          "Modal oyna komponenti yarating: qoʻngʻiroq (<code>button</code>) bosqanda <code>display: none</code> → <code>flex</code> o'zgaruvchi modal. Modal backdrop (<code>z-index: 100</code>) va modal oyna (<code>z-index: 101</code>) bo'lsin. Modalni yopish tugmasi bo'lsin.",
        quiz: [
          {
            question: "<code>text-overflow: ellipsis</code> ishlashi uchun qaysi xususiyatlar ham kerak?",
            options: [
              "Hech narsa kerak emas",
              "<code>overflow: hidden</code> va <code>white-space: nowrap</code>",
              "Faqat <code>overflow: hidden</code>",
              "<code>display: block</code> va <code>width</code>",
            ],
            correct: 1,
            explanation: "<code>text-overflow: ellipsis</code> ishlashi uchun <code>overflow: hidden</code> va <code>white-space: nowrap</code> ikkalasi ham bo'lishi shart.",
          },
          {
            question: "Qaysi holat yangi stacking context yaratadi?",
            options: [
              "<code>position: static</code>",
              "<code>color: red</code>",
              "<code>opacity: 0.9</code>",
              "<code>display: block</code>",
            ],
            correct: 2,
            explanation: "<code>opacity</code> 1 dan kichik bo'lsa yangi stacking context yaratiladi. Bu z-index ni o'sha element ichida izolyatsiya qiladi.",
          },
        ],
      },
    ],
  },
];
