import type { LessonGroup } from "@/lib/types";

export const jsPart3Groups: LessonGroup[] = [
  {
    title: "Funksiyalar",
    lessons: [
      {
        id: "js-functions",
        slug: "funksiyalar",
        title: "Funksiyalar asoslari",
        description: "Funksiya e'lon qilish, parametrlar, return va chaqirish",
        sections: [
          { id: "declaration", title: "Funksiya e'lon qilish" },
          { id: "params", title: "Parametrlar va return" },
          { id: "types", title: "Funksiya turlari" },
        ],
        content: `<h2 id="declaration">Funksiya e'lon qilish</h2>
<p>Funksiya — qayta ishlatiladigan kod bloki. Bir marta yozing, ko'p marta chaqiring.</p>
<p><strong>Ikki asosiy usul:</strong></p>
<pre><code>// Function Declaration (hoisting bor)
function salomlash() {
  console.log("Salom!");
}

// Function Expression (hoisting yo'q)
const salomlash = function() {
  console.log("Salom!");
};</code></pre>

<h2 id="params">Parametrlar va return</h2>
<ul>
  <li><strong>Parametr</strong> — funksiya ta'rifidagi o'zgaruvchi</li>
  <li><strong>Argument</strong> — funksiya chaqirilganda beriladigan qiymat</li>
  <li><strong>Default parametr</strong> — argument berilmasa standart qiymat</li>
  <li><strong>return</strong> — qiymat qaytarish; return dan keyin kod ishlamaydi</li>
</ul>
<pre><code>function qo'sh(a, b = 0) {
  return a + b;
}
console.log(qo'sh(5, 3)); // 8
console.log(qo'sh(5));    // 5 (b = 0)</code></pre>

<h2 id="types">Funksiya turlari</h2>
<ul>
  <li><strong>Arrow function</strong> — qisqa yozuv: <code>(a, b) => a + b</code></li>
  <li><strong>Anonymous function</strong> — nomsiz funksiya</li>
  <li><strong>IIFE</strong> — darhol chaqiriladigan funksiya</li>
  <li><strong>Higher-order function</strong> — funksiyani argument sifatida qabul qiladigan</li>
</ul>`,
        codeExample: {
          title: "Funksiya turlari",
          language: "javascript",
          code: `// Function Declaration
function kutib_olish(ism, salomlashuv = "Salom") {
  return \`\${salomlashuv}, \${ism}!\`;
}
console.log(kutib_olish("Ali"));         // "Salom, Ali!"
console.log(kutib_olish("Ali", "Xush")); // "Xush, Ali!"

// Function Expression
const kvadrat = function(x) {
  return x * x;
};

// Arrow function — qisqa yozuv
const kub = x => x ** 3;
const qo_sh = (a, b) => a + b;
const kopar = (a, b) => {
  const natija = a * b;
  return natija;
};

// Rest parametrlar — istalgancha argument
function yig_indi(...sonlar) {
  return sonlar.reduce((sum, n) => sum + n, 0);
}
console.log(yig_indi(1, 2, 3, 4, 5)); // 15

// IIFE — darhol chaqiriladigan
const natija = (function() {
  return 42;
})();
console.log(natija); // 42

// Higher-order function
function amal_qil(x, fn) {
  return fn(x);
}
console.log(amal_qil(5, kub));      // 125
console.log(amal_qil(5, kvadrat));  // 25`,
        },
        liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: sans-serif; padding: 24px; background: #0f172a; color: #e2e8f0; }
    .inputs { display: flex; gap: 8px; margin-bottom: 16px; }
    input { flex: 1; padding: 10px; background: #1e293b; border: 1px solid #334155;
            border-radius: 8px; color: #e2e8f0; font-size: 14px; }
    .results { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
    .res { background: #1e293b; padding: 12px; border-radius: 8px; }
    .res-label { font-size: 11px; color: #64748b; margin-bottom: 4px; }
    .res-val { font-size: 22px; font-weight: 700; color: #f7df1e; }
  </style>
</head>
<body>
  <h3>Matematika funksiyalari</h3>
  <div class="inputs">
    <input type="number" id="a" value="5" oninput="hisob()">
    <input type="number" id="b" value="3" oninput="hisob()">
  </div>
  <div class="results" id="out"></div>

  <script>
    const qo_sh   = (a, b) => a + b;
    const ayir    = (a, b) => a - b;
    const kopar   = (a, b) => a * b;
    const bo_l    = (a, b) => b !== 0 ? (a / b).toFixed(2) : "∞";
    const daraja  = (a, b) => Math.pow(a, b);
    const qoldiq  = (a, b) => b !== 0 ? a % b : "—";

    function hisob() {
      const a = Number(document.getElementById("a").value);
      const b = Number(document.getElementById("b").value);
      const data = [
        [a + " + " + b, qo_sh(a, b)],
        [a + " - " + b, ayir(a, b)],
        [a + " × " + b, kopar(a, b)],
        [a + " / " + b, bo_l(a, b)],
        [a + " ** " + b, daraja(a, b)],
        [a + " % " + b,  qoldiq(a, b)],
      ];
      document.getElementById("out").innerHTML = data.map(
        ([label, val]) =>
          \`<div class="res"><div class="res-label">\${label}</div><div class="res-val">\${val}</div></div>\`
      ).join('');
    }
    hisob();
  </script>
</body>
</html>`,
        notes: [
          "Function Declaration hoisting — fayl yuqorida e'lon qilmasdan ham pastda chaqirish mumkin",
          "Arrow function this ni bind qilmaydi — metod uchun oddiy funksiya yaxshiroq",
          "Bir parametrli arrow da qavslar ixtiyoriy: x => x * 2",
        ],
        commonMistakes: [
          "return ni unutish — funksiya undefined qaytaradi",
          "Arrow function da {} bo'lsa return yozish kerak: x => { return x; }",
        ],
        practiceTask: "Temperatura konvertori: Celsius -> Fahrenheit va aksincha funksiyalar yozing",
        quiz: [
          {
            question: "Arrow function qanday yoziladi?",
            options: [
              "function => (x) { return x; }",
              "(x) => x",
              "=> x: x",
              "arrow(x) { x }",
            ],
            correct: 1,
            explanation: "Arrow function sintaksisi: (parametrlar) => ifoda yoki (parametrlar) => { kod; return qiymat; }",
          },
        ],
      },
      {
        id: "js-scope",
        slug: "scope",
        title: "Scope va Hoisting",
        description: "O'zgaruvchilar qayerda ko'rinadi va hoisting qanday ishlaydi",
        sections: [
          { id: "scope", title: "Scope nima?" },
          { id: "hoisting", title: "Hoisting" },
          { id: "lexical", title: "Lexical scope" },
        ],
        content: `<h2 id="scope">Scope nima?</h2>
<p><strong>Scope</strong> — o'zgaruvchi qaysi hududda ko'rinadi (mavjud).</p>
<ul>
  <li><strong>Global scope</strong> — hamma joyda ko'rinadi</li>
  <li><strong>Function scope</strong> — faqat funksiya ichida (var, function)</li>
  <li><strong>Block scope</strong> — faqat blok ichida {} (let, const)</li>
  <li><strong>Module scope</strong> — faqat modul ichida</li>
</ul>
<pre><code>let global = "Global";          // global scope

function misol() {
  let local = "Lokal";          // function scope
  console.log(global);          // OK
  console.log(local);           // OK
}
console.log(global);            // OK
// console.log(local);          // ReferenceError!</code></pre>

<h2 id="hoisting">Hoisting</h2>
<p>JS da o'zgaruvchi va funksiya e'lonlari kompilyatsiya bosqichida "yuqoriga ko'tariladi".</p>
<ul>
  <li><strong>var</strong> — e'lon ko'tariladi, lekin qiymati emas (<code>undefined</code>)</li>
  <li><strong>function declaration</strong> — to'liq ko'tariladi</li>
  <li><strong>let, const</strong> — ko'tarilmaydi (TDZ — Temporal Dead Zone)</li>
</ul>

<h2 id="lexical">Lexical scope</h2>
<p>Funksiya o'zi e'lon qilingan joyning scope ini eslab qoladi — closure ning asosi.</p>`,
        codeExample: {
          title: "Scope va Hoisting",
          language: "javascript",
          code: `// Global vs Local scope
let x = "Global";

function test() {
  let x = "Lokal";
  console.log(x); // "Lokal" — lokal x ustunlik qiladi
}
test();
console.log(x);   // "Global"

// Block scope (let/const)
{
  let blok = "Blok ichida";
  const ham = "Bu ham";
  console.log(blok); // OK
}
// console.log(blok); // ReferenceError!

// var — function scope (block scope emas!)
function varTest() {
  if (true) {
    var v = "var";
    let l = "let";
  }
  console.log(v); // "var" — funksiya scope
  // console.log(l); // ReferenceError!
}

// Hoisting — function declaration
salomlash(); // ISHLAYDI — hoisting!
function salomlash() { console.log("Salom!"); }

// Hoisting — var
console.log(y); // undefined (ReferenceError emas!)
var y = 5;

// TDZ — let/const
// console.log(z); // ReferenceError!
let z = 10;`,
        },
        liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: monospace; padding: 24px; background: #0f172a; color: #e2e8f0; }
    .scope-box { border: 2px solid; border-radius: 8px; padding: 16px; margin: 8px 0; position: relative; }
    .scope-label { position: absolute; top: -10px; left: 12px; font-size: 11px; font-weight: 700;
                   background: #0f172a; padding: 0 6px; }
    .global { border-color: #6366f1; }
    .global .scope-label { color: #6366f1; }
    .func { border-color: #f59e0b; margin: 8px; }
    .func .scope-label { color: #f59e0b; }
    .block { border-color: #34d399; margin: 8px; }
    .block .scope-label { color: #34d399; }
    .var-display { font-size: 13px; color: #94a3b8; padding: 4px 0; }
    .val { color: #f7df1e; font-weight: 700; }
  </style>
</head>
<body>
  <div class="scope-box global">
    <div class="scope-label">GLOBAL SCOPE</div>
    <div class="var-display">let global = <span class="val">"Global"</span></div>
    <div class="scope-box func">
      <div class="scope-label">FUNCTION SCOPE</div>
      <div class="var-display">let local = <span class="val">"Lokal"</span></div>
      <div class="var-display">global ko'rinadi: <span class="val">✓</span></div>
      <div class="scope-box block">
        <div class="scope-label">BLOCK SCOPE {}</div>
        <div class="var-display">let block = <span class="val">"Blok"</span></div>
        <div class="var-display">global ko'rinadi: <span class="val">✓</span></div>
        <div class="var-display">local ko'rinadi: <span class="val">✓</span></div>
      </div>
      <div class="var-display">block ko'rinmaydi: <span style="color:#ef4444">✗</span></div>
    </div>
    <div class="var-display">local ko'rinmaydi: <span style="color:#ef4444">✗</span></div>
  </div>
</body>
</html>`,
        notes: [
          "let va const block scope — {} qavslar yangi scope hosil qiladi",
          "Hoisting tushunchasi var va function declaration ni faylning tepasiga 'ko'taradi'",
          "TDZ (Temporal Dead Zone) — let/const e'lon qilinguncha ular mavjud emas",
        ],
        commonMistakes: [
          "var ni if/for blok ichida e'lon qilib, tashqarida ham ishlashini kutish",
          "Function expression hoisting qilmaydi: const fn = function(){}; fn dan oldin chaqirib bo'lmaydi",
        ],
        practiceTask: "3 ta turli scope dagi o'zgaruvchilarni yarating va ularning ko'rish doirasini tekshiring",
        quiz: [
          {
            question: "let bilan e'lon qilingan o'zgaruvchi qaysi scope da?",
            options: ["Global scope", "Function scope", "Block scope", "Module scope"],
            correct: 2,
            explanation: "let va const — block scope. {} qavslar ichida e'lon qilinsa, faqat shu blok ichida ko'rinadi.",
          },
        ],
      },
      {
        id: "js-closure",
        slug: "closure",
        title: "Closure",
        description: "Funksiya tashqi scope ni eslab qolishi — closure tushunchasi",
        sections: [
          { id: "what", title: "Closure nima?" },
          { id: "examples", title: "Amaliy misollar" },
          { id: "patterns", title: "Closure patternlar" },
        ],
        content: `<h2 id="what">Closure nima?</h2>
<p><strong>Closure</strong> — funksiya o'zi e'lon qilingan scope dagi o'zgaruvchilarni eslab qolishidir, hatto u scope tugab ketgan bo'lsa ham.</p>
<pre><code>function hisoblagich() {
  let son = 0;
  return function() {
    son++;
    return son;
  };
}

const hisob = hisoblagich();
console.log(hisob()); // 1
console.log(hisob()); // 2
console.log(hisob()); // 3</code></pre>
<p><code>son</code> o'zgaruvchisi tashqaridan ko'rinmaydi — encapsulation!</p>

<h2 id="examples">Amaliy misollar</h2>
<ul>
  <li>Hisoblagich funksiyalar</li>
  <li>Private o'zgaruvchilar</li>
  <li>Memoization (natijalarni eslab qolish)</li>
  <li>Event handler lar</li>
  <li>Partial application va currying</li>
</ul>

<h2 id="patterns">Closure patternlar</h2>
<p><strong>Factory function</strong> — har chaqirilganda yangi closure yaratadi:</p>
<pre><code>function multiplicator(n) {
  return x => x * n;
}
const ikkilat = multiplicator(2);
const uchlat  = multiplicator(3);
ikkilat(5); // 10
uchlat(5);  // 15</code></pre>`,
        codeExample: {
          title: "Closure amaliy misol",
          language: "javascript",
          code: `// 1. Hisoblagich (counter)
function yaratHisoblagich(boshlang_ich = 0) {
  let qiymat = boshlang_ich;
  return {
    oshir:    () => ++qiymat,
    kamayt:   () => --qiymat,
    nolga:    () => { qiymat = 0; },
    olish:    () => qiymat,
  };
}

const counter = yaratHisoblagich(10);
console.log(counter.oshir());   // 11
console.log(counter.oshir());   // 12
console.log(counter.kamayt());  // 11
console.log(counter.olish());   // 11

// 2. Private o'zgaruvchi (bank hisobi)
function bankHisobi(boshlang_ich) {
  let balans = boshlang_ich; // private
  return {
    topshir: (summa) => {
      balans += summa;
      return \`Topshirildi. Balans: \${balans}\`;
    },
    yechib_ol: (summa) => {
      if (summa > balans) return "Mablag' yetarli emas";
      balans -= summa;
      return \`Yechib olindi. Balans: \${balans}\`;
    },
    balans_kor: () => balans,
  };
}

const hisob = bankHisobi(1000);
console.log(hisob.topshir(500));    // "Topshirildi. Balans: 1500"
console.log(hisob.yechib_ol(200));  // "Yechib olindi. Balans: 1300"
console.log(hisob.balans_kor());    // 1300

// 3. Memoization
function memoize(fn) {
  const kesh = {};
  return function(n) {
    if (n in kesh) return kesh[n]; // keshdан olish
    kesh[n] = fn(n);
    return kesh[n];
  };
}

const sekin_kvadrat = memoize(n => {
  // og'ir hisob-kitob simulyatsiyasi
  return n * n;
});`,
        },
        liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: sans-serif; padding: 24px; background: #0f172a; color: #e2e8f0; }
    .bank { background: #1e293b; border-radius: 12px; padding: 20px; max-width: 300px; }
    .balans { font-size: 32px; font-weight: 900; color: #34d399; margin: 8px 0; }
    .label { font-size: 11px; color: #64748b; text-transform: uppercase; letter-spacing: 1px; }
    .btns { display: flex; gap: 8px; margin: 16px 0; }
    button { flex: 1; padding: 10px; border: none; border-radius: 8px;
             cursor: pointer; font-weight: 700; font-size: 13px; }
    .topshir { background: #34d399; color: #0f172a; }
    .yechib { background: #ef4444; color: white; }
    input { width: 100%; padding: 8px; background: #0f172a; border: 1px solid #334155;
            border-radius: 6px; color: #e2e8f0; box-sizing: border-box; margin-bottom: 8px; }
    .log { font-size: 12px; color: #64748b; margin-top: 8px; }
  </style>
</head>
<body>
  <div class="bank">
    <div class="label">Bank hisobi (closure)</div>
    <div class="balans" id="bal">1,000 so'm</div>
    <input type="number" id="summa" value="100" placeholder="Summa">
    <div class="btns">
      <button class="topshir" onclick="topshir()">+ Topshir</button>
      <button class="yechib" onclick="yechib()">- Yechib ol</button>
    </div>
    <div class="log" id="log">Amallar tarixi:</div>
  </div>

  <script>
    function bankHisobi(boshlang_ich) {
      let balans = boshlang_ich;
      return {
        topshir(s) {
          balans += s;
          return balans;
        },
        yechib_ol(s) {
          if (s > balans) return null;
          balans -= s;
          return balans;
        },
        kor() { return balans; }
      };
    }

    const hisob = bankHisobi(1000);

    function updateUI(msg) {
      document.getElementById("bal").textContent =
        hisob.kor().toLocaleString() + " so'm";
      const log = document.getElementById("log");
      log.innerHTML = msg + "<br>" + log.innerHTML;
    }

    function topshir() {
      const s = Number(document.getElementById("summa").value);
      if (s <= 0) return;
      hisob.topshir(s);
      updateUI(\`+ \${s.toLocaleString()} so'm topshirildi\`);
    }

    function yechib() {
      const s = Number(document.getElementById("summa").value);
      if (hisob.yechib_ol(s) === null) {
        updateUI(\`✗ Mablag' yetarli emas\`);
      } else {
        updateUI(\`- \${s.toLocaleString()} so'm yechib olindi\`);
      }
    }
  </script>
</body>
</html>`,
        notes: [
          "Closure — JavaScript ning eng kuchli va eng ko'p ishlatiladigan patternlaridan biri",
          "Har bir funksiya o'zi e'lon qilingan scope ga reference saqlab qoladi",
          "Closure private state yaratish uchun — class dan oldin asosiy usul edi",
        ],
        commonMistakes: [
          "Loop ichida closure: var bilan barcha closure lar bir xil i ni ko'radi — let ishlatng",
          "Closure o'z scope ini saqlab qolganidan memory leak bo'lishi mumkin",
        ],
        practiceTask: "Savdo sepeti: add(), remove(), getTotal() metodlari bo'lgan closure yozing",
        quiz: [
          {
            question: "Closure nima?",
            options: [
              "Funksiyani yopish usuli",
              "Funksiya o'zi yaratilgan scope dagi o'zgaruvchilarni eslab qolishi",
              "Xatolikni ushlash mexanizmi",
              "Funksiyani qayta ishlatish",
            ],
            correct: 1,
            explanation: "Closure — funksiya o'zi e'lon qilingan lexical scope dagi o'zgaruvchilarga kirish huquqini saqlab qolishi.",
          },
        ],
      },
      {
        id: "js-callbacks",
        slug: "callbacklar",
        title: "Callback funksiyalar",
        description: "Funksiyani argument sifatida berish va callback pattern",
        sections: [
          { id: "what", title: "Callback nima?" },
          { id: "array", title: "Array metodlarida" },
          { id: "async", title: "Asinxron callback" },
        ],
        content: `<h2 id="what">Callback nima?</h2>
<p><strong>Callback</strong> — boshqa funksiyaga argument sifatida beriladigan funksiya. U boshqa funksiya tomonidan chaqiriladi.</p>
<p>JavaScript da funksiyalar "first-class citizen" — o'zgaruvchi sifatida saqlash, argument sifatida berish, qaytarish mumkin.</p>
<pre><code>function bajar(fn) {
  console.log("Boshlanmoqda...");
  fn(); // callback chaqiriladi
  console.log("Tugadi.");
}
bajar(() => console.log("Men callback!")); </code></pre>

<h2 id="array">Array metodlarida callback</h2>
<ul>
  <li><code>forEach(callback)</code> — har element uchun</li>
  <li><code>map(callback)</code> — har elementni o'zgartiradi</li>
  <li><code>filter(callback)</code> — shartga mos elementlar</li>
  <li><code>find(callback)</code> — birinchi mos element</li>
  <li><code>some(callback)</code> — birontasi mos kelsa true</li>
  <li><code>every(callback)</code> — hammasi mos kelsa true</li>
  <li><code>reduce(callback, boshlang_ich)</code> — yig'ish</li>
  <li><code>sort(callback)</code> — saralash</li>
</ul>

<h2 id="async">Asinxron callback</h2>
<p>setTimeout, setInterval, event listener — hammasi callback ishlatadi:</p>
<pre><code>setTimeout(() => console.log("1 soniyadan keyin!"), 1000);
btn.addEventListener("click", () => console.log("Bosildi!"));</code></pre>`,
        codeExample: {
          title: "Callback va Array metodlari",
          language: "javascript",
          code: `const sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// forEach — har element uchun
sonlar.forEach(n => console.log(n));

// map — har elementni o'zgartiradi, yangi massiv qaytaradi
const kvadratlar = sonlar.map(n => n ** 2);
console.log(kvadratlar); // [1, 4, 9, 16, 25...]

// filter — shartga mos elementlar
const juftlar = sonlar.filter(n => n % 2 === 0);
console.log(juftlar); // [2, 4, 6, 8, 10]

// find — birinchi mos element
const birinchi_katta = sonlar.find(n => n > 5);
console.log(birinchi_katta); // 6

// some / every
console.log(sonlar.some(n => n > 9));   // true (10 > 9)
console.log(sonlar.every(n => n > 0));  // true (hammasi > 0)

// reduce — yig'ish
const yig_indi = sonlar.reduce((sum, n) => sum + n, 0);
console.log(yig_indi); // 55

// sort — saralash (callback bilan)
const harflar = ["banana", "olma", "anor", "apelsin"];
harflar.sort((a, b) => a.localeCompare(b)); // alifbo tartibi

const sonlarAral = [10, 2, 30, 5, 100];
sonlarAral.sort((a, b) => a - b); // o'sish tartibida
sonlarAral.sort((a, b) => b - a); // kamayish tartibida

// Callback chain
const natija = sonlar
  .filter(n => n % 2 === 0)   // juftlar: [2,4,6,8,10]
  .map(n => n ** 2)            // kvadratlar: [4,16,36,64,100]
  .reduce((s, n) => s + n, 0); // yig'indi: 220
console.log(natija);`,
        },
        liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: sans-serif; padding: 24px; background: #0f172a; color: #e2e8f0; }
    .btns { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; }
    button { background: #1e293b; color: #e2e8f0; border: 1px solid #334155;
             padding: 8px 14px; border-radius: 8px; cursor: pointer; font-size: 13px; }
    button:hover { background: #f7df1e; color: #0f172a; border-color: #f7df1e; }
    .result { background: #1e293b; padding: 16px; border-radius: 8px; }
    .title { font-size: 11px; color: #64748b; margin-bottom: 8px; text-transform: uppercase; }
    .chips { display: flex; flex-wrap: wrap; gap: 6px; }
    .chip { background: #0f172a; padding: 4px 10px; border-radius: 20px; font-size: 13px; }
    .chip.hi { background: #f7df1e; color: #0f172a; font-weight: 700; }
  </style>
</head>
<body>
  <div class="btns">
    <button onclick="show('asl')">Asl</button>
    <button onclick="show('kvadrat')">map: x²</button>
    <button onclick="show('juft')">filter: juft</button>
    <button onclick="show('katta')">filter: >5</button>
    <button onclick="show('reduce')">reduce: yig'indi</button>
  </div>
  <div class="result">
    <div class="title" id="title">Massiv:</div>
    <div class="chips" id="chips"></div>
  </div>

  <script>
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const ops = {
      asl:    { title: "Asl massiv",          fn: d => d },
      kvadrat:{ title: "map: har elementi²",  fn: d => d.map(n => n**2) },
      juft:   { title: "filter: juft sonlar", fn: d => d.filter(n => n%2===0) },
      katta:  { title: "filter: 5 dan katta", fn: d => d.filter(n => n>5) },
      reduce: { title: "reduce: yig'indi",    fn: d => [d.reduce((s,n)=>s+n,0)] },
    };

    function show(key) {
      const op = ops[key];
      const result = op.fn(data);
      document.getElementById("title").textContent = op.title + ":";
      document.getElementById("chips").innerHTML = result.map(
        (n, i) => \`<span class="chip \${i===result.length-1 && key==='reduce' ? 'hi' : ''}">\${n}</span>\`
      ).join('');
    }
    show('asl');
  </script>
</body>
</html>`,
        notes: [
          "map, filter, reduce — funksional dasturlashning asosi, har doim asl massivni o'zgartirmaydi",
          "sort() massivni o'zi o'zgartiradi (mutates) — avval [...arr] bilan nusxa oling",
          "Callback hell — juda ko'p ichma-ich callback. Buning o'rniga Promise/async-await",
        ],
        commonMistakes: [
          "sort() ni raqamlar uchun callback siz ishlatish: [10,2,1].sort() => [1,10,2] — xato!",
          "map() dan filter() kabi foydalanish — map DOIM bir xil uzunlikdagi massiv qaytaradi",
        ],
        practiceTask: "Talabalar ro'yxatidan 70+ ball olganlarni toping, balllarini o'sish tartibida saraling",
        quiz: [
          {
            question: "[1,2,3].map(x => x*2) natijasi nima?",
            options: ["6", "[2,4,6]", "[1,2,3]", "undefined"],
            correct: 1,
            explanation: "map() har elementni callback orqali o'zgartirib yangi massiv qaytaradi: [1*2, 2*2, 3*2] = [2,4,6].",
          },
        ],
      },
    ],
  },
];
