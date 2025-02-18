/*
 * Синтаксис spread і rest
 *
 * - Залишкові параметри
 * - Збір частини аргументів
 * - Входження параметрів
 * - Створення масиву
 * - Створення об'єкта
 */

// ... - spread (роспилити, розбити) || rest (остача, залишок)
// поведінка оператору визначається тим, як він використовується та де він викликається
// spread - розбиває масив або обʼєкт на окремі значення (з правої сторони від дорівнює)
// rest - збирає окремі значення в масив або обʼєкт (з лівої сторони від дорівнює)

// const numbers = [23, 4, 5];

// console.log(...numbers);
// param = arg

// function sum(a, b) {
//   // let a = 1
//   // let b = 5
//   return a + b;
// }

// const numsArr = [1, 5];

// console.log(sum(1, 5));
// console.log(sum(...numsArr)); // spread

/*
? Пошук найменшої або найбільшої температури (числа)
*/
// const temps = [18, 14, 12, 21, 17, 29, 24];

// const minTemp = Math.min(...temps)
// const maxTemp = Math.max(...temps)

// console.log('temps: ', temps);
// console.log('minTemp: ', minTemp);
// console.log('maxTemp: ', maxTemp);

/*
? Створення копії масиву примітивів
*/

// const values = [23, 34, 4, 5];
// const valuesCopy = [...values]

// valuesCopy.push(10);

// console.log('values:', values);
// console.log('valuesCopy:', valuesCopy);

/*
? Створення копії масиву із складними типами даних
*/

const users = [
  { firstName: "Lucy" },
  { firstName: "Ollie" },
  { firstName: "Lily" },
];

// const usersCopy = [...users]; //! це не є коректна копія, так як була зроблена копія масиву, але обʼєкти всередині залишились такими самими
// const usersCopy = JSON.parse(JSON.stringify(users)); //! цей варіант працює тільки для тих вкладених обʼєктів у яких немає методів всередині, тому що в результаті цих викликів ви втратите методи
const usersCopy = _.cloneDeep(users);

usersCopy[0].firstName = "Andre";

// console.log("users:", users);
// console.log("usersCopy:", usersCopy);

/*
? Поєднуємо декілько масивів в один через spread
*/

const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

// const allTemps = lastWeekTemps.concat(currentTemps, nextWeekTemps);
const allTemps = [...lastWeekTemps, 100, ...currentTemps, ...nextWeekTemps];

// console.log(allTemps);

/*
? Створення копії об'єкта
*/
const obj = { x: 1, y: 2 };
// const objCopy = { ...obj };
const objCopy = { ...obj };
// const objCopy = Object.assign({}, obj);

objCopy.x = 10;

// console.log("obj: ", obj);
// console.log("objCopy: ", objCopy);

/*
? Поєднуємо декілько обʼєктів в один через spread
*/
const objA = { x: 1, y: 2 };
const objB = { x: 0, z: 3 };
const objC = { ...objA, ...objB };

// console.log('objA: ', objA);
// console.log('objB: ', objB);
// console.log('objC: ', objC);

/*
? Оновлюємо налаштування користувача
*/
const defaultSettings = {
  theme: "light",
  showNotifications: true,
  hideSidebar: false,
};

const userSettings = {
  theme: "dark",
  showNotifications: false,
};

const finalSettings = {
  ...defaultSettings,
  ...userSettings,
};

// console.log("defaultSettings:", defaultSettings);
// console.log("userSettings:", userSettings);
// console.log("finalSettings:", finalSettings);

//? Напишіть функцію sum, яка складає довільну кількість аргументів
function sum(...args) {
  let sum = 0;
  for (const num of args) {
    sum += num;
  }

  return sum;
}

console.log(sum(1, 2, 3, 4, 5));
console.log(sum(10, 40, 60));
console.log(sum(10, 40, 60, 100, 200, 300, 4000, 5));

// аргументи - права сторона від дорівнює
// параметри - ліва сторона від дорівнює
// параметр = аргументу
