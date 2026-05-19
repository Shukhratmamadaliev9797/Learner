import type { LessonGroup } from "@/lib/types";

export const jsPart6Groups: LessonGroup[] = [
  {
    title: "Asinxron JavaScript",
    lessons: [
      {
        id: "js-async-intro",
        slug: "asinxron-js",
        title: "Asinxron JS va Event Loop",
        description: "Asinxronlik nima, Event Loop va setTimeout/setInterval",
        sections: [
          { id: "sync-async", title: "Sinxron vs Asinxron" },
          { id: "event-loop", title: "Event Loop" },
          { id: "timers", title: "setTimeout va setInterval" },
        ],
        content: `<h2 id="sync-async">Sinxron vs Asinxron</h2>
<p>JavaScript — <strong>single-threaded</strong> (bir oqimli) til. Bir vaqtda faqat bitta kod bajariladi.</p>
<p><strong>Sinxron</strong> — har qator navbatma-navbat: biri tugamaguncha keyingisi boshlanmaydi.</p>
<p><strong>Asinxron</strong> — server javobi kutib turilmasin, boshqa kod davom etsin. Javob kelganda qayta chaqiriladi.</p>
<p>Asinxron kerak bo'lgan hollar:</p>
<ul>
  <li>Server so'rovi (fetch, AJAX)</li>
  <li>Fayl o'qish/yozish (Node.js)</li>
  <li>Kutish (setTimeout)</li>
  <li>Foydalanuvchi hodisasi</li>
</ul>

<h2 id="event-loop">Event Loop</h2>
<p>Brauzer qanday ishlaydi:</p>
<ol>
  <li><strong>Call Stack</strong> — bajarilayotgan funksiyalar stek</li>
  <li><strong>Web APIs</strong> — setTimeout, fetch, DOM hodisalari</li>
  <li><strong>Task Queue</strong> — setTimeout callback lar</li>
  <li><strong>Microtask Queue</strong> — Promise callback lar (birinchi bajariladi)</li>
  <li><strong>Event Loop</strong> — stack bo'shasa, queue dan keyingisini oladi</li>
</ol>

<h2 id="timers">setTimeout va setInterval</h2>
<pre><code>// Bir martalik kechiktirish
const id = setTimeout(() => console.log("1s keyin"), 1000);
clearTimeout(id); // bekor qilish

// Takroriy
const tid = setInterval(() => console.log("har 1s"), 1000);
clearInterval(tid); // to'xtatish</code></pre>`,
        codeExample: {
          title: "Asinxron JS misollari",
          language: "javascript",
          code: `// Sinxron vs Asinxron
console.log("1: Boshlandi");

setTimeout(() => {
  console.log("3: Asinxron (1s keyin)");
}, 1000);

console.log("2: Bu darhol bajariladi");
// Natija: 1, 2, (1s), 3

// setTimeout = 0 ham asinxron!
setTimeout(() => console.log("C: timeout 0"), 0);
Promise.resolve().then(() => console.log("B: microtask"));
console.log("A: sinxron");
// Natija: A, B, C (microtask queue > task queue)

// setInterval bilan hisoblagich
let soniya = 0;
const vaqt = setInterval(() => {
  soniya++;
  document.getElementById("timer").textContent = soniya + "s";
  if (soniya >= 60) clearInterval(vaqt);
}, 1000);

// Debounce — input optimizatsiyasi
function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

const qidirish = debounce((qiymat) => {
  console.log("Qidirilmoqda:", qiymat);
}, 300);

input.addEventListener("input", (e) => qidirish(e.target.value));

// Throttle — scroll optimizatsiyasi
function throttle(fn, limit) {
  let lastCall = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}`,
        },
        liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: sans-serif; padding: 24px; background: #0f172a; color: #e2e8f0; }
    .timer-box { background: #1e293b; border-radius: 12px; padding: 24px; text-align: center; margin-bottom: 16px; }
    .timer-num { font-size: 64px; font-weight: 900; color: #f7df1e; font-family: monospace; }
    .btns { display: flex; gap: 8px; justify-content: center; margin-top: 12px; }
    button { padding: 10px 20px; border: none; border-radius: 8px; cursor: pointer; font-weight: 700; }
    .start { background: #34d399; color: #0f172a; }
    .stop { background: #ef4444; color: white; }
    .reset { background: #334155; color: #e2e8f0; }
    .log-box { background: #1e293b; border-radius: 8px; padding: 16px; font-family: monospace;
               font-size: 12px; height: 100px; overflow-y: auto; }
    .log-line { color: #64748b; padding: 2px 0; }
    .log-line.hi { color: #f7df1e; }
  </style>
</head>
<body>
  <div class="timer-box">
    <div class="timer-num" id="timer">00:00</div>
    <div class="btns">
      <button class="start" onclick="start()">▶ Start</button>
      <button class="stop"  onclick="stop()">■ Stop</button>
      <button class="reset" onclick="reset()">↺ Reset</button>
    </div>
  </div>
  <div class="log-box" id="log"></div>

  <script>
    let seconds = 0, interval = null;

    function pad(n) { return String(n).padStart(2, "0"); }
    function format(s) { return pad(Math.floor(s/60)) + ":" + pad(s%60); }

    function log(msg, hi=false) {
      const div = document.createElement("div");
      div.className = "log-line" + (hi ? " hi" : "");
      div.textContent = new Date().toLocaleTimeString() + " — " + msg;
      const box = document.getElementById("log");
      box.prepend(div);
    }

    function start() {
      if (interval) return;
      log("setInterval ishga tushdi", true);
      interval = setInterval(() => {
        seconds++;
        document.getElementById("timer").textContent = format(seconds);
        if (seconds % 10 === 0) log(\`\${seconds}s — tick\`);
      }, 1000);
    }

    function stop() {
      clearInterval(interval);
      interval = null;
      log("clearInterval — to'xtatildi", true);
    }

    function reset() {
      stop();
      seconds = 0;
      document.getElementById("timer").textContent = "00:00";
      log("Reset");
    }
  </script>
</body>
</html>`,
        notes: [
          "setTimeout(fn, 0) — asinxron, Call Stack bo'shagandan keyin ishlaydi",
          "Promise microtask > setTimeout macrotask — microtask har doim birinchi",
          "Debounce: input ni optimizatsiya, throttle: scroll/resize optimizatsiya",
        ],
        commonMistakes: [
          "setInterval ni clearInterval siz qoldirish — memory leak va bir necha interval",
          "setTimeout ichida this — arrow function yoki .bind(this) kerak",
        ],
        practiceTask: "Countdown timer: necha soniya kiritilib, countdown va 0 da signal",
        quiz: [
          {
            question: "Promise callback va setTimeout callback qaysi birinchi ishlaydi?",
            options: [
              "setTimeout",
              "Promise (microtask)",
              "Bir xil vaqtda",
              "Tartib farq qilmaydi",
            ],
            correct: 1,
            explanation: "Promise microtask queue da, setTimeout macrotask queue da. Microtask har doim birinchi bajariladi.",
          },
        ],
      },
      {
        id: "js-promises",
        slug: "promiselar",
        title: "Promise lar",
        description: "Promise yaratish, then/catch/finally va Promise metodlari",
        sections: [
          { id: "what", title: "Promise nima?" },
          { id: "chain", title: "Zanjir (chaining)" },
          { id: "static", title: "Promise static metodlari" },
        ],
        content: `<h2 id="what">Promise nima?</h2>
<p><strong>Promise</strong> — kelajakdagi qiymatni ifodalaydi. Uch holat:</p>
<ul>
  <li><strong>pending</strong> — kutilmoqda</li>
  <li><strong>fulfilled</strong> — muvaffaqiyatli tugadi (resolve)</li>
  <li><strong>rejected</strong> — xato yuz berdi (reject)</li>
</ul>
<pre><code>const promise = new Promise((resolve, reject) => {
  // asinxron amal
  if (muvaffaqiyatli) resolve(qiymat);
  else reject(xato);
});</code></pre>

<h2 id="chain">Zanjir (Promise chaining)</h2>
<pre><code>fetch(url)
  .then(response => response.json()) // Promise qaytaradi
  .then(data => console.log(data))
  .catch(error => console.error(error))
  .finally(() => console.log("Tugadi"));</code></pre>
<p><code>then()</code> yangi Promise qaytaradi — shuning uchun zanjir mumkin.</p>

<h2 id="static">Promise static metodlari</h2>
<ul>
  <li><code>Promise.resolve(value)</code> — fulfilled promise</li>
  <li><code>Promise.reject(reason)</code> — rejected promise</li>
  <li><code>Promise.all([...]))</code> — hammasi fulfilled bo'lgunicha kutadi, biri reject bo'lsa hammasi</li>
  <li><code>Promise.allSettled([...])</code> — hammasi tugashini kutadi (reject bo'lsa ham)</li>
  <li><code>Promise.race([...])</code> — birinchisi tugashini kutadi</li>
  <li><code>Promise.any([...])</code> — birinchi fulfilled ni qaytaradi</li>
</ul>`,
        codeExample: {
          title: "Promise yaratish va ishlatish",
          language: "javascript",
          code: `// Promise yaratish
function kechiktir(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function ma_lumot_olish(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) resolve({ id, ism: "Ali" });
      else reject(new Error("Noto'g'ri ID"));
    }, 1000);
  });
}

// Promise chaining
ma_lumot_olish(1)
  .then(user => {
    console.log("User:", user);
    return ma_lumot_olish(user.id + 1); // yangi promise
  })
  .then(user2 => console.log("User2:", user2))
  .catch(err => console.error("Xato:", err.message))
  .finally(() => console.log("Sorov tugadi"));

// Promise.all — hammasi parallel
Promise.all([
  fetch("/api/foydalanuvchilar"),
  fetch("/api/mahsulotlar"),
  fetch("/api/buyurtmalar"),
])
  .then(([users, products, orders]) => {
    console.log("Hammasi tayyor!");
  })
  .catch(err => console.error("Birortasi xato:", err));

// Promise.allSettled — hamma natija
Promise.allSettled([
  Promise.resolve("ok"),
  Promise.reject("xato"),
  Promise.resolve("ham ok"),
]).then(natijalar => {
  natijalar.forEach(n => {
    if (n.status === "fulfilled") console.log("OK:", n.value);
    else console.log("Xato:", n.reason);
  });
});

// Promise.race — birinchisi
Promise.race([
  kechiktir(1000).then(() => "sekin"),
  kechiktir(500).then(() => "tez"),
]).then(natija => console.log(natija)); // "tez"`,
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
    .progress { height: 4px; background: #0f172a; border-radius: 2px; margin: 10px 0; overflow: hidden; }
    .bar { height: 100%; background: #6366f1; width: 0; transition: width 0.1s; border-radius: 2px; }
    .status { font-size: 13px; color: #64748b; margin-top: 8px; font-family: monospace; }
    .fulfilled { color: #34d399; }
    .rejected { color: #ef4444; }
    .pending { color: #f59e0b; }
  </style>
</head>
<body>
  <div class="demo">
    <div class="demo-title">Promise zanjiri</div>
    <button onclick="runChain()">Ishlatish</button>
    <div class="progress"><div class="bar" id="bar"></div></div>
    <div class="status" id="status">Kutilmoqda...</div>
  </div>

  <div class="demo">
    <div class="demo-title">Promise.all — parallel so'rovlar</div>
    <button onclick="runAll()">Hammasi parallel</button>
    <div class="status" id="all-status"></div>
  </div>

  <script>
    function kechiktir(ms, qiymat) {
      return new Promise(resolve => setTimeout(() => resolve(qiymat), ms));
    }

    function setBar(pct) {
      document.getElementById("bar").style.width = pct + "%";
    }

    function setStatus(msg, cls="") {
      const el = document.getElementById("status");
      el.textContent = msg;
      el.className = "status " + cls;
    }

    async function runChain() {
      setBar(0); setStatus("pending — boshlanmoqda...", "pending");

      await kechiktir(600);
      setBar(33); setStatus("1-qadam: Ma'lumot olindi", "pending");

      await kechiktir(600);
      setBar(66); setStatus("2-qadam: Qayta ishlandi", "pending");

      await kechiktir(600);
      setBar(100); setStatus("fulfilled — Muvaffaqiyatli!", "fulfilled");
    }

    async function runAll() {
      document.getElementById("all-status").textContent = "3 ta so'rov parallel yuborildi...";
      document.getElementById("all-status").className = "status pending";

      const boshlanish = Date.now();
      await Promise.all([
        kechiktir(800, "Foydalanuvchilar"),
        kechiktir(600, "Mahsulotlar"),
        kechiktir(1000, "Buyurtmalar"),
      ]);
      const vaqt = Date.now() - boshlanish;
      document.getElementById("all-status").textContent =
        \`Hammasi tayyor! \${vaqt}ms (parallel bo'lgani uchun max(800,600,1000)=1000ms)\`;
      document.getElementById("all-status").className = "status fulfilled";
    }
  </script>
</body>
</html>`,
        notes: [
          "Promise.all parallel ishlaydi — ketma-ket emas. 3 ta 1s so'rov = jami ~1s",
          "catch() xato Promise zanjirida istalgan joydan ushlab qolishi mumkin",
          "then() da yangi Promise qaytarish zanjirni kengaytiradi",
        ],
        commonMistakes: [
          "Promise.all biri reject bo'lsa hammasi reject — allSettled dan foydalanish kerak bo'lishi mumkin",
          "then() da return qilmaslik — zanjir undefined qaytaradi",
        ],
        practiceTask: "3 ta API so'rovi: user, posts, comments — Promise.all bilan parallel olib chiqaring",
        quiz: [
          {
            question: "Promise.all va Promise.allSettled farqi nima?",
            options: [
              "Hech qanday farq yo'q",
              "all — biri reject bo'lsa hammasi, allSettled — hammasi tugashini kutadi",
              "allSettled tezroq",
              "all parallel, allSettled ketma-ket",
            ],
            correct: 1,
            explanation: "Promise.all — biri reject bo'lsa darhol reject. Promise.allSettled — hammasi tugashini kutadi, har birining natijasini ({status, value/reason}) qaytaradi.",
          },
        ],
      },
      {
        id: "js-async-await",
        slug: "async-await",
        title: "async/await",
        description: "Promise larni sinxron uslubda yozish — async/await sintaksisi",
        sections: [
          { id: "syntax", title: "Sintaksis" },
          { id: "error", title: "Xatoliklarni ushlash" },
          { id: "parallel", title: "Parallel await" },
        ],
        content: `<h2 id="syntax">async/await sintaksisi</h2>
<p><code>async/await</code> — Promise larni sinxron ko'rinadigan uslubda yozish. Aslida Promise bilan bir xil ishlaydi.</p>
<pre><code>async function ma_lumot_olish() {
  const response = await fetch(url); // Promise tugashini kutadi
  const data = await response.json();
  return data;
}</code></pre>
<ul>
  <li><code>async</code> — funksiya har doim Promise qaytaradi</li>
  <li><code>await</code> — faqat async funksiya ichida, Promise tugashini kutadi</li>
  <li>Arrow function ham async bo'lishi mumkin: <code>const fn = async () => {...}</code></li>
</ul>

<h2 id="error">Xatoliklarni ushlash</h2>
<pre><code>async function xavfsiz_olish() {
  try {
    const data = await fetch(url);
    return await data.json();
  } catch (error) {
    console.error("Xato:", error);
    return null;
  } finally {
    console.log("Tugadi");
  }
}</code></pre>

<h2 id="parallel">Parallel await</h2>
<p>await ketma-ket ishlatish sekin — har biri oldingisinini kutadi:</p>
<pre><code>// SEKIN (ketma-ket):
const a = await olish(1); // 1s
const b = await olish(2); // yana 1s = jami 2s

// TEZ (parallel):
const [a, b] = await Promise.all([olish(1), olish(2)]); // ~1s</code></pre>`,
        codeExample: {
          title: "async/await amaliy misol",
          language: "javascript",
          code: `// Asosiy async/await
async function foydalanuvchi_olish(id) {
  try {
    const res = await fetch(\`https://jsonplaceholder.typicode.com/users/\${id}\`);
    if (!res.ok) throw new Error(\`HTTP xato: \${res.status}\`);
    const user = await res.json();
    return user;
  } catch (err) {
    console.error("Foydalanuvchi olishda xato:", err);
    return null;
  }
}

// async/await bilan Promise.all
async function ma_lumotlar_olish() {
  try {
    const [users, posts] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users").then(r => r.json()),
      fetch("https://jsonplaceholder.typicode.com/posts?_limit=5").then(r => r.json()),
    ]);

    console.log(\`\${users.length} foydalanuvchi, \${posts.length} post\`);
    return { users, posts };
  } catch (err) {
    console.error("Xato:", err);
  }
}

// Top-level await (ES2022, module da)
// const data = await ma_lumotlar_olish();

// async IIFE (eski usul)
(async () => {
  const user = await foydalanuvchi_olish(1);
  if (user) console.log(\`Foydalanuvchi: \${user.name}\`);
})();

// retry pattern
async function qayta_urining(fn, urinishlar = 3) {
  for (let i = 0; i < urinishlar; i++) {
    try {
      return await fn();
    } catch (err) {
      if (i === urinishlar - 1) throw err;
      await new Promise(r => setTimeout(r, 1000 * (i + 1)));
      console.log(\`\${i + 1}-urinish muvaffaqiyatsiz. Qayta...\`);
    }
  }
}`,
        },
        liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: sans-serif; padding: 24px; background: #0f172a; color: #e2e8f0; }
    button { background: #f7df1e; color: #0f172a; border: none; padding: 10px 20px;
             border-radius: 8px; cursor: pointer; font-weight: 700; font-size: 14px; margin-bottom: 16px; }
    button:disabled { opacity: 0.5; cursor: not-allowed; }
    .card { background: #1e293b; border-radius: 10px; padding: 16px; margin: 8px 0; }
    .name { font-size: 16px; font-weight: 700; color: #e2e8f0; }
    .detail { font-size: 12px; color: #64748b; margin-top: 4px; }
    .loading { color: #6366f1; font-size: 13px; }
    .error { color: #ef4444; font-size: 13px; }
  </style>
</head>
<body>
  <button id="btn" onclick="loadUsers()">Foydalanuvchilarni yuklash</button>
  <div id="output"></div>

  <script>
    async function loadUsers() {
      const btn = document.getElementById("btn");
      const out = document.getElementById("output");

      btn.disabled = true;
      out.innerHTML = '<div class="loading">Yuklanmoqda...</div>';

      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("Server xatosi: " + res.status);
        const users = await res.json();

        out.innerHTML = users.slice(0, 5).map(u => \`
          <div class="card">
            <div class="name">\${u.name}</div>
            <div class="detail">📧 \${u.email}</div>
            <div class="detail">🌐 \${u.website}</div>
            <div class="detail">📍 \${u.address.city}</div>
          </div>
        \`).join('');
      } catch (err) {
        out.innerHTML = \`<div class="error">Xato: \${err.message}</div>\`;
      } finally {
        btn.disabled = false;
      }
    }
  </script>
</body>
</html>`,
        notes: [
          "async funksiya har doim Promise qaytaradi — return 42 === Promise.resolve(42)",
          "top-level await — ES2022 module da to'g'ridan-to'g'ri await ishlatish mumkin",
          "for...of bilan async: for await (const item of asyncIterable) {...}",
        ],
        commonMistakes: [
          "await ni async funksiya tashqarisida ishlatish — SyntaxError",
          "parallel await o'rniga ketma-ket await — sekin (har biri oldingisinini kutadi)",
        ],
        practiceTask: "JSONPlaceholder API dan postlarni yuklang, har bir postni bosib comments ni ko'rsating",
        quiz: [
          {
            question: "async funksiya nima qaytaradi?",
            options: [
              "Oddiy qiymat",
              "Har doim Promise",
              "undefined",
              "Generator",
            ],
            correct: 1,
            explanation: "async funksiya har doim Promise qaytaradi. return 42 yozilsa — Promise.resolve(42) qaytadi.",
          },
        ],
      },
      {
        id: "js-fetch",
        slug: "fetch-api",
        title: "Fetch API",
        description: "Server bilan ma'lumot almashish — fetch, GET, POST, xato ishlash",
        sections: [
          { id: "get", title: "GET so'rovi" },
          { id: "post", title: "POST so'rovi" },
          { id: "errors", title: "Xatolar va loading holat" },
        ],
        content: `<h2 id="get">GET so'rovi</h2>
<pre><code>const res = await fetch("https://api.example.com/users");
const data = await res.json();</code></pre>
<p>fetch() Response obyektini qaytaradi:</p>
<ul>
  <li><code>res.ok</code> — 200-299 status</li>
  <li><code>res.status</code> — HTTP status kodi</li>
  <li><code>res.json()</code> — JSON ga parse (Promise)</li>
  <li><code>res.text()</code> — matn sifatida</li>
  <li><code>res.blob()</code> — binary ma'lumot</li>
</ul>
<p><strong>Muhim:</strong> fetch network xatodan tashqari reject qilmaydi — 404/500 ham ok!<br>Har doim <code>res.ok</code> tekshiring.</p>

<h2 id="post">POST va boshqa metodlar</h2>
<pre><code>const res = await fetch(url, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ ism: "Ali", yosh: 25 }),
});</code></pre>

<h2 id="errors">Xatolar va loading holat</h2>
<p>Har bir fetch so'rovida:</p>
<ol>
  <li>Loading holatini ko'rsating</li>
  <li>try/catch bilan xatoni ushlang</li>
  <li>res.ok tekshiring</li>
  <li>Finally da loading ni o'chiring</li>
</ol>`,
        codeExample: {
          title: "Fetch API",
          language: "javascript",
          code: `const BASE_URL = "https://jsonplaceholder.typicode.com";

// GET — ma'lumot olish
async function postlarni_olish() {
  const res = await fetch(\`\${BASE_URL}/posts?_limit=10\`);
  if (!res.ok) throw new Error(\`HTTP \${res.status}: \${res.statusText}\`);
  return await res.json();
}

// POST — yangi ma'lumot yaratish
async function post_yaratish(ma_lumot) {
  const res = await fetch(\`\${BASE_URL}/posts\`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer my-token",
    },
    body: JSON.stringify(ma_lumot),
  });
  if (!res.ok) throw new Error("Post yaratishda xato");
  return await res.json();
}

// PUT — yangilash
async function post_yangilash(id, ma_lumot) {
  const res = await fetch(\`\${BASE_URL}/posts/\${id}\`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(ma_lumot),
  });
  return res.json();
}

// DELETE — o'chirish
async function post_ochirish(id) {
  const res = await fetch(\`\${BASE_URL}/posts/\${id}\`, {
    method: "DELETE",
  });
  return res.ok;
}

// Keng ishlatish pattern
async function api(endpoint, options = {}) {
  const res = await fetch(BASE_URL + endpoint, {
    headers: { "Content-Type": "application/json" },
    ...options,
    body: options.body ? JSON.stringify(options.body) : undefined,
  });
  if (!res.ok) throw new Error(\`\${res.status} \${res.statusText}\`);
  return res.json();
}

// Ishlatish
const postlar = await api("/posts?_limit=5");
const yangi = await api("/posts", { method: "POST", body: { title: "Test" } });`,
        },
        liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: sans-serif; padding: 24px; background: #0f172a; color: #e2e8f0; }
    .tabs { display: flex; gap: 4px; margin-bottom: 16px; }
    .tab { padding: 8px 16px; background: #1e293b; border: none; color: #64748b;
           border-radius: 8px; cursor: pointer; font-size: 13px; }
    .tab.active { background: #f7df1e; color: #0f172a; font-weight: 700; }
    .posts { display: flex; flex-direction: column; gap: 8px; }
    .post { background: #1e293b; padding: 14px; border-radius: 8px; cursor: pointer;
            border: 1px solid transparent; transition: 0.2s; }
    .post:hover { border-color: #6366f1; }
    .post-title { font-size: 13px; font-weight: 700; color: #e2e8f0; }
    .post-body { font-size: 12px; color: #64748b; margin-top: 4px; }
    .loader { color: #6366f1; text-align: center; padding: 20px; }
    .err { color: #ef4444; text-align: center; }
  </style>
</head>
<body>
  <div class="tabs">
    <button class="tab active" onclick="load(1)">Foydalanuvchi 1</button>
    <button class="tab" onclick="load(2)">Foydalanuvchi 2</button>
    <button class="tab" onclick="load(3)">Foydalanuvchi 3</button>
  </div>
  <div id="out" class="posts"></div>

  <script>
    async function load(userId) {
      document.querySelectorAll(".tab").forEach((t,i) => {
        t.classList.toggle("active", i === userId - 1);
      });

      const out = document.getElementById("out");
      out.innerHTML = '<div class="loader">Yuklanmoqda...</div>';

      try {
        const res = await fetch(
          \`https://jsonplaceholder.typicode.com/posts?userId=\${userId}&_limit=5\`
        );
        if (!res.ok) throw new Error("Server xatosi " + res.status);
        const posts = await res.json();

        out.innerHTML = posts.map(p => \`
          <div class="post">
            <div class="post-title">\${p.title}</div>
            <div class="post-body">\${p.body.slice(0, 80)}...</div>
          </div>
        \`).join('');
      } catch (err) {
        out.innerHTML = \`<div class="err">Xato: \${err.message}</div>\`;
      }
    }

    load(1);
  </script>
</body>
</html>`,
        notes: [
          "fetch network xatolikda reject qiladi, lekin 404/500 OK! res.ok har doim tekshiring",
          "AbortController — fetch so'rovini bekor qilish uchun (timeout, navigatsiya)",
          "CORS — boshqa domen dan fetch qilishda server ruxsat berishi kerak",
        ],
        commonMistakes: [
          "res.ok tekshirmaslik — 404 ham catch ga tushmaydi, data === {error: 'Not found'} bo'lishi mumkin",
          "body ni JSON.stringify qilmaslik — string kerak, obyekt emas",
        ],
        practiceTask: "GitHub API: foydalanuvchi username kiritilsin, profil va oxirgi repo lari ko'rsatilsin",
        quiz: [
          {
            question: "fetch() qachon Promise ni reject qiladi?",
            options: [
              "404 status da",
              "500 status da",
              "Faqat network xatosida",
              "Har qanday xato statusda",
            ],
            correct: 2,
            explanation: "fetch() faqat network xatosida (internet yo'q, server mavjud emas) reject qiladi. 404/500 kabi HTTP xatolar — res.ok=false, lekin reject emas.",
          },
        ],
      },
    ],
  },
];
