function calculateEvenTotal(number) {
  let total = 0;

  for (let i = 1; i <= number; i++) {
    if (i % 2 === 0) {
      total += i;
    }
  }

  return total;
}

function calculateEvenTotal(number) {
  let total = 0;

  for (let i = 2; i <= number; i += 2) {
    total += i;
  }

  return total;
}

function calculateEvenTotal(number) {
  let sum = 0;

  for (let count = 1; count <= number; count += 1) {
    if (count % 2 === 0) {
      sum += count;
    }
  }

  return sum;
}

function calculateEvenTotal(number) {
  let sum = 0;
  let count = 1;

  while (count <= number) {
    if (count % 2 === 0) {
      sum += count;
    }
    count += 1;
  }

  return sum;
}
