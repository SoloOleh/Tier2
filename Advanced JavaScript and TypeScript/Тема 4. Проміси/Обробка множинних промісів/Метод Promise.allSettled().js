// Promise.allSettled([promise1, promise2, promise3, ...])

// Кейс 1
const p1 = Promise.resolve(1);
const p2 = Promise.reject("Rejected promise 2");
const p3 = Promise.resolve(3);

Promise.allSettled([p1, p2, p3]).then((values) => console.log(values));
// [
//   { status: "fulfilled", value: 1},
//   { status: "rejected", value: "Rejected promise 2"},
//   { status: "fulfilled", value: 3}
// ]

// Кейс 2
const t1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 2000);
});

const t2 = new Promise((resolve, reject) => {
  setTimeout(() => rejected(2), 1000);
});

Promise.race([t1, t2])
  .then((value) => console.log(value))
  .catch((error) => console.log(error)); // 2
