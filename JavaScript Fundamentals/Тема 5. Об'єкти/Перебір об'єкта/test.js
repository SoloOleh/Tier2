const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4.7,
  price: 5000,
  tags: ["premium", "promoted", "top", "trusted"],
  owner: {
    name: "Henry Sibola",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

const keys = Object.keys(apartment);
console.log(keys);

const values = Object.values(apartment);
console.log(values);

for (const key in apartment) {
  console.log(key); // Ключ
  console.log(apartment[key]); // Значення властивості з таким ключем
}
