function createArrayOfNumbers(min, max) {
  const arrayOfNumbers = [];
  for (let i = min; i <= max; i += 1) {
    arrayOfNumbers.push(i);
  }
  return arrayOfNumbers;
}

console.log(createArrayOfNumbers(1, 3));
