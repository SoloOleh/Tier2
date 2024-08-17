function calculateTotalPrice(order) {
  let total = 0;
  for (let i = 0; i < order.length; i++) {
    total += order[i];
  }
  console.log(total);
  return total;
}

calculateTotalPrice([12, 85, 37, 4]); //138
calculateTotalPrice([164, 48, 291]); //503
calculateTotalPrice([412, 371, 94, 63, 176]); //1116
