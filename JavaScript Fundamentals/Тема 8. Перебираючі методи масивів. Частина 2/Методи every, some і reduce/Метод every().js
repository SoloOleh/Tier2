// array.every((element, index, array) => {
//   // Тіло колбек-функції
// });

// Усі елементи більші або дорівнюють нулю? - так
[1, 2, 3, 4, 5].every((value) => value >= 0); // true

// Усі елементи більші або дорівнюють нулю? - ні
[1, 2, 3, -10, 4, 5].every((value) => value >= 0); // false

const products = [
  { name: "apple", quantity: 2 },
  { name: "orange", quantity: 5 },
  { name: "plum", quantity: 0 },
];

const hasEveryProduct = products.every((product) => product.quantity > 0);
console.log(hasEveryProduct); // false
