function calculateTotalPrice(order) {
  let totalPrice = 0;
  for (const price of order) {
    console.log(price);
    totalPrice += price;
  }
  return totalPrice;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));
