// boolean
let isDone: boolean = false;

// number
let decimal: number = 6;     // десяткові
let float: number = 3.14;    // речові або число з плаваючою крапкою
let hex: number = 0xf00d;    // шістнадцяткове
let binary: number = 0b1010; // двійкове
let octal: number = 0o744;   // вісімкове

// string
let color: string = "blue";

// null та undefined
let empty: null = null;
let notParam: undefined = undefined;

// Також не обов'язково вказувати тип даних, якщо ви передаєте його явно.
const num2 = 10;
const str2 = 'Some string';
const bool2 = true;
const empty2 = null;
const notParam2 = undefined;

function foo(num: number, str: string, bool: boolean, empty: null) {
    // Some logic
}
// Також, якщо ми задаємо значення за замовчуванням у функції, тип вказувати не потрібно.
function foo2(num = 10, str = 'Some string', bool = true, empty = null) {
    // Some logic
}
