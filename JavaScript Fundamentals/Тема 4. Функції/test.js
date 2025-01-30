// function createReversedArray() {
//   const array = Array.from(arguments);
//   const reversedArray = array.toReversed();
//   return reversedArray;
// }

// console.log(createReversedArray(12, 85, 37, 4));

// function calculateTax(amount, taxRate = 0.2) {
//   const tax = amount * taxRate;
//   return tax;
// }

// console.log(calculateTax(100));

// function slugify(title) {
//   const titleLowerCase = title.toLowerCase();
//   //   console.log(titleLowerCase);
//   const splited = titleLowerCase.split(" ");
//   //   console.log(splited);
//   const joined = splited.join("-");
//   //   console.log(joined);
//   return joined;
// }

// console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
// console.log(slugify("English for developer")); // "english-for-developer"
// console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

// function makeArray(firstArray, secondArray, maxLength) {
//   const newArray = firstArray.concat(secondArray);
//   return newArray.slice(0, maxLength);
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []

// function filterArray(numbers, value) {
//   const newArray = [];
//   for (let number of numbers) {
//     if (number > value) {
//       newArray.push(number);
//     }
//   }
//   return newArray;
// }

function filterArray(numbers, value) {
  let filteredNumbers = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > value) {
      filteredNumbers.push(numbers[i]);
    }
  }
  return filteredNumbers;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
