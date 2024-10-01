// const makePromise = (options) => {
//   // ...
// };

// makePromise({
//   value: "Some value",
//   delay: 2000,
//   shouldResolve: true,
// });

// value — значення, яке буде значенням проміса.
// delay — затримка в мілісекундах, після якої буде виконуватися проміс.
// shouldResolve — булеве значення, що вказує, чи повинен проміс виконатися (true), або бути відхиленим (false).

// const makePromise = (options) => {
//   return new Promise((resolve, reject) => {
//     // ...
//   });
// };

// const makePromise = ({ value, delay, shouldResolve = true }) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve(value);
//       } else {
//         reject(value);
//       }
//     }, delay);
//   });
// };

// const makePromise = ({ value, delay, shouldResolve = true }) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve(value);
//       } else {
//         reject(value);
//       }
//     }, delay);
//   });
// };

// makePromise({ value: "A", delay: 1000 })
//   .then((value) => console.log(value)) // "A"
//   .catch((error) => console.log(error));

// makePromise({ value: "B", delay: 3000 })
//   .then((value) => console.log(value)) // "B"
//   .catch((error) => console.log(error));

// makePromise({ value: "C", delay: 2000, shouldResolve: false })
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error)); // "C"

// Без функції цей же код виглядав би ось так:
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Fulfilled A");
  }, 1000);
})
  .then((value) => console.log(value))
  .catch((error) => console.log(error));

new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Fulfilled B");
  }, 3000);
})
  .then((value) => console.log(value))
  .catch((error) => console.log(error));

new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Rejected C");
  }, 2000);
})
  .then((value) => console.log(value))
  .catch((error) => console.log(error)); // "Rejected C"
