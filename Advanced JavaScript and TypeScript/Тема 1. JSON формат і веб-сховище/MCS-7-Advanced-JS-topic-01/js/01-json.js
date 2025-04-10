/*
 * Формат JSON
 *
 * - Метод JSON.stringify(value)
 * - Метод JSON.parse(value)
 * - Перетворення функцій
 */

// const users = [
//   {
//     firstName: 'Danny',
//     lastName: 'Nguyen',
//     age: 30,

//     getFullName() {
//       return `${this.firstName} ${this.lastName}`;
//     },
//   },
//   {
//     firstName: 'Danny',
//     lastName: 'Nguyen',
//     age: 30,
//   },
//   {
//     firstName: 'Danny',
//     lastName: 'Nguyen',
//     age: 30,
//   },
//   {
//     firstName: 'Danny',
//     lastName: 'Nguyen',
//     age: 30,
//   },
// ];
// const usersStr = JSON.stringify(users);

// console.log('users:', users);
// console.log('usersStr:', usersStr);

// console.log(JSON.parse(usersStr));

/*
 * Конструкція try...catch для обробки помилок
 */

console.log('Start');

try {
  const user = JSON.parse('{"firstName":"Oleksii","lastName":"Repin"}');

  console.log(user);
} catch (err) {
  console.log(err);
}

console.log('End');
