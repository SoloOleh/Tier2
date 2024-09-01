array.toSorted((a, b) => {
  // Callback function body
});

// Сортування за зростанням
const scores = [61, 19, 74, 35, 92, 56];
const ascendingScores = scores.toSorted((a, b) => a - b);
console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// Сортування за спаданням
const scores2 = [61, 19, 74, 35, 92, 56];
const descendingScores = scores2.toSorted((a, b) => b - a);
console.log(descendingScores); // [92, 74, 61, 56, 35, 19]
