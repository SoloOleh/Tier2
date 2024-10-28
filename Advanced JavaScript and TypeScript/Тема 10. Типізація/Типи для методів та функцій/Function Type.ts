let myFunc: (firstArg: string, secondArg: number) => void;

myFunc = (first: string, second: number) => {
  console.log(`First: ${first}, Second: ${second}`);
};

myFunc('Hello', 42); // Висновок: "First: Hello, Second: 42"

export {};

// Визначення типу функції, який приймає два числа та повертає число
type CallbackType = (num1: number, num2: number) => number;

// Функція, яка приймає два числа та функцію зворотного виклику, застосовує цю функцію до чисел та виводить результат
function calc(param1: number, param2: number, callback: CallbackType): void {
  console.log('Result:', callback(param1, param2));
}

// Приклади використання calc з різними функціями зворотного виклику
calc(1, 1, (num1, num2) => num1 + num2);
calc(10, 5, (num1, num2) => num1 - num2);

export { };


type CallbackType2 = (...nums: number[]) => number;

function calc2(param1: number, param2: number, callback: CallbackType2): void {
    console.log('Result:', callback(param1, param2));
}

calc2(1, 1, (num1, num2) => num1 + num2);
calc2(10, 5, (num1, num2) => num1 - num2);
