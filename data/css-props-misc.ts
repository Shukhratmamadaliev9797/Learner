import type { Lesson } from "@/lib/types";

export const cssMiscProps: Lesson[] = [
  {
    id: "prop-cursor",
    slug: "css-cursor",
    title: "cursor",
    description: "Sichqoncha kursorining ko'rinishini boshqaradi",
    sections: [
      { id: "overview", title: "Tavsif" },
      { id: "example", title: "Misol" },
    ],
    content: `<h2 id="overview">Tavsif</h2>
<p><strong>cursor</strong> xususiyati foydalanuvchi elementning ustida turganida sichqoncha kursorining qanday ko'rinishini belgilaydi.</p>
<p>To'g'ri cursor tanlash foydalanuvchiga interaktivlik haqida vizual signal beradi — bu UX uchun juda muhim.</p>
<h3>Asosiy qiymatlar:</h3>
<ul>
<li><code>default</code> — standart o'q kursor</li>
<li><code>pointer</code> — qo'l shakli (bosiladigan narsalar uchun)</li>
<li><code>text</code> — matn kiritish kursori</li>
<li><code>move</code> — harakatlantirish</li>
<li><code>not-allowed</code> — taqiqlangan amal</li>
<li><code>grab / grabbing</code> — ushlab tortish</li>
<li><code>crosshair</code> — o'q-nishon</li>
<li><code>wait</code> — yuklash kutish</li>
<li><code>zoom-in / zoom-out</code> — kattalashtirish/kichraytirish</li>
<li><code>none</code> — kursorni yashirish</li>
</ul>
<h2 id="example">Misol</h2>`,
    codeExample: {
      title: "cursor qiymatlari",
      language: "css",
      code: `/* Tugma uchun qo'l kursor */
.btn { cursor: pointer; }

/* O'chirilgan holat */
.btn:disabled { cursor: not-allowed; }

/* Drag-and-drop */
.draggable { cursor: grab; }
.draggable:active { cursor: grabbing; }

/* Maxsus kursor rasmi */
.custom {
  cursor: url('my-cursor.png') 16 16, auto;
}

/* Kursorsiz (o'yin interfeyslari) */
.game-canvas { cursor: none; }`,
    },
    liveEditorDefault: `<style>
  .cursor-demo {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 20px;
    font-family: sans-serif;
  }
  .cur-box {
    padding: 12px 20px;
    background: #1e293b;
    color: #94a3b8;
    border-radius: 8px;
    font-size: 14px;
    border: 1px solid #334155;
  }
  .pointer { cursor: pointer; }
  .move { cursor: move; }
  .not-allowed { cursor: not-allowed; }
  .grab { cursor: grab; }
  .crosshair { cursor: crosshair; }
  .zoom-in { cursor: zoom-in; }
</style>
<div class="cursor-demo">
  <div class="cur-box pointer">pointer</div>
  <div class="cur-box move">move</div>
  <div class="cur-box not-allowed">not-allowed</div>
  <div class="cur-box grab">grab</div>
  <div class="cur-box crosshair">crosshair</div>
  <div class="cur-box zoom-in">zoom-in</div>
</div>`,
    notes: [
      "pointer — barcha bosiladigan elementlar (link, button) uchun standart",
      "cursor: none — o'yin yoki maxsus interaktiv tajribalar uchun",
      "Maxsus kursor rasmining tavsiya etilgan o'lchami: 32x32px",
    ],
    commonMistakes: [
      "div elementlarga cursor: pointer qo'yish lekin ularni haqiqatan bosiladigan qilmaslik",
      "O'chirilgan elementlarda not-allowed cursor qo'yishni unutish",
    ],
    practiceTask: "Drag-and-drop karta: grab kursor, bosilganda grabbing, tashqarida not-allowed",
    quiz: [
      {
        question: "Qaysi cursor qiymati bosiladigan elementlar uchun ishlatiladi?",
        options: ["default", "pointer", "hand", "click"],
        correct: 1,
        explanation: "cursor: pointer — tugma va havolalar uchun standart qo'l shakli kursorni ko'rsatadi.",
      },
    ],
  },
  {
    id: "prop-pointer-events",
    slug: "css-pointer-events",
    title: "pointer-events",
    description: "Element sichqoncha hodisalariga javob berishini boshqaradi",
    sections: [
      { id: "overview", title: "Tavsif" },
      { id: "example", title: "Misol" },
    ],
    content: `<h2 id="overview">Tavsif</h2>
<p><strong>pointer-events</strong> xususiyati element sichqoncha (yoki touch) hodisalariga qanday munosabatda bo'lishini belgilaydi.</p>
<p>Asosiy ikki qiymat:</p>
<ul>
<li><code>auto</code> (standart) — element barcha hodisalarni qabul qiladi</li>
<li><code>none</code> — element barcha pointer hodisalarini o'tkazib yuboradi, go'yo u yo'qdek</li>
</ul>
<h3>Qo'llanishlar:</h3>
<ul>
<li>Overlay elementlar orqali pastdagi elementlarni bosiladigan qilish</li>
<li>O'chirilgan elementlarni hodisalardan ajratish</li>
<li>SVG elementlardagi interaktivlikni boshqarish</li>
</ul>
<h2 id="example">Misol</h2>`,
    codeExample: {
      title: "pointer-events ishlatish",
      language: "css",
      code: `/* Overlay orqali o'tkazib yuborish */
.overlay {
  pointer-events: none;
}

/* O'chirilgan holat */
.disabled-card {
  opacity: 0.5;
  pointer-events: none;
}

/* Farzandlar hodisa qabul qilsin, ota-element emas */
.parent {
  pointer-events: none;
}
.parent .child {
  pointer-events: auto;
}`,
    },
    liveEditorDefault: `<style>
  .demo {
    position: relative;
    width: 300px;
    height: 150px;
    font-family: sans-serif;
  }
  .card {
    position: absolute;
    inset: 0;
    background: #1e293b;
    color: #94a3b8;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    cursor: pointer;
    border: 1px solid #334155;
    padding: 20px;
  }
  .card:hover { background: #334155; }
  .overlay {
    position: absolute;
    inset: 0;
    border-radius: 12px;
    background: rgba(99,102,241,0.1);
    border: 2px solid #6366f1;
    pointer-events: none;
    display: flex;
    align-items: flex-start;
    padding: 8px;
    font-size: 12px;
    color: #6366f1;
    font-family: sans-serif;
  }
</style>
<div class="demo">
  <div class="card" onclick="this.style.background='#6366f1'">Meni bos!</div>
  <div class="overlay">overlay (pointer-events: none)</div>
</div>`,
    notes: [
      "pointer-events: none — CSS animatsiya orqali ko'rsatilgan elementlar uchun qulay",
      "JavaScript hodisalari ham bloklanadi (onclick, addEventListener)",
      "Farzandlarga pointer-events: auto bersangiz, ota-elementdagi none bekor bo'ladi",
    ],
    commonMistakes: [
      "pointer-events: none qo'yib keyboard navigatsiyasi haqida unutish (accessibility)",
      "disabled tugmaga faqat pointer-events: none qo'yish — aria-disabled ham kerak",
    ],
    practiceTask: "Karta ustida animatsion overlay bor, lekin karta o'zi bosiladigan — pointer-events: none bilan",
    quiz: [
      {
        question: "pointer-events: none qo'yilgan element hover stilini oladi?",
        options: ["Ha, oladi", "Yo'q, olmaydi", "Faqat touch qurilmalarda", "Faqat SVGda"],
        correct: 1,
        explanation: "pointer-events: none — element barcha pointer hodisalarini qabul qilmaydi, :hover ham ishlamaydi.",
      },
    ],
  },
  {
    id: "prop-visibility",
    slug: "css-visibility",
    title: "visibility",
    description: "Elementni ko'rish/yashirish, joyni saqlab qolgan holda",
    sections: [
      { id: "overview", title: "Tavsif" },
      { id: "example", title: "Misol" },
    ],
    content: `<h2 id="overview">Tavsif</h2>
<p><strong>visibility</strong> xususiyati elementning ko'rinishini boshqaradi, lekin <code>display: none</code>dan farqli o'laroq element o'z joyini saqlab qoladi.</p>
<h3>Qiymatlar:</h3>
<ul>
<li><code>visible</code> (standart) — ko'rinadi</li>
<li><code>hidden</code> — ko'rinmaydi, lekin joy egallaydi</li>
<li><code>collapse</code> — jadval qatorlari/ustunlari uchun, joyni ham yo'q qiladi</li>
</ul>
<h3>display: none vs visibility: hidden:</h3>
<ul>
<li><code>display: none</code> — joy yo'q, animatsiya qiyin</li>
<li><code>visibility: hidden</code> — joy bor, opacity bilan animatsiya mumkin</li>
</ul>
<h2 id="example">Misol</h2>`,
    codeExample: {
      title: "visibility ishlatish",
      language: "css",
      code: `/* Asosiy foydalanish */
.hidden { visibility: hidden; }
.visible { visibility: visible; }

/* Hover animatsiyasi bilan */
.tooltip {
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s, visibility 0.3s;
}
.parent:hover .tooltip {
  visibility: visible;
  opacity: 1;
}

/* Ota yashirin, bola ko'rinsin */
.parent { visibility: hidden; }
.parent .child { visibility: visible; }`,
    },
    liveEditorDefault: `<style>
  .v-demo {
    display: flex;
    gap: 20px;
    align-items: flex-start;
    padding: 20px;
    font-family: sans-serif;
  }
  .box {
    width: 100px;
    height: 60px;
    background: #6366f1;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 12px;
  }
  .hidden-box { visibility: hidden; }
  .ghost {
    background: #334155;
    border: 2px dashed #475569;
    color: #64748b;
  }
</style>
<div class="v-demo">
  <div class="box">Ko'rinadi</div>
  <div class="box hidden-box">Yashirin</div>
  <div class="box ghost">Keyingisi</div>
</div>
<p style="font-family:sans-serif;font-size:12px;color:#64748b;padding:0 20px">
  O'rtadagi element yashirin — lekin joyi saqlanib turibdi
</p>`,
    notes: [
      "Tooltip va dropdown uchun visibility + opacity kombinatsiyasi eng yaxshi animatsiya usuli",
      "visibility: hidden elementlar keyboard fokusini ham olmaydi",
      "opacity: 0 yolgiz ishlatilsa element hali ham bosilishi mumkin",
    ],
    commonMistakes: [
      "opacity: 0 bilan yashirish — element hali ham pointer va keyboard hodisalarini oladi",
      "visibility animatsiya qilishda transition-da visibility ni kiritishni unutish",
    ],
    practiceTask: "Hover tooltip: visibility + opacity transition bilan chiroyli fade-in/out effekti",
    quiz: [
      {
        question: "visibility: hidden va display: none ning farqi nima?",
        options: [
          "Hech qanday farq yo'q",
          "visibility: hidden joy egallaydi, display: none egallamaydi",
          "display: none joy egallaydi, visibility: hidden egallamaydi",
          "Faqat visibility animatsiya bo'ladi",
        ],
        correct: 1,
        explanation: "visibility: hidden element ko'rinmaydi lekin sahifada joyini saqlab qoladi. display: none element butunlay olib tashlanadi.",
      },
    ],
  },
  {
    id: "prop-object-fit",
    slug: "css-object-fit",
    title: "object-fit va object-position",
    description: "Rasm va video elementlarining konteynerga sig'ishini boshqaradi",
    sections: [
      { id: "overview", title: "Tavsif" },
      { id: "example", title: "Misol" },
    ],
    content: `<h2 id="overview">Tavsif</h2>
<p><strong>object-fit</strong> xususiyati <code>&lt;img&gt;</code>, <code>&lt;video&gt;</code> kabi almashtiriladigan elementlarning o'z konteyneriga qanday joylashishini belgilaydi.</p>
<h3>object-fit qiymatlari:</h3>
<ul>
<li><code>fill</code> (standart) — to'liq to'ldiradi, proporsiya buzilishi mumkin</li>
<li><code>contain</code> — proporsiyani saqlab, konteynerga sig'diradi</li>
<li><code>cover</code> — proporsiyani saqlab, konteynerni to'liq yopadi (kesilishi mumkin)</li>
<li><code>none</code> — o'lchamini o'zgartirmaydi</li>
<li><code>scale-down</code> — contain yoki none dan kichigini tanlaydi</li>
</ul>
<h3>object-position:</h3>
<p>Rasm konteyner ichida qaerda bo'lishi: <code>center</code>, <code>top</code>, <code>left 30%</code> kabi.</p>
<h2 id="example">Misol</h2>`,
    codeExample: {
      title: "object-fit va object-position",
      language: "css",
      code: `/* Karta uchun rasm — yuqoridan kesilsin */
.card-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center top;
}

/* Logo — proporsiyani saqlasin */
.logo {
  width: 120px;
  height: 60px;
  object-fit: contain;
}

/* Avatar doira */
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

/* Video background */
.bg-video {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}`,
    },
    liveEditorDefault: `<style>
  .of-demo {
    display: flex;
    gap: 16px;
    padding: 20px;
    flex-wrap: wrap;
    font-family: sans-serif;
    align-items: flex-start;
  }
  .of-box { text-align: center; }
  .of-img {
    width: 120px;
    height: 80px;
    background: #1e293b;
    border-radius: 8px;
    border: 2px solid #334155;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    font-size: 32px;
  }
  .label {
    font-size: 11px;
    color: #64748b;
    margin-top: 4px;
  }
</style>
<div class="of-demo">
  <div class="of-box">
    <div class="of-img">🖼️</div>
    <div class="label">cover</div>
  </div>
  <div class="of-box">
    <div class="of-img">📐</div>
    <div class="label">contain</div>
  </div>
  <div class="of-box">
    <div class="of-img">👤</div>
    <div class="label">avatar cover</div>
  </div>
</div>`,
    notes: [
      "object-fit: cover — karta rasmlari, avatarlar uchun eng ko'p ishlatiladigan qiymat",
      "object-position bilan birga ishlatganda aniq nazorat olinadi",
      "background-size: cover/contain bilan bir xil mantiq, lekin img tegi uchun",
    ],
    commonMistakes: [
      "img ga ota-elementda height bermay object-fit ishlatish — element o'lchami bo'lmasa ishlamaydi",
      "object-position ni background-position bilan aralashtirish",
    ],
    practiceTask: "3 ta karta: har birida turli o'lchamli rasm, object-fit: cover bilan bir xil balandlik",
    quiz: [
      {
        question: "Rasmni proporsiyani saqlab konteynerni to'liq yopishi uchun qaysi qiymat?",
        options: ["fill", "contain", "cover", "scale-down"],
        correct: 2,
        explanation: "object-fit: cover — proporsiyani saqlab konteynerni to'liq yopadi, kerak bo'lsa kesiladi.",
      },
    ],
  },
  {
    id: "prop-aspect-ratio",
    slug: "css-aspect-ratio",
    title: "aspect-ratio",
    description: "Element kenglik va balandlik nisbatini belgilaydi",
    sections: [
      { id: "overview", title: "Tavsif" },
      { id: "example", title: "Misol" },
    ],
    content: `<h2 id="overview">Tavsif</h2>
<p><strong>aspect-ratio</strong> xususiyati elementning kenglik va balandlik nisbatini belgilaydi. Bir o'lchami ma'lum bo'lsa, ikkinchisi avtomatik hisoblanadi.</p>
<h3>Sintaksis:</h3>
<pre><code>aspect-ratio: kenglik / balandlik;</code></pre>
<h3>Keng tarqalgan nisbatlar:</h3>
<ul>
<li><code>16 / 9</code> — kino va video format</li>
<li><code>4 / 3</code> — klassik monitor/foto format</li>
<li><code>1 / 1</code> — kvadrat (avatar, thumbnail)</li>
<li><code>3 / 2</code> — foto format</li>
<li><code>21 / 9</code> — ultrawide format</li>
</ul>
<h2 id="example">Misol</h2>`,
    codeExample: {
      title: "aspect-ratio ishlatish",
      language: "css",
      code: `/* Video wrapper */
.video-wrapper {
  width: 100%;
  aspect-ratio: 16 / 9;
}

/* Kvadrat thumbnail */
.thumbnail {
  width: 200px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
}

/* Foto format karta */
.photo-card {
  aspect-ratio: 3 / 2;
  overflow: hidden;
}

/* Eski usul (endi kerak emas) */
.old-way {
  width: 100%;
  padding-top: 56.25%;
  position: relative;
}

/* Yangi usul */
.new-way {
  width: 100%;
  aspect-ratio: 16 / 9;
}`,
    },
    liveEditorDefault: `<style>
  .ar-demo {
    display: flex;
    gap: 16px;
    padding: 20px;
    align-items: flex-start;
    flex-wrap: wrap;
    font-family: sans-serif;
  }
  .ar-box {
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 12px;
    font-weight: 600;
  }
  .ar-16-9 { width: 200px; aspect-ratio: 16/9; }
  .ar-1-1 { width: 100px; aspect-ratio: 1/1; }
  .ar-4-3 { width: 160px; aspect-ratio: 4/3; }
</style>
<div class="ar-demo">
  <div class="ar-box ar-16-9">16 / 9</div>
  <div class="ar-box ar-1-1">1 / 1</div>
  <div class="ar-box ar-4-3">4 / 3</div>
</div>`,
    notes: [
      "aspect-ratio — padding-top hack o'rniga zamonaviy usul",
      "min-height yoki height bilan birgalikda ishlatilsa, aspect-ratio ustun bo'lmaydi",
      "img uchun ham ishlaydi — width bersangiz, balandlik avtomatik",
    ],
    commonMistakes: [
      "Elementga ham width ham height berish — aspect-ratio ishlamay qoladi",
      "Eski brauzerlarda (IE) ishlamasligini hisobga olmaslik",
    ],
    practiceTask: "Responsive video embed: 16/9 aspect-ratio bilan, iframe to'liq to'ldirsin",
    quiz: [
      {
        question: "aspect-ratio: 1 / 1 nima qiladi?",
        options: [
          "Elementni 1px x 1px qiladi",
          "Kvadrat element yaratadi",
          "Proporsional kattalashtiradi",
          "Hech nima qilmaydi",
        ],
        correct: 1,
        explanation: "aspect-ratio: 1 / 1 elementni kengligiga teng balandlikda — kvadrat shaklda qiladi.",
      },
    ],
  },
  {
    id: "prop-custom-properties",
    slug: "css-custom-properties",
    title: "CSS O'zgaruvchilar (Custom Properties)",
    description: "CSS da --variable va var() bilan o'zgaruvchilar yaratish",
    sections: [
      { id: "overview", title: "Tavsif" },
      { id: "example", title: "Misol" },
    ],
    content: `<h2 id="overview">Tavsif</h2>
<p><strong>CSS Custom Properties</strong> (CSS o'zgaruvchilari) dizayn tokenlarini saqlash va qayta ishlatish imkonini beradi.</p>
<h3>E'lon qilish:</h3>
<pre><code>--o'zgaruvchi-nomi: qiymat;</code></pre>
<h3>Ishlatish:</h3>
<pre><code>var(--o'zgaruvchi-nomi)
var(--o'zgaruvchi-nomi, zaxira-qiymat)</code></pre>
<h3>Afzalliklari:</h3>
<ul>
<li>Bir joyda o'zgartirsangiz — hamma joyda yangilanadi</li>
<li>JavaScript bilan o'zgartirilishi mumkin</li>
<li>Inherit — farzandlarga meros qoladi</li>
<li>Media query ichida qayta belgilanishi mumkin</li>
<li>Dark mode uchun ideal</li>
</ul>
<h2 id="example">Misol</h2>`,
    codeExample: {
      title: "CSS Custom Properties",
      language: "css",
      code: `/* :root da global o'zgaruvchilar */
:root {
  --color-primary: #6366f1;
  --color-bg: #0f172a;
  --color-text: #e2e8f0;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 32px;
  --radius: 12px;
}

/* Ishlatish */
.card {
  background: var(--color-bg);
  color: var(--color-text);
  padding: var(--spacing-md);
  border-radius: var(--radius);
}

.btn {
  background: var(--color-primary);
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  :root {
    --color-bg: #0f172a;
    --color-text: #f1f5f9;
  }
}

/* Zaxira qiymat */
.box {
  color: var(--color-accent, #6366f1);
}`,
    },
    liveEditorDefault: `<style>
  :root {
    --primary: #6366f1;
    --bg: #1e293b;
    --text: #e2e8f0;
    --radius: 12px;
    --gap: 16px;
  }
  .cv-demo {
    padding: 20px;
    background: var(--bg);
    border-radius: var(--radius);
    display: flex;
    gap: var(--gap);
    flex-direction: column;
    font-family: sans-serif;
  }
  .cv-card {
    background: #0f172a;
    padding: var(--gap);
    border-radius: var(--radius);
    border: 1px solid rgba(99,102,241,0.2);
  }
  .cv-title {
    color: var(--primary);
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 8px;
  }
  .cv-text {
    color: var(--text);
    font-size: 13px;
    opacity: 0.7;
  }
  .cv-btn {
    background: var(--primary);
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: calc(var(--radius) / 2);
    cursor: pointer;
    font-size: 13px;
    margin-top: 8px;
  }
</style>
<div class="cv-demo">
  <div class="cv-card">
    <div class="cv-title">CSS O'zgaruvchilar</div>
    <div class="cv-text">--primary, --bg, --radius bir joyda belgilangan</div>
    <button class="cv-btn">Tugma</button>
  </div>
  <div class="cv-card">
    <div class="cv-title">Hamma joyda bir xil</div>
    <div class="cv-text">var(--primary) bilan rang olindi</div>
    <button class="cv-btn">Boshqa tugma</button>
  </div>
</div>`,
    notes: [
      "Nomlar kebab-case bo'lishi shart: --my-color (camelCase emas)",
      "CSS o'zgaruvchilar kaskadlanadi — mahalliy qiymat global qiymatni ustidan yozadi",
      "JavaScript: getComputedStyle(el).getPropertyValue('--my-var')",
    ],
    commonMistakes: [
      "-- prefiksni unutish: --color yozish o'rniga color yozish",
      "var() ichida hisob-kitob qilishga urish — calc(var(--size) + 10) kerak",
    ],
    practiceTask: "Design token tizimi: --primary, --secondary, --bg, --surface, --text, --radius bilan to'liq karta komponenti",
    quiz: [
      {
        question: "CSS o'zgaruvchisini qanday e'lon qilinadi?",
        options: ["$color: red", "@color: red", "--color: red", "var(color): red"],
        correct: 2,
        explanation: "CSS o'zgaruvchilari -- prefiksi bilan e'lon qilinadi: --color: red; va var(--color) bilan ishlatiladi.",
      },
    ],
  },
  {
    id: "prop-calc",
    slug: "css-calc",
    title: "calc(), min(), max(), clamp()",
    description: "CSS da hisob-kitob funksiyalari",
    sections: [
      { id: "overview", title: "Tavsif" },
      { id: "example", title: "Misol" },
    ],
    content: `<h2 id="overview">Tavsif</h2>
<p>CSS hisob-kitob funksiyalari turli birliklarni aralashtirib hisoblash imkonini beradi.</p>
<h3>calc()</h3>
<p>Matematik hisob-kitob: +, -, *, / operatorlari</p>
<pre><code>width: calc(100% - 32px);</code></pre>
<h3>min()</h3>
<p>Berilgan qiymatlardan eng kichigini tanlaydi</p>
<pre><code>width: min(500px, 100%);</code></pre>
<h3>max()</h3>
<p>Berilgan qiymatlardan eng kattasini tanlaydi</p>
<pre><code>font-size: max(16px, 2vw);</code></pre>
<h3>clamp()</h3>
<p>Qiymatni minimum va maksimum orasida ushlab turadi</p>
<pre><code>clamp(minimum, ideal, maksimum)
font-size: clamp(14px, 2vw, 22px);</code></pre>
<h2 id="example">Misol</h2>`,
    codeExample: {
      title: "calc, min, max, clamp",
      language: "css",
      code: `/* calc() — turli birliklarni aralashtirish */
.sidebar { width: calc(300px + 2rem); }
.content { width: calc(100% - 300px - 2rem); }

/* min() — kichikroq qiymat (responsive) */
.container {
  width: min(1200px, 100% - 48px);
}

/* max() — kattaroq qiymat (minimum ta'minlash) */
.btn {
  padding: max(12px, 2vh) max(20px, 3vw);
}

/* clamp() — fluid typography */
h1 { font-size: clamp(24px, 5vw, 56px); }
p  { font-size: clamp(15px, 1.5vw, 18px); }

/* CSS o'zgaruvchilar bilan */
:root { --gap: 16px; }
.grid {
  gap: calc(var(--gap) * 1.5);
  padding: calc(var(--gap) * 2);
}`,
    },
    liveEditorDefault: `<style>
  .calc-demo { padding: 20px; font-family: sans-serif; }
  .container {
    width: min(400px, 100%);
    margin: 0 auto;
    background: #1e293b;
    border-radius: 12px;
    padding: 16px;
  }
  .title {
    font-size: clamp(18px, 4vw, 36px);
    color: #6366f1;
    font-weight: 700;
    margin: 0 0 8px;
  }
  .divider {
    width: calc(100% - 32px);
    height: 1px;
    background: #334155;
    margin: 12px 0;
  }
  .text {
    font-size: clamp(13px, 1.5vw, 16px);
    color: #94a3b8;
    line-height: 1.6;
  }
</style>
<div class="calc-demo">
  <div class="container">
    <h2 class="title">Fluid sarlavha</h2>
    <div class="divider"></div>
    <p class="text">
      Bu matn clamp() bilan fluid. Ekran kichrayganda
      13px, kattalashganda 16px bo'ladi. Divider calc()
      bilan container dan 32px kichik.
    </p>
  </div>
</div>`,
    notes: [
      "clamp() — responsive dizaynda media query o'rniga, fluid o'lchamlar uchun",
      "calc() ichida bo'shliq kerak: calc(100% - 20px) to'g'ri, calc(100%-20px) xato",
      "min() va max() — IE da ishlamaydi, zamonaviy brauzerlar uchun",
    ],
    commonMistakes: [
      "calc() da + va - atrofida bo'shliq qoldirmaslik (majburiy)",
      "clamp() da minimum > maksimum qo'yib qo'yish",
    ],
    practiceTask: "Fluid typography tizimi: h1, h2, h3, p uchun clamp() bilan hech qanday media query siz responsive o'lchamlar",
    quiz: [
      {
        question: "clamp(14px, 2vw, 20px) nima qiladi?",
        options: [
          "Faqat 14px ko'rsatadi",
          "14px dan 20px oraligida, ideal 2vw",
          "2vw dan ortiq bo'lsa 20px, kamroq bo'lsa 14px",
          "A va B ikkalasi ham",
        ],
        correct: 1,
        explanation: "clamp(min, ideal, max) — qiymat min dan kichik bo'lmaydi, max dan katta bo'lmaydi, ideal qiymat oradagi nisbiy o'lcham.",
      },
    ],
  },
  {
    id: "prop-list-style",
    slug: "css-list-style",
    title: "list-style",
    description: "Ro'yxat belgilari (bullet, number) ni boshqarish",
    sections: [
      { id: "overview", title: "Tavsif" },
      { id: "example", title: "Misol" },
    ],
    content: `<h2 id="overview">Tavsif</h2>
<p><strong>list-style</strong> xususiyati <code>&lt;ul&gt;</code> va <code>&lt;ol&gt;</code> ro'yxat elementlarining belgisi (marker) ni boshqaradi.</p>
<h3>Komponentlari:</h3>
<ul>
<li><code>list-style-type</code> — belgi turi (disc, circle, square, decimal, roman, none...)</li>
<li><code>list-style-position</code> — belgi joylashuvi: <code>inside</code> yoki <code>outside</code></li>
<li><code>list-style-image</code> — maxsus rasm belgi sifatida</li>
</ul>
<h3>Qisqa yozuv:</h3>
<pre><code>list-style: tur pozitsiya rasm;</code></pre>
<h3>::marker pseudo-element:</h3>
<p>CSS bilan belgi stilini boshqarish (color, font-size).</p>
<h2 id="example">Misol</h2>`,
    codeExample: {
      title: "list-style ishlatish",
      language: "css",
      code: `/* Standart belgini olib tashlash */
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

/* Maxsus belgilar */
ul { list-style-type: square; }
ol { list-style-type: upper-roman; }

/* ::marker bilan stil berish */
li::marker {
  color: #6366f1;
  font-size: 1.2em;
}

/* Maxsus belgi ::before bilan */
ul {
  list-style: none;
}
li::before {
  content: "-> ";
  color: #6366f1;
}`,
    },
    liveEditorDefault: `<style>
  .ls-demo {
    display: flex;
    gap: 32px;
    padding: 20px;
    font-family: sans-serif;
    flex-wrap: wrap;
  }
  .ls-section h3 {
    font-size: 13px;
    color: #6366f1;
    margin: 0 0 8px;
    font-weight: 700;
  }
  .ls-custom {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .ls-custom li {
    color: #94a3b8;
    font-size: 13px;
    padding: 4px 0;
  }
  .ls-custom li::before {
    content: "> ";
    color: #6366f1;
  }
  .ls-marker {
    color: #94a3b8;
    font-size: 13px;
    padding-left: 20px;
  }
  .ls-marker li::marker { color: #f59e0b; }
</style>
<div class="ls-demo">
  <div class="ls-section">
    <h3>Maxsus ::before</h3>
    <ul class="ls-custom">
      <li>Birinchi</li>
      <li>Ikkinchi</li>
      <li>Uchinchi</li>
    </ul>
  </div>
  <div class="ls-section">
    <h3>::marker rang</h3>
    <ul class="ls-marker">
      <li>Birinchi</li>
      <li>Ikkinchi</li>
      <li>Uchinchi</li>
    </ul>
  </div>
</div>`,
    notes: [
      "::marker pseudo-element — CSS bilan belgi stilini boshqarish (color, font-size)",
      "list-style: none + padding/margin: 0 — reset qilish standart amaliyot",
      "Maxsus belgilar uchun ::before + content yoki list-style-image",
    ],
    commonMistakes: [
      "list-style: none bilan padding: 0 ni unutish — standart padding qolib ketadi",
      "::marker ni hamma brauzerlarda ishlamasligini hisobga olmaslik (IE ishlamaydi)",
    ],
    practiceTask: "Chiroyli feature list: emoji yoki SVG icon belgisi bilan, hover animatsiyasi",
    quiz: [
      {
        question: "Ro'yxat belgilarini butunlay olib tashlash uchun?",
        options: ["list-style: remove", "list-style: none", "list-style: hidden", "marker: none"],
        correct: 1,
        explanation: "list-style: none ro'yxat belgilarini (bullet/number) olib tashlaydi.",
      },
    ],
  },
  {
    id: "prop-columns",
    slug: "css-columns",
    title: "columns (ustunlar)",
    description: "Matnni gazeta uslubida bir necha ustunda joylashtirish",
    sections: [
      { id: "overview", title: "Tavsif" },
      { id: "example", title: "Misol" },
    ],
    content: `<h2 id="overview">Tavsif</h2>
<p>CSS <strong>column</strong> xususiyatlari matnni avtomatik ravishda bir necha ustunda tartiblashtiradi.</p>
<h3>Asosiy xususiyatlar:</h3>
<ul>
<li><code>column-count</code> — nechta ustun</li>
<li><code>column-width</code> — minimal ustun kengligi</li>
<li><code>columns</code> — qisqa yozuv (width count)</li>
<li><code>column-gap</code> — ustunlar orasidagi bo'shliq</li>
<li><code>column-rule</code> — ustunlar orasidagi chiziq</li>
<li><code>column-span</code> — elementni barcha ustunlarga yoyish</li>
</ul>
<h2 id="example">Misol</h2>`,
    codeExample: {
      title: "CSS Columns",
      language: "css",
      code: `/* 3 ustunli layout */
.article-body {
  column-count: 3;
  column-gap: 32px;
  column-rule: 1px solid #e2e8f0;
}

/* Minimal kenglikka qarab ustun soni */
.responsive-cols {
  columns: 200px auto;
}

/* Sarlavhani barcha ustunlarga yoyish */
.article-title {
  column-span: all;
  text-align: center;
  margin-bottom: 24px;
}

/* Element ustunlar orasida kesib o'tilmasin */
.figure {
  break-inside: avoid;
}`,
    },
    liveEditorDefault: `<style>
  .col-demo { padding: 20px; font-family: serif; }
  .col-title {
    font-size: 20px;
    font-weight: 700;
    color: #e2e8f0;
    column-span: all;
    margin-bottom: 16px;
    text-align: center;
  }
  .col-content {
    columns: 180px 3;
    column-gap: 24px;
    column-rule: 1px solid #334155;
    color: #94a3b8;
    font-size: 14px;
    line-height: 1.7;
  }
</style>
<div class="col-demo">
  <div class="col-content">
    <div class="col-title">Maqola sarlavhasi</div>
    CSS columns xususiyati matnni gazeta uslubida
    bir necha ustunda joylashtirishga imkon beradi.
    Bu xususiyat ayniqsa uzoq matnlar va maqolalar
    uchun juda qulay. Ustunlar orasidagi bo'shliq
    column-gap bilan, chiziq esa column-rule bilan
    boshqariladi. Sarlavhani barcha ustunlarga yoyish
    uchun column-span: all ishlatiladi.
  </div>
</div>`,
    notes: [
      "column-width + column-count birgalikda: column-count maksimal chegara bo'ladi",
      "break-inside: avoid — karta, rasm yoki qutini ustunlar orasida kesib tashlashni oldini oladi",
      "Flexbox va Grid keng tarqalgan; columns faqat matnli kontent uchun ideal",
    ],
    commonMistakes: [
      "Karta grid uchun columns ishlatish — flex/grid to'g'riroq",
      "column-rule ni column-gap ning o'rniga ko'rish — ikkalasi alohida",
    ],
    practiceTask: "Responsive 2-3 ustunli maqola: sarlavha barcha ustunlarda, matn oqib ketsin",
    quiz: [
      {
        question: "Elementni barcha ustunlarga yoyish uchun qaysi xususiyat?",
        options: ["column-span: full", "column-span: all", "columns: all", "span-columns: true"],
        correct: 1,
        explanation: "column-span: all — elementni barcha ustunlarga yoyadi (masalan, maqola sarlavhasi).",
      },
    ],
  },
  {
    id: "prop-scroll",
    slug: "css-scroll",
    title: "scroll-behavior va scroll-snap",
    description: "Sahifa siljishini va snap nuqtalarini boshqarish",
    sections: [
      { id: "overview", title: "Tavsif" },
      { id: "example", title: "Misol" },
    ],
    content: `<h2 id="overview">Tavsif</h2>
<p>CSS scroll xususiyatlari sahifa va konteyner siljishini boshqaradi.</p>
<h3>scroll-behavior</h3>
<p>Anchor link yoki JavaScript scroll da animatsiya:</p>
<ul>
<li><code>auto</code> (standart) — tez sakrash</li>
<li><code>smooth</code> — silliq siljish</li>
</ul>
<h3>Scroll Snap</h3>
<p>Konteyner siljishini aniq nuqtalarga yopishtirib qo'yish:</p>
<ul>
<li><code>scroll-snap-type</code> — konteynerda o'q va qattiqligi</li>
<li><code>scroll-snap-align</code> — element snap nuqtasi</li>
<li><code>scroll-snap-stop</code> — har elementda to'xtash majburiyligi</li>
</ul>
<h2 id="example">Misol</h2>`,
    codeExample: {
      title: "scroll-behavior va scroll-snap",
      language: "css",
      code: `/* Silliq scroll */
html {
  scroll-behavior: smooth;
}

/* Horizontal slider - scroll snap */
.slider {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 16px;
}
.slide {
  flex: 0 0 300px;
  scroll-snap-align: start;
}

/* Vertical full-page scroll */
.pages {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}
.page {
  height: 100vh;
  scroll-snap-align: start;
  scroll-snap-stop: always;
}`,
    },
    liveEditorDefault: `<style>
  .snap-demo { padding: 20px; font-family: sans-serif; }
  .snap-label {
    font-size: 12px;
    color: #64748b;
    margin-bottom: 8px;
  }
  .snap-slider {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    gap: 12px;
    padding-bottom: 8px;
    scrollbar-width: thin;
    scrollbar-color: #334155 transparent;
  }
  .snap-slide {
    flex: 0 0 200px;
    height: 120px;
    border-radius: 12px;
    scroll-snap-align: start;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 18px;
    color: white;
  }
  .s1 { background: #6366f1; }
  .s2 { background: #8b5cf6; }
  .s3 { background: #ec4899; }
  .s4 { background: #f59e0b; }
  .s5 { background: #10b981; }
</style>
<div class="snap-demo">
  <div class="snap-label">Horizontal scroll snap slider — suring:</div>
  <div class="snap-slider">
    <div class="snap-slide s1">1</div>
    <div class="snap-slide s2">2</div>
    <div class="snap-slide s3">3</div>
    <div class="snap-slide s4">4</div>
    <div class="snap-slide s5">5</div>
  </div>
</div>`,
    notes: [
      "scroll-behavior: smooth — faqat html ga berilsa barcha anchor linklarga ta'sir qiladi",
      "scroll-snap-type: mandatory — har doim snap qiladi, proximity — faqat yaqin bo'lsa",
      "scroll-snap-stop: always — tezlik bilan o'tib ketishning oldini oladi",
    ],
    commonMistakes: [
      "scroll-snap-type ni elementga emas konteynerga berishni unutish",
      "scroll-snap-align ni element o'rniga konteynergya berish",
    ],
    practiceTask: "Mobil uslubdagi full-screen sahifalar: scroll-snap y mandatory bilan, har sahifada to'xtaydi",
    quiz: [
      {
        question: "scroll-snap-type qayerga beriladi?",
        options: ["Snap bo'ladigan elementga", "Scroll konteyneriga", "html ga", "body ga"],
        correct: 1,
        explanation: "scroll-snap-type scroll konteyneri (overflow: scroll/auto bo'lgan element) ga beriladi. scroll-snap-align esa ichidagi elementlarga.",
      },
    ],
  },
  {
    id: "prop-will-change",
    slug: "css-will-change",
    title: "will-change va contain",
    description: "Brauzer renderlash optimizatsiyasi xususiyatlari",
    sections: [
      { id: "overview", title: "Tavsif" },
      { id: "example", title: "Misol" },
    ],
    content: `<h2 id="overview">Tavsif</h2>
<p>Bu xususiyatlar brauzerga animatsiya va renderlashni oldindan optimizatsiya qilishga imkon beradi.</p>
<h3>will-change</h3>
<p>Brauzerga qaysi xususiyat o'zgarishini oldindan aytib qo'yish:</p>
<pre><code>will-change: transform, opacity;</code></pre>
<p>Brauzer element uchun alohida compositor qatlam yaratadi.</p>
<h3>contain</h3>
<p>Elementning renderlash ta'sirini izolyatsiya qilish:</p>
<ul>
<li><code>layout</code> — element ichidagi o'zgarishlar tashqariga ta'sir qilmaydi</li>
<li><code>paint</code> — element bo'yash izolyatsiyasi</li>
<li><code>content</code> — layout + paint</li>
<li><code>strict</code> — layout + paint + size</li>
</ul>
<h2 id="example">Misol</h2>`,
    codeExample: {
      title: "will-change va contain",
      language: "css",
      code: `/* will-change — animatsiya boshlanishidan oldin */
.modal {
  will-change: transform, opacity;
}

/* Hover state boshida qo'shish */
.card:hover {
  will-change: transform;
}

/* contain — katta ro'yxatlar uchun */
.list-item {
  contain: layout;
}

/* contain: content — tezkor blog post kartalari */
.blog-card {
  contain: content;
}

/* EHTIYOT! */
/* Hamma elementga will-change bermang
   — GPU xotirasi sarflanadi */`,
    },
    liveEditorDefault: `<style>
  .wc-demo {
    padding: 20px;
    font-family: sans-serif;
    display: flex;
    gap: 16px;
  }
  .wc-card {
    flex: 1;
    background: #1e293b;
    border-radius: 12px;
    padding: 16px;
    border: 1px solid #334155;
    transition: transform 0.3s, box-shadow 0.3s;
    cursor: pointer;
  }
  .wc-card:hover {
    will-change: transform;
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0,0,0,0.4);
  }
  .wc-title {
    font-size: 14px;
    font-weight: 700;
    color: #6366f1;
    margin-bottom: 8px;
  }
  .wc-text {
    font-size: 12px;
    color: #64748b;
    line-height: 1.6;
  }
</style>
<div class="wc-demo">
  <div class="wc-card">
    <div class="wc-title">will-change: transform</div>
    <div class="wc-text">Hover qiling — GPU bilan silliq ko'tarilish</div>
  </div>
  <div class="wc-card">
    <div class="wc-title">Ikkinchi karta</div>
    <div class="wc-text">Hover qilinganda will-change avtomatik qo'shiladi</div>
  </div>
</div>`,
    notes: [
      "will-change — faqat zarur elementlarga bering, aks holda xotira sarflanadi",
      "contain: strict — virtual scroll ro'yxatlar uchun katta ishlash yaxshilanishi beradi",
      "will-change: auto — animatsiya tugagandan so'ng qaytarib qo'ying",
    ],
    commonMistakes: [
      "Barcha elementlarga will-change berish — GPU xotirasini to'ldiradi, aksincha sekinlashadi",
      "will-change ni statik elementlarga berish — faqat animatsiya bo'ladigan joylarda kerak",
    ],
    practiceTask: "50 ta karta ro'yxati: contain: content bilan, hover animatsiyasi will-change bilan GPU optimizatsiya",
    quiz: [
      {
        question: "will-change xususiyatining asosiy maqsadi nima?",
        options: [
          "Elementni o'zgartiradi",
          "Brauzerga animatsiyani oldindan optimallashtirish imkonini beradi",
          "CSS o'zgaruvchi yaratadi",
          "JavaScript hodisalarini boshqaradi",
        ],
        correct: 1,
        explanation: "will-change brauzerga qaysi xususiyat o'zgarishini oldindan aytib, GPU qatlam yaratib renderlashni tezlashtiradi.",
      },
    ],
  },
  {
    id: "prop-user-select",
    slug: "css-user-select",
    title: "user-select va appearance",
    description: "Matn tanlash va element ko'rinishini boshqarish",
    sections: [
      { id: "overview", title: "Tavsif" },
      { id: "example", title: "Misol" },
    ],
    content: `<h2 id="overview">Tavsif</h2>
<p><strong>user-select</strong> — foydalanuvchining matnni tanlash imkoniyatini boshqaradi.</p>
<h3>user-select qiymatlari:</h3>
<ul>
<li><code>auto</code> (standart) — oddiy tanlov</li>
<li><code>none</code> — tanlash mumkin emas</li>
<li><code>text</code> — faqat matnni tanlash</li>
<li><code>all</code> — bir marta bosishda hammasini tanlash</li>
</ul>
<h3>appearance</h3>
<p>Brauzerning elementlarga bergan standart stilini olib tashlash:</p>
<ul>
<li><code>none</code> — barcha standart stilni olib tashlaydi</li>
<li><code>auto</code> (standart) — brauzer standarti</li>
</ul>
<h2 id="example">Misol</h2>`,
    codeExample: {
      title: "user-select va appearance",
      language: "css",
      code: `/* Tugmalar bosilganda matn tanlanmasin */
.btn {
  user-select: none;
  -webkit-user-select: none;
}

/* Kod bloklarida hammasini tanlash */
.code-block {
  user-select: all;
}

/* Drag-and-drop elementlar */
.draggable {
  user-select: none;
}

/* appearance — maxsus input dizayni */
input[type="checkbox"] {
  appearance: none;
  -webkit-appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid #6366f1;
  border-radius: 4px;
  cursor: pointer;
}
input[type="checkbox"]:checked {
  background: #6366f1;
}`,
    },
    liveEditorDefault: `<style>
  .us-demo {
    padding: 20px;
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .us-box {
    padding: 12px 16px;
    border-radius: 8px;
    border: 1px solid #334155;
    font-size: 13px;
  }
  .no-select { user-select: none; background: #1e293b; color: #64748b; }
  .all-select { user-select: all; background: #1e293b; color: #94a3b8; cursor: pointer; }
  .custom-cb {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #94a3b8;
    font-size: 13px;
  }
  .custom-cb input {
    appearance: none;
    -webkit-appearance: none;
    width: 18px;
    height: 18px;
    border: 2px solid #6366f1;
    border-radius: 4px;
    cursor: pointer;
    flex-shrink: 0;
  }
  .custom-cb input:checked { background: #6366f1; }
</style>
<div class="us-demo">
  <div class="us-box no-select">Bu matn tanlanmaydi (user-select: none)</div>
  <div class="us-box all-select">Meni bir marta bossangiz hammasi tanlanadi (user-select: all)</div>
  <label class="custom-cb">
    <input type="checkbox"> Maxsus checkbox (appearance: none)
  </label>
</div>`,
    notes: [
      "-webkit-user-select vendor prefix Safari uchun kerak bo'lishi mumkin",
      "appearance: none — cross-browser maxsus form elementlari dizayni uchun zarur",
      "user-select: none — o'yin, drag-drop, tugmalar uchun standart amaliyot",
    ],
    commonMistakes: [
      "appearance: none bergach placeholder stilini yo'qotib qo'yish",
      "user-select: none ni accessibility nuqtai nazardan ko'rib chiqmaslik",
    ],
    practiceTask: "Maxsus checkbox va radio button: appearance: none bilan, CSS animatsiyali check belgisi",
    quiz: [
      {
        question: "user-select: all nima qiladi?",
        options: [
          "Barcha elementlardagi matnni tanlaydi",
          "Elementda bir marta bosishda butun matnni tanlaydi",
          "Matn tanlovini o'chiradi",
          "Faqat matn tanlash imkonini beradi",
        ],
        correct: 1,
        explanation: "user-select: all — elementga bir marta bosishda undagi barcha matn avtomatik tanlanadi.",
      },
    ],
  },
  {
    id: "prop-resize",
    slug: "css-resize",
    title: "resize",
    description: "Element o'lchamini foydalanuvchi o'zgartira olishini boshqarish",
    sections: [
      { id: "overview", title: "Tavsif" },
      { id: "example", title: "Misol" },
    ],
    content: `<h2 id="overview">Tavsif</h2>
<p><strong>resize</strong> xususiyati foydalanuvchiga element o'lchamini o'zgartirish imkonini beradi. Ko'pincha <code>&lt;textarea&gt;</code> uchun ishlatiladi.</p>
<h3>Qiymatlar:</h3>
<ul>
<li><code>none</code> — o'lchamni o'zgartirib bo'lmaydi</li>
<li><code>both</code> — ikki tomonga ham</li>
<li><code>horizontal</code> — faqat kenglik</li>
<li><code>vertical</code> — faqat balandlik</li>
</ul>
<p><strong>Eslatma:</strong> resize ishlashi uchun <code>overflow</code> xususiyati <code>visible</code> dan boshqacha bo'lishi kerak.</p>
<h2 id="example">Misol</h2>`,
    codeExample: {
      title: "resize ishlatish",
      language: "css",
      code: `/* Textarea faqat vertikal */
textarea {
  resize: vertical;
  overflow: auto;
  min-height: 80px;
}

/* O'lchamni o'zgartirish mumkin emas */
textarea.fixed {
  resize: none;
}

/* Div ni resize qilish */
.resizable-box {
  resize: both;
  overflow: auto;
  min-width: 100px;
  min-height: 60px;
  border: 2px solid #6366f1;
  padding: 16px;
}`,
    },
    liveEditorDefault: `<style>
  .resize-demo {
    padding: 20px;
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .resize-demo label {
    font-size: 12px;
    color: #64748b;
    margin-bottom: 4px;
    display: block;
  }
  .resize-demo textarea {
    width: 100%;
    background: #1e293b;
    border: 1px solid #334155;
    border-radius: 8px;
    color: #e2e8f0;
    padding: 10px;
    font-size: 13px;
    font-family: inherit;
    box-sizing: border-box;
    resize: vertical;
    min-height: 60px;
  }
  .r-box {
    resize: both;
    overflow: auto;
    min-width: 100px;
    min-height: 60px;
    background: #1e293b;
    border: 2px solid #6366f1;
    border-radius: 8px;
    padding: 12px;
    color: #94a3b8;
    font-size: 12px;
    display: inline-block;
  }
</style>
<div class="resize-demo">
  <div>
    <label>Vertikal resize textarea:</label>
    <textarea>Bu textarea faqat balandligi o'zgartirilishi mumkin</textarea>
  </div>
  <div>
    <label>Ikki tomonlama resize div:</label>
    <div class="r-box">Drag pastki o'ng burchakdan</div>
  </div>
</div>`,
    notes: [
      "resize — textarea uchun odatda vertical yaxshiroq, horizontal layout buzadi",
      "min-height va min-width bilan minimal o'lchamni cheklash kerak",
      "resize ishlashi uchun overflow: hidden bo'lmasligi kerak",
    ],
    commonMistakes: [
      "overflow ni belgilamaslik — resize handle ko'rinmaydi",
      "resize: both textarea ga berish — kenglik o'zgarsa layout buzilishi mumkin",
    ],
    practiceTask: "Comment textarea: resize: vertical, min-height, max-height, stylish border, focus effekti",
    quiz: [
      {
        question: "resize xususiyati ishlashi uchun nima kerak?",
        options: [
          "display: block",
          "overflow: visible dan boshqa qiymat",
          "position: relative",
          "width va height belgilangan bo'lishi",
        ],
        correct: 1,
        explanation: "resize ishlashi uchun elementning overflow xususiyati visible dan boshqa bo'lishi kerak (auto, hidden, scroll).",
      },
    ],
  },
];
