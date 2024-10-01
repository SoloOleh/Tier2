// Promise.all([promise1, promise2, promise3, ...])

// const p1 = Promise.resolve(1);
// const p2 = Promise.resolve(2);
// const p3 = Promise.resolve(3);

// Promise.all([p1, p2, p3])
//   .then((values) => console.log(values)) // [1, 2, 3]
//   .catch((error) => console.log(error));

const p1 = Promise.resolve(1);
const p2 = Promise.reject("Rejected promise 2");
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3])
  .then((values) => console.log(values))
  .catch((error) => console.log(error)); // "Rejected promise 2"
