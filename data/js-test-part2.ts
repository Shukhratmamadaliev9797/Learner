import type { TestQuestion } from "./html-test";

export const jsTestPart2: TestQuestion[] = [
  // DOM bilan ishlash (101-115)
  {
    id: 101,
    type: "nazariy",
    category: "DOM",
    question: "DOM nima degan ma'noni anglatadi?",
    options: [
      "Document Object Model",
      "Data Object Management",
      "Dynamic Output Module",
      "Document Oriented Method",
    ],
    correct: 0,
    explanation: "DOM — Document Object Model. HTML hujjatini dasturlash orqali o'zgartirish imkonini beruvchi interfeys.",
  },
  {
    id: 102,
    type: "amaliy",
    category: "DOM",
    question: "Qaysi metod bitta elementni ID orqali topadi?",
    code: `const el = document.___('myId');`,
    options: [
      "querySelector('#myId')",
      "getElementById('myId')",
      "getElement('myId')",
      "findById('myId')",
    ],
    correct: 1,
    explanation: "getElementById('id') — ID bo'yicha bitta elementni qaytaradi. querySelector('#id') ham ishlaydi.",
  },
  {
    id: 103,
    type: "amaliy",
    category: "DOM",
    question: "Bu kod nima qaytaradi?",
    code: `const items = document.querySelectorAll('.item');
console.log(typeof items);`,
    options: ["'array'", "'object'", "'nodelist'", "'collection'"],
    correct: 1,
    explanation: "querySelectorAll() — NodeList qaytaradi, u object tipida. Array emas, lekin forEach qo'llab-quvvatlaydi.",
  },
  {
    id: 104,
    type: "amaliy",
    category: "DOM",
    question: "Element ichidagi HTML ni o'rnatish uchun qaysi xususiyat ishlatiladi?",
    code: `const div = document.querySelector('div');
div.___ = '<p>Salom</p>';`,
    options: ["textContent", "innerHTML", "innerText", "htmlContent"],
    correct: 1,
    explanation: "innerHTML — element ichiga HTML kodni o'rnatadi. textContent faqat matn, innerHTML esa HTML ni qabul qiladi.",
  },
  {
    id: 105,
    type: "amaliy",
    category: "DOM",
    question: "Bu kod nima chiqaradi?",
    code: `const div = document.createElement('div');
div.textContent = 'Test';
console.log(div.isConnected);`,
    options: ["true", "false", "null", "undefined"],
    correct: 1,
    explanation: "createElement() orqali yaratilgan element DOM ga qo'shilmagan, shuning uchun isConnected = false.",
  },
  {
    id: 106,
    type: "amaliy",
    category: "DOM",
    question: "Element ga CSS class qo'shish uchun to'g'ri usul qaysi?",
    code: `const btn = document.querySelector('button');`,
    options: [
      "btn.class += ' active'",
      "btn.classList.add('active')",
      "btn.className.add('active')",
      "btn.style.class = 'active'",
    ],
    correct: 1,
    explanation: "classList.add() — class qo'shishning zamonaviy usuli. classList.remove(), toggle(), contains() ham mavjud.",
  },
  {
    id: 107,
    type: "amaliy",
    category: "DOM",
    question: "Bu kod nima qiladi?",
    code: `const parent = document.getElementById('list');
const child = document.createElement('li');
child.textContent = 'Yangi element';
parent.appendChild(child);`,
    options: [
      "Listni o'chiradi",
      "Listning boshiga element qo'shadi",
      "Listning oxiriga element qo'shadi",
      "Elementni almashtiradi",
    ],
    correct: 2,
    explanation: "appendChild() — bolani parent elementning oxiriga qo'shadi. Boshiga qo'shish uchun prepend() ishlatiladi.",
  },
  {
    id: 108,
    type: "amaliy",
    category: "DOM",
    question: "Element atributini o'rnatish uchun qaysi metod ishlatiladi?",
    code: `const img = document.querySelector('img');
img.___('src', 'photo.jpg');`,
    options: ["setAttribute", "setAttr", "attr", "addAttribute"],
    correct: 0,
    explanation: "setAttribute('name', 'value') — element atributini o'rnatadi. getAttribute() esa qiymatini oladi.",
  },
  {
    id: 109,
    type: "amaliy",
    category: "DOM",
    question: "Bu kod nima chiqaradi?",
    code: `const div = document.querySelector('div');
div.style.color = 'red';
div.style.fontSize = '20px';
console.log(div.style.color);`,
    options: ["'red'", "red", "color: red", "undefined"],
    correct: 0,
    explanation: "style.color inline CSS ni o'rnatadi va string sifatida qaytaradi: 'red'.",
  },
  {
    id: 110,
    type: "nazariy",
    category: "DOM",
    question: "parentNode va parentElement o'rtasidagi farq nima?",
    options: [
      "Hech qanday farq yo'q",
      "parentNode faqat Element qaytaradi",
      "parentElement faqat Element qaytaradi, parentNode har qanday node",
      "parentElement yangi, parentNode eski API",
    ],
    correct: 2,
    explanation: "parentElement — faqat Element tipidagi parent qaytaradi (yoki null). parentNode — Document, DocumentFragment ham bo'lishi mumkin.",
  },
  {
    id: 111,
    type: "amaliy",
    category: "DOM",
    question: "Elementni DOM dan o'chirish uchun qaysi metod ishlatiladi?",
    code: `const el = document.querySelector('.item');`,
    options: [
      "el.delete()",
      "el.remove()",
      "document.remove(el)",
      "el.parentNode.deleteChild(el)",
    ],
    correct: 1,
    explanation: "el.remove() — elementni DOM dan o'chiradi. Eski usul: el.parentNode.removeChild(el).",
  },
  {
    id: 112,
    type: "amaliy",
    category: "DOM",
    question: "Bu kod nima chiqaradi?",
    code: `const el = document.querySelector('p');
el.insertAdjacentHTML('beforeend', '<b>!</b>');`,
    options: [
      "Elementni almashtiradi",
      "Elementdan oldin qo'shadi",
      "Element oxiriga HTML qo'shadi",
      "Elementni o'chiradi",
    ],
    correct: 2,
    explanation: "insertAdjacentHTML('beforeend') — element ichining oxiriga HTML qo'shadi. Pozitsiyalar: beforebegin, afterbegin, beforeend, afterend.",
  },
  {
    id: 113,
    type: "amaliy",
    category: "DOM",
    question: "Element ning mazmunini XSS xavfsiz o'rnatish uchun qaysi xususiyat ishlatiladi?",
    options: ["innerHTML", "outerHTML", "textContent", "htmlContent"],
    correct: 2,
    explanation: "textContent — HTML ni parse qilmaydi, shuning uchun XSS xavfsiz. innerHTML ishlatganda foydalanuvchi kiritmasini sanitize qilish kerak.",
  },
  {
    id: 114,
    type: "amaliy",
    category: "DOM",
    question: "Bu kod nima qaytaradi?",
    code: `const el = document.querySelector('div');
const rect = el.getBoundingClientRect();
console.log(typeof rect);`,
    options: ["'object'", "'rect'", "'DOMRect'", "'array'"],
    correct: 0,
    explanation: "getBoundingClientRect() — DOMRect obyekti qaytaradi (typeof 'object'). top, left, width, height, bottom, right xususiyatlari bor.",
  },
  {
    id: 115,
    type: "nazariy",
    category: "DOM",
    question: "document.querySelector() va document.getElementById() o'rtasidagi asosiy farq nima?",
    options: [
      "getElementById tezroq ishlaydi faqat ID bilan",
      "querySelector faqat class bilan ishlaydi",
      "getElementById HTML5 da yo'q",
      "querySelector faqat bitta element topadi",
    ],
    correct: 0,
    explanation: "getElementById ID bo'yicha optimallashtirilgan va tezroq. querySelector esa har qanday CSS selektor qabul qiladi, lekin sekinroq.",
  },

  // Hodisalar / Events (116-130)
  {
    id: 116,
    type: "amaliy",
    category: "Hodisalar",
    question: "Event listener qo'shishning to'g'ri usuli qaysi?",
    code: `const btn = document.querySelector('button');`,
    options: [
      "btn.onClick = function() {}",
      "btn.addEventListener('click', function() {})",
      "btn.addEvent('click', function() {})",
      "btn.on('click', function() {})",
    ],
    correct: 1,
    explanation: "addEventListener() — eng to'g'ri usul. Bir elementga bir nechta listener qo'shish mumkin. onclick — faqat bittasini o'rnatadi.",
  },
  {
    id: 117,
    type: "amaliy",
    category: "Hodisalar",
    question: "Bu kod nima chiqaradi?",
    code: `document.addEventListener('click', function(e) {
  console.log(e.target === e.currentTarget);
});`,
    options: [
      "Har doim true",
      "Har doim false",
      "Faqat document bosilganda true",
      "Har doim Error",
    ],
    correct: 2,
    explanation: "e.target — bosilgan element, e.currentTarget — listener o'rnatilgan element. Faqat document to'g'ridan bosish true qaytaradi.",
  },
  {
    id: 118,
    type: "nazariy",
    category: "Hodisalar",
    question: "Event bubbling nima?",
    options: [
      "Event child dan parent ga ko'tariladi",
      "Event parent dan child ga tushadi",
      "Event faqat bitta elementda ishlaydi",
      "Event avtomatik to'xtaydi",
    ],
    correct: 0,
    explanation: "Bubbling — event child elementda boshlanib, parent elementlarga ko'tariladi. stopPropagation() bilan to'xtatiladi.",
  },
  {
    id: 119,
    type: "amaliy",
    category: "Hodisalar",
    question: "Event bubbling ni to'xtatish uchun qaysi metod ishlatiladi?",
    code: `btn.addEventListener('click', function(e) {
  e.___();
});`,
    options: ["stopBubbling()", "stopPropagation()", "preventDefault()", "stopEvent()"],
    correct: 1,
    explanation: "e.stopPropagation() — eventning parent elementlarga ko'tarilishini to'xtatadi. preventDefault() esa default xatti-harakatni bloklaydi.",
  },
  {
    id: 120,
    type: "amaliy",
    category: "Hodisalar",
    question: "Event delegation nima uchun foydali?",
    code: `document.querySelector('ul').addEventListener('click', function(e) {
  if(e.target.tagName === 'LI') {
    console.log(e.target.textContent);
  }
});`,
    options: [
      "Ko'p listenerdan qochish uchun",
      "Faqat bitta elementga listener qo'shish uchun",
      "Dinamik qo'shilgan elementlar uchun ham ishlaydi",
      "Ikkalasi ham to'g'ri",
    ],
    correct: 3,
    explanation: "Event delegation — parentga listener qo'yib, child elementlarni boshqarish. Kam memory ishlatadi va dinamik elementlar uchun ham ishlaydi.",
  },
  {
    id: 121,
    type: "amaliy",
    category: "Hodisalar",
    question: "Bu kod link bosishda sahifani yangilamaslik uchun nima qiladi?",
    code: `link.addEventListener('click', function(e) {
  e.preventDefault();
});`,
    options: [
      "Linkni o'chiradi",
      "Bosishni bloklaydi",
      "Brauzernning default harakatini bloklaydi",
      "Event ni to'xtatadi",
    ],
    correct: 2,
    explanation: "preventDefault() — form submit, link o'tish kabi browser default harakatlarini bloklaydi. Eventning o'zi davom etadi.",
  },
  {
    id: 122,
    type: "amaliy",
    category: "Hodisalar",
    question: "Bu kod nima chiqaradi? (tartibni aniqlang)",
    code: `document.addEventListener('click', () => console.log('3'));
div.addEventListener('click', () => console.log('1'));
span.addEventListener('click', () => console.log('2'));
// span div ichida, div document ichida
// span bosildi`,
    options: ["1, 2, 3", "3, 2, 1", "2, 1, 3", "1, 3, 2"],
    correct: 2,
    explanation: "Bubbling tartibida: span(2) → div(1) → document(3). Capturing uchun {capture:true} kerak.",
  },
  {
    id: 123,
    type: "nazariy",
    category: "Hodisalar",
    question: "once: true parametri addEventListener da nima qiladi?",
    options: [
      "Listener bir marta ishlaydi va avtomatik o'chiriladi",
      "Listener bir marta qo'shiladi",
      "Event bir marta bubble qiladi",
      "Xatolik qaytaradi",
    ],
    correct: 0,
    explanation: "{ once: true } — listener bir marta ishlab, avtomatik removeEventListener() qiladi. Xotirani tejaydi.",
  },
  {
    id: 124,
    type: "amaliy",
    category: "Hodisalar",
    question: "Keyboard event da bosilgan tugma kodini olish uchun qaysi xususiyat ishlatiladi?",
    code: `document.addEventListener('keydown', function(e) {
  console.log(e.___);
});`,
    options: ["key", "keyCode", "which", "code"],
    correct: 0,
    explanation: "e.key — bosilgan tugmaning qiymatini beradi ('Enter', 'a', 'Escape'). e.code — jismoniy tugma joylashuvini ('KeyA', 'Enter').",
  },
  {
    id: 125,
    type: "amaliy",
    category: "Hodisalar",
    question: "Bu kod nima chiqaradi?",
    code: `const btn = document.querySelector('button');
btn.addEventListener('click', handler);
btn.addEventListener('click', handler);
btn.addEventListener('click', handler);
// btn bosilganda necha marta chiqadi?
function handler() { console.log('clicked'); }`,
    options: ["3 marta", "1 marta", "2 marta", "0 marta"],
    correct: 1,
    explanation: "Bir xil funksiya referensini bir xil eventga bir necha marta qo'shish — faqat bir marta qo'shiladi.",
  },
  {
    id: 126,
    type: "amaliy",
    category: "Hodisalar",
    question: "Event listener ni o'chirish uchun qaysi usul to'g'ri?",
    code: `btn.addEventListener('click', myFunc);`,
    options: [
      "btn.removeEventListener('click')",
      "btn.removeEventListener('click', myFunc)",
      "btn.deleteEventListener('click', myFunc)",
      "btn.off('click', myFunc)",
    ],
    correct: 1,
    explanation: "removeEventListener() — aniq funksiya referensini ko'rsatish kerak. Anonymous funksiyani o'chirish mumkin emas.",
  },
  {
    id: 127,
    type: "nazariy",
    category: "Hodisalar",
    question: "mouseover va mouseenter hodisalarining farqi nima?",
    options: [
      "Hech qanday farq yo'q",
      "mouseover faqat bitta elementda ishlaydi",
      "mouseenter bubble qilmaydi, mouseover qiladi",
      "mouseenter child elementlarda ham ishlaydi",
    ],
    correct: 2,
    explanation: "mouseenter/mouseleave — bubble qilmaydi, faqat aniq elementda ishlaydi. mouseover/mouseout — child elementlarda ham ishlanib, bubble qiladi.",
  },
  {
    id: 128,
    type: "amaliy",
    category: "Hodisalar",
    question: "Custom event yaratish uchun qaysi konstruktor ishlatiladi?",
    options: ["new Event()", "new CustomEvent()", "createEvent()", "new EventEmitter()"],
    correct: 1,
    explanation: "new CustomEvent('eventName', { detail: data }) — o'z ma'lumotlari bilan custom event yaratadi. dispatchEvent() bilan ishga tushiriladi.",
  },
  {
    id: 129,
    type: "amaliy",
    category: "Hodisalar",
    question: "Bu kod nima chiqaradi?",
    code: `const btn = document.querySelector('button');
btn.dispatchEvent(new Event('click'));
btn.click();
// Agar har biri console.log('clicked') chiqarsa`,
    options: [
      "'clicked' 1 marta",
      "'clicked' 2 marta",
      "Xatolik",
      "Hech narsa",
    ],
    correct: 1,
    explanation: "dispatchEvent() va btn.click() — ikkalasi ham click eventini ishga tushiradi, natijada listener 2 marta chaqiriladi.",
  },
  {
    id: 130,
    type: "nazariy",
    category: "Hodisalar",
    question: "passive: true addEventListener opsiyasi nima uchun ishlatiladi?",
    options: [
      "Eventni o'chirish uchun",
      "Scroll performance ni yaxshilash uchun",
      "Bubble ni to'xtatish uchun",
      "Bir marta ishlatish uchun",
    ],
    correct: 1,
    explanation: "{ passive: true } — preventDefault() chaqirilmasligini bildiradi. Brauzer scroll ni kechiktirmay bajaradi. Touch/wheel eventlarda muhim.",
  },

  // Asinxron JavaScript (131-150)
  {
    id: 131,
    type: "nazariy",
    category: "Asinxron JS",
    question: "JavaScript Event Loop nima vazifani bajaradi?",
    options: [
      "Kod tezligini oshiradi",
      "Call stack bo'sh bo'lganda queue dan vazifalarni oladi",
      "Async funksiyalarni yaratadi",
      "Promise larni boshqaradi",
    ],
    correct: 1,
    explanation: "Event Loop — Call Stack bo'sh bo'lganda Callback Queue (yoki Microtask Queue) dan vazifalarni olib, stackga qo'yadi.",
  },
  {
    id: 132,
    type: "amaliy",
    category: "Asinxron JS",
    question: "Bu kod qanday tartibda chiqaradi?",
    code: `console.log('1');
setTimeout(() => console.log('2'), 0);
console.log('3');`,
    options: ["1, 2, 3", "1, 3, 2", "2, 1, 3", "3, 1, 2"],
    correct: 1,
    explanation: "setTimeout 0ms bo'lsa ham, callback queue ga tushadi. Sinxron kod (1, 3) avval ishlaydi, keyin queue bo'shagach setTimeout (2) chaqiriladi.",
  },
  {
    id: 133,
    type: "amaliy",
    category: "Asinxron JS",
    question: "Bu kod qanday tartibda chiqaradi?",
    code: `console.log('1');
Promise.resolve().then(() => console.log('2'));
setTimeout(() => console.log('3'), 0);
console.log('4');`,
    options: ["1, 4, 2, 3", "1, 2, 3, 4", "1, 4, 3, 2", "4, 1, 2, 3"],
    correct: 0,
    explanation: "Microtask queue (Promise) makrotask queue (setTimeout) dan avval ishlaydi. Tartib: sinxron (1,4) → microtask (2) → macrotask (3).",
  },
  {
    id: 134,
    type: "nazariy",
    category: "Asinxron JS",
    question: "Promise ning qanday holatlari bor?",
    options: [
      "active, done, error",
      "pending, fulfilled, rejected",
      "waiting, resolved, failed",
      "open, closed, cancelled",
    ],
    correct: 1,
    explanation: "Promise 3 holatda bo'ladi: pending (kutilmoqda), fulfilled (muvaffaqiyatli), rejected (xato). Fulfilled yoki rejected — 'settled'.",
  },
  {
    id: 135,
    type: "amaliy",
    category: "Asinxron JS",
    question: "Bu kod nima chiqaradi?",
    code: `const p = new Promise((resolve, reject) => {
  resolve(1);
  reject(2);
  resolve(3);
});
p.then(v => console.log(v));`,
    options: ["1", "2", "3", "1, 2, 3"],
    correct: 0,
    explanation: "Promise faqat bir marta settle bo'ladi. Birinchi resolve(1) qabul qilinadi, keyingi reject va resolve ignore qilinadi.",
  },
  {
    id: 136,
    type: "amaliy",
    category: "Asinxron JS",
    question: "Promise.all() qachon reject qiladi?",
    code: `Promise.all([p1, p2, p3]).then(...).catch(...);`,
    options: [
      "Birorta reject bo'lsa",
      "Hammasi reject bo'lsa",
      "Birinchisi reject bo'lsa",
      "Hech qachon reject qilmaydi",
    ],
    correct: 0,
    explanation: "Promise.all() — birorta promise reject bo'lsa, darhol reject qiladi. Barchasi fulfilled bo'lsa, natijalar massivini qaytaradi.",
  },
  {
    id: 137,
    type: "amaliy",
    category: "Asinxron JS",
    question: "Promise.allSettled() va Promise.all() farqi nima?",
    options: [
      "allSettled tezroq ishlaydi",
      "allSettled hamma promise tugashini kutadi, all birinchi xatoda to'xtaydi",
      "allSettled faqat fulfilled larni qaytaradi",
      "Hech qanday farq yo'q",
    ],
    correct: 1,
    explanation: "Promise.allSettled() — barcha promise larning natijasini (status + value/reason) qaytaradi. Xato bo'lsa ham barchasi tugashini kutadi.",
  },
  {
    id: 138,
    type: "amaliy",
    category: "Asinxron JS",
    question: "Bu kod nima chiqaradi?",
    code: `async function fetchData() {
  return 42;
}
console.log(fetchData());`,
    options: ["42", "Promise {42}", "Promise { <fulfilled>: 42 }", "undefined"],
    correct: 2,
    explanation: "async funksiya har doim Promise qaytaradi. return 42 — Promise { <fulfilled>: 42 } bo'ladi. .then() bilan qiymatni olish kerak.",
  },
  {
    id: 139,
    type: "amaliy",
    category: "Asinxron JS",
    question: "await kalit so'zi qayerda ishlatilishi mumkin?",
    options: [
      "Har qanday joyda",
      "Faqat async funksiya ichida",
      "Faqat Promise ichida",
      "Faqat try/catch ichida",
    ],
    correct: 1,
    explanation: "await — faqat async funksiya ichida (yoki module top-level da) ishlatilishi mumkin. Boshqa joyda SyntaxError beradi.",
  },
  {
    id: 140,
    type: "amaliy",
    category: "Asinxron JS",
    question: "async/await bilan xatoni qanday ushlash mumkin?",
    code: `async function getData() {
  // ...
}`,
    options: [
      ".catch() ishlatish",
      "try/catch bloki ishlatish",
      "error parametri orqali",
      "Ikkalasi ham to'g'ri",
    ],
    correct: 3,
    explanation: "async/await da xatoni try/catch yoki .catch() bilan ushlash mumkin. try/catch kodi o'qishga qulay.",
  },
  {
    id: 141,
    type: "amaliy",
    category: "Asinxron JS",
    question: "Bu kod nima chiqaradi?",
    code: `async function run() {
  const a = await Promise.resolve(1);
  const b = await Promise.resolve(2);
  return a + b;
}
run().then(console.log);`,
    options: ["3", "Promise {3}", "undefined", "12"],
    correct: 0,
    explanation: "await har bir Promise ni kutib, qiymatini oladi. a=1, b=2, a+b=3 ni then() chiqaradi.",
  },
  {
    id: 142,
    type: "amaliy",
    category: "Asinxron JS",
    question: "fetch() API nima qaytaradi?",
    options: [
      "JSON ma'lumot",
      "Promise<Response>",
      "XMLHttpRequest",
      "String",
    ],
    correct: 1,
    explanation: "fetch() — Promise<Response> qaytaradi. JSON olish uchun: const data = await (await fetch(url)).json();",
  },
  {
    id: 143,
    type: "amaliy",
    category: "Asinxron JS",
    question: "Bu kod to'g'rimi?",
    code: `const data = await fetch('https://api.example.com/data')
  .then(res => res.json());`,
    options: [
      "To'g'ri, await va .then() birga ishlatsa bo'ladi",
      "Xato, async funksiyadan tashqarida await ishlatilgan",
      "Xato, fetch await bilan ishlamaydi",
      "To'g'ri, lekin async context kerak",
    ],
    correct: 3,
    explanation: "await — async funksiya yoki module top-level da ishlaydi. async/module kontekstida to'g'ri, aks holda SyntaxError.",
  },
  {
    id: 144,
    type: "amaliy",
    category: "Asinxron JS",
    question: "Promise.race() nima qaytaradi?",
    code: `Promise.race([slow, fast, medium]).then(v => console.log(v));`,
    options: [
      "Eng tez resolve bo'lgan qiymat",
      "Barcha qiymatlar massivi",
      "Eng so'nggi qiymat",
      "Eng kichik qiymat",
    ],
    correct: 0,
    explanation: "Promise.race() — birinchi settle bo'lgan promise natijasini qaytaradi (fulfilled yoki rejected bo'lsin).",
  },
  {
    id: 145,
    type: "amaliy",
    category: "Asinxron JS",
    question: "Bu kod nima chiqaradi?",
    code: `function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function run() {
  await delay(100);
  console.log('done');
}
run();
console.log('after run');`,
    options: ["done, after run", "after run, done", "done", "after run"],
    correct: 1,
    explanation: "run() async bo'lib, await da to'xtaydi. Sinxron console.log('after run') darhol ishlaydi, keyin 100ms o'tib 'done' chiqadi.",
  },
  {
    id: 146,
    type: "nazariy",
    category: "Asinxron JS",
    question: "setTimeout va setInterval ning farqi nima?",
    options: [
      "setTimeout bir marta, setInterval takrorlanadi",
      "setTimeout tezroq ishlaydi",
      "setInterval aniqroq vaqt beradi",
      "setTimeout promis qaytaradi",
    ],
    correct: 0,
    explanation: "setTimeout — bir marta delay dan keyin ishlaydi. setInterval — har delay da qayta-qayta ishlaydi. clearInterval() bilan to'xtatiladi.",
  },
  {
    id: 147,
    type: "amaliy",
    category: "Asinxron JS",
    question: "Bu kod nima muammo yaratadi?",
    code: `async function getUser() {
  const user = await fetchUser();
  const posts = await fetchPosts(user.id);
  const comments = await fetchComments(posts[0].id);
  return comments;
}`,
    options: [
      "Xato yo'q",
      "Sequential await — requestlar ketma-ket ishlaydi, parallel emas",
      "Promise emas",
      "Callback hell",
    ],
    correct: 1,
    explanation: "Har await oldingi tugashini kutadi. fetchUser, fetchPosts, fetchComments ketma-ket ishlaydi. Mustaqil bo'lsa Promise.all() bilan parallel qilish yaxshiroq.",
  },
  {
    id: 148,
    type: "amaliy",
    category: "Asinxron JS",
    question: "queueMicrotask() nima qiladi?",
    options: [
      "setTimeout(fn, 0) bilan bir xil",
      "Microtask queue ga funksiya qo'shadi",
      "Promise yaratadi",
      "Web Worker ishlatadi",
    ],
    correct: 1,
    explanation: "queueMicrotask(fn) — microtask queue ga funksiya qo'shadi. Promise.resolve().then(fn) bilan bir xil, lekin yanada to'g'ridan-to'g'ri.",
  },
  {
    id: 149,
    type: "amaliy",
    category: "Asinxron JS",
    question: "Bu kod nima chiqaradi?",
    code: `async function test() {
  try {
    const result = await Promise.reject(new Error('fail'));
  } catch(e) {
    console.log(e.message);
  }
}
test();`,
    options: ["'fail'", "undefined", "Error: fail", "Xato chiqmaydi"],
    correct: 0,
    explanation: "await rejected Promise — try/catch da ushlash mumkin. e.message = 'fail' chiqadi.",
  },
  {
    id: 150,
    type: "nazariy",
    category: "Asinxron JS",
    question: "AbortController nima uchun ishlatiladi?",
    options: [
      "Promise ni bekor qilish uchun",
      "fetch so'rovini to'xtatish uchun",
      "async funksiyani to'xtatish uchun",
      "setTimeout ni tozalash uchun",
    ],
    correct: 1,
    explanation: "AbortController — fetch so'rovini bekor qilish imkonini beradi. signal: controller.signal, to'xtatish uchun controller.abort().",
  },

  // OOP / Class (151-165)
  {
    id: 151,
    type: "amaliy",
    category: "OOP",
    question: "Bu kod nima chiqaradi?",
    code: `class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return \`\${this.name} gapiradi\`;
  }
}
const a = new Animal('Sher');
console.log(a.speak());`,
    options: ["'Sher gapiradi'", "'undefined gapiradi'", "Error", "'Animal gapiradi'"],
    correct: 0,
    explanation: "constructor this.name = name o'rnatadi. speak() this.name ni qaytaradi — 'Sher gapiradi'.",
  },
  {
    id: 152,
    type: "amaliy",
    category: "OOP",
    question: "extends va super kalit so'zlari nima qiladi?",
    code: `class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}`,
    options: [
      "extends — new class, super — parent constructor chaqiradi",
      "extends — copy qiladi, super — this ni o'rnatadi",
      "extends — interface, super — implement",
      "Ikkalasi bir xil",
    ],
    correct: 0,
    explanation: "extends — meros olish. super(name) — parent class konstruktorini chaqiradi. super() dan oldin this ishlatib bo'lmaydi.",
  },
  {
    id: 153,
    type: "amaliy",
    category: "OOP",
    question: "Bu kod nima chiqaradi?",
    code: `class Counter {
  #count = 0;
  increment() { this.#count++; }
  get value() { return this.#count; }
}
const c = new Counter();
c.increment();
c.increment();
console.log(c.value);`,
    options: ["0", "1", "2", "Error: #count is private"],
    correct: 2,
    explanation: "Private field (#count) faqat class ichidan yetib bo'ladi. increment() ikki marta chaqirildi, value = 2.",
  },
  {
    id: 154,
    type: "amaliy",
    category: "OOP",
    question: "Bu kod nima chiqaradi?",
    code: `class Car {
  static count = 0;
  constructor() {
    Car.count++;
  }
}
new Car(); new Car(); new Car();
console.log(Car.count);`,
    options: ["0", "1", "3", "undefined"],
    correct: 2,
    explanation: "static xususiyatlar instansiyaga emas, sinfning o'ziga tegishli. Har new Car() count++ qiladi: natija 3.",
  },
  {
    id: 155,
    type: "amaliy",
    category: "OOP",
    question: "instanceof operatori nima tekshiradi?",
    code: `class A {}
class B extends A {}
const b = new B();
console.log(b instanceof A);`,
    options: ["false", "true", "Error", "undefined"],
    correct: 1,
    explanation: "instanceof — prototip zanjirini tekshiradi. B extends A, shuning uchun b instanceof A === true.",
  },
  {
    id: 156,
    type: "amaliy",
    category: "OOP",
    question: "Bu kod nima chiqaradi?",
    code: `class Shape {
  area() { return 0; }
}
class Circle extends Shape {
  constructor(r) {
    super();
    this.r = r;
  }
  area() { return Math.PI * this.r ** 2; }
}
const c = new Circle(1);
console.log(c.area().toFixed(2));`,
    options: ["'3.14'", "'0.00'", "'6.28'", "Error"],
    correct: 0,
    explanation: "Circle.area() parent methodini override qiladi. Math.PI * 1^2 ≈ 3.14159..., toFixed(2) — '3.14'.",
  },
  {
    id: 157,
    type: "nazariy",
    category: "OOP",
    question: "getter va setter nima uchun ishlatiladi?",
    options: [
      "Funksiyalarni chaqirish uchun",
      "Xususiyatlarga kirishni boshqarish va validatsiya uchun",
      "Private fieldlarni o'chirish uchun",
      "Static methodlar uchun",
    ],
    correct: 1,
    explanation: "get/set — xususiyatga o'qish/yozishda avtomatik chaqiriladi. Validatsiya, computed qiymatlar, side effect lar uchun foydali.",
  },
  {
    id: 158,
    type: "amaliy",
    category: "OOP",
    question: "Bu kod nima chiqaradi?",
    code: `class Person {
  #name;
  constructor(name) { this.#name = name; }
  get name() { return this.#name; }
  set name(v) {
    if(typeof v !== 'string') throw new Error('Xato!');
    this.#name = v;
  }
}
const p = new Person('Ali');
p.name = 'Vali';
console.log(p.name);`,
    options: ["'Ali'", "'Vali'", "Error", "undefined"],
    correct: 1,
    explanation: "setter name validatsiya qilib, #name ni o'rnatadi. 'Vali' string — xato yo'q. getter #name qaytaradi: 'Vali'.",
  },
  {
    id: 159,
    type: "amaliy",
    category: "OOP",
    question: "Object.create() nima qiladi?",
    code: `const proto = { greet() { return 'Salom'; } };
const obj = Object.create(proto);
console.log(obj.greet());`,
    options: ["Error", "'Salom'", "undefined", "'greet'"],
    correct: 1,
    explanation: "Object.create(proto) — proto ni prototype sifatida ishlatib yangi obyekt yaratadi. obj.greet() prototip zanjiri orqali topiladi.",
  },
  {
    id: 160,
    type: "nazariy",
    category: "OOP",
    question: "Prototype chain nima?",
    options: [
      "Sinflar zanjiri",
      "Har bir obyekt o'z prototipiga havolasini saqlaydi",
      "Private field lar ro'yxati",
      "Method overriding",
    ],
    correct: 1,
    explanation: "Prototype chain — har bir obyekt __proto__ orqali o'z prototipiga, u esa o'z prototipiga bog'langan. Xususiyat topilmasa, zanjir bo'ylab qidiriladi.",
  },
  {
    id: 161,
    type: "amaliy",
    category: "OOP",
    question: "Bu kod nima chiqaradi?",
    code: `function Foo() {}
Foo.prototype.bar = 42;
const f = new Foo();
console.log(f.bar);
console.log(f.hasOwnProperty('bar'));`,
    options: ["42, true", "42, false", "undefined, false", "Error"],
    correct: 1,
    explanation: "bar prototipda, f da emas. f.bar prototip zanjiri orqali 42 topiladi. hasOwnProperty('bar') — false (o'zida yo'q).",
  },
  {
    id: 162,
    type: "amaliy",
    category: "OOP",
    question: "Mixins nima uchun ishlatiladi?",
    options: [
      "Multiple inheritance ni simulatsiya qilish",
      "Private field yaratish",
      "Singleton pattern",
      "Event handling",
    ],
    correct: 0,
    explanation: "JavaScript da faqat bitta parent class dan meros olish mumkin. Mixins — bir nechta obyektdan method larni birlashtirish usuli (Object.assign).",
  },
  {
    id: 163,
    type: "amaliy",
    category: "OOP",
    question: "Bu kod nima chiqaradi?",
    code: `class EventEmitter {
  #listeners = {};
  on(event, fn) {
    (this.#listeners[event] ??= []).push(fn);
  }
  emit(event, data) {
    this.#listeners[event]?.forEach(fn => fn(data));
  }
}
const ee = new EventEmitter();
ee.on('data', v => console.log(v));
ee.emit('data', 42);`,
    options: ["42", "undefined", "Error", "[]"],
    correct: 0,
    explanation: "on() listener qo'shadi, emit() barcha listenerlarni chaqiradi. v = 42 chiqadi.",
  },
  {
    id: 164,
    type: "nazariy",
    category: "OOP",
    question: "class vs function constructor o'rtasidagi asosiy farq nima?",
    options: [
      "class tezroq ishlaydi",
      "class new bilan chaqirilishi shart, function ixtiyoriy",
      "function prototype yaratmaydi",
      "class private fieldlarni qo'llab-quvvatlamaydi",
    ],
    correct: 1,
    explanation: "class new bilan chaqirilishi shart (TypeError aks holda). Function constructor new bo'lmasdan ham chaqiriladi. class ham sintaktik sugar, prototype asosida ishlaydi.",
  },
  {
    id: 165,
    type: "amaliy",
    category: "OOP",
    question: "Bu kod nima chiqaradi?",
    code: `class A {
  foo() { return 'A'; }
}
class B extends A {
  foo() { return super.foo() + 'B'; }
}
class C extends B {
  foo() { return super.foo() + 'C'; }
}
console.log(new C().foo());`,
    options: ["'ABC'", "'CBA'", "'C'", "Error"],
    correct: 0,
    explanation: "C.foo() super (B.foo()) + 'C', B.foo() super (A.foo()) + 'B', A.foo() 'A'. Natija: 'A'+'B'+'C' = 'ABC'.",
  },

  // ES Modules (166-172)
  {
    id: 166,
    type: "nazariy",
    category: "ES Modules",
    question: "Named export va default export ning farqi nima?",
    options: [
      "Hech qanday farq yo'q",
      "Bir fayldan faqat bitta default export, lekin ko'p named export bo'lishi mumkin",
      "default export tezroq import qilinadi",
      "named export faqat funksiyalar uchun",
    ],
    correct: 1,
    explanation: "Bir faylda bitta default export bo'lishi mumkin (import x from '...'). Named export esa ko'p bo'lishi mumkin (import { x, y } from '...').",
  },
  {
    id: 167,
    type: "amaliy",
    category: "ES Modules",
    question: "Bu import to'g'rimi?",
    code: `// utils.js da: export const add = (a,b) => a+b;
import add from './utils.js';`,
    options: [
      "To'g'ri",
      "Xato: named export, {} kerak",
      "Xato: .js kengaytma yo'q",
      "To'g'ri, default sifatida ham import qilsa bo'ladi",
    ],
    correct: 1,
    explanation: "add — named export, {} bilan import qilinadi: import { add } from './utils.js'. Jingalak qavssiz import — default export uchun.",
  },
  {
    id: 168,
    type: "amaliy",
    category: "ES Modules",
    question: "Dynamic import sintaksisi qanday?",
    options: [
      "require('./module')",
      "import('./module').then(...)",
      "import { lazy } './module'",
      "load('./module')",
    ],
    correct: 1,
    explanation: "import('./module') — dinamik import, Promise qaytaradi. Code splitting va lazy loading uchun ishlatiladi.",
  },
  {
    id: 169,
    type: "amaliy",
    category: "ES Modules",
    question: "Bu kod nima chiqaradi?",
    code: `// a.js: export const x = 1;
// b.js: import { x } from './a.js'; x = 2;`,
    options: [
      "x = 2 o'rnatiladi",
      "TypeError: Assignment to constant variable",
      "SyntaxError",
      "x = 1 qoladi",
    ],
    correct: 1,
    explanation: "Import qilingan named binding lar read-only. Ularni to'g'ridan o'rnatib bo'lmaydi — TypeError chiqadi.",
  },
  {
    id: 170,
    type: "amaliy",
    category: "ES Modules",
    question: "import * as nima qiladi?",
    code: `import * as utils from './utils.js';`,
    options: [
      "Default export ni import qiladi",
      "Barcha named export larni bitta obyektga import qiladi",
      "Faylni execute qiladi",
      "Lazy import qiladi",
    ],
    correct: 1,
    explanation: "import * as utils — barcha named export larni utils obyektiga yig'adi. utils.add(), utils.subtract() kabi foydalaniladi.",
  },
  {
    id: 171,
    type: "nazariy",
    category: "ES Modules",
    question: "ES Modules (ESM) va CommonJS (require) ning asosiy farqi nima?",
    options: [
      "ESM sinxron, CJS asinxron",
      "ESM statik tahlil qilinadi, CJS dinamik",
      "CJS faqat Node.js da ishlaydi",
      "B va C to'g'ri",
    ],
    correct: 3,
    explanation: "ESM — statik tahlil va tree-shaking imkoniyati, CJS — runtime da dinamik. CJS asosan Node.js, ESM esa brauzer ham Node.js 12+ da.",
  },
  {
    id: 172,
    type: "amaliy",
    category: "ES Modules",
    question: "Re-export sintaksisi qanday?",
    code: `// index.js dan utils.js ni re-export qilish`,
    options: [
      "import { x } from './utils'; export x;",
      "export { x } from './utils';",
      "export * from './utils'; yoki export { x } from './utils';",
      "module.exports = require('./utils');",
    ],
    correct: 2,
    explanation: "Re-export: export { x } from './utils' yoki export * from './utils'. Bu import qilmay, to'g'ridan export qiladi.",
  },

  // Xato boshqarish (173-179)
  {
    id: 173,
    type: "amaliy",
    category: "Xato boshqarish",
    question: "Bu kod nima chiqaradi?",
    code: `try {
  throw new TypeError('Xato!');
} catch(e) {
  console.log(e instanceof TypeError);
  console.log(e.message);
}`,
    options: ["true, 'Xato!'", "false, 'Xato!'", "true, TypeError", "Error"],
    correct: 0,
    explanation: "catch(e) xato obyektini oladi. e instanceof TypeError — true, e.message — 'Xato!'.",
  },
  {
    id: 174,
    type: "nazariy",
    category: "Xato boshqarish",
    question: "finally bloki qachon ishlaydi?",
    options: [
      "Faqat xato bo'lganda",
      "Faqat muvaffaqiyatli bo'lganda",
      "Har doim, xato bo'lsa ham bo'lmasa ham",
      "Faqat return dan keyin",
    ],
    correct: 2,
    explanation: "finally — har doim ishlaydi. try-catch tugagandan keyin, return bo'lsa ham, throw bo'lsa ham. Resurslarni tozalash uchun ishlatiladi.",
  },
  {
    id: 175,
    type: "amaliy",
    category: "Xato boshqarish",
    question: "Custom Error yaratish uchun to'g'ri usul qaysi?",
    code: `class ValidationError extends ___`,
    options: [
      "extends TypeError {}",
      "extends Error { constructor(msg) { super(msg); } }",
      "extends BaseError {}",
      "extends Exception {}",
    ],
    correct: 1,
    explanation: "Custom error — Error sinfini extend qiladi. super(msg) — parent Error constructor chaqiradi. name ni ham o'rnatish yaxshi: this.name = 'ValidationError'.",
  },
  {
    id: 176,
    type: "amaliy",
    category: "Xato boshqarish",
    question: "Bu kod nima chiqaradi?",
    code: `function risky() {
  try {
    throw new Error('fail');
  } finally {
    return 'safe';
  }
}
console.log(risky());`,
    options: ["Error: fail", "'safe'", "undefined", "null"],
    correct: 1,
    explanation: "finally ichida return — xatoni ham, try dagi return ni ham override qiladi. Natija: 'safe'. (Bu pattern qo'llanilmasligi kerak)",
  },
  {
    id: 177,
    type: "amaliy",
    category: "Xato boshqarish",
    question: "Error tur laridan qaysi biri mavjud emas?",
    options: ["TypeError", "RangeError", "NetworkError", "SyntaxError"],
    correct: 2,
    explanation: "NetworkError — standart JavaScript Error turi emas. TypeError, RangeError, SyntaxError, ReferenceError, URIError, EvalError mavjud.",
  },
  {
    id: 178,
    type: "amaliy",
    category: "Xato boshqarish",
    question: "Bu kod nima chiqaradi?",
    code: `async function main() {
  await Promise.reject(new Error('async xato'));
}
main().catch(e => console.log(e.message));`,
    options: ["'async xato'", "undefined", "Error chiqmaydi", "Unhandled rejection"],
    correct: 0,
    explanation: ".catch() rejected promise ni ushlaydi. e.message = 'async xato'. .catch() bo'lmasa — UnhandledPromiseRejection.",
  },
  {
    id: 179,
    type: "nazariy",
    category: "Xato boshqarish",
    question: "window.onerror va window.addEventListener('unhandledrejection') nima uchun ishlatiladi?",
    options: [
      "Faqat debug uchun",
      "Global darajada ushlashga ulgurilmagan xatolarni qayd qilish",
      "Event listenerlarni o'chirish",
      "Promise yaratish",
    ],
    correct: 1,
    explanation: "Global xato ushlash — monitoring/logging uchun. onerror sinxron xatolarni, unhandledrejection esa Promise rejection larni ushlaydi.",
  },

  // Ilg'or mavzular (180-200)
  {
    id: 180,
    type: "amaliy",
    category: "Ilg'or mavzular",
    question: "Generator funksiya qanday yaratiladi?",
    code: `function___ gen() {
  yield 1;
  yield 2;
}`,
    options: ["function* gen()", "function gen*()", "async function gen()", "function gen()"],
    correct: 0,
    explanation: "Generator — function* sintaksisi bilan yaratiladi. yield — qiymat qaytarib, funksiyani to'xtatadi. next() bilan davom ettiriladi.",
  },
  {
    id: 181,
    type: "amaliy",
    category: "Ilg'or mavzular",
    question: "Bu kod nima chiqaradi?",
    code: `function* counter() {
  let i = 0;
  while(true) yield i++;
}
const gen = counter();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);`,
    options: ["0, 1, 2", "1, 2, 3", "0, 0, 0", "undefined x3"],
    correct: 0,
    explanation: "Generator holat saqlaydi. Har next() yield gacha ishlaydi. i++ ketma-ket 0, 1, 2 qaytaradi.",
  },
  {
    id: 182,
    type: "amaliy",
    category: "Ilg'or mavzular",
    question: "Proxy nima qiladi?",
    code: `const handler = {
  get(target, key) {
    return key in target ? target[key] : 'topilmadi';
  }
};
const p = new Proxy({a: 1}, handler);
console.log(p.a);
console.log(p.b);`,
    options: ["1, undefined", "1, 'topilmadi'", "Error, Error", "undefined, undefined"],
    correct: 1,
    explanation: "Proxy get trap — mavjud bo'lmagan key uchun 'topilmadi' qaytaradi. p.a = 1 (mavjud), p.b = 'topilmadi'.",
  },
  {
    id: 183,
    type: "nazariy",
    category: "Ilg'or mavzular",
    question: "WeakMap va Map ning asosiy farqi nima?",
    options: [
      "WeakMap faqat string key qabul qiladi",
      "WeakMap key lar weak reference, GC tozalashi mumkin",
      "WeakMap ko'proq ma'lumot saqlaydi",
      "Map eski, WeakMap yangi",
    ],
    correct: 1,
    explanation: "WeakMap — key lar weak reference (faqat obyekt). Key ning boshqa reference yo'q bo'lsa, GC uni tozalaydi. Xotira muammolarini oldini oladi.",
  },
  {
    id: 184,
    type: "amaliy",
    category: "Ilg'or mavzular",
    question: "Symbol nima uchun ishlatiladi?",
    code: `const id = Symbol('id');
const obj = { [id]: 123 };
console.log(obj[id]);`,
    options: ["Error", "undefined", "123", "'id'"],
    correct: 2,
    explanation: "Symbol — noyob identifikator yaratadi. Computed property sifatida ishlatiladi. for...in va Object.keys() da ko'rinmaydi.",
  },
  {
    id: 185,
    type: "amaliy",
    category: "Ilg'or mavzular",
    question: "Bu kod nima chiqaradi?",
    code: `const obj = {
  [Symbol.iterator]() {
    let i = 0;
    return {
      next() {
        return i < 3 ? { value: i++, done: false } : { done: true };
      }
    };
  }
};
console.log([...obj]);`,
    options: ["[0, 1, 2]", "[]", "Error", "undefined"],
    correct: 0,
    explanation: "Symbol.iterator — custom iterable yaratadi. Spread operator (...) iteratorni ishlatadi: [0, 1, 2].",
  },
  {
    id: 186,
    type: "amaliy",
    category: "Ilg'or mavzular",
    question: "Reflect.ownKeys() nima qaytaradi?",
    code: `const sym = Symbol('s');
const obj = { a: 1, [sym]: 2 };
console.log(Reflect.ownKeys(obj));`,
    options: ["['a']", "['a', sym]", "[sym]", "['a', 's']"],
    correct: 1,
    explanation: "Reflect.ownKeys() — barcha key larni (string va Symbol ham) qaytaradi: ['a', Symbol(s)].",
  },
  {
    id: 187,
    type: "amaliy",
    category: "Ilg'or mavzular",
    question: "Bu debounce implementatsiyasi nima qiladi?",
    code: `function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}`,
    options: [
      "Funksiyani delay ms dan keyin bir marta chaqiradi",
      "Funksiyani har delay ms da chaqiradi",
      "So'nggi chaqirishdan delay ms o'tgach bir marta chaqiradi",
      "Funksiyani delay marta chaqiradi",
    ],
    correct: 2,
    explanation: "Debounce — tez-tez chaqirishda har safar timer reset qiladi. Faqat so'nggi chaqirishdan delay ms o'tgach ishlaydi (search input uchun foydali).",
  },
  {
    id: 188,
    type: "amaliy",
    category: "Ilg'or mavzular",
    question: "Bu throttle implementatsiyasi qanday ishlaydi?",
    code: `function throttle(fn, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}`,
    options: [
      "Funksiyani faqat bir marta chaqiradi",
      "Har limit ms da bir marta ishlashiga ruxsat beradi",
      "Debounce bilan bir xil",
      "Funksiyani limit marta chaqiradi",
    ],
    correct: 1,
    explanation: "Throttle — qancha tez chaqirilsa ham, har limit ms da bir marta ishlaydi. Scroll/resize event lari uchun foydali.",
  },
  {
    id: 189,
    type: "amaliy",
    category: "Ilg'or mavzular",
    question: "Bu kod nima chiqaradi?",
    code: `function* fibonacci() {
  let [a, b] = [0, 1];
  while(true) {
    yield a;
    [a, b] = [b, a + b];
  }
}
const fib = fibonacci();
const result = Array.from({length: 5}, () => fib.next().value);
console.log(result);`,
    options: ["[0, 1, 1, 2, 3]", "[1, 1, 2, 3, 5]", "[0, 1, 2, 3, 4]", "Error"],
    correct: 0,
    explanation: "Fibonacci generator: 0, 1, 1, 2, 3, 5... Array.from 5 ta qiymat oladi: [0, 1, 1, 2, 3].",
  },
  {
    id: 190,
    type: "amaliy",
    category: "Ilg'or mavzular",
    question: "Object.freeze() va Object.seal() farqi nima?",
    options: [
      "freeze yangi property ham qo'sha olmaydi, mavjudlarini ham o'zgartira olmaydi; seal yangi qo'sha olmaydi lekin mavjudlarini o'zgartirsa bo'ladi",
      "Hech qanday farq yo'q",
      "seal to'liq o'zgarmas, freeze faqat yangi property bloklaydi",
      "freeze deep, seal shallow",
    ],
    correct: 0,
    explanation: "Object.freeze() — hech narsa o'zgartirb bo'lmaydi (add/delete/modify). Object.seal() — yangi qo'shib/o'chirib bo'lmaydi, lekin mavjudlarini o'zgartirsa bo'ladi.",
  },
  {
    id: 191,
    type: "amaliy",
    category: "Ilg'or mavzular",
    question: "Bu kod nima chiqaradi?",
    code: `const handler = {
  set(target, key, value) {
    if(typeof value !== 'number') throw new TypeError('Faqat raqam!');
    target[key] = value;
    return true;
  }
};
const nums = new Proxy({}, handler);
nums.x = 5;
console.log(nums.x);`,
    options: ["5", "Error", "undefined", "true"],
    correct: 0,
    explanation: "Proxy set trap — value ni tekshirib, agar number bo'lsa o'rnatadi. nums.x = 5 (number) — muvaffaqiyatli. nums.x = 5 chiqadi.",
  },
  {
    id: 192,
    type: "nazariy",
    category: "Ilg'or mavzular",
    question: "Memoization nima?",
    options: [
      "Xotirani tozalash usuli",
      "Funksiya natijalarini cache qilib, qayta hisoblashdan qochish",
      "Async funksiya yaratish",
      "Loop optimallashtirish",
    ],
    correct: 1,
    explanation: "Memoization — bir xil argument uchun natijani cache da saqlash. Qayta chaqirilganda cache dan qaytaradi. Fibonacci, faktorial kabi funksiyalarda foydali.",
  },
  {
    id: 193,
    type: "amaliy",
    category: "Ilg'or mavzular",
    question: "Bu kod nima chiqaradi?",
    code: `const cache = new Map();
function memoAdd(a, b) {
  const key = \`\${a},\${b}\`;
  if(cache.has(key)) return cache.get(key);
  const result = a + b;
  cache.set(key, result);
  return result;
}
console.log(memoAdd(1, 2));
console.log(memoAdd(1, 2));`,
    options: ["3, 3 (ikkinchi cache dan)", "3, undefined", "Error", "6"],
    correct: 0,
    explanation: "Birinchi chaqirishda hisoblaydi va cache ga saqlaydi. Ikkinchisida cache.has() true bo'lib, cache dan 3 qaytaradi.",
  },
  {
    id: 194,
    type: "amaliy",
    category: "Ilg'or mavzular",
    question: "Currying nima va qanday ishlaydi?",
    code: `const multiply = a => b => a * b;
const double = multiply(2);
console.log(double(5));`,
    options: ["Error", "10", "undefined", "25"],
    correct: 1,
    explanation: "Currying — ko'p argumentli funksiyani bir argumentli funksiyalar zanjiriga aylantiradi. multiply(2) => b => 2*b, double(5) = 2*5 = 10.",
  },
  {
    id: 195,
    type: "amaliy",
    category: "Ilg'or mavzular",
    question: "Bu kod nima chiqaradi?",
    code: `const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const addOne = x => x + 1;
const double = x => x * 2;
const square = x => x ** 2;
console.log(compose(square, double, addOne)(3));`,
    options: ["64", "49", "36", "256"],
    correct: 0,
    explanation: "compose o'ngdan chapga qo'llaydi: addOne(3)=4, double(4)=8, square(8)=64.",
  },
  {
    id: 196,
    type: "nazariy",
    category: "Ilg'or mavzular",
    question: "requestAnimationFrame nima uchun ishlatiladi?",
    options: [
      "setTimeout bilan bir xil",
      "Animatsiyalarni ekran yangilanishi bilan sinxron qilish",
      "Promise yaratish",
      "Web Worker bilan ishlash",
    ],
    correct: 1,
    explanation: "requestAnimationFrame — brauzer keyingi ekran yangilanishidan (60fps = 16.6ms) oldin callback ni chaqiradi. Animatsiya uchun setTimeout dan yaxshiroq.",
  },
  {
    id: 197,
    type: "amaliy",
    category: "Ilg'or mavzular",
    question: "IntersectionObserver nima uchun ishlatiladi?",
    options: [
      "DOM o'zgarishlarini kuzatish",
      "Element viewport ga kirganini kuzatish",
      "Event tinglash",
      "Performance o'lchash",
    ],
    correct: 1,
    explanation: "IntersectionObserver — element viewport ga kirganda/chiqqanda xabar beradi. Lazy loading, infinite scroll, animatsiya trigger uchun foydali.",
  },
  {
    id: 198,
    type: "amaliy",
    category: "Ilg'or mavzular",
    question: "Bu kod nima chiqaradi?",
    code: `const p = new Proxy([], {
  get(target, key) {
    return key in target ? target[key] : -1;
  }
});
p.push(5);
p.push(10);
console.log(p[0]);
console.log(p[5]);`,
    options: ["5, -1", "5, undefined", "10, -1", "Error"],
    correct: 0,
    explanation: "Proxy get trap — mavjud indeks uchun qiymat, mavjud bo'lmagan uchun -1. p[0]=5 (mavjud), p[5]=-1 (yo'q).",
  },
  {
    id: 199,
    type: "amaliy",
    category: "Ilg'or mavzular",
    question: "Tagged template literal nima?",
    code: `function tag(strings, ...values) {
  return strings.raw[0] + values[0];
}
const name = 'Dunyo';
console.log(tag\`Salom \${name}!\`);`,
    options: ["'Salom Dunyo!'", "'Salom '", "Error", "'Dunyo'"],
    correct: 0,
    explanation: "Tagged template — funksiya template literal ni qayta ishlaydi. strings.raw[0]='Salom ', values[0]='Dunyo'. Natija: 'Salom Dunyo'.",
  },
  {
    id: 200,
    type: "amaliy",
    category: "Ilg'or mavzular",
    question: "Bu kod nima chiqaradi?",
    code: `class Observable {
  #subscribers = [];
  subscribe(fn) { this.#subscribers.push(fn); return this; }
  next(value) { this.#subscribers.forEach(fn => fn(value)); return this; }
}
const obs = new Observable();
obs.subscribe(v => console.log('A:', v))
   .subscribe(v => console.log('B:', v))
   .next(42);`,
    options: ["'A: 42', 'B: 42'", "'A: 42'", "'B: 42'", "Error"],
    correct: 0,
    explanation: "Observer pattern. subscribe ikki subscriber qo'shadi, next(42) ikkalasini chaqiradi: 'A: 42', 'B: 42'.",
  },
];
