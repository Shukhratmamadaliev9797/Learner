import type { Lesson } from "@/lib/types";

export const cssVisualProps: Lesson[] = [
  {
    id: "prop-background",
    slug: "prop-background",
    title: "background",
    description: "Fon rangi, rasm, gradient va boshqalar",
    sections: [{ id: "overview", title: "Tavsif" }],
    content: `<h2 id="overview">Tavsif</h2>
<p><code>background</code> — elementning fon qatlamlari. Shorthand bo'lib bir nechta xususiyatni birga yozadi.</p>
<ul>
  <li><code>background-color</code> — fon rangi</li>
  <li><code>background-image</code> — fon rasmi yoki gradient</li>
  <li><code>background-size</code> — <code>cover</code>, <code>contain</code>, px, %</li>
  <li><code>background-position</code> — fon joylashuvi: <code>center</code>, <code>top left</code>, <code>50% 30%</code></li>
  <li><code>background-repeat</code> — <code>no-repeat</code>, <code>repeat</code>, <code>repeat-x</code>, <code>repeat-y</code></li>
  <li><code>background-attachment</code> — <code>scroll</code>, <code>fixed</code> (parallax), <code>local</code></li>
  <li><code>background-clip</code> — <code>border-box</code>, <code>padding-box</code>, <code>content-box</code>, <code>text</code></li>
  <li><code>background-origin</code> — fon joylashuv nuqtasi</li>
  <li>Ko'p qatlamli: vergul bilan ajratiladi</li>
</ul>`,
    codeExample: {
      title: "background xususiyati",
      language: "css",
      code: `/* Rang */
.el { background-color: #f0f0f0; }
.el { background: #f0f0f0; }

/* Rasm */
.hero {
  background-image: url('hero.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* Shorthand */
.hero {
  background: url('hero.jpg') center/cover no-repeat;
}

/* Linear gradient */
.grad {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* Radial gradient */
.circle {
  background: radial-gradient(circle, #fff 30%, #f0f0f0 100%);
}

/* Ko'p qatlamli */
.layered {
  background:
    url('overlay.png') center/cover no-repeat,
    linear-gradient(45deg, #e34c26, #2965f1);
}

/* Matn clipi */
.clip-text {
  background: linear-gradient(90deg, #e34c26, #2965f1);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}`,
    },
    liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>background</title>
  <style>
    * { box-sizing: border-box; }
    body { font-family: Arial; padding: 20px; }
    .box { height: 80px; border-radius: 10px; margin: 10px 0; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; }
    .solid { background: #e34c26; }
    .linear { background: linear-gradient(135deg, #667eea, #764ba2); }
    .radial { background: radial-gradient(circle at 30%, #e34c26, #2965f1); }
    .multi  { background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), linear-gradient(135deg, #e34c26, #ff6b6b); }
    .clip   { background: linear-gradient(90deg, #e34c26, #2965f1); -webkit-background-clip: text; background-clip: text; color: transparent; font-size: 32px; font-weight: 900; height: auto; }
  </style>
</head>
<body>
  <div class="box solid">background: #e34c26</div>
  <div class="box linear">linear-gradient</div>
  <div class="box radial">radial-gradient</div>
  <div class="box multi">Ko'p qatlamli background</div>
  <div class="clip">Gradient matn!</div>
</body>
</html>`,
    notes: [
      "background-size: cover — rasm konteynerga to'liq sig'adi, qirqilishi mumkin",
      "background-size: contain — rasm to'liq ko'rinadi, bo'sh joy qolishi mumkin",
      "Ko'p qatlamli background: birinchi qatlam ustida",
    ],
    commonMistakes: [
      "background shorthand da size dan oldin position qo'ymaslik (position/size tartib muhim)",
      "background-clip: text uchun color: transparent qo'ymaslik",
    ],
    practiceTask: "Hero section: gradient background, cover rasm va matn overlay yarating.",
    quiz: [
      {
        question: "background-size: cover va contain farqi?",
        options: [
          "Hech qanday farqi yo'q",
          "cover — konteynerga to'ladi (qirqilishi mumkin), contain — to'liq ko'rinadi",
          "contain — konteynerga to'ladi, cover — to'liq ko'rinadi",
          "cover faqat gorizontal, contain vertikal",
        ],
        correct: 1,
        explanation: "cover: konteyner to'liq qoplanadi, rasm proportsional kengayib qirqilishi mumkin. contain: rasm to'liq ko'rinadi, bo'sh joy qoladi.",
      },
    ],
  },

  {
    id: "prop-border",
    slug: "prop-border",
    title: "border",
    description: "Chegara — qalinlik, stil va rang",
    sections: [{ id: "overview", title: "Tavsif" }],
    content: `<h2 id="overview">Tavsif</h2>
<p><code>border</code> — element atrofidagi chegara. Shorthand: qalinlik + stil + rang.</p>
<ul>
  <li><code>border-width</code> — qalinlik (px, thin, medium, thick)</li>
  <li><code>border-style</code> — solid, dashed, dotted, double, groove, ridge, inset, outset, none, hidden</li>
  <li><code>border-color</code> — rang</li>
  <li>Alohida tomonga: <code>border-top</code>, <code>border-right</code>, <code>border-bottom</code>, <code>border-left</code></li>
  <li><code>border-radius</code> — burchaklar yumaloqlash</li>
  <li><code>border-image</code> — rasm yoki gradient chegara</li>
  <li><code>outline</code> — border o'xshash, lekin joy egollamaydi (focus uchun)</li>
</ul>`,
    codeExample: {
      title: "border va border-radius",
      language: "css",
      code: `/* Shorthand */
.el { border: 2px solid #e34c26; }

/* Alohida tomonlar */
.el {
  border-top: 3px solid #2965f1;
  border-right: none;
  border-bottom: 1px dashed #ccc;
  border-left: 4px solid #059669;
}

/* border-radius */
.rounded  { border-radius: 8px; }
.circle   { border-radius: 50%; }
.pill     { border-radius: 9999px; }
.custom   { border-radius: 16px 4px 16px 4px; }

/* Gradient border */
.grad-border {
  border: 3px solid transparent;
  background-clip: padding-box;
  background: linear-gradient(white, white) padding-box,
              linear-gradient(135deg, #e34c26, #2965f1) border-box;
}

/* Outline (accessibility) */
button:focus-visible {
  outline: 2px solid #2965f1;
  outline-offset: 2px;
}`,
    },
    liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>border</title>
  <style>
    * { box-sizing: border-box; }
    body { font-family: Arial; padding: 20px; }
    .box { width: 120px; height: 60px; margin: 10px; display: inline-flex; align-items: center; justify-content: center; font-size: 13px; font-weight: bold; }
    .solid  { border: 2px solid #e34c26; }
    .dashed { border: 2px dashed #2965f1; }
    .dotted { border: 2px dotted #059669; }
    .r8     { border: 2px solid #333; border-radius: 8px; }
    .circle { border: 2px solid #e34c26; border-radius: 50%; width: 60px; }
    .pill   { border: 2px solid #2965f1; border-radius: 9999px; width: 140px; }
    .thick  { border-top: 4px solid #e34c26; border-bottom: 4px solid #2965f1; border-left: none; border-right: none; }
  </style>
</head>
<body>
  <div class="box solid">solid</div>
  <div class="box dashed">dashed</div>
  <div class="box dotted">dotted</div>
  <div class="box r8">radius: 8px</div>
  <div class="box circle">50%</div>
  <div class="box pill">pill</div>
  <div class="box thick">top+bottom</div>
</body>
</html>`,
    notes: [
      "border-radius: 50% — kvadrat elementni doiraga aylantiradi",
      "border-radius: 9999px — to'liq yumaloq (pill) ko'rinish",
      "outline — border dan farqli, joy egollamaydi. Focus holati uchun",
    ],
    commonMistakes: [
      "outline: none bilan fokus ko'rinishini o'chirish — accessibility buziladi",
      "border-radius ni circular qilish uchun elementni kvadrat qilmaslik",
    ],
    practiceTask: "Tugma: border-radius: 9999px (pill). Karta: 12px. Profil rasmi: 50%.",
    quiz: [
      {
        question: "border va outline farqi nima?",
        options: [
          "Hech qanday farqi yo'q",
          "outline — joy egollamaydi va box-model ga ta'sir qilmaydi",
          "border — joy egollamaydi",
          "outline faqat focus uchun",
        ],
        correct: 1,
        explanation: "outline — elementning atrofida chiziladi, lekin joy egollamaydi (layout o'zgarmaydi). border — box-model ning bir qismi, joy oladi.",
      },
    ],
  },

  {
    id: "prop-box-shadow",
    slug: "prop-box-shadow",
    title: "box-shadow",
    description: "Element soyasi",
    sections: [{ id: "overview", title: "Tavsif" }],
    content: `<h2 id="overview">Tavsif</h2>
<p><code>box-shadow</code> — element atrofida soya. Bir nechta soya vergul bilan beriladi.</p>
<p>Sintaksis: <code>box-shadow: x-offset y-offset blur spread color inset</code></p>
<ul>
  <li><code>x-offset</code> — gorizontal siljish (manfiy — chapga)</li>
  <li><code>y-offset</code> — vertikal siljish (manfiy — yuqoriga)</li>
  <li><code>blur-radius</code> — xiralashish (0 = aniq chegara)</li>
  <li><code>spread-radius</code> — soya o'lchami kengayishi (manfiy — kichrayishi)</li>
  <li><code>color</code> — soya rangi (rgba tavsiya)</li>
  <li><code>inset</code> — ichki soya</li>
</ul>`,
    codeExample: {
      title: "box-shadow",
      language: "css",
      code: `/* Oddiy soya */
.card { box-shadow: 0 2px 8px rgba(0,0,0,0.12); }

/* Ko'tarilgan (elevation) */
.elevated { box-shadow: 0 8px 32px rgba(0,0,0,0.16); }

/* Ko'p qatlamli (chuqurroq) */
.deep {
  box-shadow:
    0 1px 3px rgba(0,0,0,0.12),
    0 4px 12px rgba(0,0,0,0.08),
    0 16px 48px rgba(0,0,0,0.06);
}

/* Ichki soya */
.inset { box-shadow: inset 0 2px 4px rgba(0,0,0,0.15); }

/* Rangli soya */
.glow { box-shadow: 0 0 20px rgba(41,101,241,0.4); }

/* Border o'rnida (joy egollamaydi) */
.border { box-shadow: 0 0 0 2px #2965f1; }

/* Hover effekt */
.card:hover { box-shadow: 0 16px 48px rgba(0,0,0,0.2); }`,
    },
    liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>box-shadow</title>
  <style>
    * { box-sizing: border-box; }
    body { font-family: Arial; padding: 40px; background: #f5f5f5; }
    .card { background: white; padding: 20px; border-radius: 12px; margin: 16px 0; }
    .sm  { box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    .md  { box-shadow: 0 4px 16px rgba(0,0,0,0.12); }
    .lg  { box-shadow: 0 8px 32px rgba(0,0,0,0.15); }
    .inset { box-shadow: inset 0 2px 8px rgba(0,0,0,0.15); background: #f0f0f0; }
    .glow  { box-shadow: 0 0 20px rgba(227,76,38,0.5); border: 1px solid #e34c26; }
    .multi { box-shadow: 0 1px 3px rgba(0,0,0,0.1), 0 8px 24px rgba(0,0,0,0.1); }
  </style>
</head>
<body>
  <div class="card sm">box-shadow: kichik (sm)</div>
  <div class="card md">box-shadow: o'rta (md)</div>
  <div class="card lg">box-shadow: katta (lg)</div>
  <div class="card inset">box-shadow: inset (ichki soya)</div>
  <div class="card glow">box-shadow: rangli glow</div>
  <div class="card multi">box-shadow: ko'p qatlamli</div>
</body>
</html>`,
    notes: [
      "rgba() — shaffof soya yaxshiroq ko'rinadi",
      "Ko'p qatlamli soya — realistikroq 3D effekt",
      "box-shadow: 0 0 0 2px color — border o'rnida joy egollamaydi",
    ],
    commonMistakes: [
      "Bir xil o'lchamdagi soya — ko'p qatlamli tabiiyroq ko'rinadi",
      "Juda katta blur — professional ko'rinmaydi",
    ],
    practiceTask: "Hover da ko'tarilish effekti: tinch holat kichik soya, hover da katta soya.",
    quiz: [
      {
        question: "box-shadow: inset nima qiladi?",
        options: [
          "Soyani tashqariga chiqaradi",
          "Soyani element ichiga yo'naltiradi",
          "Soyani o'chiradi",
          "Soyani kattalashtiradi",
        ],
        correct: 1,
        explanation: "inset — soya element ichida ko'rsatiladi. Bosimga botgan, chuqur ko'rinish yaratadi.",
      },
    ],
  },

  {
    id: "prop-opacity",
    slug: "prop-opacity",
    title: "opacity",
    description: "Element shaffofligi",
    sections: [{ id: "overview", title: "Tavsif" }],
    content: `<h2 id="overview">Tavsif</h2>
<p><code>opacity</code> — element va barcha farzandlarining shaffofligi. 0 (to'liq shaffof) dan 1 (to'liq opak) gacha.</p>
<ul>
  <li>Farzandlarga ham ta'sir qiladi (rgba dan farqi)</li>
  <li>GPU da qayta ishlaydi — animatsiya uchun samarali</li>
  <li>opacity: 0 — ko'rinmaydi, lekin joy egallaydi va kliklanadi</li>
  <li>visibility: hidden — ko'rinmaydi, joy egallaydi, kliklanmaydi</li>
  <li>display: none — to'liq olib tashlanadi</li>
</ul>`,
    codeExample: {
      title: "opacity",
      language: "css",
      code: `.transparent  { opacity: 0; }
.semi         { opacity: 0.5; }
.almost       { opacity: 0.9; }
.opaque       { opacity: 1; }

/* Hover effekt */
.card         { opacity: 0.85; transition: opacity 0.2s; }
.card:hover   { opacity: 1; }

/* disabled holat */
.btn:disabled { opacity: 0.45; cursor: not-allowed; }

/* Farzandlarga ta'sir */
.parent { opacity: 0.5; }
/* .parent ichidagi barcha elementlar 50% shaffof bo'ladi */`,
    },
    liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>opacity</title>
  <style>
    body { font-family: Arial; padding: 20px; }
    .row { display: flex; gap: 12px; margin: 12px 0; }
    .box { width: 80px; height: 80px; background: #e34c26; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 13px; }
    .o1  { opacity: 1; }
    .o75 { opacity: 0.75; }
    .o5  { opacity: 0.5; }
    .o25 { opacity: 0.25; }
    .o0  { opacity: 0; }
    .hover { transition: opacity 0.2s; opacity: 0.6; }
    .hover:hover { opacity: 1; }
  </style>
</head>
<body>
  <div class="row">
    <div class="box o1">1.0</div>
    <div class="box o75">0.75</div>
    <div class="box o5">0.5</div>
    <div class="box o25">0.25</div>
    <div class="box o0">0</div>
  </div>
  <p>Hover effekti (opacity: 0.6 → 1):</p>
  <div class="box hover" style="width:160px">Hover qiling</div>
</body>
</html>`,
    notes: [
      "opacity farzandlarga ham ta'sir qiladi — rgba faqat shu elementga",
      "GPU tomonidan boshqariladi — transition uchun samarali",
      "opacity: 0 — kliklanadi! pointer-events: none kerak bo'lishi mumkin",
    ],
    commonMistakes: [
      "opacity: 0 element kliklanishini kutmaslik",
      "rgba o'rniga opacity ishlatish — farzandlar ham shaffof bo'lib qoladi",
    ],
    practiceTask: "disabled tugma uchun opacity: 0.45, hover da karta uchun opacity effekti yarating.",
    quiz: [
      {
        question: "opacity: 0 va display: none farqi?",
        options: [
          "Hech qanday farqi yo'q",
          "opacity: 0 — ko'rinmaydi lekin joy egallaydi, display: none — to'liq olib tashlanadi",
          "display: none — ko'rinmaydi lekin joy egallaydi",
          "opacity: 0 faqat animatsiya uchun",
        ],
        correct: 1,
        explanation: "opacity: 0 — ko'rinmaydi, joy egallaydi, kliklanadi. display: none — layout dan to'liq chiqariladi.",
      },
    ],
  },

  {
    id: "prop-transform",
    slug: "prop-transform",
    title: "transform",
    description: "Element transformatsiyasi — siljitish, kattalashtirish, aylantirish",
    sections: [{ id: "overview", title: "Tavsif" }],
    content: `<h2 id="overview">Tavsif</h2>
<p><code>transform</code> — elementni siljitish, kattalashtirish, aylantirish va qiyalashtirish. Layout ga ta'sir qilmaydi (joy saqlanadi). GPU tomonidan qayta ishlanadi.</p>
<ul>
  <li><code>translate(x, y)</code> — siljitish. translateX(), translateY(), translateZ()</li>
  <li><code>scale(x, y)</code> — o'lcham o'zgartirish. scaleX(), scaleY()</li>
  <li><code>rotate(deg)</code> — aylantirish. rotateX(), rotateY() (3D)</li>
  <li><code>skew(x, y)</code> — qiyalashtirish. skewX(), skewY()</li>
  <li><code>matrix(a,b,c,d,e,f)</code> — barcha transformlarning matematik matritsasi</li>
  <li><code>perspective()</code> — 3D perspektiva</li>
  <li><code>transform-origin</code> — transformatsiya markazi (default: center)</li>
  <li><code>transform-style: preserve-3d</code> — 3D kontekst</li>
</ul>`,
    codeExample: {
      title: "transform funksiyalari",
      language: "css",
      code: `/* Siljitish */
.moved   { transform: translate(50px, 20px); }
.right   { transform: translateX(100px); }

/* O'lcham */
.big     { transform: scale(1.5); }
.small   { transform: scale(0.8); }

/* Aylantirish */
.rotated { transform: rotate(45deg); }
.flip    { transform: rotateY(180deg); }

/* Qiyalashtirish */
.skewed  { transform: skewX(15deg); }

/* Bir nechta birga */
.combo   { transform: translate(-50%, -50%) scale(1.1) rotate(5deg); }

/* Markazlashtirish */
.center  {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
}

/* Hover zoom */
.card:hover { transform: scale(1.03) translateY(-4px); }

/* transform-origin */
.corner { transform-origin: top left; transform: rotate(10deg); }`,
    },
    liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>transform</title>
  <style>
    * { box-sizing: border-box; }
    body { font-family: Arial; padding: 40px; }
    .box { width: 80px; height: 80px; background: #2965f1; color: white; display: flex; align-items: center; justify-content: center; border-radius: 8px; margin: 20px; font-size: 12px; font-weight: bold; display: inline-flex; transition: transform 0.3s ease; }
    .translate { transform: translate(20px, -10px); }
    .scale     { transform: scale(1.3); }
    .rotate    { transform: rotate(30deg); }
    .skew      { transform: skewX(15deg); }
    .combo     { transform: rotate(10deg) scale(0.9); }
    .hover:hover { transform: scale(1.2) rotate(5deg); background: #e34c26; }
  </style>
</head>
<body>
  <div class="box">normal</div>
  <div class="box translate">translate</div>
  <div class="box scale">scale</div>
  <div class="box rotate">rotate</div>
  <div class="box skew">skew</div>
  <div class="box combo">combo</div>
  <div class="box hover">hover!</div>
</body>
</html>`,
    notes: [
      "transform — layout ga ta'sir qilmaydi (relative position dan farqi)",
      "GPU tomonidan ishlaydi — transition/animation uchun samarali",
      "Bir nechta transform birga: transform: rotate() scale() — tartib muhim!",
    ],
    commonMistakes: [
      "Transform tartibining muhimligini bilmaslik (rotate keyin translate — boshqacha natija)",
      "transform: none; o'rniga transform: initial; ishlatish",
    ],
    practiceTask: "Hover da kartani scale(1.05) va translateY(-4px) bilan ko'taring.",
    quiz: [
      {
        question: "transform layout ga ta'sir qiladimi?",
        options: [
          "Ha, boshqa elementlarni siljitadi",
          "Yo'q, joy saqlanadi, boshqa elementlarga ta'sir qilmaydi",
          "Faqat margin/padding ga ta'sir qiladi",
          "Faqat 3D transformlarda ta'sir qilmaydi",
        ],
        correct: 1,
        explanation: "transform — elementni vizual siljitadi/kattalashtiradi, lekin layout o'zgarmaydi. Boshqa elementlar o'z joyida turadi.",
      },
    ],
  },

  {
    id: "prop-transition",
    slug: "prop-transition",
    title: "transition",
    description: "CSS xususiyat o'zgarishlarini silliqlashtirish",
    sections: [{ id: "overview", title: "Tavsif" }],
    content: `<h2 id="overview">Tavsif</h2>
<p><code>transition</code> — CSS xususiyat o'zgarishini silliqlashtiradi. Shorthand: property duration timing-function delay.</p>
<ul>
  <li><code>transition-property</code> — qaysi xususiyat: <code>all</code>, <code>color</code>, <code>transform</code></li>
  <li><code>transition-duration</code> — vaqt: <code>0.3s</code>, <code>300ms</code></li>
  <li><code>transition-timing-function</code> — egri: <code>ease</code>, <code>linear</code>, <code>ease-in</code>, <code>ease-out</code>, <code>ease-in-out</code>, <code>cubic-bezier()</code></li>
  <li><code>transition-delay</code> — kechikish: <code>0.1s</code></li>
  <li>Bir nechta: <code>transition: color 0.2s, transform 0.3s</code></li>
</ul>`,
    codeExample: {
      title: "transition",
      language: "css",
      code: `/* Oddiy */
.btn {
  background: #2965f1;
  transition: background 0.2s ease;
}
.btn:hover { background: #1a4fd8; }

/* Ko'p xususiyat */
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0,0,0,0.15);
}

/* all (ehtiyotkorlik bilan) */
.el { transition: all 0.2s ease; }

/* cubic-bezier */
.spring {
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* Delay bilan */
.menu-item {
  opacity: 0;
  transition: opacity 0.3s ease 0.1s; /* 100ms kechikish */
}`,
    },
    liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>transition</title>
  <style>
    * { box-sizing: border-box; }
    body { font-family: Arial; padding: 40px; background: #f5f5f5; }
    .btn { padding: 12px 24px; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; margin: 8px; font-size: 14px; }
    .b1 { background: #2965f1; color: white; transition: background 0.2s, transform 0.15s; }
    .b1:hover { background: #1a4fd8; transform: scale(1.05); }
    .b2 { background: #e34c26; color: white; transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1); }
    .b2:hover { transform: scale(1.15) rotate(3deg); }
    .card { background: white; padding: 20px; border-radius: 12px; width: 200px; margin: 16px; display: inline-block; transition: transform 0.3s ease, box-shadow 0.3s ease; }
    .card:hover { transform: translateY(-8px); box-shadow: 0 16px 40px rgba(0,0,0,0.15); }
  </style>
</head>
<body>
  <button class="btn b1">Oddiy transition</button>
  <button class="btn b2">Spring transition</button>
  <div class="card">
    <h3 style="margin:0 0 8px">Karta</h3>
    <p style="margin:0; color:#888; font-size:14px">Hover qiling</p>
  </div>
</body>
</html>`,
    notes: [
      "transition: all — har qanday o'zgarishni animatsiya qiladi, lekin ishlash tezligini pasaytirishi mumkin",
      "GPU xususiyatlari: transform, opacity — tez; width, height — sekin",
      "cubic-bezier.com — vizual egri yasash vositasi",
    ],
    commonMistakes: [
      "transition: all ishlatish — kerakli xususiyatlarni aniq ko'rsatish yaxshiroq",
      "display: none ga transition qo'yish (ishlamaydi)",
    ],
    practiceTask: "Tugma: hover da background + transform transition. Karta: hover da translateY + box-shadow.",
    quiz: [
      {
        question: "transition qaysi xususiyatlar uchun eng samarali (GPU)?",
        options: [
          "width va height",
          "margin va padding",
          "transform va opacity",
          "font-size va color",
        ],
        correct: 2,
        explanation: "transform va opacity — GPU tomonidan qayta ishlanadi, juda tez. width/height — layout reflow ni keltirib chiqaradi, sekin.",
      },
    ],
  },

  {
    id: "prop-animation",
    slug: "prop-animation",
    title: "animation va @keyframes",
    description: "CSS animatsiyalar",
    sections: [{ id: "overview", title: "Tavsif" }],
    content: `<h2 id="overview">Tavsif</h2>
<p><code>animation</code> — @keyframes bilan belgilangan animatsiyani elementga qo'llaydi. Transition dan farqli: triggerga ehtiyoj yo'q, murakkab animatsiyalar.</p>
<ul>
  <li><code>animation-name</code> — @keyframes nomi</li>
  <li><code>animation-duration</code> — vaqt</li>
  <li><code>animation-timing-function</code> — egri</li>
  <li><code>animation-delay</code> — kechikish</li>
  <li><code>animation-iteration-count</code> — takror soni: raqam yoki <code>infinite</code></li>
  <li><code>animation-direction</code> — <code>normal</code>, <code>reverse</code>, <code>alternate</code>, <code>alternate-reverse</code></li>
  <li><code>animation-fill-mode</code> — <code>none</code>, <code>forwards</code>, <code>backwards</code>, <code>both</code></li>
  <li><code>animation-play-state</code> — <code>running</code>, <code>paused</code></li>
</ul>`,
    codeExample: {
      title: "animation va @keyframes",
      language: "css",
      code: `/* @keyframes ta'rifi */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50%       { transform: scale(1.1); }
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Qo'llash — shorthand */
.fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}

/* Cheksiz */
.loading {
  animation: spin 1s linear infinite;
}

/* Ko'p animatsiya */
.el {
  animation:
    fadeIn 0.3s ease 0.1s both,
    pulse  2s  ease 1s infinite;
}

/* Hover da to'xtatish */
.el:hover { animation-play-state: paused; }`,
    },
    liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>animation</title>
  <style>
    * { box-sizing: border-box; }
    body { font-family: Arial; padding: 40px; }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.1); }
    }
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }
    .box { width: 80px; height: 80px; border-radius: 10px; display: inline-flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 12px; margin: 16px; }
    .fadein { background: #2965f1; animation: fadeIn 1s ease forwards; }
    .pulse  { background: #e34c26; animation: pulse 1.5s ease infinite; }
    .spin   { background: #059669; animation: spin 2s linear infinite; }
    .bounce { background: #b45309; animation: bounce 0.8s ease infinite; }
  </style>
</head>
<body>
  <div class="box fadein">fadeIn</div>
  <div class="box pulse">pulse</div>
  <div class="box spin">spin</div>
  <div class="box bounce">bounce</div>
</body>
</html>`,
    notes: [
      "animation-fill-mode: forwards — animatsiya oxirigacha holatda qoladi",
      "animation-play-state: paused — hover da to'xtatish",
      "will-change: transform — GPU optimizatsiya (ehtiyotkorlik bilan)",
    ],
    commonMistakes: [
      "@keyframes nomini animation-name bilan mos keltirmaslik",
      "animation-fill-mode: forwards ni unutish — element boshlang'ich holatga qaytadi",
    ],
    practiceTask: "Loader spinner va fade-in kirish animatsiyasi yarating.",
    quiz: [
      {
        question: "animation-fill-mode: forwards nima qiladi?",
        options: [
          "Animatsiyani oldinga o'ynaydi",
          "Animatsiya tugagach oxirgi kadr holatida qoladi",
          "Animatsiyani qayta boshlaydi",
          "Animatsiya boshlanganda darhol ko'rsatadi",
        ],
        correct: 1,
        explanation: "forwards — animatsiya tugagach element oxirgi @keyframes holatida qoladi. none bo'lsa boshlang'ich holatga qaytadi.",
      },
    ],
  },

  {
    id: "prop-filter",
    slug: "prop-filter",
    title: "filter",
    description: "Grafik effektlar — blur, brightness, contrast va boshqalar",
    sections: [{ id: "overview", title: "Tavsif" }],
    content: `<h2 id="overview">Tavsif</h2>
<p><code>filter</code> — elementga grafik effekt qo'shadi. Ko'p funksiyalar vergul bilan ketma-ket.</p>
<ul>
  <li><code>blur(px)</code> — xiralashish</li>
  <li><code>brightness(%)</code> — yorqinlik (100% = asl, 50% = qorong'i, 150% = yorug')</li>
  <li><code>contrast(%)</code> — kontrast</li>
  <li><code>grayscale(%)</code> — kulrang (0% = rangli, 100% = b/w)</li>
  <li><code>saturate(%)</code> — to'yinganlik</li>
  <li><code>hue-rotate(deg)</code> — rang aylanishi</li>
  <li><code>sepia(%)</code> — sepia effekti</li>
  <li><code>invert(%)</code> — rang inversiyasi</li>
  <li><code>opacity(%)</code> — shaffoflik (GPU)</li>
  <li><code>drop-shadow()</code> — shaffof fon uchun soya (box-shadow dan farqli)</li>
</ul>`,
    codeExample: {
      title: "filter funksiyalari",
      language: "css",
      code: `/* Blur */
.blur    { filter: blur(4px); }

/* Yorqinlik */
.dark    { filter: brightness(0.7); }
.bright  { filter: brightness(1.3); }

/* Kulrang */
.gray    { filter: grayscale(100%); }
.gray-h  { filter: grayscale(100%); transition: filter 0.3s; }
.gray-h:hover { filter: grayscale(0%); }

/* Kombinatsiya */
.stylish { filter: contrast(1.1) saturate(1.2) brightness(1.05); }

/* Hover da qorong'ilashtirish */
.card img:hover { filter: brightness(0.8); }

/* SVG drop-shadow */
.icon { filter: drop-shadow(2px 4px 8px rgba(0,0,0,0.3)); }`,
    },
    liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>filter</title>
  <style>
    * { box-sizing: border-box; }
    body { font-family: Arial; padding: 20px; background: #f5f5f5; }
    .row { display: flex; flex-wrap: wrap; gap: 12px; margin: 12px 0; }
    .box { width: 100px; height: 100px; background: linear-gradient(135deg, #e34c26, #2965f1); border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white; font-size: 11px; font-weight: bold; text-align: center; padding: 4px; }
    .blur     { filter: blur(3px); }
    .bright   { filter: brightness(1.4); }
    .dark     { filter: brightness(0.6); }
    .gray     { filter: grayscale(100%); }
    .contrast { filter: contrast(2); }
    .sepia    { filter: sepia(80%); }
    .invert   { filter: invert(100%); }
    .hue      { filter: hue-rotate(90deg); }
    .combo    { filter: contrast(1.1) saturate(1.3); }
  </style>
</head>
<body>
  <div class="row">
    <div class="box">normal</div>
    <div class="box blur">blur(3px)</div>
    <div class="box bright">brightness(1.4)</div>
    <div class="box dark">brightness(0.6)</div>
    <div class="box gray">grayscale</div>
    <div class="box contrast">contrast(2)</div>
    <div class="box sepia">sepia(80%)</div>
    <div class="box invert">invert</div>
    <div class="box hue">hue-rotate(90deg)</div>
    <div class="box combo">kontrast + saturat</div>
  </div>
</body>
</html>`,
    notes: [
      "filter GPU tomonidan ishlaydi — animatsiya uchun samarali",
      "drop-shadow() — rasm tinchligi (PNG) ga mos soya, box-shadow esa qutiga",
      "backdrop-filter — elementning orqasidagi kontentga ta'sir qiladi",
    ],
    commonMistakes: [
      "box-shadow va filter: drop-shadow ni aralashtirib yuborish",
      "Juda ko'p filter — sahifa sekinlashadi",
    ],
    practiceTask: "Rasmlarga kulrang → hover da rangli effekti qo'shing.",
    quiz: [
      {
        question: "filter: drop-shadow va box-shadow farqi?",
        options: [
          "Hech qanday farqi yo'q",
          "drop-shadow — element shaklini kuzatadi (PNG uchun), box-shadow — qutiga",
          "box-shadow — element shaklini kuzatadi",
          "drop-shadow faqat matn uchun",
        ],
        correct: 1,
        explanation: "filter: drop-shadow — PNG rasm yoki SVG ning haqiqiy shaklini kuzatib soya qo'shadi. box-shadow — har doim to'rtburchak qutiga.",
      },
    ],
  },

  {
    id: "prop-clip-path",
    slug: "prop-clip-path",
    title: "clip-path",
    description: "Elementni istalgan shaklda kesish",
    sections: [{ id: "overview", title: "Tavsif" }],
    content: `<h2 id="overview">Tavsif</h2>
<p><code>clip-path</code> — elementning ko'rinadigan qismini aniq shakl bilan cheklaydi. Tashqari qolgan qism kesiladi.</p>
<ul>
  <li><code>circle(r at x y)</code> — doira</li>
  <li><code>ellipse(rx ry at x y)</code> — ellips</li>
  <li><code>inset(top right bottom left round radius)</code> — to'rtburchak</li>
  <li><code>polygon(x1 y1, x2 y2, ...)</code> — ko'pburchak</li>
  <li><code>path('SVG path')</code> — SVG yo'li</li>
  <li>clip-path animatsiya qilinishi mumkin!</li>
</ul>`,
    codeExample: {
      title: "clip-path",
      language: "css",
      code: `/* Doira */
.avatar { clip-path: circle(50% at 50% 50%); }

/* Uchburchak */
.triangle {
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

/* Diagonal kesim */
.hero {
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
}

/* Yulduz */
.star {
  clip-path: polygon(
    50% 0%, 61% 35%, 98% 35%,
    68% 57%, 79% 91%, 50% 70%,
    21% 91%, 32% 57%, 2% 35%,
    39% 35%
  );
}

/* Animatsiya */
.reveal {
  clip-path: inset(0 100% 0 0);
  transition: clip-path 0.5s ease;
}
.reveal.show { clip-path: inset(0 0% 0 0); }`,
    },
    liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>clip-path</title>
  <style>
    * { box-sizing: border-box; }
    body { font-family: Arial; padding: 40px; }
    .row { display: flex; flex-wrap: wrap; gap: 20px; }
    .box { width: 120px; height: 120px; background: linear-gradient(135deg, #e34c26, #2965f1); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 12px; }
    .circle   { clip-path: circle(50%); }
    .triangle { clip-path: polygon(50% 0%, 0% 100%, 100% 100%); }
    .hex      { clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%); }
    .arrow    { clip-path: polygon(0 20%, 70% 20%, 70% 0%, 100% 50%, 70% 100%, 70% 80%, 0 80%); }
  </style>
</head>
<body>
  <div class="row">
    <div class="box circle">circle</div>
    <div class="box triangle">triangle</div>
    <div class="box hex">hexagon</div>
    <div class="box arrow">arrow</div>
  </div>
</body>
</html>`,
    notes: [
      "clippy.io — vizual clip-path generator",
      "Clip-path animatsiya uchun foizli qiymatlar tavsiya",
      "overflow: hidden dan farqli — haqiqiy shakl bilan kesadi",
    ],
    commonMistakes: [
      "Piksel bilan clip-path — responsive bo'lmaydi, foiz yaxshiroq",
    ],
    practiceTask: "Avatar rasm uchun circle, hero section uchun diagonal polygon qo'llang.",
    quiz: [
      {
        question: "clip-path nima qiladi?",
        options: [
          "Elementni to'liq yashiradi",
          "Elementning ko'rinadigan qismini belgilangan shakl bilan cheklaydi",
          "Elementga chegara qo'shadi",
          "Elementni qisqartiradi",
        ],
        correct: 1,
        explanation: "clip-path — belgilangan shakl ichida qolgan qism ko'rinadi, tashqarisi kesiladi.",
      },
    ],
  },
];
