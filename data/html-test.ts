export interface TestQuestion {
  id: number;
  type: "nazariy" | "amaliy"; // nazariy = theory, amaliy = code-based
  category: string;
  question: string;
  code?: string; // optional code block shown above options
  options: string[];
  correct: number;
  explanation: string;
}

export const htmlTestQuestions: TestQuestion[] = [
  // ─── NAZARIY — Kirish (1-10) ────────────────────────────────────────────
  {
    id: 1,
    type: "nazariy",
    category: "Kirish",
    question: "HTML qisqartmasi nimani anglatadi?",
    options: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "HyperTool Multi Language",
      "HyperText Modern Language",
    ],
    correct: 0,
    explanation: "HTML — HyperText Markup Language. Veb-sahifalar yaratish uchun standart belgilash tili.",
  },
  {
    id: 2,
    type: "nazariy",
    category: "Kirish",
    question: "HTML kim tomonidan ixtiro qilingan?",
    options: ["Bill Gates", "Tim Berners-Lee", "Linus Torvalds", "Mark Zuckerberg"],
    correct: 1,
    explanation: "HTML 1991-yilda Tim Berners-Lee tomonidan ixtiro qilingan.",
  },
  {
    id: 3,
    type: "nazariy",
    category: "Kirish",
    question: "HTML ning hozirgi eng so'nggi versiyasi qaysi?",
    options: ["HTML 4", "HTML 4.01", "HTML 5", "HTML 6"],
    correct: 2,
    explanation: "HTML5 — hozirda keng qo'llaniladigan va rasmiy eng so'nggi versiya.",
  },
  {
    id: 4,
    type: "nazariy",
    category: "Kirish",
    question: "Brauzer HTML ni qanday qayta ishlaydi?",
    options: [
      "Kompilyatsiya qiladi",
      "Mashinaga tarjima qiladi",
      "Teglarni o'qib, ekranda element chizadi",
      "Serverga jo'natadi",
    ],
    correct: 2,
    explanation: "Brauzer HTML faylini o'qib, har bir tegni tushunadi va ekranda tegishli elementni ko'rsatadi.",
  },
  {
    id: 5,
    type: "nazariy",
    category: "Kirish",
    question: "HTML da 'teg' (tag) nima?",
    options: [
      "Brauzer nomi",
      "Burchakli qavslar ichidagi kalit so'z: &lt;html&gt;",
      "CSS xususiyati",
      "JavaScript funksiyasi",
    ],
    correct: 1,
    explanation: "Teg — burchakli qavslar ichida yoziladigan kalit so'z. Masalan: &lt;p&gt;, &lt;h1&gt;, &lt;div&gt;.",
  },
  {
    id: 6,
    type: "nazariy",
    category: "Kirish",
    question: "HTML da aksariyat teglar juft bo'ladi — ochuvchi va yopuvchi. Yopuvchi teg qanday yoziladi?",
    options: ["&lt;/teg&gt;", "&lt;teg/&gt;", "&lt;-teg&gt;", "&lt;!teg&gt;"],
    correct: 0,
    explanation: "Yopuvchi teg oldiga egri chiziq qo'yiladi: &lt;/p&gt;, &lt;/div&gt;, &lt;/h1&gt;.",
  },
  {
    id: 7,
    type: "nazariy",
    category: "Kirish",
    question: "O'z-o'zini yopuvchi (self-closing) teglarga misol qaysi?",
    options: ["&lt;p&gt;", "&lt;div&gt;", "&lt;br&gt; va &lt;img&gt;", "&lt;section&gt;"],
    correct: 2,
    explanation: "&lt;br&gt;, &lt;img&gt;, &lt;input&gt;, &lt;meta&gt;, &lt;link&gt; — o'z-o'zini yopuvchi teglar. Ularda kontent bo'lmaydi.",
  },
  {
    id: 8,
    type: "nazariy",
    category: "Kirish",
    question: "HTML, CSS va JavaScript qanday vazifalarni bajaradi?",
    options: [
      "HTML — ko'rinish, CSS — tuzilish, JS — animatsiya",
      "HTML — tuzilish, CSS — ko'rinish, JS — interaktivlik",
      "Uchala ham bir xil vazifani bajaradi",
      "HTML — server, CSS — klient, JS — ma'lumotlar bazasi",
    ],
    correct: 1,
    explanation: "HTML — tuzilish (skelet), CSS — ko'rinish (stil), JavaScript — interaktivlik (harakat).",
  },
  {
    id: 9,
    type: "nazariy",
    category: "Kirish",
    question: "HTML fayl qanday kengaytmada saqlanadi?",
    options: [".txt", ".htm yoki .html", ".css", ".js"],
    correct: 1,
    explanation: "HTML fayllar .html (yoki .htm) kengaytmasida saqlanadi. Brauzer bu kengaytmani taniydi.",
  },
  {
    id: 10,
    type: "nazariy",
    category: "Kirish",
    question: "HTML komment qanday yoziladi?",
    options: [
      "// Bu komment",
      "/* Bu komment */",
      "&lt;!-- Bu komment --&gt;",
      "# Bu komment",
    ],
    correct: 2,
    explanation: "HTML kommentlar &lt;!-- va --&gt; bilan yoziladi. Brauzer ularni ko'rsatmaydi.",
  },

  // ─── AMALIY — Tuzilish (11-20) ──────────────────────────────────────────
  {
    id: 11,
    type: "amaliy",
    category: "Tuzilish",
    question: "Quyidagi kodda DOCTYPE deklaratsiyasi to'g'rimi?",
    code: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>Sahifa</title>
</head>
<body>
  <p>Salom!</p>
</body>
</html>`,
    options: [
      "Ha, to'g'ri — bu HTML5 standarti",
      "Yo'q, DOCTYPE katta harf bilan yozilmasligi kerak",
      "Yo'q, DOCTYPE &lt;html&gt; dan keyin bo'lishi kerak",
      "Yo'q, DOCTYPE umuman kerak emas",
    ],
    correct: 0,
    explanation: "<!DOCTYPE html> — HTML5 ning to'g'ri DOCTYPE deklaratsiyasi. Faylning birinchi qatorida bo'lishi kerak.",
  },
  {
    id: 12,
    type: "amaliy",
    category: "Tuzilish",
    question: "Quyidagi kodda xato qayerda?",
    code: `<html>
  <body>
    <h1>Sarlavha</h1>
    <p>Paragraf</p>
  </body>
  <head>
    <title>Sahifa</title>
  </head>
</html>`,
    options: [
      "h1 tegi noto'g'ri",
      "&lt;head&gt; &lt;body&gt; dan keyin joylashgan — bu xato",
      "Paragraf noto'g'ri yozilgan",
      "Hech qanday xato yo'q",
    ],
    correct: 1,
    explanation: "&lt;head&gt; har doim &lt;body&gt; dan OLDIN bo'lishi kerak. To'g'ri tartib: html → head → body.",
  },
  {
    id: 13,
    type: "amaliy",
    category: "Tuzilish",
    question: "Sahifa sarlavhasini brauzer tabida ko'rsatish uchun qaysi teg ishlatiladi?",
    code: `<head>
  <meta charset="UTF-8">
  <???>"Learner.uz"</???>
</head>`,
    options: ["&lt;heading&gt;", "&lt;title&gt;", "&lt;caption&gt;", "&lt;label&gt;"],
    correct: 1,
    explanation: "&lt;title&gt; tegi — brauzer tab va qidiruv natijasida ko'rsatiladigan sarlavha. &lt;head&gt; ichida bo'ladi.",
  },
  {
    id: 14,
    type: "amaliy",
    category: "Tuzilish",
    question: "&lt;meta charset=\"UTF-8\"&gt; nima vazifani bajaradi?",
    options: [
      "Sahifa rangini belgilaydi",
      "Sahifa kodlashini belgilaydi — o'zbek, arab harflari to'g'ri ko'rinadi",
      "Sahifa muallifini ko'rsatadi",
      "CSS faylni ulaydi",
    ],
    correct: 1,
    explanation: "charset=\"UTF-8\" — belgilar kodlashini belgilaydi. Bu bo'lmasa, o'zbek, arab va boshqa milliy harflar noto'g'ri ko'rinadi.",
  },
  {
    id: 15,
    type: "amaliy",
    category: "Tuzilish",
    question: "Quyidagi &lt;meta&gt; tegi nima uchun kerak?",
    code: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`,
    options: [
      "Sahifa rangini boshqarish uchun",
      "Mobil qurilmalarda sahifa to'g'ri ko'rinishi uchun",
      "SEO uchun kalit so'zlar",
      "Sahifani shifrlash uchun",
    ],
    correct: 1,
    explanation: "viewport meta tegi — mobil qurilmalarda sahifa kengligini qurilma kengligiga moslashtiradi. Bu bo'lmasa, telefonda sahifa kichrayib ko'rinadi.",
  },
  {
    id: 16,
    type: "nazariy",
    category: "Tuzilish",
    question: "&lt;html lang=\"uz\"&gt; atributi nima uchun kerak?",
    options: [
      "Sahifani o'zbek tiliga tarjima qiladi",
      "Brauzerga, qidiruv tizimlariga va screen reader larga sahifa tilini bildiradi",
      "Faqat dizayn uchun",
      "JavaScript uchun kerak",
    ],
    correct: 1,
    explanation: "lang atributi sahifa tilini belgilaydi — screen reader (ko'zi ojizlar) to'g'ri talaffuz qiladi, SEO yaxshilanadi, brauzer tarjima taklifi chiqaradi.",
  },
  {
    id: 17,
    type: "amaliy",
    category: "Tuzilish",
    question: "Tashqi CSS faylni HTML ga ulashning to'g'ri usuli qaysi?",
    options: [
      '<code>&lt;style src="style.css"&gt;&lt;/style&gt;</code>',
      '<code>&lt;link rel="stylesheet" href="style.css"&gt;</code>',
      '<code>&lt;css href="style.css"&gt;</code>',
      '<code>&lt;import src="style.css"&gt;</code>',
    ],
    correct: 1,
    explanation: "&lt;link rel=\"stylesheet\" href=\"style.css\"&gt; — tashqi CSS faylni ulashning standart usuli. &lt;head&gt; ichida joylashadi.",
  },
  {
    id: 18,
    type: "amaliy",
    category: "Tuzilish",
    question: "JavaScript faylni HTML ga ulashning to'g'ri joyi qaysi?",
    options: [
      "&lt;head&gt; ichida, &lt;meta&gt; dan oldin",
      "&lt;title&gt; ichida",
      "&lt;body&gt; oxirida — &lt;/body&gt; dan oldin",
      "&lt;html&gt; dan tashqarida",
    ],
    correct: 2,
    explanation: "JS fayllar &lt;body&gt; oxirida ulanishi tavsiya etiladi — HTML tarkibi yuklanib bo'lgach JS ishlaydi, sahifa tezroq ko'rinadi.",
  },
  {
    id: 19,
    type: "amaliy",
    category: "Tuzilish",
    question: "Quyidagi kodda nima noto'g'ri?",
    code: `<body>
  <p>Birinchi paragraf
  <p>Ikkinchi paragraf</p>
</body>`,
    options: [
      "Birinchi &lt;p&gt; yopilmagan",
      "body tegi noto'g'ri",
      "Ikkinchi paragraf yopilmagan",
      "Hech qanday xato yo'q — HTML kechiradi",
    ],
    correct: 0,
    explanation: "Birinchi &lt;p&gt; yopilmagan. HTML ba'zida kechirsa ham, bu yomon amaliyot. Har bir ochilgan teg yopilishi kerak.",
  },
  {
    id: 20,
    type: "nazariy",
    category: "Tuzilish",
    question: "HTML da 'atribut' nima?",
    options: [
      "CSS xususiyati",
      "Tegga qo'shimcha ma'lumot beruvchi nom=\"qiymat\" juftligi",
      "JavaScript funksiyasi",
      "HTML versiyasi",
    ],
    correct: 1,
    explanation: "Atribut — tegga qo'shimcha ma'lumot beradi. Masalan: &lt;img src=\"rasm.jpg\" alt=\"Tavsif\"&gt; — src va alt atributlar.",
  },

  // ─── AMALIY — Matn elementlari (21-32) ──────────────────────────────────
  {
    id: 21,
    type: "amaliy",
    category: "Matn elementlari",
    question: "Sarlavha teglari qaysi tartibda ishlatilishi to'g'ri?",
    options: [
      "Istalgan tartibda — farqi yo'q",
      "h1 dan h6 gacha ierarxik — h1 eng muhim, h6 eng kichik",
      "Faqat h1 va h2 ishlatiladi",
      "h6 dan h1 gacha — kattadan kichikka",
    ],
    correct: 1,
    explanation: "Sarlavhalar h1 (eng muhim, bitta bo'lishi kerak) dan h6 gacha ierarxik. SEO va accessibility uchun muhim.",
  },
  {
    id: 22,
    type: "amaliy",
    category: "Matn elementlari",
    question: "Quyidagi kod nima ko'rsatadi?",
    code: `<p>Bu <strong>muhim</strong> va <em>ta'kidlangan</em> matn.</p>`,
    options: [
      "Bu muhim va ta'kidlangan matn — hammasi bir xil",
      "Bu <b>muhim</b> (qalin) va <i>ta'kidlangan</i> (kursiv) matn",
      "Xato — strong va em birgalikda ishlatilmaydi",
      "Faqat strong ko'rinadi",
    ],
    correct: 1,
    explanation: "&lt;strong&gt; matnni qalin (bold) ko'rsatadi va semantik muhimlik bildiradi. &lt;em&gt; kursiv (italic) va ta'kid bildiradi.",
  },
  {
    id: 23,
    type: "nazariy",
    category: "Matn elementlari",
    question: "&lt;strong&gt; va &lt;b&gt; ning farqi nima?",
    options: [
      "Farqi yo'q — ikkalasi ham qalin qiladi",
      "&lt;strong&gt; semantik muhimlik bildiradi, &lt;b&gt; faqat vizual qalinlik",
      "&lt;b&gt; kuchliroq qalinlashtiradi",
      "&lt;strong&gt; faqat sarlavhalarda ishlatiladi",
    ],
    correct: 1,
    explanation: "&lt;strong&gt; — semantik: screen reader 'muhim' deb o'qiydi. &lt;b&gt; — faqat vizual. Zamonaviy HTML da &lt;strong&gt; afzal.",
  },
  {
    id: 24,
    type: "amaliy",
    category: "Matn elementlari",
    question: "Yangi qatorga o'tish (line break) uchun qaysi teg ishlatiladi?",
    options: ["&lt;newline&gt;", "&lt;nl&gt;", "&lt;br&gt;", "&lt;lb&gt;"],
    correct: 2,
    explanation: "&lt;br&gt; — yangi qatorga o'tish tegi. O'z-o'zini yopadi, ichida kontent bo'lmaydi.",
  },
  {
    id: 25,
    type: "amaliy",
    category: "Matn elementlari",
    question: "Quyidagi kodda nima noto'g'ri?",
    code: `<h1>Asosiy sarlavha</h1>
<h1>Ikkinchi asosiy sarlavha</h1>
<h2>Kichik sarlavha</h2>`,
    options: [
      "h2 noto'g'ri ishlatilgan",
      "Sahifada ikki h1 bo'lmasligi kerak — SEO va accessibility uchun bitta h1 tavsiya etiladi",
      "h1 dan keyin h3 bo'lishi kerak edi",
      "Hech qanday xato yo'q",
    ],
    correct: 1,
    explanation: "Bir sahifada bitta h1 bo'lishi tavsiya etiladi — asosiy mavzu. Qidiruv tizimlari va screen reader lar h1 ni eng muhim sarlavha sifatida ko'radi.",
  },
  {
    id: 26,
    type: "amaliy",
    category: "Matn elementlari",
    question: "Kod ko'rsatish uchun qaysi teglar ishlatiladi?",
    code: `// Kod namunasini ko'rsatish:
<p>Python da <????>print()</????>  funksiyasi ishlatiladi.</p>`,
    options: ["&lt;pre&gt;", "&lt;kbd&gt;", "&lt;code&gt;", "&lt;var&gt;"],
    correct: 2,
    explanation: "&lt;code&gt; — inline kod uchun. Ko'p qatorli kod uchun &lt;pre&gt;&lt;code&gt; kombinatsiyasi ishlatiladi.",
  },
  {
    id: 27,
    type: "amaliy",
    category: "Matn elementlari",
    question: "Quyidagi kod qanday ko'rinadi brauzerda?",
    code: `<p>Narx: <del>50,000</del> <ins>35,000</ins> so'm</p>`,
    options: [
      "Narx: 50,000 35,000 so'm",
      "Narx: ~~50,000~~ 35,000 so'm",
      "Narx: <s>50,000</s> <u>35,000</u> so'm — chizilgan va ostiga chizilgan",
      "Xato — del va ins birgalikda ishlatilmaydi",
    ],
    correct: 2,
    explanation: "&lt;del&gt; matn ustidan chiziq (chegirmadan oldin), &lt;ins&gt; matnga osti chiziq (yangi narx) ko'rsatadi.",
  },
  {
    id: 28,
    type: "nazariy",
    category: "Matn elementlari",
    question: "&lt;abbr&gt; tegi qanday ishlatiladi?",
    options: [
      "Qisqartma so'zlar uchun — to'liq ma'noni title atributida ko'rsatadi",
      "Qo'shimcha matn qo'shadi",
      "Abzats yaratadi",
      "Kursiv ko'rsatadi",
    ],
    correct: 0,
    explanation: '&lt;abbr title="HyperText Markup Language"&gt;HTML&lt;/abbr&gt; — qisqartma so\'zlar uchun. Hover qilganda to\'liq ma\'no ko\'rinadi.',
  },
  {
    id: 29,
    type: "amaliy",
    category: "Matn elementlari",
    question: "Ko'p qatorli preformatted (formatlangan) matn uchun qaysi teg ishlatiladi?",
    code: `Kod bloki ko'rsatish:
<????>
  function salom() {
    console.log("Salom!");
  }
</????>`,
    options: ["&lt;text&gt;", "&lt;code&gt;", "&lt;pre&gt;", "&lt;block&gt;"],
    correct: 2,
    explanation: "&lt;pre&gt; — preformatted text. Bo'sh joylar, tab va yangi qatorlarni saqlaydi. Ko'pincha &lt;code&gt; bilan birgalikda ishlatiladi.",
  },
  {
    id: 30,
    type: "amaliy",
    category: "Matn elementlari",
    question: "Superscript va subscript uchun qaysi teglar ishlatiladi?",
    code: `// Matematik formula: H₂O va E=mc²
<p>H<???>2</????>O va E=mc<???>2</????></p>`,
    options: [
      "&lt;sub&gt; va &lt;sup&gt;",
      "&lt;low&gt; va &lt;high&gt;",
      "&lt;down&gt; va &lt;up&gt;",
      "&lt;small&gt; va &lt;big&gt;",
    ],
    correct: 0,
    explanation: "&lt;sub&gt; — pastga (subscript): H&lt;sub&gt;2&lt;/sub&gt;O. &lt;sup&gt; — yuqoriga (superscript): E=mc&lt;sup&gt;2&lt;/sup&gt;.",
  },
  {
    id: 31,
    type: "amaliy",
    category: "Matn elementlari",
    question: "Iqtibos (blockquote) qanday yoziladi?",
    code: `<????>"Bilim — kuch." — Frensis Bekon</????>`,
    options: ["&lt;quote&gt;", "&lt;blockquote&gt;", "&lt;cite&gt;", "&lt;q&gt;"],
    correct: 1,
    explanation: "&lt;blockquote&gt; — uzun iqtiboslar uchun block element. Qisqa inline iqtibos uchun &lt;q&gt; ishlatiladi.",
  },
  {
    id: 32,
    type: "nazariy",
    category: "Matn elementlari",
    question: "&lt;span&gt; va &lt;div&gt; ning asosiy farqi nima?",
    options: [
      "Farqi yo'q",
      "&lt;div&gt; — block element (yangi qator), &lt;span&gt; — inline element (oqimda)",
      "&lt;span&gt; — block, &lt;div&gt; — inline",
      "&lt;div&gt; faqat CSS uchun, &lt;span&gt; JS uchun",
    ],
    correct: 1,
    explanation: "&lt;div&gt; — block container (yangi qatordan boshlanadi, to'liq kenglik). &lt;span&gt; — inline container (matn ichida ishlatiladi).",
  },

  // ─── AMALIY — Havolalar (33-40) ─────────────────────────────────────────
  {
    id: 33,
    type: "amaliy",
    category: "Havolalar",
    question: "Havolaning to'g'ri sintaksisi qaysi?",
    options: [
      '&lt;a&gt;https://example.com&lt;/a&gt;',
      '&lt;a href="https://example.com"&gt;Bosing&lt;/a&gt;',
      '&lt;link href="https://example.com"&gt;Bosing&lt;/link&gt;',
      '&lt;url="https://example.com"&gt;Bosing&lt;/url&gt;',
    ],
    correct: 1,
    explanation: "Havola uchun &lt;a href=\"URL\"&gt;Matn&lt;/a&gt; sintaksisi. href atributi — havola manzili.",
  },
  {
    id: 34,
    type: "amaliy",
    category: "Havolalar",
    question: "Havolani yangi tabda ochish uchun qaysi atribut ishlatiladi?",
    code: `<a href="https://learner.uz" ???>Learner.uz</a>`,
    options: [
      'newtab="true"',
      'open="new"',
      'target="_blank"',
      'window="new"',
    ],
    correct: 2,
    explanation: 'target="_blank" — havolani yangi tabda ochadi. Xavfsizlik uchun rel="noopener noreferrer" ham qo\'shilishi tavsiya etiladi.',
  },
  {
    id: 35,
    type: "amaliy",
    category: "Havolalar",
    question: "Bir xil sahifa ichidagi bo'limga o'tish (anchor link) qanday yoziladi?",
    code: `<!-- Maqsad element -->
<h2 id="kirish">Kirish</h2>

<!-- Havola -->
<a href="???">Kirishga o'tish</a>`,
    options: [
      '"kirish"',
      '"#kirish"',
      '"id:kirish"',
      '"@kirish"',
    ],
    correct: 1,
    explanation: 'href="#id-nomi" — sahifa ichidagi elementga o\'tish. Element id="id-nomi" atributiga ega bo\'lishi kerak.',
  },
  {
    id: 36,
    type: "amaliy",
    category: "Havolalar",
    question: "Email havola qanday yoziladi?",
    options: [
      '&lt;a href="email@example.com"&gt;Yozing&lt;/a&gt;',
      '&lt;a href="mailto:email@example.com"&gt;Yozing&lt;/a&gt;',
      '&lt;a href="mail:email@example.com"&gt;Yozing&lt;/a&gt;',
      '&lt;email href="email@example.com"&gt;Yozing&lt;/email&gt;',
    ],
    correct: 1,
    explanation: 'href="mailto:email@example.com" — email dasturini ochadi. Telefon uchun href="tel:+998901234567".',
  },
  {
    id: 37,
    type: "amaliy",
    category: "Havolalar",
    question: "Nisbiy (relative) va mutlaq (absolute) URL farqi nima?",
    code: `<!-- Variant A -->
<a href="/about">Haqida</a>

<!-- Variant B -->
<a href="https://example.com/about">Haqida</a>`,
    options: [
      "Ikkalasi ham bir xil",
      "A — nisbiy (xuddi shu sayt), B — mutlaq (to'liq URL). A tezroq va qulay",
      "B — nisbiy, A — mutlaq",
      "Faqat B to'g'ri — mutlaq URL har doim kerak",
    ],
    correct: 1,
    explanation: "Nisbiy URL (A) — bir xil sayt ichidagi sahifalar uchun qulay, sayt ko'chirilganda ham ishlaydi. Mutlaq URL (B) — tashqi saytlarga.",
  },
  {
    id: 38,
    type: "nazariy",
    category: "Havolalar",
    question: 'rel="noopener noreferrer" nima uchun kerak?',
    options: [
      "Havola rangini o'zgartiradi",
      'target="_blank" bilan xavfsizlikni ta\'minlaydi — ochilgan sahifa asosiy sahifani boshqara olmaydi',
      "SEO uchun zarur",
      "Hech qanday ta'siri yo'q",
    ],
    correct: 1,
    explanation: 'target="_blank" bilan ochilgan sahifa window.opener orqali asosiy sahifani boshqarishi mumkin. rel="noopener noreferrer" bu xavfni bartaraf etadi.',
  },
  {
    id: 39,
    type: "amaliy",
    category: "Havolalar",
    question: "Faylni yuklab olish uchun havola qanday yoziladi?",
    options: [
      '&lt;a href="file.pdf" download&gt;Yuklab olish&lt;/a&gt;',
      '&lt;a href="file.pdf" save&gt;Yuklab olish&lt;/a&gt;',
      '&lt;a href="file.pdf" type="download"&gt;Yuklab olish&lt;/a&gt;',
      '&lt;download href="file.pdf"&gt;Yuklab olish&lt;/download&gt;',
    ],
    correct: 0,
    explanation: "download atributi — havola bosqanda fayl yuklab olinadi. download=\"ism.pdf\" bilan nom ham berilishi mumkin.",
  },
  {
    id: 40,
    type: "amaliy",
    category: "Havolalar",
    question: "Quyidagi kodda nima noto'g'ri?",
    code: `<a>Bosing</a>`,
    options: [
      "Hech qanday xato yo'q",
      "Matn yo'q",
      "href atributi yo'q — bu havola emas",
      "a tegi noto'g'ri yozilgan",
    ],
    correct: 2,
    explanation: "href atributisiz &lt;a&gt; tegi havola bo'lmaydi. href bo'lmasa element interaktiv bo'lmaydi, brauzer uni oddiy matn sifatida ko'rsatadi.",
  },

  // ─── AMALIY — Rasmlar (41-46) ───────────────────────────────────────────
  {
    id: 41,
    type: "amaliy",
    category: "Rasmlar",
    question: "Rasm qo'yishning to'g'ri usuli qaysi?",
    options: [
      '&lt;image src="rasm.jpg"&gt;',
      '&lt;img src="rasm.jpg" alt="Rasm tavsifi"&gt;',
      '&lt;img href="rasm.jpg"&gt;&lt;/img&gt;',
      '&lt;picture src="rasm.jpg"/&gt;',
    ],
    correct: 1,
    explanation: '&lt;img src="rasm.jpg" alt="tavsif"&gt; — to\'g\'ri sintaksis. src — fayl yo\'li, alt — muqobil matn (accessibility uchun muhim).',
  },
  {
    id: 42,
    type: "nazariy",
    category: "Rasmlar",
    question: "alt atributi nima uchun kerak?",
    options: [
      "Rasm o'lchami uchun",
      "Ko'zi ojizlar uchun screen reader matnni o'qiydi; rasm yuklanmasa ham matn ko'rinadi",
      "Rasm nomini ko'rsatadi",
      "CSS uchun kerak",
    ],
    correct: 1,
    explanation: "alt atributi: 1) Screen reader ko'zi ojizlarga matnni o'qiydi; 2) Rasm yuklanmasa alt matni ko'rinadi; 3) SEO uchun muhim.",
  },
  {
    id: 43,
    type: "amaliy",
    category: "Rasmlar",
    question: "Rasm o'lchamini HTML da belgilash uchun:",
    code: `<img src="logo.png" alt="Logo" ??? ???>`,
    options: [
      'size="200x100"',
      'width="200" height="100"',
      'dimension="200,100"',
      'w="200" h="100"',
    ],
    correct: 1,
    explanation: 'width va height atributlari — rasm o\'lchamini pikselda belgilaydi. Bu sahifaning tezroq yuklanishiga yordam beradi (layout shift kamayadiy).',
  },
  {
    id: 44,
    type: "amaliy",
    category: "Rasmlar",
    question: "Dekorativ rasm (ma'nosiz) uchun alt qanday yoziladi?",
    options: [
      'alt="Rasm"',
      'alt="dekorativ"',
      'alt="" (bo\'sh alt)',
      "alt atributini umuman qo'ymaslik",
    ],
    correct: 2,
    explanation: "Dekorativ rasmlar uchun alt=\"\" (bo'sh) qo'yiladi. Screen reader bo'sh alt ni ko'rsa o'tib ketadi. alt siz qoldirish — screen reader fayl nomini o'qiydi.",
  },
  {
    id: 45,
    type: "amaliy",
    category: "Rasmlar",
    question: "Havola bo'lib ishlovchi rasm qanday yoziladi?",
    code: `<a href="https://learner.uz">
  <img src="logo.png" alt="Learner.uz">
</a>`,
    options: [
      "Xato — rasm havola bo'la olmaydi",
      "To'g'ri — &lt;a&gt; ichiga &lt;img&gt; joylashtiriladi",
      "Faqat JavaScript bilan bo'ladi",
      "img ga href atributi qo'shish kerak",
    ],
    correct: 1,
    explanation: "&lt;a&gt; ichiga &lt;img&gt; joylashtirilsa, rasm bosqanda havola ochiladi. Bu to'g'ri va keng ishlatiladigan usul.",
  },
  {
    id: 46,
    type: "nazariy",
    category: "Rasmlar",
    question: "Veb uchun qaysi rasm formati eng yaxshi siqilish nisbatini beradi?",
    options: ["PNG", "BMP", "WebP", "TIFF"],
    correct: 2,
    explanation: "WebP — Google tomonidan ishlab chiqilgan, JPEG dan 25-35% kichikroq, PNG dan kichikroq. Zamonaviy brauzerlar qo'llaydi.",
  },

  // ─── AMALIY — Ro'yxatlar (47-52) ────────────────────────────────────────
  {
    id: 47,
    type: "amaliy",
    category: "Ro'yxatlar",
    question: "Tartiblangan (numbered) ro'yxat qanday yaratiladi?",
    options: [
      "&lt;ul&gt;&lt;li&gt;...&lt;/li&gt;&lt;/ul&gt;",
      "&lt;ol&gt;&lt;li&gt;...&lt;/li&gt;&lt;/ol&gt;",
      "&lt;list&gt;&lt;item&gt;...&lt;/item&gt;&lt;/list&gt;",
      "&lt;dl&gt;&lt;dt&gt;...&lt;/dt&gt;&lt;/dl&gt;",
    ],
    correct: 1,
    explanation: "&lt;ol&gt; — ordered list (tartiblangan, raqamli). &lt;ul&gt; — unordered (tartibsiz, nuqtali).",
  },
  {
    id: 48,
    type: "amaliy",
    category: "Ro'yxatlar",
    question: "Quyidagi kodda nima noto'g'ri?",
    code: `<ul>
  <div>HTML</div>
  <div>CSS</div>
  <div>JavaScript</div>
</ul>`,
    options: [
      "ul tegi noto'g'ri",
      "ul ichida faqat li elementlar bo'lishi kerak — div emas",
      "div o'rniga p bo'lishi kerak edi",
      "Hech qanday xato yo'q",
    ],
    correct: 1,
    explanation: "&lt;ul&gt; va &lt;ol&gt; ichida faqat &lt;li&gt; elementlar bo'lishi kerak. Bu HTML standartining talabi.",
  },
  {
    id: 49,
    type: "amaliy",
    category: "Ro'yxatlar",
    question: "Ichma-ich (nested) ro'yxat qanday to'g'ri yoziladi?",
    code: `<ul>
  <li>Frontend
    ???
      <li>HTML</li>
      <li>CSS</li>
    ???
  </li>
</ul>`,
    options: [
      "&lt;list&gt; va &lt;/list&gt;",
      "&lt;inner&gt; va &lt;/inner&gt;",
      "&lt;ul&gt; va &lt;/ul&gt;",
      "&lt;sub&gt; va &lt;/sub&gt;",
    ],
    correct: 2,
    explanation: "Ichma-ich ro'yxat uchun &lt;li&gt; ichiga yangi &lt;ul&gt; yoki &lt;ol&gt; joylashtiriladi.",
  },
  {
    id: 50,
    type: "nazariy",
    category: "Ro'yxatlar",
    question: "Atamalar ro'yxati (&lt;dl&gt;) qanday strukturaga ega?",
    options: [
      "&lt;dl&gt;&lt;li&gt;...&lt;/li&gt;&lt;/dl&gt;",
      "&lt;dl&gt;&lt;dt&gt;Atama&lt;/dt&gt;&lt;dd&gt;Ta'rif&lt;/dd&gt;&lt;/dl&gt;",
      "&lt;dl&gt;&lt;term&gt;...&lt;/term&gt;&lt;/dl&gt;",
      "&lt;dl&gt;&lt;key&gt;...&lt;/key&gt;&lt;/dl&gt;",
    ],
    correct: 1,
    explanation: "&lt;dl&gt; — definition list. &lt;dt&gt; — atama (term), &lt;dd&gt; — ta'rif (description). Lug'at, FAQ kabi tarkiblar uchun.",
  },
  {
    id: 51,
    type: "amaliy",
    category: "Ro'yxatlar",
    question: "&lt;ol&gt; ning type atributi nima uchun ishlatiladi?",
    code: `<ol type="A">
  <li>Birinchi</li>
  <li>Ikkinchi</li>
</ol>`,
    options: [
      "Ro'yxat rangini belgilaydi",
      "Ro'yxat ko'rinishini: 1, A, a, I, i — belgilaydi",
      "Ro'yxat o'lchamini belgilaydi",
      "type atributi ol da ishlamaydi",
    ],
    correct: 1,
    explanation: 'type atributi: "1" (default, raqam), "A" (katta harf), "a" (kichik harf), "I" (rim raqami katta), "i" (rim raqami kichik).',
  },
  {
    id: 52,
    type: "amaliy",
    category: "Ro'yxatlar",
    question: "Quyidagi nav menyusi to'g'ri yozilganmi?",
    code: `<nav>
  <ul>
    <li><a href="/">Bosh sahifa</a></li>
    <li><a href="/about">Haqida</a></li>
    <li><a href="/contact">Aloqa</a></li>
  </ul>
</nav>`,
    options: [
      "Yo'q — nav ichida ul bo'lmasligi kerak",
      "Ha — bu navigatsiya menyusining to'g'ri semantik usuli",
      "Yo'q — a teglar to'g'ridan-to'g'ri nav ichida bo'lishi kerak",
      "Yo'q — div ishlatilishi kerak edi",
    ],
    correct: 1,
    explanation: "&lt;nav&gt;&lt;ul&gt;&lt;li&gt;&lt;a&gt; — navigatsiya menyusining to'g'ri semantik tuzilishi. Accessibility va SEO uchun ideal.",
  },

  // ─── AMALIY — Jadvallar (53-58) ─────────────────────────────────────────
  {
    id: 53,
    type: "amaliy",
    category: "Jadvallar",
    question: "Jadval sarlavha katagiga qaysi teg ishlatiladi?",
    code: `<table>
  <tr>
    <???>Ism</????>
    <???>Yosh</????>
  </tr>
</table>`,
    options: ["&lt;td&gt;", "&lt;th&gt;", "&lt;thead&gt;", "&lt;caption&gt;"],
    correct: 1,
    explanation: "&lt;th&gt; — table header. Qalin va markazda ko'rsatiladi, semantik ahamiyati bor. &lt;td&gt; — oddiy kataklар uchun.",
  },
  {
    id: 54,
    type: "amaliy",
    category: "Jadvallar",
    question: "Jadval katagi bir necha ustunni birlashtirishi uchun qaysi atribut ishlatiladi?",
    code: `<td ???="3">Bu katak 3 ustunni egallaydi</td>`,
    options: ["merge", "colspan", "rowspan", "span"],
    correct: 1,
    explanation: "colspan — gorizontal birlashtirish (ustunlar). rowspan — vertikal birlashtirish (qatorlar).",
  },
  {
    id: 55,
    type: "amaliy",
    category: "Jadvallar",
    question: "Jadvalning to'g'ri tuzilishi qaysi?",
    options: [
      "&lt;table&gt;&lt;td&gt;&lt;tr&gt;...&lt;/tr&gt;&lt;/td&gt;&lt;/table&gt;",
      "&lt;table&gt;&lt;tr&gt;&lt;td&gt;...&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;",
      "&lt;table&gt;&lt;row&gt;&lt;cell&gt;...&lt;/cell&gt;&lt;/row&gt;&lt;/table&gt;",
      "&lt;table&gt;&lt;col&gt;&lt;td&gt;...&lt;/td&gt;&lt;/col&gt;&lt;/table&gt;",
    ],
    correct: 1,
    explanation: "To'g'ri tartib: table → tr (row) → td/th (cell). tr to'g'ridan-to'g'ri table ichida, td/th esa tr ichida bo'ladi.",
  },
  {
    id: 56,
    type: "amaliy",
    category: "Jadvallar",
    question: "Jadval sarlavhasi, tana va oyoq qismi uchun qaysi teglar ishlatiladi?",
    options: [
      "&lt;thead&gt;, &lt;tbody&gt;, &lt;tfoot&gt;",
      "&lt;header&gt;, &lt;body&gt;, &lt;footer&gt;",
      "&lt;th&gt;, &lt;td&gt;, &lt;tf&gt;",
      "&lt;table-head&gt;, &lt;table-body&gt;, &lt;table-foot&gt;",
    ],
    correct: 0,
    explanation: "&lt;thead&gt; (sarlavha qatori), &lt;tbody&gt; (asosiy ma'lumotlar), &lt;tfoot&gt; (yig'indi, jami) — semantik jadval tuzilishi.",
  },
  {
    id: 57,
    type: "nazariy",
    category: "Jadvallar",
    question: "Jadval qachon ishlatilishi kerak?",
    options: [
      "Faqat layout (sahifa tuzilishi) uchun",
      "Jadval ma'lumotlari (tabular data) — ustun va qator ko'rinishidagi ma'lumotlar uchun",
      "Rasm ko'rsatish uchun",
      "Navigatsiya menyusi uchun",
    ],
    correct: 1,
    explanation: "Jadval faqat tabular data uchun: hisobot, jadval, narxlar ro'yxati. Sahifa layouti uchun jadval ishlatish — eski va noto'g'ri usul.",
  },
  {
    id: 58,
    type: "amaliy",
    category: "Jadvallar",
    question: "Jadvalga sarlavha (caption) qo'shish uchun:",
    code: `<table>
  <???>Talabalar ro'yxati</????>
  <tr>...</tr>
</table>`,
    options: ["&lt;title&gt;", "&lt;caption&gt;", "&lt;heading&gt;", "&lt;label&gt;"],
    correct: 1,
    explanation: "&lt;caption&gt; — jadval sarlavhasi. &lt;table&gt; ichida birinchi element sifatida joylashadi. Accessibility uchun muhim.",
  },

  // ─── AMALIY — Formalar (59-68) ───────────────────────────────────────────
  {
    id: 59,
    type: "amaliy",
    category: "Formalar",
    question: "Forma qanday yaratiladi va qaysi atributlar kerak?",
    code: `<form ??? ??? >
  ...
</form>`,
    options: [
      'url="/submit" type="post"',
      'action="/submit" method="post"',
      'href="/submit" send="post"',
      'target="/submit" way="post"',
    ],
    correct: 1,
    explanation: 'action — ma\'lumot yuboriladigan URL. method — "get" (URL da) yoki "post" (body da, xavfsiz). Ikkalasi ham muhim.',
  },
  {
    id: 60,
    type: "amaliy",
    category: "Formalar",
    question: "Input bilan label ni bog'lashning to'g'ri usuli:",
    code: `<label ???="email">Email</label>
<input type="email" ???="email">`,
    options: [
      'name va id',
      'for va id',
      'link va name',
      'target va class',
    ],
    correct: 1,
    explanation: '&lt;label for="id"&gt; va &lt;input id="id"&gt; — label ni input ga bog\'laydi. Label bosqanda input fokus oladi. Accessibility uchun zarur.',
  },
  {
    id: 61,
    type: "amaliy",
    category: "Formalar",
    question: "Quyidagi input turlari to'g'ri ishlatilganmi?",
    code: `<input type="email" placeholder="email@example.com">
<input type="password" placeholder="Parol">
<input type="number" min="1" max="100">
<input type="date">`,
    options: [
      "Yo'q — input type faqat text bo'lishi kerak",
      "Ha — barchasi to'g'ri HTML5 input turlari",
      "Faqat email va password to'g'ri",
      "type atributi shart emas",
    ],
    correct: 1,
    explanation: "HTML5 da ko'plab input turlari: email, password, number, date, tel, url, color, range va boshqalar. Mobil klaviatura ham mos ko'rinadi.",
  },
  {
    id: 62,
    type: "amaliy",
    category: "Formalar",
    question: "Majburiy maydon (required) qanday belgilanadi?",
    code: `<input type="text" name="ism" ???>`,
    options: [
      'mandatory="true"',
      'required',
      'must="true"',
      'validate="required"',
    ],
    correct: 1,
    explanation: "required atributi — bu maydon to'ldirilishi shart. Forma yuborilishda brauzer o'zi tekshiradi.",
  },
  {
    id: 63,
    type: "amaliy",
    category: "Formalar",
    question: "Checkbox va radio button farqi nima?",
    options: [
      "Farqi yo'q",
      "Checkbox — bir nechta tanlov, radio — faqat bitta tanlov (bir guruhdan)",
      "Radio — bir nechta, checkbox — bitta",
      "Checkbox faqat forma uchun, radio hamma uchun",
    ],
    correct: 1,
    explanation: "Checkbox — bir nechta variant tanlanishi mumkin. Radio — bir guruhdan faqat bitta tanlov (name atributi bir xil bo'lishi kerak).",
  },
  {
    id: 64,
    type: "amaliy",
    category: "Formalar",
    question: "Ochiladigan ro'yxat (dropdown) qanday yaratiladi?",
    code: `<select name="kurs">
  <option value="html">HTML</option>
  <option value="css" ???>CSS</option>
  <option value="js">JavaScript</option>
</select>`,
    options: [
      '"default" atributi bilan',
      '"selected" atributi bilan oldindan tanlangan',
      '"active" atributi bilan',
      '"checked" atributi bilan',
    ],
    correct: 1,
    explanation: 'selected atributi — sahifa yuklanganida oldindan tanlangan option. Radio va checkbox uchun checked ishlatiladi.',
  },
  {
    id: 65,
    type: "amaliy",
    category: "Formalar",
    question: "Ko'p qatorli matn kiritish uchun qaysi element ishlatiladi?",
    options: [
      '&lt;input type="multiline"&gt;',
      '&lt;text&gt;&lt;/text&gt;',
      '&lt;textarea rows="4" cols="50"&gt;&lt;/textarea&gt;',
      '&lt;input type="textarea"&gt;',
    ],
    correct: 2,
    explanation: "&lt;textarea&gt; — ko'p qatorli matn kiritish uchun. rows va cols atributlari o'lchamini belgilaydi.",
  },
  {
    id: 66,
    type: "amaliy",
    category: "Formalar",
    question: "Forma yuborish tugmasi uchun qaysi ikki usul to'g'ri?",
    options: [
      '&lt;button send&gt; va &lt;input submit&gt;',
      '&lt;button type="submit"&gt; va &lt;input type="submit"&gt;',
      '&lt;form-button&gt; va &lt;send-btn&gt;',
      '&lt;a href="#"&gt; bilan ham bo\'ladi&lt;/a&gt;',
    ],
    correct: 1,
    explanation: 'Forma yuborish: &lt;button type="submit"&gt;Yuborish&lt;/button&gt; yoki &lt;input type="submit" value="Yuborish"&gt;. Button da HTML kontent bo\'lishi mumkin.',
  },
  {
    id: 67,
    type: "amaliy",
    category: "Formalar",
    question: "Fayl yuklash input qanday yoziladi?",
    code: `<input ???="file" name="rasm" accept="image/*">`,
    options: ["name", "type", "src", "format"],
    correct: 1,
    explanation: 'type="file" — fayl yuklash input. accept atributi — qabul qilinadigan fayl turlari: "image/*", ".pdf", ".jpg,.png".',
  },
  {
    id: 68,
    type: "amaliy",
    category: "Formalar",
    question: "Forma elementlarini guruhlash uchun qaysi teg ishlatiladi?",
    code: `<form>
  <?????>
    <legend>Shaxsiy ma'lumotlar</legend>
    <input type="text" placeholder="Ism">
    <input type="email" placeholder="Email">
  </?????>
</form>`,
    options: ["&lt;group&gt;", "&lt;section&gt;", "&lt;fieldset&gt;", "&lt;div&gt;"],
    correct: 2,
    explanation: "&lt;fieldset&gt; — forma elementlarini mantiqiy guruhlash uchun. &lt;legend&gt; — guruh sarlavhasi. Accessibility uchun muhim.",
  },

  // ─── NAZARIY — Semantik HTML (69-76) ────────────────────────────────────
  {
    id: 69,
    type: "nazariy",
    category: "Semantik HTML",
    question: "Semantik HTML nima va nima uchun muhim?",
    options: [
      "Faqat dizayn uchun ishlatiladi",
      "Mazmunni ifodalovchi teglar — SEO, accessibility va kodni o'qish uchun muhim",
      "JavaScript uchun kerak",
      "Faqat qidiruv tizimlari uchun",
    ],
    correct: 1,
    explanation: "Semantik HTML — teglar o'z mazmunini ifodalaydi. &lt;article&gt; maqola, &lt;nav&gt; navigatsiya. Qidiruv tizimlari, screen reader va dasturchilar uchun foydali.",
  },
  {
    id: 70,
    type: "amaliy",
    category: "Semantik HTML",
    question: "Quyidagi sahifa tuzilishida semantik teglar to'g'ri ishlatilganmi?",
    code: `<header>
  <nav>...</nav>
</header>
<main>
  <article>
    <h1>Maqola</h1>
    <p>...</p>
  </article>
  <aside>...</aside>
</main>
<footer>...</footer>`,
    options: [
      "Yo'q — header, main, footer o'rniga div ishlatilishi kerak",
      "Ha — to'g'ri semantik tuzilish",
      "Faqat header to'g'ri",
      "article ichida h1 bo'lmasligi kerak",
    ],
    correct: 1,
    explanation: "Bu to'g'ri semantik tuzilish: header (sarlavha), nav (navigatsiya), main (asosiy kontent), article (maqola), aside (yon panel), footer (pastki qism).",
  },
  {
    id: 71,
    type: "nazariy",
    category: "Semantik HTML",
    question: "&lt;article&gt; va &lt;section&gt; ning farqi nima?",
    options: [
      "Farqi yo'q — ikkalasi bir xil",
      "&lt;article&gt; — mustaqil kontent (alohida ma'noga ega), &lt;section&gt; — mavzuviy guruh",
      "&lt;section&gt; — mustaqil, &lt;article&gt; — bog'liq",
      "&lt;article&gt; faqat yangiliklar uchun",
    ],
    correct: 1,
    explanation: "&lt;article&gt; — alohida o'qilishi mumkin kontent (blog post, yangilik). &lt;section&gt; — sahifaning mavzuviy bo'limi (kirish, xususiyatlar, aloqa).",
  },
  {
    id: 72,
    type: "nazariy",
    category: "Semantik HTML",
    question: "&lt;aside&gt; tegi qanday hollarda ishlatiladi?",
    options: [
      "Faqat sidebar uchun",
      "Asosiy kontentga bog'liq lekin uning bir qismi bo'lmagan kontent: sidebar, reklama, qo'shimcha ma'lumot",
      "Footer uchun",
      "Navigatsiya uchun",
    ],
    correct: 1,
    explanation: "&lt;aside&gt; — asosiy kontentga qo'shimcha, lekin uning bir qismi bo'lmagan kontent. Sidebar, qo'shimcha havolalar, reklama.",
  },
  {
    id: 73,
    type: "amaliy",
    category: "Semantik HTML",
    question: "Quyidagi kodning qaysi varianti to'g'riroq semantik?",
    code: `// Variant A:
<div class="nav">
  <div class="nav-item">HTML</div>
</div>

// Variant B:
<nav>
  <ul>
    <li>HTML</li>
  </ul>
</nav>`,
    options: [
      "A — div universal, istalgan joyda ishlatiladi",
      "B — to'g'ri semantik navigatsiya tuzilishi",
      "Ikkalasi ham to'g'ri",
      "B xato — nav ichida ul bo'lmasligi kerak",
    ],
    correct: 1,
    explanation: "B variant — semantik. &lt;nav&gt; navigatsiyani bildiradi, &lt;ul&gt;&lt;li&gt; ro'yxat. Screen reader va qidiruv tizimlari B ni yaxshiroq tushunadi.",
  },
  {
    id: 74,
    type: "nazariy",
    category: "Semantik HTML",
    question: "&lt;time&gt; tegi qanday ishlatiladi?",
    code: `<time datetime="2024-03-15">15 Mart 2024</time>`,
    options: [
      "Soat ko'rsatish uchun faqat",
      "Mashinalar o'qiy oladigan format (datetime) bilan insonlarga ko'rsatiladigan vaqt",
      "CSS animatsiya uchun",
      "JavaScript timer uchun",
    ],
    correct: 1,
    explanation: "&lt;time&gt; — sana va vaqt uchun semantik teg. datetime atributi mashinalar (qidiruv tizimlari, kalendarlar) uchun standart formatda.",
  },
  {
    id: 75,
    type: "amaliy",
    category: "Semantik HTML",
    question: "Sahifada ko'p marta ishlatiladigan mustaqil UI komponenti uchun qaysi teg mos?",
    options: [
      "&lt;section&gt;",
      "&lt;div&gt;",
      "&lt;article&gt;",
      "&lt;component&gt;",
    ],
    correct: 2,
    explanation: "&lt;article&gt; — sahifaning boshqa qismidan ajralib turuvchi mustaqil kontent. Karta, blog posti, kommentariy — bularning har biri article bo'lishi mumkin.",
  },
  {
    id: 76,
    type: "nazariy",
    category: "Semantik HTML",
    question: "ARIA (Accessible Rich Internet Applications) nima?",
    options: [
      "CSS framework",
      "JavaScript kutubxonasi",
      "Ko'zi ojizlar va nogironlar uchun veb elementlarni yaxshiroq tasvirlovchi atributlar to'plami",
      "HTML5 ning bir versiyasi",
    ],
    correct: 2,
    explanation: "ARIA — role, aria-label, aria-hidden kabi atributlar. Screen reader larga dinamik kontent va murakkab UI komponentlarni tushuntiradi.",
  },

  // ─── AMALIY — Media va ilg'or (77-86) ───────────────────────────────────
  {
    id: 77,
    type: "amaliy",
    category: "Media",
    question: "Video qo'yish uchun to'g'ri kod qaysi?",
    code: `<video ???="autoplay" ???="controls">
  <source src="video.mp4" type="video/mp4">
  Brauzer video ni qo'llab-quvvatlamaydi.
</video>`,
    options: [
      "play va buttons",
      "autoplay va controls atributlari",
      "src va type",
      "media va player",
    ],
    correct: 1,
    explanation: "&lt;video&gt; atributlari: controls (boshqaruv paneli), autoplay (avtomatik boshlash), loop (takrorlash), muted (ovozsiz). &lt;source&gt; — video fayl.",
  },
  {
    id: 78,
    type: "amaliy",
    category: "Media",
    question: "Iframe ichida tashqi sahifani ko'rsatish:",
    code: `<iframe
  src="https://www.youtube.com/embed/VIDEO_ID"
  width="560"
  height="315"
  ???="accelerometer; autoplay"
  ???="0"
></iframe>`,
    options: [
      'allow va frameborder',
      'permissions va border',
      'access va frame',
      'settings va outline',
    ],
    correct: 0,
    explanation: 'allow — iframe ichiga ruxsat beriladigan funksiyalar. frameborder="0" — chegara yo\'q. YouTube embed uchun standart atributlar.',
  },
  {
    id: 79,
    type: "amaliy",
    category: "Media",
    question: "Audio qo'yish uchun:",
    code: `<audio controls>
  <source src="music.mp3" type="audio/mpeg">
  <source src="music.ogg" type="audio/ogg">
</audio>`,
    options: [
      "Xato — audio faqat bitta source bo'lishi kerak",
      "To'g'ri — bir necha format berilgan, brauzer mosini tanlaydi",
      "Xato — audio tegi mavjud emas",
      "controls atributi kerak emas",
    ],
    correct: 1,
    explanation: "Bir necha &lt;source&gt; berilsa brauzer birinchi qo'llab-quvvatlaydigan formatni tanlaydi. Bu cross-browser muammodan himoya qiladi.",
  },
  {
    id: 80,
    type: "amaliy",
    category: "Ilg'or mavzular",
    question: "data-* atributlari nima uchun ishlatiladi?",
    code: `<div class="card" data-id="42" data-category="html">
  ...
</div>

<script>
  const card = document.querySelector('.card');
  console.log(card.dataset.id); // ???
</script>`,
    options: [
      "Faqat CSS uchun",
      "Custom ma'lumotlarni elementda saqlash — JS da dataset orqali o'qiladi. '42' chiqadi",
      "Backend uchun",
      "Sahifa metama'lumotlari uchun",
    ],
    correct: 1,
    explanation: "data-* atributlari — HTML elementda custom ma'lumot saqlash. JS da el.dataset.id bilan o'qiladi. Jadvallar, kartalar, filtrlarda keng ishlatiladi.",
  },
  {
    id: 81,
    type: "amaliy",
    category: "Ilg'or mavzular",
    question: "&lt;template&gt; tegi nima uchun ishlatiladi?",
    options: [
      "Sahifa shabloni uchun — ko'p sahifada qayta ishlatiladi",
      "Brauzer ko'rsatmaydigan, JavaScript orqali klonlanadigan HTML kontent",
      "CSS shablonlari uchun",
      "Server tomonida ishlaydi",
    ],
    correct: 1,
    explanation: "&lt;template&gt; — brauzer ko'rsatmaydi, lekin DOM da mavjud. JavaScript bilan klonlanib sahifaga qo'shiladi. Web Components asosi.",
  },
  {
    id: 82,
    type: "amaliy",
    category: "Ilg'or mavzular",
    question: "contenteditable atributi nima qiladi?",
    code: `<div contenteditable="true">
  Bu matni bosib tahrirlang!
</div>`,
    options: [
      "Elementni o'chiradi",
      "Foydalanuvchi elementdagi kontentni to'g'ridan-to'g'ri tahrirlashi mumkin",
      "Element rangini o'zgartiradi",
      "Element o'lchamini o'zgartiradi",
    ],
    correct: 1,
    explanation: "contenteditable='true' — elementni tahrirlash imkonini beradi. Oddiy matn muharriri yasash, WYSIWYG editor asosi.",
  },
  {
    id: 83,
    type: "amaliy",
    category: "Ilg'or mavzular",
    question: "tabindex atributi nima uchun kerak?",
    options: [
      "Jadval ustun raqami uchun",
      "Tab tugmasi bilan navigatsiya tartibini boshqarish — accessibility uchun muhim",
      "CSS z-index bilan bog'liq",
      "JavaScript funksiyasi",
    ],
    correct: 1,
    explanation: "tabindex — Tab tugmasi bilan element fokusga kiradimi va qaysi tartibda. tabindex='0' — tabiiy tartib. tabindex='-1' — Tab bilan emas, faqat JS bilan.",
  },
  {
    id: 84,
    type: "amaliy",
    category: "SEO va Meta",
    question: "Open Graph teglari qanday maqsadda ishlatiladi?",
    code: `<meta property="og:title" content="Learner.uz">
<meta property="og:image" content="/og-image.png">`,
    options: [
      "Sahifa ko'rinishi uchun",
      "Ijtimoiy tarmoqlarda (Telegram, Facebook) ulashganda ko'rinadigan karta",
      "Google qidiruvida",
      "Email uchun",
    ],
    correct: 1,
    explanation: "Open Graph — Telegram, Facebook, Twitter da havola ulashganda chiroyli karta ko'rsatadi: sarlavha, tavsif, rasm.",
  },
  {
    id: 85,
    type: "nazariy",
    category: "SEO va Meta",
    question: "SEO uchun title va description qanday bo'lishi optimal?",
    options: [
      "Title 200+, description 500+ belgi",
      "Title 50-60 belgi, description 120-160 belgi",
      "Title va description o'lchami muhim emas",
      "Title 10-20 belgi, description 50-60 belgi",
    ],
    correct: 1,
    explanation: "Google title ni 50-60 belgidan keyin kesib ko'rsatadi. Description 120-160 belgida qidiruv natijasida to'liq ko'rinadi.",
  },
  {
    id: 86,
    type: "amaliy",
    category: "SEO va Meta",
    question: "robots meta tegi nima uchun kerak?",
    code: `<meta name="robots" content="noindex, nofollow">`,
    options: [
      "Bot uchun CAPTCHA",
      "Qidiruv botiga sahifani indekslamaslik va havolalarni kuzatmaslik buyrug'i",
      "Robot animatsiyasi uchun",
      "Serverga buyruq",
    ],
    correct: 1,
    explanation: "noindex — qidiruv natijasida ko'rsatma. nofollow — sahifadagi havolalarni kuzatma. Login, shaxsiy sahifalar uchun ishlatiladi.",
  },

  // ─── AMALIY — Murakkab kod (87-100) ─────────────────────────────────────
  {
    id: 87,
    type: "amaliy",
    category: "Kod tahlili",
    question: "Quyidagi kodda qancha xato bor?",
    code: `<!DOCTYPE HTML>
<HTML>
<HEAD>
<TITLE>Sahifa</TITLE>
<HEAD>
<BODY>
<P>Matn</P>
</BODY>
</HTML>`,
    options: [
      "0 ta — HTML katta harfda ham yoziladi",
      "1 ta — DOCTYPE xato",
      "2 ta — HEAD yopilmagan, katta harflar",
      "Texnik xato yo'q, lekin katta harflar yomon amaliyot; HEAD yopilmagan — HEAD noto'g'ri joylashgan",
    ],
    correct: 3,
    explanation: "HTML teglar katta harfda ham ishlaydi, lekin standart kichik harf. Asosiy xato: birinchi &lt;HEAD&gt; yopilmagan (&lt;/HEAD&gt; o'rniga ikkinchi &lt;HEAD&gt; ochilgan).",
  },
  {
    id: 88,
    type: "amaliy",
    category: "Kod tahlili",
    question: "Quyidagi forma to'liq ishlashi uchun nimalar kerak?",
    code: `<form>
  <input type="text" placeholder="Ism">
  <input type="email" placeholder="Email">
  <button>Yuborish</button>
</form>`,
    options: [
      "Hech narsa kerak emas — to'liq",
      "action va method atributlari kerak; inputlarda name atributi bo'lmasa server ma'lumot olmaydi",
      "Faqat method kerak",
      "JavaScript kerak",
    ],
    correct: 1,
    explanation: "form ga action (qayerga yuborish) va method kerak. Input larda name atributi bo'lmasa server ularni taniy olmaydi. required ham qo'shilishi tavsiya etiladi.",
  },
  {
    id: 89,
    type: "amaliy",
    category: "Kod tahlili",
    question: "Bu jadval qanday ko'rinadi?",
    code: `<table>
  <tr>
    <th colspan="2">Ism va Familiya</th>
    <th>Yosh</th>
  </tr>
  <tr>
    <td>Ali</td>
    <td>Valiyev</td>
    <td>25</td>
  </tr>
</table>`,
    options: [
      "3 ta sarlavha, 3 ta kataк — oddiy jadval",
      "Birinchi qatorda 2 ta katак (Ism va Familiya birlashgan) va Yosh; ikkinchi qatorda 3 ta katак",
      "Xato — colspan ishlatib bo'lmaydi",
      "Faqat 2 ustun ko'rinadi",
    ],
    correct: 1,
    explanation: "colspan='2' — 'Ism va Familiya' sarlavhasi 2 ustunni egallaydi. Jadvalda 3 ustun bor: Ism, Familiya, Yosh.",
  },
  {
    id: 90,
    type: "amaliy",
    category: "Kod tahlili",
    question: "Quyidagi havolalar to'g'ri yozilganmi?",
    code: `<a href="tel:+998901234567">📞 Qo'ng'iroq</a>
<a href="mailto:info@learner.uz">✉️ Email</a>
<a href="#about">Haqida</a>
<a href="/kurs/html" target="_blank" rel="noopener">HTML kursi</a>`,
    options: [
      "Yo'q — to'rtala havola xato",
      "Ha — barchasi to'g'ri yozilgan va yaxshi amaliyotlarga rioya qilgan",
      "Faqat birinchi ikki havola to'g'ri",
      "target='_blank' bilan rel='noopener' bo'lmasligi kerak",
    ],
    correct: 1,
    explanation: "Barcha havolalar to'g'ri: tel: va mailto: protokollari, #anchor sahifa ichida, target='_blank' bilan rel='noopener' xavfsizlik uchun.",
  },
  {
    id: 91,
    type: "amaliy",
    category: "Kod tahlili",
    question: "Quyidagi &lt;picture&gt; elementi nima qiladi?",
    code: `<picture>
  <source media="(min-width: 1024px)" srcset="hero-large.jpg">
  <source media="(min-width: 640px)" srcset="hero-medium.jpg">
  <img src="hero-small.jpg" alt="Hero rasm">
</picture>`,
    options: [
      "Rasmni uch marta ko'rsatadi",
      "Ekran o'lchamiga qarab eng mos rasmni tanlaydi — responsive image",
      "Xato — picture tegi mavjud emas",
      "Faqat birinchi source ishlatiladi",
    ],
    correct: 1,
    explanation: "&lt;picture&gt; — responsive image. Katta ekranda hero-large.jpg, o'rtada hero-medium.jpg, kichikda hero-small.jpg ko'rsatadi. Performans uchun muhim.",
  },
  {
    id: 92,
    type: "amaliy",
    category: "Kod tahlili",
    question: "Quyidagi kod accessibility jihatidan to'g'rimi?",
    code: `<button onclick="menu()">
  <img src="hamburger.svg">
</button>`,
    options: [
      "Ha — to'liq to'g'ri",
      "Yo'q — img da alt yo'q; button da aria-label yo'q — screen reader nima ekanini bilmaydi",
      "Yo'q — button ichida img bo'lmasligi kerak",
      "Yo'q — onclick inline ishlatilmasligi kerak",
    ],
    correct: 1,
    explanation: 'Accessibility muammo: img da alt yo\'q, button ga aria-label kerak. To\'g\'ri: &lt;button aria-label="Menyuni ochish"&gt;&lt;img src="..." alt=""&gt;&lt;/button&gt;',
  },
  {
    id: 93,
    type: "amaliy",
    category: "Kod tahlili",
    question: "Bu textarea to'g'ri yozilganmi?",
    code: `<label for="xabar">Xabaringiz:</label>
<textarea
  id="xabar"
  name="xabar"
  rows="5"
  maxlength="500"
  placeholder="Xabaringizni yozing..."
  required
></textarea>`,
    options: [
      "Yo'q — label va textarea bog'liq emas",
      "Ha — barcha muhim atributlar to'g'ri ishlatilgan",
      "Yo'q — textarea rows o'rniga height ishlatishi kerak",
      "Yo'q — maxlength textarea da ishlamaydi",
    ],
    correct: 1,
    explanation: "To'g'ri: for/id bog'liq, name server uchun, rows vizual o'lcham, maxlength belgi chegarasi, placeholder ko'rsatma, required majburiy.",
  },
  {
    id: 94,
    type: "amaliy",
    category: "Kod tahlili",
    question: "Quyidagi kodda nima noto'g'ri?",
    code: `<ul>
  <li>HTML</li>
  <p>CSS ham muhim</p>
  <li>JavaScript</li>
</ul>`,
    options: [
      "Hech narsa noto'g'ri",
      "&lt;ul&gt; ichida &lt;p&gt; bo'lishi noto'g'ri — faqat &lt;li&gt; bo'lishi kerak",
      "&lt;li&gt; soni kam",
      "ul o'rniga ol bo'lishi kerak",
    ],
    correct: 1,
    explanation: "&lt;ul&gt; va &lt;ol&gt; ichiga faqat &lt;li&gt; joylashtirilishi mumkin. &lt;p&gt; &lt;li&gt; ichida bo'lishi esa mumkin.",
  },
  {
    id: 95,
    type: "amaliy",
    category: "Kod tahlili",
    question: "Bu kodda foydalanuvchi kurs tanlashi uchun qaysi input tipi mos?",
    code: `// Foydalanuvchi faqat BITTA kursni tanlashi kerak:
// HTML, CSS, JavaScript

<input type="???" name="kurs" value="html"> HTML
<input type="???" name="kurs" value="css"> CSS
<input type="???" name="kurs" value="js"> JavaScript`,
    options: [
      "checkbox",
      "radio",
      "select",
      "text",
    ],
    correct: 1,
    explanation: "Radio button — bir guruhdan faqat bitta tanlov. name atributi bir xil bo'lishi kerak. Bir nechtasini tanlash uchun checkbox ishlatiladi.",
  },
  {
    id: 96,
    type: "amaliy",
    category: "Kod tahlili",
    question: "Quyidagi lazy loading kodi nima qiladi?",
    code: `<img
  src="hero.jpg"
  alt="Hero rasm"
  loading="lazy"
  width="800"
  height="400"
>`,
    options: [
      "Rasmni sekin ko'rsatadi",
      "Rasm ekranga yaqinlashganda yuklanadi — sahifa tezlashadi",
      "Rasm sifatini pasaytiradi",
      "Rasmni kechiktirib ko'rsatadi",
    ],
    correct: 1,
    explanation: 'loading="lazy" — rasm viewport ga yaqinlashganda yuklanadi. Sahifadagi ko\'p rasm bo\'lsa boshlang\'ich yuklanish tezlashadi.',
  },
  {
    id: 97,
    type: "nazariy",
    category: "Yaxshi amaliyotlar",
    question: "HTML da indentation (tekislash) nima uchun muhim?",
    options: [
      "Brauzer tezroq ishlaydi",
      "Kod o'qilishi yaxshilanadi, ichma-ich teglar tuzilishi aniq ko'rinadi",
      "SEO yaxshilanadi",
      "JavaScript tezroq ishlaydi",
    ],
    correct: 1,
    explanation: "Indentation — kodni o'qish va texnik xizmat ko'rsatishni osonlashtiradi. Brauzer uchun farqi yo'q, lekin dasturchi uchun muhim.",
  },
  {
    id: 98,
    type: "amaliy",
    category: "Yaxshi amaliyotlar",
    question: "HTML validator nima uchun kerak?",
    options: [
      "Sahifa dizaynini tekshiradi",
      "HTML kodda xato va standartdan og'ishlarni topadi — validator.w3.org",
      "JavaScript xatolarni tekshiradi",
      "Sahifa tezligini o'lchaydi",
    ],
    correct: 1,
    explanation: "validator.w3.org — W3C rasmiy HTML validator. Yopilmagan teglar, noto'g'ri joylashtirishlar, eskirgan atributlarni topadi.",
  },
  {
    id: 99,
    type: "amaliy",
    category: "Yaxshi amaliyotlar",
    question: "Quyidagi ikki koddan qaysi biri yaxshiroq va nima uchun?",
    code: `// Variant A:
<div class="btn" onclick="bosish()">Bosing</div>

// Variant B:
<button type="button" onclick="bosing()">Bosing</button>`,
    options: [
      "A — div universal element",
      "B — button tugma uchun semantik element: klaviatura bilan ishlaydi, accessibility to'g'ri, Enter/Space bilan bosiladi",
      "Ikkalasi bir xil",
      "A tezroq ishlaydi",
    ],
    correct: 1,
    explanation: "Button semantik: klaviatura (Enter/Space) bilan bosiladi, screen reader 'tugma' deydi, focus oladi. Div-button uchun qo'shimcha role='button' va tabindex kerak bo'ladi.",
  },
  {
    id: 100,
    type: "amaliy",
    category: "Yaxshi amaliyotlar",
    question: "To'liq va to'g'ri minimal HTML5 sahifa tuzilishi qaysi?",
    code: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sahifam</title>
</head>
<body>
  <h1>Salom dunyo!</h1>
</body>
</html>`,
    options: [
      "Yo'q — link rel='stylesheet' yo'q",
      "Ha — bu to'liq va to'g'ri minimal HTML5 sahifa",
      "Yo'q — DOCTYPE kerak emas",
      "Yo'q — meta charset kerak emas",
    ],
    correct: 1,
    explanation: "Bu to'liq minimal HTML5: DOCTYPE, html+lang, head (charset, viewport, title), body (kontent). CSS va JS ixtiyoriy — minimal versiya ana shu.",
  },
];
