function filterArray(numbers, value) {
  let filteredNumbers = [];
  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });
  return filteredNumbers;
}

function filterArray(numbers, value) {
  let filteredNumbers = [];
  numbers.forEach(function (number) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });
  return filteredNumbers;
}

console.log(filterArray([1, 2, 3, 4, 5], 3));
