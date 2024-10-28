let tupleType: [string, boolean];
tupleType = ['hello', true]; // OK
// tupleType = [true, 'hello']; // Error. Неправильні типи
// tupleType = ['hello', true, true]; // Error. Більше значень ніж у tuple

export { };

let date: [number, number, number];
date = [7, 11, 2023]; // OK

// Але є нюанс: якщо ми додамо елемент у кортеж через метод push, то TypeScript не заперечуватиме, він не відстежує реальний вміст масиву.
let fixed: [string, number];
fixed = ['Text', 10];
fixed.push('Add this text');

export { };

let tuple: [string, ...number[]];

tuple = ['hello', 42, 100, 200]; // OK
