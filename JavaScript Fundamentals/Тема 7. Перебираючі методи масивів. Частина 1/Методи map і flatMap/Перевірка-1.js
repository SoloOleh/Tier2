// function changeEven(numbers, value) {
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//     }
//   }
// }

const changeEven = (numbers, value) => {
  const newArray = [];
  numbers.forEach((number) => {
    if (number % 2 === 0) {
      newArray.push(number + value);
    } else {
      newArray.push(number);
    }
  });
  return newArray;
};

console.log(changeEven([1, 2, 3, 4, 5], 10)); // ==> [1, 12, 3, 14, 5]

function changeEvenClassic(numbers, value) {
  let newArray = [];
  for (let number of numbers) {
    if (number % 2 === 0) {
      newArray.push(number + value);
    } else {
      newArray.push(number);
    }
  }
  return newArray;
}

console.log(changeEvenClassic([1, 2, 3, 4, 5], 10)); // ==> [1, 12, 3, 14, 5]
