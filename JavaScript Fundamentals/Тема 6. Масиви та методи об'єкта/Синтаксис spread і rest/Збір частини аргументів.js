function multiply(first, second, ...args) {
  console.log(first, second, args);
}

multiply(1, 2); // 1 2
multiply(1, 2, 3); // 1 2 [3]
multiply(1, 2, 3, 4); // 1 2 [3, 4]

// Це викличе помилку:
// function multiply(first, ...args, second) {
// }

// Це також викличе помилку:
// function multiply(...args, first, second) {
// }
