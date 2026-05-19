import type { Lesson } from "@/lib/types";

export const cssLayoutProps: Lesson[] = [
  {
    id: "prop-display",
    slug: "prop-display",
    title: "display",
    description: "Element ko'rsatish turini belgilaydi",
    sections: [
      { id: "overview", title: "Tavsif" },
      { id: "qiymatlar", title: "Qiymatlar" },
      { id: "example", title: "Misol" },
    ],
    content: `<h2 id="overview">Tavsif</h2>
<p><code>display</code> — elementning layout xatti-harakatini belgilovchi eng muhim CSS xususiyati. Element blokmi, inlinemi, flex konteynermi yoki gridmi — barchasini shu xususiyat aniqlaydi.</p>

<h2 id="qiymatlar">Asosiy qiymatlar</h2>
<ul>
  <li><code>block</code> — yangi qatordan boshlanadi, to'liq kenglikni egallaydi (<code>&lt;div&gt;</code>, <code>&lt;p&gt;</code> default)</li>
  <li><code>inline</code> — matn oqimida, kenglik faqat kontent qadaricha (<code>&lt;span&gt;</code>, <code>&lt;a&gt;</code> default)</li>
  <li><code>inline-block</code> — inline kabi turadi, lekin width/height/margin/padding ishlaydi</li>
  <li><code>flex</code> — flexbox konteyner yaratadi</li>
  <li><code>inline-flex</code> — inline darajadagi flexbox konteyner</li>
  <li><code>grid</code> — grid konteyner yaratadi</li>
  <li><code>inline-grid</code> — inline darajadagi grid konteyner</li>
  <li><code>none</code> — elementni to'liq o'chiradi (joy ham egollamaydi)</li>
  <li><code>contents</code> — elementning o'zi yo'qoladi, farzandlari qoladi</li>
  <li><code>table</code>, <code>table-row</code>, <code>table-cell</code> — jadval xatti-harakati</li>
  <li><code>list-item</code> — ro'yxat elementi kabi (marker bilan)</li>
</ul>

<h2 id="example">Misol</h2>`,
    codeExample: {
      title: "display qiymatlari",
      language: "css",
      code: `.block-el    { display: block; }
.inline-el   { display: inline; }
.ib-el       { display: inline-block; width: 120px; }
.flex-ct     { display: flex; gap: 8px; }
.grid-ct     { display: grid; grid-template-columns: 1fr 1fr; }
.hidden      { display: none; }

/* inline-block vs inline */
span { display: inline-block; width: 100px; height: 40px; }`,
    },
    liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>display</title>
  <style>
    .demo { margin: 4px; padding: 8px 12px; background: #e34c26; color: white; border-radius: 4px; }
    .block  { display: block; }
    .inline { display: inline; }
    .ib     { display: inline-block; width: 120px; text-align: center; }
    .flex   { display: flex; gap: 8px; }
    .none   { display: none; }
  </style>
</head>
<body>
  <p><strong>block:</strong></p>
  <div class="demo block">Block 1</div>
  <div class="demo block">Block 2</div>

  <p><strong>inline:</strong></p>
  <span class="demo inline">Inline 1</span>
  <span class="demo inline">Inline 2</span>
  <span class="demo inline">Inline 3</span>

  <p><strong>inline-block:</strong></p>
  <div class="demo ib">IB 1</div>
  <div class="demo ib">IB 2</div>

  <p><strong>flex:</strong></p>
  <div class="flex">
    <div class="demo">Flex 1</div>
    <div class="demo">Flex 2</div>
    <div class="demo">Flex 3</div>
  </div>
</body>
</html>`,
    notes: [
      "display: none — element yo'qoladi va joy egollamaydi (visibility: hidden dan farqi)",
      "Flexbox va Grid — zamonaviy layout uchun asosiy vositalar",
      "inline elementlarda width/height ishlamaydi",
    ],
    commonMistakes: [
      "inline element ga width berish (ishlamaydi, inline-block kerak)",
      "display: none o'rniga visibility: hidden ishlatish (joy egollaydi)",
    ],
    practiceTask: "Bir xil div larni block, inline-block va flex bilan turlicha joylashtiring.",
    quiz: [
      {
        question: "display: none va visibility: hidden farqi?",
        options: [
          "Hech qanday farqi yo'q",
          "none — joy egollamaydi, hidden — joy egollaydi lekin ko'rinmaydi",
          "hidden — joy egollamaydi, none — egollaydi",
          "none faqat block elementlar uchun",
        ],
        correct: 1,
        explanation: "display: none — elementni layout dan to'liq olib tashlaydi. visibility: hidden — ko'rinmaydi lekin joy saqlanadi.",
      },
    ],
  },

  {
    id: "prop-position",
    slug: "prop-position",
    title: "position",
    description: "Element joylashuv turini belgilaydi",
    sections: [
      { id: "overview", title: "Tavsif" },
      { id: "qiymatlar", title: "Qiymatlar" },
    ],
    content: `<h2 id="overview">Tavsif</h2>
<p><code>position</code> — element qanday joylashishini belgilaydi. <code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code> va <code>z-index</code> xususiyatlari bilan birgalikda ishlaydi.</p>

<h2 id="qiymatlar">Qiymatlar</h2>
<ul>
  <li><code>static</code> — default. top/left/z-index ishlamaydi</li>
  <li><code>relative</code> — normal oqim o'rnidan siljiydi. Boshqa elementlarga ta'sir qilmaydi</li>
  <li><code>absolute</code> — eng yaqin positioned ota elementga nisbatan joylashadi. Normal oqimdan chiqadi</li>
  <li><code>fixed</code> — viewport ga mahkam. Scroll ga qaramay o'z joyida turadi</li>
  <li><code>sticky</code> — scroll qilinganda belgilangan nuqtada mahkamlanadi</li>
</ul>`,
    codeExample: {
      title: "position qiymatlari",
      language: "css",
      code: `/* Relative — normal o'rnidan siljiydi */
.relative { position: relative; top: 10px; left: 20px; }

/* Absolute — ota elementga nisbatan */
.parent   { position: relative; }
.absolute { position: absolute; top: 0; right: 0; }

/* Fixed — viewport da mahkam */
.navbar   { position: fixed; top: 0; left: 0; right: 0; z-index: 100; }

/* Sticky — scroll qilinganda mahkamlanadi */
.header   { position: sticky; top: 0; z-index: 10; }

/* Markazlashtirish pattern */
.centered {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
}`,
    },
    liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>position</title>
  <style>
    body { padding: 20px; font-family: Arial; }
    .box { width: 80px; height: 80px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; border-radius: 6px; }
    .container { position: relative; height: 160px; background: #f0f0f0; border-radius: 8px; margin: 12px 0; }
    .static   { background: #888; }
    .relative { background: #e34c26; position: relative; top: 20px; left: 20px; }
    .absolute { background: #2965f1; position: absolute; top: 10px; right: 10px; }
  </style>
</head>
<body>
  <p><strong>static (default):</strong></p>
  <div class="container">
    <div class="box static">static</div>
  </div>

  <p><strong>relative (20px pastga, 20px o'ngga):</strong></p>
  <div class="container">
    <div class="box relative">relative</div>
  </div>

  <p><strong>absolute (o'ng yuqori burchak):</strong></p>
  <div class="container">
    <div class="box static">static</div>
    <div class="box absolute">absolute</div>
  </div>
</body>
</html>`,
    notes: [
      "z-index faqat positioned (non-static) elementlarda ishlaydi",
      "absolute element — eng yaqin positioned ota elementga nisbatan",
      "sticky — overflow: hidden ota elementda ishlamaydi",
    ],
    commonMistakes: [
      "absolute uchun ota elementga position: relative bermaslik",
      "z-index ishlatib static elementda natija kutish",
    ],
    practiceTask: "Position: relative ota + absolute farzand bilan badge yarating.",
    quiz: [
      {
        question: "position: absolute element qaysi elementga nisbatan joylashadi?",
        options: [
          "Doim body ga",
          "Eng yaqin positioned (non-static) ota elementga",
          "Viewport ga",
          "Oldingi elementga",
        ],
        correct: 1,
        explanation: "absolute — eng yaqin position: relative/absolute/fixed/sticky ota elementga nisbatan. Ota yo'q bo'lsa — initial containing block (viewport) ga.",
      },
    ],
  },

  {
    id: "prop-top-right-bottom-left",
    slug: "prop-top-right-bottom-left",
    title: "top / right / bottom / left",
    description: "Positioned element koordinatalari",
    sections: [{ id: "overview", title: "Tavsif" }],
    content: `<h2 id="overview">Tavsif</h2>
<p><code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code> — <code>position: relative/absolute/fixed/sticky</code> elementlarning koordinatalarini belgilaydi.</p>
<ul>
  <li>Piksel, foiz, em, rem qiymatlar qabul qiladi</li>
  <li>Manfiy qiymatlar ham mumkin</li>
  <li><code>inset</code> shorthand: barcha 4 tomonni bir qatorda: <code>inset: 0</code> = top:0 right:0 bottom:0 left:0</li>
  <li>Foiz: ota elementning o'lchamiga nisbatan</li>
</ul>`,
    codeExample: {
      title: "top/right/bottom/left va inset",
      language: "css",
      code: `/* To'liq qoplovchi overlay */
.overlay {
  position: fixed;
  inset: 0;          /* top:0; right:0; bottom:0; left:0 */
  background: rgba(0,0,0,0.5);
}

/* O'ng yuqori badge */
.badge {
  position: absolute;
  top: -8px;
  right: -8px;
}

/* Markazlashtirish */
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}`,
    },
    liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>top/right/bottom/left</title>
  <style>
    .parent { position: relative; width: 200px; height: 150px; background: #f0f0f0; border-radius: 8px; margin: 20px; }
    .tl { position: absolute; top: 8px; left: 8px; background: #e34c26; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px; }
    .tr { position: absolute; top: 8px; right: 8px; background: #2965f1; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px; }
    .bl { position: absolute; bottom: 8px; left: 8px; background: #059669; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px; }
    .br { position: absolute; bottom: 8px; right: 8px; background: #b45309; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px; }
    .center { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); background: #333; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px; }
  </style>
</head>
<body>
  <div class="parent">
    <span class="tl">top-left</span>
    <span class="tr">top-right</span>
    <span class="center">center</span>
    <span class="bl">bottom-left</span>
    <span class="br">bottom-right</span>
  </div>
</body>
</html>`,
    notes: [
      "inset shorthand — top, right, bottom, left ni qisqacha yozish",
      "inset: 10px 20px = top/bottom: 10px, right/left: 20px",
      "Foizda: top: 50% — ota element balandligining 50%i",
    ],
    commonMistakes: [
      "Static elementda top/left ishlatish (ishlamaydi)",
      "inset ni eski brauzerlar qo'llab-quvvatlamasligini hisobga olmaslik",
    ],
    practiceTask: "Karta ustiga top-right burchakda badge qo'ying.",
    quiz: [
      {
        question: "inset: 0 nima degan?",
        options: [
          "Padding ni 0 qiladi",
          "top:0; right:0; bottom:0; left:0",
          "margin ni 0 qiladi",
          "border ni o'chiradi",
        ],
        correct: 1,
        explanation: "inset — top, right, bottom, left ning shorthand i. inset: 0 — barcha 4 tomonni 0 qiladi.",
      },
    ],
  },

  {
    id: "prop-z-index",
    slug: "prop-z-index",
    title: "z-index",
    description: "Elementlar ustunma-ustun tartibi",
    sections: [{ id: "overview", title: "Tavsif" }],
    content: `<h2 id="overview">Tavsif</h2>
<p><code>z-index</code> — positioned elementlarning z-o'qi bo'yicha tartibi (qaysi element ustida ko'rinadi). Kattaroq qiymat — ustida.</p>
<ul>
  <li>Faqat positioned (non-static) elementlarda ishlaydi</li>
  <li>Manfiy qiymatlar: element orqaga o'tadi</li>
  <li><strong>Stacking context</strong> — z-index yangi kontekst yaratishi mumkin (transform, opacity, filter va b. bilan)</li>
  <li>Farzand element ota stacking context dan chiqa olmaydi</li>
</ul>`,
    codeExample: {
      title: "z-index",
      language: "css",
      code: `/* Katta qiymat — ustida */
.modal-overlay { position: fixed; z-index: 1000; }
.modal-content { position: fixed; z-index: 1001; }
.navbar        { position: sticky; z-index: 100; }
.dropdown      { position: absolute; z-index: 50; }
.card          { position: relative; z-index: 1; }

/* Manfiy — orqaga */
.background-el { position: absolute; z-index: -1; }`,
    },
    liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>z-index</title>
  <style>
    .box { position: absolute; width: 100px; height: 100px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; border-radius: 8px; }
    .a { background: #e34c26; top: 20px; left: 20px; z-index: 1; }
    .b { background: #2965f1; top: 50px; left: 50px; z-index: 2; }
    .c { background: #059669; top: 80px; left: 80px; z-index: 3; }
    .wrap { position: relative; height: 200px; }
  </style>
</head>
<body>
  <div class="wrap">
    <div class="box a">z:1</div>
    <div class="box b">z:2</div>
    <div class="box c">z:3</div>
  </div>
  <p>z-index kattaroq element ustida ko'rinadi.</p>
</body>
</html>`,
    notes: [
      "z-index integer qiymat oladi (manfiy ham bo'lishi mumkin)",
      "Stacking context: transform/opacity/filter yangi kontekst yaratadi",
      "Ortiqcha katta z-index lardan saqlaning (999999 kabi) — skalyarlik qiyin",
    ],
    commonMistakes: [
      "Static elementga z-index berish (ishlamaydi)",
      "Stacking context tushunmaslik — farzand ota kontekstdan chiqa olmaydi",
    ],
    practiceTask: "3 ta ustma-ust element yarating va z-index bilan tartibini o'zgartiring.",
    quiz: [
      {
        question: "z-index qaysi elementlarda ishlaydi?",
        options: ["Barcha elementlarda", "Faqat block elementlarda", "Faqat positioned (non-static) elementlarda", "Faqat flex itemlarda"],
        correct: 2,
        explanation: "z-index faqat position: relative/absolute/fixed/sticky elementlarda ishlaydi. Static da ta'siri yo'q.",
      },
    ],
  },

  {
    id: "prop-width-height",
    slug: "prop-width-height",
    title: "width / height",
    description: "Element kengligi va balandligi",
    sections: [{ id: "overview", title: "Tavsif" }],
    content: `<h2 id="overview">Tavsif</h2>
<p><code>width</code> va <code>height</code> — element o'lchamlari. <code>min-width</code>, <code>max-width</code>, <code>min-height</code>, <code>max-height</code> chegaralarni belgilaydi.</p>
<ul>
  <li>px, %, em, rem, vw, vh, vmin, vmax, fr qiymatlar</li>
  <li><code>auto</code> — brauzer o'zi hisoblaydi (default)</li>
  <li><code>fit-content</code> — kontent o'lchamiga moslashadi</li>
  <li><code>min-content</code> — minimal kontent o'lchami</li>
  <li><code>max-content</code> — maksimal kontent o'lchami</li>
  <li><code>box-sizing</code> — width/height hisoblash usuli (content-box yoki border-box)</li>
</ul>`,
    codeExample: {
      title: "width va height",
      language: "css",
      code: `/* Asosiy */
.box { width: 300px; height: 200px; }

/* Responsive */
.container { width: 100%; max-width: 1200px; margin: 0 auto; }

/* Viewport */
.hero { width: 100vw; height: 100vh; }

/* Min/max */
.card { min-width: 200px; max-width: 400px; min-height: 150px; }

/* Fit content */
.tag { width: fit-content; padding: 4px 12px; }

/* Aspect ratio bilan */
.thumb { width: 100%; aspect-ratio: 16/9; }`,
    },
    liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>width va height</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { padding: 20px; font-family: Arial; }
    .wrap { background: #f0f0f0; padding: 16px; border-radius: 8px; margin: 12px 0; }
    .fixed { width: 200px; height: 80px; background: #e34c26; color: white; display: flex; align-items: center; justify-content: center; border-radius: 6px; }
    .percent { width: 60%; height: 50px; background: #2965f1; color: white; display: flex; align-items: center; justify-content: center; border-radius: 6px; }
    .fit { width: fit-content; padding: 8px 16px; background: #059669; color: white; border-radius: 6px; }
    .max { width: 100%; max-width: 300px; height: 50px; background: #b45309; color: white; display: flex; align-items: center; justify-content: center; border-radius: 6px; }
  </style>
</head>
<body>
  <div class="wrap">
    <div class="fixed">200px × 80px</div>
  </div>
  <div class="wrap">
    <div class="percent">60% kenglik</div>
  </div>
  <div class="wrap">
    <div class="fit">fit-content</div>
  </div>
  <div class="wrap">
    <div class="max">max-width: 300px</div>
  </div>
</body>
</html>`,
    notes: [
      "max-width: 100% — rasmlar uchun asosiy responsive qoida",
      "height: 100% ishlashi uchun ota elementda ham height belgilangan bo'lishi kerak",
      "vw/vh — viewport relative birliklar",
    ],
    commonMistakes: [
      "box-sizing: border-box unutish — padding/border umumiy o'lchamni oshiradi",
      "height: 100% ishlashini kutish, lekin ota elementda height yo'q",
    ],
    practiceTask: "max-width: 600px; width: 100% bilan responsive konteyner yarating.",
    quiz: [
      {
        question: "max-width nima uchun ishlatiladi?",
        options: [
          "Elementni kichraytirish",
          "Elementni kenglikdan kattaroq bo'lishini oldini olish",
          "Minimum kenglik belgilash",
          "Kenglikni o'chirish",
        ],
        correct: 1,
        explanation: "max-width — element belgilangan qiymatdan kattaroq bo'lolmaydi, lekin kichikroq bo'lishi mumkin. Responsive dizayn uchun muhim.",
      },
    ],
  },

  {
    id: "prop-margin",
    slug: "prop-margin",
    title: "margin",
    description: "Tashqi bo'shliq",
    sections: [{ id: "overview", title: "Tavsif" }],
    content: `<h2 id="overview">Tavsif</h2>
<p><code>margin</code> — element atrofidagi tashqi bo'shliq. Boshqa elementlardan uzoqlik. Box model ning eng tashqi qatlami.</p>
<ul>
  <li>Shorthand: <code>margin: top right bottom left</code> (soat yo'nalishida)</li>
  <li><code>margin: 10px 20px</code> = top/bottom: 10px, right/left: 20px</li>
  <li><code>margin: auto</code> — gorizontal markazlashtirish (block elementda)</li>
  <li><strong>Margin collapse</strong> — vertikal margin lar kattasi olinadi, qo'shilmaydi</li>
  <li>Manfiy margin — element orqaga siljiydi</li>
</ul>`,
    codeExample: {
      title: "margin",
      language: "css",
      code: `/* Shorthand */
.el { margin: 16px; }                  /* 4 tomon */
.el { margin: 10px 20px; }             /* v: 10px, h: 20px */
.el { margin: 5px 10px 15px 20px; }   /* top right bottom left */

/* Alohida */
.el { margin-top: 8px; margin-bottom: 8px; }

/* Markazlashtirish */
.container { width: 800px; margin: 0 auto; }

/* Manfiy margin */
.overlap { margin-top: -20px; }

/* Margin collapse misoli */
.a { margin-bottom: 20px; }
.b { margin-top: 30px; }
/* Oraliq: 30px (20+30 emas!) */`,
    },
    liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>margin</title>
  <style>
    * { box-sizing: border-box; }
    body { font-family: Arial; padding: 20px; }
    .box { background: #e34c26; color: white; padding: 12px; border-radius: 6px; text-align: center; }
    .m16  { margin: 16px; }
    .m-v  { margin-top: 30px; margin-bottom: 30px; }
    .auto { width: 200px; margin: 0 auto; }
    .show { background: #f0f0f0; }
  </style>
</head>
<body>
  <div class="show">
    <div class="box m16">margin: 16px</div>
  </div>
  <div class="show" style="margin-top:16px">
    <div class="box m-v">margin-top/bottom: 30px</div>
  </div>
  <div class="show" style="margin-top:16px">
    <div class="box auto">margin: 0 auto (markazda)</div>
  </div>
</body>
</html>`,
    notes: [
      "margin: 0 auto — gorizontal markazlashtirish (block + width kerak)",
      "Margin collapse faqat vertikal (top/bottom) da sodir bo'ladi",
      "Flex/grid konteyner ichida margin collapse yo'q",
    ],
    commonMistakes: [
      "inline elementda margin-top/bottom kutish (ishlamaydi)",
      "Margin collapse ni hisobga olmaslik",
    ],
    practiceTask: "margin: 0 auto bilan sahifa konteynerini markazlashtiring.",
    quiz: [
      {
        question: "margin: 0 auto nima qiladi?",
        options: [
          "Margin ni o'chiradi",
          "Block elementni gorizontal markazlashtiradi",
          "Elementni ekranga yopishtirib qo'yadi",
          "Margin ni avtomatik hisoblaydi",
        ],
        correct: 1,
        explanation: "margin: 0 auto — top/bottom: 0, right/left: auto. Auto — qolgan bo'sh joyni ikki tomonga teng bo'ladi = markazlashadi.",
      },
    ],
  },

  {
    id: "prop-padding",
    slug: "prop-padding",
    title: "padding",
    description: "Ichki bo'shliq",
    sections: [{ id: "overview", title: "Tavsif" }],
    content: `<h2 id="overview">Tavsif</h2>
<p><code>padding</code> — element kontenti va border orasidagi ichki bo'shliq. Background rang/rasm padding hududini ham qoplaydi.</p>
<ul>
  <li>Shorthand: <code>padding: top right bottom left</code></li>
  <li>Manfiy qiymat qabul qilmaydi (margin dan farqi)</li>
  <li>Foizda: ota elementning <strong>kengligi</strong> ga nisbatan (balandlik ham!)</li>
  <li>box-sizing: border-box — padding width/height ichiga kiritiladi</li>
</ul>`,
    codeExample: {
      title: "padding",
      language: "css",
      code: `/* Shorthand */
.btn  { padding: 12px 24px; }          /* v: 12px, h: 24px */
.card { padding: 24px; }               /* 4 tomon */
.el   { padding: 8px 16px 12px 16px; } /* top right bottom left */

/* Alohida */
.el {
  padding-top: 20px;
  padding-right: 16px;
  padding-bottom: 20px;
  padding-left: 16px;
}

/* Foizda — ota kengligiga nisbatan */
.aspect { padding-bottom: 56.25%; }   /* 16:9 aspect ratio */`,
    },
    liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>padding</title>
  <style>
    * { box-sizing: border-box; }
    body { font-family: Arial; padding: 20px; }
    .box { background: #2965f1; color: white; border-radius: 6px; display: inline-block; margin: 8px; }
    .p4   { padding: 4px; }
    .p8   { padding: 8px 16px; }
    .p16  { padding: 16px 32px; }
    .p24  { padding: 24px 48px; }
  </style>
</head>
<body>
  <div class="box p4">padding: 4px</div>
  <div class="box p8">padding: 8px 16px</div>
  <div class="box p16">padding: 16px 32px</div>
  <div class="box p24">padding: 24px 48px</div>
</body>
</html>`,
    notes: [
      "padding foizda — doim ota elementning KENGLIGIga nisbatan (balandlikka ham!)",
      "padding manfiy qiymat qabul qilmaydi",
      "background-color padding hududini ham qoplaydi",
    ],
    commonMistakes: [
      "box-sizing: content-box (default) da padding o'lchamni oshirishini kutmaslik",
      "Foizda padding top/bottom ni balandlikka nisbatan o'ylash",
    ],
    practiceTask: "Tugma uchun padding: 12px 24px, karta uchun padding: 20px bering.",
    quiz: [
      {
        question: "padding foizda nimaga nisbatan hisoblanadi?",
        options: [
          "Elementning o'z o'lchamiga",
          "Viewport o'lchamiga",
          "Ota elementning KENGLIGIga (top/bottom ham!)",
          "Font o'lchamiga",
        ],
        correct: 2,
        explanation: "CSS da padding foizi — barcha 4 tomon uchun ham ota elementning KENGLIGIga nisbatan hisoblanadi (balandlikka emas!).",
      },
    ],
  },

  {
    id: "prop-box-sizing",
    slug: "prop-box-sizing",
    title: "box-sizing",
    description: "O'lcham hisoblash usuli",
    sections: [{ id: "overview", title: "Tavsif" }],
    content: `<h2 id="overview">Tavsif</h2>
<p><code>box-sizing</code> — width va height qanday hisoblanishini belgilaydi.</p>
<ul>
  <li><code>content-box</code> — default. width/height faqat kontent. Padding va border qo'shiladi</li>
  <li><code>border-box</code> — width/height padding va border ni ham o'z ichiga oladi. Hisoblash osonlashadi</li>
</ul>
<p>Deyarli barcha loyihalarda <code>* { box-sizing: border-box }</code> global qoida qo'yiladi.</p>`,
    codeExample: {
      title: "box-sizing farqi",
      language: "css",
      code: `/* content-box (default) */
.a {
  box-sizing: content-box;
  width: 200px;
  padding: 20px;
  border: 5px solid;
  /* Umumiy kenglik: 200 + 40 + 10 = 250px */
}

/* border-box (tavsiya) */
.b {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 5px solid;
  /* Umumiy kenglik: 200px (padding/border ichida) */
}

/* Global reset (standart amaliyot) */
*, *::before, *::after {
  box-sizing: border-box;
}`,
    },
    liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>box-sizing</title>
  <style>
    body { font-family: Arial; padding: 20px; }
    .shared { width: 200px; padding: 20px; border: 5px solid; margin: 12px 0; color: white; font-weight: bold; }
    .content-box { box-sizing: content-box; background: #e34c26; }
    .border-box  { box-sizing: border-box;  background: #2965f1; }
  </style>
</head>
<body>
  <p>Ikkalasida ham width: 200px, padding: 20px, border: 5px</p>
  <div class="shared content-box">content-box → 250px keng</div>
  <div class="shared border-box">border-box → 200px keng</div>
</body>
</html>`,
    notes: [
      "border-box — intuitiv, hisoblash oson, tavsiya etiladi",
      "Bootstrap, Tailwind va ko'p framework lar border-box ishlatadi",
      "* { box-sizing: border-box } — global qilish eng oson",
    ],
    commonMistakes: [
      "box-sizing ni unutish va padding qo'shgach kenglik oshib ketishi",
    ],
    practiceTask: "content-box va border-box ni solishtirib ko'ring: ikkalasiga bir xil width, padding, border bering.",
    quiz: [
      {
        question: "border-box da width: 200px, padding: 20px bo'lsa kontent kenglik qancha?",
        options: ["200px", "240px", "160px", "220px"],
        correct: 2,
        explanation: "border-box: kontent = width - padding*2 = 200 - 40 = 160px. Umumiy kenglik 200px bo'lib qoladi.",
      },
    ],
  },

  {
    id: "prop-overflow",
    slug: "prop-overflow",
    title: "overflow",
    description: "Tashqariga chiqgan kontentni boshqarish",
    sections: [{ id: "overview", title: "Tavsif" }],
    content: `<h2 id="overview">Tavsif</h2>
<p><code>overflow</code> — element o'lchamidan tashqariga chiqqan kontentni qanday ko'rsatishni belgilaydi.</p>
<ul>
  <li><code>visible</code> — default. Kontent tashqariga chiqadi</li>
  <li><code>hidden</code> — tashqariga chiqqan qism kesiladi</li>
  <li><code>scroll</code> — doim scrollbar ko'rsatadi</li>
  <li><code>auto</code> — faqat kerak bo'lganda scrollbar</li>
  <li><code>clip</code> — hidden kabi, lekin scroll ham bo'lmaydi</li>
  <li><code>overflow-x</code> / <code>overflow-y</code> — alohida o'qlar uchun</li>
</ul>`,
    codeExample: {
      title: "overflow",
      language: "css",
      code: `/* Qisqartirish */
.box   { overflow: hidden; }

/* Scroll */
.list  { height: 200px; overflow-y: auto; }
.table { overflow-x: auto; }  /* Mobil jadval */

/* Matn qisqartirish */
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Gorizontal scroll */
.slider {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}`,
    },
    liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>overflow</title>
  <style>
    body { font-family: Arial; padding: 20px; }
    .demo { width: 200px; height: 100px; border: 2px solid #ddd; margin: 12px 0; padding: 8px; border-radius: 6px; }
    .visible { overflow: visible; background: #fff3f0; }
    .hidden  { overflow: hidden;  background: #f0f3ff; }
    .scroll  { overflow: scroll;  background: #f0fff4; }
    .auto    { overflow: auto;    background: #fffff0; }
    .trunc   { width: 200px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; background: #f5f5f5; padding: 8px; border-radius: 6px; }
  </style>
</head>
<body>
  <p><strong>visible (default):</strong></p>
  <div class="demo visible">Bu juda uzun matn tashqariga chiqib ketadi va boshqa elementlarga ta'sir qilishi mumkin.</div>

  <p style="margin-top:40px"><strong>hidden:</strong></p>
  <div class="demo hidden">Bu juda uzun matn kesiladi va tashqariga chiqmaydi. Ko'rinmas qoladi.</div>

  <p><strong>auto:</strong></p>
  <div class="demo auto">Bu juda uzun matn. Kontent chegaradan oshsa scrollbar paydo bo'ladi. Urinib ko'ring!</div>

  <p><strong>text-overflow: ellipsis:</strong></p>
  <div class="trunc">Bu juda uzun matn qisqartiriladi va uch nuqta bilan tugaydi...</div>
</body>
</html>`,
    notes: [
      "overflow: hidden — absolute positioned farzandlarni ham kesadi",
      "overflow: auto — keraksiz scrollbar chiqarmaslik uchun scroll dan afzal",
      "text-overflow: ellipsis — white-space: nowrap va overflow: hidden bilan ishlaydi",
    ],
    commonMistakes: [
      "overflow: scroll — kontent o'tmasa ham scrollbar ko'rinadi (auto yaxshiroq)",
      "text-overflow: ellipsis ni overflow: hidden siz ishlatish",
    ],
    practiceTask: "Scroll bo'ladigan 200px balandlikdagi ro'yxat yarating.",
    quiz: [
      {
        question: "Matnni '...' bilan qisqartirish uchun qaysi xususiyat kerak?",
        options: [
          "overflow: hidden faqat",
          "text-overflow: ellipsis + white-space: nowrap + overflow: hidden",
          "text-overflow: ellipsis faqat",
          "clip-text: ellipsis",
        ],
        correct: 1,
        explanation: "Uchala xususiyat birgalikda: white-space: nowrap (satr uzmaslik), overflow: hidden (kesish), text-overflow: ellipsis (... ko'rsatish).",
      },
    ],
  },

  // FLEXBOX
  {
    id: "prop-flex-container",
    slug: "prop-flex-container",
    title: "Flex konteyner xususiyatlari",
    description: "flex-direction, flex-wrap, justify-content, align-items, align-content, gap",
    sections: [
      { id: "overview", title: "Tavsif" },
      { id: "xususiyatlar", title: "Xususiyatlar" },
    ],
    content: `<h2 id="overview">Tavsif</h2>
<p>Flexbox konteyneriga (<code>display: flex</code>) qo'llaniladigan xususiyatlar. Farzand elementlarni boshqaradi.</p>

<h2 id="xususiyatlar">Xususiyatlar</h2>
<ul>
  <li><code>flex-direction</code> — asosiy o'q: <code>row</code>, <code>row-reverse</code>, <code>column</code>, <code>column-reverse</code></li>
  <li><code>flex-wrap</code> — qatorga sig'masa: <code>nowrap</code> (default), <code>wrap</code>, <code>wrap-reverse</code></li>
  <li><code>flex-flow</code> — flex-direction + flex-wrap shorthand</li>
  <li><code>justify-content</code> — asosiy o'q: <code>flex-start</code>, <code>flex-end</code>, <code>center</code>, <code>space-between</code>, <code>space-around</code>, <code>space-evenly</code></li>
  <li><code>align-items</code> — ko'ndalang o'q (bitta qator): <code>stretch</code>, <code>flex-start</code>, <code>flex-end</code>, <code>center</code>, <code>baseline</code></li>
  <li><code>align-content</code> — ko'ndalang o'q (bir nechta qator)</li>
  <li><code>gap</code> — elementlar orasidagi oraliq (row-gap va column-gap)</li>
  <li><code>place-content</code> — align-content + justify-content shorthand</li>
</ul>`,
    codeExample: {
      title: "Flex konteyner",
      language: "css",
      code: `.container {
  display: flex;
  flex-direction: row;        /* Asosiy o'q */
  flex-wrap: wrap;            /* Sig'masa keyingi qatorga */
  justify-content: space-between; /* Asosiy o'q bo'ylab */
  align-items: center;        /* Ko'ndalang o'q bo'ylab */
  gap: 16px;                  /* Elementlar oralig'i */
}

/* Markazlashtirish */
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Navbar pattern */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
}`,
    },
    liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>Flex konteyner</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: Arial; padding: 20px; }
    .item { background: #e34c26; color: white; padding: 12px 16px; border-radius: 6px; font-weight: bold; }
    .flex { display: flex; background: #f0f0f0; padding: 12px; border-radius: 8px; margin: 12px 0; }
    .sb   { justify-content: space-between; }
    .c    { justify-content: center; align-items: center; height: 80px; }
    .col  { flex-direction: column; gap: 8px; }
    .g    { gap: 8px; }
  </style>
</head>
<body>
  <p><strong>justify-content: space-between:</strong></p>
  <div class="flex sb g">
    <div class="item">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
  </div>

  <p><strong>justify-content: center + align-items: center:</strong></p>
  <div class="flex c">
    <div class="item">Markazda</div>
  </div>

  <p><strong>flex-direction: column:</strong></p>
  <div class="flex col" style="width:120px">
    <div class="item">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
  </div>
</body>
</html>`,
    notes: [
      "justify-content — asosiy o'q (default: gorizontal)",
      "align-items — ko'ndalang o'q (default: vertikal)",
      "flex-direction: column — asosiy o'q vertikal bo'ladi, justify/align almashinadi",
    ],
    commonMistakes: [
      "flex-direction: column da justify-content/align-items rolini aralashtirib yuborish",
      "align-content ni align-items bilan aralashtirib yuborish (align-content — ko'p qator uchun)",
    ],
    practiceTask: "Flex bilan navbar: logo chapda, menu o'ngda, vertikal markazda.",
    quiz: [
      {
        question: "Flex konteynerda align-items nima qiladi?",
        options: [
          "Asosiy o'q bo'ylab joylashtiradi",
          "Ko'ndalang o'q bo'ylab joylashtiradi",
          "Elementlarni tartiblaydi",
          "Bo'sh joyni taqsimlaydi",
        ],
        correct: 1,
        explanation: "align-items — ko'ndalang o'q (cross axis) bo'ylab joylashtiradi. flex-direction: row da vertikal, column da gorizontal.",
      },
    ],
  },

  {
    id: "prop-flex-item",
    slug: "prop-flex-item",
    title: "Flex item xususiyatlari",
    description: "flex-grow, flex-shrink, flex-basis, flex, order, align-self",
    sections: [
      { id: "overview", title: "Tavsif" },
    ],
    content: `<h2 id="overview">Tavsif</h2>
<p>Flex item (farzand element) larga qo'llaniladigan xususiyatlar.</p>
<ul>
  <li><code>flex-grow</code> — bo'sh joy olish nisbati (0 = olmaydi, default)</li>
  <li><code>flex-shrink</code> — joy yetmasa kichrayish nisbati (1 = default)</li>
  <li><code>flex-basis</code> — boshlang'ich o'lcham (auto = content)</li>
  <li><code>flex</code> — shorthand: flex-grow flex-shrink flex-basis. <code>flex: 1</code> = 1 1 0%</li>
  <li><code>order</code> — vizual tartib (default 0, kichik — oldinda)</li>
  <li><code>align-self</code> — faqat shu item uchun align-items ni bekor qiladi</li>
</ul>`,
    codeExample: {
      title: "Flex item xususiyatlari",
      language: "css",
      code: `/* flex shorthand */
.item   { flex: 1; }       /* teng bo'lishadi */
.main   { flex: 2; }       /* 2x kattaroq bo'ladi */
.sidebar{ flex: 0 0 250px;}/* O'zgarmas 250px */

/* order */
.first  { order: -1; }     /* Eng oldinda */
.last   { order: 999; }    /* Eng oxirida */

/* align-self */
.special { align-self: flex-start; } /* Faqat shu item yuqorida */
.stretch { align-self: stretch; }

/* margin auto trick */
.push-right { margin-left: auto; } /* O'ng tomonga itaradi */`,
    },
    liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>Flex item</title>
  <style>
    * { box-sizing: border-box; }
    body { font-family: Arial; padding: 20px; }
    .flex { display: flex; gap: 8px; background: #f0f0f0; padding: 12px; border-radius: 8px; margin: 12px 0; align-items: flex-start; }
    .item { background: #2965f1; color: white; padding: 12px; border-radius: 6px; font-weight: bold; }
    .f1  { flex: 1; }
    .f2  { flex: 2; }
    .f3  { flex: 3; }
    .tall { height: 80px; }
    .as-center { align-self: center; }
    .as-end    { align-self: flex-end; }
  </style>
</head>
<body>
  <p><strong>flex: 1, 2, 3 nisbatlari:</strong></p>
  <div class="flex">
    <div class="item f1">flex:1</div>
    <div class="item f2">flex:2</div>
    <div class="item f3">flex:3</div>
  </div>

  <p><strong>align-self:</strong></p>
  <div class="flex" style="height:100px; align-items:stretch">
    <div class="item">stretch</div>
    <div class="item as-center">center</div>
    <div class="item as-end">end</div>
  </div>
</body>
</html>`,
    notes: [
      "flex: 1 = flex-grow:1, flex-shrink:1, flex-basis:0% — teng bo'lishish",
      "flex: 0 0 250px — o'zgarmas kenglik (sidebar uchun foydali)",
      "margin-left: auto — flex item ni o'ng tomonga itaradi",
    ],
    commonMistakes: [
      "flex-grow va flex ni aralashtirib yuborish",
      "order HTML tartibini o'zgartirmaydi — faqat vizual",
    ],
    practiceTask: "flex: 1 bilan 3 ta teng ustun, biriga flex: 2 bering.",
    quiz: [
      {
        question: "flex: 1 qisqartmasi nimani anglatadi?",
        options: [
          "flex-grow: 1 faqat",
          "flex-grow:1, flex-shrink:1, flex-basis:0%",
          "flex-grow:1, flex-shrink:0, flex-basis:auto",
          "width: 100%",
        ],
        correct: 1,
        explanation: "flex: 1 = flex-grow:1, flex-shrink:1, flex-basis:0%. Element mavjud bo'sh joyni teng bo'lishib oladi.",
      },
    ],
  },

  // GRID
  {
    id: "prop-grid-container",
    slug: "prop-grid-container",
    title: "Grid konteyner xususiyatlari",
    description: "grid-template-columns/rows, gap, grid-template-areas, place-items",
    sections: [{ id: "overview", title: "Tavsif" }],
    content: `<h2 id="overview">Tavsif</h2>
<p>CSS Grid konteyneriga (<code>display: grid</code>) qo'llaniladigan xususiyatlar.</p>
<ul>
  <li><code>grid-template-columns</code> — ustunlar: <code>200px 1fr 1fr</code>, <code>repeat(3, 1fr)</code></li>
  <li><code>grid-template-rows</code> — qatorlar</li>
  <li><code>grid-template-areas</code> — vizual grid xaritasi</li>
  <li><code>grid-template</code> — rows/columns/areas shorthand</li>
  <li><code>column-gap</code> / <code>row-gap</code> / <code>gap</code> — oraliqlar</li>
  <li><code>justify-items</code> — gorizontal joylashtirish (har bir katak)</li>
  <li><code>align-items</code> — vertikal joylashtirish (har bir katak)</li>
  <li><code>place-items</code> — align-items + justify-items shorthand</li>
  <li><code>justify-content</code> / <code>align-content</code> — butun grid joylashuvi</li>
  <li><code>grid-auto-flow</code> — avtomatik joylashtirish: <code>row</code>, <code>column</code>, <code>dense</code></li>
  <li><code>grid-auto-columns</code> / <code>grid-auto-rows</code> — noaniq katak o'lchamlari</li>
</ul>`,
    codeExample: {
      title: "Grid konteyner",
      language: "css",
      code: `/* 3 ustunli grid */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

/* Responsive grid */
.responsive {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
}

/* Named areas */
.layout {
  display: grid;
  grid-template-areas:
    "header  header"
    "sidebar main"
    "footer  footer";
  grid-template-columns: 240px 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

/* Markazlashtirish */
.center {
  display: grid;
  place-items: center;
}`,
    },
    liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>Grid konteyner</title>
  <style>
    * { box-sizing: border-box; }
    body { font-family: Arial; padding: 20px; }
    .item { background: #e34c26; color: white; padding: 20px; border-radius: 6px; font-weight: bold; text-align: center; }
    .grid3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin: 12px 0; }
    .auto-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 12px; margin: 12px 0; }
  </style>
</head>
<body>
  <p><strong>3 ustunli grid:</strong></p>
  <div class="grid3">
    <div class="item">1</div><div class="item">2</div><div class="item">3</div>
    <div class="item">4</div><div class="item">5</div><div class="item">6</div>
  </div>

  <p><strong>auto-fill + minmax (responsive):</strong></p>
  <div class="auto-grid">
    <div class="item">A</div><div class="item">B</div><div class="item">C</div>
    <div class="item">D</div><div class="item">E</div>
  </div>
</body>
</html>`,
    notes: [
      "repeat(auto-fill, minmax(200px, 1fr)) — media query siz responsive grid",
      "fr — mavjud bo'sh joyning bir ulushi",
      "grid-template-areas — vizual layout, kodni o'qish osonlashadi",
    ],
    commonMistakes: [
      "auto-fill va auto-fit ni aralashtirib yuborish",
      "gap ni grid-gap (eski sintaksis) bilan yozish",
    ],
    practiceTask: "grid-template-areas bilan header, sidebar, main, footer layout yarating.",
    quiz: [
      {
        question: "repeat(auto-fill, minmax(200px, 1fr)) nima qiladi?",
        options: [
          "Doim 3 ta ustun",
          "Viewport kengligiga qarab avtomatik ustun soni, har biri min 200px",
          "Faqat 200px li ustunlar",
          "Bitta ustun",
        ],
        correct: 1,
        explanation: "auto-fill + minmax: ekran kengligiga qarab ustun soni o'zgaradi. Har biri min 200px, max 1fr (bo'sh joyni to'ldiradi).",
      },
    ],
  },

  {
    id: "prop-grid-item",
    slug: "prop-grid-item",
    title: "Grid item xususiyatlari",
    description: "grid-column, grid-row, grid-area, justify-self, align-self",
    sections: [{ id: "overview", title: "Tavsif" }],
    content: `<h2 id="overview">Tavsif</h2>
<p>Grid item (farzand element) larga qo'llaniladigan xususiyatlar.</p>
<ul>
  <li><code>grid-column</code> — ustun bo'ylab joylashuv: <code>1 / 3</code> (1 dan 3-chizig'acha = 2 ustun)</li>
  <li><code>grid-row</code> — qator bo'ylab joylashuv</li>
  <li><code>grid-column: span 2</code> — 2 ustun egallash (qayerdan boshlanishidan qat'iy nazar)</li>
  <li><code>grid-area</code> — grid-template-areas dagi nom yoki shorthand: row-start/col-start/row-end/col-end</li>
  <li><code>justify-self</code> — katak ichida gorizontal joylashuv</li>
  <li><code>align-self</code> — katak ichida vertikal joylashuv</li>
  <li><code>place-self</code> — align-self + justify-self shorthand</li>
</ul>`,
    codeExample: {
      title: "Grid item",
      language: "css",
      code: `/* Aniq joylashuv */
.header  { grid-column: 1 / -1; }     /* To'liq kenglik */
.sidebar { grid-column: 1 / 2; grid-row: 2 / 4; }
.main    { grid-column: 2 / -1; }

/* span */
.wide    { grid-column: span 2; }     /* 2 ustun egallash */
.tall    { grid-row: span 3; }        /* 3 qator egallash */

/* Named area */
.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }

/* Katak ichida joylashuv */
.item    { justify-self: center; align-self: end; }`,
    },
    liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>Grid item</title>
  <style>
    * { box-sizing: border-box; }
    body { font-family: Arial; padding: 20px; }
    .grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
    .item { background: #2965f1; color: white; padding: 16px; border-radius: 6px; font-weight: bold; text-align: center; }
    .span2 { grid-column: span 2; background: #e34c26; }
    .span3 { grid-column: span 3; background: #059669; }
    .full  { grid-column: 1 / -1; background: #b45309; }
  </style>
</head>
<body>
  <div class="grid">
    <div class="item full">1/-1 (to'liq kenglik)</div>
    <div class="item">1</div>
    <div class="item span2">span 2</div>
    <div class="item">1</div>
    <div class="item span3">span 3</div>
    <div class="item">1</div>
  </div>
</body>
</html>`,
    notes: [
      "grid-column: 1 / -1 — birinchi chiziqdan oxirgisiga = to'liq kenglik",
      "span — qancha katak egallashini bildiradi, aniq pozitsiya emas",
      "grid-area — template-areas dan ismni oladi",
    ],
    commonMistakes: [
      "Grid line va Grid track larni aralashtirib yuborish (3 ta ustun = 4 ta chiziq)",
      "grid-area ni grid-template-areas siz ishlatish",
    ],
    practiceTask: "4 ustunli gridda birinchi element to'liq kenglikni egallashini ta'minlang.",
    quiz: [
      {
        question: "grid-column: 1 / -1 nima anglatadi?",
        options: [
          "1-ustundan oxirgi ustungacha — to'liq kenglik",
          "Faqat 1-ustun",
          "-1 xato qiymat",
          "1 ta ustun egallash",
        ],
        correct: 0,
        explanation: "-1 — oxirgi grid chiziq. grid-column: 1 / -1 = birinchi chiziqdan oxirgi chiziqqacha = to'liq kenglik.",
      },
    ],
  },
];
