function calculateTotalPrice(order) {
  let totalPrice = 0;
  for (let item of order) {
    totalPrice += item;
  }
  return totalPrice;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));
