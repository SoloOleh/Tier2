// array.reduce((previousValue, element, index, array) => {
//   // Тіло колбек-функції
// }, initialValue);

const total = [2, 7, 3].reduce((previousValue, number) => {
  return previousValue + number;
}, 0);

console.log(total); // 12
