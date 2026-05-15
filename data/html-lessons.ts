import type { Course } from "@/lib/types";

export const htmlCourse: Course = {
  id: "html",
  slug: "html",
  title: "HTML",
  description: "HTML asoslarini o'rganing",
  color: "#e34c26",
  icon: "🌐",
  available: true,
  groups: [
    {
      title: "Kirish",
      lessons: [
        {
          id: "html-intro",
          slug: "kirish",
          title: "HTML nima?",
          description: "HTML haqida umumiy tushuncha va tarixi",
          sections: [
            { id: "nima", title: "HTML nima?" },
            { id: "tarix", title: "Qisqacha tarix" },
            { id: "qanday-ishlaydi", title: "HTML qanday ishlaydi?" },
          ],
          content: `
<h1>HTML nima?</h1>
<p>HTML — <strong>HyperText Markup Language</strong> ning qisqartmasi. U veb-sahifalarni yaratish uchun ishlatiladigan standart belgilash tilidir.</p>

<h2 id="nima">HTML nima?</h2>
<p>HTML veb-brauzerga sahifa mazmunini qanday ko'rsatishni aytib beradi. U dasturlash tili emas — u <strong>belgilash tili</strong> bo'lib, teglar orqali matnni, rasmlarni, havolalarni va boshqa elementlarni tasvirlaydi.</p>
<ul>
  <li>HTML sahifaning <strong>skeletini</strong> hosil qiladi</li>
  <li>CSS unga <strong>ko'rinish</strong> beradi</li>
  <li>JavaScript sahifaga <strong>harakat</strong> qo'shadi</li>
</ul>

<h2 id="tarix">Qisqacha tarix</h2>
<p>HTML 1991-yilda Tim Berners-Lee tomonidan ixtiro qilingan. Hozirda <strong>HTML5</strong> eng so'nggi va keng qo'llaniladigan versiya hisoblanadi.</p>

<h2 id="qanday-ishlaydi">HTML qanday ishlaydi?</h2>
<p>Brauzer HTML faylini o'qiydi va har bir tegni tushunib, ekranda tegishli elementni chizadi. Masalan, <code>&lt;h1&gt;</code> tegi katta sarlavha ko'rsatadi, <code>&lt;p&gt;</code> tegi esa paragraf.</p>
          `,
          codeExample: {
            title: "Birinchi HTML sahifa",
            language: "html",
            code: `<!DOCTYPE html>
<html lang="uz">
  <head>
    <meta charset="UTF-8" />
    <title>Mening birinchi sahifam</title>
  </head>
  <body>
    <h1>Salom, Dunyo!</h1>
    <p>Bu mening birinchi HTML sahifam.</p>
  </body>
</html>`,
          },
          liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8" />
  <title>Salom!</title>
</head>
<body>
  <h1>Salom, Dunyo!</h1>
  <p>HTML o'rganish qiziqarli!</p>
</body>
</html>`,
          notes: [
            "HTML fayllari <code>.html</code> kengaytmasi bilan saqlanadi.",
            "Brauzer HTML kodini yuqoridan pastga o'qiydi.",
            "HTML teglar katta-kichik harflarga sezgir emas, lekin kichik harfda yozish tavsiya etiladi.",
          ],
          commonMistakes: [
            "Teglarni yopishni unutish (<code>&lt;p&gt;</code> ochib, <code>&lt;/p&gt;</code> yopmaslik)",
            "HTML ni dasturlash tili deb o'ylash — u belgilash tilidir",
          ],
          practiceTask:
            "Yuqoridagi kodga o'z ismingizni yozuvchi <code>&lt;h2&gt;</code> sarlavha va qisqacha o'zingiz haqida bir gap qo'shing.",
          quiz: [
            {
              question: "HTML ning to'liq nomi nima?",
              options: [
                "HyperText Markup Language",
                "High-Tech Modern Language",
                "HyperText Modern Links",
                "Home Tool Markup Language",
              ],
              correct: 0,
              explanation:
                "HTML — HyperText Markup Language, ya'ni gipermatnli belgilash tili.",
            },
            {
              question: "HTML qanday turdagi til?",
              options: [
                "Dasturlash tili",
                "Belgilash tili",
                "Ma'lumotlar bazasi tili",
                "Skript tili",
              ],
              correct: 1,
              explanation:
                "HTML dasturlash tili emas, balki belgilash tili (markup language) hisoblanadi.",
            },
          ],
        },
        {
          id: "html-structure",
          slug: "tuzilish",
          title: "HTML tuzilishi",
          description: "HTML hujjatining asosiy tuzilishi",
          sections: [
            { id: "doctype", title: "DOCTYPE" },
            { id: "html-tag", title: "html tegi" },
            { id: "head", title: "head bo'limi" },
            { id: "body", title: "body bo'limi" },
          ],
          content: `
<h1>HTML hujjat tuzilishi</h1>
<p>Har bir HTML sahifasi bir xil asosiy tuzilishga ega. Bu tuzilishni yaxshi bilish kelajakda murakkab sahifalar yaratishda katta yordam beradi.</p>

<h2 id="doctype">DOCTYPE deklaratsiyasi</h2>
<p><code>&lt;!DOCTYPE html&gt;</code> — bu brauzerga hujjat HTML5 formatida ekanligini bildiradi. U har doim faylning birinchi qatorida bo'lishi kerak.</p>

<h2 id="html-tag">&lt;html&gt; tegi</h2>
<p><code>&lt;html&gt;</code> tegi HTML hujjatining ildiz elementi hisoblanadi. Barcha boshqa teglar shu teg ichida joylashadi. <code>lang</code> atributi sahifa tilini bildiradi.</p>

<h2 id="head">&lt;head&gt; bo'limi</h2>
<p><code>&lt;head&gt;</code> bo'limida sahifa haqidagi meta-ma'lumotlar (title, charset, description) joylashadi. Bu ma'lumotlar ekranda ko'rinmaydi, lekin brauzer va qidiruv tizimlari uchun muhim.</p>
<ul>
  <li><code>&lt;meta charset="UTF-8"&gt;</code> — Uzbek harflarini to'g'ri ko'rsatadi</li>
  <li><code>&lt;title&gt;</code> — brauzer tabida ko'rinadigan sarlavha</li>
  <li><code>&lt;meta name="viewport"&gt;</code> — mobil qurilmalarda to'g'ri ko'rsatadi</li>
</ul>

<h2 id="body">&lt;body&gt; bo'limi</h2>
<p><code>&lt;body&gt;</code> bo'limida sahifada ko'rinadigan barcha kontent joylashadi: matn, rasmlar, havolalar, tugmalar va boshqalar.</p>
          `,
          codeExample: {
            title: "To'liq HTML tuzilishi",
            language: "html",
            code: `<!DOCTYPE html>
<html lang="uz">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="HTML o'rganish kursi" />
    <title>HTML Kursi | Learner</title>
  </head>
  <body>
    <header>
      <h1>HTML Kursi</h1>
    </header>
    <main>
      <p>Bu yerda asosiy kontent joylashadi.</p>
    </main>
    <footer>
      <p>&copy; 2024 Learner</p>
    </footer>
  </body>
</html>`,
          },
          liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>HTML Tuzilishi</title>
</head>
<body>
  <h1>Salom!</h1>
  <p>Bu body bo'limi.</p>
</body>
</html>`,
          notes: [
            "<code>lang='uz'</code> atributini qo'shish SEO va accessibility uchun muhim.",
            "<code>charset='UTF-8'</code> O'zbek harflarini to'g'ri ko'rsatadi.",
            "<code>&lt;head&gt;</code> va <code>&lt;body&gt;</code> yopish teglarini unutmang.",
          ],
          commonMistakes: [
            "<code>&lt;!DOCTYPE html&gt;</code> ni qo'yishni unutish",
            "Kontent ni <code>&lt;head&gt;</code> ichiga joylashtirish (bu bo'limda faqat meta-ma'lumotlar bo'lishi kerak)",
          ],
          practiceTask:
            "To'liq HTML tuzilishini yozing: title ni o'z ismingiz bilan to'ldiring, body ichiga o'zingiz haqida qisqa ma'lumot kiriting.",
          quiz: [
            {
              question: "DOCTYPE deklaratsiyasi qayerga yoziladi?",
              options: [
                "head ichiga",
                "body ichiga",
                "Faylning birinchi qatoriga",
                "html tegi ichiga",
              ],
              correct: 2,
              explanation:
                "DOCTYPE hujjatning eng birinchi qatorida, hatto html tegidan ham oldin yoziladi.",
            },
            {
              question: "Qaysi bo'limda sahifaning ko'rinadigan kontenti bo'ladi?",
              options: ["head", "meta", "body", "title"],
              correct: 2,
              explanation:
                "Ekranda ko'rinadigan barcha kontent body bo'limiga joylashtiriladi.",
            },
          ],
        },
      ],
    },
    {
      title: "Matn elementlari",
      lessons: [
        {
          id: "html-headings",
          slug: "sarlavhalar",
          title: "Sarlavhalar (Headings)",
          description: "h1 dan h6 gacha sarlavha teglari",
          sections: [
            { id: "heading-darajalari", title: "Sarlavha darajalari" },
            { id: "seo", title: "SEO ahamiyati" },
          ],
          content: `
<h1>Sarlavhalar (Headings)</h1>
<p>HTML da sarlavhalar uchun 6 ta daraja mavjud: <code>&lt;h1&gt;</code> dan <code>&lt;h6&gt;</code> gacha. <code>&lt;h1&gt;</code> eng katta va muhim, <code>&lt;h6&gt;</code> esa eng kichik sarlavha.</p>

<h2 id="heading-darajalari">Sarlavha darajalari</h2>
<p>Sarlavhalar sahifaning tuzilishini va ierarxiyasini belgilaydi. Kitobdagi bob va bo'limlarga o'xshaydi:</p>
<ul>
  <li><code>&lt;h1&gt;</code> — Asosiy sarlavha (sahifada odatda bitta bo'ladi)</li>
  <li><code>&lt;h2&gt;</code> — Katta bo'lim sarlavhasi</li>
  <li><code>&lt;h3&gt;</code> — Kichik bo'lim sarlavhasi</li>
  <li><code>&lt;h4&gt;</code>, <code>&lt;h5&gt;</code>, <code>&lt;h6&gt;</code> — Chuqur ierarxiya uchun</li>
</ul>

<h2 id="seo">SEO ahamiyati</h2>
<p>Qidiruv tizimlari (Google, Yandex) sahifani tushunish uchun sarlavhalarga katta e'tibor beradi. <code>&lt;h1&gt;</code> eng muhim kalit so'zlarni o'z ichiga olishi kerak.</p>
          `,
          codeExample: {
            title: "Barcha sarlavha darajalari",
            language: "html",
            code: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8" />
  <title>Sarlavhalar</title>
</head>
<body>
  <h1>H1 - Asosiy sarlavha</h1>
  <h2>H2 - Katta bo'lim</h2>
  <h3>H3 - Kichik bo'lim</h3>
  <h4>H4 - Pastki bo'lim</h4>
  <h5>H5 - Kichikroq</h5>
  <h6>H6 - Eng kichik</h6>
</body>
</html>`,
          },
          liveEditorDefault: `<h1>Mening blogim</h1>
<h2>Texnologiya</h2>
<h3>Web dasturlash</h3>
<p>HTML o'rganish juda qiziqarli!</p>
<h3>Mobil ilovalar</h3>
<p>Mobil dasturlash ham muhim.</p>`,
          notes: [
            "Bir sahifada faqat bitta <code>&lt;h1&gt;</code> bo'lishi tavsiya etiladi.",
            "Sarlavha darajalarini o'tkazib yubormang (h1 dan h3 ga o'tish noto'g'ri).",
          ],
          commonMistakes: [
            "Matnni katta qilish uchun h1 ishlatish (CSS ishlatish kerak)",
            "Sarlavha darajalarini ierarxiyasiz tasodifiy ishlatish",
          ],
          practiceTask:
            "O'z blog sahifangizni tasavvur qiling: h1 bilan blog nomi, h2 bilan bo'limlar, h3 bilan maqola sarlavhalarini yozing.",
          quiz: [
            {
              question: "Sahifada nechta h1 bo'lishi tavsiya etiladi?",
              options: ["Istalgancha", "Faqat bitta", "Ikkita", "Uchta"],
              correct: 1,
              explanation:
                "SEO va accessibility uchun sahifada faqat bitta h1 bo'lishi tavsiya etiladi.",
            },
          ],
        },
        {
          id: "html-paragraphs",
          slug: "paragraflar",
          title: "Paragraflar va matn",
          description: "p, br, hr teglari va matn formatlash",
          sections: [
            { id: "p-tegi", title: "Paragraf tegi" },
            { id: "br-hr", title: "br va hr teglari" },
          ],
          content: `
<h1>Paragraflar va matn</h1>
<p>Matn kontentini tuzish uchun HTML da bir nechta asosiy teglar mavjud. Ularni to'g'ri ishlatish sahifani o'qilishi va tuzilishini yaxshilaydi.</p>

<h2 id="p-tegi">Paragraf tegi &lt;p&gt;</h2>
<p><code>&lt;p&gt;</code> tegi matn paragraflarini belgilaydi. Brauzer har bir paragraf atrofida avtomatik bo'sh joy qo'shadi. Paragraflar orasidagi bo'sh joylar va qatorlar brauzer tomonidan e'tiborga olinmaydi — buni CSS bilan boshqarish kerak.</p>

<h2 id="br-hr">br va hr teglari</h2>
<p><code>&lt;br&gt;</code> — qator uzish (line break). Yopish tegi yo'q, o'z-o'zini yopadi.</p>
<p><code>&lt;hr&gt;</code> — gorizontal chiziq (horizontal rule). Mavzular orasini ajratish uchun ishlatiladi.</p>
          `,
          codeExample: {
            title: "Paragraf va matn teglari",
            language: "html",
            code: `<p>Bu birinchi paragraf. HTML da matn yozish juda oson.</p>
<p>Bu ikkinchi paragraf.<br />Bu yangi qator, lekin yangi paragraf emas.</p>
<hr />
<p>Bu ajratgichdan keyingi paragraf.</p>`,
          },
          liveEditorDefault: `<h1>Mening hikoyam</h1>
<p>Bu birinchi paragraf. Men HTML o'rganmoqdaman.</p>
<p>Bu ikkinchi paragraf.<br />Qator uzish uchun br ishlatiladi.</p>
<hr />
<p>Chiziqdan keyingi yangi bo'lim.</p>`,
          notes: [
            "<code>&lt;br&gt;</code> ni ko'p ishlatmang — oraliqni CSS bilan boshqarish yaxshiroq.",
            "HTML da bo'sh joylar va yangi qatorlar brauzerda avtomatik bir probel sifatida ko'rinadi.",
          ],
          commonMistakes: [
            "Paragraflar orasiga &lt;br&gt;&lt;br&gt; qo'yish — buning o'rniga &lt;p&gt; ishlating",
          ],
          practiceTask:
            "O'zingiz haqida 3 ta paragraf yozing. Har ikki paragraf orasiga hr qo'shing.",
          quiz: [
            {
              question: "Qaysi teg yangi qatorga o'tish uchun ishlatiladi?",
              options: ["<code>&lt;p&gt;</code>", "<code>&lt;hr&gt;</code>", "<code>&lt;br&gt;</code>", "<code>&lt;nl&gt;</code>"],
              correct: 2,
              explanation:
                "<code>&lt;br&gt;</code> — break qisqartmasi bo'lib, qator uzish uchun ishlatiladi.",
            },
          ],
        },
        {
          id: "html-formatting",
          slug: "formatlash",
          title: "Matn formatlash",
          description: "bold, italic, underline va boshqa formatlash teglari",
          sections: [
            { id: "qalin-kursiv", title: "Qalin va kursiv" },
            { id: "boshqa-formatlar", title: "Boshqa formatlash" },
          ],
          content: `
<h1>Matn formatlash teglari</h1>
<p>HTML da matnni vizual va semantik jihatdan formatlash mumkin. Ba'zi teglar faqat ko'rinishni o'zgartirsa, ba'zilari semantik ma'no ham beradi.</p>

<h2 id="qalin-kursiv">Qalin va kursiv</h2>
<ul>
  <li><code>&lt;strong&gt;</code> — muhim matn (qalin, semantik ma'nosi bor)</li>
  <li><code>&lt;b&gt;</code> — faqat qalin ko'rinish (semantik ma'nosi yo'q)</li>
  <li><code>&lt;em&gt;</code> — ta'kidlangan matn (kursiv, semantik ma'nosi bor)</li>
  <li><code>&lt;i&gt;</code> — faqat kursiv ko'rinish</li>
</ul>

<h2 id="boshqa-formatlar">Boshqa formatlash teglari</h2>
<ul>
  <li><code>&lt;u&gt;</code> — tagiga chizilgan matn</li>
  <li><code>&lt;mark&gt;</code> — sariq rang bilan ta'kidlangan</li>
  <li><code>&lt;del&gt;</code> — o'chirilgan matn</li>
  <li><code>&lt;ins&gt;</code> — qo'shilgan matn</li>
  <li><code>&lt;sup&gt;</code> — yuqori indeks (x²)</li>
  <li><code>&lt;sub&gt;</code> — pastki indeks (H₂O)</li>
  <li><code>&lt;small&gt;</code> — kichik matn</li>
  <li><code>&lt;code&gt;</code> — kod matni</li>
</ul>
          `,
          codeExample: {
            title: "Formatlash teglari",
            language: "html",
            code: `<p>Bu <strong>juda muhim</strong> ma'lumot.</p>
<p>Bu <em>ta'kidlangan</em> so'z.</p>
<p>Narx: <del>50,000</del> <ins>35,000</ins> so'm</p>
<p>Suv formulasi: H<sub>2</sub>O</p>
<p>Kvadrat: x<sup>2</sup></p>
<p>Bu <mark>sariq</mark> bilan ta'kidlangan.</p>
<p><code>console.log("Salom")</code> — kod misoli</p>`,
          },
          liveEditorDefault: `<p>Bu <strong>qalin</strong> matn.</p>
<p>Bu <em>kursiv</em> matn.</p>
<p>Bu <mark>ta'kidlangan</mark> matn.</p>
<p>H<sub>2</sub>O — suvning formulasi</p>
<p>x<sup>2</sup> + y<sup>2</sup></p>`,
          notes: [
            "Accessibility uchun <code>&lt;strong&gt;</code> va <code>&lt;em&gt;</code> ni afzal ko'ring — ular semantik ma'no beradi.",
            "Screen-reader qurilmalar <code>&lt;strong&gt;</code> ni alohida ovoz bilan o'qiydi.",
          ],
          commonMistakes: [
            "Barcha qalin matn uchun <code>&lt;b&gt;</code> ishlatish — muhim matn uchun <code>&lt;strong&gt;</code> tavsiya etiladi",
          ],
          practiceTask:
            "Kimyoviy formula yozing: CO₂ (karbonat angidrid). H₂SO₄ (sulfat kislota). E=mc² formulasini yozing.",
          quiz: [
            {
              question:
                "Semantik jihatdan muhim matnni qalin ko'rsatish uchun qaysi teg to'g'ri?",
              options: ["<code>&lt;b&gt;</code>", "<code>&lt;bold&gt;</code>", "<code>&lt;strong&gt;</code>", "<code>&lt;heavy&gt;</code>"],
              correct: 2,
              explanation:
                "<code>&lt;strong&gt;</code> tegi semantik ma'nosi bor qalin teg hisoblanadi.",
            },
          ],
        },
      ],
    },
    {
      title: "Havolalar va rasmlar",
      lessons: [
        {
          id: "html-links",
          slug: "havolalar",
          title: "Havolalar (Links)",
          description: "a tegi, href, target va boshqa atributlar",
          sections: [
            { id: "a-tegi", title: "a tegi" },
            { id: "target", title: "target atributi" },
            { id: "email-tel", title: "Email va telefon" },
          ],
          content: `
<h1>Havolalar (Links)</h1>
<p>Havolalar internetning asosi hisoblanadi. <code>&lt;a&gt;</code> (anchor) tegi yordamida bir sahifadan boshqasiga o'tish mumkin.</p>

<h2 id="a-tegi">a tegi va href atributi</h2>
<p><code>href</code> — "hypertext reference" qisqartmasi. Havola manzilini belgilaydi:</p>
<ul>
  <li><strong>Absolyut havola:</strong> <code>https://example.com</code></li>
  <li><strong>Nisbiy havola:</strong> <code>about.html</code> yoki <code>/blog/maqola</code></li>
  <li><strong>Anchor havola:</strong> <code>#section-id</code> — sahifa ichida</li>
</ul>

<h2 id="target">target atributi</h2>
<ul>
  <li><code>target="_blank"</code> — yangi tabda ochadi</li>
  <li><code>target="_self"</code> — joriy tabda ochadi (standart)</li>
</ul>

<h2 id="email-tel">Email va telefon havolalari</h2>
<p><code>mailto:</code> va <code>tel:</code> protokollari orqali email va telefon havolalari yaratish mumkin.</p>
          `,
          codeExample: {
            title: "Havola turlari",
            language: "html",
            code: `<!-- Oddiy havola -->
<a href="https://google.com">Google ga o'ting</a>

<!-- Yangi tabda ochish -->
<a href="https://google.com" target="_blank" rel="noopener noreferrer">
  Google (yangi tab)
</a>

<!-- Sahifa ichida anchor -->
<a href="#kirish">Kirish bo'limiga o'ting</a>

<!-- Email havolasi -->
<a href="mailto:info@example.com">Email yuborish</a>

<!-- Telefon havolasi -->
<a href="tel:+998901234567">+998 90 123 45 67</a>

<!-- Fayl yuklab olish -->
<a href="/resume.pdf" download>CV yuklab olish</a>`,
          },
          liveEditorDefault: `<h2>Foydali havolalar</h2>
<p><a href="https://google.com" target="_blank">Google</a></p>
<p><a href="https://wikipedia.org" target="_blank">Wikipedia</a></p>
<p><a href="mailto:test@test.com">Email yuborish</a></p>
<p><a href="#yuqori">Yuqoriga qaytish</a></p>`,
          notes: [
            "<code>rel='noopener noreferrer'</code> ni <code>target='_blank'</code> bilan birga ishlatish xavfsizlik uchun muhim.",
            "Anchor havolalarda id atribut mos kelishi kerak.",
          ],
          commonMistakes: [
            "<code>target='_blank'</code> bilan <code>rel='noopener'</code> ni unutish",
            "href atributini yozishni unutib havola yaratish",
          ],
          practiceTask:
            "3 ta havola yarating: 1) Google ga tashqi havola, 2) email havolasi, 3) sahifa ichidagi anchor havola.",
          quiz: [
            {
              question: "Havolani yangi tabda ochish uchun qaysi atribut kerak?",
              options: [
                'href="new"',
                'target="_blank"',
                'open="tab"',
                'link="external"',
              ],
              correct: 1,
              explanation:
                'target="_blank" atributi havolani yangi brauzer tabida ochadi.',
            },
          ],
        },
        {
          id: "html-images",
          slug: "rasmlar",
          title: "Rasmlar (Images)",
          description: "img tegi, src, alt va rasmlarni boshqarish",
          sections: [
            { id: "img-tegi", title: "img tegi" },
            { id: "alt", title: "alt atributi" },
            { id: "o-lcham", title: "O'lchamlar" },
          ],
          content: `
<h1>Rasmlar (Images)</h1>
<p><code>&lt;img&gt;</code> tegi sahifaga rasm qo'shish uchun ishlatiladi. Bu teg o'z-o'zini yopadi — yopish tegi yo'q.</p>

<h2 id="img-tegi">img tegi va src atributi</h2>
<p><code>src</code> rasm manbaini ko'rsatadi:</p>
<ul>
  <li><strong>Nisbiy yo'l:</strong> <code>images/foto.jpg</code></li>
  <li><strong>Absolyut URL:</strong> <code>https://example.com/rasm.png</code></li>
</ul>

<h2 id="alt">alt atributi — muhim!</h2>
<p><code>alt</code> — "alternative text". Rasm yuklanmagan yoki ko'zi ojiz foydalanuvchilar uchun matn tavsifi. Bu atribut majburiy!</p>

<h2 id="o-lcham">O'lcham atributlari</h2>
<p><code>width</code> va <code>height</code> atributlari rasmning o'lchamini piksel yoki foizda belgilaydi. Ularni HTML da belgilash sahifaning tez yuklanishiga yordam beradi.</p>
          `,
          codeExample: {
            title: "Rasm ishlatish",
            language: "html",
            code: `<!-- Oddiy rasm -->
<img src="foto.jpg" alt="Mening fotom" />

<!-- O'lcham bilan -->
<img
  src="https://picsum.photos/400/200"
  alt="Tasodifiy rasm"
  width="400"
  height="200"
/>

<!-- Responsive rasm -->
<img
  src="logo.png"
  alt="Kompaniya logosi"
  width="400"
/>

<!-- Havola ichida rasm -->
<a href="https://example.com">
  <img src="banner.jpg" alt="Saytga kirish" />
</a>`,
          },
          liveEditorDefault: `<h2>Rasmlar misoli</h2>
<img
  src="https://picsum.photos/300/200"
  alt="Tasodifiy chiroyli rasm"
  width="300"
  height="200"
/>
<p>Bu rasm Picsum Photos dan yuklandi.</p>`,
          notes: [
            "<code>alt</code> atributsiz rasm — accessibility qoidasini buzadi.",
            "Rasm o'lchamlarini HTML da belgilash sahifaning CLS (layout shift) ko'rsatkichini yaxshilaydi.",
          ],
          commonMistakes: [
            "alt atributini yozishni unutish",
            "Katta hajmli rasmlarni optimizatsiya qilmay ishlatish",
          ],
          practiceTask:
            "picsum.photos dan 3 ta rasm qo'shing, har biriga mos alt matn yozing va o'lchamlarini belgilang.",
          quiz: [
            {
              question: "img tegida qaysi atribut majburiy hisoblanadi?",
              options: ["width", "height", "alt", "title"],
              correct: 2,
              explanation:
                "alt atributi accessibility uchun majburiy — rasm yuklanmagan yoki screen-reader uchun zarur.",
            },
          ],
        },
      ],
    },
    {
      title: "Ro'yxatlar",
      lessons: [
        {
          id: "html-lists",
          slug: "royxatlar",
          title: "Ro'yxatlar (Lists)",
          description: "ul, ol, li, dl teglari",
          sections: [
            { id: "ul", title: "Tartibsiz ro'yxat" },
            { id: "ol", title: "Tartiblangan ro'yxat" },
            { id: "nested", title: "Ichma-ich ro'yxatlar" },
          ],
          content: `
<h1>Ro'yxatlar (Lists)</h1>
<p>HTML da uch turdagi ro'yxat mavjud: tartibsiz, tartiblangan va tavsif ro'yxati.</p>

<h2 id="ul">Tartibsiz ro'yxat (ul)</h2>
<p><code>&lt;ul&gt;</code> — unordered list. Har bir element <code>&lt;li&gt;</code> tegi bilan belgilanadi. Elementlar nuqta bilan ko'rsatiladi.</p>

<h2 id="ol">Tartiblangan ro'yxat (ol)</h2>
<p><code>&lt;ol&gt;</code> — ordered list. Elementlar raqam bilan ko'rsatiladi. <code>type</code> atributi bilan raqamlash turini o'zgartirish mumkin:</p>
<ul>
  <li><code>type="1"</code> — 1, 2, 3 (standart)</li>
  <li><code>type="A"</code> — A, B, C</li>
  <li><code>type="a"</code> — a, b, c</li>
  <li><code>type="I"</code> — I, II, III</li>
</ul>

<h2 id="nested">Ichma-ich ro'yxatlar</h2>
<p>Ro'yxatlar ichida boshqa ro'yxatlar joylashtirib, ierarxik tuzilish hosil qilish mumkin.</p>
          `,
          codeExample: {
            title: "Ro'yxat turlari",
            language: "html",
            code: `<!-- Tartibsiz ro'yxat -->
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<!-- Tartiblangan ro'yxat -->
<ol>
  <li>Kirish qiling</li>
  <li>Ma'lumotlarni to'ldiring</li>
  <li>Tasdiqlang</li>
</ol>

<!-- Ichma-ich ro'yxat -->
<ul>
  <li>Frontend
    <ul>
      <li>HTML</li>
      <li>CSS</li>
    </ul>
  </li>
  <li>Backend
    <ul>
      <li>Node.js</li>
      <li>Python</li>
    </ul>
  </li>
</ul>`,
          },
          liveEditorDefault: `<h2>Mening sevimli dasturlash tillari</h2>
<ol>
  <li>JavaScript</li>
  <li>Python</li>
  <li>TypeScript</li>
</ol>

<h2>Web texnologiyalari</h2>
<ul>
  <li>HTML — tuzilish</li>
  <li>CSS — ko'rinish</li>
  <li>JS — harakat</li>
</ul>`,
          notes: [
            "Ro'yxat elementlari faqat <code>&lt;li&gt;</code> bo'lishi kerak — boshqa teglarni ul/ol ichiga to'g'ridan-to'g'ri qo'ymang.",
            "Navigatsiya menyu uchun <code>&lt;nav&gt;&lt;ul&gt;</code> kombinatsiyasi semantik jihatdan to'g'ri.",
          ],
          commonMistakes: [
            "&lt;li&gt; ni ul/ol tashqarisida ishlatish",
            "Faqat bitta elementli tartibsiz ro'yxat — buning o'rniga &lt;p&gt; ishlating",
          ],
          practiceTask:
            "Ovqat retsepti yozing: ol bilan bosqich-bosqich ko'rsatma, ul bilan kerakli mahsulotlar ro'yxati.",
          quiz: [
            {
              question: "Tartiblangan ro'yxat uchun qaysi teg ishlatiladi?",
              options: ["<code>&lt;ul&gt;</code>", "<code>&lt;dl&gt;</code>", "<code>&lt;ol&gt;</code>", "<code>&lt;list&gt;</code>"],
              correct: 2,
              explanation:
                "<code>&lt;ol&gt;</code> — ordered list, raqamlangan ro'yxat uchun ishlatiladi.",
            },
          ],
        },
      ],
    },
    {
      title: "Jadvallar",
      lessons: [
        {
          id: "html-tables",
          slug: "jadvallar",
          title: "Jadvallar (Tables)",
          description: "table, tr, th, td va jadval tuzilishi",
          sections: [
            { id: "jadval-tuzilish", title: "Jadval tuzilishi" },
            { id: "birlashtirish", title: "Katakchalarni birlashtirish" },
          ],
          content: `
<h1>Jadvallar (Tables)</h1>
<p>HTML jadvallar ma'lumotlarni qatorlar va ustunlarda ko'rsatish uchun ishlatiladi. Jadvallar navigatsiya yoki sahifa maketini yaratish uchun emas — faqat jadval ma'lumotlari uchun!</p>

<h2 id="jadval-tuzilish">Jadval tuzilishi</h2>
<ul>
  <li><code>&lt;table&gt;</code> — jadval konteyneri</li>
  <li><code>&lt;thead&gt;</code> — jadval sarlavhasi qismi</li>
  <li><code>&lt;tbody&gt;</code> — jadval asosiy qismi</li>
  <li><code>&lt;tfoot&gt;</code> — jadval pastki qismi</li>
  <li><code>&lt;tr&gt;</code> — jadval qatori (table row)</li>
  <li><code>&lt;th&gt;</code> — sarlavha katagi (table header) — qalin va markazlangan</li>
  <li><code>&lt;td&gt;</code> — ma'lumot katagi (table data)</li>
</ul>

<h2 id="birlashtirish">Katakchalarni birlashtirish</h2>
<ul>
  <li><code>colspan="2"</code> — 2 ta ustunni birlashtirish</li>
  <li><code>rowspan="2"</code> — 2 ta qatorni birlashtirish</li>
</ul>
          `,
          codeExample: {
            title: "HTML jadval",
            language: "html",
            code: `<table border="1">
  <thead>
    <tr>
      <th>Ism</th>
      <th>Yoshi</th>
      <th>Shahri</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Jasur</td>
      <td>22</td>
      <td>Toshkent</td>
    </tr>
    <tr>
      <td>Malika</td>
      <td>25</td>
      <td>Samarqand</td>
    </tr>
    <tr>
      <td colspan="2">Jami: 2 ta</td>
      <td>2 ta shahar</td>
    </tr>
  </tbody>
</table>`,
          },
          liveEditorDefault: `<table border="1">
  <thead>
    <tr>
      <th>Til</th>
      <th>Turi</th>
      <th>Qiyinlik</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>HTML</td>
      <td>Belgilash</td>
      <td>Oson</td>
    </tr>
    <tr>
      <td>JavaScript</td>
      <td>Dasturlash</td>
      <td>O'rta</td>
    </tr>
  </tbody>
</table>`,
          notes: [
            "Jadvallarni sahifa maketini yaratish uchun ishlatmang — CSS Grid va Flexbox ishlatish tavsiya etiladi.",
            "Katta jadvallar uchun <code>&lt;caption&gt;</code> tegi bilan jadval sarlavhasi qo'shing.",
          ],
          commonMistakes: [
            "Jadval ichidagi teglar tartibini buzish (tr ichida to'g'ridan-to'g'ri table qo'yish)",
          ],
          practiceTask:
            "5 ta dasturlash tilini o'z ichiga olgan jadval yarating: Til nomi, Ishlatilishi, Qiyinlik darajasi ustunlari bilan.",
          quiz: [
            {
              question: "Jadval sarlavha katagini ifodalovchi teg qaysi?",
              options: ["<code>&lt;td&gt;</code>", "<code>&lt;tr&gt;</code>", "<code>&lt;th&gt;</code>", "<code>&lt;thead&gt;</code>"],
              correct: 2,
              explanation:
                "<code>&lt;th&gt;</code> — table header, jadval sarlavha katagi uchun ishlatiladi va matn qalin va markazlangan ko'rinadi.",
            },
          ],
        },
      ],
    },
    {
      title: "Formalar",
      lessons: [
        {
          id: "html-forms",
          slug: "formalar",
          title: "Formalar (Forms)",
          description: "form, input, label va forma elementlari",
          sections: [
            { id: "form-tuzilish", title: "Forma tuzilishi" },
            { id: "input-turlari", title: "Input turlari" },
            { id: "label", title: "Label ishlatish" },
          ],
          content: `
<h1>Formalar (Forms)</h1>
<p>HTML formalar foydalanuvchidan ma'lumot olish uchun ishlatiladi: ro'yxatdan o'tish, kirish, izoh qoldirish va boshqalar.</p>

<h2 id="form-tuzilish">Forma tuzilishi</h2>
<p><code>&lt;form&gt;</code> teging asosiy atributlari:</p>
<ul>
  <li><code>action</code> — formadan keyin ma'lumot yuboriladigan URL</li>
  <li><code>method</code> — <code>GET</code> (URL da ko'rinadi) yoki <code>POST</code> (yashirin)</li>
</ul>

<h2 id="input-turlari">Input turlari</h2>
<ul>
  <li><code>type="text"</code> — oddiy matn</li>
  <li><code>type="email"</code> — email manzil (tekshiruv bilan)</li>
  <li><code>type="password"</code> — parol (yashirin)</li>
  <li><code>type="number"</code> — raqam</li>
  <li><code>type="tel"</code> — telefon raqami</li>
  <li><code>type="checkbox"</code> — belgilash (bir nechta tanlov)</li>
  <li><code>type="radio"</code> — bitta tanlov</li>
  <li><code>type="file"</code> — fayl yuklash</li>
  <li><code>type="date"</code> — sana tanlash</li>
  <li><code>type="submit"</code> — yuborish tugmasi</li>
</ul>

<h2 id="label">Label ishlatish</h2>
<p><code>&lt;label&gt;</code> input bilan bog'liq yozuv. <code>for</code> atributi input ning <code>id</code> si bilan mos kelishi kerak. Label ga bosish input ni faollashtiradi.</p>
          `,
          codeExample: {
            title: "Ro'yxatdan o'tish formasi",
            language: "html",
            code: `<form action="/submit" method="POST">
  <div>
    <label for="ism">Ismingiz:</label>
    <input type="text" id="ism" name="ism" placeholder="Jasur" required />
  </div>

  <div>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email"
           placeholder="jasur@example.com" required />
  </div>

  <div>
    <label for="parol">Parol:</label>
    <input type="password" id="parol" name="parol"
           minlength="8" required />
  </div>

  <div>
    <label>
      <input type="checkbox" name="shartlar" required />
      Shartlar bilan roziman
    </label>
  </div>

  <button type="submit">Ro'yxatdan o'tish</button>
</form>`,
          },
          liveEditorDefault: `<form>
  <div>
    <label for="name">Ism:</label><br/>
    <input type="text" id="name" placeholder="Ismingiz" />
  </div>
  <br/>
  <div>
    <label for="email">Email:</label><br/>
    <input type="email" id="email" placeholder="email@example.com" />
  </div>
  <br/>
  <button type="submit">Yuborish</button>
</form>`,
          notes: [
            "<code>required</code> atributi forma yuborilishidan oldin maydonni to'ldirish majburiyligini ta'minlaydi.",
            "<code>placeholder</code> — bu label emas! Har doim label ni alohida qo'shing.",
          ],
          commonMistakes: [
            "label yo'q, faqat placeholder bilan qoldirish — accessibility qoidasini buzadi",
            "Parolni GET method bilan yuborish — URL da ko'rinib qoladi",
          ],
          practiceTask:
            "Kirish (login) formasini yarating: email, parol maydoni va 'Kirish' tugmasi. required atributlarini qo'shing.",
          quiz: [
            {
              question: "Foydalanuvchi parolini yashirin ko'rsatish uchun qaysi type ishlatiladi?",
              options: ["text", "hidden", "password", "secret"],
              correct: 2,
              explanation:
                'type="password" input dagi matnni yashirin (nuqta yoki yulduzcha) ko\'rsatadi.',
            },
          ],
        },
        {
          id: "html-buttons",
          slug: "tugmalar",
          title: "Tugmalar (Buttons)",
          description: "button tegi va uning turlari",
          sections: [{ id: "button-turlari", title: "Tugma turlari" }],
          content: `
<h1>Tugmalar (Buttons)</h1>
<p>HTML da tugmalar yaratishning ikki yo'li bor: <code>&lt;button&gt;</code> tegi va <code>&lt;input type="submit"&gt;</code>. <code>&lt;button&gt;</code> kuchliroq va moslashuvchan.</p>

<h2 id="button-turlari">Tugma turlari</h2>
<ul>
  <li><code>type="submit"</code> — formani yuboradi (standart)</li>
  <li><code>type="reset"</code> — formani tozalaydi</li>
  <li><code>type="button"</code> — JavaScript bilan ishlatish uchun</li>
</ul>
          `,
          codeExample: {
            title: "Tugma turlari",
            language: "html",
            code: `<!-- Forma ichida -->
<form>
  <input type="text" placeholder="Matn kiriting" />
  <button type="submit">Yuborish</button>
  <button type="reset">Tozalash</button>
</form>

<!-- Mustaqil tugma -->
<button type="button" onclick="alert('Bosildi!')">
  Bosing
</button>

<!-- Disabled tugma -->
<button type="button" disabled>
  Bloklangan
</button>`,
          },
          liveEditorDefault: `<button type="button">Oddiy tugma</button>
<button type="submit">Yuborish</button>
<button type="reset">Tozalash</button>
<button type="button" disabled>Bloklangan</button>`,
          notes: [
            "Forma ichidagi <code>&lt;button&gt;</code> ning standart type i <code>submit</code> — bu kutilmagan forma yuborishga sabab bo'lishi mumkin.",
            "Tugmalar uchun har doim <code>type</code> atributini yozing.",
          ],
          commonMistakes: [
            "Forma ichida type ko'rsatmasdan button ishlatish",
          ],
          practiceTask:
            "3 xil style dagi tugmalar yarating: to'liq to'ldirilgan, chegara bilan va icon bilan.",
          quiz: [
            {
              question: "Forma maydonlarini tozalovchi tugma type qaysi?",
              options: ["clear", "delete", "reset", "cancel"],
              correct: 2,
              explanation:
                'type="reset" tugma bosilganda formasidagi barcha maydonlar boshlang\'ich holatga qaytadi.',
            },
          ],
        },
      ],
    },
    {
      title: "Semantik HTML",
      lessons: [
        {
          id: "html-semantic",
          slug: "semantik",
          title: "Semantik HTML",
          description: "header, nav, main, article, section, footer va boshqalar",
          sections: [
            { id: "nima-uchun", title: "Nima uchun semantik?" },
            { id: "teglar", title: "Asosiy semantik teglar" },
          ],
          content: `
<h1>Semantik HTML</h1>
<p>Semantik HTML — bu teglarning ma'nosini aniq belgilovchi HTML yozish uslubi. <code>&lt;div&gt;</code> o'rniga ma'noli teglar ishlatiladi.</p>

<h2 id="nima-uchun">Nima uchun semantik HTML?</h2>
<ul>
  <li><strong>Accessibility:</strong> Screen-readerlar sahifani to'g'ri o'qiydi</li>
  <li><strong>SEO:</strong> Qidiruv tizimlari sahifani yaxshiroq tushunadi</li>
  <li><strong>Maintainability:</strong> Kodni o'qish va tushunish osonroq</li>
</ul>

<h2 id="teglar">Asosiy semantik teglar</h2>
<ul>
  <li><code>&lt;header&gt;</code> — sahifa yoki bo'lim boshi</li>
  <li><code>&lt;nav&gt;</code> — navigatsiya linklari</li>
  <li><code>&lt;main&gt;</code> — asosiy kontent (sahifada bitta bo'ladi)</li>
  <li><code>&lt;article&gt;</code> — mustaqil kontent (maqola, post)</li>
  <li><code>&lt;section&gt;</code> — tematik bo'lim</li>
  <li><code>&lt;aside&gt;</code> — qo'shimcha kontent (sidebar)</li>
  <li><code>&lt;footer&gt;</code> — sahifa yoki bo'lim pastki qismi</li>
  <li><code>&lt;figure&gt;</code> — rasm yoki media konteyner</li>
  <li><code>&lt;figcaption&gt;</code> — rasmga izoh</li>
  <li><code>&lt;time&gt;</code> — vaqt yoki sana</li>
  <li><code>&lt;address&gt;</code> — aloqa ma'lumotlari</li>
</ul>
          `,
          codeExample: {
            title: "Semantik sahifa tuzilishi",
            language: "html",
            code: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8" />
  <title>Blog</title>
</head>
<body>
  <header>
    <h1>Mening Blogim</h1>
    <nav>
      <ul>
        <li><a href="/">Bosh sahifa</a></li>
        <li><a href="/maqolalar">Maqolalar</a></li>
        <li><a href="/haqimda">Haqimda</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <article>
      <header>
        <h2>HTML o'rganish</h2>
        <time datetime="2024-01-15">15 yanvar, 2024</time>
      </header>
      <p>Bu maqolada HTML asoslarini o'rganamiz...</p>
    </article>

    <aside>
      <h3>Tegishli maqolalar</h3>
      <ul>
        <li><a href="#">CSS asoslari</a></li>
      </ul>
    </aside>
  </main>

  <footer>
    <p>&copy; 2024 Mening Blogim</p>
    <address>
      <a href="mailto:info@blog.uz">info@blog.uz</a>
    </address>
  </footer>
</body>
</html>`,
          },
          liveEditorDefault: `<header>
  <h1>Mening Saytim</h1>
  <nav>
    <a href="#">Bosh sahifa</a>
    <a href="#">Haqimda</a>
    <a href="#">Aloqa</a>
  </nav>
</header>

<main>
  <article>
    <h2>Birinchi maqola</h2>
    <p>Bu semantik HTML bilan yozilgan maqola.</p>
    <time datetime="2024-01-15">15 yanvar, 2024</time>
  </article>

  <aside>
    <h3>Tegishli</h3>
    <ul>
      <li><a href="#">CSS asoslari</a></li>
    </ul>
  </aside>
</main>

<footer>
  <p>&copy; 2024 Mening Saytim</p>
</footer>`,
          notes: [
            "Sahifada faqat <strong>bitta</strong> <code>&lt;main&gt;</code> bo'lishi kerak.",
            "<code>&lt;div&gt;</code> va <code>&lt;span&gt;</code> ni semantik ma'no yo'q joyda ishlating.",
          ],
          commonMistakes: [
            "Hamma narsani div bilan o'rash (div-itis)",
            "nav ichiga ul/li o'rniga to'g'ridan-to'g'ri a teglarini qo'yish",
          ],
          practiceTask:
            "Blog bosh sahifasini to'liq semantik teglar bilan yarating: header, nav, main (3 ta article), aside, footer.",
          quiz: [
            {
              question: "Sahifaning asosiy kontenti qaysi teg ichida bo'lishi kerak?",
              options: ["<code>&lt;div&gt;</code>", "<code>&lt;content&gt;</code>", "<code>&lt;main&gt;</code>", "<code>&lt;body&gt;</code>"],
              correct: 2,
              explanation:
                "<code>&lt;main&gt;</code> tegi sahifaning asosiy, noyob kontentini ifodalaydi va sahifada faqat bitta bo'ladi.",
            },
          ],
        },
      ],
    },
    {
      title: "Media va ilovalar",
      lessons: [
        {
          id: "html-media",
          slug: "media",
          title: "Audio va Video",
          description: "audio, video teglari va media atributlari",
          sections: [
            { id: "video", title: "Video element" },
            { id: "audio", title: "Audio element" },
          ],
          content: `
<h1>Audio va Video</h1>
<p>HTML5 dan boshlab, brauzerlar to'g'ridan-to'g'ri audio va video fayllarni plugin (Flash) siz qo'llab-quvvatlaydi.</p>

<h2 id="video">Video element</h2>
<p>Asosiy atributlar:</p>
<ul>
  <li><code>src</code> — video fayl manzili</li>
  <li><code>controls</code> — boshqaruv tugmalarini ko'rsatadi</li>
  <li><code>autoplay</code> — avtomatik boshlanadi</li>
  <li><code>muted</code> — ovozni o'chiradi</li>
  <li><code>loop</code> — takrorlanadi</li>
  <li><code>poster</code> — yuklangunga qadar ko'rinadigan rasm</li>
  <li><code>width</code>, <code>height</code> — o'lchami</li>
</ul>

<h2 id="audio">Audio element</h2>
<p>Video ga o'xshash atributlar, lekin ko'rinish yo'q. <code>&lt;source&gt;</code> tegi orqali bir nechta format ko'rsatish mumkin — brauzer qo'llay oladiganini tanlaydi.</p>
          `,
          codeExample: {
            title: "Video va Audio",
            language: "html",
            code: `<!-- Video -->
<video
  src="video.mp4"
  controls
  width="640"
  height="360"
  poster="preview.jpg"
>
  Brauzeringiz video ni qo'llamaydiydi.
</video>

<!-- Ko'p formatli video -->
<video controls width="640">
  <source src="video.webm" type="video/webm" />
  <source src="video.mp4" type="video/mp4" />
  Brauzeringiz video ni qo'llamaydiydi.
</video>

<!-- Audio -->
<audio controls>
  <source src="musiqa.mp3" type="audio/mpeg" />
  <source src="musiqa.ogg" type="audio/ogg" />
  Brauzeringiz audio ni qo'llamaydiydi.
</audio>`,
          },
          liveEditorDefault: `<h2>YouTube videosi</h2>
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  title="YouTube video"
  frameborder="0"
  allowfullscreen
></iframe>`,
          notes: [
            "<code>autoplay</code> ni <code>muted</code> bilan birga ishlating — aks holda ko'p brauzer bloklaydiy.",
            "Har doim fallback matn qo'shing — eski brauzerlar uchun.",
          ],
          commonMistakes: [
            "autoplay bilan ovozli video — foydalanuvchini bezovta qiladi va brauzerlar bloklaydi",
          ],
          practiceTask:
            "YouTube dan biror video embed qiling (iframe orqali) va audio element qo'shing.",
          quiz: [
            {
              question: "Video boshqaruv panelini ko'rsatish uchun qaysi atribut kerak?",
              options: ["panel", "toolbar", "controls", "player"],
              correct: 2,
              explanation:
                "controls atributi video/audio elementida boshqaruv panelini (play, pause, volume) ko'rsatadi.",
            },
          ],
        },
        {
          id: "html-iframe",
          slug: "iframe",
          title: "iFrame",
          description: "Tashqi kontentni embed qilish",
          sections: [{ id: "iframe-ishlatish", title: "iFrame ishlatish" }],
          content: `
<h1>iFrame</h1>
<p><code>&lt;iframe&gt;</code> (inline frame) boshqa veb-sahifalarni yoki tashqi kontentni joriy sahifaga embed qilish uchun ishlatiladi.</p>

<h2 id="iframe-ishlatish">iFrame ishlatish</h2>
<p>Eng ko'p ishlatiladigan holatlar:</p>
<ul>
  <li>YouTube/Vimeo videolari</li>
  <li>Google Maps xaritasi</li>
  <li>Tashqi veb-sahifa</li>
  <li>CodePen/JSFiddle misollari</li>
</ul>
<p>Muhim atributlar:</p>
<ul>
  <li><code>src</code> — embed qilinadigan URL</li>
  <li><code>width</code>, <code>height</code> — o'lcham</li>
  <li><code>title</code> — accessibility uchun majburiy</li>
  <li><code>frameborder</code> — chegara (0 — yo'q)</li>
  <li><code>allowfullscreen</code> — to'liq ekran ruxsati</li>
  <li><code>loading="lazy"</code> — sahifa yuklanganda emas, ko'ringanda yuklaydi</li>
</ul>
          `,
          codeExample: {
            title: "iFrame misollari",
            language: "html",
            code: `<!-- YouTube videosi -->
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="YouTube video"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media"
  allowfullscreen
  loading="lazy"
></iframe>

<!-- Google Maps -->
<iframe
  src="https://maps.google.com/maps?q=Toshkent&output=embed"
  width="600"
  height="450"
  title="Toshkent xaritasi"
  loading="lazy"
></iframe>`,
          },
          liveEditorDefault: `<h2>Google Maps</h2>
<iframe
  src="https://maps.google.com/maps?q=Tashkent+Uzbekistan&output=embed"
  width="100%"
  height="300"
  title="Toshkent shahri xaritasi"
  loading="lazy"
></iframe>`,
          notes: [
            "Barcha iframelarga <code>title</code> atributini qo'shing — screen-readerlar uchun muhim.",
            "<code>loading='lazy'</code> sahifa yuklash tezligini oshiradi.",
          ],
          commonMistakes: [
            "title atributisiz iframe — accessibility qoidasini buzadi",
          ],
          practiceTask:
            "O'z shahringizni Google Maps da toping va iframe orqali sahifaga embed qiling.",
          quiz: [
            {
              question: "iFrame da to'liq ekranga ruxsat beruvchi atribut qaysi?",
              options: ["fullscreen", "allowfullscreen", "expand", "maximize"],
              correct: 1,
              explanation:
                "allowfullscreen atributi iframe ichidagi kontentga to'liq ekranga o'tish imkonini beradi.",
            },
          ],
        },
      ],
    },
    {
      title: "Ilg'or mavzular",
      lessons: [
        {
          id: "html-entities",
          slug: "entitylar",
          title: "HTML Entitylar",
          description: "Maxsus belgilar va HTML entitylar",
          sections: [{ id: "entity-turlari", title: "Entity turlari" }],
          content: `
<h1>HTML Entitylar</h1>
<p>Ba'zi belgilar HTML kodida maxsus ma'noga ega (masalan, <code>&lt;</code> va <code>&gt;</code> teglar uchun). Ularni matn sifatida ko'rsatish uchun HTML entitylar ishlatiladi.</p>

<h2 id="entity-turlari">Muhim entitylar</h2>
<ul>
  <li><code>&amp;lt;</code> → &lt; (kichik belgisi)</li>
  <li><code>&amp;gt;</code> → &gt; (katta belgisi)</li>
  <li><code>&amp;amp;</code> → &amp; (ampersand)</li>
  <li><code>&amp;quot;</code> → " (qo'shtirnoq)</li>
  <li><code>&amp;apos;</code> → ' (apostrof)</li>
  <li><code>&amp;nbsp;</code> → bo'sh joy (qatorni ajratmaydi)</li>
  <li><code>&amp;copy;</code> → © (mualliflik huquqi)</li>
  <li><code>&amp;reg;</code> → ® (ro'yxatdan o'tgan tovar belgisi)</li>
  <li><code>&amp;trade;</code> → ™ (tovar belgisi)</li>
  <li><code>&amp;euro;</code> → € (evro)</li>
  <li><code>&amp;pound;</code> → £ (funt)</li>
  <li><code>&amp;hearts;</code> → ♥ (yurak)</li>
</ul>
          `,
          codeExample: {
            title: "Entity ishlatish",
            language: "html",
            code: `<p>HTML da &lt;div&gt; tegi ishlatiladi.</p>
<p>Narx: 50&nbsp;000 so'm &amp; QQS 12%</p>
<p>&copy; 2024 Mening Kompaniyam&trade;</p>
<p>Men HTML &hearts; ni yaxshi ko'raman</p>
<p>Matematik: 2 &lt; 5 &gt; 1</p>`,
          },
          liveEditorDefault: `<p>HTML &lt;teglar&gt; shunday yoziladi.</p>
<p>&copy; 2024 Barcha huquqlar himoyalangan&reg;</p>
<p>Narx: 100&nbsp;000&nbsp;so'm</p>
<p>Men &hearts; o'rganishni yaxshi ko'raman</p>`,
          notes: [
            "Entitylar <code>&amp;</code> bilan boshlanib <code>;</code> bilan tugaydi.",
            "<code>&amp;nbsp;</code> — bo'sh joy, lekin so'zlarni ajratmaydi (non-breaking space).",
          ],
          commonMistakes: [
            "HTML kod ichida < va > belgilarini entity bilan yozmaslik — sahifa xato ko'rinishi mumkin",
          ],
          practiceTask:
            "HTML kodini matn sifatida ko'rsating: <p> tegi bilan yozilgan namuna. © va ™ belgilarini qo'shing.",
          quiz: [
            {
              question: "© belgisini HTML da ifodalovchi entity qaysi?",
              options: ["<code>&amp;copyright;</code>", "<code>&amp;copy;</code>", "<code>&amp;cr;</code>", "<code>&amp;c;</code>"],
              correct: 1,
              explanation:
                "<code>&amp;copy;</code> entity © (copyright) belgisini ko'rsatadi.",
            },
          ],
        },
        {
          id: "html-accessibility",
          slug: "accessibility",
          title: "Accessibility asoslari",
          description: "Veb-sahifalarni hamma uchun qulay qilish",
          sections: [
            { id: "nima", title: "Accessibility nima?" },
            { id: "aria", title: "ARIA atributlari" },
          ],
          content: `
<h1>Accessibility (A11y) asoslari</h1>
<p>Accessibility — veb-saytni ko'zi ojiz, eshitishi zaif yoki harakatlari cheklangan foydalanuvchilar uchun ham qulay qilish. Bu nafaqat etika, balki ko'pgina mamlakatlarda qonuniy talab.</p>

<h2 id="nima">Asosiy qoidalar</h2>
<ul>
  <li><strong>Alt matn:</strong> Barcha rasmlarda <code>alt</code> atribut bo'lsin</li>
  <li><strong>Sarlavhalar ierarxiyasi:</strong> h1 → h2 → h3 tartibda ishlating</li>
  <li><strong>Label:</strong> Har bir forma maydoniga <code>&lt;label&gt;</code> qo'shing</li>
  <li><strong>Rang zichligi:</strong> Matn va fon orasida yetarli kontrast bo'lsin</li>
  <li><strong>Klaviatura navigatsiyasi:</strong> Tabindex bilan navigatsiyani ta'minlang</li>
  <li><strong>Semantik HTML:</strong> div o'rniga ma'noli teglar ishlating</li>
</ul>

<h2 id="aria">ARIA atributlari</h2>
<p>ARIA (Accessible Rich Internet Applications) — HTML elementi rolini aniqlash uchun qo'shimcha atributlar:</p>
<ul>
  <li><code>role</code> — element rolini aniqlaydi</li>
  <li><code>aria-label</code> — element uchun ko'rinmas nom</li>
  <li><code>aria-hidden="true"</code> — screen-readerdan yashiradi</li>
  <li><code>aria-expanded</code> — accordion/dropdown holati</li>
</ul>
          `,
          codeExample: {
            title: "Accessible forma",
            language: "html",
            code: `<!-- Yaxshi accessibility -->
<form>
  <!-- Label to'g'ri bog'langan -->
  <div>
    <label for="email">Email manzil:</label>
    <input
      type="email"
      id="email"
      name="email"
      aria-required="true"
      aria-describedby="email-hint"
    />
    <small id="email-hint">Misol: jasur@example.com</small>
  </div>

  <!-- Icon tugma uchun aria-label -->
  <button type="button" aria-label="Qidirish">
    🔍
  </button>
</form>

<!-- Skip navigation -->
<a href="#main-content" class="skip-link">
  Asosiy kontentga o'tish
</a>`,
          },
          liveEditorDefault: `<form>
  <div>
    <label for="ism">Ismingiz: *</label><br/>
    <input
      type="text"
      id="ism"
      name="ism"
      required
      aria-required="true"
      placeholder="Jasur Toshmatov"
    />
  </div>
  <br/>
  <button type="submit">Yuborish</button>
</form>`,
          notes: [
            "Accessibility nafaqat ko'zi ojizlar uchun — chaqaloq bilan qo'li band bo'lgan ota-ona ham bir qo'l bilan foydalanadi.",
            "WCAG 2.1 standartlariga amal qiling.",
          ],
          commonMistakes: [
            "Faqat rang bilan ma'lumot berish (daltonizm bilan ogohlantirishlar ko'rinmaydi)",
            "Focus stilini o'chirish — outline: none qo'shish",
          ],
          practiceTask:
            "Oldingi darsda yaratgan loginni to'liq accessible qiling: labellar, aria atributlari, keyboard navigatsiyasi.",
          quiz: [
            {
              question: "Screen-readerdan elementni yashirish uchun qaysi atribut ishlatiladi?",
              options: ["hidden", "aria-hidden='true'", "display:none", "visibility:hidden"],
              correct: 1,
              explanation:
                "aria-hidden='true' elementni screen-readerdan yashiradi, lekin vizual ko'rinishiga ta'sir qilmaydi.",
            },
          ],
        },
        {
          id: "html-seo",
          slug: "seo",
          title: "SEO asoslari",
          description: "Qidiruv tizimi optimallashtirish uchun HTML",
          sections: [
            { id: "meta-teglar", title: "Meta teglar" },
            { id: "og-tags", title: "Open Graph teglar" },
          ],
          content: `
<h1>SEO asoslari</h1>
<p>SEO (Search Engine Optimization) — saytni Google va boshqa qidiruv tizimlarida yuqoriroq o'rinlarda ko'rsatish uchun optimallashtirish. HTML to'g'ri yozilishi SEO ga katta ta'sir qiladi.</p>

<h2 id="meta-teglar">Muhim meta teglar</h2>
<ul>
  <li><code>&lt;title&gt;</code> — brauzer tabi va qidiruv natijasida ko'rinadigan sarlavha (60 belgigacha)</li>
  <li><code>meta description</code> — qidiruv natijasida tavsif (160 belgigacha)</li>
  <li><code>meta robots</code> — qidiruv botiga ko'rsatma</li>
  <li><code>canonical</code> — asosiy URL (nusxa sahifalar uchun)</li>
  <li><code>lang</code> atributi — sahifa tili</li>
</ul>

<h2 id="og-tags">Open Graph teglar</h2>
<p>Ijtimoiy tarmoqlarda (Telegram, Facebook) sahifa ulashilganda ko'rinadigan ma'lumotlar:</p>
<ul>
  <li><code>og:title</code> — sarlavha</li>
  <li><code>og:description</code> — tavsif</li>
  <li><code>og:image</code> — rasm</li>
  <li><code>og:url</code> — URL</li>
</ul>
          `,
          codeExample: {
            title: "SEO uchun head bo'limi",
            language: "html",
            code: `<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- Asosiy SEO -->
  <title>HTML Kursi - Learner.uz | Bepul Online Ta'lim</title>
  <meta name="description"
    content="Learner.uz da HTML ni o'zbek tilida bepul o'rganing.
    Interaktiv darslar, amaliy mashqlar va real loyihalar." />
  <meta name="keywords" content="HTML, web dasturlash, o'zbek, kurs" />
  <link rel="canonical" href="https://learner.uz/html" />

  <!-- Open Graph -->
  <meta property="og:title" content="HTML Kursi - Learner.uz" />
  <meta property="og:description"
    content="HTML ni o'zbek tilida bepul o'rganing" />
  <meta property="og:image" content="https://learner.uz/og-image.png" />
  <meta property="og:url" content="https://learner.uz/html" />
  <meta property="og:type" content="website" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
</head>`,
          },
          liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>HTML Kursi | Learner.uz</title>
  <meta name="description" content="O'zbekistondagi eng yaxshi HTML kursi." />
</head>
<body>
  <h1>HTML Kursi</h1>
  <p>Ushbu kursda HTML ni boshlang'ichdan o'rganasiz.</p>
</body>
</html>`,
          notes: [
            "Title 50-60 belgi, description 120-160 belgi bo'lishi optimal.",
            "Har bir sahifada noyob title va description bo'lishi kerak.",
          ],
          commonMistakes: [
            "Barcha sahifada bir xil title va description ishlatish",
            "meta keywords ga haddan tashqari ko'p kalit so'z qo'shish (spam hisoblangan)",
          ],
          practiceTask:
            "Xayoliy veb-sayt uchun to'liq head bo'limini yozing: title, description, og teglar, canonical.",
          quiz: [
            {
              question: "SEO title nechi belgigacha bo'lishi optimal?",
              options: ["30-40", "50-60", "100-150", "200+"],
              correct: 1,
              explanation:
                "Google qidiruv natijalarida title 50-60 belgigacha to'liq ko'rsatiladi.",
            },
          ],
        },
        {
          id: "html-best-practices",
          slug: "yaxshi-amaliyotlar",
          title: "Yaxshi amaliyotlar",
          description: "HTML yozishda eng yaxshi usullar",
          sections: [
            { id: "kod-sifati", title: "Kod sifati" },
            { id: "validatsiya", title: "HTML validatsiyasi" },
          ],
          content: `
<h1>HTML Yaxshi Amaliyotlar</h1>
<p>Professional darajadagi HTML kodi yozish uchun quyidagi qoidalarga amal qiling.</p>

<h2 id="kod-sifati">Kod sifati</h2>
<ul>
  <li><strong>Indentation:</strong> 2 yoki 4 bo'sh joy bilan tekislang</li>
  <li><strong>Kichik harflar:</strong> Teglar va atributlarni kichik harfda yozing</li>
  <li><strong>Qo'shtirnoq:</strong> Atribut qiymatlarini doim qo'shtirnoqda bering</li>
  <li><strong>Semantika:</strong> Vazifaga mos teglarni tanlang</li>
  <li><strong>Komentarlar:</strong> Murakkab bo'limlarga izoh qo'shing</li>
  <li><strong>Fayl nomlash:</strong> kichik harf, tire bilan (masalan: about-us.html)</li>
</ul>

<h2 id="validatsiya">HTML Validatsiyasi</h2>
<p><strong>validator.w3.org</strong> — W3C ning rasmiy HTML validator sayti. Kodingizni tekshirib, xatolarni topishga yordam beradi.</p>
<p>Keng tarqalgan xatolar:</p>
<ul>
  <li>Yopilmagan teglar</li>
  <li>Noto'g'ri joylashtirilgan teglar</li>
  <li>Noyob bo'lishi kerak bo'lgan id larning takrorlanishi</li>
  <li>Required atributlarning yo'qligi (img da alt, input da type)</li>
</ul>
          `,
          codeExample: {
            title: "Yaxshi va yomon HTML",
            language: "html",
            code: `<!-- ❌ Yomon HTML -->
<DIV CLASS=header>
<H1>Sarlavha
<p>Matn</DIV>
<IMG SRC=rasm.jpg>

<!-- ✅ Yaxshi HTML -->
<!DOCTYPE html>
<html lang="uz">
  <head>
    <meta charset="UTF-8" />
    <title>Sahifa sarlavhasi</title>
  </head>
  <body>
    <!-- Navigatsiya -->
    <header>
      <h1>Sarlavha</h1>
    </header>

    <main>
      <p>Matn to'g'ri joylashtirilgan.</p>
      <img src="rasm.jpg" alt="Rasm tavsifi" />
    </main>
  </body>
</html>`,
          },
          liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Professional HTML</title>
</head>
<body>
  <!-- Bosh qism -->
  <header>
    <h1>Professional HTML Yozish</h1>
  </header>

  <!-- Asosiy kontent -->
  <main>
    <section>
      <h2>Qoidalar</h2>
      <ul>
        <li>Semantik teglar ishlating</li>
        <li>Kichik harfda yozing</li>
        <li>Alt atributini unutmang</li>
      </ul>
    </section>
  </main>

  <!-- Alt qism -->
  <footer>
    <p>&copy; 2024</p>
  </footer>
</body>
</html>`,
          notes: [
            "HTML Validator (validator.w3.org) ni muntazam ishlating.",
            "Kod formatteri (Prettier) ni tavsiya etamiz — avtomatik formatlaydi.",
          ],
          commonMistakes: [
            "id atributini bir sahifada bir nechta elementda ishlatish",
            "Inline style ni ko'p ishlatish — CSS faylini afzal ko'ring",
          ],
          practiceTask:
            "Oldingi darslarda yozgan kodlaringizni qayta ko'rib chiqing va professional standartlarga moslashtiring.",
          quiz: [
            {
              question:
                "HTML kodini validatsiya qilish uchun qaysi sayt ishlatiladi?",
              options: [
                "google.com/validate",
                "validator.w3.org",
                "htmlchecker.com",
                "w3schools.com/validate",
              ],
              correct: 1,
              explanation:
                "validator.w3.org — W3C ning rasmiy HTML validatsiya xizmati.",
            },
          ],
        },
        {
          id: "html-mini-project",
          slug: "mini-loyiha",
          title: "Mini Loyiha: Shaxsiy sahifa",
          description: "O'rganganlarni amalda qo'llash",
          sections: [
            { id: "loyiha-talablari", title: "Loyiha talablari" },
            { id: "bosqichlar", title: "Bosqichlar" },
          ],
          content: `
<h1>Mini Loyiha: Shaxsiy Portfolio Sahifasi</h1>
<p>Ushbu mini loyihada siz HTML da o'rganganlarningizni amalda qo'llaysiz va to'liq shaxsiy portfolio sahifasi yaratasiz.</p>

<h2 id="loyiha-talablari">Loyiha talablari</h2>
<p>Sahifangiz quyidagi bo'limlarni o'z ichiga olishi kerak:</p>
<ul>
  <li><strong>Header:</strong> Nav menyu (bosh sahifa, ko'nikmalar, loyihalar, aloqa) va ism</li>
  <li><strong>Hero bo'lim:</strong> Rasmingiz, qisqacha tavsifingiz</li>
  <li><strong>Ko'nikmalar:</strong> HTML, CSS, JS va boshqa ko'nikmalar ro'yxati</li>
  <li><strong>Loyihalar:</strong> 2-3 ta loyiha kartochkasi (rasm, tavsif, havola)</li>
  <li><strong>Bog'lanish formasi:</strong> Ism, email, xabar va yuborish tugmasi</li>
  <li><strong>Footer:</strong> Copyright va ijtimoiy tarmoqlar</li>
</ul>

<h2 id="bosqichlar">Yaratish bosqichlari</h2>
<ol>
  <li>HTML tuzilishini yarating (DOCTYPE, html, head, body)</li>
  <li>Meta teglar va title ni to'ldiring</li>
  <li>Header va nav menyuni yarating</li>
  <li>Hero bo'limni qo'shing</li>
  <li>Ko'nikmalar ro'yxatini yozing</li>
  <li>Loyihalar bo'limini yarating</li>
  <li>Bog'lanish formasini qo'shing</li>
  <li>Footer ni to'ldiring</li>
</ol>
          `,
          codeExample: {
            title: "Portfolio sahifa template",
            language: "html",
            code: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Jasur Toshmatov | Frontend Dasturchi</title>
  <meta name="description"
    content="Jasur Toshmatov - O'zbekiston frontend dasturchisi" />
</head>
<body>
  <!-- Navigatsiya -->
  <header>
    <nav>
      <a href="#home">Bosh sahifa</a>
      <a href="#skills">Ko'nikmalar</a>
      <a href="#projects">Loyihalar</a>
      <a href="#contact">Aloqa</a>
    </nav>
  </header>

  <!-- Asosiy bo'lim -->
  <main>
    <!-- Hero -->
    <section id="home">
      <img src="https://picsum.photos/150/150" alt="Jasur Toshmatov" />
      <h1>Jasur Toshmatov</h1>
      <p>Frontend Dasturchi | HTML &amp; CSS &amp; JavaScript</p>
    </section>

    <!-- Ko'nikmalar -->
    <section id="skills">
      <h2>Ko'nikmalarim</h2>
      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    </section>

    <!-- Loyihalar -->
    <section id="projects">
      <h2>Loyihalarim</h2>
      <article>
        <h3>Portfolio Sayt</h3>
        <p>Shaxsiy portfolio HTML va CSS bilan yaratilgan.</p>
        <a href="#">Ko'rish</a>
      </article>
    </section>

    <!-- Aloqa -->
    <section id="contact">
      <h2>Bog'lanish</h2>
      <form action="#" method="POST">
        <label for="name">Ism:</label>
        <input type="text" id="name" name="name" required />

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label for="message">Xabar:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Yuborish</button>
      </form>
    </section>
  </main>

  <!-- Alt qism -->
  <footer>
    <p>&copy; 2024 Jasur Toshmatov. Barcha huquqlar himoyalangan.</p>
    <address>
      <a href="mailto:jasur@example.com">jasur@example.com</a>
    </address>
  </footer>
</body>
</html>`,
          },
          liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8" />
  <title>Mening Portfoliom</title>
</head>
<body>

  <header>
    <img src="https://picsum.photos/100/100" alt="Profil rasmi" />
    <h1>Ismingiz</h1>
    <p>Frontend Dasturchi</p>
    <nav>
      <a href="#skills">Ko'nikmalar</a>
      <a href="#contact">Aloqa</a>
    </nav>
  </header>

  <main>
    <section id="skills">
      <h2>Ko'nikmalarim</h2>
      <ul>
        <li>HTML5 — <strong>Yaxshi</strong></li>
        <li>CSS3 — <strong>O'rta</strong></li>
        <li>JavaScript — <strong>Boshlang'ich</strong></li>
      </ul>
    </section>

    <section id="contact">
      <h2>Bog'lanish</h2>
      <form>
        <label for="n">Ism:</label><br/>
        <input type="text" id="n" /><br/><br/>
        <label for="e">Email:</label><br/>
        <input type="email" id="e" /><br/><br/>
        <button type="submit">Yuborish</button>
      </form>
    </section>
  </main>

  <footer>
    <p>&copy; 2024 Ismingiz</p>
  </footer>

</body>
</html>`,
          notes: [
            "Hozircha sahifa brauzer standart stillari bilan ko'rinadi — CSS kursida uni chiroyli qilishni o'rganasiz.",
            "Haqiqiy portfolio uchun rasm va ma'lumotlarni o'z bilgilaringiz bilan to'ldiring.",
          ],
          commonMistakes: [
            "Loyihani boshlashdan oldin tuzilishni rejalashtirmaslik",
          ],
          practiceTask:
            "Ushbu templateni o'z ma'lumotlaringiz bilan to'ldiring va haqiqiy portfolio sahifa yarating.",
          quiz: [
            {
              question: "Portfolio sahifada bog'lanish formasi uchun qaysi method tavsiya etiladi?",
              options: ["GET", "POST", "PUT", "DELETE"],
              correct: 1,
              explanation:
                "Shaxsiy ma'lumotlarni (email, xabar) yuborish uchun POST method xavfsizroq.",
            },
          ],
        },
      ],
    },
  ],
};
