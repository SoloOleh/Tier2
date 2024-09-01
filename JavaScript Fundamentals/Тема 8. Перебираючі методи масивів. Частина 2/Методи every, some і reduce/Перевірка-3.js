const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce((total, element) => {
//   return total + element;
// }, 0); // 2692

const totalPlayTime = playtimes.reduce(
  (total, element) => (total += element),
  0
);

const averagePlayTime = totalPlayTime / playtimes.length; // 673

console.log(totalPlayTime); // 2692
