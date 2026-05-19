import type { LessonGroup } from "@/lib/types";

export const jsPart4Groups: LessonGroup[] = [
  {
    title: "Massivlar",
    lessons: [
      {
        id: "js-arrays",
        slug: "massivlar",
        title: "Massivlar (Arrays)",
        description: "Massiv yaratish, elementlarga kirish va asosiy metodlar",
        sections: [
          { id: "create", title: "Yaratish va kirish" },
          { id: "methods", title: "Asosiy metodlar" },
          { id: "spread", title: "Spread va destructuring" },
        ],
        content: `<h2 id="create">Massiv yaratish va elementlarga kirish</h2>
<p>Massiv — tartiblangan qiymatlar to'plami. Indeks 0 dan boshlanadi.</p>
<pre><code>const mevalar = ["olma", "anor", "shaftoli"];
console.log(mevalar[0]);      // "olma"
console.log(mevalar.length);  // 3
console.log(mevalar.at(-1));  // "shaftoli" (oxirgi)</code></pre>

<h2 id="methods">Asosiy massiv metodlari</h2>
<p><strong>O'zgartiruvchi (mutating):</strong></p>
<ul>
  <li><code>push()</code> — oxiriga qo'shish</li>
  <li><code>pop()</code> — oxiridan olib tashlash</li>
  <li><code>shift()</code> — boshidan olib tashlash</li>
  <li><code>unshift()</code> — boshiga qo'shish</li>
  <li><code>splice()</code> — qo'shish/olib tashlash istalgan joydан</li>
  <li><code>reverse()</code> — teskari tartib</li>
  <li><code>sort()</code> — saralash</li>
  <li><code>fill()</code> — to'ldirish</li>
</ul>
<p><strong>Yangi massiv qaytaruvchi (non-mutating):</strong></p>
<ul>
  <li><code>slice()</code> — kesib olish</li>
  <li><code>concat()</code> — birlashtirish</li>
  <li><code>flat()</code> / <code>flatMap()</code></li>
  <li><code>map(), filter(), reduce()</code></li>
</ul>

<h2 id="spread">Spread va destructuring</h2>
<pre><code>const a = [1, 2, 3];
const b = [...a, 4, 5]; // [1, 2, 3, 4, 5]

const [birinchi, ikkinchi, ...qolganlar] = a;
// birinchi=1, ikkinchi=2, qolganlar=[3]</code></pre>`,
        codeExample: {
          title: "Array metodlari",
          language: "javascript",
          code: `const arr = [3, 1, 4, 1, 5, 9, 2, 6];

// Qo'shish va olib tashlash
arr.push(7);          // [3,1,4,1,5,9,2,6,7]
arr.pop();            // oxirini oladi: 7
arr.unshift(0);       // boshiga: [0,3,1,4...]
arr.shift();          // boshidan oladi: 0

// splice — istalgan joyga
arr.splice(2, 1);     // 2-indeksdan 1 ta olib tashlash
arr.splice(2, 0, 99); // 2-indeksga 99 qo'shish

// slice — yangi massiv (o'zgartirmaydi)
const bo_lak = arr.slice(1, 4); // 1-3 indekslar

// indexOf / includes
console.log(arr.indexOf(9));     // topilgan index (-1: topilmadi)
console.log(arr.includes(5));    // true/false

// flat va flatMap
const nested = [[1, 2], [3, 4], [5, 6]];
console.log(nested.flat());      // [1,2,3,4,5,6]

// Array yaratish
const bo_sh = new Array(5).fill(0); // [0,0,0,0,0]
const dan_gacha = Array.from({length: 10}, (_, i) => i + 1); // [1..10]

// Spread
const a = [1, 2, 3];
const b = [4, 5, 6];
const birga = [...a, ...b]; // [1,2,3,4,5,6]

// Destructuring
const [birinchi, , uchinchi, ...qolgan] = [10, 20, 30, 40, 50];
console.log(birinchi); // 10
console.log(uchinchi); // 30
console.log(qolgan);   // [40, 50]`,
        },
        liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: sans-serif; padding: 24px; background: #0f172a; color: #e2e8f0; }
    .controls { display: flex; gap: 8px; margin-bottom: 16px; flex-wrap: wrap; }
    input { padding: 8px 12px; background: #1e293b; border: 1px solid #334155;
            border-radius: 8px; color: #e2e8f0; font-size: 13px; width: 80px; }
    button { background: #1e293b; color: #e2e8f0; border: 1px solid #334155;
             padding: 8px 12px; border-radius: 8px; cursor: pointer; font-size: 12px; }
    button:hover { background: #f7df1e; color: #0f172a; border-color: #f7df1e; }
    .array-vis { background: #1e293b; padding: 16px; border-radius: 8px;
                 display: flex; gap: 6px; flex-wrap: wrap; min-height: 52px; }
    .el { background: #0f172a; border: 2px solid #334155; width: 40px; height: 40px;
          border-radius: 6px; display: flex; flex-direction: column;
          align-items: center; justify-content: center; font-size: 14px; font-weight: 700; }
    .el-idx { font-size: 9px; color: #475569; }
    .log { font-size: 12px; color: #64748b; margin-top: 8px; }
  </style>
</head>
<body>
  <div class="controls">
    <input type="number" id="val" value="7" placeholder="Qiymat">
    <button onclick="act('push')">push →</button>
    <button onclick="act('pop')">← pop</button>
    <button onclick="act('unshift')">→ unshift</button>
    <button onclick="act('shift')">shift ←</button>
    <button onclick="act('reverse')">↕ reverse</button>
    <button onclick="act('sort')">sort ↑</button>
  </div>
  <div class="array-vis" id="arr-vis"></div>
  <div class="log" id="log"></div>

  <script>
    let arr = [3, 1, 4, 1, 5, 9];

    function render(msg) {
      document.getElementById("arr-vis").innerHTML = arr.map(
        (v, i) => \`<div class="el"><div class="el-idx">\${i}</div>\${v}</div>\`
      ).join('');
      if (msg) document.getElementById("log").textContent = msg;
    }

    function act(op) {
      const v = Number(document.getElementById("val").value);
      let msg = "";
      switch(op) {
        case "push":    arr.push(v);    msg = \`push(\${v})\`; break;
        case "pop":     msg = \`pop() → \${arr.pop()}\`; break;
        case "unshift": arr.unshift(v); msg = \`unshift(\${v})\`; break;
        case "shift":   msg = \`shift() → \${arr.shift()}\`; break;
        case "reverse": arr.reverse();  msg = "reverse()"; break;
        case "sort":    arr.sort((a,b)=>a-b); msg = "sort()"; break;
      }
      render(msg);
    }
    render();
  </script>
</body>
</html>`,
        notes: [
          "push/pop — stack (LIFO), unshift/shift — queue (FIFO) uchun",
          "splice massivni o'zgartiradi, slice o'zgartirmaydi — farqni eslab qoling",
          "Array.from({length: n}, (_, i) => i) — 0..n-1 massiv yaratish uchun qulay",
        ],
        commonMistakes: [
          "sort() ni raqamlar uchun callback siz ishlatish — leksikografik tartib beradi",
          "const array = [] — const massivga element qo'shishga to'sqinlik qilmaydi",
        ],
        practiceTask: "Shopping cart: add(), remove(), getTotal() metodlari bilan mahsulotlar ro'yxati",
        quiz: [
          {
            question: "arr.slice(1, 3) nima qaytaradi [0,1,2,3,4] massivdan?",
            options: ["[1,2]", "[1,2,3]", "[0,1,2]", "[1,3]"],
            correct: 0,
            explanation: "slice(1, 3) — 1-indeksdan 3-indeksgacha (3 kiritilmaydi): [1, 2].",
          },
        ],
      },
    ],
  },
  {
    title: "Obyektlar",
    lessons: [
      {
        id: "js-objects",
        slug: "obyektlar",
        title: "Obyektlar (Objects)",
        description: "Obyekt yaratish, xususiyatlar, metodlar va prototype",
        sections: [
          { id: "create", title: "Yaratish va xususiyatlar" },
          { id: "methods", title: "Obyekt metodlari" },
          { id: "destructuring", title: "Destructuring" },
          { id: "spread", title: "Spread va birlashtirish" },
        ],
        content: `<h2 id="create">Obyekt yaratish</h2>
<p>Obyekt — kalit:qiymat juftliklari to'plami. JS ning asosiy ma'lumot tuzilmasi.</p>
<pre><code>const odam = {
  ism: "Ali",
  yosh: 25,
  salomlash() {
    return \`Salom, men \${this.ism}\`;
  }
};</code></pre>
<p>Xususiyatlarga kirish: <code>odam.ism</code> yoki <code>odam["ism"]</code></p>

<h2 id="methods">Obyekt metodlari (Object static)</h2>
<ul>
  <li><code>Object.keys(obj)</code> — kalitlar massivi</li>
  <li><code>Object.values(obj)</code> — qiymatlar massivi</li>
  <li><code>Object.entries(obj)</code> — [kalit, qiymat] massivlar</li>
  <li><code>Object.assign(target, source)</code> — nusxalash</li>
  <li><code>Object.freeze(obj)</code> — o'zgartirmaslik</li>
  <li><code>Object.hasOwn(obj, key)</code> — kalit bormi?</li>
</ul>

<h2 id="destructuring">Destructuring</h2>
<pre><code>const { ism, yosh, shahar = "Toshkent" } = odam;
// ism="Ali", yosh=25, shahar="Toshkent" (default)</code></pre>

<h2 id="spread">Spread va birlashtirish</h2>
<pre><code>const yangi = { ...odam, email: "ali@mail.com" };
const birga = { ...obj1, ...obj2 }; // obj2 ustunlik qiladi</code></pre>`,
        codeExample: {
          title: "Obyektlar bilan ishlash",
          language: "javascript",
          code: `// Obyekt yaratish
const mahsulot = {
  id: 1,
  nom: "Telefon",
  narx: 5000000,
  kategoriya: "Elektronika",
  mavjud: true,
  // Metod
  formatNarx() {
    return this.narx.toLocaleString() + " so'm";
  },
  // Computed property
  get chegirmaLi() {
    return this.narx * 0.9;
  },
};

// Xususiyatlarga kirish
console.log(mahsulot.nom);         // "Telefon"
console.log(mahsulot["narx"]);     // 5000000
console.log(mahsulot.formatNarx()); // "5,000,000 so'm"

// Yangi xususiyat qo'shish va o'chirish
mahsulot.brend = "Samsung";
delete mahsulot.mavjud;

// Object metodlari
console.log(Object.keys(mahsulot));    // ["id","nom","narx"...]
console.log(Object.values(mahsulot));  // [1,"Telefon",5000000...]
console.log(Object.entries(mahsulot)); // [["id",1],["nom","Telefon"]...]

// Destructuring
const { nom, narx, brend = "Noma'lum" } = mahsulot;

// Rename bilan destructuring
const { nom: mahsulotNomi, narx: mahsulotNarxi } = mahsulot;

// Spread — nusxalash va kengaytirish
const yangilangan = { ...mahsulot, narx: 4500000, chegirma: true };

// for...in — kalit iteratsiyasi
for (const kalit in mahsulot) {
  console.log(\`\${kalit}: \${mahsulot[kalit]}\`);
}

// Optional chaining
const user = { address: { city: "Toshkent" } };
console.log(user?.address?.city);   // "Toshkent"
console.log(user?.phone?.number);   // undefined (xato emas)`,
        },
        liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: sans-serif; padding: 24px; background: #0f172a; color: #e2e8f0; }
    .obj-card { background: #1e293b; border-radius: 12px; padding: 20px; margin-bottom: 16px; }
    .obj-title { font-size: 11px; color: #64748b; text-transform: uppercase;
                 letter-spacing: 1px; margin-bottom: 12px; }
    .prop { display: flex; justify-content: space-between; padding: 6px 0;
            border-bottom: 1px solid #0f172a; font-size: 13px; }
    .key { color: #60a5fa; font-family: monospace; }
    .val { color: #f7df1e; font-family: monospace; }
    .btn-row { display: flex; gap: 8px; margin-top: 16px; flex-wrap: wrap; }
    button { background: #0f172a; color: #94a3b8; border: 1px solid #334155;
             padding: 6px 12px; border-radius: 6px; cursor: pointer; font-size: 12px; }
    button:hover { background: #f7df1e; color: #0f172a; border-color: #f7df1e; }
  </style>
</head>
<body>
  <div class="obj-card">
    <div class="obj-title">Mahsulot obyekti</div>
    <div id="props"></div>
    <div class="btn-row">
      <button onclick="addProp()">Xususiyat qo'sh</button>
      <button onclick="deleteProp()">chegirma o'chir</button>
      <button onclick="spread()">Spread nusxa</button>
    </div>
  </div>

  <script>
    let mahsulot = {
      id: 1,
      nom: "Telefon",
      narx: 5000000,
      brend: "Samsung",
    };

    function render() {
      document.getElementById("props").innerHTML =
        Object.entries(mahsulot).map(
          ([k, v]) => \`<div class="prop"><span class="key">\${k}</span><span class="val">\${JSON.stringify(v)}</span></div>\`
        ).join('');
    }

    function addProp() {
      mahsulot.chegirma = Math.floor(Math.random() * 20) + 5 + "%";
      render();
    }

    function deleteProp() {
      delete mahsulot.chegirma;
      render();
    }

    function spread() {
      mahsulot = { ...mahsulot, narx: Math.floor(mahsulot.narx * 0.9), chegirma: "10%" };
      render();
    }

    render();
  </script>
</body>
</html>`,
        notes: [
          "this — metod ichida obyektning o'ziga ishora. Arrow function da this ishlmaydi!",
          "Object.freeze() — chuqur (deep) freeze qilmaydi, ichki obyektlar o'zgartirilishi mumkin",
          "Computed property name: const key='ism'; const obj = {[key]: 'Ali'}",
        ],
        commonMistakes: [
          "Arrow function metod sifatida ishlatish — this undefined bo'ladi",
          "obj1 = obj2 — reference nusxa (bir xil obyekt), spread bilan haqiqiy nusxa oling",
        ],
        practiceTask: "Talaba obyekti: ism, fanlar (massiv), o'rtacha ball computed property bilan",
        quiz: [
          {
            question: "Object.keys({a:1, b:2}) natijasi nima?",
            options: ["[1, 2]", "['a', 'b']", "{a:1, b:2}", "['a:1', 'b:2']"],
            correct: 1,
            explanation: "Object.keys() obyektning kalitlari massivini qaytaradi: ['a', 'b'].",
          },
        ],
      },
      {
        id: "js-destructuring",
        slug: "destructuring",
        title: "Destructuring va Spread/Rest",
        description: "Massiv va obyektdan qiymat olish, spread va rest operatorlari",
        sections: [
          { id: "array-destr", title: "Massiv destructuring" },
          { id: "obj-destr", title: "Obyekt destructuring" },
          { id: "spread-rest", title: "Spread va Rest" },
        ],
        content: `<h2 id="array-destr">Massiv destructuring</h2>
<pre><code>const [a, b, c] = [1, 2, 3];
const [birinchi, , uchinchi] = [10, 20, 30]; // ikkinchisini o'tkazib
const [x, ...qolganlar] = [1, 2, 3, 4, 5];  // rest
const [p = 0, q = 0] = [5]; // default qiymat</code></pre>
<p>Swap pattern — qiymatlarni almashtirish:</p>
<pre><code>let a = 1, b = 2;
[a, b] = [b, a]; // a=2, b=1</code></pre>

<h2 id="obj-destr">Obyekt destructuring</h2>
<pre><code>const { ism, yosh } = odam;
const { ism: nom, yosh: age } = odam; // qayta nomlash
const { city = "Toshkent" } = address; // default
// Ichma-ich (nested)
const { address: { city, zip } } = user;</code></pre>
<p>Funksiya parametrlarida:</p>
<pre><code>function render({ ism, yosh = 0 }) {
  return \`\${ism}, \${yosh}\`;
}</code></pre>

<h2 id="spread-rest">Spread (...) va Rest (...)</h2>
<p><strong>Spread</strong> — iterable ni "yoyish": massiv/obyektni alohida elementlarga</p>
<p><strong>Rest</strong> — qolgan elementlarni yig'ish</p>
<pre><code>// Spread — chaqirishda
Math.max(...[1, 5, 3]); // Math.max(1,5,3)

// Rest — e'londa
function log(birinchi, ...qolganlar) {
  // qolganlar — massiv
}</code></pre>`,
        codeExample: {
          title: "Destructuring va Spread/Rest",
          language: "javascript",
          code: `// === MASSIV DESTRUCTURING ===
const koordinatlar = [40.7128, -74.0060];
const [lat, lng] = koordinatlar;

// Swap
let a = "ali", b = "vali";
[a, b] = [b, a];
console.log(a, b); // "vali" "ali"

// Rest
const [birinchi, ikkinchi, ...qolgan] = [1, 2, 3, 4, 5];
console.log(qolgan); // [3, 4, 5]

// === OBYEKT DESTRUCTURING ===
const user = {
  id: 42,
  ism: "Ali",
  email: "ali@mail.com",
  manzil: {
    shahar: "Toshkent",
    pochta: 100000,
  },
};

// Asosiy
const { ism, email } = user;

// Qayta nomlash + default
const { ism: userName, telefon = "+998901234567" } = user;

// Ichma-ich
const { manzil: { shahar, pochta } } = user;

// Funksiya parametrida
function foydalanuvchiKort({ ism, email, manzil: { shahar } }) {
  return \`\${ism} (\${email}) — \${shahar}\`;
}

// === SPREAD ===
// Massiv birlashtirish
const a_arr = [1, 2, 3];
const b_arr = [4, 5, 6];
const hammasi = [...a_arr, ...b_arr]; // [1,2,3,4,5,6]

// Massiv nusxasi (shallow)
const nusxa = [...a_arr];

// Obyekt spread
const config = { host: "localhost", port: 3000 };
const prodConfig = { ...config, port: 80, ssl: true };

// Math funksiyalari bilan
const sonlar = [3, 1, 4, 1, 5, 9];
console.log(Math.max(...sonlar)); // 9`,
        },
        liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: monospace; padding: 24px; background: #0f172a; color: #e2e8f0; }
    .section { background: #1e293b; border-radius: 10px; padding: 16px; margin-bottom: 12px; }
    .sec-title { color: #f7df1e; font-size: 12px; font-weight: 700; margin-bottom: 10px; }
    .code-line { font-size: 13px; padding: 3px 0; }
    .kw { color: #c084fc; }
    .str { color: #34d399; }
    .num { color: #60a5fa; }
    .op { color: #f97316; }
    .res { color: #94a3b8; }
  </style>
</head>
<body>
  <div class="section">
    <div class="sec-title">Massiv Destructuring</div>
    <div class="code-line"><span class="kw">const</span> [a, b, ...rest] = [1, 2, 3, 4, 5]</div>
    <div class="code-line"><span class="res">// a=1, b=2, rest=[3,4,5]</span></div>
  </div>
  <div class="section">
    <div class="sec-title">Swap Pattern</div>
    <div class="code-line"><span class="kw">let</span> x=<span class="num">10</span>, y=<span class="num">20</span></div>
    <div class="code-line">[x, y] = [y, x]</div>
    <div class="code-line"><span class="res">// x=20, y=10</span></div>
  </div>
  <div class="section">
    <div class="sec-title">Obyekt Destructuring</div>
    <div class="code-line"><span class="kw">const</span> { ism, yosh = <span class="num">0</span> } = user</div>
    <div class="code-line"><span class="res">// ism="Ali", yosh=0 (default)</span></div>
  </div>
  <div class="section">
    <div class="sec-title">Spread Operator</div>
    <div class="code-line"><span class="kw">const</span> merged = { ...obj1, ...obj2 }</div>
    <div class="code-line"><span class="kw">const</span> copy = [...arr1, ...arr2]</div>
    <div class="code-line">Math.max(...[1, 5, 3]) <span class="res">// → 5</span></div>
  </div>
</body>
</html>`,
        notes: [
          "Destructuring funksiya parametrlarida juda foydali — obyekt ichidagi ma'lumotni to'g'ri olish",
          "Spread shallow copy — ichki obyekt hali ham reference",
          "Rest parametr oxirda bo'lishi kerak: (a, b, ...rest) ✓, (...rest, a) ✗",
        ],
        commonMistakes: [
          "const { length } = [] — length xususiyati ham destructuring orqali olinadi",
          "Spread bilan deep clone qilish mumkin deb o'ylash — faqat shallow",
        ],
        practiceTask: "API dan kelgan user ma'lumotini destructuring bilan yoying va tabella ko'rsating",
        quiz: [
          {
            question: "const [,, uchinchi] = [10, 20, 30] da uchinchi qancha?",
            options: ["10", "20", "30", "undefined"],
            correct: 2,
            explanation: "Vergul bilan elementlar o'tkazib yuboriladi. [,,uchinchi] — birinchi ikki element o'tkazildi, uchinchisi 30.",
          },
        ],
      },
      {
        id: "js-map-set",
        slug: "map-set",
        title: "Map va Set",
        description: "Map — kalit-qiymat, Set — noyob qiymatlar to'plami",
        sections: [
          { id: "map", title: "Map" },
          { id: "set", title: "Set" },
          { id: "weakmap", title: "WeakMap va WeakSet" },
        ],
        content: `<h2 id="map">Map — kuchli kalit-qiymat tuzilmasi</h2>
<p>Oddiy obyektdan farqli o'laroq, Map da istalgan tur kalit bo'la oladi va tartib saqlanadi.</p>
<pre><code>const map = new Map();
map.set("ism", "Ali");
map.set(42, "raqam kalit");
map.get("ism");    // "Ali"
map.has("ism");    // true
map.size;          // 2
map.delete("ism");
map.clear();</code></pre>
<p>Map ni iteratsiya: <code>for...of</code> yoki <code>.forEach()</code></p>

<h2 id="set">Set — noyob qiymatlar</h2>
<p>Set — har bir qiymat faqat bir marta. Duplikatlar avtomatik olib tashlanadi.</p>
<pre><code>const set = new Set([1, 2, 2, 3, 3, 3]);
console.log(set); // Set {1, 2, 3}
set.add(4);
set.has(2); // true
set.delete(1);
set.size;   // 3</code></pre>
<p>Massivdan duplikatlarni olib tashlash:</p>
<pre><code>const noyob = [...new Set([1, 2, 2, 3, 1])]; // [1, 2, 3]</code></pre>

<h2 id="weakmap">WeakMap va WeakSet</h2>
<p>WeakMap/WeakSet — faqat obyekt kalitlari, garbage collection ta'siriga tushadi. Private data saqlash uchun.</p>`,
        codeExample: {
          title: "Map va Set ishlatish",
          language: "javascript",
          code: `// === MAP ===
const talabalar = new Map();
talabalar.set("ali001", { ism: "Ali", ball: 95 });
talabalar.set("vali002", { ism: "Vali", ball: 82 });
talabalar.set("zafar003", { ism: "Zafar", ball: 75 });

console.log(talabalar.get("ali001")); // {ism:"Ali", ball:95}
console.log(talabalar.size);          // 3

// Iteratsiya
for (const [id, talaba] of talabalar) {
  console.log(\`\${id}: \${talaba.ism} — \${talaba.ball}\`);
}

// Map dan Array
const idlar = [...talabalar.keys()];
const ma_lumotlar = [...talabalar.values()];

// === SET ===
const mevalar = new Set(["olma", "anor", "olma", "shaftoli", "anor"]);
console.log(mevalar); // Set{"olma","anor","shaftoli"}
console.log(mevalar.size); // 3

mevalar.add("gilos");
mevalar.delete("anor");

// Set dan Array
const mevalarArr = [...mevalar];

// Duplikatlarni olib tashlash
const raqamlar = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const noyob = [...new Set(raqamlar)]; // [1, 2, 3, 4]

// To'plamlar
const a = new Set([1, 2, 3, 4]);
const b = new Set([3, 4, 5, 6]);

// Kesishuv
const kesishuv = [...a].filter(x => b.has(x)); // [3, 4]

// Birlashtirish
const birlashtirish = new Set([...a, ...b]); // {1,2,3,4,5,6}

// Farq
const farq = [...a].filter(x => !b.has(x)); // [1, 2]`,
        },
        liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: sans-serif; padding: 24px; background: #0f172a; color: #e2e8f0; }
    .row { display: flex; gap: 16px; }
    .panel { flex: 1; background: #1e293b; border-radius: 10px; padding: 16px; }
    .panel-title { color: #f7df1e; font-size: 12px; font-weight: 700;
                   margin-bottom: 12px; text-transform: uppercase; }
    input { width: 100%; padding: 8px; background: #0f172a; border: 1px solid #334155;
            border-radius: 6px; color: #e2e8f0; font-size: 13px; box-sizing: border-box; }
    button { width: 100%; margin-top: 6px; padding: 8px; background: #f7df1e; color: #0f172a;
             border: none; border-radius: 6px; cursor: pointer; font-weight: 700; font-size: 13px; }
    .tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 10px; }
    .tag { background: #0f172a; border: 1px solid #334155; padding: 3px 10px;
           border-radius: 20px; font-size: 12px; cursor: pointer; }
    .tag:hover { border-color: #ef4444; color: #ef4444; }
  </style>
</head>
<body>
  <div class="row">
    <div class="panel">
      <div class="panel-title">Set (noyob qiymatlar)</div>
      <input type="text" id="set-inp" placeholder="Meva nomi" onkeydown="if(event.key==='Enter')setAdd()">
      <button onclick="setAdd()">Qo'shish</button>
      <div class="tags" id="set-tags"></div>
    </div>
    <div class="panel">
      <div class="panel-title">Map (kalit → qiymat)</div>
      <input type="text" id="map-key" placeholder="Kalit">
      <input type="text" id="map-val" placeholder="Qiymat" style="margin-top:6px">
      <button onclick="mapAdd()">Qo'shish</button>
      <div id="map-list" style="margin-top:10px;font-size:13px"></div>
    </div>
  </div>

  <script>
    const mySet = new Set(["olma", "anor"]);
    const myMap = new Map([["rang", "qizil"], ["yil", "2025"]]);

    function renderSet() {
      document.getElementById("set-tags").innerHTML =
        [...mySet].map(v =>
          \`<div class="tag" onclick="mySet.delete('\${v}');renderSet()">\${v} ×</div>\`
        ).join('');
    }

    function renderMap() {
      document.getElementById("map-list").innerHTML =
        [...myMap.entries()].map(([k,v]) =>
          \`<div style="padding:4px 0;border-bottom:1px solid #0f172a;display:flex;justify-content:space-between">
            <span style="color:#60a5fa">\${k}</span>
            <span style="color:#f7df1e">\${v}</span>
           </div>\`
        ).join('');
    }

    function setAdd() {
      const v = document.getElementById("set-inp").value.trim();
      if (v) { mySet.add(v); renderSet(); document.getElementById("set-inp").value = ""; }
    }

    function mapAdd() {
      const k = document.getElementById("map-key").value.trim();
      const v = document.getElementById("map-val").value.trim();
      if (k && v) {
        myMap.set(k, v);
        renderMap();
        document.getElementById("map-key").value = "";
        document.getElementById("map-val").value = "";
      }
    }

    renderSet(); renderMap();
  </script>
</body>
</html>`,
        notes: [
          "Set — massivdan duplikat olib tashlash uchun eng teza usul: [...new Set(arr)]",
          "Map kalit sifatida obyekt, funksiya ham qabul qiladi — oddiy {} bu qilolmaydi",
          "Map.size — xususiyat (usul emas), {} da Object.keys(obj).length kerak",
        ],
        commonMistakes: [
          "Set da === bilan solishtiriladi: new Set([{a:1},{a:1}]).size === 2 (ikki boshqa ref)",
          "Map.get() vs obyekt — map.get(kalit) ma'lumot yo'q bo'lsa undefined, xato emas",
        ],
        practiceTask: "Tags tizimi: Set bilan noyob teglar, Map bilan teg bo'yicha maqolalar",
        quiz: [
          {
            question: "[...new Set([1,2,2,3,1])] natijasi nima?",
            options: ["[1,2,2,3,1]", "[1,2,3]", "Set{1,2,3}", "5"],
            correct: 1,
            explanation: "Set noyob qiymatlarni saqlaydi, spread bilan massivga o'girish: [1,2,3].",
          },
        ],
      },
    ],
  },
];
