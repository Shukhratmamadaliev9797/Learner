import type { LessonGroup } from "@/lib/types";

export const jsPart5Groups: LessonGroup[] = [
  {
    title: "DOM bilan ishlash",
    lessons: [
      {
        id: "js-dom",
        slug: "dom",
        title: "DOM nima?",
        description: "Document Object Model — HTML ni JavaScript bilan boshqarish",
        sections: [
          { id: "what", title: "DOM nima?" },
          { id: "select", title: "Elementlarni tanlash" },
          { id: "traverse", title: "DOM da harakatlanish" },
        ],
        content: `<h2 id="what">DOM nima?</h2>
<p><strong>DOM</strong> (Document Object Model) — brauzer HTML hujjatini daraxt tuzilmasida ifodalaydi. JavaScript bu daraxt orqali sahifa mazmunini o'qiydi va o'zgartiradi.</p>
<pre><code>document    ← sahifa root
  └── html
       ├── head
       └── body
            ├── h1
            └── p</code></pre>
<p><code>document</code> obyekti — sahifaga kirish nuqtasi.</p>

<h2 id="select">Elementlarni tanlash</h2>
<ul>
  <li><code>document.getElementById("id")</code> — bir element</li>
  <li><code>document.querySelector(".class")</code> — birinchi mos element (CSS selektor)</li>
  <li><code>document.querySelectorAll("div.card")</code> — barcha mos elementlar (NodeList)</li>
  <li><code>document.getElementsByClassName()</code> — eski usul</li>
  <li><code>document.getElementsByTagName()</code> — eski usul</li>
</ul>
<p>Zamonaviy JS da faqat <code>querySelector</code> va <code>querySelectorAll</code> ishlating.</p>

<h2 id="traverse">DOM da harakatlanish</h2>
<ul>
  <li><code>el.parentElement</code> — ota-element</li>
  <li><code>el.children</code> — bevosita farzandlar (HTMLCollection)</li>
  <li><code>el.firstElementChild</code> / <code>el.lastElementChild</code></li>
  <li><code>el.nextElementSibling</code> / <code>el.previousElementSibling</code></li>
  <li><code>el.closest(".class")</code> — yuqoriga qarab mos ata-element</li>
</ul>`,
        codeExample: {
          title: "DOM elementlarini tanlash",
          language: "javascript",
          code: `// Elementni tanlash
const sarlavha = document.getElementById("sarlavha");
const birinchi = document.querySelector(".card");
const hammasi  = document.querySelectorAll(".card");

// Atributlarga kirish
console.log(sarlavha.id);          // "sarlavha"
console.log(sarlavha.className);   // CSS klasslari
console.log(sarlavha.tagName);     // "H1"
console.log(sarlavha.textContent); // faqat matn
console.log(sarlavha.innerHTML);   // HTML bilan matn

// Atribut o'qish va yozish
const link = document.querySelector("a");
link.getAttribute("href");
link.setAttribute("href", "https://example.com");
link.removeAttribute("target");
link.hasAttribute("disabled");

// data-* atributlar
const btn = document.querySelector("[data-id='42']");
console.log(btn.dataset.id); // "42"

// DOM harakatlanish
const ul = document.querySelector("ul");
console.log(ul.children);           // HTMLCollection [li, li, li...]
console.log(ul.firstElementChild);  // birinchi <li>
console.log(ul.lastElementChild);   // oxirgi <li>

const li = document.querySelector("li");
console.log(li.parentElement);         // <ul>
console.log(li.nextElementSibling);    // keyingi <li>
console.log(li.closest(".container")); // yuqoridagi .container`,
        },
        liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: sans-serif; padding: 24px; background: #0f172a; color: #e2e8f0; }
    .card { background: #1e293b; padding: 12px 16px; border-radius: 8px; margin: 8px 0;
            cursor: pointer; border: 2px solid transparent; transition: 0.2s; }
    .card:hover { border-color: #f7df1e; }
    .card.active { border-color: #6366f1; background: #1e293b; }
    .info { background: #1e293b; padding: 12px; border-radius: 8px; margin-top: 16px;
            font-size: 12px; font-family: monospace; }
    .key { color: #60a5fa; }
    .val { color: #f7df1e; }
  </style>
</head>
<body>
  <h3 id="sarlavha">DOM bilan ishlash</h3>
  <div id="royhat">
    <div class="card" data-id="1" data-rang="qizil">🍎 Olma</div>
    <div class="card" data-id="2" data-rang="sariq">🍌 Banan</div>
    <div class="card" data-id="3" data-rang="yashil">🍈 Qovun</div>
  </div>
  <div class="info" id="info">Kartani bosing...</div>

  <script>
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
      card.addEventListener("click", () => {
        // Faolni o'chirish
        document.querySelectorAll(".card.active").forEach(c => c.classList.remove("active"));
        card.classList.add("active");

        // Ma'lumot ko'rsatish
        document.getElementById("info").innerHTML = [
          ["tagName",      card.tagName],
          ["id (data)",    card.dataset.id],
          ["rang (data)",  card.dataset.rang],
          ["textContent",  card.textContent.trim()],
          ["className",    card.className],
          ["parentElement", card.parentElement.id],
          ["nextSibling",  card.nextElementSibling?.textContent.trim() ?? "yo'q"],
        ].map(([k,v]) => \`<div><span class="key">\${k}: </span><span class="val">\${v}</span></div>\`).join('');
      });
    });
  </script>
</body>
</html>`,
        notes: [
          "querySelector har doim birinchi mos elementni qaytaradi, querySelectorAll — NodeList",
          "NodeList massiv emas — forEach ishlaydi, lekin map/filter ishlamaydi. [...list] bilan array ga",
          "closest() — hodisa delegation pattern uchun juda foydali",
        ],
        commonMistakes: [
          "document.getElementsByClassName() — live collection qaytaradi, querySelectorAll static",
          "querySelector('#id') va getElementById('id') — ikkalasi bir xil natija, getElementById tezroq",
        ],
        practiceTask: "Sahifadagi barcha h2 larni toping va ularni raqamlang (1. 2. 3. ...)",
        quiz: [
          {
            question: "querySelectorAll() nima qaytaradi?",
            options: ["Bitta element", "Massiv", "NodeList", "HTMLCollection"],
            correct: 2,
            explanation: "querySelectorAll() — NodeList qaytaradi. U massiv emas, lekin forEach ishlaydi. [...list] bilan massivga o'girish mumkin.",
          },
        ],
      },
      {
        id: "js-dom-modify",
        slug: "dom-ozgartirish",
        title: "DOM ni o'zgartirish",
        description: "Element yaratish, o'chirish, matn va stil o'zgartirish",
        sections: [
          { id: "content", title: "Matn va HTML" },
          { id: "create", title: "Element yaratish" },
          { id: "classes", title: "Klasslar va stil" },
        ],
        content: `<h2 id="content">Matn va HTML o'zgartirish</h2>
<ul>
  <li><code>el.textContent = "matn"</code> — faqat matn (xavfsiz)</li>
  <li><code>el.innerHTML = "&lt;b&gt;matn&lt;/b&gt;"</code> — HTML bilan (XSS xavfi!)</li>
  <li><code>el.innerText</code> — ko'rinadigan matn (CSS ga bog'liq)</li>
</ul>
<p><strong>innerHTML bilan foydalanuvchi ma'lumotini kiritishdan saqlaning — XSS!</strong></p>

<h2 id="create">Element yaratish va qo'shish</h2>
<pre><code>// Yaratish
const div = document.createElement("div");
div.textContent = "Yangi element";
div.className = "card";

// Qo'shish
parent.append(div);      // oxiriga
parent.prepend(div);     // boshiga
parent.before(div);      // parent dan oldin
parent.after(div);       // parent dan keyin
el.remove();             // o'chirish
parent.replaceChild(new, old); // almashtirish</code></pre>
<p><code>insertAdjacentHTML()</code> — HTML string qo'shish:</p>
<pre><code>el.insertAdjacentHTML("beforeend", "&lt;li&gt;Yangi&lt;/li&gt;");</code></pre>

<h2 id="classes">Klasslar va stil</h2>
<pre><code>el.classList.add("active");
el.classList.remove("active");
el.classList.toggle("dark");
el.classList.contains("active"); // true/false

el.style.color = "red";          // inline stil
el.style.backgroundColor = "#000"; // camelCase
getComputedStyle(el).color;      // haqiqiy hisoblangan stil</code></pre>`,
        codeExample: {
          title: "DOM o'zgartirish",
          language: "javascript",
          code: `// Element yaratish va qo'shish
function kartaYarat(mahsulot) {
  const div = document.createElement("div");
  div.className = "card";
  div.dataset.id = mahsulot.id;

  // innerHTML — HTML tuzilma uchun (foydalanuvchi ma'lumoti emas!)
  div.innerHTML = \`
    <h3 class="card-title">\${mahsulot.nom}</h3>
    <p class="card-narx">\${mahsulot.narx.toLocaleString()} so'm</p>
    <button class="btn-ortiqcha">Savatchaga</button>
  \`;

  // Event qo'shish
  div.querySelector(".btn-ortiqcha").addEventListener("click", () => {
    console.log("Qo'shildi:", mahsulot.id);
  });

  return div;
}

const royhat = document.getElementById("mahsulotlar");
const yangi = kartaYarat({ id: 1, nom: "Telefon", narx: 5000000 });
royhat.append(yangi);

// Ko'p element birdan (DocumentFragment)
const fragment = document.createDocumentFragment();
[1, 2, 3].forEach(i => {
  const li = document.createElement("li");
  li.textContent = "Element " + i;
  fragment.append(li);
});
document.querySelector("ul").append(fragment);

// Klasslar
const btn = document.querySelector(".btn");
btn.classList.toggle("active");         // qo'sh/ol
btn.classList.contains("active");       // bormi?

// Stil
const box = document.querySelector(".box");
box.style.transform = "scale(1.1)";
box.style.transition = "transform 0.3s";

// ElementlarO'chirish
const item = document.querySelector(".item");
item.remove(); // zamonaviy usul`,
        },
        liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: sans-serif; padding: 24px; background: #0f172a; color: #e2e8f0; }
    .controls { display: flex; gap: 8px; margin-bottom: 16px; }
    input { flex: 1; padding: 8px 12px; background: #1e293b; border: 1px solid #334155;
            border-radius: 8px; color: #e2e8f0; font-size: 13px; }
    button { background: #f7df1e; color: #0f172a; border: none; padding: 8px 16px;
             border-radius: 8px; cursor: pointer; font-weight: 700; font-size: 13px; }
    .list { display: flex; flex-direction: column; gap: 6px; }
    .item { background: #1e293b; padding: 12px 16px; border-radius: 8px;
            display: flex; justify-content: space-between; align-items: center;
            animation: fadeIn 0.3s; }
    @keyframes fadeIn { from { opacity:0; transform:translateY(-8px); } }
    .del-btn { background: none; border: 1px solid #334155; color: #64748b;
               padding: 4px 10px; border-radius: 6px; cursor: pointer; font-size: 12px; }
    .del-btn:hover { background: #ef4444; color: white; border-color: #ef4444; }
    .empty { color: #475569; text-align: center; padding: 20px; font-size: 13px; }
  </style>
</head>
<body>
  <div class="controls">
    <input type="text" id="inp" placeholder="Vazifa yozing..." onkeydown="if(event.key==='Enter')qosh()">
    <button onclick="qosh()">Qo'sh</button>
  </div>
  <div class="list" id="list">
    <div class="empty" id="empty">Vazifa yo'q</div>
  </div>

  <script>
    let count = 0;

    function qosh() {
      const inp = document.getElementById("inp");
      const matn = inp.value.trim();
      if (!matn) return;

      const empty = document.getElementById("empty");
      if (empty) empty.remove();

      const item = document.createElement("div");
      item.className = "item";
      item.innerHTML = \`
        <span>\${++count}. \${matn}</span>
        <button class="del-btn" onclick="this.closest('.item').remove()">O'chir</button>
      \`;
      document.getElementById("list").append(item);
      inp.value = "";
      inp.focus();
    }
  </script>
</body>
</html>`,
        notes: [
          "DocumentFragment — ko'p element qo'shishda reflow bir marta bo'ladi — tezroq",
          "innerHTML foydalanuvchi kiritgan ma'lumot bilan xavfli — textContent yoki DOM API ishlatng",
          "el.remove() zamonaviy, el.parentNode.removeChild(el) eski usul",
        ],
        commonMistakes: [
          "innerHTML ga user input qo'shish — XSS hujumiga eshik ochiladi",
          "Loop ichida har iteratsiyada DOM ga qo'shish — sekin. Fragment ishlatng",
        ],
        practiceTask: "Todo ro'yxat: qo'shish, o'chirish, bajarilgan deb belgilash, saralash",
        quiz: [
          {
            question: "XSS oldini olish uchun foydalanuvchi matnini qanday qo'shish kerak?",
            options: [
              "innerHTML = userInput",
              "textContent = userInput",
              "insertAdjacentHTML bilan",
              "write() bilan",
            ],
            correct: 1,
            explanation: "textContent — HTML parse qilmaydi, shuning uchun XSS dan himoyalangan. innerHTML foydalanuvchi ma'lumoti bilan xavfli.",
          },
        ],
      },
    ],
  },
  {
    title: "Hodisalar (Events)",
    lessons: [
      {
        id: "js-events",
        slug: "hodisalar",
        title: "Event Listener lar",
        description: "addEventListener, hodisa turlari va event obyekti",
        sections: [
          { id: "listener", title: "addEventListener" },
          { id: "types", title: "Hodisa turlari" },
          { id: "event-obj", title: "Event obyekti" },
        ],
        content: `<h2 id="listener">addEventListener</h2>
<pre><code>element.addEventListener("hodisa", callback);
element.removeEventListener("hodisa", callback);</code></pre>
<p>Eski usullar: <code>onclick=""</code> (HTML), <code>el.onclick = fn</code> (faqat bitta handler)</p>
<p>addEventListener bir elementga bir xil hodisa uchun bir necha handler qo'shish imkonini beradi.</p>

<h2 id="types">Asosiy hodisa turlari</h2>
<ul>
  <li><strong>Sichqoncha:</strong> click, dblclick, mousedown, mouseup, mouseover, mouseout, mousemove, contextmenu</li>
  <li><strong>Klaviatura:</strong> keydown, keyup, keypress (deprecated)</li>
  <li><strong>Forma:</strong> submit, input, change, focus, blur, reset</li>
  <li><strong>Hujjat:</strong> DOMContentLoaded, load, resize, scroll</li>
  <li><strong>Touch:</strong> touchstart, touchend, touchmove</li>
  <li><strong>Clipboard:</strong> copy, paste, cut</li>
</ul>

<h2 id="event-obj">Event obyekti</h2>
<p>Handler ga berilgan <code>event</code> (yoki <code>e</code>) — hodisa haqida ma'lumot:</p>
<ul>
  <li><code>e.target</code> — bosilgan element</li>
  <li><code>e.currentTarget</code> — listener qo'shilgan element</li>
  <li><code>e.type</code> — hodisa turi ("click" va h.)</li>
  <li><code>e.key</code>, <code>e.code</code> — klaviatura hodisalari</li>
  <li><code>e.clientX</code>, <code>e.clientY</code> — sichqoncha koordinatasi</li>
  <li><code>e.preventDefault()</code> — standart amalini bloklash</li>
  <li><code>e.stopPropagation()</code> — yuqoriga tarqalishni to'xtatish</li>
</ul>`,
        codeExample: {
          title: "Event listener misollari",
          language: "javascript",
          code: `// Oddiy click
const btn = document.querySelector("#btn");
btn.addEventListener("click", function(e) {
  console.log("Bosildi!", e.target);
});

// Arrow function bilan
btn.addEventListener("click", (e) => {
  e.preventDefault(); // standart amalni bloklash
  console.log(\`Koordinata: \${e.clientX}, \${e.clientY}\`);
});

// Klaviatura
document.addEventListener("keydown", (e) => {
  console.log("Tugma:", e.key, e.code);
  if (e.key === "Escape") closeModal();
  if (e.ctrlKey && e.key === "s") {
    e.preventDefault();
    saqlash();
  }
});

// Forma
const forma = document.querySelector("form");
forma.addEventListener("submit", (e) => {
  e.preventDefault(); // sahifani yangilmaslik
  const data = new FormData(forma);
  console.log(Object.fromEntries(data));
});

// Input hodisasi
const input = document.querySelector("#ism");
input.addEventListener("input", (e) => {
  console.log("Qiymat:", e.target.value);
});

// Once — bir marta ishlash
btn.addEventListener("click", handler, { once: true });

// Event olib tashlash (named function kerak)
function handler(e) { console.log("handler"); }
btn.addEventListener("click", handler);
btn.removeEventListener("click", handler);`,
        },
        liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: sans-serif; padding: 24px; background: #0f172a; color: #e2e8f0; }
    .demo { background: #1e293b; border-radius: 12px; padding: 24px; margin-bottom: 12px; }
    .demo-title { color: #f7df1e; font-size: 12px; font-weight: 700; margin-bottom: 12px;
                  text-transform: uppercase; }
    button { background: #0f172a; color: #e2e8f0; border: 1px solid #334155;
             padding: 10px 20px; border-radius: 8px; cursor: pointer; font-size: 14px;
             transition: 0.2s; }
    button:hover { background: #f7df1e; color: #0f172a; border-color: #f7df1e; }
    input { padding: 10px; background: #0f172a; border: 1px solid #334155;
            border-radius: 8px; color: #e2e8f0; font-size: 14px; width: 200px; }
    .log { font-size: 12px; color: #64748b; margin-top: 8px; font-family: monospace; }
    #mouse-area { height: 80px; border: 2px dashed #334155; border-radius: 8px;
                  display: flex; align-items: center; justify-content: center;
                  font-size: 13px; color: #475569; cursor: crosshair; }
  </style>
</head>
<body>
  <div class="demo">
    <div class="demo-title">Click hodisasi</div>
    <button id="btn">Bosing!</button>
    <div class="log" id="click-log">—</div>
  </div>

  <div class="demo">
    <div class="demo-title">Klaviatura hodisasi</div>
    <input type="text" id="inp" placeholder="Yozing...">
    <div class="log" id="key-log">—</div>
  </div>

  <div class="demo">
    <div class="demo-title">Sichqoncha harakati</div>
    <div id="mouse-area">Sichqonchani harakatlanting</div>
  </div>

  <script>
    let clicks = 0;
    document.getElementById("btn").addEventListener("click", (e) => {
      clicks++;
      document.getElementById("click-log").textContent =
        \`click #\${clicks} | target: \${e.target.tagName} | pos: (\${e.clientX}, \${e.clientY})\`;
    });

    document.getElementById("inp").addEventListener("keydown", (e) => {
      document.getElementById("key-log").textContent =
        \`key: "\${e.key}" | code: \${e.code} | ctrl: \${e.ctrlKey} | shift: \${e.shiftKey}\`;
    });

    document.getElementById("mouse-area").addEventListener("mousemove", (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = Math.round(e.clientX - rect.left);
      const y = Math.round(e.clientY - rect.top);
      e.currentTarget.textContent = \`X: \${x}, Y: \${y}\`;
    });
  </script>
</body>
</html>`,
        notes: [
          "e.target — hodisa boshlangan element, e.currentTarget — listener qo'shilgan element",
          "{ once: true } — listener bir marta ishlab o'z-o'zini o'chiradi",
          "DOMContentLoaded — HTML tayyorlanishi bilan, load — barcha resurslar yuklangach",
        ],
        commonMistakes: [
          "removeEventListener ga anonymous function — ishlamaydi, named function kerak",
          "e.preventDefault() ni forgetting — forma submit sahifani yangilaydi",
        ],
        practiceTask: "Keyboard shortcut manager: Ctrl+S, Ctrl+Z, Escape uchun turli amallar",
        quiz: [
          {
            question: "e.preventDefault() nima qiladi?",
            options: [
              "Hodisani to'xtatadi",
              "Yuqoriga tarqalishni to'xtatadi",
              "Brauzerning standart amalini bloklaydi",
              "Elementni o'chiradi",
            ],
            correct: 2,
            explanation: "e.preventDefault() brauzerning standart amalini bloklaydi: forma submit da sahifani yangilash, link da sahifa o'tish kabi.",
          },
        ],
      },
      {
        id: "js-event-delegation",
        slug: "event-delegation",
        title: "Event Bubbling va Delegation",
        description: "Hodisalar qanday tarqaladi va delegatsiya pattern",
        sections: [
          { id: "bubbling", title: "Bubbling va Capturing" },
          { id: "delegation", title: "Event Delegation" },
        ],
        content: `<h2 id="bubbling">Bubbling va Capturing</h2>
<p>Hodisa 3 fazada o'tadi:</p>
<ol>
  <li><strong>Capturing</strong> — yuqoridan pastga (document → target)</li>
  <li><strong>Target</strong> — maqsad elementda</li>
  <li><strong>Bubbling</strong> — pastdan yuqoriga (target → document)</li>
</ol>
<p>Standart: bubbling. Listener capture fazasida ishlashi uchun: <code>{ capture: true }</code></p>
<p><code>e.stopPropagation()</code> — tarqalishni to'xtatadi</p>

<h2 id="delegation">Event Delegation</h2>
<p>Ko'p elementga alohida listener qo'yish o'rniga, umumiy ota-elementga bitta listener qo'yish.</p>
<p><strong>Afzalliklari:</strong></p>
<ul>
  <li>Keyinchalik qo'shilgan elementlar uchun ham ishlaydi</li>
  <li>Kam listener — kam xotira</li>
  <li>Kod soddaroq</li>
</ul>
<pre><code>ul.addEventListener("click", (e) => {
  if (e.target.matches("li")) {
    // li bosildi
    console.log(e.target.textContent);
  }
});</code></pre>`,
        codeExample: {
          title: "Event Delegation pattern",
          language: "javascript",
          code: `// === BUBBLING ===
document.querySelector(".card").addEventListener("click", (e) => {
  console.log("Card bosildi");
  // e.stopPropagation(); // body ga tarqalmassin
});

document.body.addEventListener("click", (e) => {
  console.log("Body ham oldi hodisani (bubbling)");
});

// === EVENT DELEGATION ===
// Ko'p li uchun bitta listener (samarali)
const ul = document.querySelector("#mahsulotlar-list");

ul.addEventListener("click", (e) => {
  // Qaysi element bosilganini tekshirish
  if (e.target.matches(".o'chir-btn")) {
    e.target.closest("li").remove();
  } else if (e.target.matches(".tahrir-btn")) {
    const li = e.target.closest("li");
    li.contentEditable = "true";
    li.focus();
  }
});

// Dataset bilan delegation
ul.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-action]");
  if (!btn) return;

  const action = btn.dataset.action;
  const id = btn.dataset.id;

  if (action === "delete") o'chirish(id);
  if (action === "edit") tahrirlash(id);
  if (action === "like") yoqtirish(id);
});

// Dinamik elementlar uchun delegation
document.getElementById("savatcha").addEventListener("click", (e) => {
  const item = e.target.closest(".savatcha-item");
  if (!item) return;

  if (e.target.matches(".increment")) item.dataset.qty++;
  if (e.target.matches(".decrement")) item.dataset.qty--;
  if (e.target.matches(".remove")) item.remove();
});`,
        },
        liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: sans-serif; padding: 24px; background: #0f172a; color: #e2e8f0; }
    .controls { display: flex; gap: 8px; margin-bottom: 12px; }
    input { flex: 1; padding: 8px 12px; background: #1e293b; border: 1px solid #334155;
            border-radius: 8px; color: #e2e8f0; font-size: 13px; }
    .add-btn { background: #f7df1e; color: #0f172a; border: none; padding: 8px 16px;
               border-radius: 8px; cursor: pointer; font-weight: 700; }
    #list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 6px; }
    #list li { background: #1e293b; padding: 10px 14px; border-radius: 8px;
               display: flex; justify-content: space-between; align-items: center; }
    #list li span { flex: 1; }
    .action-btn { background: none; border: 1px solid #334155; color: #64748b;
                  padding: 4px 8px; border-radius: 5px; cursor: pointer; font-size: 11px;
                  margin-left: 6px; }
    .action-btn:hover { background: #334155; color: #e2e8f0; }
    .done-btn:hover { background: #34d399; color: #0f172a; border-color: #34d399; }
    .del-btn:hover { background: #ef4444; color: white; border-color: #ef4444; }
    .done span { text-decoration: line-through; color: #475569; }
    .log { font-size: 11px; color: #475569; margin-top: 12px; font-family: monospace; }
  </style>
</head>
<body>
  <div class="controls">
    <input type="text" id="inp" placeholder="Vazifa..." onkeydown="if(event.key==='Enter')add()">
    <button class="add-btn" onclick="add()">Qo'sh</button>
  </div>
  <ul id="list"></ul>
  <div class="log" id="log">Delegation: bitta listener barchasini boshqaradi</div>

  <script>
    let id = 0;

    function add() {
      const inp = document.getElementById("inp");
      const text = inp.value.trim();
      if (!text) return;

      const li = document.createElement("li");
      li.dataset.id = ++id;
      li.innerHTML = \`
        <span>\${text}</span>
        <div>
          <button class="action-btn done-btn" data-action="done">✓</button>
          <button class="action-btn del-btn" data-action="delete">✕</button>
        </div>
      \`;
      document.getElementById("list").append(li);
      inp.value = "";
    }

    // BITTA listener — DELEGATION
    document.getElementById("list").addEventListener("click", (e) => {
      const btn = e.target.closest("[data-action]");
      if (!btn) return;

      const li = btn.closest("li");
      const action = btn.dataset.action;

      if (action === "delete") {
        li.remove();
        document.getElementById("log").textContent = \`ID #\${li.dataset.id} o'chirildi\`;
      }
      if (action === "done") {
        li.classList.toggle("done");
        document.getElementById("log").textContent = \`ID #\${li.dataset.id} \${li.classList.contains("done") ? "bajarildi" : "ochildi"}\`;
      }
    });
  </script>
</body>
</html>`,
        notes: [
          "Event delegation — dinamik elementlar uchun ideal (yangi qo'shilgan elementlar ham ishlaydi)",
          "e.target.closest(selector) — bosilgan elementning ota-elementini topish",
          "stopPropagation ehtiyotkorlik bilan ishlatng — boshqa listener larni buzishi mumkin",
        ],
        commonMistakes: [
          "Har bir li ga alohida listener qo'yish — 1000 ta li bo'lsa 1000 ta listener, sekin!",
          "e.target vs e.currentTarget — target bosilgan, currentTarget listener qo'shilgan",
        ],
        practiceTask: "Dinamik jadvalni event delegation bilan boshqaring: qo'shish, o'chirish, tahrirlash",
        quiz: [
          {
            question: "Event delegation nima uchun foydali?",
            options: [
              "Hodisalar tezroq ishlaydi",
              "Dinamik elementlar uchun ham ishlaydi va kam listener",
              "stopPropagation avtomatik ishlaydi",
              "Faqat click uchun ishlaydi",
            ],
            correct: 1,
            explanation: "Delegation ota-elementga listener qo'yadi — yangi qo'shilgan farzandlar uchun ham ishlaydi va xotira tejaladi.",
          },
        ],
      },
    ],
  },
];
