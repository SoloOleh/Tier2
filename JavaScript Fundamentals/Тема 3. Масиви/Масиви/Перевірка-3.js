function getLastElementMeta(array) {
  const lastIndex = array.length - 1;
  const lastElement = array[lastIndex];
  return [lastIndex, lastElement];
}

console.log(getLastElementMeta(["apple", "plum", "pear", "orange"]));

// function getLastElementMeta(array) {
//   const lastElementIndex = array.length - 1;
//   return [lastElementIndex + ", " + array[lastElementIndex]];
// }

// console.log(getLastElementMeta(["apple", "plum", "pear", "orange"]));
