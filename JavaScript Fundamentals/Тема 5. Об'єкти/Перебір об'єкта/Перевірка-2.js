const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};

const values = [];
const keys = Object.keys(apartment);

for (const key of keys) {
  console.log(key); // Ключ
  values.push(apartment[key]); // Значення властивості
}

console.log(keys);
console.log(values);
