import type { LessonGroup } from "@/lib/types";

export const htmlTagsGroup: LessonGroup = {
  title: "HTML Teglari",
  lessons: [
    // ─── DOCUMENT STRUCTURE ─────────────────────────────────────────────────
    {
      id: "tag-doctype",
      slug: "tag-doctype",
      title: "<!DOCTYPE>",
      description: "HTML hujjat turini e'lon qilish",
      sections: [
        { id: "overview", title: "Tavsif" },
        { id: "syntax", title: "Sintaksis" },
        { id: "example", title: "Misol" },
      ],
      content: `<h2 id="overview">Tavsif</h2>
<p><code>&lt;!DOCTYPE html&gt;</code> — bu HTML hujjatining birinchi qatori bo'lib, brauzerga hujjat HTML5 standartida yozilganligini bildiradi. Bu aslida teg emas, balki deklaratsiyadir.</p>
<p>DOCTYPE bo'lmasa, brauzer "quirks mode" ga o'tib, sahifani noto'g'ri ko'rsatishi mumkin.</p>

<h2 id="syntax">Sintaksis</h2>
<p>DOCTYPE har doim faylning birinchi qatorida, boshqa hech narsadan oldin yoziladi:</p>
<ul>
  <li>Katta-kichik harfga sezgir emas: <code>&lt;!DOCTYPE html&gt;</code>, <code>&lt;!doctype html&gt;</code> — ikkalasi ham to'g'ri</li>
  <li>HTML5 da faqat <code>html</code> so'zi yoziladi (HTML 4 da uzunroq edi)</li>
  <li>Yopuvchi teg yo'q</li>
</ul>

<h2 id="example">Misol</h2>
<p>Har qanday HTML faylning boshi shunday ko'rinadi:</p>`,
      codeExample: {
        title: "DOCTYPE ishlatish",
        language: "html",
        code: `<!DOCTYPE html>
<html lang="uz">
  <head>
    <meta charset="UTF-8">
    <title>Sahifa nomi</title>
  </head>
  <body>
    <p>Salom, dunyo!</p>
  </body>
</html>`,
      },
      liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>DOCTYPE misol</title>
</head>
<body>
  <h1>DOCTYPE bilan to'g'ri HTML</h1>
  <p>Brauzer bu sahifani HTML5 standartida ko'rsatadi.</p>
</body>
</html>`,
      notes: [
        "DOCTYPE har doim faylning birinchi qatorida bo'lishi shart",
        "HTML5 da eng qisqa va oson: <!DOCTYPE html>",
        "DOCTYPE brauzer rendering rejimini belgilaydi",
      ],
      commonMistakes: [
        "DOCTYPE ni <html> dan keyin yozish",
        "DOCTYPE ni umuman yozmaslik",
      ],
      practiceTask: "Yangi HTML fayl yarating va to'g'ri DOCTYPE bilan boshlang.",
      quiz: [
        {
          question: "HTML5 da to'g'ri DOCTYPE qaysi?",
          options: ["<!DOCTYPE HTML5>", "<!DOCTYPE html>", "<doctype html>", "<!doc html>"],
          correct: 1,
          explanation: "HTML5 da to'g'ri DOCTYPE: <!DOCTYPE html> — kichik va oddiy.",
        },
      ],
    },

    {
      id: "tag-html",
      slug: "tag-html",
      title: "<html>",
      description: "HTML hujjatining ildiz (root) elementi",
      sections: [
        { id: "overview", title: "Tavsif" },
        { id: "atributlar", title: "Atributlar" },
        { id: "example", title: "Misol" },
      ],
      content: `<h2 id="overview">Tavsif</h2>
<p><code>&lt;html&gt;</code> — barcha HTML hujjatining asosiy ildiz elementi. DOCTYPE dan keyin keladi va barcha boshqa elementlarni o'z ichiga oladi.</p>

<h2 id="atributlar">Atributlar</h2>
<ul>
  <li><code>lang</code> — sahifa tilini belgilaydi (masalan, <code>lang="uz"</code>, <code>lang="en"</code>). SEO va screenreader uchun muhim.</li>
  <li><code>dir</code> — matn yo'nalishi: <code>ltr</code> (chapdan o'nga) yoki <code>rtl</code> (o'ngdan chapga, arab/ibriy tillar uchun).</li>
</ul>

<h2 id="example">Misol</h2>`,
      codeExample: {
        title: "<html> tegi",
        language: "html",
        code: `<!DOCTYPE html>
<html lang="uz" dir="ltr">
  <head>
    <meta charset="UTF-8">
    <title>Sahifa</title>
  </head>
  <body>
    <p>Kontent shu yerda</p>
  </body>
</html>`,
      },
      liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>html tegi</title>
</head>
<body>
  <p>lang="uz" — sahifa o'zbek tilida ekanligi belgilangan.</p>
</body>
</html>`,
      notes: [
        "lang atributi har doim qo'yilishi kerak — SEO va accessibility uchun muhim",
        "Barcha HTML kontent <html> ichida bo'ladi",
      ],
      commonMistakes: [
        "lang atributini yozmaslik",
        "<html> ni ikki marta yozish",
      ],
      practiceTask: "<html lang=\"uz\"> bilan sahifa yarating va brauzerda tekshiring.",
      quiz: [
        {
          question: "<html> tegining lang atributi nima uchun kerak?",
          options: ["Rang berish uchun", "Brauzer va SEO uchun til belgilash", "Shrift o'zgartirish", "Tarjima qilish"],
          correct: 1,
          explanation: "lang atributi brauzer, qidiruv tizimlari va screenreader lar uchun sahifa tilini belgilaydi.",
        },
      ],
    },

    {
      id: "tag-head",
      slug: "tag-head",
      title: "<head>",
      description: "Sahifa metama'lumotlari bo'limi",
      sections: [
        { id: "overview", title: "Tavsif" },
        { id: "ichida", title: "Nima bo'ladi" },
        { id: "example", title: "Misol" },
      ],
      content: `<h2 id="overview">Tavsif</h2>
<p><code>&lt;head&gt;</code> — sahifaning ko'rinmas qismi. Brauzer tabida va qidiruv natijalarida ishlatiladigan metama'lumotlarni, CSS va JavaScript ulanishlarini o'z ichiga oladi.</p>

<h2 id="ichida">Nima bo'ladi</h2>
<ul>
  <li><code>&lt;title&gt;</code> — brauzer tab sarlavhasi (majburiy)</li>
  <li><code>&lt;meta&gt;</code> — charset, viewport, description va boshqalar</li>
  <li><code>&lt;link&gt;</code> — CSS fayllar, favicon</li>
  <li><code>&lt;script&gt;</code> — JavaScript (defer/async bilan)</li>
  <li><code>&lt;style&gt;</code> — ichki CSS</li>
</ul>

<h2 id="example">Misol</h2>`,
      codeExample: {
        title: "To'liq <head> bo'limi",
        language: "html",
        code: `<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Sahifa tavsifi">
  <title>Sahifa nomi — Sayt</title>
  <link rel="stylesheet" href="style.css">
  <link rel="icon" href="favicon.ico">
  <script src="app.js" defer></script>
</head>`,
      },
      liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>head bo'limi misoli</title>
</head>
<body>
  <p>head bo'limi ko'rinmaydi, lekin sahifa uchun juda muhim!</p>
</body>
</html>`,
      notes: [
        "<head> ichidagi kontent brauzerda ko'rinmaydi",
        "<title> tegi SEO uchun eng muhim elementlardan biri",
        "charset va viewport meta teglari har doim bo'lishi kerak",
      ],
      commonMistakes: [
        "<head> ichiga ko'rinadigan kontent qo'yish",
        "charset meta tegini qo'ymaslik (o'zbek harflari buziladi)",
      ],
      practiceTask: "To'liq <head> bo'limi yarating: charset, viewport, title, description va favicon.",
      quiz: [
        {
          question: "<head> bo'limidagi kontent qachon ko'rinadi?",
          options: ["Sahifa yuklanganda", "Hover qilganda", "Ko'rinmaydi", "Print qilganda"],
          correct: 2,
          explanation: "<head> bo'limi foydalanuvchiga ko'rinmaydi — faqat brauzer va qidiruv tizimlari uchun.",
        },
      ],
    },

    {
      id: "tag-body",
      slug: "tag-body",
      title: "<body>",
      description: "Sahifaning ko'rinadigan asosiy qismi",
      sections: [
        { id: "overview", title: "Tavsif" },
        { id: "example", title: "Misol" },
      ],
      content: `<h2 id="overview">Tavsif</h2>
<p><code>&lt;body&gt;</code> — foydalanuvchi brauzerda ko'radigan barcha kontent shu yerda joylashadi: matn, rasmlar, havolalar, formalar va boshqa elementlar.</p>
<p>Har bir HTML hujjatida faqat bitta <code>&lt;body&gt;</code> bo'ladi va u <code>&lt;head&gt;</code> dan keyin keladi.</p>

<h2 id="example">Misol</h2>`,
      codeExample: {
        title: "<body> tegi",
        language: "html",
        code: `<!DOCTYPE html>
<html lang="uz">
<head>
  <title>Sahifa</title>
</head>
<body>
  <h1>Sahifa sarlavhasi</h1>
  <p>Bu matn foydalanuvchiga ko'rinadi.</p>
  <img src="rasm.jpg" alt="Rasm tavsifi">
  <a href="/sahifa">Havola</a>
</body>
</html>`,
      },
      liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>body tegi</title>
</head>
<body>
  <h1>Salom!</h1>
  <p>Bu kontent foydalanuvchiga ko'rinadi.</p>
</body>
</html>`,
      notes: [
        "Faqat bitta <body> bo'ladi",
        "Ko'rinadigan barcha kontent <body> ichida",
        "<body> <head> dan keyin, </html> dan oldin yoziladi",
      ],
      commonMistakes: [
        "<body> ni ikki marta ochish",
        "Kontentni <head> ichiga yozish",
      ],
      practiceTask: "<body> ichiga sarlavha, paragraf va rasm qo'shing.",
      quiz: [
        {
          question: "Foydalanuvchi brauzerda ko'radigan kontent qayerda bo'ladi?",
          options: ["<head>", "<html>", "<body>", "<title>"],
          correct: 2,
          explanation: "<body> — foydalanuvchiga ko'rinadigan barcha kontent joyi.",
        },
      ],
    },

    {
      id: "tag-title",
      slug: "tag-title",
      title: "<title>",
      description: "Brauzer tab va SEO sarlavhasi",
      sections: [
        { id: "overview", title: "Tavsif" },
        { id: "seo", title: "SEO ahamiyati" },
      ],
      content: `<h2 id="overview">Tavsif</h2>
<p><code>&lt;title&gt;</code> — sahifaning nomi. Brauzer tabida, qidiruv natijalarida va ilovalar almashishida ko'rinadi. Faqat <code>&lt;head&gt;</code> ichida bo'ladi.</p>

<h2 id="seo">SEO ahamiyati</h2>
<ul>
  <li>Google title ni qidiruv natijasining asosiy sarlavhasi sifatida ko'rsatadi</li>
  <li>Uzunligi 50–60 belgi bo'lishi tavsiya etiladi</li>
  <li>Har bir sahifada noyob title bo'lishi kerak</li>
  <li>Eng muhim kalit so'z boshida bo'lgani yaxshi</li>
</ul>`,
      codeExample: {
        title: "<title> tegi",
        language: "html",
        code: `<head>
  <title>HTML o'rganish — Learner.uz</title>
</head>

<!-- Yaxshi title namunalari: -->
<!-- "Mahsulot nomi — Do'kon nomi" -->
<!-- "Maqola sarlavhasi | Blog nomi" -->`,
      },
      liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>Mening sahifam — Learner.uz</title>
</head>
<body>
  <p>Brauzer tabida "Mening sahifam — Learner.uz" ko'rinadi.</p>
</body>
</html>`,
      notes: [
        "Title faqat oddiy matn bo'ladi, HTML teglari ishlamaydi",
        "Har bir sahifada noyob title bo'lishi shart",
        "60 belgidan uzun title Google da qisqartiradi",
      ],
      commonMistakes: [
        "Barcha sahifalarga bir xil title qo'yish",
        "Title ni juda uzun yozish",
        "<title> ni <body> ichiga yozish",
      ],
      practiceTask: "Sahifangiz uchun 50-60 belgidan iborat yaxshi title yozing.",
      quiz: [
        {
          question: "<title> tegi qayerda ko'rinadi?",
          options: ["Sahifa o'rtasida", "Brauzer tabida va Google natijalarida", "Footer da", "Header da"],
          correct: 1,
          explanation: "<title> brauzer tabida va Google qidiruv natijalarida ko'rinadi.",
        },
      ],
    },

    {
      id: "tag-meta",
      slug: "tag-meta",
      title: "<meta>",
      description: "Sahifa metama'lumotlari",
      sections: [
        { id: "overview", title: "Tavsif" },
        { id: "turlari", title: "Asosiy meta teglari" },
      ],
      content: `<h2 id="overview">Tavsif</h2>
<p><code>&lt;meta&gt;</code> — sahifa haqida ma'lumot beruvchi, foydalanuvchiga ko'rinmaydigan teg. O'z-o'zini yopadi (yopuvchi teg yo'q). Faqat <code>&lt;head&gt;</code> ichida bo'ladi.</p>

<h2 id="turlari">Asosiy meta teglari</h2>
<ul>
  <li><code>charset="UTF-8"</code> — belgilar kodlashini belgilaydi (o'zbek harflari uchun zarur)</li>
  <li><code>name="viewport"</code> — mobil qurilmalar uchun kenglik sozlamasi</li>
  <li><code>name="description"</code> — Google da ko'rinadigan sahifa tavsifi (150-160 belgi)</li>
  <li><code>name="robots"</code> — qidiruv tizimlari indeksatsiyasini boshqarish</li>
  <li><code>http-equiv="refresh"</code> — sahifani avtomatik yangilash yoki yo'naltirish</li>
</ul>`,
      codeExample: {
        title: "Asosiy meta teglari",
        language: "html",
        code: `<head>
  <!-- Belgilar kodlashi — MAJBURIY -->
  <meta charset="UTF-8">

  <!-- Mobil qurilmalar uchun — MAJBURIY -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- SEO tavsifi -->
  <meta name="description" content="HTML va CSS ni o'zbek tilida o'rganing.">

  <!-- Qidiruv tizimlariga ko'rsatma -->
  <meta name="robots" content="index, follow">

  <!-- Sahifani 5 sekundda yangilash -->
  <meta http-equiv="refresh" content="5">
</head>`,
      },
      liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Bu sahifa meta teglar haqida.">
  <title>Meta teglari misoli</title>
</head>
<body>
  <p>Meta teglar ko'rinmaydi, lekin muhim!</p>
</body>
</html>`,
      notes: [
        "charset meta tegi har doim birinchi bo'lishi kerak",
        "viewport meta tegi responsiv dizayn uchun majburiy",
        "description 150-160 belgidan oshmasligi kerak",
      ],
      commonMistakes: [
        "charset meta tegini qo'ymaslik",
        "viewport ni unutish — mobil ko'rinish buziladi",
      ],
      practiceTask: "charset, viewport va description meta teglarini qo'shgan holda to'liq <head> yarating.",
      quiz: [
        {
          question: "Qaysi meta teg o'zbek harflarini to'g'ri ko'rsatish uchun zarur?",
          options: ["viewport", "description", "charset=\"UTF-8\"", "robots"],
          correct: 2,
          explanation: "charset=\"UTF-8\" — barcha milliy harflarni to'g'ri ko'rsatish uchun zarur.",
        },
      ],
    },

    {
      id: "tag-link",
      slug: "tag-link",
      title: "<link>",
      description: "Tashqi resurslarni ulash (CSS, favicon)",
      sections: [
        { id: "overview", title: "Tavsif" },
        { id: "ishlatish", title: "Ishlatish" },
      ],
      content: `<h2 id="overview">Tavsif</h2>
<p><code>&lt;link&gt;</code> — tashqi resurslarni (CSS fayllar, favicon, shriftlar) HTML ga ulash uchun. O'z-o'zini yopadi. Faqat <code>&lt;head&gt;</code> ichida bo'ladi.</p>

<h2 id="ishlatish">Ishlatish</h2>
<ul>
  <li><code>rel</code> — resurs turi (stylesheet, icon, preconnect va b.)</li>
  <li><code>href</code> — resurs manzili</li>
  <li><code>type</code> — MIME tur (ko'pincha yozilmaydi)</li>
  <li><code>media</code> — qaysi media uchun (print, screen)</li>
</ul>`,
      codeExample: {
        title: "<link> tegi misollari",
        language: "html",
        code: `<head>
  <!-- CSS fayl ulash -->
  <link rel="stylesheet" href="style.css">

  <!-- Favicon -->
  <link rel="icon" href="favicon.ico">
  <link rel="icon" type="image/png" href="favicon.png">

  <!-- Apple qurilmalar uchun icon -->
  <link rel="apple-touch-icon" href="apple-icon.png">

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto&display=swap">

  <!-- Faqat chop etish uchun CSS -->
  <link rel="stylesheet" href="print.css" media="print">
</head>`,
      },
      liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>link tegi</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    p { color: #333; }
  </style>
</head>
<body>
  <p>link tegi CSS fayllarni, favicon va shriftlarni ulaydi.</p>
</body>
</html>`,
      notes: [
        "rel atributi majburiy",
        "CSS fayllar <head> da link bilan ulanadi",
        "preconnect — tashqi server bilan oldindan aloqa o'rnatadi (tezlik uchun)",
      ],
      commonMistakes: [
        "rel atributini yozmaslik",
        "<link> ni <body> ichiga yozish",
      ],
      practiceTask: "<link> orqali tashqi CSS fayl va favicon ulang.",
      quiz: [
        {
          question: "CSS faylni HTML ga ulash uchun qaysi teg ishlatiladi?",
          options: ["<style>", "<css>", "<link>", "<script>"],
          correct: 2,
          explanation: "<link rel=\"stylesheet\" href=\"style.css\"> — CSS faylni ulashning to'g'ri usuli.",
        },
      ],
    },

    {
      id: "tag-script",
      slug: "tag-script",
      title: "<script>",
      description: "JavaScript kodi yoki fayl ulash",
      sections: [
        { id: "overview", title: "Tavsif" },
        { id: "defer-async", title: "defer va async" },
      ],
      content: `<h2 id="overview">Tavsif</h2>
<p><code>&lt;script&gt;</code> — JavaScript kodi yoki tashqi JS faylini ulash uchun. <code>&lt;head&gt;</code> yoki <code>&lt;body&gt;</code> oxirida ishlatiladi.</p>

<h2 id="defer-async">defer va async</h2>
<ul>
  <li><strong>defer</strong> — JS fayl HTML yuklanib bo'lgandan keyin bajariladi. DOM bilan ishlaydigan skriptlar uchun.</li>
  <li><strong>async</strong> — JS fayl yuklanishi bilan darhol bajariladi. Mustaqil skriptlar uchun (analytics va h.k.).</li>
  <li>Ikkalasisiz — HTML yuklanishi to'xtatib bajariladi (bloklovchi).</li>
</ul>`,
      codeExample: {
        title: "<script> tegi misollari",
        language: "html",
        code: `<!-- Tashqi JS fayl — defer bilan (tavsiya) -->
<script src="app.js" defer></script>

<!-- Tashqi JS fayl — async bilan -->
<script src="analytics.js" async></script>

<!-- Inline JavaScript -->
<script>
  console.log('Salom, dunyo!');
  document.querySelector('h1').textContent = 'Yangi sarlavha';
</script>

<!-- Type module — ES modules -->
<script type="module" src="main.js"></script>`,
      },
      liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>script tegi</title>
</head>
<body>
  <h1 id="sarlavha">Eski sarlavha</h1>
  <script>
    document.getElementById('sarlavha').textContent = 'JavaScript o\'zgartirdi!';
  </script>
</body>
</html>`,
      notes: [
        "defer — DOM tayyor bo'lganda ishga tushadi, tartib saqlanadi",
        "async — yuklanishi bilan ishga tushadi, tartib kafolatlanmaydi",
        "Ko'pincha <body> oxirida yoki <head> da defer bilan ishlatiladi",
      ],
      commonMistakes: [
        "defer/async ishlatmaslik — sahifa yuklanishi sekinlashadi",
        "<script> ichida HTML yozish",
      ],
      practiceTask: "<script defer> bilan tashqi JS fayl ulang va inline script bilan console.log yozing.",
      quiz: [
        {
          question: "defer va async qanday farqlanadi?",
          options: [
            "Hech qanday farqi yo'q",
            "defer — HTML tugagach, tartibda; async — yuklanishi bilan darhol",
            "async — HTML tugagach, defer — darhol",
            "defer faqat <body> da ishlaydi",
          ],
          correct: 1,
          explanation: "defer — HTML to'liq yuklangach tartibda bajariladi. async — yuklanganda darhol, tartibsiz.",
        },
      ],
    },

    {
      id: "tag-style",
      slug: "tag-style",
      title: "<style>",
      description: "Sahifa ichida CSS yozish",
      sections: [
        { id: "overview", title: "Tavsif" },
      ],
      content: `<h2 id="overview">Tavsif</h2>
<p><code>&lt;style&gt;</code> — HTML hujjat ichida to'g'ridan-to'g'ri CSS yozish uchun. Odatda <code>&lt;head&gt;</code> ichida ishlatiladi.</p>
<p>Tashqi CSS fayliga nisbatan kamroq afzal, lekin prototiplash yoki kichik loyihalar uchun qulay.</p>`,
      codeExample: {
        title: "<style> tegi",
        language: "html",
        code: `<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f0f0f0;
    }

    h1 {
      color: #e34c26;
      font-size: 2rem;
    }

    .card {
      background: white;
      padding: 20px;
      border-radius: 8px;
    }
  </style>
</head>`,
      },
      liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>style tegi</title>
  <style>
    body { font-family: Arial; padding: 20px; background: #f5f5f5; }
    h1   { color: #e34c26; }
    p    { color: #555; }
  </style>
</head>
<body>
  <h1>Style tegi ishlaydi!</h1>
  <p>Bu matn CSS bilan bezatilgan.</p>
</body>
</html>`,
      notes: [
        "Tashqi CSS fayl keshlanadi — katta loyihalarda afzal",
        "<style> bir nechta marta ishlatilishi mumkin",
        "media atributi bilan: <style media=\"print\">",
      ],
      commonMistakes: [
        "<style> ni <body> ichiga yozish (ishlaydi, lekin noto'g'ri amaliyot)",
        "Inline style bilan aralashtirib yuborish",
      ],
      practiceTask: "<style> ichida h1, p va div ga stil bering.",
      quiz: [
        {
          question: "<style> tegi odatda qayerda yoziladi?",
          options: ["<body> oxirida", "<head> ichida", "<html> dan oldin", "<footer> ichida"],
          correct: 1,
          explanation: "<style> odatda <head> ichida yoziladi.",
        },
      ],
    },

    // ─── HEADINGS & TEXT ────────────────────────────────────────────────────
    {
      id: "tag-h1-h6",
      slug: "tag-h1-h6",
      title: "<h1> — <h6>",
      description: "Sarlavha darajalari",
      sections: [
        { id: "overview", title: "Tavsif" },
        { id: "seo", title: "SEO va tartib" },
      ],
      content: `<h2 id="overview">Tavsif</h2>
<p>HTML da 6 darajali sarlavha mavjud: <code>&lt;h1&gt;</code> dan <code>&lt;h6&gt;</code> gacha. <code>&lt;h1&gt;</code> — eng muhim va eng katta, <code>&lt;h6&gt;</code> — eng kichik.</p>

<h2 id="seo">SEO va tartib</h2>
<ul>
  <li>Sahifada faqat bitta <code>&lt;h1&gt;</code> bo'lishi tavsiya etiladi</li>
  <li>Sarlavhalar tartibli ishlatilsin: h1 → h2 → h3 (h1 dan h3 ga sakrash noto'g'ri)</li>
  <li>Google sarlavhalarni kontent strukturasini tushunish uchun ishlatadi</li>
  <li>Screenreader foydalanuvchilari sarlavhalar orqali sahifani navigate qiladi</li>
</ul>`,
      codeExample: {
        title: "Sarlavha darajalari",
        language: "html",
        code: `<h1>Asosiy sarlavha (bitta sahifada)</h1>

<h2>Bo'lim sarlavhasi</h2>
<p>Bo'lim matni...</p>

  <h3>Kichik bo'lim</h3>
  <p>Kichik bo'lim matni...</p>

    <h4>Kichikroq bo'lim</h4>

<h2>Ikkinchi bo'lim</h2>
<p>Ikkinchi bo'lim matni...</p>`,
      },
      liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>Sarlavhalar</title>
</head>
<body>
  <h1>h1 — Eng katta sarlavha</h1>
  <h2>h2 — Bo'lim sarlavhasi</h2>
  <h3>h3 — Kichik bo'lim</h3>
  <h4>h4 — Kichikroq bo'lim</h4>
  <h5>h5 — Juda kichik</h5>
  <h6>h6 — Eng kichik sarlavha</h6>
</body>
</html>`,
      notes: [
        "Sahifada bitta h1 bo'lishi kerak",
        "Sarlavhalarni vizual ko'rinish uchun emas, ma'no uchun ishlatish kerak",
        "CSS bilan istalgan sarlavhani istalgan o'lchamga keltirish mumkin",
      ],
      commonMistakes: [
        "Bir sahifada bir nechta h1 ishlatish",
        "Sarlavha darajasini o'tkazib yuborish (h1 dan h3 ga sakrash)",
        "Matnni katta qilish uchun h teg ishlatish (buning uchun CSS)",
      ],
      practiceTask: "Maqola strukturasi yarating: h1 maqola nomi, h2 lar bo'limlar, h3 lar kichik bo'limlar.",
      quiz: [
        {
          question: "Sahifada nechta h1 tegi bo'lishi tavsiya etiladi?",
          options: ["Cheklov yo'q", "Maksimum ikkita", "Faqat bitta", "Kamida ikkita"],
          correct: 2,
          explanation: "SEO va accessibility uchun har bir sahifada faqat bitta h1 bo'lishi tavsiya etiladi.",
        },
      ],
    },

    {
      id: "tag-p",
      slug: "tag-p",
      title: "<p>",
      description: "Paragraf elementi",
      sections: [
        { id: "overview", title: "Tavsif" },
      ],
      content: `<h2 id="overview">Tavsif</h2>
<p><code>&lt;p&gt;</code> — paragraf (matn bloki). Brauzer har bir paragrafdan oldin va keyin bo'sh joy qo'shadi.</p>
<p>Block-level element — har bir paragraf yangi qatordan boshlanadi.</p>
<ul>
  <li>Matn, inline elementlar (<code>&lt;a&gt;</code>, <code>&lt;strong&gt;</code>, <code>&lt;em&gt;</code>) ni o'z ichiga oladi</li>
  <li>Boshqa block elementlarni (<code>&lt;div&gt;</code>, <code>&lt;h1&gt;</code>) o'z ichiga ololmaydi</li>
</ul>`,
      codeExample: {
        title: "<p> tegi",
        language: "html",
        code: `<p>Bu birinchi paragraf. Matn shu yerda yoziladi.</p>

<p>Bu ikkinchi paragraf. Brauzer ular orasiga
avtomatik bo'sh joy qo'shadi.</p>

<p>
  Paragraf ichida <strong>qalin</strong>,
  <em>kursiv</em> va <a href="#">havola</a>
  ishlatish mumkin.
</p>`,
      },
      liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>Paragraf</title>
</head>
<body>
  <h1>Paragraf misoli</h1>
  <p>Bu birinchi paragraf. Brauzer har bir paragraf orasiga bo'sh joy qo'shadi.</p>
  <p>Bu ikkinchi paragraf. Paragraf ichida <strong>qalin</strong> va <em>kursiv</em> matn yozish mumkin.</p>
</body>
</html>`,
      notes: [
        "Paragraf ichida Enter bosish vizual ko'rinishga ta'sir qilmaydi — CSS ishlatish kerak",
        "<p> yopilmasa ham brauzer tushunadi, lekin har doim yopish kerak",
      ],
      commonMistakes: [
        "<p> ichiga <div> yoki <h1> qo'yish",
        "Bo'sh joy uchun bir nechta bo'sh <p> yoki <br> ishlatish",
      ],
      practiceTask: "3 ta paragraf yozing: birinchisida qalin, ikkinchisida kursiv, uchinchisida havola bo'lsin.",
      quiz: [
        {
          question: "<p> tegi qanday element?",
          options: ["Inline", "Block", "Inline-block", "Flex"],
          correct: 1,
          explanation: "<p> — block-level element. Yangi qatordan boshlanib, to'liq kenglikni egallaydi.",
        },
      ],
    },

    {
      id: "tag-br-hr",
      slug: "tag-br-hr",
      title: "<br> va <hr>",
      description: "Satr uzish va gorizontal chiziq",
      sections: [
        { id: "overview", title: "Tavsif" },
      ],
      content: `<h2 id="overview">Tavsif</h2>
<p><code>&lt;br&gt;</code> — satrni uzadi (yangi qatorga o'tadi). O'z-o'zini yopadi. Matn ichida qo'llanadi (manzillar, she'r va h.k.).</p>
<p><code>&lt;hr&gt;</code> — gorizontal ajratuvchi chiziq. Ikki bo'limni vizual ajratish uchun ishlatiladi. O'z-o'zini yopadi.</p>
<p><strong>Muhim:</strong> Paragraflar orasiga bo'sh joy qo'shish uchun <code>&lt;br&gt;</code> ishlatmang — buning uchun CSS margin ishlatiladi.</p>`,
      codeExample: {
        title: "<br> va <hr> teglari",
        language: "html",
        code: `<!-- br — satr uzish -->
<p>
  Toshkent shahri,<br>
  Chilonzor tumani,<br>
  5-mavze, 12-uy
</p>

<!-- hr — ajratuvchi chiziq -->
<h2>Birinchi bo'lim</h2>
<p>Bu bo'lim matni.</p>

<hr>

<h2>Ikkinchi bo'lim</h2>
<p>Bu bo'lim matni.</p>`,
      },
      liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>br va hr</title>
</head>
<body>
  <p>Birinchi qator<br>Ikkinchi qator<br>Uchinchi qator</p>
  <hr>
  <p>hr chiziq yuqorida ko'rinadi.</p>
</body>
</html>`,
      notes: [
        "<br> — she'r yoki manzil uchun, paragraf uchun emas",
        "<hr> semantic ma'noga ega — tematik ajratish",
        "Ikkalasi ham self-closing (yopuvchi teg yo'q)",
      ],
      commonMistakes: [
        "Vizual bo'sh joy uchun ketma-ket <br><br> ishlatish — CSS margin yaxshiroq",
        "<br/> yoki <hr/> yozish (HTML5 da / kerak emas)",
      ],
      practiceTask: "<br> bilan 4 qatorli manzil va <hr> bilan ikki bo'limni ajrating.",
      quiz: [
        {
          question: "<br> tegi nima qiladi?",
          options: ["Paragraf yaratadi", "Satrni uzib yangi qatorga o'tadi", "Gorizontal chiziq chizadi", "Elementni yashiradi"],
          correct: 1,
          explanation: "<br> — satr uzish (line break). Yangi paragraf emas, faqat yangi qator.",
        },
      ],
    },

    {
      id: "tag-strong-em",
      slug: "tag-strong-em",
      title: "<strong> va <em>",
      description: "Muhim matn va kursiv",
      sections: [
        { id: "overview", title: "Tavsif" },
        { id: "bvsb", title: "b/i teglari bilan farqi" },
      ],
      content: `<h2 id="overview">Tavsif</h2>
<p><code>&lt;strong&gt;</code> — semantik jihatdan muhim matn (vizuali: qalin). Screenreader ko'proq urg'u bilan o'qiydi.</p>
<p><code>&lt;em&gt;</code> — urg'ulanayotgan matn (vizuali: kursiv). Grammatik urg'u yoki ta'kidlash uchun.</p>

<h2 id="bvsb">b/i teglari bilan farqi</h2>
<ul>
  <li><code>&lt;b&gt;</code> — faqat vizual qalinlashtiriladi, ma'no yo'q</li>
  <li><code>&lt;i&gt;</code> — faqat vizual kursiv, ma'no yo'q</li>
  <li><code>&lt;strong&gt;</code> — muhimlik ma'nosi bor (+ qalin ko'rinish)</li>
  <li><code>&lt;em&gt;</code> — ta'kidlash ma'nosi bor (+ kursiv ko'rinish)</li>
</ul>`,
      codeExample: {
        title: "<strong> va <em>",
        language: "html",
        code: `<p>Bu <strong>juda muhim</strong> xabar!</p>

<p>Iltimos, saytdan <em>chiqishni</em> unutmang.</p>

<p>
  <strong>Eslatma:</strong> Parolingizni
  <em>hech kimga</em> bermang.
</p>

<!-- Vizual uchun faqat b va i -->
<p>Bu <b>qalin</b> va <i>kursiv</i> matn.</p>`,
      },
      liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>strong va em</title>
</head>
<body>
  <p>Bu <strong>juda muhim</strong> ma'lumot!</p>
  <p>Iltimos, <em>ehtiyot bo'ling</em>.</p>
  <p><strong>Eslatma:</strong> Faqat <em>to'g'ri</em> ma'lumot kiriting.</p>
</body>
</html>`,
      notes: [
        "strong va em — semantik, b va i — vizual",
        "Screenreader lar strong va em ni boshqacha o'qiydi",
        "CSS orqali ko'rinishini o'zgartirish mumkin",
      ],
      commonMistakes: [
        "Qalinlashtirish uchun strong o'rniga b ishlatish",
        "CSS bilan ham qilinsa strong qo'llash — ikki marta qalinlashtirish",
      ],
      practiceTask: "strong va em bilan muhim xabar yozing.",
      quiz: [
        {
          question: "<strong> va <b> ning asosiy farqi nima?",
          options: [
            "Ko'rinishi farqli",
            "strong semantik muhimlik bildiradi, b faqat vizual qalinlik",
            "b yangi, strong eski",
            "Hech qanday farqi yo'q",
          ],
          correct: 1,
          explanation: "strong — semantik (ma'no bor, screenreader farqlaydi). b — faqat vizual qalinlik.",
        },
      ],
    },

    {
      id: "tag-span-div",
      slug: "tag-span-div",
      title: "<span> va <div>",
      description: "Generic konteyner elementlar",
      sections: [
        { id: "overview", title: "Tavsif" },
        { id: "farqi", title: "Farqi" },
      ],
      content: `<h2 id="overview">Tavsif</h2>
<p><code>&lt;div&gt;</code> — block-level konteyner. Guruplash va layout uchun. O'zi hech qanday vizual ko'rinish bermaydi.</p>
<p><code>&lt;span&gt;</code> — inline konteyner. Matn ichidagi qismni stillashtirish yoki skript bilan ishlash uchun.</p>

<h2 id="farqi">Farqi</h2>
<ul>
  <li><code>&lt;div&gt;</code> — block: yangi qatordan boshlanadi, to'liq kenglik egallaydi</li>
  <li><code>&lt;span&gt;</code> — inline: matn oqimida qoladi, kenglik faqat kontent qadaricha</li>
  <li>Ikkalasi ham semantik ma'nosiz — faqat stillashtirish/skript uchun</li>
  <li>Mumkin bo'lsa semantic teglarga afzallik bering (<code>&lt;section&gt;</code>, <code>&lt;article&gt;</code> va h.k.)</li>
</ul>`,
      codeExample: {
        title: "<div> va <span>",
        language: "html",
        code: `<!-- div — block konteyner -->
<div class="karta">
  <div class="karta-header">
    <h2>Sarlavha</h2>
  </div>
  <div class="karta-body">
    <p>Karta mazmuni</p>
  </div>
</div>

<!-- span — inline konteyner -->
<p>
  Narx: <span class="narx">150,000</span> so'm
</p>
<p>
  Holat: <span style="color: green;">Aktiv</span>
</p>`,
      },
      liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>div va span</title>
  <style>
    .karta { border: 1px solid #ccc; padding: 16px; border-radius: 8px; width: 200px; }
    .narx  { color: #e34c26; font-weight: bold; }
  </style>
</head>
<body>
  <div class="karta">
    <h3>Mahsulot</h3>
    <p>Narx: <span class="narx">99,000</span> so'm</p>
  </div>
</body>
</html>`,
      notes: [
        "div va span — semantik ma'nosiz, faqat konteyner",
        "Mumkin bo'lsa semantic HTML ishlatish yaxshi",
        "Haddan tashqari div ishlatish 'div soup' deyiladi",
      ],
      commonMistakes: [
        "Hamma narsa uchun div ishlatish (semantic HTML o'rniga)",
        "span ichiga block element qo'yish",
      ],
      practiceTask: "div bilan karta va span bilan rangli matn yarating.",
      quiz: [
        {
          question: "<span> qanday element?",
          options: ["Block", "Inline", "Block-inline", "Flex"],
          correct: 1,
          explanation: "<span> — inline element. Matn oqimida qoladi, yangi qatorga o'tmaydi.",
        },
      ],
    },

    // ─── LINKS & MEDIA ───────────────────────────────────────────────────────
    {
      id: "tag-a",
      slug: "tag-a",
      title: "<a>",
      description: "Havola (link) elementi",
      sections: [
        { id: "overview", title: "Tavsif" },
        { id: "atributlar", title: "Atributlar" },
      ],
      content: `<h2 id="overview">Tavsif</h2>
<p><code>&lt;a&gt;</code> (anchor) — havola yaratish uchun. Boshqa sahifaga, faylga, email, telefon raqamiga yoki sahifa ichidagi elementga yo'naltiradi.</p>

<h2 id="atributlar">Atributlar</h2>
<ul>
  <li><code>href</code> — yo'nalish (URL, #id, mailto:, tel:)</li>
  <li><code>target</code> — qayerda ochilsin: <code>_blank</code> (yangi tab), <code>_self</code> (default)</li>
  <li><code>rel</code> — munosabat: <code>noopener noreferrer</code> (xavfsizlik uchun _blank bilan)</li>
  <li><code>download</code> — fayl yuklab olish</li>
  <li><code>title</code> — hover tooltip</li>
</ul>`,
      codeExample: {
        title: "<a> tegi misollari",
        language: "html",
        code: `<!-- Oddiy havola -->
<a href="https://google.com">Google</a>

<!-- Yangi tabda ochish -->
<a href="https://google.com" target="_blank"
   rel="noopener noreferrer">Google (yangi tab)</a>

<!-- Sahifa ichidagi element -->
<a href="#bo'lim-2">Bo'lim 2 ga o'tish</a>

<!-- Email -->
<a href="mailto:info@example.com">Email yuboring</a>

<!-- Telefon -->
<a href="tel:+998901234567">+998 90 123 45 67</a>

<!-- Fayl yuklab olish -->
<a href="hujjat.pdf" download>PDF yuklab olish</a>`,
      },
      liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>Havola</title>
</head>
<body>
  <h1>Havolalar</h1>
  <p><a href="https://learner.uz">Learner.uz ga o'ting</a></p>
  <p><a href="#pastga">Pastga o'ting</a></p>
  <p><a href="mailto:test@test.com">Email yuboring</a></p>
  <br><br><br><br><br><br><br><br>
  <h2 id="pastga">Shu yerga o'tildi!</h2>
</body>
</html>`,
      notes: [
        "target=\"_blank\" bilan rel=\"noopener noreferrer\" majburiy — xavfsizlik",
        "Havola matni tushunarli bo'lsin: 'bu yerga bosing' emas, 'Hujjatni yuklab olish'",
        "href=\"#\" — hech qaerga yo'naltirmaydi, JavaScript uchun",
      ],
      commonMistakes: [
        "_blank bilan rel=\"noopener\" qo'ymaslik",
        "Havola ichiga havola qo'yish",
        "Mazmunsiz havola matni: 'click here', 'bu yerga'",
      ],
      practiceTask: "Tashqi sayt (yangi tab), email va #id havola yarating.",
      quiz: [
        {
          question: "target=\"_blank\" bilan qaysi rel qiymati qo'shilishi shart?",
          options: ["rel=\"external\"", "rel=\"noopener noreferrer\"", "rel=\"blank\"", "rel=\"new\""],
          correct: 1,
          explanation: "rel=\"noopener noreferrer\" — yangi tabda ochiladigan sahifa asosiy sahifaga xavfsizlik tahdid qilmasligi uchun.",
        },
      ],
    },

    {
      id: "tag-img",
      slug: "tag-img",
      title: "<img>",
      description: "Rasm ko'rsatish elementi",
      sections: [
        { id: "overview", title: "Tavsif" },
        { id: "atributlar", title: "Atributlar" },
      ],
      content: `<h2 id="overview">Tavsif</h2>
<p><code>&lt;img&gt;</code> — rasmlarni sahifaga joylashtirish uchun. O'z-o'zini yopadi (yopuvchi teg yo'q). Inline element.</p>

<h2 id="atributlar">Atributlar</h2>
<ul>
  <li><code>src</code> — rasm manzili (URL yoki fayl yo'li) — <strong>majburiy</strong></li>
  <li><code>alt</code> — muqobil matn — <strong>majburiy</strong> (accessibility, SEO)</li>
  <li><code>width</code> / <code>height</code> — o'lchamlar (layout shift oldini oladi)</li>
  <li><code>loading="lazy"</code> — viewport ga yaqinlashganda yuklanadi</li>
  <li><code>decoding="async"</code> — asenkron dekodlash</li>
</ul>`,
      codeExample: {
        title: "<img> tegi",
        language: "html",
        code: `<!-- Asosiy rasm -->
<img src="rasm.jpg" alt="Ko'k osmondagi bulutlar">

<!-- O'lcham va lazy loading -->
<img
  src="foto.jpg"
  alt="Tog' manzarasi"
  width="800"
  height="600"
  loading="lazy"
>

<!-- Dekorativ rasm (alt bo'sh) -->
<img src="bezak.svg" alt="" aria-hidden="true">

<!-- Responsive rasm -->
<img
  src="kichik.jpg"
  srcset="kichik.jpg 480w, katta.jpg 1200w"
  sizes="(max-width: 600px) 480px, 1200px"
  alt="Responsive rasm"
>`,
      },
      liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>Rasm</title>
  <style>
    img { max-width: 100%; border-radius: 8px; }
  </style>
</head>
<body>
  <h1>Rasm misoli</h1>
  <img
    src="https://picsum.photos/400/250"
    alt="Tasodifiy manzara rasmi"
    width="400"
    height="250"
    loading="lazy"
  >
  <p>Rasm ostidagi tavsif matni</p>
</body>
</html>`,
      notes: [
        "alt atributi har doim bo'lishi shart (bo'sh qoldirish mumkin agar dekorativ bo'lsa)",
        "width va height qo'yish layout shift (CLS) ni kamaytiradi",
        "loading=\"lazy\" — sahifa tezligini oshiradi",
      ],
      commonMistakes: [
        "alt atributini yozmaslik",
        "Rasm o'lchamini CSS bilan cheklamas, HTML atributsiz qoldirish",
        "Matnli rasm uchun alt yozmaslik (screenreader o'qiy olmaydi)",
      ],
      practiceTask: "src, alt, width, height va loading=\"lazy\" bilan rasm joylashtiring.",
      quiz: [
        {
          question: "<img> tegida qaysi atribut majburiy?",
          options: ["width va height", "loading", "src va alt", "title"],
          correct: 2,
          explanation: "src (rasm manzili) va alt (muqobil matn) — majburiy atributlar.",
        },
      ],
    },

    {
      id: "tag-video-audio",
      slug: "tag-video-audio",
      title: "<video> va <audio>",
      description: "Video va audio media elementlari",
      sections: [
        { id: "overview", title: "Tavsif" },
        { id: "atributlar", title: "Atributlar" },
      ],
      content: `<h2 id="overview">Tavsif</h2>
<p><code>&lt;video&gt;</code> va <code>&lt;audio&gt;</code> — HTML5 da kiritilgan media elementlari. Plugin (Flash) siz video va audio ijro etish imkonini beradi.</p>

<h2 id="atributlar">Umumiy atributlar</h2>
<ul>
  <li><code>controls</code> — o'ynash, to'xtatish, ovoz boshqaruvi</li>
  <li><code>autoplay</code> — avtomatik ijro (mute bilan birga tavsiya)</li>
  <li><code>loop</code> — takroriy ijro</li>
  <li><code>muted</code> — ovozsiz</li>
  <li><code>preload</code> — oldindan yuklash: none/metadata/auto</li>
  <li><code>poster</code> — (faqat video) preview rasm</li>
</ul>`,
      codeExample: {
        title: "Video va Audio",
        language: "html",
        code: `<!-- Video -->
<video
  controls
  width="640"
  height="360"
  poster="preview.jpg"
  preload="metadata"
>
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  <p>Brauzeringiz video ni qo'llab-quvvatlamaydi.</p>
</video>

<!-- Audio -->
<audio controls preload="metadata">
  <source src="musiqa.mp3" type="audio/mpeg">
  <source src="musiqa.ogg" type="audio/ogg">
  <p>Brauzeringiz audio ni qo'llab-quvvatlamaydi.</p>
</audio>

<!-- Autoplay (muted bilan) -->
<video autoplay muted loop>
  <source src="background.mp4" type="video/mp4">
</video>`,
      },
      liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>Media</title>
</head>
<body>
  <h1>Video misoli</h1>
  <video controls width="400" style="border-radius:8px">
    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
    Video qo'llab-quvvatlanmaydi.
  </video>
</body>
</html>`,
      notes: [
        "Bir nechta source — turli format uchun fallback",
        "autoplay ko'p brauzerlarda muted siz ishlamaydi",
        "controls atributi bo'lmasa boshqaruv ko'rinmaydi",
      ],
      commonMistakes: [
        "Faqat bitta format berish — boshqa brauzerda ishlamasligi mumkin",
        "autoplay bilan muted qo'ymaslik",
      ],
      practiceTask: "controls va poster bilan video element yarating.",
      quiz: [
        {
          question: "Brauzer video formatni qo'llab-quvvatlamasa nima bo'ladi?",
          options: ["Xato chiqadi", "Keyingi <source> ga o'tadi", "Sahifa yuklanmaydi", "Video o'chib qoladi"],
          correct: 1,
          explanation: "Brauzer ketma-ket source larni tekshiradi, birinchi qo'llab-quvvatlanadigan formatni ishlatadi.",
        },
      ],
    },

    // ─── LISTS ───────────────────────────────────────────────────────────────
    {
      id: "tag-ul-ol-li",
      slug: "tag-ul-ol-li",
      title: "<ul>, <ol>, <li>",
      description: "Tartibsiz va tartibli ro'yxatlar",
      sections: [
        { id: "overview", title: "Tavsif" },
        { id: "turlari", title: "Ro'yxat turlari" },
      ],
      content: `<h2 id="overview">Tavsif</h2>
<p><code>&lt;ul&gt;</code> — tartibsiz ro'yxat (bullet points). <code>&lt;ol&gt;</code> — tartibli ro'yxat (raqamlangan). <code>&lt;li&gt;</code> — har bir ro'yxat elementi.</p>

<h2 id="turlari">Ro'yxat turlari</h2>
<ul>
  <li>ul — ketma-ketlik muhim bo'lmagan ro'yxatlar (xarid ro'yxati, menyular)</li>
  <li>ol — ketma-ketlik muhim (yo'riqnoma qadamlari, reyting)</li>
  <li>ol type atributlari: 1 (raqam), A (katta harf), a (kichik), I (rim), i</li>
  <li>ol start atributi — boshlang'ich raqam (masalan, start="5")</li>
</ul>`,
      codeExample: {
        title: "Ro'yxatlar",
        language: "html",
        code: `<!-- Tartibsiz ro'yxat -->
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<!-- Tartibli ro'yxat -->
<ol>
  <li>HTML o'rganing</li>
  <li>CSS qo'shing</li>
  <li>JavaScript bilan jonlantiring</li>
</ol>

<!-- Ichma-ich ro'yxat -->
<ul>
  <li>Frontend
    <ul>
      <li>HTML</li>
      <li>CSS</li>
    </ul>
  </li>
  <li>Backend</li>
</ul>

<!-- Harf bilan -->
<ol type="A" start="3">
  <li>C variant</li>
  <li>D variant</li>
</ol>`,
      },
      liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>Ro'yxatlar</title>
</head>
<body>
  <h2>Tartibsiz ro'yxat</h2>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
  </ul>

  <h2>Tartibli ro'yxat</h2>
  <ol>
    <li>Kompyuter yoqing</li>
    <li>Brauzerni oching</li>
    <li>Learner.uz ga kiring</li>
  </ol>
</body>
</html>`,
      notes: [
        "ul/ol ichida faqat li bo'lishi kerak (to'g'ridan-to'g'ri)",
        "li ichiga istalgan element qo'yish mumkin",
        "Navigatsiya menyu uchun ul + li keng ishlatiladi",
      ],
      commonMistakes: [
        "ul ichiga li siz to'g'ridan-to'g'ri matn yozish",
        "Ketma-ketlik muhim bo'lmasa ol ishlatish",
      ],
      practiceTask: "Xarid ro'yxati (ul) va plov retsepti qadamlari (ol) yarating.",
      quiz: [
        {
          question: "Qaysi ro'yxat ketma-ketlik muhim bo'lsa ishlatiladi?",
          options: ["<ul>", "<ol>", "<li>", "<dl>"],
          correct: 1,
          explanation: "<ol> — ordered list (tartibli). Raqamlar avtomatik qo'shiladi, ketma-ketlik muhim.",
        },
      ],
    },

    {
      id: "tag-dl-dt-dd",
      slug: "tag-dl-dt-dd",
      title: "<dl>, <dt>, <dd>",
      description: "Ta'rif ro'yxati",
      sections: [
        { id: "overview", title: "Tavsif" },
      ],
      content: `<h2 id="overview">Tavsif</h2>
<p><code>&lt;dl&gt;</code> (description list) — atamalar va ularning ta'rifi uchun ro'yxat. Lug'at, FAQ, atamalar ro'yxati uchun ideal.</p>
<ul>
  <li><code>&lt;dt&gt;</code> — atama (term)</li>
  <li><code>&lt;dd&gt;</code> — ta'rif (description), dt dan keyin keladi</li>
  <li>Bir dt ga bir nechta dd bo'lishi mumkin</li>
</ul>`,
      codeExample: {
        title: "<dl> misoli",
        language: "html",
        code: `<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language — veb sahifalar tuzilishini belgilash tili.</dd>

  <dt>CSS</dt>
  <dd>Cascading Style Sheets — veb sahifalar ko'rinishini bezash tili.</dd>

  <dt>JavaScript</dt>
  <dd>Veb sahifalarni interaktiv qiladigan dasturlash tili.</dd>
  <dd>Server (Node.js) va mobile (React Native) dasturlash uchun ham ishlatiladi.</dd>
</dl>`,
      },
      liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>Ta'rif ro'yxati</title>
  <style>
    dt { font-weight: bold; margin-top: 12px; }
    dd { margin-left: 20px; color: #555; }
  </style>
</head>
<body>
  <h2>Atamalar lug'ati</h2>
  <dl>
    <dt>HTML</dt>
    <dd>Veb sahifalar tuzilishi uchun belgilash tili.</dd>
    <dt>CSS</dt>
    <dd>Veb sahifalarni bezash tili.</dd>
  </dl>
</body>
</html>`,
      notes: [
        "FAQ, lug'at, metadata juftliklari uchun semantik",
        "dt — term, dd — description tartibini saqlash shart",
        "CSS bilan ko'rinishi o'zgartiriladi",
      ],
      commonMistakes: [
        "dl o'rniga ul + ko'rinish CSS ishlatish (ma'no yo'qoladi)",
        "dd ni dt siz ishlatish",
      ],
      practiceTask: "5 ta atama va ta'rifidan iborat lug'at yarating.",
      quiz: [
        {
          question: "<dl> qaysi turdagi ro'yxat?",
          options: ["Tartibli", "Tartibsiz", "Ta'rif ro'yxati", "Ichma-ich"],
          correct: 2,
          explanation: "<dl> — description list (ta'rif ro'yxati). Atama-ta'rif juftliklari uchun.",
        },
      ],
    },

    // ─── TABLES ──────────────────────────────────────────────────────────────
    {
      id: "tag-table",
      slug: "tag-table",
      title: "<table>",
      description: "Jadval va uning elementlari",
      sections: [
        { id: "overview", title: "Tavsif" },
        { id: "tuzilish", title: "Jadval tuzilishi" },
      ],
      content: `<h2 id="overview">Tavsif</h2>
<p>HTML jadval elementlari jadvalli ma'lumotlarni ko'rsatish uchun. Layout uchun emas — buning uchun CSS Flexbox/Grid.</p>

<h2 id="tuzilish">Jadval tuzilishi</h2>
<ul>
  <li><code>&lt;table&gt;</code> — jadval konteyner</li>
  <li><code>&lt;thead&gt;</code> — jadval boshi (sarlavha qatorlari)</li>
  <li><code>&lt;tbody&gt;</code> — jadval tanasi (asosiy ma'lumotlar)</li>
  <li><code>&lt;tfoot&gt;</code> — jadval oyoq qismi (jami, natija)</li>
  <li><code>&lt;tr&gt;</code> — jadval qatori (table row)</li>
  <li><code>&lt;th&gt;</code> — sarlavha katakchasi (qalin, markazlashgan)</li>
  <li><code>&lt;td&gt;</code> — ma'lumot katakchasi</li>
  <li><code>colspan</code> / <code>rowspan</code> — katakchalarni birlashtirish</li>
</ul>`,
      codeExample: {
        title: "To'liq jadval",
        language: "html",
        code: `<table>
  <thead>
    <tr>
      <th>Ism</th>
      <th>Yosh</th>
      <th>Shahar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ali</td>
      <td>25</td>
      <td>Toshkent</td>
    </tr>
    <tr>
      <td>Vali</td>
      <td>30</td>
      <td>Samarqand</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3">Jami: 2 ta o'quvchi</td>
    </tr>
  </tfoot>
</table>`,
      },
      liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>Jadval</title>
  <style>
    table { border-collapse: collapse; width: 100%; }
    th, td { border: 1px solid #ddd; padding: 8px 12px; text-align: left; }
    th { background: #f0f0f0; }
    tr:nth-child(even) { background: #fafafa; }
  </style>
</head>
<body>
  <table>
    <thead>
      <tr><th>Nom</th><th>Narx</th><th>Miqdor</th></tr>
    </thead>
    <tbody>
      <tr><td>HTML kursi</td><td>Bepul</td><td>1</td></tr>
      <tr><td>CSS kursi</td><td>Bepul</td><td>1</td></tr>
    </tbody>
  </table>
</body>
</html>`,
      notes: [
        "border-collapse: collapse — ikki qirrali chegara birlashadi",
        "Jadval faqat jadvalli ma'lumotlar uchun, layout uchun emas",
        "th semantik — qidiruv tizimi va screenreader sarlavha deb tushunadi",
      ],
      commonMistakes: [
        "Layout uchun jadval ishlatish",
        "thead/tbody/tfoot ni tushirib qoldirish",
        "border-collapse qo'ymaslik (ikki qirrali chegara chiqadi)",
      ],
      practiceTask: "5 ta mahsulot: nom, narx, miqdor ustunlari bilan jadval yarating.",
      quiz: [
        {
          question: "Jadval sarlavha katakchasi uchun qaysi teg ishlatiladi?",
          options: ["<td>", "<th>", "<tr>", "<thead>"],
          correct: 1,
          explanation: "<th> — table header. Qalin va markazlashgan, screenreader sarlavha deb o'qiydi.",
        },
      ],
    },

    // ─── FORMS ───────────────────────────────────────────────────────────────
    {
      id: "tag-form",
      slug: "tag-form",
      title: "<form>",
      description: "Forma elementi va atributlari",
      sections: [
        { id: "overview", title: "Tavsif" },
        { id: "atributlar", title: "Atributlar" },
      ],
      content: `<h2 id="overview">Tavsif</h2>
<p><code>&lt;form&gt;</code> — foydalanuvchi ma'lumoti to'planadigan konteyner. Submit qilinganda ma'lumotlar serverga yuboriladi.</p>

<h2 id="atributlar">Atributlar</h2>
<ul>
  <li><code>action</code> — ma'lumot yuboriladigan URL</li>
  <li><code>method</code> — yuborish usuli: <code>get</code> (URL da ko'rinadi) yoki <code>post</code> (body da, xavfsiz)</li>
  <li><code>enctype</code> — ma'lumot formati (fayl yuklash uchun: <code>multipart/form-data</code>)</li>
  <li><code>novalidate</code> — brauzer validatsiyasini o'chiradi</li>
  <li><code>autocomplete</code> — avtoto'ldirish: on/off</li>
</ul>`,
      codeExample: {
        title: "<form> atributlari",
        language: "html",
        code: `<!-- Oddiy forma -->
<form action="/yuborish" method="post">
  <label for="ism">Ism:</label>
  <input type="text" id="ism" name="ism" required>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>

  <button type="submit">Yuborish</button>
</form>

<!-- Fayl yuklash formasi -->
<form action="/upload" method="post"
      enctype="multipart/form-data">
  <input type="file" name="fayl">
  <button type="submit">Yuklash</button>
</form>`,
      },
      liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>Forma</title>
  <style>
    form { display: flex; flex-direction: column; gap: 10px; max-width: 300px; }
    input { padding: 8px; border: 1px solid #ccc; border-radius: 4px; }
    button { padding: 8px 16px; background: #e34c26; color: white; border: none; border-radius: 4px; cursor: pointer; }
  </style>
</head>
<body>
  <h2>Ro'yxatdan o'tish</h2>
  <form>
    <label for="ism">Ism:</label>
    <input type="text" id="ism" name="ism" placeholder="Ismingiz" required>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" placeholder="email@example.com" required>
    <button type="submit">Yuborish</button>
  </form>
</body>
</html>`,
      notes: [
        "Parol, shaxsiy ma'lumotlar uchun method=\"post\" ishlatish shart",
        "Forma ichidagi barcha input larning name atributi bo'lishi kerak",
        "label va input bog'lanishi (for/id) accessibility uchun majburiy",
      ],
      commonMistakes: [
        "Parol formasida method=\"get\" ishlatish — URL da ko'rinib qoladi",
        "name atributini yozmaslik — serverga yetib bormaydi",
      ],
      practiceTask: "Login formasi yarating: email, parol va yuborish tugmasi bilan.",
      quiz: [
        {
          question: "Parol yuborish uchun qaysi method to'g'ri?",
          options: ["get", "post", "send", "submit"],
          correct: 1,
          explanation: "post — ma'lumotlar URL da ko'rinmaydi, body da yuboriladi. Parol uchun xavfsiz.",
        },
      ],
    },

    {
      id: "tag-input",
      slug: "tag-input",
      title: "<input>",
      description: "Kiritish maydoni — barcha turlari",
      sections: [
        { id: "overview", title: "Tavsif" },
        { id: "turlari", title: "Input turlari" },
      ],
      content: `<h2 id="overview">Tavsif</h2>
<p><code>&lt;input&gt;</code> — eng ko'p ishlatiladigan forma elementi. <code>type</code> atributiga qarab xilma-xil ko'rinish va xatti-harakat.</p>

<h2 id="turlari">Input turlari</h2>
<ul>
  <li><code>text</code> — oddiy matn (default)</li>
  <li><code>email</code> — email formati tekshiruvi</li>
  <li><code>password</code> — yashirin matn</li>
  <li><code>number</code> — raqam kirish</li>
  <li><code>tel</code> — telefon raqami</li>
  <li><code>url</code> — URL formati</li>
  <li><code>date</code> / <code>time</code> / <code>datetime-local</code> — sana/vaqt</li>
  <li><code>checkbox</code> — belgilash qutisi</li>
  <li><code>radio</code> — bir tanlov</li>
  <li><code>range</code> — slayder</li>
  <li><code>file</code> — fayl tanlash</li>
  <li><code>color</code> — rang tanlash</li>
  <li><code>hidden</code> — yashirin maydon</li>
  <li><code>submit</code> / <code>reset</code> / <code>button</code> — tugmalar</li>
  <li><code>search</code> — qidiruv maydoni</li>
</ul>`,
      codeExample: {
        title: "Input turlari",
        language: "html",
        code: `<input type="text" placeholder="Ism" required>
<input type="email" placeholder="email@test.com">
<input type="password" minlength="8">
<input type="number" min="0" max="100" step="5">
<input type="tel" pattern="[0-9]{9}">
<input type="date">
<input type="color" value="#e34c26">
<input type="range" min="0" max="100" value="50">
<input type="file" accept="image/*">

<!-- Checkbox -->
<input type="checkbox" id="ok" name="ok">
<label for="ok">Qabul qilaman</label>

<!-- Radio -->
<input type="radio" id="erkak" name="jins" value="erkak">
<label for="erkak">Erkak</label>
<input type="radio" id="ayol" name="jins" value="ayol">
<label for="ayol">Ayol</label>`,
      },
      liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>Input turlari</title>
  <style>
    form { display: flex; flex-direction: column; gap: 12px; max-width: 320px; padding: 20px; }
    input:not([type=checkbox]):not([type=radio]) { padding: 8px; border: 1px solid #ccc; border-radius: 4px; width: 100%; box-sizing: border-box; }
    label { font-weight: 600; font-size: 14px; }
  </style>
</head>
<body>
  <form>
    <label>Matn: <input type="text" placeholder="Matn kiriting"></label>
    <label>Email: <input type="email" placeholder="email@test.com"></label>
    <label>Parol: <input type="password" placeholder="Parol"></label>
    <label>Raqam: <input type="number" min="1" max="10"></label>
    <label>Rang: <input type="color" value="#e34c26"></label>
    <label>Sana: <input type="date"></label>
    <label>Fayl: <input type="file"></label>
  </form>
</body>
</html>`,
      notes: [
        "type='email' brauzer tomonidan format tekshiriladi",
        "required — bo'sh qoldirilmasa forma submit bo'lmaydi",
        "placeholder — fon matn (qiymat emas)",
        "name — serverga ma'lumot yuborish uchun majburiy",
      ],
      commonMistakes: [
        "placeholder ni label o'rnida ishlatish — accessibility buziladi",
        "name atributini yozmaslik",
        "password uchun type='text' ishlatish",
      ],
      practiceTask: "Ro'yxatdan o'tish formasi: text, email, password, date va checkbox bilan.",
      quiz: [
        {
          question: "Checkbox va radio button farqi nima?",
          options: [
            "Hech qanday farqi yo'q",
            "Checkbox — bir nechta tanlash, radio — faqat bitta (bir guruhda)",
            "Radio — bir nechta tanlash, checkbox — bitta",
            "Faqat ko'rinishi farqli",
          ],
          correct: 1,
          explanation: "checkbox — mustaqil, bir nechta tanlanishi mumkin. radio — bir name guruhi ichida faqat bitta tanlanadi.",
        },
      ],
    },

    {
      id: "tag-textarea-select",
      slug: "tag-textarea-select",
      title: "<textarea> va <select>",
      description: "Ko'p qatorli matn va tanlash",
      sections: [
        { id: "overview", title: "Tavsif" },
      ],
      content: `<h2 id="overview">Tavsif</h2>
<p><code>&lt;textarea&gt;</code> — ko'p qatorli matn kiritish maydoni. Fikr-mulohaza, xabar yozish uchun.</p>
<p><code>&lt;select&gt;</code> — ochiladigan ro'yxat (dropdown). <code>&lt;option&gt;</code> — har bir variant. <code>&lt;optgroup&gt;</code> — variantlarni guruhlash.</p>`,
      codeExample: {
        title: "textarea va select",
        language: "html",
        code: `<!-- Ko'p qatorli matn -->
<label for="xabar">Xabar:</label>
<textarea
  id="xabar"
  name="xabar"
  rows="5"
  cols="40"
  placeholder="Xabaringizni yozing..."
  maxlength="500"
></textarea>

<!-- Oddiy select -->
<label for="shahar">Shahar:</label>
<select id="shahar" name="shahar">
  <option value="">-- Tanlang --</option>
  <option value="toshkent">Toshkent</option>
  <option value="samarqand" selected>Samarqand</option>
  <option value="buxoro">Buxoro</option>
</select>

<!-- Guruhli select -->
<select name="kurs">
  <optgroup label="Frontend">
    <option value="html">HTML</option>
    <option value="css">CSS</option>
  </optgroup>
  <optgroup label="Backend">
    <option value="nodejs">Node.js</option>
  </optgroup>
</select>

<!-- Ko'p tanlash -->
<select name="qiziqishlar" multiple size="4">
  <option value="html">HTML</option>
  <option value="css">CSS</option>
  <option value="js">JavaScript</option>
</select>`,
      },
      liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>textarea va select</title>
  <style>
    form { display: flex; flex-direction: column; gap: 12px; max-width: 320px; padding: 20px; }
    textarea, select { padding: 8px; border: 1px solid #ccc; border-radius: 4px; }
    label { font-weight: 600; }
  </style>
</head>
<body>
  <form>
    <label for="fikr">Fikr-mulohaza:</label>
    <textarea id="fikr" name="fikr" rows="4" placeholder="Fikringizni yozing..."></textarea>

    <label for="daraja">Daraja:</label>
    <select id="daraja" name="daraja">
      <option value="">Tanlang</option>
      <option value="boshlang">Boshlang'ich</option>
      <option value="orta">O'rta</option>
      <option value="ilgor">Ilg'or</option>
    </select>
  </form>
</body>
</html>`,
      notes: [
        "textarea — resize CSS bilan boshqariladi",
        "select da selected atributi oldindan tanlangan qiymat",
        "multiple atributi bilan Ctrl/Cmd bosib ko'p tanlash",
      ],
      commonMistakes: [
        "textarea ni self-closing yozish (<textarea /> — noto'g'ri)",
        "Default value uchun value atributi ishlatish (textarea da kontent ichida yoziladi)",
      ],
      practiceTask: "Fikr-mulohaza formasi: ism, baholash (select) va xabar (textarea) bilan.",
      quiz: [
        {
          question: "textarea da default matn qanday beriladi?",
          options: [
            "value atributi bilan",
            "placeholder bilan",
            "Teg orasiga yozish bilan",
            "content atributi bilan",
          ],
          correct: 2,
          explanation: "<textarea>Bu default matn</textarea> — textarea da qiymat teg orasida yoziladi, value atributi emas.",
        },
      ],
    },

    {
      id: "tag-label-button",
      slug: "tag-label-button",
      title: "<label> va <button>",
      description: "Maydon yorlig'i va tugma",
      sections: [
        { id: "overview", title: "Tavsif" },
      ],
      content: `<h2 id="overview">Tavsif</h2>
<p><code>&lt;label&gt;</code> — forma elementi uchun yorliq. Label bosilganda bog'liq input fokus oladi — accessibility uchun muhim.</p>
<p><code>&lt;button&gt;</code> — tugma. <code>&lt;input type="submit"&gt;</code> dan afzal — ichiga HTML qo'yish mumkin.</p>

<h3>label bog'lash usullari:</h3>
<ul>
  <li>for/id bilan: <code>&lt;label for="ism"&gt;</code> + <code>&lt;input id="ism"&gt;</code></li>
  <li>Wrap bilan: <code>&lt;label&gt;&lt;input&gt; Matn&lt;/label&gt;</code></li>
</ul>

<h3>button type lar:</h3>
<ul>
  <li><code>type="submit"</code> — formani yuboradi (default)</li>
  <li><code>type="button"</code> — oddiy tugma, formani yubormaydi</li>
  <li><code>type="reset"</code> — formani tozalaydi</li>
</ul>`,
      codeExample: {
        title: "label va button",
        language: "html",
        code: `<!-- for/id bilan bog'lash -->
<label for="email">Email manzil:</label>
<input type="email" id="email" name="email">

<!-- Wrap usuli -->
<label>
  <input type="checkbox" name="shartlar">
  Foydalanish shartlarini qabul qilaman
</label>

<!-- Tugma turlari -->
<button type="submit">Yuborish</button>
<button type="button" onclick="alert('Bosildi!')">
  Bosing
</button>
<button type="reset">Tozalash</button>

<!-- Icon bilan tugma -->
<button type="button">
  ⬇ Yuklab olish
</button>`,
      },
      liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>label va button</title>
  <style>
    form { display: flex; flex-direction: column; gap: 10px; max-width: 280px; padding: 20px; }
    input[type=text], input[type=email] { padding: 8px; border: 1px solid #ccc; border-radius: 4px; }
    button { padding: 10px 20px; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; }
    .primary { background: #e34c26; color: white; }
    .secondary { background: #eee; color: #333; }
  </style>
</head>
<body>
  <form>
    <label for="ism">Ismingiz:</label>
    <input type="text" id="ism" name="ism" required>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <label>
      <input type="checkbox" name="xabar"> Yangiliklardan xabardor bo'lishni xohlayman
    </label>

    <button type="submit" class="primary">Yuborish</button>
    <button type="reset" class="secondary">Tozalash</button>
  </form>
</body>
</html>`,
      notes: [
        "label bosish input ni focus qiladi — touch screen uchun muhim",
        "button type='button' yozmasangiz forma submit bo'lishi mumkin",
        "disabled atributi tugmani o'chiradi",
      ],
      commonMistakes: [
        "label va input ni for/id bilan bog'lamaslik",
        "Forma ichidagi tugmaga type='button' qo'ymaslik",
      ],
      practiceTask: "to'liq login formasi: label + input (email, parol) va submit tugmasi.",
      quiz: [
        {
          question: "label va input boglanishi nima uchun muhim?",
          options: [
            "Ko'rinish uchun",
            "Label bosilganda input fokus oladi — accessibility",
            "Forma yuborilishi uchun",
            "Validatsiya uchun",
          ],
          correct: 1,
          explanation: "label bog'lanishi — label bosish input ni faollashtiradi. Screenreader, mobil qurilmalar uchun juda muhim.",
        },
      ],
    },

    // ─── SEMANTIC ────────────────────────────────────────────────────────────
    {
      id: "tag-semantic",
      slug: "tag-semantic",
      title: "Semantik teglar",
      description: "header, main, footer, nav, section, article, aside",
      sections: [
        { id: "overview", title: "Tavsif" },
        { id: "teglar", title: "Semantik teglar" },
      ],
      content: `<h2 id="overview">Tavsif</h2>
<p>Semantik teglar — mazmunni brauzer, qidiruv tizimlari va screenreader uchun aniq ifodalaydi. div o'rniga to'g'ri semantik teglarni ishlatish SEO va accessibility ni yaxshilaydi.</p>

<h2 id="teglar">Asosiy semantik teglar</h2>
<ul>
  <li><code>&lt;header&gt;</code> — sahifa yoki bo'lim boshi (logo, navigatsiya)</li>
  <li><code>&lt;nav&gt;</code> — navigatsiya havolalar to'plami</li>
  <li><code>&lt;main&gt;</code> — sahifaning asosiy noyob kontenti (bitta bo'ladi)</li>
  <li><code>&lt;section&gt;</code> — mavzuviy bo'lim, odatda sarlavha bilan</li>
  <li><code>&lt;article&gt;</code> — mustaqil kontent (maqola, post, komment)</li>
  <li><code>&lt;aside&gt;</code> — qo'shimcha kontent (sidebar, reklama)</li>
  <li><code>&lt;footer&gt;</code> — sahifa yoki bo'lim osti (mualliflik, havolalar)</li>
  <li><code>&lt;figure&gt;</code> — rasm, diagramma, kod bloki konteyner</li>
  <li><code>&lt;figcaption&gt;</code> — figure uchun sarlavha/tavsif</li>
  <li><code>&lt;time&gt;</code> — sana va vaqt (datetime atributi bilan)</li>
  <li><code>&lt;mark&gt;</code> — belgilangan/ta'kidlangan matn</li>
  <li><code>&lt;address&gt;</code> — aloqa manzili</li>
</ul>`,
      codeExample: {
        title: "Semantik layout",
        language: "html",
        code: `<!DOCTYPE html>
<html lang="uz">
<head>
  <title>Blog</title>
</head>
<body>

  <header>
    <h1>Mening Blogim</h1>
    <nav>
      <ul>
        <li><a href="/">Bosh sahifa</a></li>
        <li><a href="/maqolalar">Maqolalar</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <article>
      <header>
        <h2>Maqola sarlavhasi</h2>
        <time datetime="2025-01-15">15 Yanvar, 2025</time>
      </header>

      <section>
        <h3>Kirish</h3>
        <p>Maqola kirish qismi...</p>
      </section>

      <figure>
        <img src="rasm.jpg" alt="Maqola rasmi">
        <figcaption>Rasm tavsifi</figcaption>
      </figure>
    </article>

    <aside>
      <h3>Teglar</h3>
      <ul>
        <li><mark>HTML</mark></li>
        <li>CSS</li>
      </ul>
    </aside>
  </main>

  <footer>
    <address>
      Muallif: <a href="mailto:ali@example.com">Ali</a>
    </address>
    <p>&copy; 2025 Mening Blogim</p>
  </footer>

</body>
</html>`,
      },
      liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>Semantik HTML</title>
  <style>
    body { font-family: Arial; max-width: 800px; margin: 0 auto; padding: 20px; }
    header { background: #e34c26; color: white; padding: 16px; border-radius: 8px; margin-bottom: 16px; }
    nav a { color: white; margin-right: 12px; }
    main { display: flex; gap: 16px; }
    article { flex: 1; background: #f9f9f9; padding: 16px; border-radius: 8px; }
    aside { width: 180px; background: #f0f0f0; padding: 16px; border-radius: 8px; }
    footer { text-align: center; margin-top: 16px; color: #666; }
  </style>
</head>
<body>
  <header>
    <h1>Blog</h1>
    <nav>
      <a href="#">Bosh sahifa</a>
      <a href="#">Maqolalar</a>
    </nav>
  </header>
  <main>
    <article>
      <h2>Maqola sarlavhasi</h2>
      <time datetime="2025-01-15">15 Yanvar 2025</time>
      <p>Maqola matni shu yerda...</p>
    </article>
    <aside>
      <h3>Teglar</h3>
      <p><mark>HTML</mark></p>
      <p>CSS</p>
    </aside>
  </main>
  <footer>
    <p>&copy; 2025 Blog</p>
  </footer>
</body>
</html>`,
      notes: [
        "main — sahifada faqat bitta bo'ladi",
        "header va footer — sahifa darajasida ham, section/article ichida ham bo'lishi mumkin",
        "nav — barcha havolalar uchun emas, faqat asosiy navigatsiya",
        "article — mustaqil kontentni ifodalaydi (boshqa sahifada ham ma'no bermay o'qiladi)",
      ],
      commonMistakes: [
        "Hamma narsa uchun div ishlatish (semantic o'rniga)",
        "section va article ni aralashtirib ishlatish",
        "nav ichiga barcha havolalarni qo'yish",
      ],
      practiceTask: "Blog sahifasi yarating: header (nav bilan), main (article + aside), footer.",
      quiz: [
        {
          question: "Sahifaning asosiy noyob kontenti uchun qaysi teg ishlatiladi?",
          options: ["<section>", "<div>", "<main>", "<article>"],
          correct: 2,
          explanation: "<main> — sahifaning birlamchi noyob kontenti. Har sahifada faqat bitta bo'ladi.",
        },
      ],
    },

    // ─── ADVANCED ────────────────────────────────────────────────────────────
    {
      id: "tag-iframe",
      slug: "tag-iframe",
      title: "<iframe>",
      description: "Tashqi sahifani ichiga joylashtirish",
      sections: [
        { id: "overview", title: "Tavsif" },
        { id: "xavfsizlik", title: "Xavfsizlik" },
      ],
      content: `<h2 id="overview">Tavsif</h2>
<p><code>&lt;iframe&gt;</code> (inline frame) — boshqa veb sahifani yoki kontentni hujjat ichiga joylashtirish. YouTube video embed, Google Maps, widget lar uchun keng ishlatiladi.</p>

<h2 id="xavfsizlik">Xavfsizlik</h2>
<ul>
  <li><code>sandbox</code> — iframe ichidagi kontentni cheklaydi</li>
  <li><code>allow</code> — ruxsat beriladigan funksiyalar (fullscreen, camera va h.k.)</li>
  <li>Ishonchsiz manbadan iframe joylashtirmang — XSS xavfi</li>
  <li>CSP (Content Security Policy) bilan boshqarish</li>
</ul>`,
      codeExample: {
        title: "<iframe> misollari",
        language: "html",
        code: `<!-- YouTube video -->
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="Video nomi"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write;
         encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>

<!-- Google Maps -->
<iframe
  src="https://www.google.com/maps/embed?..."
  width="600"
  height="450"
  style="border:0"
  allowfullscreen
  loading="lazy"
></iframe>

<!-- Xavfsiz iframe (sandbox) -->
<iframe
  src="widget.html"
  sandbox="allow-scripts allow-same-origin"
  width="400"
  height="300"
></iframe>`,
      },
      liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>iframe misoli</title>
</head>
<body>
  <h2>iframe misoli</h2>
  <iframe
    src="https://learner.uz"
    width="100%"
    height="400"
    style="border: 1px solid #ccc; border-radius: 8px;"
    title="Learner.uz"
  ></iframe>
</body>
</html>`,
      notes: [
        "title atributi accessibility uchun zarur",
        "loading=\"lazy\" — viewport ga yaqinlashganda yuklanadi",
        "frameborder=\"0\" o'rniga CSS border: none ishlatish yaxshiroq",
      ],
      commonMistakes: [
        "title atributini yozmaslik",
        "Ishonchsiz manbadan iframe joylashtirish",
        "Mobil qurilmalar uchun o'lchamni moslashtirishni unutish",
      ],
      practiceTask: "YouTube videosini iframe bilan sahifaga joylashtiring.",
      quiz: [
        {
          question: "iframe da sandbox atributi nima qiladi?",
          options: [
            "Rasmni cheklaydi",
            "iframe ichidagi kontentning imkoniyatlarini cheklaydi",
            "Faqat audio ni cheklaydi",
            "Iframe ni yashiradi",
          ],
          correct: 1,
          explanation: "sandbox — iframe ichidagi skriptlar, formalar va boshqa funksiyalarni cheklaydi. Xavfsizlik uchun.",
        },
      ],
    },

    {
      id: "tag-details-summary",
      slug: "tag-details-summary",
      title: "<details> va <summary>",
      description: "Ochiluvchi-yopiladigan kontent",
      sections: [
        { id: "overview", title: "Tavsif" },
      ],
      content: `<h2 id="overview">Tavsif</h2>
<p><code>&lt;details&gt;</code> — JavaScript siz ochiluvchi-yopiladigan kontent bloklari. FAQ, accordion, spoiler uchun.</p>
<p><code>&lt;summary&gt;</code> — details ning bosimli sarlavhasi. Bosish bilan ochiladi/yopiladi.</p>
<ul>
  <li><code>open</code> atributi — sahifa yuklanganda ochiq turadi</li>
  <li>CSS bilan ko'rinishini to'liq o'zgartirish mumkin</li>
</ul>`,
      codeExample: {
        title: "<details> va <summary>",
        language: "html",
        code: `<!-- Oddiy FAQ -->
<details>
  <summary>HTML nima?</summary>
  <p>HTML — HyperText Markup Language.
     Veb sahifalar yaratish uchun standart til.</p>
</details>

<!-- Boshlang'ichda ochiq -->
<details open>
  <summary>Bu ochiq turibdi</summary>
  <p>open atributi bilan sahifa yuklanganda ochiq.</p>
</details>

<!-- Bir nechta FAQ -->
<details>
  <summary>Kurs bepulmi?</summary>
  <p>Ha, barcha asosiy kurslar to'liq bepul.</p>
</details>

<details>
  <summary>Sertifikat beriladi?</summary>
  <p>Kursni tugatgach elektron sertifikat beriladi.</p>
</details>`,
      },
      liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>details va summary</title>
  <style>
    details { border: 1px solid #ddd; border-radius: 8px; margin: 8px 0; }
    summary { padding: 12px 16px; cursor: pointer; font-weight: 600; background: #f5f5f5; border-radius: 8px; }
    details[open] summary { border-radius: 8px 8px 0 0; }
    details p { padding: 12px 16px; margin: 0; }
  </style>
</head>
<body>
  <h2>Ko'p so'raladigan savollar</h2>

  <details>
    <summary>HTML o'rganish qancha vaqt oladi?</summary>
    <p>Asoslarni 2-4 hafta ichida o'rganish mumkin.</p>
  </details>

  <details>
    <summary>Qaysi brauzer eng yaxshi?</summary>
    <p>Dasturchilar uchun Chrome yoki Firefox tavsiya etiladi.</p>
  </details>
</body>
</html>`,
      notes: [
        "JavaScript siz ishlaydi — eng sodda accordion",
        "open atributi JS orqali qo'shish/olib tashlash bilan boshqarish",
        "toggle event bilan tracking qilish mumkin",
      ],
      commonMistakes: [
        "summary ni details dan tashqarida ishlatish",
        "summary teg bo'lmasa brauzer 'Details' degan default matn ko'rsatadi",
      ],
      practiceTask: "5 ta FAQ savol-javob details/summary bilan yarating.",
      quiz: [
        {
          question: "<details> sahifa yuklanganda ochiq turishi uchun qaysi atribut kerak?",
          options: ["show", "visible", "open", "active"],
          correct: 2,
          explanation: "<details open> — open atributi bilan sahifa yuklanganda ochiq holda bo'ladi.",
        },
      ],
    },

    {
      id: "tag-canvas-svg",
      slug: "tag-canvas-svg",
      title: "<canvas> va <svg>",
      description: "Grafika va vektorli rasmlar",
      sections: [
        { id: "overview", title: "Tavsif" },
        { id: "farqi", title: "Farqi" },
      ],
      content: `<h2 id="overview">Tavsif</h2>
<p><code>&lt;canvas&gt;</code> — JavaScript orqali pikselli (raster) grafika chizish. O'yinlar, real-time vizualizatsiya, rasm tahrirlash uchun.</p>
<p><code>&lt;svg&gt;</code> — HTML ichida to'g'ridan-to'g'ri vektorli grafika. Logo, ikonlar, diagrammalar uchun. Istalgan o'lchamda sifat yo'qolmaydi.</p>

<h2 id="farqi">Farqi</h2>
<ul>
  <li><strong>canvas</strong> — pikselli, JavaScript kerak, katta sahnalar uchun tez</li>
  <li><strong>svg</strong> — vektorli, CSS/JavaScript bilan boshqariladi, kichik skalyar grafika uchun</li>
  <li>svg — DOM elementi, hover/click eventlar ishlaydi</li>
  <li>canvas — piksellar, event boshqaruvi qo'lda qilinadi</li>
</ul>`,
      codeExample: {
        title: "canvas va SVG",
        language: "html",
        code: `<!-- Canvas (JS bilan chiziladi) -->
<canvas id="myCan" width="400" height="200"
        style="border: 1px solid #ccc">
  Brauzeringiz canvas ni qo'llab-quvvatlamaydi.
</canvas>
<script>
  const ctx = document.getElementById('myCan')
                       .getContext('2d');
  ctx.fillStyle = '#e34c26';
  ctx.fillRect(10, 10, 100, 80);
  ctx.strokeStyle = '#2965f1';
  ctx.beginPath();
  ctx.arc(250, 100, 60, 0, Math.PI * 2);
  ctx.stroke();
</script>

<!-- Inline SVG -->
<svg width="200" height="100"
     xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="80" height="60"
        fill="#e34c26" rx="8"/>
  <circle cx="150" cy="50" r="35"
          fill="#2965f1"/>
  <text x="100" y="90" text-anchor="middle"
        fill="#333" font-size="14">SVG</text>
</svg>`,
      },
      liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>Canvas va SVG</title>
</head>
<body>
  <h2>SVG misoli</h2>
  <svg width="300" height="150" style="border:1px solid #eee; border-radius:8px">
    <rect x="20" y="20" width="100" height="70" fill="#e34c26" rx="10"/>
    <circle cx="200" cy="55" r="40" fill="#2965f1" opacity="0.8"/>
    <text x="150" y="130" text-anchor="middle" font-family="Arial" font-size="14" fill="#333">Inline SVG</text>
  </svg>

  <h2>Canvas misoli</h2>
  <canvas id="c" width="300" height="150" style="border:1px solid #eee; border-radius:8px"></canvas>
  <script>
    const ctx = document.getElementById('c').getContext('2d');
    ctx.fillStyle = '#e34c26';
    ctx.fillRect(20, 20, 100, 70);
    ctx.fillStyle = 'rgba(41,101,241,0.8)';
    ctx.beginPath();
    ctx.arc(200, 55, 40, 0, Math.PI * 2);
    ctx.fill();
  </script>
</body>
</html>`,
      notes: [
        "SVG — accessibility (title/desc teglari bilan), canvas — yo'q",
        "SVG — CSS animatsiya bilan oson, canvas — JS kerak",
        "canvas width/height HTML atributida bo'lsin, CSS da emas",
      ],
      commonMistakes: [
        "canvas o'lchamini faqat CSS bilan o'rnatish — rasm cho'ziladi",
        "SVG da xmlns yozmaslik",
      ],
      practiceTask: "SVG bilan oddiy logo (doira, to'rtburchak, matn) yarating.",
      quiz: [
        {
          question: "SVG va canvas ning asosiy farqi nima?",
          options: [
            "SVG — yangi, canvas — eski",
            "SVG — vektorli DOM elementi, canvas — pikselli JS konteksti",
            "canvas — vektorli, SVG — pikselli",
            "Hech qanday farqi yo'q",
          ],
          correct: 1,
          explanation: "SVG — XML asosidagi vektorli, har bir element DOM da. canvas — piksel asosidagi, JS orqali chiziladi.",
        },
      ],
    },

    {
      id: "tag-data-attributes",
      slug: "tag-data-attributes",
      title: "data-* atributlari",
      description: "Custom ma'lumot atributlari",
      sections: [
        { id: "overview", title: "Tavsif" },
        { id: "js", title: "JavaScript bilan ishlash" },
      ],
      content: `<h2 id="overview">Tavsif</h2>
<p><code>data-*</code> — HTML elementlarga ixtiyoriy custom ma'lumot saqlash uchun. JavaScript bilan <code>dataset</code> API orqali o'qiladi/yoziladi.</p>
<ul>
  <li>data- dan keyin istalgan nom yoziladi: <code>data-id</code>, <code>data-user-name</code></li>
  <li>Faqat string qiymatlar saqlaydi</li>
  <li>Ko'rinishga ta'sir qilmaydi (CSS bilan ishlatish mumkin: <code>attr()</code>)</li>
</ul>

<h2 id="js">JavaScript bilan ishlash</h2>
<p><code>element.dataset.nazariy</code> — data-* ni JS da o'qish. Kebab-case → camelCase: <code>data-user-id</code> → <code>dataset.userId</code>.</p>`,
      codeExample: {
        title: "data-* atributlari",
        language: "html",
        code: `<!-- HTML da ma'lumot saqlash -->
<button
  data-id="42"
  data-category="html"
  data-user-name="Ali"
  onclick="handleClick(this)"
>
  Batafsil
</button>

<!-- Mahsulot kartasi -->
<div
  class="karta"
  data-product-id="101"
  data-price="150000"
  data-in-stock="true"
>
  <h3>Mahsulot nomi</h3>
</div>

<script>
function handleClick(el) {
  // kebab-case -> camelCase
  console.log(el.dataset.id);        // "42"
  console.log(el.dataset.category);  // "html"
  console.log(el.dataset.userName);  // "Ali"
}

// Qiymat o'zgartirish
const karta = document.querySelector('.karta');
karta.dataset.price = '200000';
</script>`,
      },
      liveEditorDefault: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>data-* misoli</title>
  <style>
    .karta { border: 1px solid #ddd; padding: 16px; border-radius: 8px; width: 200px; cursor: pointer; }
    .karta:hover { border-color: #e34c26; }
    #natija { margin-top: 16px; padding: 12px; background: #f0f0f0; border-radius: 8px; }
  </style>
</head>
<body>
  <div class="karta"
       data-id="1"
       data-name="HTML kursi"
       data-price="Bepul"
       onclick="showInfo(this)">
    <h3>HTML kursi</h3>
    <p>Bosing!</p>
  </div>

  <div id="natija">Ma'lumot shu yerda ko'rinadi...</div>

  <script>
    function showInfo(el) {
      document.getElementById('natija').innerHTML =
        'ID: ' + el.dataset.id + '<br>' +
        'Nom: ' + el.dataset.name + '<br>' +
        'Narx: ' + el.dataset.price;
    }
  </script>
</body>
</html>`,
      notes: [
        "data-* qiymatlari doim string. Raqamni Number() bilan convert qilish kerak",
        "CSS: [data-state='active'] { } — atribut selektor bilan ishlatiladi",
        "Server side render qilganda data ni elementga yozish qulay",
      ],
      commonMistakes: [
        "data- siz atribut nomini yozish (masalan, myid='1' — noto'g'ri)",
        "Katta miqdordagi ma'lumotni data-* da saqlash — buning uchun JS o'zgaruvchilari yaxshiroq",
      ],
      practiceTask: "3 ta mahsulot kartasi yarating, har birida data-id, data-price, data-name. Bosganingizda ma'lumotni chiqaring.",
      quiz: [
        {
          question: "data-user-name ni JavaScript da qanday o'qiladi?",
          options: [
            "element.dataset['data-user-name']",
            "element.getAttribute('data-user-name')",
            "element.dataset.userName",
            "element.data.userName",
          ],
          correct: 2,
          explanation: "dataset — kebab-case ni camelCase ga o'tkazadi. data-user-name → dataset.userName.",
        },
      ],
    },
  ],
};
