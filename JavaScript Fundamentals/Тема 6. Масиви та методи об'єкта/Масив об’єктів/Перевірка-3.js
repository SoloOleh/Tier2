function getAllPropValues(propName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  if (propName === "name") {
    const names = [];
    for (const product of products) {
      names.push(product.name);
    }
    console.log(names);
    return names;
  } else if (propName === "price") {
    const prices = [];
    for (const product of products) {
      prices.push(product.price);
    }
    console.log(prices);
    return prices;
  } else if (propName === "quantity") {
    const quantities = [];
    for (const product of products) {
      quantities.push(product.quantity);
    }
    console.log(quantities);
    return quantities;
  } else {
    console.log([]);
    return [];
  }
}

getAllPropValues("quantity"); // ["4", "3", "7", "9"]
getAllPropValues("category");

// v2
// const propValues = [];
// for (const product of products) {
//   if (product.hasOwnProperty(propName)) {
//     propValues.push(product[propName]);
//   }
// }
// return propValues;

// v3

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
