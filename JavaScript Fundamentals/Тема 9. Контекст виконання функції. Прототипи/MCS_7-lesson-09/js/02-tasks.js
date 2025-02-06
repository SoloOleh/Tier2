//? Що буде виведено в консоль

// function foo() {
//   console.log(this);
// }

// foo(); // undefined (1)

//? Що буде виведено в консоль

// const book = {
//   title: 'React for beginners',

//   showThis() {
//     console.log('showThis -> this', this);
//   },

//   showTitle() {
//     console.log('showTitle -> this.title', this.title);
//   },
// };

// book.showThis(); // book (2)

// const outerShowThis = book.showThis;

// outerShowThis(); // undefined (3/1)

// const outerShowTitle = book.showTitle;

// outerShowTitle(); // Type Error (3/1)

//? Що буде виведено в консоль

// let user = {
//   name: "Джон",

//   go() {
//     console.log(this);
//   },
// };

// const goFn = user.go;

// goFn(); // undefined (3/1)

// const goFn2 = user.go(); // undefined

// goFn2(); // Err is not a function -> undefined()

/*
? Тут функція makeUser повертає об'єкт.
? Яким буде результат при зверненні до об'єкта ref? Чому?
*/

// const makeUser = function () {
//   console.log(this);

//   return {
//     name: "Джон",
//     ref: this, // this - контекст виклику фукнції, він привʼязаний до фукнції у якій знаходиться, дивимось на місце виклику функції makeUser та визначаємо її контекст, в нашому випадку це буде undefined за правилом номер 1 (нема обʼєкта, який викликає нашу функцію), відповідно, значенням this всередині усієї функції makeUser буде undefined
//   };
// };

// const user = makeUser(); // obj
// /*
// {
//     name: "Джон",
//     ref: undefined
// }
// */

// console.log(user.ref); // undefined
// console.log(user.ref.name); // undefined.name -> err

//? Що буде виведено в консоль

// function makeUser() {
//   return {
//     name: "Джон",

//     ref() {
//       return this;
//     },
//   };
// }

// const user = makeUser(); // obj

// /*
// {
//     name: "Джон",
//     ref() {...}
// }
// */

// console.log(user);
// console.log(user.ref());
// console.log(user.ref().name);

/*
? Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і
? розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та
? кількістю з властивості stones.
 */

// const chopShop = {
//   stones: [
//     { name: "Emerald", price: 1300, quantity: 4 },
//     { name: "Diamond", price: 2700, quantity: 3 },
//     { name: "Sapphire", price: 1400, quantity: 7 },
//     { name: "Ruby", price: 800, quantity: 2 },
//   ],

//   calcTotalPrice(stoneName) {
//     const currentStone = this.stones.find(
//       (stone) => stoneName.toLowerCase() === stone.name.toLowerCase()
//     );

//     if (!currentStone) {
//       console.log(`${stoneName} не знайдено!`);
//       return 0;
//     }

//     return currentStone.price * currentStone.quantity;
//   },
// };

// console.log(chopShop.calcTotalPrice("Emerald")); // 5200
// console.log(chopShop.calcTotalPrice("Diamond")); // 8100
// console.log(chopShop.calcTotalPrice("Sapphire")); // 9800
// console.log(chopShop.calcTotalPrice("Ruby")); // 1600
// console.log(chopShop.calcTotalPrice("Aconit")); // Aconit не знайдено!
