function calculateTax(amount, taxRate = 0.2) {
  return amount * taxRate;
}

console.log(calculateTax(100, 0.1)); // 10
console.log(calculateTax(100)); //20
