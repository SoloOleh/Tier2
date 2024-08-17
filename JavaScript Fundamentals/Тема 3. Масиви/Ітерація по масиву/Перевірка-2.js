function getEvenNumbers(start, end) {
  let evenNumbers = [];

  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }
  return evenNumbers;
}

console.log(getEvenNumbers(2, 5)); // [2, 4]
