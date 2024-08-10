// Оголошення змінної age
let age;

// Оголошення змінної isAdult та присвоєння їй результату перевірки
let isAdult = age >= 18;

// Приклади для перевірки
age = 8;
isAdult = age >= 18; // false

age = 14;
isAdult = age >= 18; // false

age = 20;
isAdult = age >= 18; // true

age = 37;
isAdult = age >= 18; // true

// Виведення результатів
console.log(`Age: 8, isAdult: ${age >= 18}`);
console.log(`Age: 14, isAdult: ${age >= 18}`);
console.log(`Age: 20, isAdult: ${age >= 18}`);
console.log(`Age: 37, isAdult: ${age >= 18}`);


