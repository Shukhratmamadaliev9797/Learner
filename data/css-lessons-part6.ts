// ─── PART 6: Transitions, Animations, Transforms ──────────────────────────

export const cssPart6Groups = [
  {
    title: "Animatsiya va o'zgarishlar",
    lessons: [
      {
        id: "css-transforms",
        slug: "transforms",
        title: "CSS Transforms",
        description: "translate, rotate, scale, skew va 3D transformatsiyalar",
        sections: [
          { id: "2d", title: "2D Transform funksiyalar" },
          { id: "3d", title: "3D Transforms" },
          { id: "origin", title: "transform-origin" },
        ],
        content: `
<h1>CSS Transforms</h1>
<p><code>transform</code> xususiyati elementni burmay (layout o'zgarmay) vizual o'zgartiradi: ko'chirish, burish, kattalashtirish, qiyshytirish. GPU tomonidan bajariladi — juda tez.</p>

<h2 id="2d">2D Transform funksiyalar</h2>
<ul>
  <li><code>translate(x, y)</code> — ko'chirish. <code>translateX(20px)</code>, <code>translateY(-50%)</code></li>
  <li><code>rotate(45deg)</code> — burish (soat yo'nalishida musbat)</li>
  <li><code>scale(1.2)</code> — kattalashtirish. <code>scaleX(0.5)</code>, <code>scaleY(2)</code></li>
  <li><code>skew(10deg, 5deg)</code> — qiyshytirish</li>
  <li>Birlashtirilgan: <code>transform: translateX(20px) rotate(45deg) scale(1.1)</code></li>
</ul>
<p><strong>Muhim:</strong> <code>translate(-50%, -50%)</code> — elementni o'ziga nisbatan markazlash uchun. <code>position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)</code> — klassik markazlash usuli.</p>

<h2 id="3d">3D Transforms</h2>
<ul>
  <li><code>perspective(1000px)</code> — 3D chuqurlik effekti (ota elementda)</li>
  <li><code>rotateX(45deg)</code>, <code>rotateY(30deg)</code>, <code>rotateZ(45deg)</code></li>
  <li><code>translateZ(50px)</code> — z-o'qi bo'yicha ko'chirish</li>
  <li><code>transform-style: preserve-3d</code> — bolalar 3D saqlansin</li>
  <li><code>backface-visibility: hidden</code> — orqa yuz ko'rinmasin (karta flip uchun)</li>
</ul>

<h2 id="origin">transform-origin</h2>
<p>Transform qaysi nuqtadan boshlanishini belgilaydi. Default: <code>50% 50%</code> (markaz).</p>
<ul>
  <li><code>transform-origin: top left</code> — yuqori chap burchakdan</li>
  <li><code>transform-origin: 0 0</code> — tepadan chapdan</li>
  <li><code>transform-origin: bottom center</code> — pastdan markazdan</li>
</ul>
        `,
        codeExample: {
          title: "Transform misollari",
          language: "css",
          code: `/* Markazlash — translate trick */
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Hover scale effekti */
.card {
  transition: transform 0.25s ease;
}
.card:hover {
  transform: translateY(-6px) scale(1.02);
}

/* Rotate animatsiya */
.spinner {
  animation: spin 1s linear infinite;
}
@keyframes spin {
  to { transform: rotate(360deg); }
}

/* transform-origin: top — pastdan kengayish */
.dropdown {
  transform-origin: top center;
  transform: scaleY(0);
  transition: transform 0.2s ease;
}
.dropdown.open {
  transform: scaleY(1);
}

/* 3D Karta flip */
.flip-card {
  perspective: 800px;
  width: 200px;
  height: 280px;
}

.flip-card__inner {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.flip-card:hover .flip-card__inner {
  transform: rotateY(180deg);
}

.flip-card__front,
.flip-card__back {
  position: absolute;
  inset: 0;
  border-radius: 12px;
  backface-visibility: hidden;
}

.flip-card__back {
  transform: rotateY(180deg);
}`,
        },
        liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; }
    body { font-family: sans-serif; padding: 40px; background: #f6f6f7; }

    h3 { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #8888a0; margin: 32px 0 16px; }

    /* Hover transformlar */
    .cards { display: flex; gap: 16px; flex-wrap: wrap; }
    .t-card {
      width: 140px;
      height: 100px;
      background: #2250e8;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .t-card:nth-child(2) { background: #059669; }
    .t-card:nth-child(3) { background: #7c3aed; }
    .t-card:nth-child(4) { background: #dc2626; }

    .t-card:hover { transform: translateY(-8px) scale(1.05); }
    .t-card:nth-child(2):hover { transform: rotate(5deg) scale(1.05); }
    .t-card:nth-child(3):hover { transform: skew(-5deg) scale(1.05); }
    .t-card:nth-child(4):hover { transform: rotate(-5deg) translateX(-4px); }

    /* 3D Flip karta */
    .flip-wrap {
      display: flex;
      gap: 24px;
      flex-wrap: wrap;
      margin-top: 16px;
    }

    .flip-card {
      perspective: 800px;
      width: 160px;
      height: 220px;
      cursor: pointer;
    }

    .flip-inner {
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
      transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
      position: relative;
    }

    .flip-card:hover .flip-inner {
      transform: rotateY(180deg);
    }

    .flip-front, .flip-back {
      position: absolute;
      inset: 0;
      border-radius: 16px;
      backface-visibility: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 20px;
      text-align: center;
    }

    .flip-front {
      background: linear-gradient(135deg, #2250e8, #7c3aed);
      color: white;
      font-size: 32px;
    }
    .flip-front p { font-size: 13px; font-weight: 600; margin: 8px 0 0; }

    .flip-back {
      background: #0a0a0f;
      color: white;
      transform: rotateY(180deg);
    }
    .flip-back strong { font-size: 16px; }
    .flip-back p { font-size: 12px; color: #8888a0; margin: 6px 0 0; }
  </style>
</head>
<body>
  <h3>2D Transform — hover qiling</h3>
  <div class="cards">
    <div class="t-card">translateY + scale</div>
    <div class="t-card">rotate</div>
    <div class="t-card">skew</div>
    <div class="t-card">rotate + translate</div>
  </div>

  <h3>3D Flip karta — hover qiling</h3>
  <div class="flip-wrap">
    <div class="flip-card">
      <div class="flip-inner">
        <div class="flip-front">🌐<p>HTML</p></div>
        <div class="flip-back"><strong>HTML</strong><p>HyperText Markup Language</p></div>
      </div>
    </div>
    <div class="flip-card">
      <div class="flip-inner">
        <div class="flip-front" style="background: linear-gradient(135deg,#059669,#0ea5e9)">🎨<p>CSS</p></div>
        <div class="flip-back"><strong>CSS</strong><p>Cascading Style Sheets</p></div>
      </div>
    </div>
    <div class="flip-card">
      <div class="flip-inner">
        <div class="flip-front" style="background: linear-gradient(135deg,#dc2626,#f59e0b)">⚡<p>JS</p></div>
        <div class="flip-back"><strong>JavaScript</strong><p>Veb interaktivligi</p></div>
      </div>
    </div>
  </div>
</body>
</html>`,
        notes: [
          "Transform layout o'zgartirmaydi — boshqa elementlar joy bermaydi. Performance uchun ideal.",
          "<code>translate(-50%, -50%)</code> — foiz o'z o'lchamiga nisbatan. Eng mashhur markazlash triki.",
          "Ko'p transform funksiyalar: tartib muhim! <code>translate rotate</code> ≠ <code>rotate translate</code>.",
        ],
        commonMistakes: [
          "Transform va margin/top/left ni aralashtirib ishlatish — transform tezroq va layout ni buzmaydi.",
          "3D effektda <code>perspective</code> ni ota elementda emas, elementning o'zida berish.",
          "<code>backface-visibility: hidden</code> ni flipda unutish — ikkala yuz bir vaqtda ko'rinib qoladi.",
        ],
        practiceTask:
          "3 ta karta (HTML, CSS, JS) yarating. Hover qilganda karta 3D flip bo'lsin: old tomoni rang-barang gradient, orqa tomoni qora fon bilan ma'lumot. <code>perspective</code>, <code>rotateY</code>, <code>backface-visibility</code> ishlating.",
        quiz: [
          {
            question: "<code>transform: translate(-50%, -50%)</code> da foizlar nimaga nisbatan?",
            options: [
              "Ota element o'lchamiga",
              "Viewport o'lchamiga",
              "Elementning o'z o'lchamiga",
              "Root element o'lchamiga",
            ],
            correct: 2,
            explanation: "Transform da foizlar elementning o'z o'lchamiga nisbatan. -50% kengligi va balandligining yarmiga teng — markazlash uchun ishlatiladi.",
          },
          {
            question: "3D flip uchun orqa yuz ko'rinmasligi uchun nima kerak?",
            options: [
              "<code>display: none</code>",
              "<code>opacity: 0</code>",
              "<code>backface-visibility: hidden</code>",
              "<code>visibility: hidden</code>",
            ],
            correct: 2,
            explanation: "<code>backface-visibility: hidden</code> — element 3D da orqaga botirilganda ko'rinmaydi. Flip animatsiyasida old va orqa yuzlar uchun zarur.",
          },
        ],
      },
      {
        id: "css-transitions",
        slug: "transitions",
        title: "CSS Transitions",
        description: "Transition xususiyatlari, easing funksiyalari va mikro-interaksiyalar",
        sections: [
          { id: "basics", title: "Transition asoslari" },
          { id: "easing", title: "Easing funksiyalari" },
          { id: "patterns", title: "Mikro-interaksiya patternlar" },
        ],
        content: `
<h1>CSS Transitions</h1>
<p>Transition — CSS xususiyatning bir qiymatdan ikkinchisiga o'tishida animatsiya hosil qiladi. Hover, focus, klass qo'shish/olib tashlash kabi holatlarda ishlaydi.</p>

<h2 id="basics">Transition asoslari</h2>
<p><code>transition: property duration timing-function delay</code></p>
<ul>
  <li><code>transition-property</code> — qaysi xususiyat animatsiya qilinadi: <code>all</code>, <code>opacity</code>, <code>transform</code>, <code>color</code></li>
  <li><code>transition-duration</code> — vaqt: <code>0.3s</code>, <code>200ms</code></li>
  <li><code>transition-timing-function</code> — tezlik egri chizig'i (easing)</li>
  <li><code>transition-delay</code> — boshlanishdan oldin kechikish</li>
  <li>Ko'p xususiyat: <code>transition: opacity 0.2s ease, transform 0.3s ease</code></li>
</ul>
<p><strong>Qaysi xususiyatlarni animatsiya qilish mumkin?</strong> Raqamli qiymatga ega xususiyatlar: <code>opacity</code>, <code>color</code>, <code>background</code>, <code>width</code>, <code>transform</code>, <code>box-shadow</code>, <code>border-radius</code> va hokazo. <code>display</code> animatsiya qilinmaydi.</p>

<h2 id="easing">Easing funksiyalari</h2>
<ul>
  <li><code>ease</code> — sekin boshlab, sekin tugaydi (default)</li>
  <li><code>linear</code> — bir tekis</li>
  <li><code>ease-in</code> — sekin boshlab, tez tugaydi</li>
  <li><code>ease-out</code> — tez boshlab, sekin tugaydi (eng tabiiy)</li>
  <li><code>ease-in-out</code> — ikki tomondan sekin</li>
  <li><code>cubic-bezier(x1, y1, x2, y2)</code> — maxsus egri chiziq</li>
  <li><code>steps(4)</code> — qadamli animatsiya (sprite uchun)</li>
</ul>
<p><strong>Spring-like easing:</strong> <code>cubic-bezier(0.16, 1, 0.3, 1)</code> — overshoot beradi, tabiiy his qildiради.</p>

<h2 id="patterns">Mikro-interaksiya patternlar</h2>
<ul>
  <li>Tugma hover: <code>transform + box-shadow</code></li>
  <li>Karta hover: <code>translateY + shadow</code></li>
  <li>Menu item: <code>color + padding-left</code></li>
  <li>Input focus: <code>border-color + box-shadow</code></li>
  <li>Toggler: <code>translate + background</code></li>
</ul>
        `,
        codeExample: {
          title: "Transition patternlar",
          language: "css",
          code: `/* ── Tugma micro-interaction ───────── */
.btn {
  padding: 10px 24px;
  background: #2250e8;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease,
    background 0.15s ease;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(34, 80, 232, 0.35);
  background: #1a3cb0;
}

.btn:active {
  transform: translateY(0);
  box-shadow: none;
}

/* ── Input focus ────────────────────── */
.input {
  border: 1.5px solid #e2e2e8;
  border-radius: 8px;
  padding: 10px 14px;
  outline: none;
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease;
}

.input:focus {
  border-color: #2250e8;
  box-shadow: 0 0 0 3px rgba(34, 80, 232, 0.15);
}

/* ── Toggle switch ──────────────────── */
.toggle {
  width: 44px;
  height: 24px;
  background: #e2e2e8;
  border-radius: 99px;
  position: relative;
  cursor: pointer;
  transition: background 0.2s ease;
}

.toggle::after {
  content: '';
  position: absolute;
  top: 3px;
  left: 3px;
  width: 18px;
  height: 18px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.toggle.active {
  background: #2250e8;
}

.toggle.active::after {
  transform: translateX(20px);
}

/* ── Nav link underline ─────────────── */
.nav-link {
  position: relative;
  text-decoration: none;
  color: #44444f;
  padding-bottom: 2px;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: #2250e8;
  border-radius: 1px;
  transition: width 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.nav-link:hover::after {
  width: 100%;
}`,
        },
        liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; }
    body { font-family: sans-serif; padding: 40px; background: #f6f6f7; }
    h3 { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #8888a0; margin: 32px 0 16px; }

    /* Tugmalar */
    .btns { display: flex; gap: 12px; flex-wrap: wrap; }
    .btn {
      padding: 10px 24px;
      border: none;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      font-family: inherit;
    }
    .btn-primary {
      background: #2250e8;
      color: white;
      transition: transform 0.15s, box-shadow 0.15s, background 0.15s;
    }
    .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(34,80,232,.35); background: #1a3cb0; }
    .btn-primary:active { transform: translateY(0); box-shadow: none; }

    .btn-ghost {
      background: transparent;
      border: 1.5px solid #e2e2e8;
      color: #0a0a0f;
      transition: border-color 0.15s, background 0.15s;
    }
    .btn-ghost:hover { border-color: #2250e8; background: #e8f0fe; color: #2250e8; }

    /* Input */
    .form-group { margin-top: 16px; display: flex; flex-direction: column; gap: 6px; max-width: 320px; }
    label { font-size: 13px; font-weight: 600; }
    .inp {
      border: 1.5px solid #e2e2e8;
      border-radius: 8px;
      padding: 10px 14px;
      font-size: 14px;
      outline: none;
      font-family: inherit;
      transition: border-color 0.15s, box-shadow 0.15s;
    }
    .inp:focus { border-color: #2250e8; box-shadow: 0 0 0 3px rgba(34,80,232,.15); }

    /* Toggle */
    .toggle-row { display: flex; align-items: center; gap: 12px; }
    .tog {
      width: 44px; height: 24px;
      background: #e2e2e8;
      border-radius: 99px;
      position: relative;
      cursor: pointer;
      transition: background 0.2s;
    }
    .tog::after {
      content: '';
      position: absolute;
      top: 3px; left: 3px;
      width: 18px; height: 18px;
      background: white;
      border-radius: 50%;
      box-shadow: 0 1px 3px rgba(0,0,0,.2);
      transition: transform 0.25s cubic-bezier(0.16,1,0.3,1);
    }
    .tog.on { background: #2250e8; }
    .tog.on::after { transform: translateX(20px); }

    /* Nav links */
    .nav-demo { display: flex; gap: 24px; margin-top: 16px; }
    .nl {
      position: relative;
      text-decoration: none;
      color: #44444f;
      font-weight: 500;
      padding-bottom: 3px;
      font-size: 15px;
    }
    .nl::after {
      content: '';
      position: absolute;
      bottom: 0; left: 0;
      width: 0; height: 2px;
      background: #2250e8;
      border-radius: 1px;
      transition: width 0.25s cubic-bezier(0.16,1,0.3,1);
    }
    .nl:hover { color: #0a0a0f; }
    .nl:hover::after { width: 100%; }
  </style>
</head>
<body>
  <h3>Tugma micro-interactions</h3>
  <div class="btns">
    <button class="btn btn-primary">Primary tugma</button>
    <button class="btn btn-ghost">Ghost tugma</button>
  </div>

  <h3>Input focus effekti</h3>
  <div class="form-group">
    <label>Email</label>
    <input class="inp" placeholder="email@example.com" type="email">
  </div>

  <h3>Toggle switch</h3>
  <div class="toggle-row">
    <div class="tog" onclick="this.classList.toggle('on')"></div>
    <span id="tl" style="font-size:14px">O'chirilgan</span>
  </div>

  <h3>Nav link underline</h3>
  <nav class="nav-demo">
    <a href="#" class="nl">HTML</a>
    <a href="#" class="nl">CSS</a>
    <a href="#" class="nl">JavaScript</a>
    <a href="#" class="nl">React</a>
  </nav>

  <script>
    document.querySelector('.tog').addEventListener('click', function() {
      document.getElementById('tl').textContent = this.classList.contains('on') ? 'Yoqilgan' : "O'chirilgan";
    });
  </script>
</body>
</html>`,
        notes: [
          "Performance uchun faqat <code>transform</code> va <code>opacity</code> ni animatsiya qiling — GPU ular bilan ishlaydi.",
          "<code>transition: all</code> — barcha xususiyatlarni kuzatadi, lekin sekin bo'lishi mumkin. Aniq xususiyatlarni ko'rsating.",
          "Transition faqat ikki holat orasida ishlaydi — boshlang'ich va oxirgi. Keyframe animatsiya uchun <code>@keyframes</code> ishlatiladi.",
        ],
        commonMistakes: [
          "<code>display: none</code> → <code>display: block</code> transition qilinmaydi — <code>opacity</code> va <code>visibility</code> ishlatiladi.",
          "<code>height: 0</code> → <code>height: auto</code> transition qilinmaydi — <code>max-height</code> yoki JS kerak.",
          "Juda ko'p xususiyatni <code>all</code> bilan animatsiya qilish — performance muammo va kutilmagan effektlar.",
        ],
        practiceTask:
          "Professional formular yarating: email va parol inputlari (focus ring), submit tugmasi (hover lift + shadow effekti), va toggle switch (dark mode uchun). Barcha o'tishlar smooth va tabiiy bo'lsin.",
        quiz: [
          {
            question: "Qaysi xususiyatlar GPU tomonidan bajariladi (performant)?",
            options: [
              "<code>width</code> va <code>height</code>",
              "<code>margin</code> va <code>padding</code>",
              "<code>transform</code> va <code>opacity</code>",
              "<code>color</code> va <code>background</code>",
            ],
            correct: 2,
            explanation: "<code>transform</code> va <code>opacity</code> GPU tomonidan bajariladi — layout reflow yo'q. Boshqalar CPU da, layout qayta hisoblanadi.",
          },
          {
            question: "<code>ease-out</code> qanday ishlaydi?",
            options: [
              "Sekin boshlab, tez tugaydi",
              "Tez boshlab, sekin tugaydi",
              "Bir tekis",
              "Ikki tomondan sekin",
            ],
            correct: 1,
            explanation: "<code>ease-out</code> — tez boshlanadi, sekinlab tugaydi. Ko'p UI elementlari uchun eng tabiiy his beradi (masalan, modal ochilishi).",
          },
        ],
      },
      {
        id: "css-animations",
        slug: "animatsiyalar",
        title: "CSS Animatsiyalar",
        description: "@keyframes, animation xususiyatlari va murakkab animatsiya patternlari",
        sections: [
          { id: "keyframes", title: "@keyframes" },
          { id: "properties", title: "Animation xususiyatlari" },
          { id: "advanced", title: "Murakkab animatsiyalar" },
        ],
        content: `
<h1>CSS Animatsiyalar</h1>
<p>Transition faqat ikki holat orasida ishlaydi. <code>@keyframes</code> esa ko'p bosqichli, murakkab animatsiyalarni yaratadi va trigger siz ishlaydi.</p>

<h2 id="keyframes">@keyframes</h2>
<p>Animatsiya bosqichlarini foiz yoki <code>from/to</code> bilan belgilaydi:</p>
<ul>
  <li><code>from { } to { }</code> — ikki bosqich (0% dan 100% gacha)</li>
  <li><code>0% { } 50% { } 100% { }</code> — ko'p bosqich</li>
  <li>Har bir bosqichda istalgan CSS xususiyatlar</li>
</ul>

<h2 id="properties">Animation xususiyatlari</h2>
<ul>
  <li><code>animation-name</code> — @keyframes nomi</li>
  <li><code>animation-duration</code> — davomiyligi: <code>1s</code>, <code>400ms</code></li>
  <li><code>animation-timing-function</code> — easing</li>
  <li><code>animation-delay</code> — boshlanish kechikishi</li>
  <li><code>animation-iteration-count</code> — takrorlar: <code>1</code>, <code>3</code>, <code>infinite</code></li>
  <li><code>animation-direction</code> — yo'nalish: <code>normal</code>, <code>reverse</code>, <code>alternate</code>, <code>alternate-reverse</code></li>
  <li><code>animation-fill-mode</code> — tugagandan keyin: <code>forwards</code> (oxirgi holat saqlanadi), <code>backwards</code>, <code>both</code></li>
  <li><code>animation-play-state</code> — <code>running</code> / <code>paused</code></li>
  <li><code>animation</code> — qisqartma: <code>animation: name duration easing delay count direction fill-mode</code></li>
</ul>

<h2 id="advanced">Murakkab va zamonaviy animatsiyalar</h2>
<ul>
  <li><strong>Stagger:</strong> ketma-ket animatsiya — <code>animation-delay</code> bilan</li>
  <li><strong>Pulse/Glow:</strong> e'tibor tortish uchun</li>
  <li><strong>Skeleton loader:</strong> kontent yuklanayotganda</li>
  <li><strong>prefers-reduced-motion:</strong> animatsiyani o'chirish imkoniyati bering</li>
  <li><strong>will-change: transform</strong> — GPU tayyor bo'lsin (ehtiyotkorlik bilan)</li>
</ul>
        `,
        codeExample: {
          title: "Keyframes va animation",
          language: "css",
          code: `/* ── Spin ───────────────────────────── */
@keyframes spin {
  to { transform: rotate(360deg); }
}
.spinner {
  animation: spin 0.8s linear infinite;
}

/* ── Fade up (page load) ────────────── */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.page-section {
  animation: fadeUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
}

/* Stagger — ketma-ket */
.item:nth-child(1) { animation-delay: 0s; }
.item:nth-child(2) { animation-delay: 0.08s; }
.item:nth-child(3) { animation-delay: 0.16s; }

/* ── Pulse (dikkat) ─────────────────── */
@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(34, 80, 232, 0.4); }
  50%       { box-shadow: 0 0 0 12px rgba(34, 80, 232, 0); }
}
.notification-dot {
  width: 10px;
  height: 10px;
  background: #2250e8;
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

/* ── Skeleton loader ────────────────── */
@keyframes shimmer {
  from { background-position: -400px 0; }
  to   { background-position: 400px 0; }
}
.skeleton {
  background: linear-gradient(
    90deg,
    #f0f0f0 25%,
    #e0e0e0 50%,
    #f0f0f0 75%
  );
  background-size: 800px 100%;
  animation: shimmer 1.5s ease-in-out infinite;
  border-radius: 6px;
}

/* ── Accessibility ──────────────────── */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}`,
        },
        liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; }
    body { font-family: sans-serif; padding: 40px; background: #0a0a0f; color: white; }
    h3 { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #8888a0; margin: 32px 0 16px; }

    /* Fade up */
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(24px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .fade-cards { display: flex; gap: 12px; }
    .fc {
      background: #141418;
      border: 1px solid #1e1e2a;
      border-radius: 12px;
      padding: 20px;
      flex: 1;
      animation: fadeUp 0.5s cubic-bezier(0.16,1,0.3,1) both;
    }
    .fc:nth-child(1) { animation-delay: 0.0s; }
    .fc:nth-child(2) { animation-delay: 0.1s; }
    .fc:nth-child(3) { animation-delay: 0.2s; }
    .fc h4 { margin: 0 0 6px; font-size: 15px; }
    .fc p { margin: 0; font-size: 13px; color: #8888a0; }

    /* Spinner */
    @keyframes spin { to { transform: rotate(360deg); } }
    .spin-demo { display: flex; gap: 20px; align-items: center; }
    .spinner {
      width: 32px; height: 32px;
      border: 3px solid #1e1e2a;
      border-top-color: #4f86fa;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }
    .spinner-sm {
      width: 20px; height: 20px;
      border-width: 2px;
      border-color: #1e1e2a;
      border-top-color: #10b981;
      border-radius: 50%;
      animation: spin 0.6s linear infinite;
    }

    /* Pulse */
    @keyframes pulse {
      0%, 100% { box-shadow: 0 0 0 0 rgba(79,134,250,.5); }
      50%       { box-shadow: 0 0 0 10px rgba(79,134,250,0); }
    }
    .pulse-demo { display: flex; align-items: center; gap: 10px; }
    .pdot {
      width: 10px; height: 10px;
      background: #4f86fa;
      border-radius: 50%;
      animation: pulse 2s ease-in-out infinite;
    }
    .pdot.green { background: #10b981; animation-delay: 0.5s; box-shadow: none; }
    @keyframes pulse-green {
      0%,100% { box-shadow: 0 0 0 0 rgba(16,185,129,.5); }
      50% { box-shadow: 0 0 0 8px rgba(16,185,129,0); }
    }
    .pdot.green { animation-name: pulse-green; }

    /* Skeleton */
    @keyframes shimmer {
      from { background-position: -400px 0; }
      to { background-position: 400px 0; }
    }
    .skeleton-card {
      background: #141418;
      border: 1px solid #1e1e2a;
      border-radius: 12px;
      padding: 20px;
    }
    .sk {
      background: linear-gradient(90deg, #1e1e2a 25%, #2a2a38 50%, #1e1e2a 75%);
      background-size: 800px 100%;
      animation: shimmer 1.5s ease-in-out infinite;
      border-radius: 6px;
    }
    .sk-circle { width: 44px; height: 44px; border-radius: 50%; margin-bottom: 12px; }
    .sk-line { height: 12px; margin-bottom: 8px; }
    .sk-line.w60 { width: 60%; }
    .sk-line.w80 { width: 80%; }
    .sk-line.w40 { width: 40%; }
  </style>
</head>
<body>
  <h3>Stagger Fade Up</h3>
  <div class="fade-cards">
    <div class="fc"><h4>HTML</h4><p>Tuzilish</p></div>
    <div class="fc"><h4>CSS</h4><p>Ko'rinish</p></div>
    <div class="fc"><h4>JavaScript</h4><p>Harakat</p></div>
  </div>

  <h3>Loading Spinnerlar</h3>
  <div class="spin-demo">
    <div class="spinner"></div>
    <div class="spinner-sm"></div>
    <span style="font-size:13px;color:#8888a0">Yuklanmoqda...</span>
  </div>

  <h3>Pulse — dikkat tortish</h3>
  <div class="pulse-demo">
    <div class="pdot"></div>
    <span style="font-size:13px">Jonli</span>
    <div class="pdot green" style="margin-left:16px"></div>
    <span style="font-size:13px">Faol</span>
  </div>

  <h3>Skeleton Loader</h3>
  <div class="skeleton-card">
    <div class="sk sk-circle"></div>
    <div class="sk sk-line w80"></div>
    <div class="sk sk-line w60"></div>
    <div class="sk sk-line w40"></div>
  </div>
</body>
</html>`,
        notes: [
          "<code>animation-fill-mode: both</code> — animatsiya boshlanishdan oldin va tugaganidan keyin kerakli holatni saqlaydi.",
          "Stagger delay uchun CSS custom properties: <code>--delay: 0.1s; animation-delay: var(--delay);</code> — JavaScript siz inline style bilan.",
          "<code>prefers-reduced-motion</code> media query — vestibulär muammoli foydalanuvchilar uchun muhim accessibility.",
        ],
        commonMistakes: [
          "<code>animation: fadeIn</code> — duration bermaslik, animatsiya ko'rinmaydi.",
          "<code>animation-fill-mode</code> ni unutish — animatsiya tugagach element boshlang'ich holatga qaytadi.",
          "Ko'p elementni har xil nom bilan <code>@keyframes</code> yaratish — bir nom, <code>animation-delay</code> bilan stagger.",
        ],
        practiceTask:
          "Loading ekrani yarating: aylana spinner, uchta karta skeleton loader (shimmer effekti bilan), va kontent yuklanganida stagger fade-up bilan uchta karta paydo bo'lsin. JavaScript bilan 2 sekunddan keyin almashsin.",
        quiz: [
          {
            question: "<code>animation-fill-mode: forwards</code> nima qiladi?",
            options: [
              "Animatsiya oldinga yuguradi",
              "Animatsiya tugagandan keyin oxirgi holatda qoladi",
              "Animatsiya boshlanishidan oldin boshlang'ich holatda bo'ladi",
              "Animatsiya teskari ishlaydi",
            ],
            correct: 1,
            explanation: "<code>forwards</code> — animatsiya tugaganidan keyin 100% (to) holatida qoladi. Masalan, fade-in animatsiyasida element ko'rinib qoladi.",
          },
          {
            question: "Stagger animatsiya uchun (bir-biridan kechikib paydo bo'lish) qaysi xususiyat ishlatiladi?",
            options: [
              "<code>animation-duration</code>",
              "<code>animation-delay</code>",
              "<code>animation-iteration-count</code>",
              "<code>animation-direction</code>",
            ],
            correct: 1,
            explanation: "<code>animation-delay</code> — har bir elementga har xil kechikish beriladi. <code>nth-child</code> bilan kombinatsiyalanganda stagger hosil bo'ladi.",
          },
        ],
      },
    ],
  },
];
