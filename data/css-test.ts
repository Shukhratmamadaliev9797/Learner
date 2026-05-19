export interface TestQuestion {
  id: number;
  type: "nazariy" | "amaliy";
  category: string;
  question: string;
  code?: string;
  options: string[];
  correct: number;
  explanation: string;
}

export const cssTestQuestions: TestQuestion[] = [
  // ─── NAZARIY — Kirish (1-8) ─────────────────────────────────────────────
  {
    id: 1,
    type: "nazariy",
    category: "Kirish",
    question: "CSS qisqartmasi nimani anglatadi?",
    options: [
      "Cascading Style Sheets",
      "Creative Style System",
      "Colorful Style Sheets",
      "Computer Style Syntax",
    ],
    correct: 0,
    explanation: "CSS — Cascading Style Sheets. HTML elementlarini vizual jihatdan bezash uchun ishlatiladi.",
  },
  {
    id: 2,
    type: "nazariy",
    category: "Kirish",
    question: "CSS ni HTML ga ulashning qaysi usuli eng yaxshi amaliyot hisoblanadi?",
    options: [
      "Inline style atributi orqali",
      "&lt;style&gt; tegi ichida",
      "Tashqi .css fayl &lt;link&gt; tegi bilan",
      "JavaScript orqali",
    ],
    correct: 2,
    explanation: "Tashqi CSS fayli — kod ajratish, keshlanish va qayta foydalanish imkonini beradi. Eng yaxshi amaliyot hisoblanadi.",
  },
  {
    id: 3,
    type: "nazariy",
    category: "Kirish",
    question: "CSS qoidasining to'g'ri tuzilishi qaysi?",
    options: [
      "selector { property: value; }",
      "selector [ property = value ]",
      "selector ( property: value )",
      "selector | property: value |",
    ],
    correct: 0,
    explanation: "CSS qoidasi: selektor, so'ng jingalak qavslar ichida xususiyat va qiymat. Masalan: p { color: red; }",
  },
  {
    id: 4,
    type: "nazariy",
    category: "Kirish",
    question: "CSS da kaskad (cascade) nima degani?",
    options: [
      "Animatsiya effekti",
      "Bir nechta manbadan kelgan stillar tartibga solinishi va ustunligi belgilanishi",
      "Responsiv dizayn texnikasi",
      "CSS preprocessor",
    ],
    correct: 1,
    explanation: "Kaskad — bir nechta CSS qoidasi bitta elementga tegishli bo'lganda, qaysi biri ustunlik qilishini aniqlash mexanizmi.",
  },
  {
    id: 5,
    type: "nazariy",
    category: "Kirish",
    question: "Inline CSS ning spetsifikligi qanday?",
    options: [
      "0,0,0,1",
      "0,0,1,0",
      "0,1,0,0",
      "1,0,0,0",
    ],
    correct: 3,
    explanation: "Inline style — spetsifikligi 1,0,0,0. Bu ID (0,1,0,0), klass (0,0,1,0) va element (0,0,0,1) selektor laridan yuqori.",
  },
  {
    id: 6,
    type: "nazariy",
    category: "Kirish",
    question: "CSS komentariyasi qanday yoziladi?",
    options: [
      "// bu komment",
      "# bu komment",
      "/* bu komment */",
      "&lt;!-- bu komment --&gt;",
    ],
    correct: 2,
    explanation: "CSS kommentariyasi /* va */ orasiga yoziladi. HTML kommentariyasidan (&lt;!-- --&gt;) farqli.",
  },
  {
    id: 7,
    type: "nazariy",
    category: "Kirish",
    question: "!important deklaratsiyasi nima qiladi?",
    options: [
      "Stilni o'chiradi",
      "Xatolikni ko'rsatadi",
      "O'sha qoidani barcha boshqa qoidalardan ustun qo'yadi",
      "Fayl yuklashni tezlashtiradi",
    ],
    correct: 2,
    explanation: "!important — spetsifikligi qanday bo'lishidan qat'i nazar, o'sha deklaratsiyani ustunlik qildiradi. Faqat zarur hollarda ishlatish tavsiya etiladi.",
  },
  {
    id: 8,
    type: "nazariy",
    category: "Kirish",
    question: "CSS inherit qiymati nima qiladi?",
    options: [
      "Xususiyatni o'chiradi",
      "Default qiymatni qaytaradi",
      "Ota elementning qiymatini meros oladi",
      "Yangi qiymat yaratadi",
    ],
    correct: 2,
    explanation: "inherit — xususiyat qiymatini ota (parent) elementdan meros olishga majbur qiladi. Masalan: color: inherit;",
  },

  // ─── AMALIY — Selektorlar (9-18) ────────────────────────────────────────
  {
    id: 9,
    type: "amaliy",
    category: "Selektorlar",
    question: "Bu selektor qaysi elementlarni tanlaydi?",
    code: `p.warning { color: red; }`,
    options: [
      "Barcha &lt;p&gt; va barcha .warning elementlar",
      "Faqat warning klassiga ega &lt;p&gt; elementlar",
      ".warning ichidagi &lt;p&gt; elementlar",
      "&lt;p&gt; ichidagi .warning elementlar",
    ],
    correct: 1,
    explanation: "p.warning — bo'sh joyisiz yozilgan selektor: 'warning' klassiga ega bo'lgan &lt;p&gt; elementlarni tanlaydi.",
  },
  {
    id: 10,
    type: "amaliy",
    category: "Selektorlar",
    question: "Bu selektor qaysi elementlarni tanlaydi?",
    code: `div > p { margin: 0; }`,
    options: [
      "div ichidagi barcha &lt;p&gt; (istalgan chuqurlikda)",
      "Faqat div ning to'g'ridan-to'g'ri farzand &lt;p&gt; lari",
      "&lt;p&gt; dan keyin kelgan div lar",
      "div va &lt;p&gt; ni bir vaqtda tanlaydi",
    ],
    correct: 1,
    explanation: "> — to'g'ridan-to'g'ri farzand (direct child) selektor. Faqat bir daraja pastdagi &lt;p&gt; larni tanlaydi, chuqurroqdagilarni emas.",
  },
  {
    id: 11,
    type: "amaliy",
    category: "Selektorlar",
    question: "Bu CSS qaysi elementga ta'sir qiladi?",
    code: `input[type="email"] { border: 2px solid blue; }`,
    options: [
      "Barcha input lar",
      "Faqat type='email' atributiga ega input lar",
      "Barcha &lt;email&gt; teglari",
      "Faqat .email klassi bor elementlar",
    ],
    correct: 1,
    explanation: "Atribut selektor [type='email'] — aniq atribut qiymatiga ega elementlarni tanlaydi.",
  },
  {
    id: 12,
    type: "amaliy",
    category: "Selektorlar",
    question: "Bu selektor nimani tanlaydi?",
    code: `h2 + p { font-size: 18px; }`,
    options: [
      "&lt;h2&gt; ichidagi &lt;p&gt;",
      "&lt;h2&gt; dan oldin kelgan &lt;p&gt;",
      "&lt;h2&gt; dan keyingi barcha &lt;p&gt;",
      "&lt;h2&gt; dan to'g'ridan-to'g'ri keyin kelgan birinchi &lt;p&gt;",
    ],
    correct: 3,
    explanation: "+ — adjacent sibling (qo'shni aka-uka) selektor. Faqat darhol keyingi bitta aka-ukani tanlaydi.",
  },
  {
    id: 13,
    type: "amaliy",
    category: "Selektorlar",
    question: "Bu pseudo-klass nima qiladi?",
    code: `li:nth-child(odd) { background: #f0f0f0; }`,
    options: [
      "Faqat birinchi &lt;li&gt; ni tanlaydi",
      "Toq tartib raqamli (1, 3, 5...) &lt;li&gt; larni tanlaydi",
      "Juft tartib raqamli &lt;li&gt; larni tanlaydi",
      "Oxirgi &lt;li&gt; ni tanlaydi",
    ],
    correct: 1,
    explanation: ":nth-child(odd) — 1, 3, 5, 7... tartibdagi (toq) elementlarni tanlaydi. 'even' juftlarni tanlaydi.",
  },
  {
    id: 14,
    type: "amaliy",
    category: "Selektorlar",
    question: "Quyidagi selektor nima qiladi?",
    code: `a:not(.active) { opacity: 0.6; }`,
    options: [
      ".active klassiga ega &lt;a&gt; larni tanlaydi",
      ".active klassiga ega bo'lmagan &lt;a&gt; larni tanlaydi",
      "Barcha &lt;a&gt; larni tanlaydi",
      "Hech nima tanlamaydi",
    ],
    correct: 1,
    explanation: ":not() — selektor ichidagi shartga mos kelmaydigan elementlarni tanlaydi. :not(.active) — '.active' klassisiz &lt;a&gt; lar.",
  },
  {
    id: 15,
    type: "amaliy",
    category: "Selektorlar",
    question: "Pseudo-element va pseudo-klass farqi qaysi?",
    code: `/* A */  a:hover { color: red; }
/* B */  p::first-line { font-weight: bold; }`,
    options: [
      "A va B bir xil — pseudo-klass",
      "A pseudo-klass (holat), B pseudo-element (qism)",
      "A pseudo-element, B pseudo-klass",
      "Ikkalasi ham pseudo-element",
    ],
    correct: 1,
    explanation: "Pseudo-klass (:hover, :focus, :nth-child) — element holati. Pseudo-element (::before, ::first-line, ::placeholder) — elementning bir qismi.",
  },
  {
    id: 16,
    type: "amaliy",
    category: "Selektorlar",
    question: "Bu selektor qanday ishlaydi?",
    code: `div ~ p { color: gray; }`,
    options: [
      "div ichidagi &lt;p&gt; lar",
      "div dan oldingi &lt;p&gt; lar",
      "div bilan bir darajada, undan keyingi barcha &lt;p&gt; lar",
      "Faqat div dan keyin darhol kelgan &lt;p&gt;",
    ],
    correct: 2,
    explanation: "~ — general sibling selektor. div bilan bir ota elementi ostida, div dan keyingi barcha &lt;p&gt; aka-ukalarni tanlaydi.",
  },
  {
    id: 17,
    type: "nazariy",
    category: "Selektorlar",
    question: "Spetsifikligi eng yuqori selektor qaysi?",
    options: [
      "p.class",
      "#id",
      "div p span",
      "*",
    ],
    correct: 1,
    explanation: "#id — spetsifikligi 0,1,0,0. Bu p.class (0,0,1,1) va div p span (0,0,0,3) dan yuqori. * — eng past (0,0,0,0).",
  },
  {
    id: 18,
    type: "amaliy",
    category: "Selektorlar",
    question: "Bu kod natijasi qanday bo'ladi?",
    code: `p { color: blue; }
p { color: red; }`,
    options: [
      "Matn ko'k bo'ladi",
      "Matn qizil bo'ladi",
      "Ikki rang aralashadi",
      "Xato chiqadi",
    ],
    correct: 1,
    explanation: "Kaskad qoidasiga ko'ra, teng spetsifiklikda keyingi qoida ustunlik qiladi. Qizil rang o'chiradi.",
  },

  // ─── AMALIY — Box Model (19-26) ──────────────────────────────────────────
  {
    id: 19,
    type: "nazariy",
    category: "Box Model",
    question: "CSS Box Model to'rtta qatlami qaysilar?",
    options: [
      "content, padding, border, margin",
      "width, height, border, shadow",
      "inner, outer, frame, space",
      "core, layer, outline, gap",
    ],
    correct: 0,
    explanation: "Box Model: content (kontent), padding (ichki bo'shliq), border (chegara), margin (tashqi bo'shliq). Shu tartibda ichkaridan tashqariga.",
  },
  {
    id: 20,
    type: "amaliy",
    category: "Box Model",
    question: "Bu elementning umumiy kengligi qancha px?",
    code: `.box {
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  margin: 10px;
}`,
    options: [
      "200px",
      "250px",
      "270px",
      "230px",
    ],
    correct: 1,
    explanation: "Default box-sizing: content-box. Umumiy kenglik = width + padding×2 + border×2 = 200 + 40 + 10 = 250px. Margin hisob-kitobga kirmaydi.",
  },
  {
    id: 21,
    type: "amaliy",
    category: "Box Model",
    question: "box-sizing: border-box ishlatilsa, bu elementning umumiy kengligi qancha?",
    code: `.box {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 5px solid black;
}`,
    options: [
      "250px",
      "200px",
      "230px",
      "150px",
    ],
    correct: 1,
    explanation: "border-box: padding va border width ichiga kiritiladi. Umumiy kenglik aynan width ga teng = 200px.",
  },
  {
    id: 22,
    type: "amaliy",
    category: "Box Model",
    question: "Bu kod natijasi qanday?",
    code: `.a { margin: 20px; }
.b { margin: 30px; }
/* .a va .b — vertikal jihatdan ketma-ket */`,
    options: [
      "Oraliq 50px bo'ladi",
      "Oraliq 30px bo'ladi",
      "Oraliq 20px bo'ladi",
      "Oraliq 10px bo'ladi",
    ],
    correct: 1,
    explanation: "Margin collapse: vertikal jihatdan ketma-ket elementlar margini qo'shilmaydi, kattasi olinadi (30px).",
  },
  {
    id: 23,
    type: "amaliy",
    category: "Box Model",
    question: "padding: 10px 20px 30px 40px — qiymatlari tartibini aniqlang:",
    options: [
      "yuqori, pastki, o'ng, chap",
      "yuqori, o'ng, pastki, chap",
      "chap, o'ng, yuqori, pastki",
      "o'ng, chap, yuqori, pastki",
    ],
    correct: 1,
    explanation: "CSS shorthand tartib: yuqori (top), o'ng (right), pastki (bottom), chap (left) — soat yo'nalishida. 10px top, 20px right, 30px bottom, 40px left.",
  },
  {
    id: 24,
    type: "amaliy",
    category: "Box Model",
    question: "Bu element necha px joy egallaydi (yuqori-pastki)?",
    code: `.el {
  height: 100px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-top: 2px solid;
  border-bottom: 2px solid;
  /* box-sizing: content-box — default */
}`,
    options: [
      "100px",
      "132px",
      "134px",
      "130px",
    ],
    correct: 2,
    explanation: "content-box: balandlik = height + padding×2 + border×2 = 100 + 30 + 4 = 134px.",
  },
  {
    id: 25,
    type: "nazariy",
    category: "Box Model",
    question: "outline va border farqi nima?",
    options: [
      "Hech qanday farqi yo'q",
      "outline — box model hajmiga ta'sir qilmaydi, border ta'sir qiladi",
      "border — box model hajmiga ta'sir qilmaydi",
      "outline faqat text elementlar uchun",
    ],
    correct: 1,
    explanation: "outline — elementning atrofida chiziladi, lekin joy egollamaydi (layout ga ta'sir qilmaydi). border hajmni oshiradi.",
  },
  {
    id: 26,
    type: "amaliy",
    category: "Box Model",
    question: "Bu CSS nima qiladi?",
    code: `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}`,
    options: [
      "Barcha elementlarni ko'rinmas qiladi",
      "Global reset — border-box va sifr margins/paddings",
      "Faqat &lt;body&gt; ga ta'sir qiladi",
      "CSS ni o'chiradi",
    ],
    correct: 1,
    explanation: "Bu keng tarqalgan CSS reset pattern. * — universal selektor, border-box hisoblash va default margin/padding larni tozalaydi.",
  },

  // ─── AMALIY — Ranglar va Typography (27-35) ──────────────────────────────
  {
    id: 27,
    type: "nazariy",
    category: "Ranglar va Typography",
    question: "CSS da rang berish usullari qaysilar?",
    options: [
      "Faqat nom bilan (red, blue)",
      "Nom, hex, rgb, rgba, hsl, hsla",
      "Faqat hex (#fff) bilan",
      "Faqat rgb() bilan",
    ],
    correct: 1,
    explanation: "CSS rang formatlari: named (red), hex (#ff0000), rgb(255,0,0), rgba(255,0,0,0.5), hsl(0,100%,50%), hsla(0,100%,50%,0.5).",
  },
  {
    id: 28,
    type: "amaliy",
    category: "Ranglar va Typography",
    question: "Bu rangning shaffofligi qanday?",
    code: `color: rgba(255, 0, 0, 0.3);`,
    options: [
      "30% shaffof (70% ko'rinadi)",
      "70% shaffof (30% ko'rinadi)",
      "To'liq shaffof",
      "To'liq opak",
    ],
    correct: 0,
    explanation: "rgba() ning oxirgi parametri alpha (shaffoflik): 0 = to'liq shaffof, 1 = to'liq opak. 0.3 = 30% opaklik (70% shaffof).",
  },
  {
    id: 29,
    type: "amaliy",
    category: "Ranglar va Typography",
    question: "Bu font shorthand nima anglatadi?",
    code: `font: italic bold 16px/1.5 'Arial', sans-serif;`,
    options: [
      "style, weight, size, family",
      "style, weight, size/line-height, family",
      "weight, style, size, family",
      "family, style, weight, size",
    ],
    correct: 1,
    explanation: "font shorthand: font-style, font-weight, font-size/line-height, font-family. Tartib muhim — size va family majburiy.",
  },
  {
    id: 30,
    type: "amaliy",
    category: "Ranglar va Typography",
    question: "Bu kod nima qiladi?",
    code: `p {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}`,
    options: [
      "Matnni uch nuqta bilan qisqartiradi",
      "Matnni qalin qiladi",
      "Matnni kursiv qiladi",
      "Matnni o'chiradi",
    ],
    correct: 0,
    explanation: "Bu klassik text overflow pattern: white-space: nowrap (satr ko'chirmaslik), overflow: hidden (tashqariga chiqmaslik), text-overflow: ellipsis (... bilan kesish).",
  },
  {
    id: 31,
    type: "amaliy",
    category: "Ranglar va Typography",
    question: "line-height: 1.5 va font-size: 16px bo'lsa, qator balandligi qancha?",
    options: [
      "16px",
      "17.5px",
      "24px",
      "32px",
    ],
    correct: 2,
    explanation: "line-height birlik bo'lganda: 16 × 1.5 = 24px. Birliksiz qiymat font-size ga ko'paytiriladi.",
  },
  {
    id: 32,
    type: "amaliy",
    category: "Ranglar va Typography",
    question: "Bu CSS nima qiladi?",
    code: `h1 {
  font-size: clamp(1.5rem, 4vw, 3rem);
}`,
    options: [
      "Font o'lchami doim 4vw bo'ladi",
      "Font o'lchami minimum 1.5rem, maksimum 3rem, orada 4vw",
      "Faqat mobil qurilmalarda ishlaydi",
      "Font o'lchami 1.5rem bo'ladi",
    ],
    correct: 1,
    explanation: "clamp(min, preferred, max): o'lcham viewport kengligiga moslashadi lekin belgilangan chegaradan chiqmaydi. Fluid typography uchun ideal.",
  },
  {
    id: 33,
    type: "nazariy",
    category: "Ranglar va Typography",
    question: "em va rem o'rtasidagi farq nima?",
    options: [
      "Hech qanday farqi yo'q",
      "em — ota elementning font-size ga, rem — root (&lt;html&gt;) font-size ga nisbatan",
      "rem — ota elementga, em — root elementga nisbatan",
      "em — piksel, rem — foiz",
    ],
    correct: 1,
    explanation: "em — ota elementning font-size ini meros oladi (kaskadli). rem (root em) — doim &lt;html&gt; elementining font-size iga (default 16px) nisbatan.",
  },
  {
    id: 34,
    type: "amaliy",
    category: "Ranglar va Typography",
    question: "Bu gradient qanday ko'rinadi?",
    code: `background: linear-gradient(90deg, red, blue);`,
    options: [
      "Yuqoridan pastga qizildan ko'kga",
      "Chapdan o'ngga qizildan ko'kga",
      "Diagonalda qizildan ko'kga",
      "To'liq qizil fon",
    ],
    correct: 1,
    explanation: "90deg — gorizontal yo'nalish (chapdan o'ngga). 0deg — pastdan yuqoriga, 180deg — yuqoridan pastga.",
  },
  {
    id: 35,
    type: "amaliy",
    category: "Ranglar va Typography",
    question: "Bu CSS qanday natija beradi?",
    code: `p {
  text-transform: capitalize;
}`,
    options: [
      "Barcha harflar katta bo'ladi",
      "Barcha harflar kichik bo'ladi",
      "Har bir so'zning birinchi harfi katta bo'ladi",
      "Hech narsa o'zgarmaydi",
    ],
    correct: 2,
    explanation: "capitalize — har bir so'zning birinchi harfini katta qiladi. uppercase — barchani katta, lowercase — barchani kichik qiladi.",
  },

  // ─── AMALIY — Display va Positioning (36-45) ─────────────────────────────
  {
    id: 36,
    type: "nazariy",
    category: "Display va Positioning",
    question: "display: none va visibility: hidden farqi nima?",
    options: [
      "Hech qanday farqi yo'q",
      "display: none — element joy egallaydi, visibility: hidden — yo'q",
      "display: none — elementni to'liq olib tashlaydi (joy olmaydi), visibility: hidden — ko'rinmas lekin joy egallaydi",
      "visibility: hidden faqat opacity ni 0 qiladi",
    ],
    correct: 2,
    explanation: "display: none — element layout dan to'liq chiqariladi. visibility: hidden — ko'rinmaydi lekin o'rni saqlanadi.",
  },
  {
    id: 37,
    type: "amaliy",
    category: "Display va Positioning",
    question: "Bu element qaerda joylashadi?",
    code: `.box {
  position: relative;
  top: 20px;
  left: 30px;
}`,
    options: [
      "Viewport ning yuqori-chap burchagidan 20px past, 30px o'ngda",
      "Ota elementidan 20px past, 30px o'ngda",
      "Normal holatidan 20px past, 30px o'ngda siljigan",
      "O'zgarishsiz qoladi",
    ],
    correct: 2,
    explanation: "position: relative — elementni normal oqimidagi o'rnidan siljitadi. Layout boshqa elementlarga ta'sir qilmaydi.",
  },
  {
    id: 38,
    type: "amaliy",
    category: "Display va Positioning",
    question: "position: absolute element qaerga nisbatan joylashadi?",
    code: `.parent { position: relative; }
.child  { position: absolute; top: 0; right: 0; }`,
    options: [
      "Viewport ga nisbatan",
      "Body ga nisbatan",
      "Eng yaqin positioned (relative/absolute/fixed) ota elementga nisbatan",
      "Hujjat boshiga nisbatan",
    ],
    correct: 2,
    explanation: "absolute element — eng yaqin 'positioned' (position: relative/absolute/fixed/sticky) ota elementga nisbatan joylashadi. Bu holda .parent ga nisbatan.",
  },
  {
    id: 39,
    type: "nazariy",
    category: "Display va Positioning",
    question: "position: fixed va position: sticky farqi nima?",
    options: [
      "Hech qanday farqi yo'q",
      "fixed — doim viewport ga mahkam, sticky — scroll qilinganda mahkamlanadi",
      "sticky — doim viewport ga mahkam, fixed — scroll bilan harakatlanadi",
      "fixed faqat mobil qurilmalarda ishlaydi",
    ],
    correct: 1,
    explanation: "fixed — viewport ga nisbatan mahkam, scroll ga qaramay o'z joyida turadi. sticky — belgilangan scroll nuqtaga yetganda mahkamlanadi.",
  },
  {
    id: 40,
    type: "amaliy",
    category: "Display va Positioning",
    question: "Bu kod nima uchun ishlatiladi?",
    code: `.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
}`,
    options: [
      "Elementni markazlashtiradi",
      "To'liq ekranni qoplaydigan yarim shaffof qora overlay",
      "Elementni yashiradi",
      "Scrollbar ni o'chiradi",
    ],
    correct: 1,
    explanation: "position: fixed + inset: 0 — barcha tomonlardan 0, ya'ni viewport ni to'liq qoplaydi. Modal backdrop uchun klassik pattern.",
  },
  {
    id: 41,
    type: "amaliy",
    category: "Display va Positioning",
    question: "z-index qanday ishlaydi?",
    code: `.a { position: relative; z-index: 1; }
.b { position: relative; z-index: 10; }`,
    options: [
      ".a elementi .b ning ustida ko'rinadi",
      ".b elementi .a ning ustida ko'rinadi",
      "Ikkalasi ham bir xil darajada",
      "z-index faqat absolute elementlarda ishlaydi",
    ],
    correct: 1,
    explanation: "z-index — kattaligi ko'proq bo'lgan element ustida ko'rinadi. Faqat 'positioned' (non-static) elementlarda ishlaydi.",
  },
  {
    id: 42,
    type: "amaliy",
    category: "Display va Positioning",
    question: "Bu CSS nima uchun ishlatiladi?",
    code: `.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}`,
    options: [
      "Elementni chapga siljitadi",
      "Elementni viewport o'rtasiga markazlashtiradi",
      "Elementni rotate qiladi",
      "Elementni kattalashtiradi",
    ],
    correct: 1,
    explanation: "Klassik markazlashtirish: top/left 50% — elementning yuqori-chap burchagini markazga keltiradi. translate(-50%,-50%) — o'zining o'lchamini orqaga siljitadi.",
  },
  {
    id: 43,
    type: "nazariy",
    category: "Display va Positioning",
    question: "inline, block va inline-block elementlar farqi nima?",
    options: [
      "Hech qanday farqi yo'q",
      "inline — satrdagi, block — yangi satrda, inline-block — satrdagi lekin width/height bor",
      "block — satrdagi, inline — yangi satrda",
      "inline-block — faqat form elementlar uchun",
    ],
    correct: 1,
    explanation: "inline: satrda, width/height olmaydi. block: yangi satrda, to'liq kenglik. inline-block: satrda lekin width/height va margin/padding ishlaydi.",
  },
  {
    id: 44,
    type: "amaliy",
    category: "Display va Positioning",
    question: "Bu kod natijasi nima?",
    code: `.container {
  position: relative;
  overflow: hidden;
}
.child {
  position: absolute;
  top: -10px;
}`,
    options: [
      ".child container dan tashqarida ko'rinadi",
      ".child container ichida bo'ladi, tashqarisi kesiladi",
      ".child ko'rinmaydi",
      "Xato chiqadi",
    ],
    correct: 1,
    explanation: "overflow: hidden — absolute positioned child ham bo'lsa, container chegarasidan tashqariga chiqgan qism kesiladi.",
  },
  {
    id: 45,
    type: "amaliy",
    category: "Display va Positioning",
    question: "Bu CSS nima uchun ishlatiladi?",
    code: `.clearfix::after {
  content: '';
  display: block;
  clear: both;
}`,
    options: [
      "Float qilingan elementlardan keyin layout ni tozalash",
      "Pseudoelement qo'shish",
      "Border yaratish",
      "Elementni markazlashtirish",
    ],
    correct: 0,
    explanation: "Clearfix — float qilingan elementlar ota elementdan 'chiqib ketishini' oldini olish uchun. Eski usul; hozir flexbox/grid ishlatiladi.",
  },

  // ─── AMALIY — Flexbox (46-56) ─────────────────────────────────────────────
  {
    id: 46,
    type: "nazariy",
    category: "Flexbox",
    question: "Flexbox ni yoqish uchun qaysi xususiyat ishlatiladi?",
    options: [
      "flex: true",
      "display: flex",
      "flexbox: on",
      "layout: flex",
    ],
    correct: 1,
    explanation: "display: flex — konteynerga flexbox yoqadi. Farzand elementlar avtomatik flex item ga aylanadi.",
  },
  {
    id: 47,
    type: "amaliy",
    category: "Flexbox",
    question: "Bu flex container elementlarni qanday joylashtiradi?",
    code: `.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}`,
    options: [
      "Elementlar chapga yig'iladi, vertikal markazda",
      "Elementlar o'rtaga yig'iladi",
      "Elementlar teng oraliqda (chetlarda ham), vertikal markazda",
      "Elementlar pastga tushadi",
    ],
    correct: 2,
    explanation: "justify-content: space-between — birinchi va oxirgi elementlar chekkada, qolganlari teng oraliqda. align-items: center — vertikal markazda.",
  },
  {
    id: 48,
    type: "amaliy",
    category: "Flexbox",
    question: "flex: 1 qisqartmasi nimani anglatadi?",
    options: [
      "flex-grow: 1, flex-shrink: 0, flex-basis: 0",
      "flex-grow: 1, flex-shrink: 1, flex-basis: 0%",
      "flex-grow: 0, flex-shrink: 1, flex-basis: 100%",
      "flex-grow: 1 faqat",
    ],
    correct: 1,
    explanation: "flex: 1 = flex-grow: 1, flex-shrink: 1, flex-basis: 0%. Element mavjud bo'sh joyni teng bo'lishib oladi.",
  },
  {
    id: 49,
    type: "amaliy",
    category: "Flexbox",
    question: "Elementni Flexbox da markazlashtirish uchun eng qisqa usul:",
    code: `.container {
  display: flex;
  /* ??? */
}`,
    options: [
      "justify-content: center va margin: auto",
      "justify-content: center va align-items: center",
      "align-items: center faqat",
      "text-align: center",
    ],
    correct: 1,
    explanation: "justify-content: center (asosiy o'q bo'ylab) + align-items: center (ko'ndalang o'q bo'ylab) — ikki o'q bo'ylab markazlash.",
  },
  {
    id: 50,
    type: "amaliy",
    category: "Flexbox",
    question: "Bu flex item qanday joylashadi?",
    code: `.item {
  margin-left: auto;
}`,
    options: [
      "Elementni chapga suradi",
      "Elementni o'ngga suradi (qolgan bo'sh joy chapga)",
      "Elementni markazga qo'yadi",
      "Elementni yashiradi",
    ],
    correct: 1,
    explanation: "Flex item da margin: auto — bo'sh joyni o'sha tomonga suradi. margin-left: auto — elementni o'ng chekkaga itaradi.",
  },
  {
    id: 51,
    type: "amaliy",
    category: "Flexbox",
    question: "flex-direction: column qilinsa, align-items va justify-content qanday o'zgaradi?",
    options: [
      "Hech nima o'zgarmaydi",
      "justify-content vertikal, align-items gorizontal bo'ladi",
      "justify-content gorizontal, align-items vertikal bo'ladi",
      "Ikkalasi ham vertikal bo'ladi",
    ],
    correct: 1,
    explanation: "flex-direction: column — asosiy o'q vertikal bo'ladi. Shuning uchun justify-content vertikal (yuqori-pastki), align-items gorizontal (chap-o'ng) bo'ladi.",
  },
  {
    id: 52,
    type: "amaliy",
    category: "Flexbox",
    question: "flex-wrap: wrap nima qiladi?",
    options: [
      "Elementlarni kichraytiradi",
      "Elementlar sig'masa keyingi qatorga o'tadi",
      "Flexbox ni o'chiradi",
      "Elementlarni yashiradi",
    ],
    correct: 1,
    explanation: "flex-wrap: wrap — flex item lar bir qatorga sig'masa, keyingi qatorga o'tadi. Default nowrap — hammasi bir qatorda qisqaradi.",
  },
  {
    id: 53,
    type: "amaliy",
    category: "Flexbox",
    question: "Bu flex container da 3 ta item bor. Natija qanday?",
    code: `.container {
  display: flex;
  gap: 16px;
}
.item { flex: 1; }`,
    options: [
      "Har bir item 33% kenglikda, 16px oraliqda",
      "Barcha itemlar bir-biriga yopishgan",
      "Itemlar vertikal joylashadi",
      "Itemlar o'ng tomonga yig'iladi",
    ],
    correct: 0,
    explanation: "flex: 1 — barcha itemlar teng bo'lishadi. gap: 16px — ular orasidagi oraliq. Natija: uchta teng ustunlar 16px oraliq bilan.",
  },
  {
    id: 54,
    type: "amaliy",
    category: "Flexbox",
    question: "order xususiyati nima qiladi?",
    code: `.first  { order: 2; }
.second { order: 1; }`,
    options: [
      "HTML tartibini o'zgartiradi",
      ".second vizual jihatdan .first dan oldin ko'rinadi",
      ".first vizual jihatdan .second dan oldin ko'rinadi",
      "Elementlarni yashiradi",
    ],
    correct: 1,
    explanation: "order — vizual tartibni o'zgartiradi (HTML o'zgarmaydi). Kichik order qiymati oldinda ko'rinadi. .second (order:1) .first (order:2) dan oldin.",
  },
  {
    id: 55,
    type: "amaliy",
    category: "Flexbox",
    question: "align-self nima uchun ishlatiladi?",
    code: `.container { display: flex; align-items: stretch; }
.special   { align-self: flex-start; }`,
    options: [
      "Container uchun align-items ni o'zgartiradi",
      "Faqat .special elementning vertikal joylashuvini o'zgartiradi",
      "Barcha elementlarni yuqoriga suradi",
      "flex-direction ni o'zgartiradi",
    ],
    correct: 1,
    explanation: "align-self — container ning align-items qiymatini faqat shu item uchun bekor qiladi. Ayrim elementlarni boshqacha joylashtirish imkonini beradi.",
  },
  {
    id: 56,
    type: "amaliy",
    category: "Flexbox",
    question: "Bu Flexbox kodi nimani yaratadi?",
    code: `.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  height: 60px;
}`,
    options: [
      "Vertikal navigatsiya",
      "To'liq kenglikdagi gorizontal navbar",
      "Grid layout",
      "Sticky footer",
    ],
    correct: 1,
    explanation: "space-between: elementlarni ikki chekkaga suradi (logo chap, linklar o'ng). align-items: center: vertikal markazlash. Klassik navbar pattern.",
  },

  // ─── AMALIY — CSS Grid (57-65) ───────────────────────────────────────────
  {
    id: 57,
    type: "amaliy",
    category: "CSS Grid",
    question: "Bu grid container nechta ustun yaratadi?",
    code: `.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}`,
    options: [
      "1 ta ustun",
      "2 ta ustun",
      "3 ta teng kenglikdagi ustun",
      "auto ustunlar",
    ],
    correct: 2,
    explanation: "repeat(3, 1fr) — 3 ta teng kenglikdagi ustun. 1fr — mavjud joyning 1 ulushi (fraction). gap: 20px — ustun va qatorlar orasidagi oraliq.",
  },
  {
    id: 58,
    type: "amaliy",
    category: "CSS Grid",
    question: "Bu grid item qancha joy egallaydi?",
    code: `.item {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}`,
    options: [
      "1 ta ustun va 1 ta qator",
      "2 ta ustun (1 dan 3 gacha) va 1 ta qator",
      "3 ta ustun va 2 ta qator",
      "To'liq grid",
    ],
    correct: 1,
    explanation: "grid-column: 1 / 3 — grid line 1 dan 3 gacha, ya'ni 2 ta ustun. grid-row: 1 / 2 — 1 ta qator.",
  },
  {
    id: 59,
    type: "amaliy",
    category: "CSS Grid",
    question: "minmax() funksiyasi nima uchun ishlatiladi?",
    code: `grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));`,
    options: [
      "Faqat 200px kenglikdagi ustunlar yaratadi",
      "Minimum 200px, maksimum mavjud joy bo'yicha uzaydigan responsive ustunlar",
      "Ustunlar soni 200 ta bo'ladi",
      "Grid ni o'chiradi",
    ],
    correct: 1,
    explanation: "auto-fill + minmax(200px, 1fr) — viewport kengligiga qarab avtomatik ustun soni. Har bir ustun min 200px, max mavjud joy. Responsive grid uchun ideal.",
  },
  {
    id: 60,
    type: "amaliy",
    category: "CSS Grid",
    question: "Bu grid template nima yaratadi?",
    code: `.layout {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 250px 1fr;
}`,
    options: [
      "Uch ustunli layout",
      "Header, sidebar+main, footer — 3 qatorli layout",
      "Faqat header va footer",
      "Bitta ustunli layout",
    ],
    correct: 1,
    explanation: "grid-template-areas — vizual grid xaritasi. Header va footer to'liq kenglikda, o'rtada 250px sidebar va 1fr main.",
  },
  {
    id: 61,
    type: "amaliy",
    category: "CSS Grid",
    question: "Bu item qaysi joyga joylashadi?",
    code: `.item {
  grid-area: sidebar;
}`,
    options: [
      "Birinchi grid katakka",
      "grid-template-areas da 'sidebar' deb belgilangan joyga",
      "O'ng tomonga",
      "Oxirgi katakka",
    ],
    correct: 1,
    explanation: "grid-area — elementni grid-template-areas da belgilangan nomdagi joyga qo'yadi.",
  },
  {
    id: 62,
    type: "amaliy",
    category: "CSS Grid",
    question: "auto-fill va auto-fit farqi nima?",
    code: `/* A */ grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
/* B */ grid-template-columns: repeat(auto-fit,  minmax(100px, 1fr));`,
    options: [
      "Hech qanday farqi yo'q",
      "auto-fill — bo'sh ustunlar qoladi, auto-fit — bo'sh ustunlar yo'qoladi va itemlar kengayadi",
      "auto-fit — bo'sh ustunlar qoladi, auto-fill — kengayadi",
      "auto-fill faqat fixed kengliklar uchun",
    ],
    correct: 1,
    explanation: "auto-fill: bo'sh joy bo'lsa ham ustun qoladi. auto-fit: bo'sh ustunlar yo'qoladi va mavjud itemlar bo'sh joyni egallaydi.",
  },
  {
    id: 63,
    type: "amaliy",
    category: "CSS Grid",
    question: "Bu grid shorthand nima qiladi?",
    code: `grid-column: span 2;`,
    options: [
      "Element 2-ustunda joylashadi",
      "Element 2 ta ustunni egallaydi",
      "2 ta qator egallaydi",
      "Ikkinchi gridga o'tadi",
    ],
    correct: 1,
    explanation: "span 2 — aniq joylashuvni ko'rsatmasdan, 2 ta ustunni egallashni bildiradi. grid-row: span 3 — 3 ta qator egallaydi.",
  },
  {
    id: 64,
    type: "amaliy",
    category: "CSS Grid",
    question: "place-items: center nima qiladi?",
    code: `.grid {
  display: grid;
  place-items: center;
}`,
    options: [
      "Faqat gorizontal markazlashtiradi",
      "align-items: center va justify-items: center — ikki o'q bo'ylab markazlashtiradi",
      "Elementlarni pastga suradi",
      "Grid ni o'chiradi",
    ],
    correct: 1,
    explanation: "place-items — align-items va justify-items ning qisqartmasi. place-items: center — barcha grid item larni ikki o'q bo'ylab markazlashtiradi.",
  },
  {
    id: 65,
    type: "nazariy",
    category: "CSS Grid",
    question: "Flexbox va Grid qachon ishlatiladi?",
    options: [
      "Ikkalasi ham bir xil vazifa uchun",
      "Flexbox — bir o'qli layout (qator yoki ustun), Grid — ikki o'qli (qator VA ustun)",
      "Grid — bir o'qli, Flexbox — ikki o'qli",
      "Flexbox yangi, Grid eski",
    ],
    correct: 1,
    explanation: "Flexbox — bir o'q bo'ylab (navigatsiya, kartalar qatori). Grid — ikki o'q bo'ylab (sahifa layouti, murakkab setka). Ko'pincha birgalikda ishlatiladi.",
  },

  // ─── AMALIY — Animatsiya va Transformlar (66-74) ─────────────────────────
  {
    id: 66,
    type: "amaliy",
    category: "Animatsiya",
    question: "Bu CSS transition nima qiladi?",
    code: `.btn {
  transition: background 0.3s ease, transform 0.2s ease;
}
.btn:hover {
  background: blue;
  transform: scale(1.05);
}`,
    options: [
      "Hover da bir zumda o'zgaradi",
      "Hover da 0.3s da fon o'zgaradi, 0.2s da kattaroq bo'ladi",
      "Faqat background o'zgaradi",
      "Animatsiya chiqmaydi",
    ],
    correct: 1,
    explanation: "transition — xususiyatlar o'zgarishini silliqlaydi. background 0.3s, transform 0.2s — har biri o'z vaqtida animatsiya bo'ladi.",
  },
  {
    id: 67,
    type: "amaliy",
    category: "Animatsiya",
    question: "Bu @keyframes animatsiyasi nima qiladi?",
    code: `@keyframes pulse {
  0%   { transform: scale(1); }
  50%  { transform: scale(1.1); }
  100% { transform: scale(1); }
}
.dot {
  animation: pulse 1s ease-in-out infinite;
}`,
    options: [
      "Element bir marta kattaroq bo'ladi",
      "Element cheksiz ravishda kengayib-torayib turadi",
      "Element aylanadi",
      "Element yo'qoladi",
    ],
    correct: 1,
    explanation: "keyframes 0%-100%: kengayib-torayib. infinite — cheksiz takrorlanadi. 1s — bir sikl vaqti. Yurak urishi effekti uchun klassik pattern.",
  },
  {
    id: 68,
    type: "amaliy",
    category: "Animatsiya",
    question: "transform: translate(50%, -50%) nima qiladi?",
    options: [
      "Elementni 50% kattalashtiradi",
      "Elementni o'ng tomonga elementning kengligining 50% i, yuqoriga balandligining 50% i siljitadi",
      "Elementni aylantiradi",
      "Elementni ko'paytiradi",
    ],
    correct: 1,
    explanation: "translate(x, y): x=50% — elementning o'z kengligi 50% i o'ngga, y=-50% — o'z balandligi 50% i yuqoriga siljiydi.",
  },
  {
    id: 69,
    type: "amaliy",
    category: "Animatsiya",
    question: "animation-fill-mode: forwards nima qiladi?",
    options: [
      "Animatsiyani oldinga o'ynaydi",
      "Animatsiya tugagach oxirgi kadrda qoladi",
      "Animatsiyani qayta boshlaydi",
      "Animatsiya teskari o'ynaydi",
    ],
    correct: 1,
    explanation: "fill-mode: forwards — animatsiya tugagach element oxirgi keyframe holatida qoladi (qaytib ketmaydi). none — default, boshlang'ich holatga qaytadi.",
  },
  {
    id: 70,
    type: "amaliy",
    category: "Animatsiya",
    question: "Bu CSS nima uchun ishlatiladi?",
    code: `.card {
  will-change: transform;
}`,
    options: [
      "Elementni harakat qilishga majbur qiladi",
      "Brauzerga shu elementda transform o'zgarishi bo'lishini oldindan aytadi — GPU optimizatsiya",
      "Elementni yashiradi",
      "Transform ni o'chiradi",
    ],
    correct: 1,
    explanation: "will-change — brauzerga optimallashtirish uchun signal. GPU layeriga ko'chiradi. Lekin ortiqcha ishlatish xotirani oshiradi.",
  },
  {
    id: 71,
    type: "amaliy",
    category: "Animatsiya",
    question: "transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) nima?",
    options: [
      "Linear animatsiya",
      "Tez boshlanib, sekin tugaydigan Material Design standart egri",
      "Sekin boshlanib, tez tugaydigan egri",
      "Qaytib keladigan animatsiya",
    ],
    correct: 1,
    explanation: "cubic-bezier(0.4, 0, 0.2, 1) — Material Design ning standart 'easing' egri chizig'i. Tez boshlanadi, sekin tugaydi (ease-out ga o'xshash).",
  },
  {
    id: 72,
    type: "amaliy",
    category: "Animatsiya",
    question: "Bu transform qanday natija beradi?",
    code: `transform: rotate(45deg) scale(1.5) translateX(20px);`,
    options: [
      "Faqat 45 daraja buriladi",
      "Tartibda: 45deg buriladi, 1.5x kattalashadi, so'ng 20px o'ngga siljiydi",
      "Tartibi ahamiyatsiz, natija bir xil",
      "Xato chiqadi — bir nechta transform bo'lmaydi",
    ],
    correct: 1,
    explanation: "Bir nechta transform — chap-o'ngga tartibda qo'llanadi. Tartib muhim: rotate qilingach koordinat tizimi o'zgaradi, translateX shu yangi o'q bo'ylab ishlaydi.",
  },
  {
    id: 73,
    type: "amaliy",
    category: "Animatsiya",
    question: "Bu CSS nima effekt beradi?",
    code: `.skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}
@keyframes shimmer {
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}`,
    options: [
      "Chaqmoq effekti",
      "Skeleton loading shimmer — mazmun yuklanayotgani ko'rsatkichi",
      "Hover effekti",
      "Fon animatsiyasi",
    ],
    correct: 1,
    explanation: "Skeleton loading + shimmer — zamonaviy loading placeholder. Gradient harakatlanishi yuklanish jarayonini bildiradi.",
  },
  {
    id: 74,
    type: "amaliy",
    category: "Animatsiya",
    question: "@media (prefers-reduced-motion) nima uchun ishlatiladi?",
    code: `@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}`,
    options: [
      "Mobil qurilmalarda animatsiyani o'chiradi",
      "Foydalanuvchi tizimida animatsiyani kamaytirishni so'ragan bo'lsa, barcha animatsiyalarni o'chiradi",
      "Eski brauzerlarda animatsiyani o'chiradi",
      "Faqat hover animatsiyalarini o'chiradi",
    ],
    correct: 1,
    explanation: "prefers-reduced-motion — aksesibiliti media query. Bosh og'riq, vestibular buzilishlar bo'lgan foydalanuvchilar uchun muhim.",
  },

  // ─── AMALIY — Responsive dizayn (75-83) ──────────────────────────────────
  {
    id: 75,
    type: "nazariy",
    category: "Responsive",
    question: "Mobile-first yondashuvi nima?",
    options: [
      "Faqat mobillar uchun dizayn qilish",
      "Avval kichik ekran uchun yozib, media query bilan kattalashtirish",
      "Avval katta ekran uchun yozib, media query bilan kichraytirish",
      "Responsive dizayn bilan bog'liq emas",
    ],
    correct: 1,
    explanation: "Mobile-first: min-width media query ishlatiladi. Kichik ekranlar uchun default stil yoziladi, kattaroq ekranlarda qo'shimcha stillar qo'shiladi.",
  },
  {
    id: 76,
    type: "amaliy",
    category: "Responsive",
    question: "Bu media query qachon ishlaydi?",
    code: `@media (min-width: 768px) {
  .container { max-width: 1200px; }
}`,
    options: [
      "Ekran kengligi 768px dan kichik bo'lganda",
      "Ekran kengligi 768px va undan katta bo'lganda",
      "Faqat 768px da",
      "Har doim",
    ],
    correct: 1,
    explanation: "min-width: 768px — viewport kengligi 768px yoki kattaroq bo'lganda ishlaydi. Mobile-first da tablet/desktop uchun ishlatiladi.",
  },
  {
    id: 77,
    type: "amaliy",
    category: "Responsive",
    question: "Responsive rasm uchun qaysi CSS eng to'g'ri?",
    options: [
      "width: 300px",
      "width: 100%; height: auto",
      "width: 50vw; height: 50vh",
      "max-width: 100%; height: auto",
    ],
    correct: 3,
    explanation: "max-width: 100% — rasm o'z konteyneridan kattaroq bo'lmaydi, lekin kichikroq bo'lishi mumkin. height: auto — proporsiyalar saqlanadi.",
  },
  {
    id: 78,
    type: "amaliy",
    category: "Responsive",
    question: "vw va vh birliklarning farqi?",
    options: [
      "Hech qanday farqi yo'q",
      "vw — viewport kengligi, vh — viewport balandligi foizi",
      "vw — piksel, vh — foiz",
      "vw — vertikal, vh — gorizontal",
    ],
    correct: 1,
    explanation: "vw (viewport width) — viewport kengligining 1%. vh (viewport height) — viewport balandligining 1%. 100vw = to'liq kenglik, 100vh = to'liq balandlik.",
  },
  {
    id: 79,
    type: "amaliy",
    category: "Responsive",
    question: "Bu CSS nima qiladi?",
    code: `.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}`,
    options: [
      "Doim 3 ta ustun bo'ladi",
      "Ekran kengligiga qarab avtomatik ustun soni, har biri min 280px",
      "Faqat mobil uchun",
      "Faqat 280px kenglikdagi ustunlar",
    ],
    correct: 1,
    explanation: "auto-fill + minmax: katta ekranda ko'p ustun, kichikda kam. Media query siz responsive grid. Keng ishlatiladi.",
  },
  {
    id: 80,
    type: "amaliy",
    category: "Responsive",
    question: "Container query nima va oddiy media query dan farqi?",
    code: `@container (min-width: 400px) {
  .card { flex-direction: row; }
}`,
    options: [
      "Hech qanday farqi yo'q",
      "Container query — viewport emas, ota konteyner o'lchamiga qarab stil qo'llaydi",
      "Container query faqat Flexbox uchun",
      "Media query yangi versiyasi",
    ],
    correct: 1,
    explanation: "Container query — elementning ota konteyner kengligiga qarab stil qo'llaydi. Viewport kengligidan mustaqil komponentlar uchun ideal.",
  },
  {
    id: 81,
    type: "amaliy",
    category: "Responsive",
    question: "Bu CSS o'zgaruvchisi nima qiladi?",
    code: `:root { --sidebar-width: 280px; }

@media (max-width: 768px) {
  :root { --sidebar-width: 0px; }
}

.sidebar { width: var(--sidebar-width); }`,
    options: [
      "Sidebar ni o'chiradi",
      "Mobil ekranda sidebar kengligini 0 qiladi — responsive o'zgaruvchi",
      "Sidebar ni 280px qiladi",
      "Media query dan oldin ishlaydi",
    ],
    correct: 1,
    explanation: "CSS o'zgaruvchilarini media query ichida o'zgartirish mumkin. Barcha --sidebar-width ishlatgan joylar avtomatik yangilanadi.",
  },
  {
    id: 82,
    type: "amaliy",
    category: "Responsive",
    question: "aspect-ratio xususiyati nima qiladi?",
    code: `.video-wrap {
  width: 100%;
  aspect-ratio: 16 / 9;
}`,
    options: [
      "Video hajmini belgilaydi",
      "Element har doim 16:9 nisbatida bo'ladi, kenglik o'zgarganda balandlik moslashadi",
      "Faqat video teglar uchun",
      "Rasm proporsiyasini kesadi",
    ],
    correct: 1,
    explanation: "aspect-ratio — elementning kenglik/balandlik nisbatini saqlaydi. 16/9: YouTube formatida responsive konteyner yaratadi.",
  },
  {
    id: 83,
    type: "amaliy",
    category: "Responsive",
    question: "Bu CSS nimani amalga oshiradi?",
    code: `@media print {
  .nav, .sidebar, .ads { display: none; }
  body { font-size: 12pt; }
}`,
    options: [
      "Sahifani mobil uchun moslashtiradi",
      "Bosib chiqarish uchun navigatsiya va reklamalarni yashiradi",
      "Qorong'i rejim yoqadi",
      "Sahifani fayl sifatida saqlaydi",
    ],
    correct: 1,
    explanation: "@media print — bosmaga chiqarilganda ishlaydi. Navigatsiya, reklama kabi elementlarni yashirish va shrift o'lchamini moslashtirish uchun.",
  },

  // ─── AMALIY — CSS O'zgaruvchilar (84-90) ─────────────────────────────────
  {
    id: 84,
    type: "nazariy",
    category: "CSS O'zgaruvchilar",
    question: "CSS custom property (o'zgaruvchi) qanday e'lon qilinadi?",
    options: [
      "$primary: blue;",
      "@primary: blue;",
      "--primary: blue;",
      "var primary = blue;",
    ],
    correct: 2,
    explanation: "CSS o'zgaruvchilari -- bilan boshlanadi. :root da e'lon qilinsa global. Ishlatish: var(--primary).",
  },
  {
    id: 85,
    type: "amaliy",
    category: "CSS O'zgaruvchilar",
    question: "var() funksiyasida fallback qiymat qanday yoziladi?",
    code: `color: var(--text-color, black);`,
    options: [
      "--text-color mavjud bo'lmasa xato chiqadi",
      "--text-color mavjud bo'lmasa black ishlatiladi",
      "Doim black bo'ladi",
      "Doim --text-color bo'ladi",
    ],
    correct: 1,
    explanation: "var(--o'zgaruvchi, fallback) — o'zgaruvchi mavjud bo'lmasa yoki invalid bo'lsa, fallback qiymat ishlatiladi.",
  },
  {
    id: 86,
    type: "amaliy",
    category: "CSS O'zgaruvchilar",
    question: "CSS o'zgaruvchisini JavaScript da qanday o'qish mumkin?",
    code: `// ???
const val = ???`,
    options: [
      "document.getVariable('--color')",
      "getComputedStyle(el).getPropertyValue('--color').trim()",
      "el.style.getVariable('--color')",
      "CSS.get('--color')",
    ],
    correct: 1,
    explanation: "getComputedStyle(element).getPropertyValue('--custom-property') — CSS o'zgaruvchisini JS da o'qish. O'rnatish: el.style.setProperty('--color', 'red')",
  },
  {
    id: 87,
    type: "amaliy",
    category: "CSS O'zgaruvchilar",
    question: "Bu dark mode implementation qanday ishlaydi?",
    code: `:root { --bg: white; --text: black; }
.dark { --bg: #1a1a1a; --text: white; }

body { background: var(--bg); color: var(--text); }`,
    options: [
      "Har doim qorong'i rejimda bo'ladi",
      ".dark klass qo'shilganda barcha var(--bg) va var(--text) avtomatik o'zgaradi",
      "Faqat body ga ta'sir qiladi",
      "JavaScript kerak",
    ],
    correct: 1,
    explanation: "CSS o'zgaruvchilari kaskad orqali meros olinadi. .dark klass html yoki body ga qo'shilganda barcha farzandlar yangi qiymatlarni oladi.",
  },
  {
    id: 88,
    type: "amaliy",
    category: "CSS O'zgaruvchilar",
    question: "Bu calc() ifoda qanday ishlaydi?",
    code: `.content {
  width: calc(100% - 280px - 32px);
}`,
    options: [
      "100% kenglikda bo'ladi",
      "Viewport kengligidan 312px ayirib, qolgan kenglikda bo'ladi",
      "Xato — turli birliklar aralashtirilmaydi",
      "0 bo'ladi",
    ],
    correct: 1,
    explanation: "calc() — turli birliklarni aralashtirib hisoblaydi. 100% - 280px - 32px: sidebar va gap dan qolgan joy. Responsive layoutlarda keng ishlatiladi.",
  },
  {
    id: 89,
    type: "amaliy",
    category: "CSS O'zgaruvchilar",
    question: "CSS o'zgaruvchisi JavaScript dan qanday o'zgartiriladi?",
    options: [
      "CSS.setProperty('--color', 'red')",
      "document.style['--color'] = 'red'",
      "document.documentElement.style.setProperty('--color', 'red')",
      "CSS.variable('--color', 'red')",
    ],
    correct: 2,
    explanation: "element.style.setProperty('--o\'zgaruvchi', 'qiymat') — CSS o'zgaruvchisini JS da o'zgartirish. :root dagi o'zgaruvchi uchun documentElement ishlatiladi.",
  },
  {
    id: 90,
    type: "amaliy",
    category: "CSS O'zgaruvchilar",
    question: "Bu CSS nimani amalga oshiradi?",
    code: `.btn {
  --_hue: 220;
  background: hsl(var(--_hue), 70%, 50%);
}
.btn:hover {
  --_hue: 200;
}`,
    options: [
      "Hover da rang o'zgarmaydi",
      "Hover da faqat rangnint (hue) o'zgaradi, to'yinganlik va yorqinlik o'zgarmaydi",
      "Hover da element yo'qoladi",
      "Xato — hsl() var() ni qabul qilmaydi",
    ],
    correct: 1,
    explanation: "hsl() ichida var() ishlatish — faqat rang qiymatini (hue) o'zgartirib, rangni boshqarish. Rang palitrasini CSS o'zgaruvchi orqali boshqarishning elegant usuli.",
  },

  // ─── AMALIY — Ilg'or mavzular (91-100) ──────────────────────────────────
  {
    id: 91,
    type: "amaliy",
    category: "Ilg'or mavzular",
    question: "Bu CSS filter nima qiladi?",
    code: `.card:hover img {
  filter: blur(4px) brightness(0.7);
}`,
    options: [
      "Rasmni o'chiradi",
      "Hover da rasm xiralashadi va qorong'ilashadi",
      "Rasm kattalashadi",
      "Rasm buriladi",
    ],
    correct: 1,
    explanation: "filter: blur() — xiralashtirib, brightness() — yorqinlikni kamaytiradi. Hover effektlar, glassmorphism, overlay uchun ishlatiladi.",
  },
  {
    id: 92,
    type: "amaliy",
    category: "Ilg'or mavzular",
    question: "backdrop-filter va filter farqi nima?",
    code: `.glass {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.1);
}`,
    options: [
      "Hech qanday farqi yo'q",
      "backdrop-filter — elementning ortidagi kontentga ta'sir qiladi, filter — elementning o'ziga",
      "filter — ortidagi kontentga ta'sir qiladi",
      "backdrop-filter faqat SVG uchun",
    ],
    correct: 1,
    explanation: "backdrop-filter — elementning orqasidagi kontentni (background) xiralashtirib, glassmorphism effekti yaratadi. filter — elementning o'ziga ta'sir qiladi.",
  },
  {
    id: 93,
    type: "amaliy",
    category: "Ilg'or mavzular",
    question: "Bu CSS nimani yaratadi?",
    code: `.card {
  box-shadow:
    0 1px 3px rgba(0,0,0,0.12),
    0 4px 12px rgba(0,0,0,0.08),
    inset 0 1px 0 rgba(255,255,255,0.1);
}`,
    options: [
      "Bir xil ko'rinishdagi soya",
      "Ko'p qatlamli soya va yuqoridan ichki yorug'lik — chuqurroq 3D effekt",
      "Faqat ichki soya",
      "Soya yo'q",
    ],
    correct: 1,
    explanation: "Ko'p qatlamli box-shadow — har xil radius va shaffoflikda. inset — ichki soya. Birgalikda chuqurroq, realistik ko'rinish yaratadi.",
  },
  {
    id: 94,
    type: "amaliy",
    category: "Ilg'or mavzular",
    question: "CSS @layer nima uchun ishlatiladi?",
    code: `@layer base, components, utilities;

@layer base { button { all: unset; } }
@layer components { .btn { background: blue; } }
@layer utilities { .mt-4 { margin-top: 1rem; } }`,
    options: [
      "CSS fayllarni alohida saqlash",
      "Spetsifiklikni boshqarmasdan stil tartibini aniqlash — keyingi layer oldindan ustun",
      "CSS animatsiya yaratish",
      "Media query o'rnini bosadi",
    ],
    correct: 1,
    explanation: "@layer — spetsifiklikdan mustaqil kaskad tartibini aniqlaydi. Keyin e'lon qilingan layer ustun keladi. Tailwind kabi frameworklarda keng qo'llanmoqda.",
  },
  {
    id: 95,
    type: "amaliy",
    category: "Ilg'or mavzular",
    question: "scroll-snap nima qiladi?",
    code: `.container {
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
}
.slide {
  scroll-snap-align: start;
}`,
    options: [
      "Scrollni bloklaydi",
      "Scroll qilinganda elementlar aniq joyga 'snap' qiladi — karusel effekti",
      "Elementlarni vertikal qiladi",
      "Infinite scroll yaratadi",
    ],
    correct: 1,
    explanation: "CSS scroll snap — JS siz karusel, slider yaratish imkoni. scroll-snap-type konteynerda, scroll-snap-align har bir elementda.",
  },
  {
    id: 96,
    type: "amaliy",
    category: "Ilg'or mavzular",
    question: "Bu CSS :is() pseudo-klass nima qiladi?",
    code: `:is(h1, h2, h3) > a { color: blue; }`,
    options: [
      "Faqat h1 ichidagi a larni tanlaydi",
      "h1, h2, h3 ning to'g'ridan-to'g'ri farzand a elementlarini bir selektor bilan tanlaydi",
      "Barcha a larni tanlaydi",
      "Xato — :is() dan keyin > ishlatilmaydi",
    ],
    correct: 1,
    explanation: ":is() — bir nechta selektor uchun guruh yaratadi. h1 > a, h2 > a, h3 > a ni bir selektor bilan yozish mumkin. :where() o'xshash lekin spetsifikligi 0.",
  },
  {
    id: 97,
    type: "amaliy",
    category: "Ilg'or mavzular",
    question: "Bu CSS content visibility nima qiladi?",
    code: `.section {
  content-visibility: auto;
  contain-intrinsic-size: 500px;
}`,
    options: [
      "Elementni yashiradi",
      "Viewport tashqarisidagi elementlarni render qilishni kechiktiradi — ishlash tezlashadi",
      "Elementni kattalashtiradi",
      "Elementni animation qiladi",
    ],
    correct: 1,
    explanation: "content-visibility: auto — ekranda ko'rinmagan qismlarni render qilishni kechiktiradi. Uzun sahifalarda dastlabki yuklash vaqtini 50%+ kamaytirishi mumkin.",
  },
  {
    id: 98,
    type: "amaliy",
    category: "Ilg'or mavzular",
    question: "Bu CSS nima yaratadi?",
    code: `.triangle {
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 30px solid red;
}`,
    options: [
      "To'rtburchak",
      "Aylanа",
      "Yuqoriga qaratilgan qizil uchburchak",
      "Pastga qaratilgan uchburchak",
    ],
    correct: 2,
    explanation: "CSS border trick — width/height=0, faqat border chiziladi. Shaffof chap va o'ng border, qizil pastki border — yuqoriga qaratilgan uchburchak hosil qiladi.",
  },
  {
    id: 99,
    type: "amaliy",
    category: "Ilg'or mavzular",
    question: "@supports nima uchun ishlatiladi?",
    code: `@supports (display: grid) {
  .layout { display: grid; }
}
@supports not (display: grid) {
  .layout { display: flex; }
}`,
    options: [
      "Media query uchun",
      "Brauzer ma'lum CSS xususiyatni qo'llab-quvvatlashini tekshiradi va fallback beradi",
      "Animatsiya uchun",
      "Variable e'lon qilish uchun",
    ],
    correct: 1,
    explanation: "@supports (feature detection) — brauzerda CSS xususiyat mavjudligini tekshirib, alternatif stil beradi. Progressive enhancement uchun zarur.",
  },
  {
    id: 100,
    type: "amaliy",
    category: "Ilg'or mavzular",
    question: "Bu CSS o'zgaruvchilari bilan yaratilgan tema tizimi nima qiladi?",
    code: `@media (prefers-color-scheme: dark) {
  :root {
    --bg: #0d0d11;
    --text: #f0f0f8;
  }
}
:root {
  --bg: #ffffff;
  --text: #1a1a1a;
}`,
    options: [
      "Faqat qorong'i rejim ishlaydi",
      "Foydalanuvchining tizim sozlamasiga qarab avtomatik qorong'i/yorug' tema",
      "Har doim yorug' tema bo'ladi",
      "JavaScript kerak bo'ladi",
    ],
    correct: 1,
    explanation: "prefers-color-scheme — foydalanuvchining OS sozlamasini o'qiydi. CSS o'zgaruvchilari bilan birgalikda JS siz avtomatik dark/light mode yaratiladi.",
  },
];
