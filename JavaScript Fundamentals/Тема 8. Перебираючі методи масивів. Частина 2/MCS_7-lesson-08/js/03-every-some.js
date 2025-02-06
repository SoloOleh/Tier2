/*
 * Метод every
 *
 * - Поелементно перебирає оригінальний масив
 * - Повертає true якщо всі елементи масиву задовольняють умову
 */

//* імперативно
// const isEveryEven = (arr) => {
//   for (const num of arr) {
//     if (num % 2 !== 0) {
//       return false;
//     }
//   }

//   return true;
// };

// console.log(isEveryEven([2, 6, 10, 36, 100, 126])); // true
// console.log(isEveryEven([2, 6, 10, 35, 100, 128])); // false

//* декларативно
// const isEveryEven = (arr) => arr.every((num) => num % 2 === 0);

// console.log(isEveryEven([2, 6, 10, 36, 100, 126])); // true
// console.log(isEveryEven([2, 6, 10, 35, 100, 128])); // false

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: true },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: false },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 280, points: 48, online: true },
];

//? Перевірте чи всі гравці онлайн

// const isAllOnline = players.every((player) => player.online);

// console.log("isAllOnline:", isAllOnline);

/*
 * Метод some
 *
 * - Поелементно перебирає оригінальний масив
 * - Повертає true якщо хоча б один елемент масиву задовольняє умову
 */

//* імперативно
// const isSomeEven = (arr) => {
//   for (const num of arr) {
//     if (num % 2 === 0) {
//       return true;
//     }
//   }

//   return false;
// };

// console.log(isSomeEven([1, 7, 11, 55, 4, 49, 101])); // true
// console.log(isSomeEven([1, 7, 11, 55, 43, 49, 101])); // false

//* декларативно
// const isSomeEven = (arr) => arr.some((num) => num % 2 === 0);

// console.log(isSomeEven([1, 7, 11, 55, 4, 49, 101])); // true
// console.log(isSomeEven([1, 7, 11, 55, 43, 49, 101])); // false

//? Перевірте чи є хоч хтось онлайн

const isAnyOnline = players.some((player) => player.online);

console.log("isAnyOnline: ", isAnyOnline);
