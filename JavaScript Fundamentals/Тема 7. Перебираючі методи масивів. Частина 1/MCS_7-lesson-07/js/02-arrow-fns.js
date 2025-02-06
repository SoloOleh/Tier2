/*
 * Стрілочні функції
 * - Оголошення
 * - Явне і неявне поверненя
 * - Псевдомасив arguments (...args)
 * - Інлайн стрілочні функції
 */

/* Стрілочна фукнція - це синтаксичний цукор фукцніонального виразу (fn expression) з трьома особливостями (крім синтаксису).
 * 1. Немає локальної змінної arguments.
 * 2. Існує поняття неявного повернення (можна не писати оператор return у випадках коли немає фігурних дужок і тіло функції складається з 1 інструкції).
 * 3. Не має власного this, запамʼятовує this батька (зовнішньої області) і після цого запамʼятовування (під час створення фукнції) змінити цей this буде неможливо ніяким способом.
 */

//* Два і більше параметрів

//* fn expression
// const sum = function (a, b) {
//   return a + b;
// };

// const sum = (numA, numB) => {
//   return numA + numB;
// };

// console.log(sum(20, 30));

//* Один параметр
// const fnA = message => {
//   console.log(message);
// };

// fnA('Hello world!');

//* Без параметрів
// const fnA = () => {
//   console.log('Hello!');
// };

// fnA();

//* arguments
// const sum = (...args) => {
//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }

//   return total;
// };

// console.log(sum(1, 2, 3));
// console.log(sum(20, 30, 40, 2, 4));

//* Неявне повернення
// const sum = (numA, numB) => {
//   return numA + numB;
// };

// const sum = (numA, numB) => numA + numB;

// console.log(sum(20, 30));

/*
? Виконайте рефакторинг коду за допомогою стрілочних функцій.
*/

// function createProduct(partialProduct, callback) {
//   const product = { id: Date.now(), ...partialProduct };

//   callback(product);
// }

// before
// createProduct({ name: "🍎", price: 30, quantity: 3 }, function (product) {
//   console.log(product);
// });

// createProduct({ name: "🍋", price: 20, quantity: 5 }, function (product) {
//   console.log(product.price * product.quantity);
// });

// after

// createProduct({ name: "🍎", price: 30, quantity: 3 }, (product) =>
//   console.log(product)
// );

// createProduct({ name: "🍋", price: 20, quantity: 5 }, (product) =>
//   console.log(product.price * product.quantity)
// );

/*
? Виконайте рефакторинг коду за допомогою стрілочних функцій. (each)
*/

const each = (arr, callback) => {
  const newArr = [];

  for (const el of arr) {
    newArr.push(callback(el));
  }

  return newArr;
};
//before
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   })
// );
//after

console.log(each([64, 49, 36, 25, 16], (value) => value - 10));

//before
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   })
// );

//after
console.log(each([64, 49, 36, 25, 16], (value) => Math.sqrt(value)));

//before
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   })
// );

//after
console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], (value) => Math.ceil(value)));

//before
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   })
// );

//after

console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], (value) => Math.floor(value)));
