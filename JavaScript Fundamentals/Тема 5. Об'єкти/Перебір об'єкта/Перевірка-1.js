const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};

let keys = [];
let values = [];

for (const key in apartment) {
  keys.push(key);
  values.push(apartment[key]);
}

console.log(keys);
console.log(values);
