import type { Course } from "@/lib/types";

// ─── PART 1: Kirish, Selektorlar, Kaskad ───────────────────────────────────

export const cssPart1Groups = [
  {
    title: "Kirish",
    lessons: [
      {
        id: "css-intro",
        slug: "kirish",
        title: "CSS nima?",
        description: "CSS asoslari, brauzerda qanday ishlashi va sintaksisi",
        sections: [
          { id: "nima", title: "CSS nima?" },
          { id: "sintaksis", title: "CSS sintaksisi" },
          { id: "ulash", title: "CSS ni HTML ga ulash" },
        ],
        content: `
<h1>CSS nima?</h1>
<p><strong>CSS</strong> — Cascading Style Sheets (Kaskadli uslublar jadvali). U HTML elementlariga ko'rinish beradi: rang, o'lcham, joylashuv, shrift va animatsiya.</p>

<h2 id="nima">CSS nima va nima uchun kerak?</h2>
<p>HTML sahifaning tuzilishini hosil qilsa, CSS unga estetik ko'rinish beradi. CSS bo'lmasidan barcha sahifalar oddiy matn ko'rinishida bo'lardi.</p>
<ul>
  <li><strong>HTML</strong> — skelet (tuzilish)</li>
  <li><strong>CSS</strong> — teri va kiyim (ko'rinish)</li>
  <li><strong>JavaScript</strong> — mushaklar (harakat)</li>
</ul>

<h2 id="sintaksis">CSS sintaksisi</h2>
<p>CSS qoidasi uchta qismdan iborat:</p>
<ul>
  <li><strong>Selektor</strong> — qaysi elementga uslub berilishi</li>
  <li><strong>Xususiyat (property)</strong> — nima o'zgartirilishi</li>
  <li><strong>Qiymat (value)</strong> — qanday o'zgartirilishi</li>
</ul>
<p>Masalan: <code>p { color: red; }</code> — barcha <code>&lt;p&gt;</code> elementlari matnini qizil qiladi.</p>

<h2 id="ulash">CSS ni HTML ga ulash — 3 usul</h2>
<ul>
  <li><strong>External (tashqi fayl):</strong> <code>&lt;link rel="stylesheet" href="style.css"&gt;</code> — eng yaxshi usul</li>
  <li><strong>Internal (ichki):</strong> <code>&lt;style&gt;</code> tegi ichida — kichik loyihalar uchun</li>
  <li><strong>Inline (qatorida):</strong> <code>style=""</code> atributi — faqat istisno holatlarda</li>
</ul>
        `,
        codeExample: {
          title: "CSS asosiy sintaksis",
          language: "css",
          code: `/* Bu CSS komment */
/* selektor { xususiyat: qiymat; } */

h1 {
  color: #2250e8;
  font-size: 2rem;
  font-weight: 800;
}

p {
  color: #44444f;
  line-height: 1.7;
  margin-bottom: 1rem;
}

.card {
  background: #ffffff;
  border: 1px solid #e2e2e8;
  border-radius: 8px;
  padding: 24px;
}`,
        },
        liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>CSS kirish</title>
  <style>
    body {
      font-family: sans-serif;
      padding: 24px;
      background: #f6f6f7;
    }
    h1 {
      color: #2250e8;
      font-size: 2rem;
    }
    p {
      color: #44444f;
      line-height: 1.7;
    }
    .card {
      background: white;
      border: 1px solid #e2e2e8;
      border-radius: 8px;
      padding: 20px;
      margin-top: 16px;
    }
  </style>
</head>
<body>
  <h1>Salom, CSS!</h1>
  <p>CSS yordamida sahifaga ko'rinish beramiz.</p>
  <div class="card">
    Bu karta uslubi CSS bilan berilgan.
  </div>
</body>
</html>`,
        notes: [
          "External CSS fayl kesh saqlanadi — sahifa tezroq yuklanadi.",
          "Inline style faqat zarur hollarda ishlatilsin — uni override qilish qiyin.",
          "CSS xususiyatlar <code>;</code> bilan tugatiladi, blok esa <code>{ }</code> ichida bo'ladi.",
        ],
        commonMistakes: [
          "Xususiyat oxirida <code>;</code> qo'yishni unutish",
          "Inline style va external CSS ni aralashtirib yuborish",
          "CSS faylni <code>&lt;body&gt;</code> ichida emas, <code>&lt;head&gt;</code> ichida ulash kerak",
        ],
        practiceTask:
          "HTML faylga external CSS fayl ulang. Sarlavhaga ko'k rang, paragrafga kulrang rang bering. Body ga <code>font-family: sans-serif</code> qo'shing.",
        quiz: [
          {
            question: "CSS da xususiyat va qiymat nima bilan ajratiladi?",
            options: ["Vergul <code>,</code>", "Ikki nuqta <code>:</code>", "Nuqta-vergul <code>;</code>", "Teng <code>=</code>"],
            correct: 1,
            explanation: "CSS da <code>xususiyat: qiymat;</code> ko'rinishida yoziladi. Ikki nuqta <code>:</code> xususiyat va qiymatni ajratadi.",
          },
          {
            question: "Eng yaxshi CSS ulash usuli qaysi?",
            options: ["Inline style", "Internal &lt;style&gt; tegi", "External CSS fayl", "Farqi yo'q"],
            correct: 2,
            explanation: "External CSS fayl kesh saqlanadi, qayta ishlatiladi va kodni toza saqlaydi — eng yaxshi amaliyot.",
          },
        ],
      },
      {
        id: "css-selectors",
        slug: "selektorlar",
        title: "CSS Selektorlar",
        description: "Element, class, id, atribut va kombinatsiya selektorlari",
        sections: [
          { id: "asosiy", title: "Asosiy selektorlar" },
          { id: "kombinatsiya", title: "Kombinatsiya selektorlari" },
          { id: "psevdo", title: "Psevdo-klass selektorlar" },
        ],
        content: `
<h1>CSS Selektorlar</h1>
<p>Selektor — CSS qaysi HTML elementga uslub berishini aniqlovchi qism. Selektorlarni to'g'ri bilish CSS ning asosi.</p>

<h2 id="asosiy">Asosiy selektorlar</h2>
<ul>
  <li><strong>Element selektor:</strong> <code>p { }</code> — barcha <code>&lt;p&gt;</code> teglar</li>
  <li><strong>Class selektor:</strong> <code>.card { }</code> — <code>class="card"</code> elementlar</li>
  <li><strong>ID selektor:</strong> <code>#header { }</code> — <code>id="header"</code> element</li>
  <li><strong>Universal selektor:</strong> <code>* { }</code> — barcha elementlar</li>
  <li><strong>Atribut selektor:</strong> <code>[type="text"] { }</code> — atributga qarab</li>
</ul>

<h2 id="kombinatsiya">Kombinatsiya selektorlari</h2>
<ul>
  <li><strong>Guruhlash:</strong> <code>h1, h2, h3 { }</code> — bir vaqtda bir necha element</li>
  <li><strong>Avlod:</strong> <code>nav a { }</code> — nav ichidagi barcha a</li>
  <li><strong>To'g'ridan-to'g'ri farzand:</strong> <code>ul > li { }</code> — faqat bevosita li</li>
  <li><strong>Qo'shni aka-uka:</strong> <code>h1 + p { }</code> — h1 dan keyingi birinchi p</li>
  <li><strong>Barcha aka-ukalar:</strong> <code>h1 ~ p { }</code> — h1 dan keyingi barcha p</li>
</ul>

<h2 id="psevdo">Psevdo-klass selektorlar</h2>
<ul>
  <li><code>:hover</code> — sichqoncha ustida</li>
  <li><code>:focus</code> — fokus olganda (input)</li>
  <li><code>:first-child</code> — birinchi farzand element</li>
  <li><code>:last-child</code> — oxirgi farzand element</li>
  <li><code>:nth-child(2)</code> — ikkinchi farzand</li>
  <li><code>:not(.active)</code> — .active bo'lmagan elementlar</li>
</ul>
        `,
        codeExample: {
          title: "Selektor turlari",
          language: "css",
          code: `/* Element selektor */
p {
  color: #44444f;
}

/* Class selektor */
.btn {
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
}

/* ID selektor — sahifada faqat 1 ta bo'lishi kerak */
#logo {
  font-size: 1.5rem;
  font-weight: 800;
}

/* Atribut selektor */
input[type="email"] {
  border: 1px solid #ccc;
}

/* Avlod selektor */
nav a {
  text-decoration: none;
  color: #2250e8;
}

/* To'g'ridan-to'g'ri farzand */
ul > li {
  list-style: disc;
}

/* Psevdo-klasslar */
.btn:hover {
  opacity: 0.85;
}

a:focus {
  outline: 2px solid #2250e8;
}

li:first-child {
  font-weight: 700;
}

li:nth-child(odd) {
  background: #f6f6f7;
}`,
        },
        liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: sans-serif; padding: 24px; }

    /* Element selektor */
    h2 { color: #2250e8; }

    /* Class selektor */
    .card {
      border: 1px solid #e2e2e8;
      border-radius: 8px;
      padding: 16px;
      margin: 8px 0;
    }

    /* Psevdo-klass */
    .card:hover {
      background: #f0f0f3;
    }

    /* Avlod selektor */
    .card p {
      color: #44444f;
      margin: 0;
    }

    /* nth-child */
    ul li:nth-child(odd) {
      background: #f6f6f7;
      padding: 4px 8px;
    }
  </style>
</head>
<body>
  <h2>Selektorlar namunasi</h2>
  <div class="card"><p>Birinchi karta</p></div>
  <div class="card"><p>Ikkinchi karta (hover qiling)</p></div>

  <ul>
    <li>Element 1</li>
    <li>Element 2</li>
    <li>Element 3</li>
    <li>Element 4</li>
  </ul>
</body>
</html>`,
        notes: [
          "ID selektor sahifada faqat <strong>bitta</strong> elementda ishlatilishi kerak.",
          "Class selektor ko'p elementga qo'llanishi mumkin — bu moslashuvchanlik beradi.",
          "<code>*</code> (universal) selektor sekin ishlashi mumkin — ehtiyotkorlik bilan ishlating.",
        ],
        commonMistakes: [
          "Class selektor <code>.card</code> — nuqta bilan. ID selektor <code>#logo</code> — panjara belgisi bilan.",
          "Avlod selektor <code>nav a</code> va to'g'ri farzand <code>nav > a</code> farqini bilmaslik",
          "Bir sahifada bir xil ID ni bir necha marta ishlatish — bu xato.",
        ],
        practiceTask:
          "Ro'yxat (<code>&lt;ul&gt;</code>) yarating. Har toq (odd) qatorga kulrang fon, juft (even) qatorga oq fon bering. Birinchi elementni qalin (bold) qiling. Ustiga kelganda (hover) ko'k rang bering.",
        quiz: [
          {
            question: "Qaysi selektor faqat bevosita farzand elementlarni tanlaydi?",
            options: ["<code>nav a</code>", "<code>nav > a</code>", "<code>nav ~ a</code>", "<code>nav + a</code>"],
            correct: 1,
            explanation: "<code>nav > a</code> — to'g'ri farzand (direct child) selektori faqat nav ning birinchi darajali farzand a elementlarini tanlaydi.",
          },
          {
            question: "<code>li:nth-child(2n)</code> qaysi elementlarni tanlaydi?",
            options: ["Birinchi li", "Ikkinchi li", "Barcha juft li", "Barcha toq li"],
            correct: 2,
            explanation: "<code>:nth-child(2n)</code> — 2, 4, 6... ya'ni barcha juft tartibdagi elementlarni tanlaydi. <code>even</code> bilan ham yozish mumkin.",
          },
        ],
      },
    ],
  },
  {
    title: "Kaskad va Spetsifik",
    lessons: [
      {
        id: "css-cascade",
        slug: "kaskad",
        title: "Kaskad va Meros",
        description: "CSS qoidalari qanday ustuvorlik tartibida qo'llanadi",
        sections: [
          { id: "kaskad", title: "Kaskad nima?" },
          { id: "spetsifik", title: "Spetsifiklik (Specificity)" },
          { id: "meros", title: "Meros (Inheritance)" },
        ],
        content: `
<h1>Kaskad va Meros</h1>
<p>CSS ning "C" harfi Cascading (Kaskadli) degan ma'noni anglatadi. Bir elementga bir necha qoida mos kelganda, CSS qaysi qoidani qo'llashni aniq tartib bilan hal qiladi.</p>

<h2 id="kaskad">Kaskad nima?</h2>
<p>Kaskad — bir xil elementga bir necha CSS qoidasi mos kelganda, qaysi biri g'olib chiqishini aniqlash mexanizmi. Uch omil hisobga olinadi:</p>
<ul>
  <li><strong>1. Spetsifiklik (Specificity)</strong> — selektorn kuchi</li>
  <li><strong>2. Tartib (Order)</strong> — oxirgi yozilgan qoida g'olib</li>
  <li><strong>3. Muhimlik (!important)</strong> — eng kuchli, lekin kamdan-kam ishlatilsin</li>
</ul>

<h2 id="spetsifik">Spetsifiklik — hisoblash usuli</h2>
<p>Har bir selektor turi 3 xonali ball oladi: <strong>(ID, Class, Element)</strong></p>
<ul>
  <li><code>p</code> → (0, 0, 1) — eng kam</li>
  <li><code>.card</code> → (0, 1, 0)</li>
  <li><code>.card p</code> → (0, 1, 1)</li>
  <li><code>#header</code> → (1, 0, 0)</li>
  <li><code>#header .nav a</code> → (1, 1, 1)</li>
  <li><code>style=""</code> → (1, 0, 0, 0) — eng kuchli (inline)</li>
  <li><code>!important</code> → hammani yengadi</li>
</ul>

<h2 id="meros">Meros (Inheritance)</h2>
<p>Ba'zi CSS xususiyatlari ota elementdan farzandga meros bo'lib o'tadi:</p>
<ul>
  <li><strong>Meros bo'ladigan:</strong> <code>color</code>, <code>font-family</code>, <code>font-size</code>, <code>line-height</code>, <code>text-align</code></li>
  <li><strong>Meros bo'lmaydigan:</strong> <code>margin</code>, <code>padding</code>, <code>border</code>, <code>background</code>, <code>width</code>, <code>height</code></li>
</ul>
<p>Istalgan xususiyatni meros qildirishga majburlash: <code>inherit</code> qiymati.</p>
        `,
        codeExample: {
          title: "Spetsifiklik va kaskad",
          language: "css",
          code: `/* Spetsifiklik: (0, 0, 1) */
p {
  color: gray;
}

/* Spetsifiklik: (0, 1, 0) — class kuchliroq */
.highlight {
  color: orange;
}

/* Spetsifiklik: (0, 1, 1) — kuchliroq */
.container p {
  color: blue;
}

/* Spetsifiklik: (1, 0, 0) — ID eng kuchli */
#special {
  color: red;
}

/* !important — hamma narsani yengadi */
p.warning {
  color: crimson !important;
}

/* Meros: body da font-family bolalar uchun ham amal qiladi */
body {
  font-family: sans-serif;
  color: #0a0a0f;
}

/* Margin meros emas — alohida yozish kerak */
.child {
  margin: inherit; /* Majburan meros qildirish */
}`,
        },
        liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: sans-serif;
      padding: 24px;
      /* font-family bolalarga meros bo'ladi */
    }

    p { color: gray; }           /* (0,0,1) */
    .blue { color: blue; }       /* (0,1,0) */
    #red { color: red; }         /* (1,0,0) */

    /* Qaysi rang ko'rinadi? */
    .container p {
      color: purple;             /* (0,1,1) */
    }
  </style>
</head>
<body>
  <p>Bu gray (element selektor)</p>
  <p class="blue">Bu blue (class kuchliroq)</p>
  <p id="red" class="blue">Bu red (ID eng kuchli)</p>

  <div class="container">
    <p>Bu purple (.container p)</p>
    <p class="blue">Bu purple yoki blue? (.container p vs .blue)</p>
  </div>
</body>
</html>`,
        notes: [
          "<code>!important</code> dan faqat so'nggi chora sifatida foydalaning — kod boshqarishni qiyinlashtiradi.",
          "Spetsifiklik ballini doim sanamasangiz ham bo'ladi — faqat ID > Class > Element tartibini biling.",
          "Tartib (order) ham muhim: bir xil spetsifiklikda oxirgi yozilgan qoida g'olib chiqadi.",
        ],
        commonMistakes: [
          "<code>!important</code> ni haddan tashqari ko'p ishlatish — bu CSS ni chalkash qiladi.",
          "Element selektori bilan class selektorini tenglashtirib o'ylash — class har doim kuchliroq.",
          "Meros bo'lmaydigan xususiyat (masalan, <code>border</code>) ni meros bo'ladi deb hisoblash.",
        ],
        practiceTask:
          "Bir xil <code>&lt;p&gt;</code> elementga uchta har xil usulda rang bering (element, class, ID). Qaysi rang ko'rinishini taxmin qiling va brauzerda tekshiring.",
        quiz: [
          {
            question: "Qaysi selektor eng yuqori spetsifiklikka ega?",
            options: ["<code>p.text</code>", "<code>.nav .link</code>", "<code>#main</code>", "<code>body p span</code>"],
            correct: 2,
            explanation: "<code>#main</code> ID selektor — (1,0,0) ball. Bu element va class selektorlaridan har doim kuchliroq.",
          },
          {
            question: "Qaysi xususiyat meros bo'lib o'tadi?",
            options: ["<code>margin</code>", "<code>border</code>", "<code>font-family</code>", "<code>padding</code>"],
            correct: 2,
            explanation: "<code>font-family</code> meros bo'ladi — body da belgilasangiz, bolalar ham oladi. Margin, border, padding meros bo'lmaydi.",
          },
        ],
      },
      {
        id: "css-box-model",
        slug: "box-model",
        title: "Box Model",
        description: "Content, padding, border, margin — CSS ning asosiy modeli",
        sections: [
          { id: "box", title: "Box model nima?" },
          { id: "sizing", title: "box-sizing" },
          { id: "margin-padding", title: "Margin va Padding farqi" },
        ],
        content: `
<h1>Box Model</h1>
<p>CSS da har bir element to'rtburchak quticha (box) sifatida ko'riladi. Bu quticha to'rt qatlamdan iborat — bu <strong>Box Model</strong> deb ataladi.</p>

<h2 id="box">Box model 4 qatlami</h2>
<ul>
  <li><strong>Content</strong> — matn, rasm yoki boshqa kontent; <code>width</code> va <code>height</code> shu qatlamni o'lchamini belgilaydi</li>
  <li><strong>Padding</strong> — content va border orasidagi bo'shliq (ichki)</li>
  <li><strong>Border</strong> — chegara chiziq</li>
  <li><strong>Margin</strong> — border dan tashqaridagi bo'shliq (tashqi)</li>
</ul>
<p>Default holatda: <code>width = content kengligi</code>. Umumiy kenglik = content + padding + border.</p>

<h2 id="sizing">box-sizing: border-box</h2>
<p><code>box-sizing: border-box</code> — <code>width</code> padding va border ni ham hisobga oladi. Bu hozirgi zamonaviy standart:</p>
<ul>
  <li><code>content-box</code> (default): width faqat content. Haqiqiy kenglik = width + padding + border</li>
  <li><code>border-box</code>: width = content + padding + border. Hisoblash osonlashadi</li>
</ul>

<h2 id="margin-padding">Margin va Padding farqi</h2>
<ul>
  <li><strong>Padding</strong> — element ichida, fon rangi ko'rinadi, kliklanadi</li>
  <li><strong>Margin</strong> — element tashqarisida, shaffof, elementlar orasidagi masofa</li>
  <li><strong>Margin collapse:</strong> vertikal marginlar bir-biriga qo'shilmay, kattasi qoladi</li>
</ul>
        `,
        codeExample: {
          title: "Box model namunasi",
          language: "css",
          code: `/* Barcha elementlarga border-box qo'llash — standart amaliyot */
*,
*::before,
*::after {
  box-sizing: border-box;
}

.card {
  width: 300px;
  padding: 24px;          /* ichki bo'shliq: 4 tomon */
  border: 2px solid #e2e2e8;
  margin: 16px;           /* tashqi bo'shliq */
  background: white;
  border-radius: 8px;
}

/* Qisqacha yozish: top right bottom left (soat yo'nalishi) */
.element {
  padding: 8px 16px;       /* vertikal | gorizontal */
  margin: 16px 8px 24px 0; /* top | right | bottom | left */
}

/* Gorizontal markazlash */
.centered {
  width: 600px;
  margin: 0 auto; /* top-bottom 0, left-right avtomatik */
}

/* Margin collapse misoli */
.box-a { margin-bottom: 20px; }
.box-b { margin-top: 30px; }
/* Orasidagi masofa: 30px (kattasi qoladi, 50px emas!) */`,
        },
        liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <style>
    *, *::before, *::after {
      box-sizing: border-box;
    }

    body { font-family: sans-serif; padding: 24px; background: #f6f6f7; }

    .box {
      width: 280px;
      background: #2250e8;
      color: white;
      padding: 20px;
      border: 4px solid #1a3cb0;
      margin: 16px;
      border-radius: 8px;
    }

    .padding-demo {
      background: #e8f0fe;
      border: 2px dashed #2250e8;
      padding: 32px;
      margin: 16px 0;
    }

    .margin-demo {
      background: #f0fdf4;
      border: 2px solid #059669;
      padding: 12px;
      margin: 32px 0;
    }
  </style>
</head>
<body>
  <div class="box">
    Content (280px kenglik)<br>
    Padding: 20px<br>
    Border: 4px
  </div>

  <div class="padding-demo">
    Bu elementning padding'i katta (32px).
    Fon rangi padding ichida ko'rinadi.
  </div>

  <div class="margin-demo">Margin tashqarida bo'sh joy qoldiradi.</div>
  <div class="margin-demo">Ikkinchi element — margin collapse kuzating.</div>
</body>
</html>`,
        notes: [
          "Barcha loyihada <code>* { box-sizing: border-box; }</code> qo'ying — hayotni osonlashtiradi.",
          "<code>margin: 0 auto</code> — gorizontal markazlash uchun klassik usul (element fixed kengligi bo'lishi kerak).",
          "Margin collapse faqat vertikal (top/bottom) da sodir bo'ladi, gorizontal da yo'q.",
        ],
        commonMistakes: [
          "<code>box-sizing: border-box</code> qo'ymaslik — padding qo'shilganda element kutilganidan katta bo'lib ketadi.",
          "Padding va margin farkini bilmaslik — padding kliklanadi va fon rangi ko'rinadi.",
          "Margin collapse ni tushunmaslik — vertikal marginlar qo'shilmaydi, kattasi qoladi.",
        ],
        practiceTask:
          "Uch xil karta (<code>div.card</code>) yarating. Har biriga <code>width: 250px</code>, <code>padding: 20px</code>, <code>border: 2px solid</code>, <code>margin: 16px</code> bering. <code>box-sizing: border-box</code> qo'shing va <code>margin: 0 auto</code> bilan markazga oling.",
        quiz: [
          {
            question: "<code>box-sizing: border-box</code> da width neni o'z ichiga oladi?",
            options: ["Faqat content", "Content + padding", "Content + padding + border", "Content + padding + border + margin"],
            correct: 2,
            explanation: "<code>border-box</code> da belgilangan <code>width</code> content + padding + border ni o'z ichiga oladi. Margin esa hech qachon kenglikka kirmaydi.",
          },
          {
            question: "Margin collapse qachon sodir bo'ladi?",
            options: [
              "Har doim",
              "Gorizontal marginlarda",
              "Vertikal (top/bottom) marginlarda",
              "Padding bilan margin qo'shilganda",
            ],
            correct: 2,
            explanation: "Margin collapse faqat vertikal — top va bottom — marginlarda sodir bo'ladi. Ikki element orasidagi masofa kattasi bilan belgilanadi.",
          },
        ],
      },
    ],
  },
];
