function getExtremeScores(scores) {
  const minScore = Math.min(...scores);
  const maxScore = Math.max(...scores);
  return { best: maxScore, worst: minScore };
  //   return `best: ${maxScore}, worst: ${minScore}`;
  //   return [maxScore, minScore];
}

console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26])); // 17 93
