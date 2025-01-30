/*
? Напиши скрипт, який для об'єкта user, послідовно:
? - додає поле mood зі значенням 'happy'
? - замінює значення hobby на 'skydiving'
? - замінює значення premium на false
? - виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
*/

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = !user.premium;

console.log(user["name"]);
// for (const key in user) {
//   console.log(`${key}: ${user[key]}`);
// }

// const userKeys = Object.keys(user);

// for (const key of userKeys) {
//   console.log(key);
//   console.log(`${key}: ${user[key]}`);
// }

//? Зведіть у квадрат кожен елемент цього об'єкта.

// const obj = { x: 2, y: 3, z: 4, a: 9 };

// for (const key in obj) {
//   // obj[key] = Math.pow(obj[key], 2);
//   // obj[key] = obj[key] ** 2;
//   obj[key] **= 2;
// }

// console.log(obj);

/*
? У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
? підсумовування всіх зарплат і збережіть результат у змінній sum.
? Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
*/

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

// let sum = 0;

// for (const key in salaries) {
//   sum += salaries[key];
// }

// console.log(sum);

// так не робіть, будь ласка
// Object.prototype.sumObjValues = function () {
//   const values = Object.values(this);
//   let sum = 0;

//   for (const value of values) {
//     sum += value;
//   }

//   return sum;
// };

// console.log(Object.sumObjValues(salaries));
// console.log(salaries.sumObjValues());

// console.log(Object.values(salaries));

//? Дано об'єкт, що представляє користувача з кількома властивостями. Напиши функцію, яка поверне кількість властивостей у цьому об'єкті.

// const user = {
//   firstName: "John",
//   lastName: "Dou",
//   age: 50,
// };

// function getObjectLength(obj) {
//   return Object.keys(obj).length;
// }

// console.log(getObjectLength(user));

//? Напиши функцію, яка перевіряє, чи є об'єкт порожнім (не містить жодної властивості).

// function isEmptyObj(obj) {
//   return Object.keys(obj).length === 0;
// }

// console.log(isEmptyObj({}));
// console.log(isEmptyObj({ username: "ralf225"}));
