// const user = {
//   username: "Poly",
//   showThis() {
//     console.log(this);
//   },
// };

// user.showThis(); // {username: "Poly", showThis: ƒ}

// ("use strict");

// function showThis() {
//   console.log("this in showThis: ", this);
// }

// // Викликаємо у глобальному контексті
// showThis(); // "this in showThis: undefined"

"use strict";

function showThis() {
  console.log("this in showThis: ", this);
}

const user = {
  username: "Poly",
};

user.showContext = showThis;

// Викликаємо в контексті об'єкта
user.showContext(); // this in showThis: {username: "Poly", showContext: ƒ}

// Викликаємо в глобальному контексті
showThis(); // "this in showThis: undefined"
