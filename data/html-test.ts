export interface TestQuestion {
  id: number;
  type: "nazariy" | "amaliy" | "kodlash";
  category: string;
  question: string;
  code?: string;
  options: string[];
  correct: number;
  explanation: string;
  // kodlash type fields
  starterCode?: string;
  solution?: string;
  hint?: string;
  checkCode?: string; // JS code run in iframe to validate; returns {pass:bool, message:string}
}

const htmlTestBaseQuestions: TestQuestion[] = [
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
    question: "Ko'p qatorli matnni o'z holicha ko'rsatish uchun qaysi teg ishlatiladi?",
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
    question: "Sahifa ichida bir bo'limdan boshqasiga o'tish uchun href qanday boshlanadi?",
    code: `<h2 id="kirish">Kirish</h2>

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
    question: "Qaysi havola turi to'liq domen bilan yoziladi?",
    code: `<a href="/about">Haqida</a>

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
    question: "Zamonaviy vebda kichik hajm uchun ko'p ishlatiladigan rasm formati qaysi?",
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
    question: "Ichki ro'yxatni qayerga joylashtirish to'g'ri?",
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
    question: "Lug'at ko'rinishidagi ro'yxat uchun qaysi juft teglar ishlatiladi?",
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
    question: "Jadvalda katakni gorizontal kengaytirish uchun qaysi atribut ishlatiladi?",
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
    question: "Forma yuborish uchun form tegi ichida eng muhim 2 atribut qaysilar?",
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
    question: "Faqat bitta variant tanlash kerak bo'lsa qaysi input turi ishlatiladi?",
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
    question: "&lt;article&gt; odatda qaysi holatda ishlatiladi?",
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
    question: "&lt;time&gt; tegida mashina o'qiydigan sana qaysi atributda yoziladi?",
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
    question: "Alohida o'qilishi mumkin bo'lgan kontent bloki uchun qaysi teg mos?",
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
    question: "ARIA atributlari asosan nima uchun ishlatiladi?",
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
    question: "Sahifaga video qo'shish uchun asosiy teg qaysi?",
    code: `<video controls>
  <source src="video.mp4" type="video/mp4">
  Brauzer video ni qo'llab-quvvatlamaydi.
</video>`,
    options: [
      "&lt;media&gt;",
      "&lt;video&gt;",
      "&lt;movie&gt;",
      "&lt;player&gt;",
    ],
    correct: 1,
    explanation: "Video qo'shish uchun &lt;video&gt; ishlatiladi. Ichida &lt;source&gt; bilan fayl manzili beriladi.",
  },
  {
    id: 78,
    type: "amaliy",
    category: "Media",
    question: "Tashqi sahifani joylash (embed) qilish uchun qaysi teg ishlatiladi?",
    code: `<iframe src="https://www.youtube.com/embed/VIDEO_ID"></iframe>`,
    options: [
      "&lt;embed&gt;",
      "&lt;frame&gt;",
      "&lt;iframe&gt;",
      "&lt;object&gt;",
    ],
    correct: 2,
    explanation: "Tashqi sahifa yoki video embed qilish uchun odatda &lt;iframe&gt; ishlatiladi.",
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
    question: "HTML elementga qo'shimcha custom ma'lumot biriktirish uchun qaysi atribut turi ishlatiladi?",
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
    question: "&lt;template&gt; ichidagi kontent odatda qachon ko'rinadi?",
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
    question: "contenteditable='true' bo'lsa nima bo'ladi?",
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
    question: "Tab tugmasi bilan fokus tartibini boshqarishda qaysi atribut ishlatiladi?",
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
    question: "Havola Telegram/Facebook da chiroyli preview bo'lib chiqishi uchun qaysi meta teglardan foydalaniladi?",
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
    question: "Qidiruv botlariga indekslash bo'yicha ko'rsatma berish uchun qaysi meta teg ishlatiladi?",
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
    question: "Bu formada serverga ma'lumot yuborilishi uchun nima qo'shish muhim?",
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
    question: "colspan='2' bu jadvalda nimani anglatadi?",
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
    question: "&lt;picture&gt; tegi asosan nima uchun ishlatiladi?",
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
    question: "Bu tugma screen reader uchun to'liq tushunarli bo'lishi uchun nima yetishmayapti?",
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
    question: "loading='lazy' atributi rasmga qanday ta'sir qiladi?",
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
    question: "HTML kodni chiroyli tekislab yozishning asosiy foydasi nima?",
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

const removedQuestionIds = new Set([
  29, 35, 37, 46, 49, 50, 54, 59, 63, 71, 74, 75, 76, 77, 78, 80, 81, 82, 83, 84, 86, 88, 89, 91, 92, 96, 97,
]);

const htmlCodingQuestions: TestQuestion[] = [
  // ─── KODLASH — Asoslar (101-110) ─────────────────────────────────────────
  {
    id: 101,
    type: "kodlash",
    category: "Asoslar",
    question: "Ekranda <strong>\"Salom, Dunyo!\"</strong> deb chiqaruvchi to'liq HTML sahifa yarating. h1 teg ishlatng.",
    options: [], correct: 0, explanation: "",
    starterCode: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>Test</title>
</head>
<body>

</body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>Test</title>
</head>
<body>
  <h1>Salom, Dunyo!</h1>
</body>
</html>`,
    checkCode: `
      const h1 = document.querySelector('h1');
      if (!h1) return { pass: false, message: "h1 teg topilmadi" };
      if (!h1.textContent.trim().includes('Salom')) return { pass: false, message: "h1 ichida 'Salom' so'zi yo'q" };
      return { pass: true, message: "Zo'r! h1 teg to'g'ri yozildi" };
    `,
  },
  {
    id: 102,
    type: "kodlash",
    category: "Asoslar",
    question: "Uchta sarlavha darajasini ko'rsating: <strong>h1</strong> — \"HTML\", <strong>h2</strong> — \"CSS\", <strong>h3</strong> — \"JavaScript\"",
    options: [], correct: 0, explanation: "",
    starterCode: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>

</body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <h1>HTML</h1>
  <h2>CSS</h2>
  <h3>JavaScript</h3>
</body>
</html>`,
    checkCode: `
      const h1 = document.querySelector('h1');
      const h2 = document.querySelector('h2');
      const h3 = document.querySelector('h3');
      if (!h1 || !h2 || !h3) return { pass: false, message: "h1, h2 va h3 teglarning barchasi kerak" };
      if (!h1.textContent.includes('HTML')) return { pass: false, message: "h1 ichida 'HTML' bo'lishi kerak" };
      if (!h2.textContent.includes('CSS')) return { pass: false, message: "h2 ichida 'CSS' bo'lishi kerak" };
      if (!h3.textContent.includes('JavaScript')) return { pass: false, message: "h3 ichida 'JavaScript' bo'lishi kerak" };
      return { pass: true, message: "Ajoyib! Uchala sarlavha to'g'ri" };
    `,
  },
  {
    id: 103,
    type: "kodlash",
    category: "Asoslar",
    question: "Ikki abzas (paragraph) yarating: birinchisi — \"HTML o'rganish qiziqarli.\", ikkinchisi — \"Har kuni mashq qiling.\"",
    options: [], correct: 0, explanation: "",
    starterCode: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>

</body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <p>HTML o'rganish qiziqarli.</p>
  <p>Har kuni mashq qiling.</p>
</body>
</html>`,
    checkCode: `
      const ps = document.querySelectorAll('p');
      if (ps.length < 2) return { pass: false, message: "Kamida 2 ta p teg kerak, " + ps.length + " ta topildi" };
      const texts = Array.from(ps).map(p => p.textContent.trim());
      const hasFirst = texts.some(t => t.includes("HTML") || t.includes("o'rganish"));
      const hasSecond = texts.some(t => t.includes("mashq") || t.includes("Har kuni"));
      if (!hasFirst) return { pass: false, message: "Birinchi abzasda 'HTML o'rganish' bo'lishi kerak" };
      if (!hasSecond) return { pass: false, message: "Ikkinchi abzasda 'Har kuni mashq' bo'lishi kerak" };
      return { pass: true, message: "Barakalla! Ikki abzas to'g'ri yozildi" };
    `,
  },
  {
    id: 104,
    type: "kodlash",
    category: "Linklar va rasmlar",
    question: "Google ga o'tadigan link yarating. Matn — \"Google ga o'tish\", href — \"https://google.com\", yangi oynada ochilsin.",
    options: [], correct: 0, explanation: "",
    starterCode: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>

</body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <a href="https://google.com" target="_blank">Google ga o'tish</a>
</body>
</html>`,
    checkCode: `
      const a = document.querySelector('a');
      if (!a) return { pass: false, message: "a teg topilmadi" };
      if (!a.href.includes('google')) return { pass: false, message: "href google.com bo'lishi kerak" };
      if (a.target !== '_blank') return { pass: false, message: "target='_blank' qo'shing (yangi oynada ochilishi uchun)" };
      return { pass: true, message: "Zo'r! Link to'g'ri sozlandi" };
    `,
  },
  {
    id: 105,
    type: "kodlash",
    category: "Linklar va rasmlar",
    question: "Rasm tegini to'g'ri yozing. src=\"photo.jpg\", alt=\"Mening rasmim\", width=\"300\"",
    options: [], correct: 0, explanation: "",
    starterCode: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>

</body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <img src="photo.jpg" alt="Mening rasmim" width="300">
</body>
</html>`,
    checkCode: `
      const img = document.querySelector('img');
      if (!img) return { pass: false, message: "img teg topilmadi" };
      if (!img.alt || !img.alt.includes('rasm')) return { pass: false, message: "alt atributida 'rasm' so'zi bo'lishi kerak" };
      if (!img.width || img.width < 200) return { pass: false, message: "width='300' qo'shing" };
      return { pass: true, message: "Ajoyib! img teg to'g'ri yozildi" };
    `,
  },
  {
    id: 106,
    type: "kodlash",
    category: "Ro'yxatlar",
    question: "Tartibsiz ro'yxat (ul) yarating: 3 ta element — \"HTML\", \"CSS\", \"JavaScript\"",
    options: [], correct: 0, explanation: "",
    starterCode: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>

</body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
  </ul>
</body>
</html>`,
    checkCode: `
      const ul = document.querySelector('ul');
      if (!ul) return { pass: false, message: "ul teg topilmadi" };
      const items = ul.querySelectorAll('li');
      if (items.length < 3) return { pass: false, message: "3 ta li teg kerak, " + items.length + " ta topildi" };
      const texts = Array.from(items).map(i => i.textContent.trim());
      if (!texts.some(t => t === 'HTML')) return { pass: false, message: "'HTML' li elementi topilmadi" };
      if (!texts.some(t => t === 'CSS')) return { pass: false, message: "'CSS' li elementi topilmadi" };
      if (!texts.some(t => t.includes('JavaScript'))) return { pass: false, message: "'JavaScript' li elementi topilmadi" };
      return { pass: true, message: "Zo'r! Ro'yxat to'g'ri yaratildi" };
    `,
  },
  {
    id: 107,
    type: "kodlash",
    category: "Ro'yxatlar",
    question: "Tartiblangan ro'yxat (ol) yarating: \"Birinchi qadam\", \"Ikkinchi qadam\", \"Uchinchi qadam\"",
    options: [], correct: 0, explanation: "",
    starterCode: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>

</body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <ol>
    <li>Birinchi qadam</li>
    <li>Ikkinchi qadam</li>
    <li>Uchinchi qadam</li>
  </ol>
</body>
</html>`,
    checkCode: `
      const ol = document.querySelector('ol');
      if (!ol) return { pass: false, message: "ol teg topilmadi" };
      const items = ol.querySelectorAll('li');
      if (items.length < 3) return { pass: false, message: "3 ta li teg kerak" };
      return { pass: true, message: "Barakalla! Tartiblangan ro'yxat tayyor" };
    `,
  },
  {
    id: 108,
    type: "kodlash",
    category: "Jadvallar",
    question: "2 ustun, 2 satrli jadval yarating. Sarlavhalar: \"Ism\" va \"Yosh\". Ma'lumot: \"Ali\" — \"20\", \"Vali\" — \"25\"",
    options: [], correct: 0, explanation: "",
    starterCode: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <table border="1">

  </table>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <table border="1">
    <thead>
      <tr><th>Ism</th><th>Yosh</th></tr>
    </thead>
    <tbody>
      <tr><td>Ali</td><td>20</td></tr>
      <tr><td>Vali</td><td>25</td></tr>
    </tbody>
  </table>
</body>
</html>`,
    checkCode: `
      const table = document.querySelector('table');
      if (!table) return { pass: false, message: "table teg topilmadi" };
      const tds = table.querySelectorAll('td, th');
      if (tds.length < 4) return { pass: false, message: "Kamida 4 ta katak (td/th) kerak" };
      const allText = table.textContent;
      if (!allText.includes('Ali')) return { pass: false, message: "'Ali' ma'lumoti topilmadi" };
      if (!allText.includes('Ism')) return { pass: false, message: "'Ism' sarlavhasi topilmadi" };
      return { pass: true, message: "Ajoyib! Jadval to'g'ri yaratildi" };
    `,
  },
  {
    id: 109,
    type: "kodlash",
    category: "Formalar",
    question: "Ism kiritish uchun forma yarating: label — \"Ismingiz:\", input type=\"text\", placeholder=\"Ali\", va submit tugma — \"Yuborish\"",
    options: [], correct: 0, explanation: "",
    starterCode: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <form>

  </form>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <form>
    <label>Ismingiz: <input type="text" placeholder="Ali"></label>
    <button type="submit">Yuborish</button>
  </form>
</body>
</html>`,
    checkCode: `
      const form = document.querySelector('form');
      if (!form) return { pass: false, message: "form teg topilmadi" };
      const input = form.querySelector('input[type="text"], input:not([type])');
      if (!input) return { pass: false, message: "type='text' bo'lgan input topilmadi" };
      const btn = form.querySelector('button[type="submit"], input[type="submit"], button');
      if (!btn) return { pass: false, message: "Submit tugma topilmadi" };
      const label = form.querySelector('label');
      if (!label) return { pass: false, message: "label teg topilmadi" };
      return { pass: true, message: "Zo'r! Forma to'g'ri yaratildi" };
    `,
  },
  {
    id: 110,
    type: "kodlash",
    category: "Formalar",
    question: "Hovuz (checkbox) va radio tugmalar: \"Futbol\" va \"Basketbol\" checkboxlari, \"Erkak\" va \"Ayol\" radiolari",
    options: [], correct: 0, explanation: "",
    starterCode: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <form>
    <p>Sport:</p>

    <p>Jinsi:</p>

  </form>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <form>
    <p>Sport:</p>
    <label><input type="checkbox" name="sport" value="futbol"> Futbol</label>
    <label><input type="checkbox" name="sport" value="basketbol"> Basketbol</label>
    <p>Jinsi:</p>
    <label><input type="radio" name="jins" value="erkak"> Erkak</label>
    <label><input type="radio" name="jins" value="ayol"> Ayol</label>
  </form>
</body>
</html>`,
    checkCode: `
      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      const radios = document.querySelectorAll('input[type="radio"]');
      if (checkboxes.length < 2) return { pass: false, message: "2 ta checkbox kerak" };
      if (radios.length < 2) return { pass: false, message: "2 ta radio tugma kerak" };
      const radioNames = new Set(Array.from(radios).map(r => r.name));
      if (radioNames.size !== 1) return { pass: false, message: "Radio tugmalar bir xil name ga ega bo'lishi kerak" };
      return { pass: true, message: "Mukammal! Checkbox va radio to'g'ri ishlaydi" };
    `,
  },

  // ─── KODLASH — Semantika (111-118) ────────────────────────────────────────
  {
    id: 111,
    type: "kodlash",
    category: "Semantika",
    question: "Semantik tuzilma yarating: header — \"Mening saytim\", nav — 3 ta link, main — bitta paragraph, footer — \"© 2024\"",
    options: [], correct: 0, explanation: "",
    starterCode: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>

</body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <header><h1>Mening saytim</h1></header>
  <nav>
    <a href="#">Bosh sahifa</a>
    <a href="#">Haqida</a>
    <a href="#">Aloqa</a>
  </nav>
  <main><p>Asosiy kontent bu yerda.</p></main>
  <footer>© 2024</footer>
</body>
</html>`,
    checkCode: `
      const header = document.querySelector('header');
      const nav = document.querySelector('nav');
      const main = document.querySelector('main');
      const footer = document.querySelector('footer');
      if (!header) return { pass: false, message: "header teg topilmadi" };
      if (!nav) return { pass: false, message: "nav teg topilmadi" };
      if (!main) return { pass: false, message: "main teg topilmadi" };
      if (!footer) return { pass: false, message: "footer teg topilmadi" };
      const navLinks = nav.querySelectorAll('a');
      if (navLinks.length < 3) return { pass: false, message: "nav ichida 3 ta link kerak" };
      return { pass: true, message: "Ajoyib! Semantik tuzilma to'g'ri" };
    `,
  },
  {
    id: 112,
    type: "kodlash",
    category: "Semantika",
    question: "Maqola tuzilmasi yarating: sarlavha va uning ostida bo'lim, bo'lim ichida abzas bo'lsin.",
    options: [], correct: 0, explanation: "",
    starterCode: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>

</body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <article>
    <h2>HTML nima?</h2>
    <section>
      <p>HTML — veb-sahifalar yaratish tilidir.</p>
    </section>
  </article>
</body>
</html>`,
    checkCode: `
      const article = document.querySelector('article');
      const section = document.querySelector('section');
      if (!article) return { pass: false, message: "article teg topilmadi" };
      if (!section) return { pass: false, message: "section teg topilmadi" };
      if (!article.contains(section)) return { pass: false, message: "section article ichida bo'lishi kerak" };
      const h = article.querySelector('h1,h2,h3,h4,h5,h6');
      if (!h) return { pass: false, message: "article ichida sarlavha (h2 va boshqalar) kerak" };
      return { pass: true, message: "Zo'r! article va section to'g'ri ishlatildi" };
    `,
  },
  {
    id: 113,
    type: "kodlash",
    category: "Semantika",
    question: "figure va figcaption ishlatib rasm qo'shing. Rasm: src=\"nature.jpg\", alt=\"Tabiat\". Tavsif: \"Go'zal tabiat manzarasi\"",
    options: [], correct: 0, explanation: "",
    starterCode: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>

</body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <figure>
    <img src="nature.jpg" alt="Tabiat">
    <figcaption>Go'zal tabiat manzarasi</figcaption>
  </figure>
</body>
</html>`,
    checkCode: `
      const figure = document.querySelector('figure');
      if (!figure) return { pass: false, message: "figure teg topilmadi" };
      const img = figure.querySelector('img');
      if (!img) return { pass: false, message: "figure ichida img topilmadi" };
      const caption = figure.querySelector('figcaption');
      if (!caption) return { pass: false, message: "figcaption topilmadi" };
      if (!caption.textContent.trim()) return { pass: false, message: "figcaption bo'sh bo'lmasligi kerak" };
      return { pass: true, message: "Barakalla! figure to'g'ri ishlatildi" };
    `,
  },
  {
    id: 114,
    type: "kodlash",
    category: "Semantika",
    question: "aside va address teglarini ishlatng. aside — \"Qo'shimcha ma'lumot\". address — \"Toshkent, O'zbekiston\"",
    options: [], correct: 0, explanation: "",
    starterCode: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>

</body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <aside><p>Qo'shimcha ma'lumot</p></aside>
  <address>Toshkent, O'zbekiston</address>
</body>
</html>`,
    checkCode: `
      const aside = document.querySelector('aside');
      const address = document.querySelector('address');
      if (!aside) return { pass: false, message: "aside teg topilmadi" };
      if (!address) return { pass: false, message: "address teg topilmadi" };
      if (!aside.textContent.trim()) return { pass: false, message: "aside bo'sh bo'lmasligi kerak" };
      if (!address.textContent.includes('Toshkent')) return { pass: false, message: "address ichida 'Toshkent' bo'lishi kerak" };
      return { pass: true, message: "Zo'r! aside va address to'g'ri" };
    `,
  },
  {
    id: 115,
    type: "kodlash",
    category: "Semantika",
    question: "Matn formatlash: strong (\"muhim\"), em (\"ta'kid\"), mark (\"belgilangan\"), code (\"console.log()\") teglarini ishlating",
    options: [], correct: 0, explanation: "",
    starterCode: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <p>

  </p>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <p>
    Bu <strong>muhim</strong> ma'lumot.
    <em>Ta'kid</em> uchun em ishlatiladi.
    <mark>Belgilangan</mark> matn.
    Kod: <code>console.log()</code>
  </p>
</body>
</html>`,
    checkCode: `
      if (!document.querySelector('strong')) return { pass: false, message: "strong teg topilmadi" };
      if (!document.querySelector('em')) return { pass: false, message: "em teg topilmadi" };
      if (!document.querySelector('mark')) return { pass: false, message: "mark teg topilmadi" };
      if (!document.querySelector('code')) return { pass: false, message: "code teg topilmadi" };
      return { pass: true, message: "Mukammal! Barcha matn formatlash teglari to'g'ri" };
    `,
  },
  {
    id: 116,
    type: "kodlash",
    category: "Semantika",
    question: "details va summary teglari bilan yig'iladigan/yoyiladigan blok yarating: summary — \"Ko'proq o'qish\", detail — bitta paragraf",
    options: [], correct: 0, explanation: "",
    starterCode: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>

</body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <details>
    <summary>Ko'proq o'qish</summary>
    <p>Bu yashirilgan kontent. Bosish orqali ko'rinadi.</p>
  </details>
</body>
</html>`,
    checkCode: `
      const details = document.querySelector('details');
      if (!details) return { pass: false, message: "details teg topilmadi" };
      const summary = details.querySelector('summary');
      if (!summary) return { pass: false, message: "summary teg topilmadi" };
      if (!summary.textContent.trim()) return { pass: false, message: "summary bo'sh bo'lmasligi kerak" };
      const content = details.querySelector('p, div, span');
      if (!content) return { pass: false, message: "details ichida kontent (p va boshqalar) kerak" };
      return { pass: true, message: "Ajoyib! details/summary to'g'ri ishlayapti" };
    `,
  },
  {
    id: 117,
    type: "kodlash",
    category: "Semantika",
    question: "Ikki xil iqtibos yarating: biri alohida blok ko'rinishida (uzun), biri gap ichida (qisqa). Har biriga manba atributi qo'shing.",
    options: [], correct: 0, explanation: "",
    starterCode: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>

</body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <blockquote cite="https://example.com">
    <p>Bilim — eng katta boylik.</p>
  </blockquote>
  <p>Donishmand aytganidek: <q cite="https://example.com">O'qish — nur.</q></p>
</body>
</html>`,
    checkCode: `
      const bq = document.querySelector('blockquote');
      const q = document.querySelector('q');
      if (!bq) return { pass: false, message: "blockquote teg topilmadi" };
      if (!q) return { pass: false, message: "q teg topilmadi" };
      if (!bq.textContent.trim()) return { pass: false, message: "blockquote bo'sh bo'lmasligi kerak" };
      return { pass: true, message: "Zo'r! Iqtibos teglari to'g'ri ishlatildi" };
    `,
  },
  {
    id: 118,
    type: "kodlash",
    category: "Semantika",
    question: "time teg ishlatib vaqt ko'rsating: datetime=\"2024-01-15\" atributi bilan \"15 Yanvar 2024\" matnini qo'shing.",
    options: [], correct: 0, explanation: "",
    starterCode: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <p>Tadbir sanasi: .</p>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <p>Tadbir sanasi: <time datetime="2024-01-15">15 Yanvar 2024</time>.</p>
</body>
</html>`,
    checkCode: `
      const time = document.querySelector('time');
      if (!time) return { pass: false, message: "time teg topilmadi" };
      if (!time.getAttribute('datetime')) return { pass: false, message: "datetime atributi kerak, masalan datetime='2024-01-15'" };
      if (!time.textContent.trim()) return { pass: false, message: "time ichida matn bo'lishi kerak" };
      return { pass: true, message: "Barakalla! time teg to'g'ri ishlatildi" };
    `,
  },

  // ─── KODLASH — Formalar (119-126) ────────────────────────────────────────
  {
    id: 119,
    type: "kodlash",
    category: "Formalar",
    question: "Select (tanlov) elementi yarating: label — \"Shahar:\", option lar — \"Toshkent\", \"Samarqand\", \"Buxoro\". Birinchisi selected.",
    options: [], correct: 0, explanation: "",
    starterCode: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <form>

  </form>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <form>
    <label>Shahar:
      <select>
        <option selected>Toshkent</option>
        <option>Samarqand</option>
        <option>Buxoro</option>
      </select>
    </label>
  </form>
</body>
</html>`,
    checkCode: `
      const select = document.querySelector('select');
      if (!select) return { pass: false, message: "select teg topilmadi" };
      const options = select.querySelectorAll('option');
      if (options.length < 3) return { pass: false, message: "3 ta option kerak" };
      const texts = Array.from(options).map(o => o.textContent.trim());
      if (!texts.includes('Toshkent')) return { pass: false, message: "'Toshkent' option topilmadi" };
      return { pass: true, message: "Zo'r! Select element to'g'ri yaratildi" };
    `,
  },
  {
    id: 120,
    type: "kodlash",
    category: "Formalar",
    question: "textarea yarating: name=\"xabar\", rows=\"5\", cols=\"40\", placeholder=\"Xabaringizni yozing...\"",
    options: [], correct: 0, explanation: "",
    starterCode: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <form>
    <label>Xabar:

    </label>
  </form>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <form>
    <label>Xabar:
      <textarea name="xabar" rows="5" cols="40" placeholder="Xabaringizni yozing..."></textarea>
    </label>
  </form>
</body>
</html>`,
    checkCode: `
      const ta = document.querySelector('textarea');
      if (!ta) return { pass: false, message: "textarea teg topilmadi" };
      if (!ta.rows || ta.rows < 3) return { pass: false, message: "rows='5' qo'shing" };
      if (!ta.placeholder) return { pass: false, message: "placeholder atributi qo'shing" };
      return { pass: true, message: "Ajoyib! textarea to'g'ri sozlandi" };
    `,
  },
  {
    id: 121,
    type: "kodlash",
    category: "Formalar",
    question: "To'liq ro'yxatdan o'tish formasini yarating: matn maydoni (ism), elektron pochta, yashirin parol, sana kiritish va yuborish tugmasi.",
    options: [], correct: 0, explanation: "",
    starterCode: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <form>
    <h2>Ro'yxatdan o'tish</h2>

  </form>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <form>
    <h2>Ro'yxatdan o'tish</h2>
    <label>Ism: <input type="text" name="ism" required></label><br>
    <label>Email: <input type="email" name="email" required></label><br>
    <label>Parol: <input type="password" name="parol" required></label><br>
    <label>Tug'ilgan sana: <input type="date" name="sana"></label><br>
    <button type="submit">Ro'yxatdan o'tish</button>
  </form>
</body>
</html>`,
    checkCode: `
      const form = document.querySelector('form');
      if (!form) return { pass: false, message: "form topilmadi" };
      const text = form.querySelector('input[type="text"]');
      const email = form.querySelector('input[type="email"]');
      const pass = form.querySelector('input[type="password"]');
      const date = form.querySelector('input[type="date"]');
      if (!text) return { pass: false, message: "type='text' input kerak (ism uchun)" };
      if (!email) return { pass: false, message: "type='email' input kerak" };
      if (!pass) return { pass: false, message: "type='password' input kerak" };
      if (!date) return { pass: false, message: "type='date' input kerak" };
      return { pass: true, message: "Mukammal! To'liq forma yaratildi" };
    `,
  },
  {
    id: 122,
    type: "kodlash",
    category: "Formalar",
    question: "fieldset va legend ishlatib formani guruhlang: \"Shaxsiy ma'lumotlar\" legendasi ostida ism va familiya inputlari.",
    options: [], correct: 0, explanation: "",
    starterCode: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <form>

  </form>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <form>
    <fieldset>
      <legend>Shaxsiy ma'lumotlar</legend>
      <label>Ism: <input type="text" name="ism"></label><br>
      <label>Familiya: <input type="text" name="familiya"></label>
    </fieldset>
  </form>
</body>
</html>`,
    checkCode: `
      const fs = document.querySelector('fieldset');
      if (!fs) return { pass: false, message: "fieldset teg topilmadi" };
      const legend = fs.querySelector('legend');
      if (!legend) return { pass: false, message: "legend teg topilmadi" };
      if (!legend.textContent.trim()) return { pass: false, message: "legend bo'sh bo'lmasligi kerak" };
      const inputs = fs.querySelectorAll('input');
      if (inputs.length < 2) return { pass: false, message: "fieldset ichida kamida 2 ta input kerak" };
      return { pass: true, message: "Zo'r! fieldset va legend to'g'ri" };
    `,
  },
  {
    id: 123,
    type: "kodlash",
    category: "Formalar",
    question: "Parol maydoni yarating: majburiy, kamida 8 belgi, ko'pi bilan 20 belgi qabul qilsin.",
    options: [], correct: 0, explanation: "",
    starterCode: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <form>
    <label>Parol:
    </label>
    <button type="submit">Kirish</button>
  </form>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <form>
    <label>Parol:
      <input type="password" minlength="8" maxlength="20" required>
    </label>
    <button type="submit">Kirish</button>
  </form>
</body>
</html>`,
    checkCode: `
      const input = document.querySelector('input[type="password"], input[type="text"]');
      if (!input) return { pass: false, message: "input teg topilmadi" };
      if (!input.required) return { pass: false, message: "required atributi kerak" };
      if (input.minLength < 1) return { pass: false, message: "minlength atributi qo'shing" };
      if (input.maxLength < 1 || input.maxLength > 100) return { pass: false, message: "maxlength atributi qo'shing" };
      return { pass: true, message: "Ajoyib! Forma validatsiya atributlari to'g'ri" };
    `,
  },
  {
    id: 124,
    type: "kodlash",
    category: "Formalar",
    question: "datalist bilan auto-to'ldirish: input + datalist — \"Python\", \"JavaScript\", \"TypeScript\", \"Rust\" tillari.",
    options: [], correct: 0, explanation: "",
    starterCode: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <label>Til:
    <input type="text" list="tillar" placeholder="Dasturlash tili...">
    <datalist id="tillar">
    </datalist>
  </label>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <label>Til:
    <input type="text" list="tillar" placeholder="Dasturlash tili...">
    <datalist id="tillar">
      <option value="Python">
      <option value="JavaScript">
      <option value="TypeScript">
      <option value="Rust">
    </datalist>
  </label>
</body>
</html>`,
    checkCode: `
      const dl = document.querySelector('datalist');
      if (!dl) return { pass: false, message: "datalist teg topilmadi" };
      const input = document.querySelector('input[list]');
      if (!input) return { pass: false, message: "input ga list atributi qo'shing" };
      if (input.getAttribute('list') !== dl.id) return { pass: false, message: "input list atributi datalist id bilan mos bo'lishi kerak" };
      const opts = dl.querySelectorAll('option');
      if (opts.length < 3) return { pass: false, message: "Kamida 3 ta option kerak" };
      return { pass: true, message: "Zo'r! datalist to'g'ri ishlaydi" };
    `,
  },
  {
    id: 125,
    type: "kodlash",
    category: "Formalar",
    question: "Ikki ko'rsatkich yarating: jarayon indikatori (70 dan 100 gacha) va o'lchov indikatori (0.6, 0 dan 1 gacha).",
    options: [], correct: 0, explanation: "",
    starterCode: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <p>Yuklash:</p>

  <p>Ko'rsatkich:</p>

</body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <p>Yuklash:</p>
  <progress value="70" max="100"></progress>

  <p>Ko'rsatkich:</p>
  <meter value="0.6" min="0" max="1"></meter>
</body>
</html>`,
    checkCode: `
      const progress = document.querySelector('progress');
      const meter = document.querySelector('meter');
      if (!progress) return { pass: false, message: "progress teg topilmadi" };
      if (!meter) return { pass: false, message: "meter teg topilmadi" };
      if (!progress.value) return { pass: false, message: "progress ga value qo'shing" };
      if (!meter.value) return { pass: false, message: "meter ga value qo'shing" };
      return { pass: true, message: "Barakalla! progress va meter to'g'ri" };
    `,
  },
  {
    id: 126,
    type: "kodlash",
    category: "Formalar",
    question: "input type=\"range\" slider yarating: min=0, max=100, step=10, value=50. Ko'rinadigan qiymat bilan.",
    options: [], correct: 0, explanation: "",
    starterCode: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <label>Hajm: <span id="val">50</span>
    <input type="range" min="0" max="100" step="10" value="50"
      oninput="document.getElementById('val').textContent=this.value">
  </label>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <label>Hajm: <span id="val">50</span>
    <input type="range" min="0" max="100" step="10" value="50"
      oninput="document.getElementById('val').textContent=this.value">
  </label>
</body>
</html>`,
    checkCode: `
      const range = document.querySelector('input[type="range"]');
      if (!range) return { pass: false, message: "type='range' input topilmadi" };
      if (!range.min || range.min === '') return { pass: false, message: "min atributi kerak" };
      if (!range.max || range.max === '') return { pass: false, message: "max atributi kerak" };
      if (!range.step || range.step === '') return { pass: false, message: "step atributi kerak" };
      return { pass: true, message: "Zo'r! Range slider to'g'ri sozlandi" };
    `,
  },

  // ─── KODLASH — Multimedia va head (127-135) ───────────────────────────────
  {
    id: 127,
    type: "kodlash",
    category: "Multimedia",
    question: "video teg qo'shing: src=\"clip.mp4\", controls, width=\"640\", autoplay yo'q. Fallback matn: \"Videoni qo'llab-quvvatlamaydi\"",
    options: [], correct: 0, explanation: "",
    starterCode: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>

</body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <video src="clip.mp4" controls width="640">
    Videoni qo'llab-quvvatlamaydi
  </video>
</body>
</html>`,
    checkCode: `
      const video = document.querySelector('video');
      if (!video) return { pass: false, message: "video teg topilmadi" };
      if (!video.controls) return { pass: false, message: "controls atributi kerak" };
      if (!video.width || video.width < 300) return { pass: false, message: "width atributi qo'shing" };
      if (video.autoplay) return { pass: false, message: "autoplay bo'lmasligi kerak" };
      return { pass: true, message: "Ajoyib! video teg to'g'ri sozlandi" };
    `,
  },
  {
    id: 128,
    type: "kodlash",
    category: "Multimedia",
    question: "audio teg: src=\"music.mp3\", controls, loop atributi. Fallback: \"Audio qo'llab-quvvatlanmaydi\"",
    options: [], correct: 0, explanation: "",
    starterCode: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>

</body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <audio src="music.mp3" controls loop>
    Audio qo'llab-quvvatlanmaydi
  </audio>
</body>
</html>`,
    checkCode: `
      const audio = document.querySelector('audio');
      if (!audio) return { pass: false, message: "audio teg topilmadi" };
      if (!audio.controls) return { pass: false, message: "controls atributi kerak" };
      if (!audio.loop) return { pass: false, message: "loop atributi kerak" };
      return { pass: true, message: "Barakalla! audio to'g'ri sozlandi" };
    `,
  },
  {
    id: 129,
    type: "kodlash",
    category: "Multimedia",
    question: "Video uchun ikkita format variantini qo'shing: MP4 va WebM. Har birida fayl turi ko'rsatilsin.",
    options: [], correct: 0, explanation: "",
    starterCode: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <video controls width="640">
    Brauzeringiz video tegini qo'llab-quvvatlamaydi.
  </video>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <video controls width="640">
    <source src="clip.mp4" type="video/mp4">
    <source src="clip.webm" type="video/webm">
    Brauzeringiz video tegini qo'llab-quvvatlamaydi.
  </video>
</body>
</html>`,
    checkCode: `
      const video = document.querySelector('video');
      if (!video) return { pass: false, message: "video teg topilmadi" };
      const sources = video.querySelectorAll('source');
      if (sources.length < 2) return { pass: false, message: "2 ta source teg kerak (MP4 va WebM)" };
      const types = Array.from(sources).map(s => s.type);
      if (!types.some(t => t.includes('mp4'))) return { pass: false, message: "MP4 uchun source kerak (type='video/mp4')" };
      if (!types.some(t => t.includes('webm'))) return { pass: false, message: "WebM uchun source kerak (type='video/webm')" };
      return { pass: true, message: "Zo'r! Video formatlar to'g'ri" };
    `,
  },
  {
    id: 130,
    type: "kodlash",
    category: "Head teglari",
    question: "Sahifa head bo'limini to'ldiring: belgilar kodlashini, mobil mosligini, qisqa tavsifni va sarlavhani qo'shing.",
    options: [], correct: 0, explanation: "",
    starterCode: `<!DOCTYPE html>
<html lang="uz">
<head>
</head>
<body>
  <h1>Test</h1>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="HTML test sahifasi">
  <title>HTML Test</title>
</head>
<body>
  <h1>Test</h1>
</body>
</html>`,
    checkCode: `
      const charset = document.querySelector('meta[charset]');
      const viewport = document.querySelector('meta[name="viewport"]');
      const desc = document.querySelector('meta[name="description"]');
      const title = document.querySelector('title');
      if (!charset) return { pass: false, message: "meta charset topilmadi" };
      if (!viewport) return { pass: false, message: "meta viewport topilmadi" };
      if (!desc) return { pass: false, message: "meta description topilmadi" };
      if (!title || !title.textContent.trim()) return { pass: false, message: "title teg topilmadi yoki bo'sh" };
      return { pass: true, message: "Mukammal! head to'g'ri to'ldirildi" };
    `,
  },
  {
    id: 131,
    type: "kodlash",
    category: "Head teglari",
    question: "Open Graph meta teglari qo'shing: og:title — \"Mening saytim\", og:description — \"Test\", og:image — \"cover.jpg\"",
    options: [], correct: 0, explanation: "",
    starterCode: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>Test</title>

</head>
<body><h1>OG Test</h1></body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>Test</title>
  <meta property="og:title" content="Mening saytim">
  <meta property="og:description" content="Test">
  <meta property="og:image" content="cover.jpg">
</head>
<body><h1>OG Test</h1></body>
</html>`,
    checkCode: `
      const ogTitle = document.querySelector('meta[property="og:title"]');
      const ogDesc = document.querySelector('meta[property="og:description"]');
      const ogImg = document.querySelector('meta[property="og:image"]');
      if (!ogTitle) return { pass: false, message: "og:title meta tegi topilmadi" };
      if (!ogDesc) return { pass: false, message: "og:description meta tegi topilmadi" };
      if (!ogImg) return { pass: false, message: "og:image meta tegi topilmadi" };
      return { pass: true, message: "Ajoyib! Open Graph teglari to'g'ri" };
    `,
  },
  {
    id: 132,
    type: "kodlash",
    category: "Head teglari",
    question: "link teg bilan tashqi stylesheet ulang: rel=\"stylesheet\", href=\"style.css\". Favicon ham qo'shing: rel=\"icon\", href=\"icon.png\".",
    options: [], correct: 0, explanation: "",
    starterCode: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>Test</title>
</head>
<body><h1>Test</h1></body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>Test</title>
  <link rel="stylesheet" href="style.css">
  <link rel="icon" href="icon.png">
</head>
<body><h1>Test</h1></body>
</html>`,
    checkCode: `
      const css = document.querySelector('link[rel="stylesheet"]');
      const icon = document.querySelector('link[rel="icon"]');
      if (!css) return { pass: false, message: "rel='stylesheet' link topilmadi" };
      if (!icon) return { pass: false, message: "rel='icon' link (favicon) topilmadi" };
      return { pass: true, message: "Zo'r! Stylesheet va favicon link lar to'g'ri" };
    `,
  },

  // ─── KODLASH — Murakkab (133-147) ────────────────────────────────────────
  {
    id: 133,
    type: "kodlash",
    category: "Murakkab",
    question: "Ichki jadval yarating: 3 ustun (Kurs, Davomiyligi, Narxi), 2 qator. caption — \"Kurslar ro'yxati\". thead/tbody ishlatng.",
    options: [], correct: 0, explanation: "",
    starterCode: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <table border="1">

  </table>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <table border="1">
    <caption>Kurslar ro'yxati</caption>
    <thead>
      <tr><th>Kurs</th><th>Davomiyligi</th><th>Narxi</th></tr>
    </thead>
    <tbody>
      <tr><td>HTML</td><td>2 oy</td><td>200 000</td></tr>
      <tr><td>CSS</td><td>1 oy</td><td>150 000</td></tr>
    </tbody>
  </table>
</body>
</html>`,
    checkCode: `
      const table = document.querySelector('table');
      if (!table) return { pass: false, message: "table topilmadi" };
      const caption = table.querySelector('caption');
      if (!caption) return { pass: false, message: "caption teg topilmadi" };
      const thead = table.querySelector('thead');
      const tbody = table.querySelector('tbody');
      if (!thead) return { pass: false, message: "thead teg topilmadi" };
      if (!tbody) return { pass: false, message: "tbody teg topilmadi" };
      const ths = thead.querySelectorAll('th');
      if (ths.length < 3) return { pass: false, message: "thead da 3 ta th kerak" };
      return { pass: true, message: "Mukammal! Jadval to'g'ri tuzilgan" };
    `,
  },
  {
    id: 134,
    type: "kodlash",
    category: "Murakkab",
    question: "Jadval yarating: ikkita ustunni qoplaydigan sarlavha katak va ikkita qatorni qoplaydigan yon katak bo'lsin.",
    options: [], correct: 0, explanation: "",
    starterCode: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <table border="1">
    <tr>
    </tr>
    <tr>
    </tr>
    <tr>
    </tr>
  </table>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <table border="1">
    <tr>
      <th colspan="2">Umumiy sarlavha</th>
    </tr>
    <tr>
      <td rowspan="2">Birlashgan</td>
      <td>A</td>
    </tr>
    <tr>
      <td>B</td>
    </tr>
  </table>
</body>
</html>`,
    checkCode: `
      const colspanEl = document.querySelector('[colspan]');
      const rowspanEl = document.querySelector('[rowspan]');
      if (!colspanEl) return { pass: false, message: "colspan atributi topilmadi" };
      if (!rowspanEl) return { pass: false, message: "rowspan atributi topilmadi" };
      if (parseInt(colspanEl.getAttribute('colspan')) < 2) return { pass: false, message: "colspan kamida 2 bo'lishi kerak" };
      if (parseInt(rowspanEl.getAttribute('rowspan')) < 2) return { pass: false, message: "rowspan kamida 2 bo'lishi kerak" };
      return { pass: true, message: "Ajoyib! colspan va rowspan to'g'ri ishlatildi" };
    `,
  },
  {
    id: 135,
    type: "kodlash",
    category: "Murakkab",
    question: "Ichma-ich ro'yxat yarating: birinchi element ichida yana 3 ta elementli kichik ro'yxat bo'lsin.",
    options: [], correct: 0, explanation: "",
    starterCode: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <ul>

  </ul>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <ul>
    <li>Frontend
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
    </li>
    <li>Backend</li>
  </ul>
</body>
</html>`,
    checkCode: `
      const outer = document.querySelector('ul');
      if (!outer) return { pass: false, message: "Tashqi ul topilmadi" };
      const inner = outer.querySelector('ul');
      if (!inner) return { pass: false, message: "Ichki ul topilmadi" };
      const innerItems = inner.querySelectorAll('li');
      if (innerItems.length < 3) return { pass: false, message: "Ichki ul da kamida 3 ta li kerak" };
      return { pass: true, message: "Zo'r! Ichma-ich ro'yxat to'g'ri" };
    `,
  },
  {
    id: 136,
    type: "kodlash",
    category: "Murakkab",
    question: "To'liq landing page skeleti yarating: yuqori qism, navigatsiya (3 link), asosiy qism (sarlavha + abzas + havola), yon panel, pastki qism.",
    options: [], correct: 0, explanation: "",
    starterCode: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Landing</title>
</head>
<body>

</body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Landing</title>
</head>
<body>
  <header><h1>Mening Saytim</h1></header>
  <nav>
    <a href="#">Bosh</a>
    <a href="#">Haqida</a>
    <a href="#">Aloqa</a>
  </nav>
  <main>
    <section>
      <h2>Xush kelibsiz!</h2>
      <p>Bu ajoyib platforma.</p>
      <a href="#" class="button">Boshlash</a>
    </section>
  </main>
  <aside><p>Yangiliklar</p></aside>
  <footer><p>© 2024</p></footer>
</body>
</html>`,
    checkCode: `
      const els = ['header','nav','main','aside','footer'];
      for (const el of els) {
        if (!document.querySelector(el)) return { pass: false, message: el + " teg topilmadi" };
      }
      const navLinks = document.querySelectorAll('nav a');
      if (navLinks.length < 3) return { pass: false, message: "nav da 3 ta link kerak" };
      const h = document.querySelector('main h1, main h2, main h3');
      if (!h) return { pass: false, message: "main ichida sarlavha kerak" };
      return { pass: true, message: "Mukammal! Landing page skeleti to'liq" };
    `,
  },
  {
    id: 137,
    type: "kodlash",
    category: "Murakkab",
    question: "iframe bilan tashqi kontent joylashtiring: src=\"https://example.com\", width=\"600\", height=\"400\", title=\"Namuna\"",
    options: [], correct: 0, explanation: "",
    starterCode: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>

</body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <iframe src="https://example.com" width="600" height="400" title="Namuna"></iframe>
</body>
</html>`,
    checkCode: `
      const iframe = document.querySelector('iframe');
      if (!iframe) return { pass: false, message: "iframe teg topilmadi" };
      if (!iframe.src) return { pass: false, message: "src atributi kerak" };
      if (!iframe.width) return { pass: false, message: "width atributi kerak" };
      if (!iframe.height) return { pass: false, message: "height atributi kerak" };
      if (!iframe.title) return { pass: false, message: "title atributi kerak (accessibility)" };
      return { pass: true, message: "Zo'r! iframe to'g'ri sozlandi" };
    `,
  },
  {
    id: 138,
    type: "kodlash",
    category: "Murakkab",
    question: "canvas elementi: id=\"myCanvas\", width=\"400\", height=\"300\". JS bilan to'rtburchak chizing (fillRect).",
    options: [], correct: 0, explanation: "",
    starterCode: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <canvas id="myCanvas" width="400" height="300" style="border:1px solid #ccc"></canvas>
  <script>
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    // fillRect(x, y, width, height) bilan to'rtburchak chizing

  </script>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <canvas id="myCanvas" width="400" height="300" style="border:1px solid #ccc"></canvas>
  <script>
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#3178c6';
    ctx.fillRect(50, 50, 200, 100);
  </script>
</body>
</html>`,
    checkCode: `
      const canvas = document.querySelector('canvas');
      if (!canvas) return { pass: false, message: "canvas teg topilmadi" };
      if (canvas.width < 100) return { pass: false, message: "canvas width qo'shing" };
      if (canvas.height < 100) return { pass: false, message: "canvas height qo'shing" };
      const ctx = canvas.getContext('2d');
      const pixel = ctx.getImageData(60, 60, 1, 1).data;
      const hasDrawing = pixel[3] > 0;
      if (!hasDrawing) return { pass: false, message: "Canvas ga nimadir chizing (fillRect yoki boshqa metod)" };
      return { pass: true, message: "Ajoyib! Canvas ga to'rtburchak chizildi" };
    `,
  },
  {
    id: 139,
    type: "kodlash",
    category: "Murakkab",
    question: "SVG ichida ikki shakl chizing: to'sariq doira (radius 40) va ko'k to'rtburchak (80×80).",
    options: [], correct: 0, explanation: "",
    starterCode: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <svg width="220" height="120">

  </svg>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <svg width="220" height="120">
    <circle cx="50" cy="60" r="40" fill="orange"/>
    <rect x="110" y="10" width="80" height="80" fill="steelblue"/>
  </svg>
</body>
</html>`,
    checkCode: `
      const svg = document.querySelector('svg');
      if (!svg) return { pass: false, message: "svg teg topilmadi" };
      const circle = svg.querySelector('circle');
      const rect = svg.querySelector('rect');
      if (!circle) return { pass: false, message: "circle teg topilmadi" };
      if (!rect) return { pass: false, message: "rect teg topilmadi" };
      if (!circle.getAttribute('r')) return { pass: false, message: "circle r (radius) atributi kerak" };
      if (!rect.getAttribute('width')) return { pass: false, message: "rect width atributi kerak" };
      return { pass: true, message: "Zo'r! SVG shakllari to'g'ri chizildi" };
    `,
  },
  {
    id: 140,
    type: "kodlash",
    category: "Murakkab",
    question: "Accordion (yig'iladigan) tuzilma yarating. 3 ta details/summary: \"HTML\", \"CSS\", \"JavaScript\". Har birida qisqa tavsif.",
    options: [], correct: 0, explanation: "",
    starterCode: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>

</body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <details>
    <summary>HTML</summary>
    <p>Veb-sahifalar tuzilishi uchun belgilash tili.</p>
  </details>
  <details>
    <summary>CSS</summary>
    <p>HTML elementlarini stil berish uchun kaskad uslublar jadvali.</p>
  </details>
  <details>
    <summary>JavaScript</summary>
    <p>Veb-sahifalarga interaktivlik qo'shadigan dasturlash tili.</p>
  </details>
</body>
</html>`,
    checkCode: `
      const dets = document.querySelectorAll('details');
      if (dets.length < 3) return { pass: false, message: "3 ta details teg kerak, " + dets.length + " ta topildi" };
      for (const d of dets) {
        if (!d.querySelector('summary')) return { pass: false, message: "Har bir details da summary bo'lishi kerak" };
        if (!d.querySelector('p, div')) return { pass: false, message: "Har bir details da kontent (p va boshqalar) bo'lishi kerak" };
      }
      return { pass: true, message: "Mukammal! Accordion to'g'ri yaratildi" };
    `,
  },
  {
    id: 141,
    type: "kodlash",
    category: "Murakkab",
    question: "Navigatsiya menyusi: nav > ul > 4 ta li > a. Aktiv link — class=\"active\". Barchasi href=\"#\" bilan.",
    options: [], correct: 0, explanation: "",
    starterCode: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <nav>
    <ul>

    </ul>
  </nav>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <nav>
    <ul>
      <li><a href="#" class="active">Bosh sahifa</a></li>
      <li><a href="#">Haqida</a></li>
      <li><a href="#">Xizmatlar</a></li>
      <li><a href="#">Aloqa</a></li>
    </ul>
  </nav>
</body>
</html>`,
    checkCode: `
      const nav = document.querySelector('nav');
      if (!nav) return { pass: false, message: "nav teg topilmadi" };
      const items = nav.querySelectorAll('li');
      if (items.length < 4) return { pass: false, message: "4 ta li kerak" };
      const active = nav.querySelector('.active');
      if (!active) return { pass: false, message: "class='active' bo'lgan element topilmadi" };
      const links = nav.querySelectorAll('a');
      if (links.length < 4) return { pass: false, message: "4 ta a link kerak" };
      return { pass: true, message: "Ajoyib! Navigatsiya menyusi to'g'ri" };
    `,
  },
  {
    id: 142,
    type: "kodlash",
    category: "Murakkab",
    question: "Karta (card) tuzilmasi: article > img (src=\"photo.jpg\") + div.card-body > h3 + p + a.btn",
    options: [], correct: 0, explanation: "",
    starterCode: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>

</body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <article>
    <img src="photo.jpg" alt="Kurs rasmi">
    <div class="card-body">
      <h3>HTML Kursi</h3>
      <p>HTML asoslarini o'rganing.</p>
      <a href="#" class="btn">Boshlash</a>
    </div>
  </article>
</body>
</html>`,
    checkCode: `
      const article = document.querySelector('article');
      if (!article) return { pass: false, message: "article teg topilmadi" };
      if (!article.querySelector('img')) return { pass: false, message: "article ichida img kerak" };
      if (!article.querySelector('h2,h3,h4')) return { pass: false, message: "Sarlavha (h2-h4) kerak" };
      if (!article.querySelector('p')) return { pass: false, message: "p (tavsif) kerak" };
      if (!article.querySelector('a')) return { pass: false, message: "a (tugma) kerak" };
      return { pass: true, message: "Zo'r! Karta tuzilmasi to'g'ri" };
    `,
  },
  {
    id: 143,
    type: "kodlash",
    category: "Murakkab",
    question: "Foydalanuvchi profili yarating: avatar rasm, ism, lavozim, 3 ta ko'nikma ro'yxati va aloqa havolasi.",
    options: [], correct: 0, explanation: "",
    starterCode: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <div class="profile">

  </div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <div class="profile">
    <img src="avatar.jpg" alt="Profil rasmi" style="border-radius:50%">
    <h2>Ali Valiyev</h2>
    <p>Frontend Dasturchi</p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
    <a href="mailto:ali@example.com">Aloqa</a>
  </div>
</body>
</html>`,
    checkCode: `
      const profile = document.querySelector('.profile, div');
      if (!profile) return { pass: false, message: "Konteyner topilmadi" };
      if (!profile.querySelector('img')) return { pass: false, message: "img (avatar) kerak" };
      if (!profile.querySelector('h1,h2,h3')) return { pass: false, message: "Ism uchun sarlavha kerak" };
      if (!profile.querySelector('p')) return { pass: false, message: "p (rol) kerak" };
      const skills = profile.querySelectorAll('li');
      if (skills.length < 3) return { pass: false, message: "3 ta ko'nikma (li) kerak" };
      if (!profile.querySelector('a')) return { pass: false, message: "Aloqa linki kerak" };
      return { pass: true, message: "Mukammal! Profil tuzilmasi to'g'ri" };
    `,
  },
  {
    id: 144,
    type: "kodlash",
    category: "Murakkab",
    question: "Rasm galereyasi: section > h2 \"Galereya\" + 4 ta figure (img + figcaption) div.gallery ichida.",
    options: [], correct: 0, explanation: "",
    starterCode: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <section>
  </section>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <section>
    <h2>Galereya</h2>
    <div class="gallery">
      <figure><img src="1.jpg" alt="1-rasm"><figcaption>Rasm 1</figcaption></figure>
      <figure><img src="2.jpg" alt="2-rasm"><figcaption>Rasm 2</figcaption></figure>
      <figure><img src="3.jpg" alt="3-rasm"><figcaption>Rasm 3</figcaption></figure>
      <figure><img src="4.jpg" alt="4-rasm"><figcaption>Rasm 4</figcaption></figure>
    </div>
  </section>
</body>
</html>`,
    checkCode: `
      const section = document.querySelector('section');
      if (!section) return { pass: false, message: "section teg topilmadi" };
      const figures = section.querySelectorAll('figure');
      if (figures.length < 4) return { pass: false, message: "4 ta figure kerak, " + figures.length + " ta topildi" };
      for (const fig of figures) {
        if (!fig.querySelector('img')) return { pass: false, message: "Har bir figure da img kerak" };
        if (!fig.querySelector('figcaption')) return { pass: false, message: "Har bir figure da figcaption kerak" };
      }
      return { pass: true, message: "Ajoyib! Galereya to'g'ri tuzilgan" };
    `,
  },
  {
    id: 145,
    type: "kodlash",
    category: "Murakkab",
    question: "3 ta tarif kartasini yarating: Asosiy, Pro, Enterprise. Har birida sarlavha, narx, 3 ta xususiyat va tugma bo'lsin.",
    options: [], correct: 0, explanation: "",
    starterCode: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <div class="pricing">

  </div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <div class="pricing">
    <div class="plan">
      <h3>Asosiy</h3>
      <strong>Bepul</strong>
      <ul><li>5 kurs</li><li>Forum</li><li>Sertifikat yo'q</li></ul>
      <button>Boshlash</button>
    </div>
    <div class="plan">
      <h3>Pro</h3>
      <strong>29,000 so'm/oy</strong>
      <ul><li>Barcha kurslar</li><li>Mentor</li><li>Sertifikat</li></ul>
      <button>Tanlash</button>
    </div>
    <div class="plan">
      <h3>Enterprise</h3>
      <strong>Narxni so'rang</strong>
      <ul><li>Maxsus kurslar</li><li>Jamoaviy</li><li>API kirish</li></ul>
      <button>Bog'lanish</button>
    </div>
  </div>
</body>
</html>`,
    checkCode: `
      const plans = document.querySelectorAll('.plan, .pricing > div');
      if (plans.length < 3) return { pass: false, message: "3 ta reja kartasi kerak" };
      for (const plan of plans) {
        if (!plan.querySelector('h2,h3,h4')) return { pass: false, message: "Har bir rejada sarlavha kerak" };
        if (!plan.querySelector('ul')) return { pass: false, message: "Har bir rejada xususiyatlar ro'yxati (ul) kerak" };
        if (!plan.querySelector('button, a')) return { pass: false, message: "Har bir rejada tugma kerak" };
      }
      return { pass: true, message: "Mukammal! Narx jadvali to'g'ri" };
    `,
  },
  {
    id: 146,
    type: "kodlash",
    category: "Murakkab",
    question: "Izoh qoldirish formasini yarating: matn maydoni, 5 ta yulduzli reyting tanlovi va yuborish tugmasi.",
    options: [], correct: 0, explanation: "",
    starterCode: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <form>
    <h3>Izoh qoldiring</h3>
  </form>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <form>
    <h3>Izoh qoldiring</h3>
    <textarea name="izoh" rows="4" placeholder="Fikringiz..."></textarea>
    <p>Reyting:
      <label><input type="radio" name="reyting" value="1"> ⭐</label>
      <label><input type="radio" name="reyting" value="2"> ⭐</label>
      <label><input type="radio" name="reyting" value="3"> ⭐</label>
      <label><input type="radio" name="reyting" value="4"> ⭐</label>
      <label><input type="radio" name="reyting" value="5"> ⭐</label>
    </p>
    <button type="submit">Yuborish</button>
  </form>
</body>
</html>`,
    checkCode: `
      const form = document.querySelector('form');
      if (!form) return { pass: false, message: "form topilmadi" };
      if (!form.querySelector('textarea')) return { pass: false, message: "textarea kerak" };
      const radios = form.querySelectorAll('input[type="radio"]');
      if (radios.length < 5) return { pass: false, message: "5 ta radio (yulduz reyting) kerak" };
      if (!form.querySelector('button, input[type="submit"]')) return { pass: false, message: "Submit tugma kerak" };
      return { pass: true, message: "Zo'r! Izoh formasi to'liq" };
    `,
  },
  {
    id: 147,
    type: "kodlash",
    category: "Murakkab",
    question: "Quyidagi kodning kirish imkoniyati muammolarini to'g'rilang: rasm tavsifi, forma yozuvi bog'lanishi, tugma nomi va til atributi.",
    options: [], correct: 0, explanation: "",
    starterCode: `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <img src="logo.png">
  <form>
    <label>Email:</label>
    <input type="email">
  </form>
  <button>✕</button>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="uz">
<head><meta charset="UTF-8"><title>Test</title></head>
<body>
  <img src="logo.png" alt="Sayt logotipi">
  <form>
    <label for="email">Email:</label>
    <input type="email" id="email">
  </form>
  <button aria-label="Yopish">✕</button>
</body>
</html>`,
    checkCode: `
      const html = document.documentElement;
      if (!html.lang) return { pass: false, message: "html tegiga lang='uz' qo'shing" };
      const img = document.querySelector('img');
      if (!img || !img.alt) return { pass: false, message: "img ga alt atributi qo'shing" };
      const input = document.querySelector('input');
      const label = document.querySelector('label[for]');
      if (!input || !input.id) return { pass: false, message: "input ga id qo'shing" };
      if (!label) return { pass: false, message: "label ga for atributi qo'shing" };
      if (label.getAttribute('for') !== input.id) return { pass: false, message: "label[for] input id bilan mos bo'lishi kerak" };
      const btn = document.querySelector('button');
      if (!btn || !btn.getAttribute('aria-label')) return { pass: false, message: "button ga aria-label qo'shing" };
      return { pass: true, message: "Mukammal! Accessibility to'g'ri amalga oshirildi" };
    `,
  },
];

export const htmlTestQuestions: TestQuestion[] = [
  ...htmlTestBaseQuestions.filter((q) => !removedQuestionIds.has(q.id)),
  ...htmlCodingQuestions,
];
