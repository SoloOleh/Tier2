function findNumber(start, end, divisor) {
  for (let i = start; i <= end; i += 1) {
    if (i % divisor === 0) {
      return i;
    }
  }
}

function findNumber(start, end, divisor) {
  let number;
  for (let count = start; count <= end; count += 1) {
    if (count % divisor === 0) {
      number = count;
      return number;
    }
  }
}
