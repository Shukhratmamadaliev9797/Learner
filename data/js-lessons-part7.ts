import type { LessonGroup } from "@/lib/types";

export const jsPart7Groups: LessonGroup[] = [
  {
    title: "OOP — Obyektga Yo'naltirilgan Dasturlash",
    lessons: [
      {
        id: "js-classes",
        slug: "classlar",
        title: "Class va OOP",
        description: "ES6 class sintaksisi, constructor, metodlar, extends va super",
        sections: [
          { id: "class", title: "Class yaratish" },
          { id: "inherit", title: "Meros (extends)" },
          { id: "private", title: "Private va static" },
        ],
        content: `<h2 id="class">Class yaratish</h2>
<p>ES6 class sintaksisi — prototype asosidagi merosning qulay yozuvi.</p>
<pre><code>class Hayvon {
  constructor(ism, yosh) {
    this.ism = ism;
    this.yosh = yosh;
  }
  // Metod
  tavif() {
    return \`\${this.ism}, \${this.yosh} yoshli\`;
  }
  // Getter
  get kattaligi() {
    return this.yosh > 5 ? "katta" : "kichik";
  }
}

const it = new Hayvon("Rex", 3);</code></pre>

<h2 id="inherit">Meros (extends va super)</h2>
<pre><code>class It extends Hayvon {
  constructor(ism, yosh, zoti) {
    super(ism, yosh); // ota constructor
    this.zoti = zoti;
  }
  huv() {
    return "Hav hav!";
  }
}</code></pre>

<h2 id="private">Private va static</h2>
<ul>
  <li><code>#</code> prefiksi — private field (tashqaridan kirish mumkin emas)</li>
  <li><code>static</code> — namunaga emas, classning o'ziga tegishli metod/field</li>
  <li>Getter/Setter — <code>get name()</code> / <code>set name(v)</code></li>
</ul>`,
        codeExample: {
          title: "Class va OOP misoli",
          language: "javascript",
          code: `class BankHisobi {
  #balans; // private field

  constructor(egasi, boshlang_ich = 0) {
    this.egasi = egasi;
    this.#balans = boshlang_ich;
    this.tarix = [];
  }

  topshir(summa) {
    if (summa <= 0) throw new Error("Summa musbat bo'lsin");
    this.#balans += summa;
    this.tarix.push({ amal: "topshirish", summa, vaqt: new Date() });
    return this;
  }

  yechib_ol(summa) {
    if (summa > this.#balans) throw new Error("Mablag' yetarli emas");
    this.#balans -= summa;
    this.tarix.push({ amal: "yechib_olish", summa, vaqt: new Date() });
    return this;
  }

  get balans() { return this.#balans; }

  toString() {
    return \`\${this.egasi}: \${this.#balans.toLocaleString()} so'm\`;
  }

  static yaratish(egasi, summa) {
    return new BankHisobi(egasi, summa);
  }
}

// Meros
class JamgTarma extends BankHisobi {
  #foiz;

  constructor(egasi, boshlang_ich, foiz = 0.1) {
    super(egasi, boshlang_ich);
    this.#foiz = foiz;
  }

  foiz_qoshish() {
    const foiz = this.balans * this.#foiz;
    this.topshir(foiz);
    return foiz;
  }
}

// Ishlatish
const hisob = BankHisobi.yaratish("Ali", 1000);
hisob.topshir(500).topshir(200).yechib_ol(300); // method chaining
console.log(hisob.balans); // 1400
// console.log(hisob.#balans); // SyntaxError — private!

const jamg = new JamgTarma("Vali", 10000, 0.15);
console.log(jamg.foiz_qoshishing()); // 1500
console.log(jamg instanceof BankHisobi); // true`,
        },
        liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: sans-serif; padding: 24px; background: #0f172a; color: #e2e8f0; }
    .bank-app { max-width: 340px; }
    .card { background: #1e293b; border-radius: 12px; padding: 20px; margin-bottom: 12px; }
    .owner { font-size: 11px; color: #64748b; text-transform: uppercase; letter-spacing: 1px; }
    .balance { font-size: 36px; font-weight: 900; color: #34d399; margin: 4px 0; }
    .controls { display: flex; gap: 8px; }
    input { flex: 1; padding: 8px; background: #0f172a; border: 1px solid #334155;
            border-radius: 6px; color: #e2e8f0; font-size: 13px; }
    .btn { padding: 8px 14px; border: none; border-radius: 6px; cursor: pointer;
           font-weight: 700; font-size: 12px; }
    .add-btn { background: #34d399; color: #0f172a; }
    .sub-btn { background: #ef4444; color: white; }
    .history { margin-top: 12px; }
    .h-item { font-size: 12px; padding: 6px 0; border-bottom: 1px solid #0f172a;
              display: flex; justify-content: space-between; }
    .plus { color: #34d399; } .minus { color: #ef4444; }
    .err { color: #ef4444; font-size: 12px; margin-top: 4px; }
  </style>
</head>
<body>
  <div class="bank-app">
    <div class="card">
      <div class="owner">Bank Hisobi (Class)</div>
      <div class="balance" id="bal">1,000 so'm</div>
      <div class="controls">
        <input type="number" id="summa" value="200" min="1">
        <button class="btn add-btn" onclick="amal('top')">+ Topshir</button>
        <button class="btn sub-btn" onclick="amal('yech')">− Yechib</button>
      </div>
      <div class="err" id="err"></div>
    </div>
    <div class="card history" id="hist"></div>
  </div>

  <script>
    class BankHisobi {
      #balans;
      constructor(egasi, boshlang_ich) {
        this.egasi = egasi;
        this.#balans = boshlang_ich;
        this.tarix = [];
      }
      topshir(s) {
        if (s <= 0) throw new Error("Summa musbat bo'lsin");
        this.#balans += s;
        this.tarix.unshift({ amal: "top", summa: s });
        return this;
      }
      yechib_ol(s) {
        if (s > this.#balans) throw new Error("Mablag' yetarli emas");
        if (s <= 0) throw new Error("Summa musbat bo'lsin");
        this.#balans -= s;
        this.tarix.unshift({ amal: "yech", summa: s });
        return this;
      }
      get balans() { return this.#balans; }
    }

    const h = new BankHisobi("Ali", 1000);

    function render() {
      document.getElementById("bal").textContent = h.balans.toLocaleString() + " so'm";
      document.getElementById("hist").innerHTML = h.tarix.slice(0, 5).map(t =>
        \`<div class="h-item">
          <span class="\${t.amal==='top'?'plus':'minus'}">\${t.amal==='top'?'+':'-'}\${t.summa.toLocaleString()}</span>
          <span style="color:#475569">\${t.amal==='top'?'Topshirish':'Yechib olish'}</span>
        </div>\`
      ).join('') || '<div style="color:#475569;font-size:12px">Tarix yo\'q</div>';
    }

    function amal(tip) {
      const s = Number(document.getElementById("summa").value);
      const err = document.getElementById("err");
      try {
        if (tip === "top") h.topshir(s);
        else h.yechib_ol(s);
        err.textContent = "";
        render();
      } catch (e) {
        err.textContent = e.message;
      }
    }

    render();
  </script>
</body>
</html>`,
        notes: [
          "# bilan private field — haqiqiy private, tashqaridan SyntaxError",
          "static metodlar instance da emas, class ning o'zida: BankHisobi.yaratish()",
          "class aslida JavaScript da prototype asosida ishlaydi — syntactic sugar",
        ],
        commonMistakes: [
          "constructor da super() ni extends class da chaqirmaslik — ReferenceError",
          "this ni arrow function va oddiy funksiya da farqini tushunmaslik",
        ],
        practiceTask: "Shape hierarchy: Shape (area, perimeter), Circle extends Shape, Rectangle extends Shape",
        quiz: [
          {
            question: "Class da private field qanday e'lon qilinadi?",
            options: ["_field", "private field", "#field", "__field"],
            correct: 2,
            explanation: "# prefiksi — ES2022 dan haqiqiy private field: #balans. Tashqaridan kirish SyntaxError.",
          },
        ],
      },
    ],
  },
  {
    title: "ES6+ Zamonaviy JavaScript",
    lessons: [
      {
        id: "js-modules",
        slug: "modullar",
        title: "ES Modules",
        description: "import/export bilan modullar tizimi",
        sections: [
          { id: "export", title: "export" },
          { id: "import", title: "import" },
          { id: "dynamic", title: "Dynamic import" },
        ],
        content: `<h2 id="export">export</h2>
<p>Modul — o'z scope i bor, eksport qilmagan narsalar tashqaridan ko'rinmaydi.</p>
<pre><code>// named export
export const PI = 3.14;
export function qo_sh(a, b) { return a + b; }
export class User { ... }

// default export (bir modulda bitta)
export default function main() { ... }</code></pre>

<h2 id="import">import</h2>
<pre><code>// Named import
import { PI, qo_sh } from "./math.js";

// Alias
import { qo_sh as add } from "./math.js";

// Default import
import main from "./main.js";

// Hammasini
import * as Math from "./math.js";
Math.PI; Math.qo_sh(1, 2);

// Default va named birga
import defaultFn, { PI, qo_sh } from "./math.js";</code></pre>

<h2 id="dynamic">Dynamic import</h2>
<pre><code>// Kerak bo'lganda yuklash (lazy loading)
const { default: heavy } = await import("./heavy.js");

// Conditional
if (user.admin) {
  const admin = await import("./admin.js");
  admin.init();
}</code></pre>`,
        codeExample: {
          title: "ES Modules",
          language: "javascript",
          code: `// === utils.js ===
export const VERSION = "1.0.0";

export function formatSon(n) {
  return n.toLocaleString("uz-UZ");
}

export function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

export default class EventEmitter {
  #listeners = new Map();

  on(event, fn) {
    if (!this.#listeners.has(event)) {
      this.#listeners.set(event, []);
    }
    this.#listeners.get(event).push(fn);
    return this;
  }

  emit(event, ...args) {
    this.#listeners.get(event)?.forEach(fn => fn(...args));
  }

  off(event, fn) {
    const arr = this.#listeners.get(event);
    if (arr) this.#listeners.set(event, arr.filter(f => f !== fn));
  }
}

// === main.js ===
import EventEmitter, { formatSon, debounce, VERSION } from "./utils.js";

console.log("Versiya:", VERSION);

const emitter = new EventEmitter();
emitter.on("data", (d) => console.log("Data:", d));
emitter.emit("data", { id: 1 });

// Dynamic import
async function lazyLoad() {
  if (kondisiya) {
    const { heavyFn } = await import("./heavy.js");
    heavyFn();
  }
}`,
        },
        liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: monospace; padding: 24px; background: #0f172a; color: #e2e8f0; }
    .file { background: #1e293b; border-radius: 10px; padding: 16px; margin-bottom: 12px; }
    .filename { color: #f7df1e; font-size: 12px; font-weight: 700; margin-bottom: 8px;
                display: flex; align-items: center; gap: 8px; }
    .dot { width: 8px; height: 8px; background: #f7df1e; border-radius: 50%; }
    .code { font-size: 12px; color: #94a3b8; line-height: 1.7; }
    .kw { color: #c084fc; }
    .str { color: #34d399; }
    .fn { color: #60a5fa; }
    .exp { color: #f97316; }
  </style>
</head>
<body>
  <div class="file">
    <div class="filename"><div class="dot"></div>math.js (export)</div>
    <div class="code">
      <span class="kw">export const</span> PI = <span class="str">3.14159</span>;<br>
      <span class="kw">export function</span> <span class="fn">qo_sh</span>(a, b) { <span class="kw">return</span> a + b; }<br>
      <span class="kw">export default function</span> <span class="fn">main</span>() { ... }
    </div>
  </div>
  <div class="file">
    <div class="filename"><div class="dot" style="background:#6366f1"></div>app.js (import)</div>
    <div class="code">
      <span class="kw">import</span> main, { PI, <span class="fn">qo_sh</span> } <span class="kw">from</span> <span class="str">"./math.js"</span>;<br>
      <span class="kw">import</span> * <span class="kw">as</span> Math <span class="kw">from</span> <span class="str">"./math.js"</span>;<br><br>
      console.<span class="fn">log</span>(PI);           <span class="exp">// 3.14159</span><br>
      console.<span class="fn">log</span>(<span class="fn">qo_sh</span>(2, 3)); <span class="exp">// 5</span><br>
      console.<span class="fn">log</span>(Math.PI);     <span class="exp">// 3.14159</span>
    </div>
  </div>
  <div class="file">
    <div class="filename"><div class="dot" style="background:#34d399"></div>Dynamic import</div>
    <div class="code">
      <span class="kw">const</span> { <span class="fn">heavyFn</span> } = <span class="kw">await import</span>(<span class="str">"./heavy.js"</span>);<br>
      <span class="exp">// Faqat kerak bo'lganda yuklanadi — lazy loading</span>
    </div>
  </div>
</body>
</html>`,
        notes: [
          "type='module' script da CORS qoidalari — local file:// da ba'zi brauzerda ishlamaydi",
          "Default export — bitta, named export — istalgancha. Ikkalasini birga ishlatish mumkin",
          "Tree shaking — bundler faqat ishlatilgan exportlarni import qiladi",
        ],
        commonMistakes: [
          "import {} ni require() bilan aralashtirish — ES modules va CommonJS boshqa",
          "Default import da {} ishlatish — import fn from vs import { fn } from farq qiladi",
        ],
        practiceTask: "Utility library yarating: string, number, array helper funksiyalar, named export",
        quiz: [
          {
            question: "export default va named export farqi nima?",
            options: [
              "Default tezroq ishlaydi",
              "Default import da {} kerak emas, named da kerak",
              "Named faqat funksiya uchun",
              "Hech qanday farq yo'q",
            ],
            correct: 1,
            explanation: "import main from './file' — default. import { fn } from './file' — named. Default import istalgan nom bilan import qilinadi.",
          },
        ],
      },
      {
        id: "js-error-handling",
        slug: "xato-boshqarish",
        title: "Xatolarni boshqarish",
        description: "try/catch/finally, Error turlari va maxsus xato sinflari",
        sections: [
          { id: "try-catch", title: "try/catch/finally" },
          { id: "error-types", title: "Error turlari" },
          { id: "custom", title: "Maxsus xato sinflari" },
        ],
        content: `<h2 id="try-catch">try/catch/finally</h2>
<pre><code>try {
  // xato chiqishi mumkin kod
  const data = JSON.parse(noto_g_ri);
} catch (error) {
  console.error(error.message);
  console.error(error.name);    // "SyntaxError"
  console.error(error.stack);   // qaerda xato
} finally {
  // xato bo'lsayam bo'lmasa ham ishlaydi
  loading = false;
}</code></pre>

<h2 id="error-types">JavaScript xato turlari</h2>
<ul>
  <li><code>SyntaxError</code> — sintaksis xato</li>
  <li><code>ReferenceError</code> — e'lon qilinmagan o'zgaruvchi</li>
  <li><code>TypeError</code> — noto'g'ri tur (undefined.property)</li>
  <li><code>RangeError</code> — diapazondan tashqari</li>
  <li><code>URIError</code> — URI kodlash xatosi</li>
</ul>
<p>Xato throw qilish:</p>
<pre><code>throw new Error("Nima bo'ldi");
throw new TypeError("Tur noto'g'ri");</code></pre>

<h2 id="custom">Maxsus xato sinflari</h2>
<pre><code>class ValidationError extends Error {
  constructor(field, message) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}</code></pre>`,
        codeExample: {
          title: "Xatoliklarni boshqarish",
          language: "javascript",
          code: `// Maxsus xato sinflari
class AppError extends Error {
  constructor(message, code, data = null) {
    super(message);
    this.name = "AppError";
    this.code = code;
    this.data = data;
  }
}

class ValidationError extends AppError {
  constructor(field, message) {
    super(message, "VALIDATION_ERROR", { field });
    this.name = "ValidationError";
  }
}

class NetworkError extends AppError {
  constructor(status, message) {
    super(message, "NETWORK_ERROR", { status });
    this.name = "NetworkError";
  }
}

// Forma validatsiya
function formani_tekshir(data) {
  if (!data.ism || data.ism.trim().length < 2) {
    throw new ValidationError("ism", "Ism kamida 2 ta harf bo'lishi kerak");
  }
  if (!data.email || !data.email.includes("@")) {
    throw new ValidationError("email", "Email noto'g'ri formatda");
  }
  if (!data.yosh || data.yosh < 18) {
    throw new ValidationError("yosh", "18 yoshdan katta bo'lishi kerak");
  }
}

// Ishlatish
try {
  formani_tekshir({ ism: "A", email: "noto'g'ri", yosh: 15 });
} catch (err) {
  if (err instanceof ValidationError) {
    console.log(\`Maydon: \${err.data.field}\`);
    console.log(\`Xabar: \${err.message}\`);
  } else if (err instanceof NetworkError) {
    console.log("Network xatosi:", err.data.status);
  } else {
    // Kutilmagan xato — qayta throw
    throw err;
  }
}

// Global xato ushlash
window.addEventListener("error", (e) => {
  console.error("Global xato:", e.error);
});

window.addEventListener("unhandledrejection", (e) => {
  console.error("Unhandled Promise rejection:", e.reason);
  e.preventDefault();
});`,
        },
        liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: sans-serif; padding: 24px; background: #0f172a; color: #e2e8f0; }
    .form { background: #1e293b; border-radius: 12px; padding: 20px; max-width: 340px; }
    .form-title { font-size: 14px; font-weight: 700; color: #e2e8f0; margin-bottom: 16px; }
    .field { margin-bottom: 12px; }
    label { font-size: 11px; color: #64748b; text-transform: uppercase; letter-spacing: 1px;
            display: block; margin-bottom: 4px; }
    input { width: 100%; padding: 10px; background: #0f172a; border: 1px solid #334155;
            border-radius: 8px; color: #e2e8f0; font-size: 13px; box-sizing: border-box; }
    input.error { border-color: #ef4444; }
    input.ok { border-color: #34d399; }
    .err-msg { font-size: 11px; color: #ef4444; margin-top: 3px; }
    button { width: 100%; background: #f7df1e; color: #0f172a; border: none; padding: 12px;
             border-radius: 8px; cursor: pointer; font-weight: 700; font-size: 14px; margin-top: 4px; }
    .result { margin-top: 12px; padding: 10px; border-radius: 8px; font-size: 13px; }
    .success { background: rgba(52,211,153,0.1); color: #34d399; border: 1px solid #34d399; }
    .fail { background: rgba(239,68,68,0.1); color: #ef4444; border: 1px solid #ef4444; }
  </style>
</head>
<body>
  <div class="form">
    <div class="form-title">Forma validatsiyasi</div>

    <div class="field">
      <label>Ism</label>
      <input type="text" id="ism" placeholder="Kamida 2 harf">
      <div class="err-msg" id="ism-err"></div>
    </div>
    <div class="field">
      <label>Email</label>
      <input type="text" id="email" placeholder="user@example.com">
      <div class="err-msg" id="email-err"></div>
    </div>
    <div class="field">
      <label>Yosh</label>
      <input type="number" id="yosh" placeholder="18+">
      <div class="err-msg" id="yosh-err"></div>
    </div>

    <button onclick="submit()">Yuborish</button>
    <div id="result"></div>
  </div>

  <script>
    class ValidationError extends Error {
      constructor(field, message) {
        super(message);
        this.field = field;
      }
    }

    function tozala() {
      ["ism","email","yosh"].forEach(f => {
        document.getElementById(f).className = "";
        document.getElementById(f+"-err").textContent = "";
      });
      document.getElementById("result").textContent = "";
    }

    function tekshir(data) {
      if (!data.ism || data.ism.trim().length < 2)
        throw new ValidationError("ism", "Ism kamida 2 ta harf bo'lsin");
      if (!data.email || !data.email.match(/^[^@]+@[^@]+\.[^@]+$/))
        throw new ValidationError("email", "Email noto'g'ri formatda");
      if (!data.yosh || Number(data.yosh) < 18)
        throw new ValidationError("yosh", "18 yoshdan katta bo'lishi kerak");
    }

    function submit() {
      tozala();
      const data = {
        ism: document.getElementById("ism").value,
        email: document.getElementById("email").value,
        yosh: document.getElementById("yosh").value,
      };
      try {
        tekshir(data);
        document.getElementById("result").className = "result success";
        document.getElementById("result").textContent = "Muvaffaqiyatli! Ma'lumotlar to'g'ri.";
        ["ism","email","yosh"].forEach(f => document.getElementById(f).className = "ok");
      } catch (e) {
        if (e instanceof ValidationError) {
          document.getElementById(e.field).className = "error";
          document.getElementById(e.field+"-err").textContent = e.message;
          document.getElementById("result").className = "result fail";
          document.getElementById("result").textContent = "Xato: " + e.message;
        }
      }
    }
  </script>
</body>
</html>`,
        notes: [
          "instanceof — xato turini tekshirish. typeof err === 'object' yetarli emas",
          "Kutilmagan xatolarni throw eting — hamma xatoni yutyib ketmang",
          "Error.stack — debugging uchun eng muhim xususiyat",
        ],
        commonMistakes: [
          "catch da hamma xatoni bir xil ushlash — ValidationError va NetworkError boshqacha munosabatga ehtiyoj",
          "finally — return qiymatini ustiga yozadi (surprising behavior)",
        ],
        practiceTask: "API wrapper: har xil HTTP statuslar uchun turli xato sinflari, retry logic",
        quiz: [
          {
            question: "try/catch da finally qachon bajariladi?",
            options: [
              "Faqat xato bo'lganda",
              "Faqat xato bo'lmaganida",
              "Har doim (xato bo'lsayam bo'lmasa ham)",
              "Faqat return bo'lsa",
            ],
            correct: 2,
            explanation: "finally har doim bajariladi — try muvaffaqiyatli tugasa ham, catch xatoni ushlasa ham.",
          },
        ],
      },
      {
        id: "js-iterators-generators",
        slug: "iteratorlar-generatorlar",
        title: "Iteratorlar va Generatorlar",
        description: "Symbol.iterator, custom iterator va generator funksiyalar",
        sections: [
          { id: "iterator", title: "Iterator protokoli" },
          { id: "generator", title: "Generator funksiya" },
          { id: "use-cases", title: "Qo'llanishlar" },
        ],
        content: `<h2 id="iterator">Iterator protokoli</h2>
<p>Iterable — <code>for...of</code> bilan aylantirilishi mumkin bo'lgan obyekt. Masalan: massiv, string, Map, Set.</p>
<p>Maxsus iterable yaratish — <code>Symbol.iterator</code> metodi:</p>
<pre><code>const oraliq = {
  boshlash: 1,
  tugash: 5,
  [Symbol.iterator]() {
    let joriy = this.boshlash;
    const oxiri = this.tugash;
    return {
      next() {
        return joriy <= oxiri
          ? { value: joriy++, done: false }
          : { value: undefined, done: true };
      }
    };
  }
};</code></pre>

<h2 id="generator">Generator funksiya</h2>
<p><code>function*</code> — qiymat berib to'xtovchi, keyin davom etuvchi funksiya:</p>
<pre><code>function* hisoblagich() {
  yield 1;
  yield 2;
  yield 3;
}
const gen = hisoblagich();
gen.next(); // {value: 1, done: false}</code></pre>

<h2 id="use-cases">Qo'llanishlar</h2>
<ul>
  <li>Cheksiz ketma-ketlik (Fibonacci, sonlar)</li>
  <li>Lazy evaluation</li>
  <li>Asinxron ketma-ketlik (async generator)</li>
  <li>Redux saga kabi middleware patternlar</li>
</ul>`,
        codeExample: {
          title: "Generator va Iterator",
          language: "javascript",
          code: `// Generator — cheksiz Fibonacci
function* fibonacci() {
  let [a, b] = [0, 1];
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const fib = fibonacci();
console.log(fib.next().value); // 0
console.log(fib.next().value); // 1
console.log(fib.next().value); // 1
console.log(fib.next().value); // 2
console.log(fib.next().value); // 3

// Birinchi 10 ta olish
function* olish(gen, n) {
  for (let i = 0; i < n; i++) {
    yield gen.next().value;
  }
}
console.log([...olish(fibonacci(), 10)]);
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// Custom iterable range
function* range(boshlash, tugash, qadam = 1) {
  for (let i = boshlash; i <= tugash; i += qadam) {
    yield i;
  }
}

for (const n of range(0, 10, 2)) {
  console.log(n); // 0 2 4 6 8 10
}

console.log([...range(1, 5)]); // [1, 2, 3, 4, 5]

// Async generator
async function* asinxron_ketma_ket(urls) {
  for (const url of urls) {
    const res = await fetch(url);
    yield await res.json();
  }
}

// Ishlatish
for await (const data of asinxron_ketma_ket(urls)) {
  console.log(data);
}`,
        },
        liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: sans-serif; padding: 24px; background: #0f172a; color: #e2e8f0; }
    .demo { background: #1e293b; border-radius: 12px; padding: 20px; margin-bottom: 12px; }
    .demo-title { color: #f7df1e; font-size: 12px; font-weight: 700; margin-bottom: 12px; text-transform: uppercase; }
    button { background: #f7df1e; color: #0f172a; border: none; padding: 8px 16px;
             border-radius: 8px; cursor: pointer; font-weight: 700; font-size: 13px; margin-right: 8px; }
    .chips { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 10px; }
    .chip { background: #0f172a; border: 1px solid #334155; padding: 4px 10px;
            border-radius: 20px; font-size: 13px; font-family: monospace; }
    .chip.new { background: #6366f1; color: white; border-color: #6366f1; animation: pop 0.3s; }
    @keyframes pop { from { transform: scale(0.8); opacity: 0; } }
  </style>
</head>
<body>
  <div class="demo">
    <div class="demo-title">Fibonacci Generator</div>
    <button onclick="next_fib()">Keyingi →</button>
    <button onclick="reset_fib()">↺ Reset</button>
    <div class="chips" id="fibs"></div>
  </div>
  <div class="demo">
    <div class="demo-title">Range Generator</div>
    <div style="display:flex;gap:8px;align-items:center">
      <input type="number" id="r-start" value="0" style="width:60px;padding:6px;background:#0f172a;border:1px solid #334155;border-radius:6px;color:#e2e8f0">
      <span>—</span>
      <input type="number" id="r-end" value="20" style="width:60px;padding:6px;background:#0f172a;border:1px solid #334155;border-radius:6px;color:#e2e8f0">
      <span>qadam:</span>
      <input type="number" id="r-step" value="3" style="width:60px;padding:6px;background:#0f172a;border:1px solid #334155;border-radius:6px;color:#e2e8f0">
      <button onclick="show_range()">Ko'rsatish</button>
    </div>
    <div class="chips" id="range-out"></div>
  </div>

  <script>
    function* fibonacci() {
      let [a, b] = [0, 1];
      while (true) { yield a; [a, b] = [b, a + b]; }
    }

    function* range(s, e, step = 1) {
      for (let i = s; i <= e; i += step) yield i;
    }

    let fib = fibonacci();
    let fibs = [];

    function next_fib() {
      fibs.push(fib.next().value);
      document.getElementById("fibs").innerHTML =
        fibs.map((n, i) =>
          \`<span class="chip \${i === fibs.length - 1 ? 'new' : ''}">\${n}</span>\`
        ).join('');
    }

    function reset_fib() {
      fib = fibonacci();
      fibs = [];
      document.getElementById("fibs").innerHTML = '';
    }

    function show_range() {
      const s = Number(document.getElementById("r-start").value);
      const e = Number(document.getElementById("r-end").value);
      const step = Number(document.getElementById("r-step").value);
      const arr = [...range(s, e, step || 1)];
      document.getElementById("range-out").innerHTML =
        arr.map(n => \`<span class="chip">\${n}</span>\`).join('');
    }

    show_range();
  </script>
</body>
</html>`,
        notes: [
          "Generator funksiya * bilan — function* yoki metod sifatida",
          "yield — qiymat beradi va to'xtaydi. next() chaqirilganda davom etadi",
          "for...of generator bilan ishlaydi — to'g'ridan-to'g'ri iterate qilish mumkin",
        ],
        commonMistakes: [
          "Generator cheksiz bo'lsa for...of — cheksiz loop! take() pattern kerak",
          "generator.next() return qiymatini tekshirmaslik — {value, done} obyekt",
        ],
        practiceTask: "Sahifalash generatori: har next() chaqiruvida keyingi 10 ta element",
        quiz: [
          {
            question: "Generator funksiya qanday e'lon qilinadi?",
            options: ["function gen() {}", "async function gen() {}", "function* gen() {}", "generator gen() {}"],
            correct: 2,
            explanation: "Generator funksiya function* kalit so'zi bilan e'lon qilinadi. * belgi muhim.",
          },
        ],
      },
      {
        id: "js-proxy-reflect",
        slug: "proxy-reflect",
        title: "Proxy va Reflect",
        description: "Obyekt operatsiyalarni ushlash va boshqarish",
        sections: [
          { id: "proxy", title: "Proxy" },
          { id: "reflect", title: "Reflect" },
          { id: "use-cases", title: "Amaliy qo'llanishlar" },
        ],
        content: `<h2 id="proxy">Proxy</h2>
<p><strong>Proxy</strong> — obyektga kirish operatsiyalarini ushlash va o'zgartirish imkonini beradi.</p>
<pre><code>const proxy = new Proxy(target, handler);
// handler — "trap" metodlari bilan
// get, set, has, deleteProperty, apply, construct...</code></pre>
<p>Asosiy traplar:</p>
<ul>
  <li><code>get(target, prop)</code> — xususiyatni o'qish</li>
  <li><code>set(target, prop, value)</code> — xususiyatni yozish</li>
  <li><code>has(target, prop)</code> — in operator</li>
  <li><code>deleteProperty(target, prop)</code> — delete operator</li>
  <li><code>apply(target, thisArg, args)</code> — funksiya chaqirish</li>
</ul>

<h2 id="reflect">Reflect</h2>
<p>Proxy handler ichida standart operatsiyani bajarish:</p>
<pre><code>get(target, prop) {
  console.log(\`O'qildi: \${prop}\`);
  return Reflect.get(target, prop); // asl operatsiya
}</code></pre>

<h2 id="use-cases">Amaliy qo'llanishlar</h2>
<ul>
  <li>Ma'lumotlarni validatsiya qilish</li>
  <li>Reactive data (Vue 3 reaktivlik asosi)</li>
  <li>Logging va debugging</li>
  <li>Default qiymatlar</li>
  <li>Read-only obyektlar</li>
</ul>`,
        codeExample: {
          title: "Proxy amaliy misol",
          language: "javascript",
          code: `// 1. Validatsiya Proxy
function validatsiyaLi(obj, schema) {
  return new Proxy(obj, {
    set(target, prop, value) {
      if (schema[prop]) {
        const { tur, min, max, majburiy } = schema[prop];
        if (tur && typeof value !== tur) {
          throw new TypeError(\`\${prop} \${tur} turi bo'lishi kerak\`);
        }
        if (min !== undefined && value < min) {
          throw new RangeError(\`\${prop} \${min} dan katta bo'lishi kerak\`);
        }
        if (max !== undefined && value > max) {
          throw new RangeError(\`\${prop} \${max} dan kichik bo'lishi kerak\`);
        }
      }
      return Reflect.set(target, prop, value);
    }
  });
}

const user = validatsiyaLi({}, {
  yosh: { tur: "number", min: 0, max: 150 },
  ism: { tur: "string" },
});

user.ism = "Ali";    // OK
user.yosh = 25;      // OK
// user.yosh = -1;   // RangeError!
// user.yosh = "25"; // TypeError!

// 2. Reaktiv ma'lumotlar (Vue 3 ga o'xshash)
function reaktiv(obj) {
  return new Proxy(obj, {
    set(target, prop, value) {
      const eski = target[prop];
      Reflect.set(target, prop, value);
      if (eski !== value) {
        console.log(\`\${prop}: \${eski} → \${value}\`);
        // DOM yangilash, watcher larni chaqirish
      }
      return true;
    }
  });
}

const holat = reaktiv({ son: 0, matn: "" });
holat.son = 5;   // "son: 0 → 5"
holat.matn = "Salom"; // "matn:  → Salom"

// 3. Default qiymatlar
const qo_llanma = new Proxy({}, {
  get(target, prop) {
    return prop in target ? target[prop] : \`[\${prop} topilmadi]\`;
  }
});
qo_llanma.salom = "Hello";
console.log(qo_llanma.salom);    // "Hello"
console.log(qo_llanma.boshqa);   // "[boshqa topilmadi]"`,
        },
        liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: sans-serif; padding: 24px; background: #0f172a; color: #e2e8f0; }
    .demo { background: #1e293b; border-radius: 12px; padding: 20px; }
    .demo-title { color: #f7df1e; font-size: 12px; font-weight: 700; margin-bottom: 12px; text-transform: uppercase; }
    .field { margin-bottom: 10px; }
    label { font-size: 11px; color: #64748b; display: block; margin-bottom: 4px; }
    input { width: 100%; padding: 8px; background: #0f172a; border: 1px solid #334155;
            border-radius: 6px; color: #e2e8f0; font-size: 13px; box-sizing: border-box; }
    input.err { border-color: #ef4444; }
    .log { margin-top: 12px; font-family: monospace; font-size: 12px; }
    .log-item { padding: 4px 0; border-bottom: 1px solid #0f172a; }
    .log-ok { color: #34d399; }
    .log-err { color: #ef4444; }
  </style>
</head>
<body>
  <div class="demo">
    <div class="demo-title">Proxy — Validatsiya</div>
    <div class="field">
      <label>Ism (string)</label>
      <input type="text" id="ism" oninput="set('ism', this.value, this)" placeholder="Ali">
    </div>
    <div class="field">
      <label>Yosh (0-150 son)</label>
      <input type="number" id="yosh" oninput="set('yosh', Number(this.value), this)" placeholder="25">
    </div>
    <div class="log" id="log"></div>
  </div>

  <script>
    function reaktiv(obj, schema) {
      return new Proxy(obj, {
        set(target, prop, value) {
          const rule = schema[prop];
          if (rule) {
            if (rule.tur && typeof value !== rule.tur) {
              throw new TypeError(\`\${prop} \${rule.tur} turi bo'lishi kerak\`);
            }
            if (rule.min !== undefined && value < rule.min) {
              throw new RangeError(\`\${prop} \${rule.min} dan katta bo'lsin\`);
            }
            if (rule.max !== undefined && value > rule.max) {
              throw new RangeError(\`\${prop} \${rule.max} dan kichik bo'lsin\`);
            }
          }
          return Reflect.set(target, prop, value);
        }
      });
    }

    const user = reaktiv({}, {
      ism: { tur: "string" },
      yosh: { tur: "number", min: 0, max: 150 },
    });

    function addLog(msg, ok) {
      const div = document.createElement("div");
      div.className = "log-item " + (ok ? "log-ok" : "log-err");
      div.textContent = (ok ? "✓ " : "✗ ") + msg;
      document.getElementById("log").prepend(div);
    }

    function set(prop, value, input) {
      try {
        user[prop] = value;
        input.className = "";
        addLog(\`\${prop} = \${JSON.stringify(value)}\`, true);
      } catch(e) {
        input.className = "err";
        addLog(e.message, false);
      }
    }
  </script>
</body>
</html>`,
        notes: [
          "Vue 3 reaktivlik tizimi Proxy asosida qurilgan (Vue 2 Object.defineProperty ishlatgan)",
          "Proxy asl obyektni wrap qiladi — asl obyektga ham murojaat qilinishi mumkin",
          "Reflect — Proxy handler ichida standart JS operatsiyalarini bajarish uchun",
        ],
        commonMistakes: [
          "set handler da return true qilmaslik — strict mode da TypeError",
          "Proxy ni har amaliyot uchun ishlatish — oddiy validatsiya uchun ortiqcha",
        ],
        practiceTask: "Reactive store: Proxy bilan state o'zgarganda DOM avtomatik yangilansin",
        quiz: [
          {
            question: "Proxy nima uchun ishlatiladi?",
            options: [
              "Kodni tezlashtirish",
              "Obyektga kirish operatsiyalarini ushlash va boshqarish",
              "Asinxron kodni sinxron qilish",
              "Modullarni import qilish",
            ],
            correct: 1,
            explanation: "Proxy obyektga get, set, delete kabi operatsiyalarni ushlaydi va ularga maxsus mantig'ni qo'shish imkonini beradi.",
          },
        ],
      },
      {
        id: "js-performance",
        slug: "performance",
        title: "Performance va Optimizatsiya",
        description: "JS performansini oshirish usullari va muhim bilimlar",
        sections: [
          { id: "measure", title: "Performansni o'lchash" },
          { id: "patterns", title: "Samarali patternlar" },
          { id: "memory", title: "Xotira boshqarish" },
        ],
        content: `<h2 id="measure">Performansni o'lchash</h2>
<pre><code>// console.time
console.time("operatsiya");
// ... kod ...
console.timeEnd("operatsiya"); // "operatsiya: 12.34ms"

// Performance API
const boshlanish = performance.now();
// ... kod ...
const vaqt = performance.now() - boshlanish;

// Benchmark
performance.mark("start");
// ... kod ...
performance.mark("end");
performance.measure("test", "start", "end");
performance.getEntriesByName("test")[0].duration;</code></pre>

<h2 id="patterns">Samarali patternlar</h2>
<ul>
  <li><strong>Memoization</strong> — hisob natijalarini kesh qilish</li>
  <li><strong>Debounce/Throttle</strong> — haddan ko'p chaqiruvlarni cheklash</li>
  <li><strong>Virtual scrolling</strong> — katta ro'yxatlar uchun</li>
  <li><strong>Web Workers</strong> — og'ir hisob-kitobni alohida thread da</li>
  <li><strong>DocumentFragment</strong> — DOM batch yangilash</li>
  <li><strong>requestAnimationFrame</strong> — animatsiya uchun</li>
</ul>

<h2 id="memory">Xotira boshqarish</h2>
<ul>
  <li>Event listener ni olib tashlash — <code>removeEventListener</code></li>
  <li>setInterval ni to'xtatish — <code>clearInterval</code></li>
  <li>Closure da katta ma'lumotni saqlashdan saqlanish</li>
  <li>WeakMap/WeakSet — garbage collection uchun</li>
</ul>`,
        codeExample: {
          title: "Performance optimizatsiya",
          language: "javascript",
          code: `// 1. Memoization
function memoize(fn) {
  const kesh = new Map();
  return function(...args) {
    const kalit = JSON.stringify(args);
    if (kesh.has(kalit)) return kesh.get(kalit);
    const natija = fn.apply(this, args);
    kesh.set(kalit, natija);
    return natija;
  };
}

const og_ir_hisob = memoize((n) => {
  // 1 soniya kutamiz (simulyatsiya)
  return n * n;
});

// 2. Debounce va Throttle
const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};

const throttle = (fn, limit) => {
  let lastRun = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastRun >= limit) {
      lastRun = now;
      fn(...args);
    }
  };
};

// 3. requestAnimationFrame — silliq animatsiya
function animatsiya(el, target_x) {
  let joriy_x = 0;
  function qadam() {
    joriy_x += (target_x - joriy_x) * 0.1;
    el.style.transform = \`translateX(\${joriy_x}px)\`;
    if (Math.abs(target_x - joriy_x) > 0.1) {
      requestAnimationFrame(qadam);
    }
  }
  requestAnimationFrame(qadam);
}

// 4. Web Worker (og'ir hisob-kitob)
// main.js
const worker = new Worker("worker.js");
worker.postMessage({ n: 1000000 });
worker.onmessage = (e) => console.log("Natija:", e.data);

// worker.js
self.onmessage = (e) => {
  let sum = 0;
  for (let i = 0; i <= e.data.n; i++) sum += i;
  self.postMessage(sum);
};

// 5. Virtual scroll (soddalashtirilgan)
const ITEM_HEIGHT = 40;
const VISIBLE_COUNT = 10;
let scrollTop = 0;

function ko_rinuvchilarni_render(items) {
  const start = Math.floor(scrollTop / ITEM_HEIGHT);
  const end = start + VISIBLE_COUNT;
  return items.slice(start, end);
}`,
        },
        liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: sans-serif; padding: 24px; background: #0f172a; color: #e2e8f0; }
    .demo { background: #1e293b; border-radius: 12px; padding: 20px; margin-bottom: 12px; }
    .demo-title { color: #f7df1e; font-size: 12px; font-weight: 700; margin-bottom: 12px; }
    input { width: 100%; padding: 10px; background: #0f172a; border: 1px solid #334155;
            border-radius: 8px; color: #e2e8f0; font-size: 13px; box-sizing: border-box; }
    .result { font-family: monospace; font-size: 13px; color: #94a3b8; margin-top: 8px; }
    .timer { color: #f7df1e; font-weight: 700; }
    .ball { width: 50px; height: 50px; background: #6366f1; border-radius: 50%;
            position: relative; margin-top: 16px; }
    button { background: #f7df1e; color: #0f172a; border: none; padding: 8px 16px;
             border-radius: 8px; cursor: pointer; font-weight: 700; margin-top: 8px; }
  </style>
</head>
<body>
  <div class="demo">
    <div class="demo-title">Debounce — input qidiruv</div>
    <input type="text" id="search" placeholder="Yozing... (300ms debounce)">
    <div class="result" id="search-result">Kutilmoqda...</div>
  </div>

  <div class="demo">
    <div class="demo-title">requestAnimationFrame — silliq animatsiya</div>
    <div class="ball" id="ball"></div>
    <button onclick="animate()">Harakatlantirish</button>
  </div>

  <script>
    // Debounce
    function debounce(fn, delay) {
      let timer;
      return (...args) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), delay); };
    }

    let searchCount = 0;
    const handleSearch = debounce((val) => {
      searchCount++;
      document.getElementById("search-result").innerHTML =
        \`<span class="timer">#\${searchCount}</span> Qidirilyapti: "\${val}" (API chaqirildi)\`;
    }, 300);

    document.getElementById("search").addEventListener("input", (e) => {
      document.getElementById("search-result").textContent = "Kiritilmoqda...";
      handleSearch(e.target.value);
    });

    // requestAnimationFrame
    function animate() {
      const ball = document.getElementById("ball");
      let x = 0, dir = 1;
      let frame;

      function step() {
        x += 3 * dir;
        if (x >= 200 || x <= 0) dir *= -1;
        ball.style.transform = \`translateX(\${x}px)\`;
        frame = requestAnimationFrame(step);
        if (Math.abs(x - (dir > 0 ? 200 : 0)) < 5 && Math.abs(x) > 190) {
          setTimeout(() => cancelAnimationFrame(frame), 2000);
        }
      }
      cancelAnimationFrame(frame);
      step();
    }
  </script>
</body>
</html>`,
        notes: [
          "requestAnimationFrame — setTimeout bilan animatsiya qilishdan 6x samarali",
          "Memoization cache o'sib ketmasligi uchun LRU cache pattern ishlatish",
          "Memory leak — event listener va interval ni tozalamaslik asosiy sabab",
        ],
        commonMistakes: [
          "Har bir animatsiya frame da DOM o'qish + yozish — reflow trigger",
          "Debounce ni click handler da ishlatish — UI sekin ko'rinadi",
        ],
        practiceTask: "Katta ma'lumotlar ro'yxati: virtual scrolling bilan 10,000 element smooth scroll",
        quiz: [
          {
            question: "requestAnimationFrame nima uchun setTimeout dan yaxshiroq animatsiya uchun?",
            options: [
              "Tezroq ishlaydi",
              "Brauzer refresh rate bilan sinxron — 60fps",
              "Kamroq xotira sarflaydi",
              "Async ishlamaydi",
            ],
            correct: 1,
            explanation: "requestAnimationFrame — brauzer ekran yangilanishi (60fps) bilan sinxron ishlaydi. setTimeout aniq vaqtda emas, bu animatsiyada titroq beradi.",
          },
        ],
      },
    ],
  },
];
