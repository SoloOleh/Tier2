/*
 * Метод reduce
 *
 * - Поелементно перебирає оригінальний масив
 * - Значення, що повертається, залежить від розробника
 */

//* імперативно
// const numbers = [1, 2, 3, 4, 5];

// const sumOfArr = (arr) => {
//   let total = 0;
//   for (const el of arr) {
//     total += el;
//   }

//   return total;
// };

// console.log(sumOfArr(numbers));

//* декларативно

//! з початковим значенням аккумулятор

// const numbers = [1, 2, 3];

// const sumOfArr = (arr) => arr.reduce((total, el) => total + el, 0);

// console.log(sumOfArr(numbers));

/*
[1, 2, 3].reduce((total, el) => total + el, 0);

1.
(total = 0, el = 1) => total(0) + el(1) -> 1

2.
(total = 1, el = 2) => total(1) + el(2) -> 3

3.
(total = 3, el = 3) => total(3) + el(3) -> 6

result: 6 - фінальне значення аккумулятора
*/

//! без початкового значення аккумулятору

// const numbers = [1, 2, 3];

// const sumOfArr = (arr) => arr.reduce((total, el) => total + el);

// console.log(sumOfArr(numbers));

/*
[1, 2, 3].reduce((total, el) => total + el);

1.
(total = 1, el = 2) => total(1) + el(2) -> 3

2.
(total = 3, el = 3) => total(3) + el(3) -> 6


result: 6 - фінальне значення аккумулятора
*/

//.reduce(callback, initalAcc)
// callback(acc, el, i, arr) - колбек який викликається на кожному елементі масиву. acc - це зовнішня змінна яка знаходиться за межами циклу для взаємодії (наприклад, накопичення значень)
// initalAcc - початкове значення для параметру acc

/*
? Рахуємо загальну зарплату
 */

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// const salariesSum = Object.values(salary).reduce(
//   (total, salary) => total + salary,
//   0
// );

// console.log(salariesSum);

/*
? Рахуємо загальну кількість годин
 */
// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
//   { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
// ];

// const totalTimePlayed = players.reduce(
//   (total, player) => total + player.timePlayed,
//   0
// );

// console.log(players[0] + 5);
// console.log([1,2].toString());
// console.log(Number(5).toString());
// console.log(JSON.stringify(players[0]));

// console.log(totalTimePlayed);

/*
? Рахуємо загальну суму товарів кошика
 */
const cart = [
  { label: "Apples", price: 100, quantity: 2 },
  { label: "Bananas", price: 120, quantity: 3 },
  { label: "Lemons", price: 70, quantity: 4 },
];

const totalPrice = cart.reduce(
  (total, good) => total + good.price * good.quantity,
  0
);

console.log(totalPrice);
