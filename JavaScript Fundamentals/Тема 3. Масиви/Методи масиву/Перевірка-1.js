function getLength(array) {
  const arraySplit = array.join("");
  return arraySplit.length;
}

console.log(getLength(["Mango", "hurries", "to", "the", "train"]));
