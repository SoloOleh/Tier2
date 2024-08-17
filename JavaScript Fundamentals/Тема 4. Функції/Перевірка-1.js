function createReversedArray(...args) {
  // Створюємо новий масив з аргументів та використовуємо метод toReversed()
  return args.toReversed();
}

// Приклади викликів функції
console.log(createReversedArray(12, 85, 37, 4)); // [4, 37, 85, 12]
console.log(createReversedArray(164, 48, 291)); // [291, 48, 164]
console.log(createReversedArray(412, 371, 94, 63, 176)); // [176, 63, 94, 371, 412]
console.log(createReversedArray()); // []

function createReversedArray(...args) {
  // Створюємо новий масив з аргументів, використовуємо метод reverse()
  return args.reverse();
}

// Приклади викликів функції
console.log(createReversedArray(12, 85, 37, 4)); // [4, 37, 85, 12]
console.log(createReversedArray(164, 48, 291)); // [291, 48, 164]
console.log(createReversedArray(412, 371, 94, 63, 176)); // [176, 63, 94, 371, 412]
console.log(createReversedArray()); // []

function createReversedArray(...args) {
  const reversedArray = [];

  // Проходимо по масиву з кінця до початку і додаємо елементи у новий масив
  for (let i = args.length - 1; i >= 0; i--) {
    reversedArray.push(args[i]);
  }

  return reversedArray;
}

// Приклади викликів функції
console.log(createReversedArray(12, 85, 37, 4)); // [4, 37, 85, 12]
console.log(createReversedArray(164, 48, 291)); // [291, 48, 164]
console.log(createReversedArray(412, 371, 94, 63, 176)); // [176, 63, 94, 371, 412]
console.log(createReversedArray()); // []

function createReversedArray() {
  const args = Array.from(arguments); // Перетворюємо об'єкт arguments на масив
  const reversedArray = [];

  // Проходимо по масиву з кінця до початку і додаємо елементи у новий масив
  for (let i = args.length - 1; i >= 0; i--) {
    reversedArray.push(args[i]);
  }

  return reversedArray;
}

// Приклади викликів функції
console.log(createReversedArray(12, 85, 37, 4)); // [4, 37, 85, 12]
console.log(createReversedArray(164, 48, 291)); // [291, 48, 164]
console.log(createReversedArray(412, 371, 94, 63, 176)); // [176, 63, 94, 371, 412]
console.log(createReversedArray()); // []
