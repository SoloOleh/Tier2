function calculateTotal(number) {
  let total = 0;

  for (let i = 1; i <= number; i++) {
    total += i;
  }

  return total;
}

function calculateTotal(number) {
  let total = 0;
  let i = 1;

  while (i <= number) {
    total += i;
    i++;
  }

  return total;
}

function calculateTotal(number) {
  if (number === 0) {
    return 0;
  } else {
    return number + calculateTotal(number - 1);
  }
}

// v4

function calculateTotal(number) {
  let sum = 0;
  let count = 1;

  while (count <= number) {
    sum += count;
    count += 1;
  }
  return sum;
}
