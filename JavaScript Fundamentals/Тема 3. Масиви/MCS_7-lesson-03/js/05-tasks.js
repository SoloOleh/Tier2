/*
? Напиши скрипт для обчислення площі прямокутника зі сторонами,
? значення яких зберігаються у змінній values у вигляді рядка.
? Значення гарантовано розділені пробілом.
 */

// 1. розбиваємо радок на два окремих значення по пробілу методом split
// 2. Привести до числа перший і другий елемент масиву
// 3. помнижити значення між собою

// const values = "8 11";

// function calculateSquare(value) {
//   const valueArr = value.split(" ");
//   const width = Number(valueArr[0]);
//   const height = Number(valueArr[1]);

//   return width * height;
//   //   return Number(valueArr[0]) * Number(valueArr[1]);
// }

// console.log(calculateSquare(values));
// console.log(calculateSquare("5 120"));

/*
? Напиши скрипт, який підраховує суму всіх парних чисел у масиві.
*/

/*
1. Створюємо змінну для накопичення суми
2. запускаємо цикл для перебору елементів масиву for of
3. робимо перевірку що поточне значення є парним
4. якщо є парним - додаємо його до накопичувача суми
*/

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];

// function sumOfEven(arr) {
//   let sum = 0;

//   for (const el of arr) {
//     sum += el % 2 === 0 ? el : 0;
//     // if (el % 2 === 0) {
//     //   sum += el;
//     // }
//   }

//   return sum;
// }

// console.log(sumOfEven(numbers));

/*
? Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
? У змінних names та phones зберігаються рядки імен та телефонних номерів,
? розділені комами. Порядковий номер імен та телефонів у рядках вказують на
? відповідність. Кількість імен та телефонів гарантовано однакова.
*/

/*
1. розділити два рядки на два окремих масиви по комі
2. запускаємо цикл на будь-який з масивів по індексам
3. по одному індексу звертаємось по черзі до двух масивів і логуємо їх
*/

// const names = "Jacob,William,Solomon,Artemis";
// const phones = "89001234567,89001112233,890055566377,890055566300";

// const namesArr = names.split(",");
// const phonesArr = phones.split(",");

// for (let i = 0; i < namesArr.length; i += 1) {
//   console.log(`${i + 1}. ${namesArr[i]} - ${phonesArr[i]}`);
// }

/*
? Напиши скрипт, який «розгортає» рядок (зворотний порядок літер)
? та виводить її в консоль.
*/

/*
1. створюємо змінну накопичувач речення у зворотньому порядку (пустий рядок) 
2. запускаємо зворотній цикл від довжити до 0 з кроком -1 
3. додаємо до накопичувача поточний символ рядку

*/

// const string = "Hello world!"; // !dlrow olleH

// function reverseStr(str) {
//   let reversedStr = "";

//   for (let i = str.length - 1; i >= 0; i -= 1) {
//     reversedStr += str[i];
//   }

//   return reversedStr;
// }

// console.log(reverseStr(string));
// console.log(string.split("").reverse().join(""));

/*
? Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати
? для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
*/

/*
    1. створюємо змінну яка буде зберігати найменше число в масиві та ініціалізуємо її значенням першого елементу масиву
    2. запускаємо цикл на перебір всіх елементів масиву 
    3. порівнюємо поточний елемент з мінімальним, якщо він менше за мінімальний то поточний стає новим мінімальним
    4. повертаємо результат

*/

// const values = [17, -10, 94, -30, 1, 23, -20];

// function findMinInArr(arr) {
//   let min = arr[0];

//   for (let i = 1; i < arr.length; i += 1) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//     // min = arr[i] < min ? arr[i] : min;
//   }

//   return min;
// }

// console.log(Math.min(...values));

// console.log(findMinInArr(values));

/*
? У нас є декілька масивів із зарплатами працівників із різних відділів, потрібно порахувати загальну суму зарплат
*/

// const managerSalaries = [100, 150, 250, 400, 500];
// const developersSalaries = [800, 1500, 4000];

// const salaries = managerSalaries.concat(developersSalaries);

// let total = 0;

// for (const salary of salaries) {
//   total += salary;
// }

// console.log("TOTAL:", total);
// console.log("Avg:", total / salaries.length);
