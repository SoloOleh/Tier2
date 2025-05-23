/*
 * Цикли
 *
 * - Цикл for
 * - Відлік від 0 до N
 * - Зворотній відлік від N до 0
 * - Збільшення/зменшення лічильника на 2+
 * - Інкремент і декремент
 * - Цикли while і do...while
 */

//* цикл - це спеціальна конструкція яка дозволяє вам виконувати один і тей самий код багато разів, часто використувається для перебору якогось набору даних

//* цикл for використовується тоді, коли ви точно знаєте кількість ітерацій (одне виконання циклу)

//* while(умова) - це цикл, який використовується в тих випадках, коли ви не знаєте точну кількість ітерацій, але вам треба виконувати певний код, допоки умова буде істиною

/*

for(ініціалізація змінних (зазвичай ітератора i); умова продовження циклу; пост вираз (зазвичай це зміна ітератора + -)){

}

*/

for (let i = 1; i <= 4; i += 1) {
  debugger;
  console.log(`Логування повідомлення. Ітерація #${i}`);
}

/*
1. for (let i = 1; 1 <= 4; i += 1) i = 1
2. for (i = 2; 2 <= 4; i += 1) i = 2
3. for (i = 3; 3 <= 4; i += 1) i = 3
4. for (i = 4; 4 <= 4; i += 1) i = 4
5. for (i = 5; 5 <= 4;) i = 5 -> 5 <= 4 - false
*/

/*
while(умова) {
 виконуєте цикл до тих пір поки умова буде true
}
*/

/*
? Виведіть числа від 1 до 50 використовуючи цикл while
*/

// for (let i = 1; i <= 50; i += 1) {
//   console.log(i);
// }

// let i = 1;

// while (i <= 50) {
//   console.log(i);
//   i += 1;
// }

/*
? Напишіть цикл, який пропонує prompt ввести число більше за 100.
? Якщо відвідувач введе інше число – попросити ввести ще раз, і так далі.
*/
// do while - спочатку робить - потім перевіряє. як мінімум 1 ітерація буде завжди

// let userNumber = 0;

// do {
//   userNumber = Number(prompt('Enter a number bigger than 100'));
// } while (userNumber <= 100);

// console.log(userNumber);

/*
? За допомогою циклу for виведіть парні числа від 2 до 10.
*/

//* v1
// for (let i = 2; i <= 10; i += 2) {
//   console.log(i);
// }

//* v2
// for (let i = 2; i <= 10; i += 1) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

/*
? Напиши цикл for, який виводить у консоль браузера
? числа за зростанням від a до b, але тільки якщо число кратне 5.
*/

// const a = 3;
// const b = 116;

// v2 з меншою кількістю ітерацій
// const rest = 5 % a;
// console.log(a + rest);

// for (let i = a; i <= b; i += 1) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

//! інкремент

// let i = 1;

// постфіксні - спочатку повертає значення а потім збільшує його на 1
// console.log(i++);
// console.log(i);

// префіксні - спочатку збільшує значення на 1 а потім повертає його
// console.log(++i);
// console.log(i);
