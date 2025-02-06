const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers;
// const oddNumbers = numbers;

const evenNumbers = numbers.filter((number) => number % 2 === 0);
// const evenNumbers = numbers.filter((number) => {
//   return number % 2 === 0;
// });

const oddNumbers = numbers.filter((number) => number % 2 !== 0);
console.log(evenNumbers); // [24, 82, 36, 18, 52]
console.log(oddNumbers); // [17, 61, 47, 73]
