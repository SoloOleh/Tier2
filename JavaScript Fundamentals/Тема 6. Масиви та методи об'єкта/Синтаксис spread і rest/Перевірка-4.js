const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];

const allScores = [
  ...firstGroupScores,
  ...secondGroupScores,
  ...thirdGroupScores,
];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);

console.log(allScores); // [64, 42, 93, 89, 14, 51, 26, 29, 47, 18, 97, 81]
console.log(bestScore, worstScore); // 97 14
