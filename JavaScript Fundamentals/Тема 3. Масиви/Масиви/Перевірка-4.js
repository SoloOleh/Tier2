function getExtremeElements(array) {
  const lastIndex = array.length - 1;
  const lastElement = array[lastIndex];
  const firstElement = array[0];
  return [firstElement, lastElement];
}

console.log(getExtremeElements([1, 2, 3, 4, 5])); // [1, 5]
