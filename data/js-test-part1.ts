import { TestQuestion } from "./html-test";

// ─── JavaScript Test — Part 1 (1-100) ──────────────────────────────────────

export const jsTestPart1: TestQuestion[] = [

  // ── KIRISH (1-10) ──────────────────────────────────────────────────────────
  {
    id: 1,
    type: "nazariy",
    category: "Kirish",
    question: "JavaScript qachon va kim tomonidan yaratilgan?",
    options: [
      "1991-yil, Tim Berners-Lee",
      "1995-yil, Brendan Eich",
      "2000-yil, Guido van Rossum",
      "1998-yil, James Gosling",
    ],
    correct: 1,
    explanation: "JavaScript 1995-yilda Brendan Eich tomonidan Netscape uchun atigi 10 kunda yaratilgan.",
  },
  {
    id: 2,
    type: "nazariy",
    category: "Kirish",
    question: "JavaScript va Java o'rtasidagi munosabat qanday?",
    options: [
      "Java ning kichik versiyasi",
      "Java asosida yaratilgan",
      "Hech qanday aloqasi yo'q — faqat marketing sabab shu nom",
      "Java bilan bir kompaniya mahsuloti",
    ],
    correct: 2,
    explanation: "JavaScript va Java mutlaqo boshqa tillar. Nom o'xshashligining sababi faqat marketing — o'sha paytda Java mashhur edi.",
  },
  {
    id: 3,
    type: "nazariy",
    category: "Kirish",
    question: "Brauzerda JavaScript ni qaysi engine ishlatadi (Chrome uchun)?",
    options: ["SpiderMonkey", "JavaScriptCore", "V8", "Chakra"],
    correct: 2,
    explanation: "Chrome va Edge da V8 engine ishlatiladi. Firefox — SpiderMonkey, Safari — JavaScriptCore.",
  },
  {
    id: 4,
    type: "nazariy",
    category: "Kirish",
    question: "JavaScript qanday dasturlash paradigmasiga kiradi?",
    options: [
      "Faqat OOP",
      "Faqat funksional",
      "Multi-paradigm: OOP, funksional, imperativ",
      "Faqat imperativ",
    ],
    correct: 2,
    explanation: "JavaScript multi-paradigma: OOP (class), funksional (HOF, closure), imperativ (for, if) — barchasini qo'llab-quvvatlaydi.",
  },
  {
    id: 5,
    type: "nazariy",
    category: "Kirish",
    question: "JavaScript ni HTML ga ulashda qaysi teg ishlatiladi?",
    options: ["&lt;js&gt;", "&lt;code&gt;", "&lt;script&gt;", "&lt;link&gt;"],
    correct: 2,
    explanation: "&lt;script&gt; tegi HTML ga JavaScript kodni ulash uchun ishlatiladi.",
  },
  {
    id: 6,
    type: "nazariy",
    category: "Kirish",
    question: "defer atributi &lt;script&gt; tegida nima qiladi?",
    options: [
      "Scriptni o'chirib qo'yadi",
      "HTML to'liq yuklangach scriptni ishlatadi",
      "Scriptni parallel yuklaydi va darhol ishlatadi",
      "Scriptni keshga oladi",
    ],
    correct: 1,
    explanation: "defer — HTML to'liq parse qilingandan keyin script ishlatiladi. DOMContentLoaded dan oldin.",
  },
  {
    id: 7,
    type: "amaliy",
    category: "Kirish",
    question: "Quyidagi kod nima chiqaradi?",
    code: `console.log("Salom");
console.log("Dunyo");`,
    options: [
      "Salom Dunyo",
      "Salom\\nDunyo (ikki qatorda)",
      "Faqat 'Salom'",
      "Xato chiqaradi",
    ],
    correct: 1,
    explanation: "console.log() har chaqiruvda yangi qatorda chiqaradi. Natija: 'Salom' (1-qator), 'Dunyo' (2-qator).",
  },
  {
    id: 8,
    type: "nazariy",
    category: "Kirish",
    question: "JavaScript single-threaded degan nima?",
    options: [
      "Faqat bitta fayl ishlay oladi",
      "Bir vaqtda faqat bitta kod bajariladi",
      "Bitta brauzer window da ishlaydi",
      "Bitta funksiyaga ega",
    ],
    correct: 1,
    explanation: "JavaScript single-threaded — Call Stack bir vaqtda faqat bitta funksiyani ishlatadi.",
  },
  {
    id: 9,
    type: "nazariy",
    category: "Kirish",
    question: "ECMAScript nima?",
    options: [
      "JavaScript ning boshqa nomi",
      "JavaScript engine",
      "JavaScript ning standart spetsifikatsiyasi",
      "JavaScript kutubxonasi",
    ],
    correct: 2,
    explanation: "ECMAScript — JavaScript ning rasmiy standarti. ES6 (2015) zamonaviy JS ning boshi hisoblanadi.",
  },
  {
    id: 10,
    type: "amaliy",
    category: "Kirish",
    question: "JavaScript kommentlar qanday yoziladi?",
    code: `// Bu bir qatorli komment
/* Bu
   ko'p qatorli
   komment */`,
    options: [
      "# bitta qatorli, ## ko'p qatorli",
      "// bitta qatorli, /* */ ko'p qatorli",
      "-- bitta qatorli, <!-- --> ko'p qatorli",
      "' bitta qatorli, ''' ko'p qatorli",
    ],
    correct: 1,
    explanation: "JavaScript da // — bitta qatorli komment, /* ... */ — ko'p qatorli komment.",
  },

  // ── O'ZGARUVCHILAR (11-25) ─────────────────────────────────────────────────
  {
    id: 11,
    type: "nazariy",
    category: "O'zgaruvchilar",
    question: "let, const va var dan qaysi biri block scope da ishlaydi?",
    options: [
      "Faqat var",
      "Faqat let",
      "let va const",
      "Uchala ham",
    ],
    correct: 2,
    explanation: "let va const — block scope ({} qavslar ichida). var — function scope (block scope siz).",
  },
  {
    id: 12,
    type: "amaliy",
    category: "O'zgaruvchilar",
    question: "Quyidagi kod nima chiqaradi?",
    code: `const x = 5;
x = 10;
console.log(x);`,
    options: [
      "10",
      "5",
      "undefined",
      "TypeError: Assignment to constant variable",
    ],
    correct: 3,
    explanation: "const bilan e'lon qilingan o'zgaruvchiga qayta qiymat berish TypeError xato beradi.",
  },
  {
    id: 13,
    type: "amaliy",
    category: "O'zgaruvchilar",
    question: "Quyidagi kodning natijasi nima?",
    code: `console.log(x);
var x = 5;`,
    options: [
      "5",
      "ReferenceError",
      "undefined",
      "null",
    ],
    correct: 2,
    explanation: "var hoisting — e'lon yuqoriga ko'tariladi lekin qiymati ko'tarilmaydi. Shuning uchun undefined chiqadi.",
  },
  {
    id: 14,
    type: "amaliy",
    category: "O'zgaruvchilar",
    question: "Quyidagi kodning natijasi nima?",
    code: `console.log(y);
let y = 5;`,
    options: [
      "5",
      "undefined",
      "ReferenceError: Cannot access 'y' before initialization",
      "null",
    ],
    correct: 2,
    explanation: "let TDZ (Temporal Dead Zone) da — e'lon qilinguncha kirish mumkin emas. ReferenceError.",
  },
  {
    id: 15,
    type: "nazariy",
    category: "O'zgaruvchilar",
    question: "Qaysi o'zgaruvchi nomlanishi to'g'ri?",
    options: [
      "let 1son = 5",
      "let my-var = 5",
      "let myVar = 5",
      "let let = 5",
    ],
    correct: 2,
    explanation: "camelCase — myVar to'g'ri. Raqam bilan boshlash, tire (-) va JS kalit so'zlari (let) ishlatib bo'lmaydi.",
  },
  {
    id: 16,
    type: "amaliy",
    category: "O'zgaruvchilar",
    question: "Quyidagi kod xato beradimi?",
    code: `const arr = [1, 2, 3];
arr.push(4);
console.log(arr);`,
    options: [
      "TypeError — const o'zgartirib bo'lmaydi",
      "[1, 2, 3, 4] — xato yo'q",
      "undefined",
      "ReferenceError",
    ],
    correct: 1,
    explanation: "const massivni qayta yo'naltirish mumkin emas, lekin ichki qiymatlarni o'zgartirish mumkin. push() ichini o'zgartiradi — xato yo'q.",
  },
  {
    id: 17,
    type: "nazariy",
    category: "O'zgaruvchilar",
    question: "Zamonaviy JavaScript da var o'rniga nima ishlatish tavsiya etiladi?",
    options: ["let yoki const", "type", "set", "define"],
    correct: 0,
    explanation: "var — eski usul, hoisting va function scope sabab xatolarga olib keladi. let/const ishlatish tavsiya etiladi.",
  },
  {
    id: 18,
    type: "nazariy",
    category: "O'zgaruvchilar",
    question: "Qaysi hollarda const o'rniga let ishlatilishi kerak?",
    options: [
      "Hech qachon — const har doim",
      "O'zgaruvchi qiymati keyinchalik o'zgarishi kerak bo'lsa",
      "Massiv va obyektlarda",
      "Faqat sonlar uchun",
    ],
    correct: 1,
    explanation: "Agar o'zgaruvchi qayta o'zgartirilishi kerak bo'lsa let ishlating. Aks holda const — bu yaxshi amaliyot.",
  },
  {
    id: 19,
    type: "amaliy",
    category: "O'zgaruvchilar",
    question: "Quyidagi kodning natijasi nima?",
    code: `let a = 1;
{
  let a = 2;
  console.log(a);
}
console.log(a);`,
    options: [
      "2, 2",
      "1, 1",
      "2, 1",
      "1, 2",
    ],
    correct: 2,
    explanation: "Block ichidagi let a — yangi o'zgaruvchi (block scope). Blok ichida 2, tashqarida 1.",
  },
  {
    id: 20,
    type: "amaliy",
    category: "O'zgaruvchilar",
    question: "typeof operatori nima qaytaradi?",
    code: `console.log(typeof 42);
console.log(typeof "salom");
console.log(typeof true);
console.log(typeof undefined);`,
    options: [
      '"number", "string", "boolean", "undefined"',
      '"int", "text", "bool", "null"',
      '"Number", "String", "Boolean", "Undefined"',
      '"42", "salom", "true", "undefined"',
    ],
    correct: 0,
    explanation: "typeof kichik harfda tur nomini qaytaradi: 'number', 'string', 'boolean', 'undefined'.",
  },
  {
    id: 21,
    type: "amaliy",
    category: "O'zgaruvchilar",
    question: "typeof null natijasi nima?",
    options: ['"null"', '"undefined"', '"object"', '"NaN"'],
    correct: 2,
    explanation: "typeof null === 'object' — bu JavaScript dagi tarixiy xato. null aslida primitive tur.",
  },
  {
    id: 22,
    type: "nazariy",
    category: "O'zgaruvchilar",
    question: "null va undefined ning farqi nima?",
    options: [
      "Hech qanday farq yo'q",
      "null ataylab beriladi, undefined qiymat berilmagan",
      "null son, undefined matn",
      "undefined ataylab beriladi, null berilmagan",
    ],
    correct: 1,
    explanation: "null — ataylab bo'sh qiymat beriladi. undefined — o'zgaruvchi e'lon qilingan lekin qiymat berilmagan.",
  },
  {
    id: 23,
    type: "amaliy",
    category: "O'zgaruvchilar",
    question: "Quyidagi kod nima chiqaradi?",
    code: `let x;
console.log(x);`,
    options: ["null", "0", "undefined", "''"],
    correct: 2,
    explanation: "Qiymat berilmagan o'zgaruvchi undefined bo'ladi.",
  },
  {
    id: 24,
    type: "nazariy",
    category: "O'zgaruvchilar",
    question: "JavaScript da nechta primitive ma'lumot turi bor?",
    options: ["5", "6", "7", "8"],
    correct: 2,
    explanation: "7 ta primitive: String, Number, Boolean, null, undefined, Symbol, BigInt.",
  },
  {
    id: 25,
    type: "amaliy",
    category: "O'zgaruvchilar",
    question: "Quyidagi kodning natijasi nima?",
    code: `console.log(typeof function(){});`,
    options: ['"object"', '"class"', '"function"', '"undefined"'],
    correct: 2,
    explanation: "typeof function(){} === 'function'. Funksiyalar ham obyekt, lekin typeof 'function' qaytaradi.",
  },

  // ── OPERATORLAR (26-40) ───────────────────────────────────────────────────
  {
    id: 26,
    type: "amaliy",
    category: "Operatorlar",
    question: "Quyidagi ifodaning natijasi nima?",
    code: `console.log(5 == "5");
console.log(5 === "5");`,
    options: [
      "false, false",
      "true, true",
      "true, false",
      "false, true",
    ],
    correct: 2,
    explanation: "== tur o'zgartirib solishtiradi (5 va '5' teng), === tur ham tekshiradi (number vs string — teng emas).",
  },
  {
    id: 27,
    type: "amaliy",
    category: "Operatorlar",
    question: "Quyidagi ifodaning natijasi nima?",
    code: `console.log("5" + 3);
console.log("5" - 3);`,
    options: [
      '"53", 2',
      "8, 2",
      '"53", "2"',
      "8, 8",
    ],
    correct: 0,
    explanation: "+ string bilan ishlatilsa concatenation: '5'+3='53'. - faqat son operatsiyasi: '5'-3=2.",
  },
  {
    id: 28,
    type: "amaliy",
    category: "Operatorlar",
    question: "0 ?? 'default' natijasi nima?",
    options: ["'default'", "0", "false", "null"],
    correct: 1,
    explanation: "?? (nullish coalescing) faqat null va undefined uchun. 0 null emas — shuning uchun 0 qaytaradi.",
  },
  {
    id: 29,
    type: "amaliy",
    category: "Operatorlar",
    question: "Quyidagi ifodaning natijasi nima?",
    code: `console.log(0 || "default");
console.log("" || "default");
console.log(false || "default");`,
    options: [
      '0, "", false',
      '"default", "default", "default"',
      '"default", "", false',
      '0, "default", "default"',
    ],
    correct: 1,
    explanation: "|| — falsy qiymat (0, '', false, null, undefined, NaN) bo'lsa o'ng tomoni qaytaradi.",
  },
  {
    id: 30,
    type: "amaliy",
    category: "Operatorlar",
    question: "user?.address?.city kodi nima qiladi, user === null bo'lsa?",
    options: [
      "TypeError: Cannot read properties of null",
      "null",
      "undefined",
      "''",
    ],
    correct: 2,
    explanation: "Optional chaining (?.) — null/undefined bo'lsa xato emas, undefined qaytaradi.",
  },
  {
    id: 31,
    type: "amaliy",
    category: "Operatorlar",
    question: "Quyidagi ifodaning natijasi nima?",
    code: `let x = 10;
console.log(x++);
console.log(x);`,
    options: [
      "11, 11",
      "10, 11",
      "11, 10",
      "10, 10",
    ],
    correct: 1,
    explanation: "x++ — postfix: avval qiymatni qaytaradi (10), keyin oshiradi. Shuning uchun log 10, keyin x 11.",
  },
  {
    id: 32,
    type: "amaliy",
    category: "Operatorlar",
    question: "Quyidagi ternary natijasi nima?",
    code: `let yosh = 17;
let holat = yosh >= 18 ? "katta" : "kichik";
console.log(holat);`,
    options: ["katta", "kichik", "undefined", "true"],
    correct: 1,
    explanation: "17 >= 18 — false. Ternary operator false holda ikkinchi qiymatni qaytaradi: 'kichik'.",
  },
  {
    id: 33,
    type: "amaliy",
    category: "Operatorlar",
    question: "Quyidagi ifodalar natijasi nima?",
    code: `console.log(2 ** 10);
console.log(10 % 3);`,
    options: [
      "1024, 1",
      "20, 3",
      "1024, 3",
      "20, 1",
    ],
    correct: 0,
    explanation: "** — daraja: 2^10 = 1024. % — qoldiq: 10 ni 3 ga bo'lganda qoldiq 1.",
  },
  {
    id: 34,
    type: "nazariy",
    category: "Operatorlar",
    question: "Qaysi operatorni ishlatish tavsiya etiladi — == yoki ===?",
    options: [
      "== — qisqaroq",
      "=== — tur ham tekshiradi, xavfsizroq",
      "Ikkalasi ham bir xil",
      "Kontekstga qarab",
    ],
    correct: 1,
    explanation: "=== (strict equality) har doim tavsiya etiladi. == tur o'zgartirib solishtiradi — kutilmagan natijalar berishi mumkin.",
  },
  {
    id: 35,
    type: "amaliy",
    category: "Operatorlar",
    question: "Quyidagi ifodaning natijasi nima?",
    code: `console.log(!!"");
console.log(!!"salom");
console.log(!!0);
console.log(!!1);`,
    options: [
      "true, true, true, true",
      "false, true, false, true",
      "false, false, false, false",
      "true, false, true, false",
    ],
    correct: 1,
    explanation: "!! — qiymatni boolean ga aylantiradi. '' va 0 falsy — false. 'salom' va 1 truthy — true.",
  },
  {
    id: 36,
    type: "amaliy",
    category: "Operatorlar",
    question: "Spread operator nima qiladi?",
    code: `const a = [1, 2, 3];
const b = [...a, 4, 5];
console.log(b);`,
    options: [
      "[[1,2,3], 4, 5]",
      "[1, 2, 3, 4, 5]",
      "[4, 5]",
      "Xato",
    ],
    correct: 1,
    explanation: "Spread (...) massivni yoyadi — asl elementlarni yangi massivga qo'shadi: [1,2,3,4,5].",
  },
  {
    id: 37,
    type: "amaliy",
    category: "Operatorlar",
    question: "Quyidagi ifodaning natijasi nima?",
    code: `console.log(null == undefined);
console.log(null === undefined);`,
    options: [
      "false, false",
      "true, true",
      "true, false",
      "false, true",
    ],
    correct: 2,
    explanation: "null == undefined — true (bu maxsus qoida). null === undefined — false (turlar boshqa).",
  },
  {
    id: 38,
    type: "amaliy",
    category: "Operatorlar",
    question: "delete operatori nima qiladi?",
    code: `const obj = { a: 1, b: 2 };
delete obj.a;
console.log(obj);`,
    options: [
      "{ a: 1, b: 2 }",
      "{ b: 2 }",
      "{}",
      "Xato",
    ],
    correct: 1,
    explanation: "delete — obyektdan xususiyatni o'chiradi. obj.a o'chirilib { b: 2 } qoladi.",
  },
  {
    id: 39,
    type: "amaliy",
    category: "Operatorlar",
    question: "in operatori nima qiladi?",
    code: `const obj = { x: 1, y: 2 };
console.log("x" in obj);
console.log("z" in obj);`,
    options: [
      "1, undefined",
      "true, false",
      "false, true",
      "true, true",
    ],
    correct: 1,
    explanation: "in operatori — obyektda kalit bor-yo'qligini tekshiradi. 'x' bor — true, 'z' yo'q — false.",
  },
  {
    id: 40,
    type: "amaliy",
    category: "Operatorlar",
    question: "instanceof operatori nima uchun ishlatiladi?",
    code: `console.log([] instanceof Array);
console.log({} instanceof Object);`,
    options: [
      "false, false",
      "true, false",
      "false, true",
      "true, true",
    ],
    correct: 3,
    explanation: "instanceof — obyekt ma'lum classning nusxasimi tekshiradi. Massiv Array, obyekt Object namunasi.",
  },

  // ── SHART OPERATORLARI (41-52) ─────────────────────────────────────────────
  {
    id: 41,
    type: "amaliy",
    category: "Shart operatorlari",
    question: "Quyidagi kodning natijasi nima?",
    code: `let x = 0;
if (x) {
  console.log("true");
} else {
  console.log("false");
}`,
    options: ['"true"', '"false"', "undefined", "Xato"],
    correct: 1,
    explanation: "0 — falsy qiymat. if(0) shartida else ishlaydi: 'false'.",
  },
  {
    id: 42,
    type: "nazariy",
    category: "Shart operatorlari",
    question: "Quyidagi qiymatlardan qaysilari falsy hisoblanadi?",
    options: [
      "0, '', null, undefined, NaN, false",
      "0, null, false",
      "Faqat false va null",
      "Faqat false",
    ],
    correct: 0,
    explanation: "JavaScript da 6 ta falsy: false, 0, '' (bo'sh string), null, undefined, NaN. Qolgan hammasi truthy.",
  },
  {
    id: 43,
    type: "amaliy",
    category: "Shart operatorlari",
    question: "switch da break yo'q bo'lsa nima bo'ladi?",
    code: `switch(2) {
  case 1: console.log("bir");
  case 2: console.log("ikki");
  case 3: console.log("uch");
  default: console.log("default");
}`,
    options: [
      '"ikki"',
      '"ikki", "uch", "default"',
      '"bir", "ikki", "uch", "default"',
      'Xato',
    ],
    correct: 1,
    explanation: "break yo'q — fall-through. case 2 topildi, undan pastdagi case 3 va default ham bajariladi.",
  },
  {
    id: 44,
    type: "amaliy",
    category: "Shart operatorlari",
    question: "Quyidagi switch kodi nima chiqaradi?",
    code: `let x = "5";
switch(x) {
  case 5:  console.log("son"); break;
  case "5": console.log("string"); break;
  default: console.log("default");
}`,
    options: ['"son"', '"string"', '"default"', "Xato"],
    correct: 1,
    explanation: "switch === bilan solishtiradi. x === '5' (string) — case '5' ishlaydi.",
  },
  {
    id: 45,
    type: "amaliy",
    category: "Shart operatorlari",
    question: "Ternary operatorning to'g'ri yozilishi qaysi?",
    options: [
      "x > 0 ? 'musbat'",
      "if x > 0 then 'musbat' else 'manfiy'",
      "x > 0 ? 'musbat' : 'manfiy'",
      "x > 0 => 'musbat' : 'manfiy'",
    ],
    correct: 2,
    explanation: "Ternary sintaksis: shart ? true_qiymat : false_qiymat",
  },
  {
    id: 46,
    type: "amaliy",
    category: "Shart operatorlari",
    question: "Quyidagi kod nima chiqaradi?",
    code: `let a = true && "salom";
let b = false && "salom";
console.log(a, b);`,
    options: [
      '"salom", "salom"',
      '"salom", false',
      'true, false',
      'true, "salom"',
    ],
    correct: 1,
    explanation: "&& — short-circuit: birinchi falsy bo'lsa qaytaradi. true && 'salom' = 'salom', false && 'salom' = false.",
  },
  {
    id: 47,
    type: "amaliy",
    category: "Shart operatorlari",
    question: "Quyidagi kod nima chiqaradi?",
    code: `console.log(1 < 2 < 3);
console.log(3 > 2 > 1);`,
    options: [
      "true, true",
      "true, false",
      "false, true",
      "false, false",
    ],
    correct: 1,
    explanation: "1<2=true, true<3=1<3=true. 3>2=true, true>1=1>1=false. Solishtirish chapdan o'ngga.",
  },
  {
    id: 48,
    type: "nazariy",
    category: "Shart operatorlari",
    question: "Ko'p shartli tekshirish uchun switch yoki object lookup qaysi samaraliroq?",
    options: [
      "switch har doim",
      "object lookup ko'pincha toza va tezroq",
      "if-else har doim",
      "Farq yo'q",
    ],
    correct: 1,
    explanation: "Object lookup: const result = map[key] ?? default — switch dan qisqaroq va ko'pincha tezroq.",
  },
  {
    id: 49,
    type: "amaliy",
    category: "Shart operatorlari",
    question: "Quyidagi kod nima chiqaradi?",
    code: `let x = null;
let y = x ?? "default";
console.log(y);`,
    options: ["null", "undefined", '"default"', "false"],
    correct: 2,
    explanation: "x null bo'lgani uchun ?? ning o'ng tomoni qaytariladi: 'default'.",
  },
  {
    id: 50,
    type: "amaliy",
    category: "Shart operatorlari",
    question: "Quyidagi ternary natijasi nima?",
    code: `let n = 5;
let tur = n % 2 === 0 ? "juft" : "toq";
console.log(tur);`,
    options: ["juft", "toq", "undefined", "false"],
    correct: 1,
    explanation: "5 % 2 = 1, 1 === 0 false — ternary false yo'lidan: 'toq'.",
  },
  {
    id: 51,
    type: "nazariy",
    category: "Shart operatorlari",
    question: "if shart qavssiz yozilsa nima bo'ladi?",
    code: `if (true)
  console.log("birinchi");
  console.log("ikkinchi");`,
    options: [
      "Faqat 'birinchi' chiqadi",
      "Ikkalasi ham chiqadi",
      "Ikkinchi har doim chiqadi, birinchi shart bo'yicha",
      "Xato",
    ],
    correct: 2,
    explanation: "Qavssiz if faqat keyingi bir qatorga ta'sir qiladi. 'ikkinchi' if dan tashqarida — har doim bajariladi.",
  },
  {
    id: 52,
    type: "amaliy",
    category: "Shart operatorlari",
    question: "Quyidagi kod nima chiqaradi?",
    code: `let a = 1, b = 2, c = 3;
if (a < b && b < c) {
  console.log("to'g'ri tartib");
} else {
  console.log("noto'g'ri");
}`,
    options: ["noto'g'ri", "to'g'ri tartib", "undefined", "Xato"],
    correct: 1,
    explanation: "a<b (1<2=true) && b<c (2<3=true) — true. 'to'g'ri tartib' chiqadi.",
  },

  // ── TSIKLLAR (53-65) ──────────────────────────────────────────────────────
  {
    id: 53,
    type: "amaliy",
    category: "Tsikllar",
    question: "Quyidagi for tsikl necha marta ishlaydi?",
    code: `for (let i = 0; i < 5; i++) {
  console.log(i);
}`,
    options: ["4", "5", "6", "0"],
    correct: 1,
    explanation: "i = 0, 1, 2, 3, 4 — 5 ta iteratsiya (i < 5 sharti: 0,1,2,3,4 to'g'ri, 5 da to'xtaydi).",
  },
  {
    id: 54,
    type: "amaliy",
    category: "Tsikllar",
    question: "for...of va for...in farqi nima?",
    options: [
      "Hech qanday farq yo'q",
      "for...of qiymatlarni, for...in kalitlarni iteratsiya qiladi",
      "for...in qiymatlarni, for...of kalitlarni iteratsiya qiladi",
      "for...of faqat string uchun",
    ],
    correct: 1,
    explanation: "for...of — massiv/iterable qiymatlarini. for...in — obyekt kalitlarini (property names) iteratsiya qiladi.",
  },
  {
    id: 55,
    type: "amaliy",
    category: "Tsikllar",
    question: "continue operatori nima qiladi?",
    code: `for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);
}`,
    options: [
      "0, 1, 2, 3, 4",
      "0, 1, 3, 4",
      "0, 1",
      "2, 3, 4",
    ],
    correct: 1,
    explanation: "continue — bu iteratsiyani o'tkazib keyingisiga o'tadi. i===2 da o'tkazib, qolganlarini chiqaradi.",
  },
  {
    id: 56,
    type: "amaliy",
    category: "Tsikllar",
    question: "do...while tsiklida shart false bo'lsa ham necha marta bajariladi?",
    code: `let i = 0;
do {
  console.log(i);
  i++;
} while (i < 0);`,
    options: ["0 marta", "1 marta", "Cheksiz", "Xato"],
    correct: 1,
    explanation: "do...while avval bajaradi, keyin shart tekshiradi. Shart false bo'lsa ham kamida 1 marta ishlaydi.",
  },
  {
    id: 57,
    type: "amaliy",
    category: "Tsikllar",
    question: "break operatori nima qiladi?",
    code: `for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}`,
    options: [
      "0, 1, 2, 3, 4, 5",
      "0, 1, 2, 3, 4",
      "5, 6, 7, 8, 9",
      "0, 1, 2, 3, 4, 5, 6, 7, 8, 9",
    ],
    correct: 1,
    explanation: "break — tsiklni to'liq to'xtatadi. i===5 da break — 0,1,2,3,4 chiqariladi, 5 chiqarilmaydi.",
  },
  {
    id: 58,
    type: "amaliy",
    category: "Tsikllar",
    question: "Quyidagi for...of kod nima chiqaradi?",
    code: `const mevalar = ["olma", "anor", "shaftoli"];
for (const meva of mevalar) {
  console.log(meva);
}`,
    options: [
      "0, 1, 2",
      "olma, anor, shaftoli",
      "['olma','anor','shaftoli']",
      "undefined",
    ],
    correct: 1,
    explanation: "for...of massiv qiymatlarini beradi: 'olma', 'anor', 'shaftoli'.",
  },
  {
    id: 59,
    type: "amaliy",
    category: "Tsikllar",
    question: "while tsiklida cheksiz loop oldini olish uchun nima kerak?",
    options: [
      "break kerak emas",
      "Shart bir vaqt false bo'ladigan yoki break bo'lishi kerak",
      "setTimeout ishlatish",
      "return ishlatish",
    ],
    correct: 1,
    explanation: "while da shart false bo'lsa to'xtaydi. Aks holda cheksiz loop — break bilan chiqish mumkin.",
  },
  {
    id: 60,
    type: "amaliy",
    category: "Tsikllar",
    question: "for...in massivda qanday ishlaydi?",
    code: `const arr = ["a", "b", "c"];
for (const i in arr) {
  console.log(i);
}`,
    options: [
      '"a", "b", "c"',
      '0, 1, 2',
      '"0", "1", "2"',
      'Xato',
    ],
    correct: 2,
    explanation: "for...in massiv indekslarini string sifatida beradi: '0', '1', '2'. Massiv uchun for...of tavsiya.",
  },
  {
    id: 61,
    type: "amaliy",
    category: "Tsikllar",
    question: "Array.from({length: 5}, (_, i) => i) nima qaytaradi?",
    options: [
      "[1, 2, 3, 4, 5]",
      "[0, 1, 2, 3, 4]",
      "[0, 0, 0, 0, 0]",
      "Xato",
    ],
    correct: 1,
    explanation: "Array.from length:5 va callback ile [0,1,2,3,4] massiv yaratadi. _ — element (undefined), i — indeks.",
  },
  {
    id: 62,
    type: "amaliy",
    category: "Tsikllar",
    question: "Quyidagi kodda 'sum' qiymati nima bo'ladi?",
    code: `let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum);`,
    options: ["45", "55", "50", "10"],
    correct: 1,
    explanation: "1+2+3+4+5+6+7+8+9+10 = 55.",
  },
  {
    id: 63,
    type: "nazariy",
    category: "Tsikllar",
    question: "Qachon while, qachon for tsikl ishlatish kerak?",
    options: [
      "while har doim yaxshiroq",
      "for — necha marta oldindan bilsak, while — noma'lum miqdorda",
      "for necha marta bilmasak, while necha marta bilsak",
      "Hech qanday farq yo'q",
    ],
    correct: 1,
    explanation: "for — iteratsiya soni ma'lum (massiv, oraliq). while — shart tugaguncha (nechtaligi noma'lum).",
  },
  {
    id: 64,
    type: "amaliy",
    category: "Tsikllar",
    question: "for...of string bilan qanday ishlaydi?",
    code: `for (const harf of "salom") {
  console.log(harf);
}`,
    options: [
      "s, a, l, o, m (har biri alohida)",
      '"salom"',
      "5 (uzunlik)",
      "Xato",
    ],
    correct: 0,
    explanation: "String iterable — for...of har harfini alohida beradi: 's', 'a', 'l', 'o', 'm'.",
  },
  {
    id: 65,
    type: "amaliy",
    category: "Tsikllar",
    question: "Quyidagi kod qanday ishlaydi?",
    code: `const raqamlar = [1, 2, 3, 4, 5];
const juftlar = [];
for (const n of raqamlar) {
  if (n % 2 === 0) juftlar.push(n);
}
console.log(juftlar);`,
    options: ["[1, 3, 5]", "[2, 4]", "[1, 2, 3, 4, 5]", "[]"],
    correct: 1,
    explanation: "Juft sonlar: 2 va 4. Natija: [2, 4].",
  },

  // ── FUNKSIYALAR (66-80) ───────────────────────────────────────────────────
  {
    id: 66,
    type: "nazariy",
    category: "Funksiyalar",
    question: "Function declaration va function expression qaysi biri hoisting qiladi?",
    options: [
      "Ikkalasi ham",
      "Ikkalasi ham qilmaydi",
      "Faqat function declaration",
      "Faqat function expression",
    ],
    correct: 2,
    explanation: "Function declaration — hoisting: e'londan oldin chaqirish mumkin. Function expression — hoisting qilmaydi.",
  },
  {
    id: 67,
    type: "amaliy",
    category: "Funksiyalar",
    question: "Arrow function da this qanday ishlaydi?",
    options: [
      "Oddiy funksiya bilan bir xil",
      "O'z this ni bind qilmaydi — leksik this",
      "this har doim window",
      "this undefined",
    ],
    correct: 1,
    explanation: "Arrow function o'z this ni yaratmaydi — leksik this (tashqi kontekst this ni oladi).",
  },
  {
    id: 68,
    type: "amaliy",
    category: "Funksiyalar",
    question: "Quyidagi kod nima chiqaradi?",
    code: `function aytish(ism = "Dunyo") {
  console.log("Salom, " + ism + "!");
}
aytish();
aytish("Ali");`,
    options: [
      '"Salom, undefined!", "Salom, Ali!"',
      '"Salom, Dunyo!", "Salom, Ali!"',
      '"Salom, !", "Salom, Ali!"',
      "Xato",
    ],
    correct: 1,
    explanation: "Default parametr: argument berilmasa 'Dunyo' ishlatiladi. aytish() => 'Salom, Dunyo!', aytish('Ali') => 'Salom, Ali!'.",
  },
  {
    id: 69,
    type: "amaliy",
    category: "Funksiyalar",
    question: "Rest parametr nima qiladi?",
    code: `function yig_indi(...sonlar) {
  return sonlar.reduce((s, n) => s + n, 0);
}
console.log(yig_indi(1, 2, 3, 4, 5));`,
    options: ["Xato", "15", "1", "undefined"],
    correct: 1,
    explanation: "...sonlar — rest parametr, qolgan argumentlarni massivga yig'adi. 1+2+3+4+5=15.",
  },
  {
    id: 70,
    type: "amaliy",
    category: "Funksiyalar",
    question: "Quyidagi arrow function to'g'ri yozilganmi?",
    code: `const kvadrat = x => x * x;
console.log(kvadrat(5));`,
    options: ["Xato — {} kerak", "Xato — return kerak", "25 — to'g'ri", "undefined"],
    correct: 2,
    explanation: "Bir parametrli, bir ifodali arrow function: qavslar va return ixtiyoriy. x => x*x to'g'ri. 5*5=25.",
  },
  {
    id: 71,
    type: "amaliy",
    category: "Funksiyalar",
    question: "Closure nima?",
    options: [
      "Funksiyani yopish operatori",
      "Funksiya o'zi yaratilgan scope dagi o'zgaruvchilarni eslab qolishi",
      "Xatolarni ushlash mexanizmi",
      "Modul eksport tizimi",
    ],
    correct: 1,
    explanation: "Closure — funksiya o'zi e'lon qilingan lexical scope dagi o'zgaruvchilarga kirish huquqini saqlab qoladi.",
  },
  {
    id: 72,
    type: "amaliy",
    category: "Funksiyalar",
    question: "Quyidagi closure kod nima chiqaradi?",
    code: `function hisoblagich() {
  let n = 0;
  return () => ++n;
}
const h = hisoblagich();
console.log(h());
console.log(h());
console.log(h());`,
    options: [
      "1, 1, 1",
      "0, 1, 2",
      "1, 2, 3",
      "undefined, undefined, undefined",
    ],
    correct: 2,
    explanation: "Closure n o'zgaruvchisini eslab qoladi. Har chaqiruvda ++n: 1, 2, 3.",
  },
  {
    id: 73,
    type: "amaliy",
    category: "Funksiyalar",
    question: "Higher-order function nima?",
    options: [
      "Tezkor ishlaydignan funksiya",
      "Funksiya argument qabul qiluvchi yoki funksiya qaytaruvchi funksiya",
      "Global scope dagi funksiya",
      "Rekursiv funksiya",
    ],
    correct: 1,
    explanation: "Higher-order function — boshqa funksiyani argument sifatida qabul qiladi va/yoki funksiya qaytaradi.",
  },
  {
    id: 74,
    type: "amaliy",
    category: "Funksiyalar",
    question: "IIFE nima?",
    code: `(function() {
  console.log("IIFE ishladi!");
})();`,
    options: [
      "Immediately Invoked Function Expression — darhol chaqiriladigan funksiya",
      "Infinite Iteration Function Expression",
      "Internal Interface Function Element",
      "Xato sintaksis",
    ],
    correct: 0,
    explanation: "IIFE — Immediately Invoked Function Expression. Yaratilishi bilan darhol chaqiriladi.",
  },
  {
    id: 75,
    type: "amaliy",
    category: "Funksiyalar",
    question: "Quyidagi kod nima chiqaradi?",
    code: `const fn = (a, b) => {
  const natija = a * b;
  return natija;
};
console.log(fn(3, 4));`,
    options: ["undefined", "7", "12", "Xato"],
    correct: 2,
    explanation: "Blokli arrow function — {} bilan, return majburiy. 3 * 4 = 12.",
  },
  {
    id: 76,
    type: "amaliy",
    category: "Funksiyalar",
    question: "Scope nima?",
    options: [
      "O'zgaruvchi qiymati",
      "O'zgaruvchi qaysi hududda ko'rinishini belgilaydigan qoida",
      "Funksiya parametri",
      "Global o'zgaruvchi",
    ],
    correct: 1,
    explanation: "Scope — o'zgaruvchi qaysi kod hududida ko'rinadi va ishlata olinadi.",
  },
  {
    id: 77,
    type: "amaliy",
    category: "Funksiyalar",
    question: "Quyidagi kodning natijasi nima?",
    code: `function tashqi() {
  let x = 10;
  function ichki() {
    console.log(x);
  }
  ichki();
}
tashqi();`,
    options: ["undefined", "10", "Xato", "null"],
    correct: 1,
    explanation: "Lexical scope — ichki funksiya tashqi scope dagi x ga kira oladi: 10.",
  },
  {
    id: 78,
    type: "amaliy",
    category: "Funksiyalar",
    question: "Funksiyani argument sifatida berish to'g'rimi?",
    code: `function bajar(fn, x) {
  return fn(x);
}
const ikkilat = n => n * 2;
console.log(bajar(ikkilat, 5));`,
    options: ["Xato", "5", "10", "undefined"],
    correct: 2,
    explanation: "JavaScript da funksiyalar first-class citizen — argument sifatida berilishi mumkin. 5 * 2 = 10.",
  },
  {
    id: 79,
    type: "amaliy",
    category: "Funksiyalar",
    question: "Rekursiya nima va bu kod nima chiqaradi?",
    code: `function faktorial(n) {
  if (n <= 1) return 1;
  return n * faktorial(n - 1);
}
console.log(faktorial(5));`,
    options: ["5", "25", "120", "Xato"],
    correct: 2,
    explanation: "Rekursiya — funksiya o'zini chaqiradi. 5! = 5*4*3*2*1 = 120.",
  },
  {
    id: 80,
    type: "amaliy",
    category: "Funksiyalar",
    question: "Debounce nima uchun ishlatiladi?",
    options: [
      "Funksiyani bir marta chaqirish",
      "Haddan ko'p chaqiruvlarni cheklash — oxirgi chaqiruvdan keyin ishlash",
      "Funksiyani tezlashtirish",
      "Funksiyani asinxron qilish",
    ],
    correct: 1,
    explanation: "Debounce — input, resize kabi tez-tez chaqiriladigan hodisalarda oxirgi chaqiruvdan N ms keyin ishlaydi.",
  },

  // ── MASSIVLAR (81-92) ─────────────────────────────────────────────────────
  {
    id: 81,
    type: "amaliy",
    category: "Massivlar",
    question: "[1,2,3].map(x => x*2) natijasi nima?",
    options: ["6", "[2,4,6]", "[1,2,3]", "undefined"],
    correct: 1,
    explanation: "map() har elementni callback orqali o'zgartiradi va yangi massiv qaytaradi: [2,4,6].",
  },
  {
    id: 82,
    type: "amaliy",
    category: "Massivlar",
    question: "[1,2,3,4,5].filter(x => x > 2) natijasi nima?",
    options: ["[1,2]", "[3,4,5]", "[2,3,4,5]", "false"],
    correct: 1,
    explanation: "filter() shartga mos elementlarni qaytaradi. x>2 bo'lganlar: [3,4,5].",
  },
  {
    id: 83,
    type: "amaliy",
    category: "Massivlar",
    question: "[1,2,3,4,5].reduce((sum, n) => sum + n, 0) natijasi nima?",
    options: ["0", "10", "15", "1"],
    correct: 2,
    explanation: "reduce() yig'adi: 0+1+2+3+4+5 = 15.",
  },
  {
    id: 84,
    type: "amaliy",
    category: "Massivlar",
    question: "push va pop metodlari nima qiladi?",
    options: [
      "push — boshiga qo'shadi, pop — boshidan oladi",
      "push — oxiriga qo'shadi, pop — oxiridan olib tashlaydi",
      "push — nusxalaydi, pop — o'chiradi",
      "Ikkalasi ham saralaydi",
    ],
    correct: 1,
    explanation: "push() — oxiriga element qo'shadi, pop() — oxiridagi elementni olib tashlaydi va qaytaradi.",
  },
  {
    id: 85,
    type: "amaliy",
    category: "Massivlar",
    question: "arr.slice(1, 3) nima qaytaradi [0,1,2,3,4] massivdan?",
    options: ["[1,2]", "[1,2,3]", "[0,1,2]", "[1,3]"],
    correct: 0,
    explanation: "slice(1, 3) — 1-indeksdan 3-indeksgacha (3 kiritilmaydi): [1, 2].",
  },
  {
    id: 86,
    type: "amaliy",
    category: "Massivlar",
    question: "[...new Set([1,2,2,3,1])] natijasi nima?",
    options: ["[1,2,2,3,1]", "[1,2,3]", "Set{1,2,3}", "5"],
    correct: 1,
    explanation: "Set noyob qiymatlarni saqlaydi. spread bilan massivga: [1,2,3].",
  },
  {
    id: 87,
    type: "amaliy",
    category: "Massivlar",
    question: "find() va filter() farqi nima?",
    options: [
      "Hech qanday farq yo'q",
      "find() birinchi mos elementni, filter() barcha mos elementlar massivini qaytaradi",
      "filter() birinchi mos elementni, find() barchasini qaytaradi",
      "find() indeks, filter() qiymat qaytaradi",
    ],
    correct: 1,
    explanation: "find() — birinchi mos elementni qaytaradi. filter() — barcha mos elementlar massivini qaytaradi.",
  },
  {
    id: 88,
    type: "amaliy",
    category: "Massivlar",
    question: "sort() raqamlar uchun to'g'ri ishlaydi?",
    code: `console.log([10, 2, 1, 20].sort());`,
    options: [
      "[1, 2, 10, 20]",
      "[1, 10, 2, 20]",
      "[10, 2, 1, 20]",
      "[20, 10, 2, 1]",
    ],
    correct: 1,
    explanation: "sort() callback siz — leksikografik (string) tartiblaydi: '1' < '10' < '2' < '20'. Raqamlar uchun (a,b)=>a-b kerak.",
  },
  {
    id: 89,
    type: "amaliy",
    category: "Massivlar",
    question: "Array destructuring qanday yoziladi?",
    code: `const [a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(a, b, rest);`,
    options: [
      "1, 2, [3,4,5]",
      "[1,2], [3,4,5]",
      "1, 2, 3",
      "Xato",
    ],
    correct: 0,
    explanation: "Destructuring: a=1, b=2, rest=[3,4,5] (rest operator).",
  },
  {
    id: 90,
    type: "amaliy",
    category: "Massivlar",
    question: "some() va every() farqi nima?",
    options: [
      "Hech qanday farq yo'q",
      "some() — kamida biri mos, every() — hammasi mos",
      "every() — kamida biri mos, some() — hammasi mos",
      "some() massiv, every() boolean qaytaradi",
    ],
    correct: 1,
    explanation: "some() — kamida bitta element shartga mos kelsa true. every() — barcha elementlar mos kelsa true.",
  },
  {
    id: 91,
    type: "amaliy",
    category: "Massivlar",
    question: "flat() metodi nima qiladi?",
    code: `console.log([[1,2],[3,4],[5,6]].flat());`,
    options: [
      "[[1,2],[3,4],[5,6]]",
      "[1,2,3,4,5,6]",
      "[1,[2,3],[4,5],6]",
      "Xato",
    ],
    correct: 1,
    explanation: "flat() — ichma-ich massivlarni tekislaydi. [[1,2],[3,4]] => [1,2,3,4].",
  },
  {
    id: 92,
    type: "amaliy",
    category: "Massivlar",
    question: "forEach() va map() farqi nima?",
    options: [
      "forEach() yangi massiv qaytaradi, map() qaytarmaydi",
      "map() yangi massiv qaytaradi, forEach() undefined qaytaradi",
      "Hech qanday farq yo'q",
      "forEach() tezroq ishlaydi",
    ],
    correct: 1,
    explanation: "map() yangi massiv qaytaradi (transform uchun). forEach() undefined qaytaradi (side effect uchun).",
  },

  // ── OBYEKTLAR (93-100) ────────────────────────────────────────────────────
  {
    id: 93,
    type: "amaliy",
    category: "Obyektlar",
    question: "Object.keys({a:1, b:2, c:3}) natijasi nima?",
    options: ["[1, 2, 3]", "['a', 'b', 'c']", "{a:1, b:2}", "3"],
    correct: 1,
    explanation: "Object.keys() — obyektning kalitlari (property names) massivini qaytaradi.",
  },
  {
    id: 94,
    type: "amaliy",
    category: "Obyektlar",
    question: "Obyekt destructuring qanday yoziladi?",
    code: `const {ism, yosh = 0} = {ism: "Ali", email: "ali@mail.com"};
console.log(ism, yosh);`,
    options: [
      '"Ali", undefined',
      '"Ali", 0',
      '"Ali", "ali@mail.com"',
      "Xato",
    ],
    correct: 1,
    explanation: "ism='Ali' (bor), yosh=0 (yo'q, default qiymat ishlaydi).",
  },
  {
    id: 95,
    type: "amaliy",
    category: "Obyektlar",
    question: "Spread bilan obyekt nusxalash to'g'ri usul qaysi?",
    code: `const obj1 = {a: 1, b: 2};
const obj2 = {...obj1, c: 3};
console.log(obj2);`,
    options: [
      "{a:1, b:2}",
      "{c:3}",
      "{a:1, b:2, c:3}",
      "Xato",
    ],
    correct: 2,
    explanation: "Spread bilan obj1 ni kengaytirib yangi obyekt: {a:1, b:2, c:3}.",
  },
  {
    id: 96,
    type: "amaliy",
    category: "Obyektlar",
    question: "this kalit so'zi metod ichida nima?",
    code: `const odam = {
  ism: "Ali",
  salom() {
    return "Salom, " + this.ism;
  }
};
console.log(odam.salom());`,
    options: ['"Salom, undefined"', '"Salom, Ali"', "Xato", '"Salom, ..."'],
    correct: 1,
    explanation: "this metod ichida obyektning o'ziga (odam) ishora qiladi. this.ism = 'Ali'.",
  },
  {
    id: 97,
    type: "amaliy",
    category: "Obyektlar",
    question: "Map va oddiy {} obyekt farqi nima?",
    options: [
      "Hech qanday farq yo'q",
      "Map istalgan tur kalit qabul qiladi, tartib saqlaydi, size xususiyati bor",
      "Obyekt tezroq ishlaydi",
      "Map faqat string kalitlar uchun",
    ],
    correct: 1,
    explanation: "Map: istalgan tur kalit, insert tartibini saqlaydi, .size xususiyati bor. {} faqat string/symbol kalit.",
  },
  {
    id: 98,
    type: "amaliy",
    category: "Obyektlar",
    question: "Object.freeze() nima qiladi?",
    options: [
      "Obyektni kesh qiladi",
      "Obyektni o'zgartirib bo'lmaydi qiladi",
      "Obyektni tartiblaydi",
      "Obyektni nusxalaydi",
    ],
    correct: 1,
    explanation: "Object.freeze() — obyektni muzlatadi: yangi xususiyat qo'shish, o'zgartirish, o'chirish mumkin emas.",
  },
  {
    id: 99,
    type: "amaliy",
    category: "Obyektlar",
    question: "Optional chaining nima uchun kerak?",
    code: `const user = null;
console.log(user?.address?.city);`,
    options: [
      "TypeError: Cannot read property",
      "null",
      "undefined",
      "''",
    ],
    correct: 2,
    explanation: "?. — null/undefined bo'lsa xato emas, undefined qaytaradi. Chuqur nested obyektlarda xavfsiz kirish.",
  },
  {
    id: 100,
    type: "amaliy",
    category: "Obyektlar",
    question: "Object.entries() nima qaytaradi?",
    code: `const obj = {a: 1, b: 2};
console.log(Object.entries(obj));`,
    options: [
      "['a', 'b']",
      "[1, 2]",
      "[['a', 1], ['b', 2]]",
      "{a:1, b:2}",
    ],
    correct: 2,
    explanation: "Object.entries() — [kalit, qiymat] juft massivlarini qaytaradi: [['a',1], ['b',2]].",
  },
];
