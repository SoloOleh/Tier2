function createArrayOfNumbers(min, max) {
  const arrayOfNumbers = [];
  for (let i = min; i <= max; i += 1) {
    arrayOfNumbers.push(i);
  }
  console.log(arrayOfNumbers);
  return arrayOfNumbers;
}
createArrayOfNumbers(14, 17);
