import type { LessonGroup } from "@/lib/types";

export const jsPart2Groups: LessonGroup[] = [
  {
    title: "Operatorlar",
    lessons: [
      {
        id: "js-operators",
        slug: "operatorlar",
        title: "Operatorlar",
        description: "Arifmetik, solishtirish, mantiqiy va boshqa operatorlar",
        sections: [
          { id: "arithmetic", title: "Arifmetik" },
          { id: "comparison", title: "Solishtirish" },
          { id: "logical", title: "Mantiqiy" },
          { id: "other", title: "Boshqa operatorlar" },
        ],
        content: `<h2 id="arithmetic">Arifmetik operatorlar</h2>
<table>
<tr><th>Operator</th><th>Tavsif</th><th>Misol</th></tr>
<tr><td>+</td><td>Qo'shish / birlashtirish</td><td>5 + 3 = 8</td></tr>
<tr><td>-</td><td>Ayirish</td><td>5 - 3 = 2</td></tr>
<tr><td>*</td><td>Ko'paytirish</td><td>5 * 3 = 15</td></tr>
<tr><td>/</td><td>Bo'lish</td><td>10 / 2 = 5</td></tr>
<tr><td>%</td><td>Qoldiq (modulo)</td><td>10 % 3 = 1</td></tr>
<tr><td>**</td><td>Daraja</td><td>2 ** 10 = 1024</td></tr>
<tr><td>++</td><td>1 ga oshirish</td><td>x++</td></tr>
<tr><td>--</td><td>1 ga kamaytirish</td><td>x--</td></tr>
</table>

<h2 id="comparison">Solishtirish operatorlari</h2>
<ul>
  <li><code>==</code> — teng (tur o'zgartirib)</li>
  <li><code>===</code> — qat'iy teng (tur ham bir xil) — <strong>har doim shu ishlatiladi!</strong></li>
  <li><code>!=</code> — teng emas (tur o'zgartirib)</li>
  <li><code>!==</code> — qat'iy teng emas</li>
  <li><code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, <code>&lt;=</code></li>
</ul>

<h2 id="logical">Mantiqiy operatorlar</h2>
<ul>
  <li><code>&amp;&amp;</code> — va (AND): ikkala shart ham true bo'lsa true</li>
  <li><code>||</code> — yoki (OR): kamida biri true bo'lsa true</li>
  <li><code>!</code> — inkor (NOT): true ni false ga, false ni true ga</li>
</ul>

<h2 id="other">Boshqa foydali operatorlar</h2>
<ul>
  <li><code>??</code> — nullish coalescing: null/undefined bo'lsa o'ng tomoni</li>
  <li><code>?.</code> — optional chaining: null/undefined bo'lsa xato bermaydi</li>
  <li><code>? :</code> — ternary: shart ? true_holat : false_holat</li>
  <li><code>+=, -=, *=, /=</code> — qisqacha tayinlash</li>
</ul>`,
        codeExample: {
          title: "Operatorlar misollari",
          language: "javascript",
          code: `// Arifmetik
console.log(10 % 3);     // 1 (qoldiq)
console.log(2 ** 10);    // 1024

let x = 5;
x++;                     // x = 6
x += 3;                  // x = 9

// Solishtirish — MUHIM!
console.log(5 == "5");   // true  (tur o'zgartirib solishtiradi — XAVFLI)
console.log(5 === "5");  // false (qat'iy — tur ham tekshiriladi)
console.log(5 !== "5");  // true

// Mantiqiy
console.log(true && false);  // false
console.log(true || false);  // true
console.log(!true);          // false

// Short-circuit evaluation
let ism = null;
let nom = ism || "Anonim"; // ism falsy bo'lsa "Anonim"
console.log(nom);            // "Anonim"

// Nullish coalescing (??) — faqat null/undefined uchun
let ball = 0;
console.log(ball || 100);  // 100 (0 falsy!)
console.log(ball ?? 100);  // 0  (?? faqat null/undefined tekshiradi)

// Ternary
let yosh = 20;
let holat = yosh >= 18 ? "Voyaga yetgan" : "Voyaga yetmagan";

// Optional chaining
let user = null;
console.log(user?.name);    // undefined (xato emas!)
console.log(user?.address?.city); // undefined`,
        },
        liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: sans-serif; padding: 24px; background: #0f172a; color: #e2e8f0; }
    .op-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .op-card { background: #1e293b; padding: 14px; border-radius: 8px; font-size: 13px; }
    .op-title { color: #f7df1e; font-weight: 700; margin-bottom: 6px; }
    .op-row { display: flex; justify-content: space-between; padding: 3px 0;
              border-bottom: 1px solid #0f172a; }
    .op-expr { color: #94a3b8; }
    .op-res { color: #34d399; font-weight: 700; }
  </style>
</head>
<body>
  <div class="op-grid">
    <div class="op-card">
      <div class="op-title">Solishtirish</div>
      <div class="op-row"><span class="op-expr">5 == "5"</span><span class="op-res">\${5 == "5"}</span></div>
      <div class="op-row"><span class="op-expr">5 === "5"</span><span class="op-res">\${5 === "5"}</span></div>
      <div class="op-row"><span class="op-expr">null == undefined</span><span class="op-res">\${null == undefined}</span></div>
      <div class="op-row"><span class="op-expr">null === undefined</span><span class="op-res">\${null === undefined}</span></div>
    </div>
    <div class="op-card">
      <div class="op-title">Mantiqiy</div>
      <div class="op-row"><span class="op-expr">0 || "Anonim"</span><span class="op-res">\${0 || "Anonim"}</span></div>
      <div class="op-row"><span class="op-expr">0 ?? "Anonim"</span><span class="op-res">\${0 ?? "Anonim"}</span></div>
      <div class="op-row"><span class="op-expr">"" && "Salom"</span><span class="op-res">\${"" && "Salom"}</span></div>
      <div class="op-row"><span class="op-expr">!!"Ali"</span><span class="op-res">\${!!"Ali"}</span></div>
    </div>
  </div>
  <script>
    // Template literal izoh: yuqoridagi {} ichidagi ifodalar brauzer tomonidan bajariladi
  </script>
</body>
</html>`,
        notes: [
          "Har doim === ishlatng, == ni hech qachon ishlatmang — implicit type coercion xavfli",
          "|| va ?? farqi: || falsy (0, '', false) da ham ishlaydi, ?? faqat null/undefined da",
          "Optional chaining (?.) — chuqur nested obyektlarda xato oldini oladi",
        ],
        commonMistakes: [
          "== o'rniga === ishlatmaslik — '5' == 5 true bo'lishi kutilmagan natijalarga olib keladi",
          "0 || defaultValue — 0 ni default bilan almashtiradi, ?? ishlatish kerak",
        ],
        practiceTask: "Kalkulyator yarating: ikkita son kiritilsin, +/-/*// amallarini bajarsin",
        quiz: [
          {
            question: "0 ?? 'default' natijasi nima?",
            options: ["'default'", "0", "false", "null"],
            correct: 1,
            explanation: "?? (nullish coalescing) faqat null va undefined da o'ng tomoni qaytaradi. 0 null emas, shuning uchun 0 qaytaradi.",
          },
        ],
      },
    ],
  },
  {
    title: "Shart operatorlari",
    lessons: [
      {
        id: "js-if",
        slug: "if-else",
        title: "if / else / else if",
        description: "Shartli bajarish — dastur qaysi yo'ldan borishini boshqarish",
        sections: [
          { id: "if", title: "if / else" },
          { id: "else-if", title: "else if" },
          { id: "ternary", title: "Ternary operator" },
        ],
        content: `<h2 id="if">if / else</h2>
<p>Shartga qarab turli kod bajariladi:</p>
<pre><code>if (shart) {
  // shart true bo'lsa
} else {
  // shart false bo'lsa
}</code></pre>
<p><strong>Truthy va Falsy:</strong> JS da quyidagilar <code>false</code> sifatida qabul qilinadi:</p>
<ul>
  <li><code>false</code>, <code>0</code>, <code>""</code> (bo'sh string), <code>null</code>, <code>undefined</code>, <code>NaN</code></li>
  <li>Qolgan hamma narsa — <code>true</code> (truthy)</li>
</ul>

<h2 id="else-if">else if — bir necha shart</h2>
<pre><code>if (ball >= 90) {
  baho = "A";
} else if (ball >= 70) {
  baho = "B";
} else if (ball >= 50) {
  baho = "C";
} else {
  baho = "F";
}</code></pre>

<h2 id="ternary">Ternary operator</h2>
<p>Qisqa if-else: <code>shart ? true_qiymat : false_qiymat</code></p>
<pre><code>let xabar = yosh >= 18 ? "Katta" : "Kichik";</code></pre>`,
        codeExample: {
          title: "if/else va ternary",
          language: "javascript",
          code: `// Oddiy if-else
let harorat = 25;

if (harorat > 30) {
  console.log("Issiq!");
} else if (harorat > 20) {
  console.log("Iliq");
} else if (harorat > 10) {
  console.log("Sovuqroq");
} else {
  console.log("Sovuq!");
}

// Truthy/Falsy
let ism = "";
if (ism) {
  console.log("Ism bor: " + ism);
} else {
  console.log("Ism yo'q"); // bu ishlaydi
}

// Ternary
let ball = 75;
let baho = ball >= 90 ? "A"
         : ball >= 70 ? "B"
         : ball >= 50 ? "C"
         : "F";
console.log(baho); // "B"

// if bilan qisqa yozuv (bir qator)
let x = 10;
if (x > 5) console.log("Katta"); // jingalak qavssiz — faqat bir qator

// Mantiqiy operator bilan qisqa shart
let login = true;
login && console.log("Tizimga kirdingiz"); // if (login) {...} ga ekvivalent`,
        },
        liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: sans-serif; padding: 24px; background: #0f172a; color: #e2e8f0; }
    input[type=range] { width: 100%; margin: 12px 0; }
    .result { background: #1e293b; padding: 16px; border-radius: 8px; text-align: center; }
    .grade { font-size: 48px; font-weight: 900; }
    .label { font-size: 13px; color: #64748b; margin-top: 4px; }
    .A { color: #34d399; } .B { color: #60a5fa; }
    .C { color: #f59e0b; } .F { color: #ef4444; }
  </style>
</head>
<body>
  <h3>Baho hisoblagich</h3>
  <input type="range" min="0" max="100" value="75" id="ball" oninput="hisob()">
  <div id="ball-val" style="text-align:center;color:#f7df1e;font-weight:700">75 ball</div>
  <div class="result">
    <div class="grade" id="grade">B</div>
    <div class="label" id="msg"></div>
  </div>

  <script>
    function hisob() {
      const b = Number(document.getElementById("ball").value);
      document.getElementById("ball-val").textContent = b + " ball";

      let baho, xabar, cls;
      if (b >= 90) {
        [baho, xabar, cls] = ["A", "A'lo! Mukammal natija", "A"];
      } else if (b >= 70) {
        [baho, xabar, cls] = ["B", "Yaxshi natija!", "B"];
      } else if (b >= 50) {
        [baho, xabar, cls] = ["C", "Qonikarli. Ko'proq o'qing", "C"];
      } else {
        [baho, xabar, cls] = ["F", "Muvaffaqiyatsiz. Qayta urinib ko'ring", "F"];
      }

      document.getElementById("grade").textContent = baho;
      document.getElementById("grade").className = "grade " + cls;
      document.getElementById("msg").textContent = xabar;
    }
    hisob();
  </script>
</body>
</html>`,
        notes: [
          "Qavssiz if faqat keyingi bitta qatorga ta'sir qiladi — har doim {} ishlatish tavsiya",
          "if-else zanjiri juda uzun bo'lsa switch yoki object lookup ni ko'ring",
          "!! operatori qiymatni haqiqiy boolean ga aylantiradi: !!'' = false, !!'a' = true",
        ],
        commonMistakes: [
          "= (tayinlash) va === (solishtirish) ni aralashtirish: if (x = 5) har doim true",
          "Falsy qiymatlar: 0, '', null, undefined, NaN — bular if shartida false hisoblanadi",
        ],
        practiceTask: "BMI kalkulyator: bo'y va vazn kiritilsin, BMI hisoblansin, natijaga qarab holat chiqarilsin",
        quiz: [
          {
            question: "Qaysi qiymat if shartida true sifatida qabul qilinadi?",
            options: ["0", '""', "null", '"false"'],
            correct: 3,
            explanation: "'false' string — bo'sh emas, shuning uchun truthy. 0, '', null — falsy qiymatlar.",
          },
        ],
      },
      {
        id: "js-switch",
        slug: "switch",
        title: "switch / case",
        description: "Ko'p variant holatlari uchun switch operatori",
        sections: [
          { id: "syntax", title: "Sintaksis" },
          { id: "break", title: "break va fall-through" },
          { id: "alternatives", title: "Alternativalar" },
        ],
        content: `<h2 id="syntax">switch sintaksisi</h2>
<p><code>switch</code> bir o'zgaruvchini bir necha qiymat bilan solishtirganda if-else dan qulay.</p>
<pre><code>switch (ifoda) {
  case qiymat1:
    // kod
    break;
  case qiymat2:
    // kod
    break;
  default:
    // hech biri mos kelmasa
}</code></pre>
<p>switch <strong>qat'iy tenglik</strong> (===) bilan solishtiradi.</p>

<h2 id="break">break va fall-through</h2>
<p><code>break</code> — switch dan chiqish. Yo'q bo'lsa, keyingi case ham bajariladi (fall-through).</p>
<p>Fall-through ba'zida ataylab ishlatiladi — bir necha case uchun bir xil kod bajarish:</p>
<pre><code>case "dushanba":
case "seshanba":
case "chorshanba":
  console.log("Ish kuni");
  break;</code></pre>

<h2 id="alternatives">Alternativalar</h2>
<p>Ko'p hollarda switch o'rniga <strong>object lookup</strong> yanada toza:</p>
<pre><code>const kunlar = {
  "dushanba": "Ish kuni",
  "shanba": "Dam olish kuni",
};
let natija = kunlar[kun] ?? "Noma'lum";</code></pre>`,
        codeExample: {
          title: "switch/case",
          language: "javascript",
          code: `// Oddiy switch
let kun = "dushanba";

switch (kun) {
  case "dushanba":
  case "seshanba":
  case "chorshanba":
  case "payshanba":
  case "juma":
    console.log("Ish kuni");
    break;
  case "shanba":
  case "yakshanba":
    console.log("Dam olish kuni");
    break;
  default:
    console.log("Noto'g'ri kun");
}

// switch bilan qiymat qaytarish
function bahoNomi(baho) {
  switch (baho) {
    case "A": return "A'lo";
    case "B": return "Yaxshi";
    case "C": return "Qonikarli";
    case "D": return "Qoniqarsiz";
    default:  return "Noma'lum baho";
  }
}

// Object lookup — toza alternativa
const kunTuri = {
  dushanba: "Ish",
  seshanba: "Ish",
  shanba: "Dam olish",
  yakshanba: "Dam olish",
};
let tur = kunTuri["shanba"] ?? "Noma'lum";
console.log(tur); // "Dam olish"`,
        },
        liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: sans-serif; padding: 24px; background: #0f172a; color: #e2e8f0; }
    select { width: 100%; padding: 10px; background: #1e293b; border: 1px solid #334155;
             border-radius: 8px; color: #e2e8f0; font-size: 14px; margin-bottom: 16px; }
    .result { background: #1e293b; padding: 20px; border-radius: 8px; text-align: center; }
    .emoji { font-size: 48px; }
    .desc { color: #94a3b8; margin-top: 8px; font-size: 14px; }
  </style>
</head>
<body>
  <select id="kun" onchange="update()">
    <option>dushanba</option>
    <option>seshanba</option>
    <option>chorshanba</option>
    <option>payshanba</option>
    <option>juma</option>
    <option>shanba</option>
    <option>yakshanba</option>
  </select>
  <div class="result">
    <div class="emoji" id="emoji"></div>
    <div class="desc" id="desc"></div>
  </div>

  <script>
    function update() {
      const kun = document.getElementById("kun").value;
      let emoji, desc;

      switch (kun) {
        case "dushanba": [emoji, desc] = ["😤", "Haftaning boshi..."]; break;
        case "seshanba": [emoji, desc] = ["💪", "Mehnat kuni!"];       break;
        case "chorshanba": [emoji, desc] = ["😊", "Haftaning yarmi"]; break;
        case "payshanba": [emoji, desc] = ["🚀", "Oxiri yaqin!"]; break;
        case "juma": [emoji, desc] = ["🎉", "Barakali juma!"];   break;
        case "shanba": [emoji, desc] = ["😎", "Dam olish kuni"]; break;
        case "yakshanba": [emoji, desc] = ["😴", "Ertaga ish..."]; break;
      }

      document.getElementById("emoji").textContent = emoji;
      document.getElementById("desc").textContent = desc;
    }
    update();
  </script>
</body>
</html>`,
        notes: [
          "break ni unutmang — yo'q bo'lsa keyingi case ham bajariladi (fall-through)",
          "switch === bilan solishtiradi — switch('5') case 5 ga mos kelmaydi",
          "Object lookup ko'pincha switch dan toza va tezroq yechim",
        ],
        commonMistakes: [
          "break ni unutish — kutilmagan fall-through xatolariga olib keladi",
          "switch (x == 5) yozish — switch ifodani baholaydi, ichida shart emas kerak",
        ],
        practiceTask: "Oylar kalkulyatori: 1-12 son kiritilib, oy nomi va nechi kunligi chiqarilsin",
        quiz: [
          {
            question: "switch da break yo'q bo'lsa nima bo'ladi?",
            options: [
              "Xato chiqadi",
              "Faqat shu case ishlaydi",
              "Keyingi case ham bajariladi (fall-through)",
              "switch to'xtaydi",
            ],
            correct: 2,
            explanation: "break yo'q bo'lsa fall-through — keyingi case ham bajariladi, to'g'ri case topilgandan to break yoki switch oxirigacha.",
          },
        ],
      },
    ],
  },
  {
    title: "Tsikllar",
    lessons: [
      {
        id: "js-for",
        slug: "for-tsikl",
        title: "for tsikli",
        description: "Klassik for tsikli va uning variantlari",
        sections: [
          { id: "for", title: "Klassik for" },
          { id: "for-of", title: "for...of" },
          { id: "for-in", title: "for...in" },
          { id: "break-continue", title: "break va continue" },
        ],
        content: `<h2 id="for">Klassik for tsikli</h2>
<pre><code>for (boshlash; shart; qadam) {
  // kod
}</code></pre>
<ul>
  <li><strong>boshlash</strong> — tsikl boshida bir marta ishlaydi: <code>let i = 0</code></li>
  <li><strong>shart</strong> — har iteratsiyada tekshiriladi, false bo'lsa to'xtaydi</li>
  <li><strong>qadam</strong> — har iteratsiyadan keyin: <code>i++</code></li>
</ul>

<h2 id="for-of">for...of — massiv va iterable uchun</h2>
<pre><code>const mevalar = ["olma", "anor", "shaftoli"];
for (const meva of mevalar) {
  console.log(meva);
}</code></pre>
<p>String, Map, Set, NodeList da ham ishlaydi.</p>

<h2 id="for-in">for...in — obyekt kalitlari uchun</h2>
<pre><code>const odam = { ism: "Ali", yosh: 25 };
for (const kalit in odam) {
  console.log(kalit, odam[kalit]);
}</code></pre>

<h2 id="break-continue">break va continue</h2>
<ul>
  <li><code>break</code> — tsiklni to'xtatib chiqadi</li>
  <li><code>continue</code> — bu iteratsiyani o'tkazib, keyingisiga o'tadi</li>
</ul>`,
        codeExample: {
          title: "for tsikl turlari",
          language: "javascript",
          code: `// Klassik for
for (let i = 0; i < 5; i++) {
  console.log(i); // 0 1 2 3 4
}

// Teskari
for (let i = 10; i >= 0; i -= 2) {
  console.log(i); // 10 8 6 4 2 0
}

// for...of — massiv elementlari
const mevalar = ["olma", "anor", "shaftoli"];
for (const meva of mevalar) {
  console.log(meva);
}

// for...of index bilan (entries())
for (const [i, meva] of mevalar.entries()) {
  console.log(i, meva); // 0 "olma", 1 "anor"...
}

// for...in — obyekt kalitlari
const odam = { ism: "Ali", yosh: 25, shahar: "Toshkent" };
for (const key in odam) {
  console.log(\`\${key}: \${odam[key]}\`);
}

// break va continue
for (let i = 0; i < 10; i++) {
  if (i === 3) continue; // 3 ni o'tkazib ketch
  if (i === 7) break;    // 7 da to'xta
  console.log(i);        // 0 1 2 4 5 6
}`,
        },
        liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: sans-serif; padding: 24px; background: #0f172a; color: #e2e8f0; }
    .controls { display: flex; gap: 8px; margin-bottom: 16px; flex-wrap: wrap; }
    button { background: #1e293b; color: #e2e8f0; border: 1px solid #334155;
             padding: 8px 16px; border-radius: 8px; cursor: pointer; font-size: 13px; }
    button:hover { background: #334155; }
    #out { background: #1e293b; padding: 16px; border-radius: 8px;
           display: flex; flex-wrap: wrap; gap: 8px; min-height: 60px; }
    .bubble { background: #f7df1e; color: #0f172a; width: 36px; height: 36px;
              border-radius: 50%; display: flex; align-items: center; justify-content: center;
              font-weight: 700; font-size: 13px; }
    .skip { background: #334155; color: #64748b; }
  </style>
</head>
<body>
  <div class="controls">
    <button onclick="oddiy()">Oddiy for</button>
    <button onclick="juft()">Juft sonlar</button>
    <button onclick="toq()">Toq sonlar</button>
    <button onclick="qadar()">break(5 da)</button>
  </div>
  <div id="out"></div>

  <script>
    function render(arr, skip=[]) {
      document.getElementById("out").innerHTML = arr.map(n =>
        \`<div class="bubble \${skip.includes(n) ? 'skip' : ''}">\${n}</div>\`
      ).join('');
    }

    function oddiy() { render([...Array(10)].map((_,i)=>i)); }
    function juft()  { render([0,2,4,6,8,10,12,14,16,18]); }
    function toq()   { render([1,3,5,7,9,11,13,15,17,19]); }
    function qadar() {
      const arr = [...Array(10)].map((_,i)=>i);
      render(arr, [5,6,7,8,9]);
    }
    oddiy();
  </script>
</body>
</html>`,
        notes: [
          "for...of — massivlar uchun, for...in — obyekt kalitlari uchun. Aralashtirib yuborma!",
          "for...in massivda ishlatish xavfli — prototip metodlari ham kelishi mumkin",
          "for...of string da ham ishlaydi: for (const harf of 'salom') {...}",
        ],
        commonMistakes: [
          "for...in ni massivda ishlatish — indeks string ko'rinishida keladi, prototype kelishi mumkin",
          "i < arr.length o'rniga i <= arr.length — oxirgi undefined bo'ladi",
        ],
        practiceTask: "1 dan 100 gacha sonlarni yig'ing. 3 ga bo'linadigan sonlarni o'tkazib yuboring",
        quiz: [
          {
            question: "for...of va for...in farqi nima?",
            options: [
              "Hech qanday farq yo'q",
              "for...of qiymatlar, for...in kalitlar bo'yicha iteratsiya qiladi",
              "for...in tezroq ishlaydi",
              "for...of faqat massiv uchun",
            ],
            correct: 1,
            explanation: "for...of massiv/iterable qiymatlarini, for...in obyekt kalitlarini (property names) iteratsiya qiladi.",
          },
        ],
      },
      {
        id: "js-while",
        slug: "while-tsikl",
        title: "while va do...while",
        description: "Shart asosida ishlaydigna tsikllar",
        sections: [
          { id: "while", title: "while tsikli" },
          { id: "dowhile", title: "do...while" },
          { id: "when", title: "Qachon qaysi?" },
        ],
        content: `<h2 id="while">while tsikli</h2>
<p>Shart <code>true</code> bo'lguncha takrorlanadi. Necha marta ishlashini oldindan bilmasangiz foydali.</p>
<pre><code>while (shart) {
  // kod
}</code></pre>
<p><strong>Ehtiyot:</strong> shart hech qachon <code>false</code> bo'lmasa — cheksiz tsikl (infinite loop)!</p>

<h2 id="dowhile">do...while</h2>
<p>Avval bir marta bajaradi, keyin shartni tekshiradi. Kamida bir marta ishlashi kerak bo'lganda:</p>
<pre><code>do {
  // avval bajariladi
} while (shart);</code></pre>

<h2 id="when">Qachon qaysi tsikl?</h2>
<ul>
  <li><strong>for</strong> — necha marta ishlashini bilsangiz</li>
  <li><strong>for...of</strong> — massiv yoki iterable elementlarini aylantirganda</li>
  <li><strong>while</strong> — noma'lum miqdordagi iteratsiya</li>
  <li><strong>do...while</strong> — kamida bir marta bajarilishi kerak</li>
</ul>`,
        codeExample: {
          title: "while va do...while",
          language: "javascript",
          code: `// while — nechtaligini bilmaymiz
let son = 1;
while (son < 1000) {
  son *= 2;
}
console.log(son); // 1024

// Foydalanuvchi kiritishi (simulyatsiya)
let kirish;
let urinishlar = 0;
while (kirish !== "1234") {
  kirish = prompt("PIN kiriting:");
  urinishlar++;
  if (urinishlar >= 3) {
    console.log("Bloklandi!");
    break;
  }
}

// do...while — kamida bir marta
let raqam;
do {
  raqam = Math.floor(Math.random() * 10);
  console.log("Tasodifiy:", raqam);
} while (raqam !== 5); // 5 chiqqunicha davom etadi
console.log("5 chiqdi!");

// while bilan massiv qayta ishlash
const stek = [1, 2, 3, 4, 5];
while (stek.length > 0) {
  const element = stek.pop();
  console.log(element); // 5 4 3 2 1
}`,
        },
        liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: sans-serif; padding: 24px; background: #0f172a; color: #e2e8f0; }
    .controls { display: flex; gap: 8px; margin-bottom: 16px; }
    button { background: #f7df1e; color: #0f172a; border: none;
             padding: 8px 16px; border-radius: 8px; cursor: pointer; font-weight: 700; }
    .log { background: #1e293b; padding: 16px; border-radius: 8px; font-family: monospace;
           font-size: 13px; min-height: 80px; }
    .log div { color: #94a3b8; padding: 2px 0; }
    .log .hi { color: #34d399; font-weight: 700; }
  </style>
</head>
<body>
  <h3>while bilan 2 ning darajalari</h3>
  <div class="controls">
    <button onclick="run()">Ishlatish</button>
    <button onclick="clear()">Tozalash</button>
  </div>
  <div class="log" id="log">Tugmani bosing...</div>

  <script>
    function log(msg, hi=false) {
      const div = document.getElementById("log");
      if (div.textContent === "Tugmani bosing...") div.innerHTML = "";
      div.innerHTML += \`<div class="\${hi ? 'hi' : ''}">\${msg}</div>\`;
    }

    function run() {
      document.getElementById("log").innerHTML = "";
      let son = 1;
      let qadam = 0;
      while (son < 2000) {
        son *= 2;
        qadam++;
        const hi = son >= 1000;
        log(\`Qadam \${qadam}: \${son}\`, hi);
      }
    }

    function clear() {
      document.getElementById("log").textContent = "Tugmani bosing...";
    }
  </script>
</body>
</html>`,
        notes: [
          "Cheksiz tsikldan qo'rqmang — break bilan har doim chiqish mumkin",
          "while (true) { ... break; } pattern — cheksiz tsikl + shartli chiqish",
          "Stek va navbat (queue) tuzilmalari uchun while juda mos keladi",
        ],
        commonMistakes: [
          "Shart hech qachon o'zgarmaydigan while — brauzer qotib qoladi",
          "do...while ni while bilan aralashtirish — do...while kamida bir marta ishlaydi",
        ],
        practiceTask: "Tasodifiy son topish o'yini: 1-100 son o'ylansin, foydalanuvchi topguncha tahmin qilsin",
        quiz: [
          {
            question: "do...while va while ning asosiy farqi nima?",
            options: [
              "do...while tezroq ishlaydi",
              "do...while kamida bir marta bajariladi",
              "while ko'proq imkoniyatga ega",
              "Hech qanday farq yo'q",
            ],
            correct: 1,
            explanation: "do...while avval bajariladi, keyin shartni tekshiradi — shuning uchun shart false bo'lsa ham kamida bir marta ishlaydi.",
          },
        ],
      },
    ],
  },
];
