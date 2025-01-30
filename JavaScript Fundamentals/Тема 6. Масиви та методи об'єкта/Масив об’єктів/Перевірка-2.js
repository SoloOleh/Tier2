function getProductPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

  for (const product of products) {
    if (product.name === productName) {
      return product.price;
    }
  }
  return null;
}

console.log(getProductPrice("Radar"));
console.log(getProductPrice("Engine"));
