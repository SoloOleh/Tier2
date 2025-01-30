/*
 * Перебір об'єкта
 *
 * - Цикл for...in
 * - Метод Object.keys
 * - Метод Object.values
 */

const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

//? Через цикл for...in - перебирає ключі обʼєкту (або індекси масиву)

// let total = 0;

// for(const key in feedback){
//     console.log(key);
//     console.log(feedback[key]); // feedback["good"], feedback["neutral"], feedback["bad"]
//     total += feedback[key]
// }

// console.log(total);

//? Через метод Object.keys() - повертає масив з ключів обʼєкту
// const objectKeys = Object.keys(feedback)

// console.log(objectKeys);

// let total = 0;

// for(const key of objectKeys){
//     console.log(key);
//     console.log(feedback[key]);
//     total += feedback[key]
// }

// console.log(total);

//? Через метод Object.values() - повертає масив зі значень обʼєкту

const objectValues = Object.values(feedback);

console.log(objectValues);

let total = 0;

for (const value of objectValues) {
  console.log(value);
  total += value;
}

console.log(total);

// console.log(Object.entries(feedback));
