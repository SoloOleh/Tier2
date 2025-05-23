function calculateTotalPrice(order) {
  let total = 0;
  for (let i = 0; i < order.length; i++) {
    total += order[i];
  }
  console.log(total);
  return total;
}

// v2
// function calculateTotalPrice(order) {
//   let total = 0;
//   for (const price of order) {
//     total = total + price;
//   }
//   console.log(total);
//   return total;
// }

function calculateTotalPrice(order) {
  let totalPrice = 0;
  for (let i = 0; i < order.length; i += 1) {
    totalPrice += order[i];
  }
  return totalPrice;
}

calculateTotalPrice([12, 85, 37, 4]); //138
calculateTotalPrice([164, 48, 291]); //503
calculateTotalPrice([412, 371, 94, 63, 176]); //1116
