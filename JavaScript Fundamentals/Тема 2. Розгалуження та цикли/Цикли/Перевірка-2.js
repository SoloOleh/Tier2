function calculateTotal(number) {
  let total = 0;

  for (let i = 1; i <= number; i++) {
    total += i;
  }

  return total;
}

// v2
function calculateTotal(number) {
  let sum = 0;
  for (let count = 0; count <= number; count += 1) {
    console.log(count);
    sum += count;
  }
  return sum;
}
