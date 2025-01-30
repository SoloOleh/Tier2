function getAllPropValues(propName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  const newArray = [];
  for (const product of products) {
    // console.log(product);
    for (key in product) {
      //   console.log(key);
      if (key === propName) {
        newArray.push(product[key]);
      }
    }
  }
  return newArray;
}

// console.log(getAllPropValues("name"));

function calculateTotalPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  for (product of products) {
    // console.log(product);
    if (product.name === productName) {
      totalPrice = product.price * product.quantity;
      return totalPrice;
    }
  }
  return `Product ${productName} not found!`;
}

// console.log(calculateTotalPrice("Radar"));
console.log(calculateTotalPrice("Droid"));
