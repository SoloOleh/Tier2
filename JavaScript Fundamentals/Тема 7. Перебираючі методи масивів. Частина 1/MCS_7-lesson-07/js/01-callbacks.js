/*
 * Функція зворотнього виклика (callback)
 *
 * - Функція як значення
 * - Колбек-функції
 * - Інлайн-колбеки
 */

// функція вищого порядку - фукнція яка очікує іншу фукнцію в якості параметру

function foo(msg, callback) {
  // let callback = sum
  console.log(`FOO SAYS: ${msg}`);

  console.log(callback);
  console.log(callback(5, 7));
}

// колбек фукнція - функція яка передається в іншу фукнцію в якості аргументу
const sum = function (a, b) {
  return a + b;
};

const mult = function (a, b) {
  return a * b;
};

// foo("Hello world", sum);
// foo("second call", mult);
// foo("second call", mult()); //! Ніколи не можна викликати колбек фукнцію під час її передачі, тому що під час її виклику вона виконується одразу і в функцію вищого порядку буде йти не посилання на ваш колбек - а результат його виконання. В даному випадку результат виклику функції mult буде NaN. І значенням для параметру callback буде NaN. Коли ми робимо callback(a, b); то ми намагаємось викликати значення NaN як фукцнію. Це значення не є фукцією, тому ми і отримуємо помилку що Ucaught TypeError: callback is not a function

/*
? Функція calc(a, b, callback)
 */

// const calc = function (a, b, callback) {
//   console.log(callback);
//   const result = callback(a, b);

//   console.log(result);
// };

// const add = function (valueA, valueB) {
//   return valueA + valueB;
// };

// const division = function (valueA, valueB) {
//   return valueA / valueB;
// };

// calc(10, 20, add);
// calc(20, 10, division());

// calc(20, 10, division);

// інлайн функція (інлайн колбек анонімна фукнція)
// calc(10, 20, function (valueA, valueB) {
//   return valueA + valueB;
// });

// calc(20, 10, function (valueA, valueB) {
//   return valueA / valueB;
// });

/*
? Напишіть функцію each(array, callback), яка першим параметром очікує масив,
? а другим - функцію, яка застосовується до кожного елемента масиву. Функція
? each повинна повернути новий масив, елементами якого будуть
? результати виклику коллбека.
 */

function each(arr, callback) {
  const newArr = [];

  for (const item of arr) {
    newArr.push(callback(item)); // пушимо в новий масив результат виклику колбек фукнції на кожному елементі старого масиву
  }

  return newArr;
}

console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value - 10;
  })
); // [54, 39, 26, 15, 6]

console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return Math.sqrt(value);
  })
);

console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.ceil(value);
  })
);

console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.floor(value);
  })
);
