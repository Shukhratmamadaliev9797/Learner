import type { LessonGroup } from "@/lib/types";

export const jsPart1Groups: LessonGroup[] = [
  {
    title: "Kirish",
    lessons: [
      {
        id: "js-intro",
        slug: "js-nima",
        title: "JavaScript nima?",
        description: "JavaScript tarixi, nima uchun kerakligi va brauzerda qanday ishlashi",
        sections: [
          { id: "overview", title: "JavaScript nima?" },
          { id: "history", title: "Qisqa tarix" },
          { id: "how", title: "Qanday ishlaydi?" },
        ],
        content: `<h2 id="overview">JavaScript nima?</h2>
<p><strong>JavaScript</strong> — veb-sahifalarni interaktiv qilish uchun yaratilgan dasturlash tili. HTML sahifaning tuzilishini, CSS ko'rinishini belgilasa, JavaScript sahifaga <em>harakat</em> va <em>mantiq</em> qo'shadi.</p>
<ul>
  <li>Tugma bosilganda menu ochilsin</li>
  <li>Forma yuborilganda ma'lumot tekshirilsin</li>
  <li>Server bilan ma'lumot almashilsin (AJAX)</li>
  <li>Animatsiyalar, o'yinlar, dasturlar</li>
</ul>
<p>Bugungi kunda JavaScript brauzerda, serverda (Node.js), mobil qurilmalarda (React Native) va hatto IoT qurilmalarida ishlatiladi.</p>

<h2 id="history">Qisqa tarix</h2>
<p>JavaScript 1995-yilda <strong>Brendan Eich</strong> tomonidan Netscape uchun atigi <em>10 kunda</em> yaratilgan. Dastlab "Mocha", keyin "LiveScript", nihoyat "JavaScript" deb atalgan (Java bilan hech qanday aloqasi yo'q — faqat marketing sabab).</p>
<p>Bugun <strong>ECMAScript</strong> standarti asosida rivojlanadi. ES6 (2015) zamonaviy JS ning boshi hisoblanadi.</p>

<h2 id="how">Qanday ishlaydi?</h2>
<p>Brauzerda har bir tab uchun <strong>JavaScript Engine</strong> mavjud:</p>
<ul>
  <li>Chrome, Edge — <strong>V8</strong></li>
  <li>Firefox — <strong>SpiderMonkey</strong></li>
  <li>Safari — <strong>JavaScriptCore</strong></li>
</ul>
<p>JS — <strong>interpreted</strong> (talqin qilinadigan) til. Kod yuqoridan pastga qatorma-qator bajariladi. Zamonaviy brauzerlar JIT (Just-In-Time) kompilyatsiya orqali juda tez ishlatadi.</p>`,
        codeExample: {
          title: "Birinchi JavaScript kodi",
          language: "javascript",
          code: `// Bu JavaScript komment
console.log("Salom, Dunyo!"); // konsolga chiqarish

// HTML ga matn yozish
document.getElementById("output").textContent = "JS ishlayapti!";

// Hisoblab chiqarish
let yil = 2025;
console.log("Hozir:", yil);

// Foydalanuvchi bilan muloqot
alert("Xush kelibsiz!");`,
        },
        liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>JS kirish</title>
  <style>
    body { font-family: sans-serif; padding: 24px; background: #0f172a; color: #e2e8f0; }
    button { background: #f7df1e; color: #0f172a; border: none; padding: 10px 20px;
             border-radius: 8px; cursor: pointer; font-weight: 700; font-size: 14px; }
    #output { margin-top: 16px; padding: 12px; background: #1e293b;
              border-radius: 8px; font-size: 14px; color: #94a3b8; }
  </style>
</head>
<body>
  <h2>JavaScript kirish</h2>
  <button onclick="salom()">Meni bos!</button>
  <div id="output">Tugmani bos...</div>

  <script>
    function salom() {
      let ism = "O'quvchi";
      document.getElementById("output").textContent =
        "Salom, " + ism + "! JavaScript ishlayapti!";
    }
  </script>
</body>
</html>`,
        notes: [
          "JavaScript va Java — ikki mutlaqo boshqa til. Nomidagi o'xshashlik tasodifiy",
          "console.log() — debugging uchun eng muhim vosita, har doim ishlatiladi",
          "JS case-sensitive: myVar va myvar — ikki xil o'zgaruvchi",
        ],
        commonMistakes: [
          "JavaScript va Java ni aralashtirish — ular butunlay boshqa tillar",
          "console.log ni unutib alert ishlatish — alert foydalanuvchini bezovta qiladi",
        ],
        practiceTask: "Brauzer konsolini oching (F12), console.log('Salom!') yozing va Enter bosing",
        quiz: [
          {
            question: "JavaScript qachon yaratilgan?",
            options: ["1990", "1995", "2000", "2010"],
            correct: 1,
            explanation: "JavaScript 1995-yilda Brendan Eich tomonidan Netscape uchun yaratilgan.",
          },
        ],
      },
      {
        id: "js-where",
        slug: "js-qayerda-yoziladi",
        title: "JS qayerda yoziladi?",
        description: "Script tegi, tashqi fayl va brauzer konsoli",
        sections: [
          { id: "script-tag", title: "Script tegi" },
          { id: "external", title: "Tashqi fayl" },
          { id: "console", title: "Brauzer konsoli" },
        ],
        content: `<h2 id="script-tag">Script tegi</h2>
<p>JavaScript HTML ichiga <code>&lt;script&gt;</code> tegi orqali yoziladi. Teg odatda <code>&lt;/body&gt;</code> dan oldin joylashtiriladi — HTML to'liq yuklanib bo'lgandan keyin JS ishga tushsin deb.</p>
<pre><code>&lt;script&gt;
  console.log("Salom!");
&lt;/script&gt;</code></pre>

<h2 id="external">Tashqi fayl (tavsiya etiladi)</h2>
<p>Katta loyihalarda JS alohida <code>.js</code> faylida yoziladi:</p>
<pre><code>&lt;script src="main.js"&gt;&lt;/script&gt;</code></pre>
<p>Afzalliklari: kodni tartibli saqlash, kesh, qayta ishlatish.</p>
<p><strong>defer</strong> atributi: HTML yuklangan bo'lsin, keyin JS ishlaydi:</p>
<pre><code>&lt;script src="main.js" defer&gt;&lt;/script&gt;</code></pre>

<h2 id="console">Brauzer konsoli</h2>
<p>Brauzerdagi developer tools (F12 yoki Ctrl+Shift+I) orqali konsolda to'g'ridan-to'g'ri JS yozish mumkin. Bu debugging va sinab ko'rish uchun ideal.</p>`,
        codeExample: {
          title: "Script joylashuvi",
          language: "html",
          code: `<!DOCTYPE html>
<html lang="uz">
<head>
  <!-- defer: HTML tayyorlangach JS ishlaydi -->
  <script src="app.js" defer></script>
</head>
<body>
  <h1>Sahifa</h1>
  <p id="msg"></p>

  <!-- yoki to'g'ridan-to'g'ri body oxirida -->
  <script>
    document.getElementById("msg").textContent = "JS ishladi!";
  </script>
</body>
</html>`,
        },
        liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: sans-serif; padding: 24px; background: #0f172a; color: #e2e8f0; }
    .box { background: #1e293b; padding: 16px; border-radius: 8px; margin: 8px 0; font-size: 13px; }
    .label { color: #f7df1e; font-weight: 700; font-size: 12px; margin-bottom: 4px; }
  </style>
</head>
<body>
  <div class="label">INLINE SCRIPT:</div>
  <div class="box" id="inline"></div>

  <div class="label">HISOBLASH:</div>
  <div class="box" id="calc"></div>

  <script>
    // Inline script — to'g'ridan-to'g'ri HTML ichida
    document.getElementById("inline").textContent =
      "Men inline script orqali yozildim!";

    // Hisoblash
    let natija = 5 * 8 + 2;
    document.getElementById("calc").textContent =
      "5 × 8 + 2 = " + natija;
  </script>
</body>
</html>`,
        notes: [
          "Script ni <head> da ishlatayotgan bo'lsangiz, defer atributi bilan ishlatng",
          "Tashqi .js fayl keshlanadi — sahifa tezroq yuklanadi",
          "type='module' — ES Modules uchun, import/export imkonini beradi",
        ],
        commonMistakes: [
          "<head> da defer siz script ishlatish — DOM hali tayyor emas, elementlar topilmaydi",
          "src va inline content birgalikda ishlatish — src bo'lsa inline e'tiborga olinmaydi",
        ],
        practiceTask: "HTML fayl yarating, tashqi main.js faylni ulang, consolega 'Ulandi!' chiqaring",
        quiz: [
          {
            question: "defer atributi nima qiladi?",
            options: [
              "Scriptni tezlashtiradi",
              "HTML to'liq yuklanib bo'lgandan keyin scriptni ishlatadi",
              "Scriptni o'chiradi",
              "Scriptni keshga oladi",
            ],
            correct: 1,
            explanation: "defer — HTML to'liq parse qilinib bo'lgandan keyin scriptni ishlatadi. Bu DOM elementlari tayyor bo'lishini ta'minlaydi.",
          },
        ],
      },
    ],
  },
  {
    title: "O'zgaruvchilar",
    lessons: [
      {
        id: "js-variables",
        slug: "ozgaruvchilar",
        title: "var, let, const",
        description: "O'zgaruvchi e'lon qilish, farqlari va qachon ishlatish",
        sections: [
          { id: "let", title: "let" },
          { id: "const", title: "const" },
          { id: "var", title: "var (eski usul)" },
          { id: "qoidalar", title: "Nomlash qoidalari" },
        ],
        content: `<h2 id="let">let — o'zgaruvchi</h2>
<p><code>let</code> bilan e'lon qilingan o'zgaruvchini keyinchalik o'zgartirish mumkin. Zamonaviy JS da asosiy o'zgaruvchi e'lon usuli.</p>
<pre><code>let ism = "Ali";
ism = "Vali"; // o'zgartirish mumkin</code></pre>

<h2 id="const">const — o'zgarmas</h2>
<p><code>const</code> bilan e'lon qilingan o'zgaruvchi qayta o'zgartirilmaydi. Imkon boricha <code>const</code> ishlatish tavsiya etiladi.</p>
<pre><code>const PI = 3.14159;
// PI = 3; // Xato! const ni o'zgartirish mumkin emas</code></pre>
<p><strong>Muhim:</strong> const massiv va obyekt ichidagi qiymatlarni o'zgartirish mumkin — faqat o'zgaruvchini boshqa narsaga yo'naltirib bo'lmaydi.</p>

<h2 id="var">var — eski usul (ishlatmang)</h2>
<p><code>var</code> ES6 dan oldingi usul. Hoisting va function scope sabab kutilmagan xatolar berishi mumkin. Yangi kodda ishlatilmaydi.</p>

<h2 id="qoidalar">Nomlash qoidalari</h2>
<ul>
  <li>Harf, <code>_</code> yoki <code>$</code> bilan boshlanishi kerak</li>
  <li>Raqam bilan boshlanmaydi</li>
  <li>JS keyword (let, const, if...) bo'lmaydi</li>
  <li>camelCase: <code>myVariable</code>, <code>userName</code></li>
  <li>SCREAMING_SNAKE_CASE: <code>MAX_SIZE</code> — konstantalar uchun</li>
</ul>`,
        codeExample: {
          title: "let, const, var farqlari",
          language: "javascript",
          code: `// const — o'zgarmas (tavsiya etiladi)
const PI = 3.14159;
const SAYT_NOMI = "Learner";

// let — o'zgartirish mumkin
let ball = 0;
ball = ball + 10; // OK
ball += 10;       // qisqacha yozuv

// var — ishlatmang (eski)
var eski = "bu ishlamang";

// To'g'ri nomlash
let foydalanuvchiIsmi = "Ali";  // camelCase
let _yashirin = "private";      // _ bilan
let $element = document.body;  // $ bilan (jQuery stili)

// Xato nomlash
// let 1son = ""; // raqam bilan boshlash — xato
// let let = "";  // keyword — xato

// const obyektda ichki o'zgartirish mumkin
const odam = { ism: "Ali" };
odam.ism = "Vali"; // OK
// odam = {};      // xato — yangi obyektga yo'naltirish mumkin emas`,
        },
        liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: sans-serif; padding: 24px; background: #0f172a; color: #e2e8f0; }
    .card { background: #1e293b; padding: 16px; border-radius: 8px; margin: 8px 0; }
    .title { color: #f7df1e; font-weight: 700; margin-bottom: 8px; font-size: 13px; }
    .value { font-size: 20px; font-weight: 700; color: #e2e8f0; }
    button { background: #f7df1e; color: #0f172a; border: none; padding: 8px 16px;
             border-radius: 6px; cursor: pointer; font-weight: 700; margin-top: 8px; }
  </style>
</head>
<body>
  <div class="card">
    <div class="title">const — o'zgarmas</div>
    <div class="value" id="const-val"></div>
  </div>
  <div class="card">
    <div class="title">let — o'zgartiriladigan</div>
    <div class="value" id="let-val"></div>
    <button onclick="oshir()">+10 qo'sh</button>
  </div>

  <script>
    const SAYT = "Learner Platform";
    let ball = 0;

    document.getElementById("const-val").textContent = SAYT;
    document.getElementById("let-val").textContent = ball;

    function oshir() {
      ball += 10;
      document.getElementById("let-val").textContent = ball;
    }
  </script>
</body>
</html>`,
        notes: [
          "Har doim const bilan boshlang, agar o'zgartirish kerak bo'lsa let ga o'ting",
          "var ni hech qachon ishlatmang — let va const uni to'liq almashtiradi",
          "camelCase — JS da standart nomlash uslubi (myVariable)",
        ],
        commonMistakes: [
          "const ni e'lon qilmasdan ishlatish (ReferenceError)",
          "const o'zgaruvchini qayta belgilashga urinish",
          "var ni let/const o'rniga ishlatish davom ettirish",
        ],
        practiceTask: "5 ta o'zgaruvchi yarating: ism (const), yosh (let), shahar (const), ball (let), manzil (const)",
        quiz: [
          {
            question: "Qaysi kalit so'z bilan o'zgaruvchini qayta o'zgartirib bo'lmaydi?",
            options: ["var", "let", "const", "static"],
            correct: 2,
            explanation: "const bilan e'lon qilingan o'zgaruvchiga yangi qiymat berib bo'lmaydi.",
          },
        ],
      },
      {
        id: "js-datatypes",
        slug: "malumot-turlari",
        title: "Ma'lumot turlari",
        description: "String, Number, Boolean, null, undefined, Symbol, BigInt",
        sections: [
          { id: "primitive", title: "Primitive turlar" },
          { id: "typeof", title: "typeof operatori" },
          { id: "type-conversion", title: "Tur o'zgartirish" },
        ],
        content: `<h2 id="primitive">Primitive ma'lumot turlari</h2>
<p>JavaScript da 7 ta primitive tur mavjud:</p>
<ul>
  <li><strong>String</strong> — matn: <code>"Salom"</code>, <code>'Voy'</code>, <code>\`Template\`</code></li>
  <li><strong>Number</strong> — son: <code>42</code>, <code>3.14</code>, <code>-7</code>, <code>Infinity</code>, <code>NaN</code></li>
  <li><strong>Boolean</strong> — mantiqiy: <code>true</code> yoki <code>false</code></li>
  <li><strong>null</strong> — ataylab bo'sh qiymat: <code>null</code></li>
  <li><strong>undefined</strong> — qiymat berilmagan: <code>undefined</code></li>
  <li><strong>Symbol</strong> — noyob identifikator (ES6)</li>
  <li><strong>BigInt</strong> — juda katta sonlar: <code>9007199254740991n</code></li>
</ul>
<p>Primitive bo'lmagan: <strong>Object</strong> (massiv, funksiya, obyekt hammasi Object).</p>

<h2 id="typeof">typeof operatori</h2>
<p>O'zgaruvchining turini aniqlaydi:</p>
<pre><code>typeof "Salom"    // "string"
typeof 42         // "number"
typeof true       // "boolean"
typeof undefined  // "undefined"
typeof null       // "object" — bu JS dagi tarixiy xato!
typeof []         // "object"
typeof function(){} // "function"</code></pre>

<h2 id="type-conversion">Tur o'zgartirish</h2>
<p><strong>Implicit (avtomatik):</strong> JS o'zi o'zgartiradi (xavfli!):</p>
<pre><code>"5" + 3   // "53" (string concatenation)
"5" - 3   // 2 (number operatsiya)</code></pre>
<p><strong>Explicit (aniq):</strong> o'zingiz o'zgartiring:</p>
<pre><code>Number("42")    // 42
String(42)      // "42"
Boolean(0)      // false
parseInt("42px") // 42</code></pre>`,
        codeExample: {
          title: "Ma'lumot turlari",
          language: "javascript",
          code: `// String
let ism = "Ali";
let salomlik = 'Xush kelibsiz';
let shablon = \`Salom, \${ism}!\`; // template literal

// Number
let yosh = 25;
let narx = 19.99;
let noaniq = NaN;        // Not a Number
let cheksiz = Infinity;

// Boolean
let faol = true;
let yopiq = false;

// null va undefined
let qiymat = null;       // ataylab bo'sh
let nomalum;             // undefined (qiymat berilmagan)

// typeof bilan tekshirish
console.log(typeof ism);    // "string"
console.log(typeof yosh);   // "number"
console.log(typeof faol);   // "boolean"
console.log(typeof qiymat); // "object" — JS xatosi!
console.log(typeof nomalum); // "undefined"

// Tur o'zgartirish
console.log(Number("42"));   // 42
console.log(String(100));    // "100"
console.log(Boolean(""));    // false
console.log(Boolean("Ali")); // true`,
        },
        liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: monospace; padding: 24px; background: #0f172a; color: #e2e8f0; }
    .row { display: flex; gap: 12px; align-items: center; padding: 8px 0;
           border-bottom: 1px solid #1e293b; font-size: 13px; }
    .type { background: #f7df1e; color: #0f172a; padding: 2px 8px;
            border-radius: 4px; font-weight: 700; font-size: 11px; min-width: 70px; text-align: center; }
    .val { color: #94a3b8; }
    .result { color: #34d399; font-weight: 700; }
  </style>
</head>
<body>
  <div id="output"></div>
  <script>
    const data = [
      { val: '"Salom"',    result: typeof "Salom" },
      { val: '42',         result: typeof 42 },
      { val: 'true',       result: typeof true },
      { val: 'null',       result: typeof null },
      { val: 'undefined',  result: typeof undefined },
      { val: '[]',         result: typeof [] },
      { val: 'function(){}', result: typeof function(){} },
    ];

    const out = document.getElementById("output");
    data.forEach(({ val, result }) => {
      out.innerHTML += \`
        <div class="row">
          <span class="val">typeof \${val}</span>
          <span>→</span>
          <span class="type">\${result}</span>
        </div>
      \`;
    });
  </script>
</body>
</html>`,
        notes: [
          "typeof null === 'object' — bu JS dagi tarixiy xato, null aslida primitive",
          "NaN (Not a Number) o'zi ham number turi: typeof NaN === 'number'",
          "Template literal (backtick) — o'zgaruvchi qo'shish, ko'p qatorli string uchun",
        ],
        commonMistakes: [
          "null va undefined ni bir xil deb o'ylash — null ataylab beriladi, undefined berilmagan",
          "'5' + 3 = '53' bo'lishini kutmaslik — string va number qo'shilsa string chiqadi",
        ],
        practiceTask: "Har bir tur uchun o'zgaruvchi yarating va typeof bilan tekshiring",
        quiz: [
          {
            question: "typeof null natijasi nima?",
            options: ["null", "undefined", "object", "string"],
            correct: 2,
            explanation: "typeof null === 'object' — bu JavaScript dagi tarixiy xato. null aslida primitive tur.",
          },
        ],
      },
      {
        id: "js-strings",
        slug: "stringlar",
        title: "Stringlar bilan ishlash",
        description: "String metodlari, template literals va string manipulyatsiyasi",
        sections: [
          { id: "methods", title: "Asosiy metodlar" },
          { id: "template", title: "Template Literals" },
          { id: "useful", title: "Foydali metodlar" },
        ],
        content: `<h2 id="methods">Asosiy string metodlari</h2>
<p>String — matn saqlash uchun. Har bir string belgi indeksi bor (0 dan boshlanadi).</p>
<ul>
  <li><code>.length</code> — uzunlik</li>
  <li><code>.toUpperCase()</code> / <code>.toLowerCase()</code> — katta/kichik harf</li>
  <li><code>.trim()</code> — bosh va oxiridagi bo'shliqlarni olib tashlash</li>
  <li><code>.includes()</code> — matn bormi?</li>
  <li><code>.startsWith()</code> / <code>.endsWith()</code> — boshlanishi/tugashi</li>
  <li><code>.indexOf()</code> — pozitsiyasi</li>
  <li><code>.slice()</code> — kesib olish</li>
  <li><code>.replace()</code> — almashtirish</li>
  <li><code>.split()</code> — bo'laklarga ajratish</li>
  <li><code>.repeat()</code> — takrorlash</li>
  <li><code>.padStart()</code> / <code>.padEnd()</code> — to'ldirish</li>
</ul>

<h2 id="template">Template Literals</h2>
<p>Backtick (\`) orqali: o'zgaruvchi qo'shish, ko'p qatorli, ifoda yozish mumkin:</p>
<pre><code>let ism = "Ali";
let xabar = \`Salom, \${ism}! Yosh: \${2025 - 2000}\`;</code></pre>

<h2 id="useful">Foydali metodlar</h2>
<p>String immutable — metodlar yangi string qaytaradi, aslinikini o'zgartirmaydi.</p>`,
        codeExample: {
          title: "String metodlari",
          language: "javascript",
          code: `const matn = "  Salom, Dunyo!  ";

// Asosiy
console.log(matn.length);           // 18
console.log(matn.trim());           // "Salom, Dunyo!"
console.log(matn.toUpperCase());    // "  SALOM, DUNYO!  "
console.log(matn.toLowerCase());    // "  salom, dunyo!  "

// Qidirish
const s = "JavaScript juda zo'r!";
console.log(s.includes("juda"));    // true
console.log(s.startsWith("Java")); // true
console.log(s.indexOf("juda"));    // 11

// Kesish va almashtirish
console.log(s.slice(0, 10));        // "JavaScript"
console.log(s.replace("zo'r", "ajoyib")); // "JavaScript juda ajoyib!"
console.log(s.replaceAll("a", "@")); // barcha 'a' ni '@' ga

// Bo'laklash
let mevalar = "olma,anor,shaftoli";
console.log(mevalar.split(","));    // ["olma", "anor", "shaftoli"]

// Template literal
let ism = "Ali";
let yosh = 25;
console.log(\`Ism: \${ism}, Yosh: \${yosh}\`);
console.log(\`2 + 2 = \${2 + 2}\`);  // ifoda

// padStart
let soat = String(9).padStart(2, "0"); // "09"`,
        },
        liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: sans-serif; padding: 24px; background: #0f172a; color: #e2e8f0; }
    input { width: 100%; padding: 10px; background: #1e293b; border: 1px solid #334155;
            border-radius: 8px; color: #e2e8f0; font-size: 14px; box-sizing: border-box; }
    .results { margin-top: 16px; display: flex; flex-direction: column; gap: 8px; }
    .res-row { background: #1e293b; padding: 10px 14px; border-radius: 8px;
               display: flex; justify-content: space-between; font-size: 13px; }
    .label { color: #64748b; }
    .value { color: #f7df1e; font-weight: 700; }
  </style>
</head>
<body>
  <h3>String metodlari sinovi</h3>
  <input type="text" id="inp" value="  Salom, Dunyo!  " oninput="update()">
  <div class="results" id="out"></div>

  <script>
    function update() {
      const s = document.getElementById("inp").value;
      const rows = [
        ["length",       s.length],
        ["trim()",       s.trim()],
        ["toUpperCase()", s.toUpperCase()],
        ["includes('Salom')", s.includes("Salom")],
        ["slice(0, 5)",  s.slice(0, 5)],
        ["split(' ')[0]", s.split(' ').filter(Boolean)[0]],
      ];
      document.getElementById("out").innerHTML = rows.map(
        ([k, v]) => \`<div class="res-row"><span class="label">\${k}</span><span class="value">\${v}</span></div>\`
      ).join('');
    }
    update();
  </script>
</body>
</html>`,
        notes: [
          "Stringlar immutable — metod chaqirsangiz yangi string qaytaradi, aslini o'zgartirmaydi",
          "Template literal ichida istalgan JS ifodasi yozilishi mumkin: ${2 + 2}",
          "slice(start, end) — end index kiritilmaydi, start manfiy bo'lishi mumkin",
        ],
        commonMistakes: [
          "str.replace() faqat birinchi uchraygan joyni almashtiradi — replaceAll() barini",
          "indexOf() -1 qaytarsa topilmadi degan — includes() ni tekshirish osonroq",
        ],
        practiceTask: "Foydalanuvchi ismini oling, bosh/oxir bo'shliqlarini olib tashlang, katta harfga o'tkazing va uzunligini chiqaring",
        quiz: [
          {
            question: "'hello'.toUpperCase() natijasi nima?",
            options: ["hello", "Hello", "HELLO", "HELLO!"],
            correct: 2,
            explanation: "toUpperCase() barcha harflarni katta harfga o'zgartiradi: 'HELLO'.",
          },
        ],
      },
      {
        id: "js-numbers",
        slug: "sonlar",
        title: "Sonlar va Math",
        description: "Number metodlari, Math obyekti va sonlar bilan ishlash",
        sections: [
          { id: "number", title: "Number metodlari" },
          { id: "math", title: "Math obyekti" },
          { id: "nan", title: "NaN va Infinity" },
        ],
        content: `<h2 id="number">Number metodlari</h2>
<p>JavaScript da barcha sonlar (butun va kasr) bir xil <code>Number</code> turida saqlanadi (64-bit float).</p>
<ul>
  <li><code>.toFixed(n)</code> — n ta kasr raqam bilan string</li>
  <li><code>.toString(radix)</code> — boshqa sanoq sistemasida string</li>
  <li><code>.toPrecision(n)</code> — n ta aniqlik raqami</li>
  <li><code>Number.isInteger()</code> — butun sonmi?</li>
  <li><code>Number.isFinite()</code> — chekliymi?</li>
  <li><code>Number.isNaN()</code> — NaN mi?</li>
  <li><code>Number.parseInt()</code> — butun songa</li>
  <li><code>Number.parseFloat()</code> — kasr songa</li>
</ul>

<h2 id="math">Math obyekti</h2>
<ul>
  <li><code>Math.round()</code> — yaxlitlash</li>
  <li><code>Math.floor()</code> — pastga</li>
  <li><code>Math.ceil()</code> — yuqoriga</li>
  <li><code>Math.abs()</code> — mutlaq qiymat</li>
  <li><code>Math.max() / Math.min()</code> — katta/kichik</li>
  <li><code>Math.random()</code> — 0–1 orasida tasodifiy</li>
  <li><code>Math.pow()</code> — daraja</li>
  <li><code>Math.sqrt()</code> — ildiz</li>
  <li><code>Math.PI</code> — pi soni</li>
</ul>

<h2 id="nan">NaN va Infinity</h2>
<p><code>NaN</code> — noto'g'ri son amalidan kelib chiqadi. <code>isNaN()</code> bilan tekshiring.</p>
<p><code>Infinity</code> — songa bo'lganda. <code>Number.isFinite()</code> bilan tekshiring.</p>`,
        codeExample: {
          title: "Number va Math",
          language: "javascript",
          code: `// Number metodlari
let narx = 19.999;
console.log(narx.toFixed(2));       // "20.00"
console.log(narx.toFixed(0));       // "20"

let n = 255;
console.log(n.toString(16));        // "ff" (hex)
console.log(n.toString(2));         // "11111111" (binary)

// Math
console.log(Math.round(4.6));       // 5
console.log(Math.floor(4.9));       // 4
console.log(Math.ceil(4.1));        // 5
console.log(Math.abs(-42));         // 42
console.log(Math.max(1, 5, 3));     // 5
console.log(Math.min(1, 5, 3));     // 1
console.log(Math.pow(2, 10));       // 1024
console.log(Math.sqrt(16));         // 4
console.log(Math.PI);               // 3.141592...

// Tasodifiy son (0-100 orasida butun)
let tasodifiy = Math.floor(Math.random() * 101);
console.log(tasodifiy);

// NaN
console.log(Number("abc"));         // NaN
console.log(Number.isNaN(NaN));     // true
console.log(isNaN("salom"));        // true (eski usul)

// Infinity
console.log(1 / 0);                 // Infinity
console.log(Number.isFinite(Infinity)); // false`,
        },
        liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: sans-serif; padding: 24px; background: #0f172a; color: #e2e8f0; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .card { background: #1e293b; padding: 16px; border-radius: 8px; }
    .title { color: #f7df1e; font-size: 12px; font-weight: 700; margin-bottom: 8px; }
    .val { font-size: 24px; font-weight: 700; }
    button { background: #f7df1e; color: #0f172a; border: none; padding: 8px 16px;
             border-radius: 6px; cursor: pointer; font-weight: 700; margin-bottom: 16px; }
  </style>
</head>
<body>
  <button onclick="yangilash()">Tasodifiy yangilash</button>
  <div class="grid" id="out"></div>

  <script>
    function yangilash() {
      const r = Math.random();
      const data = [
        ["Math.random()",         r.toFixed(4)],
        ["Math.floor(r * 100)",   Math.floor(r * 100)],
        ["Math.round(r * 100)",   Math.round(r * 100)],
        ["Math.ceil(r * 100)",    Math.ceil(r * 100)],
        ["Math.max(r*10, 5)",     Math.max(r * 10, 5).toFixed(2)],
        ["Math.min(r*10, 5)",     Math.min(r * 10, 5).toFixed(2)],
      ];
      document.getElementById("out").innerHTML = data.map(
        ([k, v]) => \`<div class="card"><div class="title">\${k}</div><div class="val">\${v}</div></div>\`
      ).join('');
    }
    yangilash();
  </script>
</body>
</html>`,
        notes: [
          "0.1 + 0.2 !== 0.3 — float sonlar xatosi. toFixed(10) yoki * 100 / 100 bilan hal qiling",
          "Math.random() [0, 1) — 1 kiritilmaydi. n*random => [0, n)",
          "Number.isNaN() ni isNaN() ga afzal ko'ring — isNaN('abc') true qaytaradi (noto'g'ri)",
        ],
        commonMistakes: [
          "0.1 + 0.2 === 0.3 deb hisoblash — float precision xatosi",
          "Math.random() * 10 dan butun son olishda Math.floor() ni unutish",
        ],
        practiceTask: "Lotto o'yini: 1-49 orasida 6 ta noyob tasodifiy son generatsiya qiling",
        quiz: [
          {
            question: "Math.floor(4.9) natijasi nima?",
            options: ["5", "4", "4.9", "0"],
            correct: 1,
            explanation: "Math.floor() pastga yaxlitlaydi — 4.9 dan 4 bo'ladi.",
          },
        ],
      },
    ],
  },
];
