/*
 * - Function expression
 * - Псевдомасив arguments и Array.from
 * - hoisting
 */

//? Function declaration

// console.log(sum(1, 4)); //? hoisting - механізм за допомогою якого всі фанкшн декларейшн піднімаються на самий верх коду і дають змогу викликати себе в будь-якому місці програми

// function sum(a, b){
//     return a + b
// }

// console.log(sum(5, 8));
// console.log(sum(2, 9));

//? Function expression

// console.log(sum(5, 8)); //! в цьому випадку підняття не працює, бо ви взаємодієте не з фукнцією, а з константою, а до неї не можна звертатись вище місця оголошення

// const sum = function (a, b) {
//   return a + b;
// };

// console.log(sum(5, 8));
// console.log(sum(2, 9));

//? arguments

// function foo() {
//     console.log(arguments);
//     console.log(Array.from(arguments));

//     for(const arg of arguments){
//         console.log(arg);
//     }
// }

// foo(1, 2, 3);
// foo(1, 2, 3, 4, 5);
// foo(1, 2, 3, 4, 5, 6, 7);

/*
? Напиши функцію add для складання довільної кількості аргументів (чисел)
*/

function add() {
  let total = 0;

  for (const arg of arguments) {
    total += arg;
  }

  return total;
}

console.log(add(1, 4, 3, 5, 436, 2, 46, 3, 5));
console.log(add(1, 4, 3, 5, 436, 2, 46, 3, 5, 44, 4, 6, 3, 5));
console.log(add(54, 34));

/*
? Створіть функцію calculateAverage(), яка приймає довільну кількість числових аргументів
? та розраховує середнє арефметичне.
*/

function calculateAverage() {
  let total = 0;

  for (const arg of arguments) {
    total += arg;
  }

  return total / arguments.length;
}

console.log(calculateAverage(1, 4, 3, 5, 436, 2, 46, 3, 5));
console.log(calculateAverage(1, 4, 3, 5, 436, 2, 46, 3, 5, 44, 4, 6, 3, 5));
console.log(calculateAverage(54, 34));
