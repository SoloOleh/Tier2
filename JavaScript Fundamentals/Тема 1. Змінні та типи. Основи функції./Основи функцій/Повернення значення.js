function multiply(x, y, z) {
	const product = x * y * z;
  // Повертаємо результат виразу множення
  return product;
}

// Результат роботи функції можна зберегти у змінну
const result = multiply(2, 3, 5);
console.log(result); // 30


//або 

// function multiply(x, y, z) {
//   return x * y * z;
// }

// const result = multiply(2, 3, 5);
// console.log(result); // 30




// function multiply(x, y, z) {
// 	const product = x * y * z;
// }

// const result = multiply(2, 3, 5);
// console.log(result); // undefined


function multiply(x, y, z) {
  console.log('The code before return is executed as usual');

  return x * y * z;

  console.log('This code is never executed because it is after return');
}

console.log(multiply(2, 3, 5)); // 30
