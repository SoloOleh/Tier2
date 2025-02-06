/*
 * Метод find
 *
 * - Поелементно перебирає оригінальний масив
 * - Повертає перший елемент, що задовольняє умові або undefined
 */

const users = [
  {
    name: "Dima",
    age: 25,
    id: 15748,
  },
  {
    name: "Yulia",
    age: 30,
    id: 57385,
  },
  {
    name: "Gleb",
    age: 35,
    id: 957345,
  },
];

//* імперативний
// const searchBy = 57385;

// let result;

// for (const user of users) {
//   if (user.id === searchBy) {
//     result = user;
//     break;
//   }
// }

// console.log(result);

//* декларативний
// const searchBy = 57385;
// const result = users.find((user) => user.id === searchBy);

// console.log(result);

/*
 ? -----------------------------
 */
const allCars = [
  { make: "Honda", model: "CR-V", type: "suv", price: 24045 },
  { make: "Honda", model: "Accord", type: "sedan", price: 22455 },
  { make: "Mazda", model: "Mazda 6", type: "sedan", price: 24195 },
  { make: "Mazda", model: "CX-9", type: "suv", price: 31520 },
  { make: "Toyota", model: "4Runner", type: "suv", price: 34210 },
  { make: "Toyota", model: "Sequoia", type: "suv", price: 45560 },
  { make: "Toyota", model: "Tacoma", type: "truck", price: 24320 },
  { make: "Ford", model: "F-150", type: "truck", price: 27110 },
  { make: "Ford", model: "Fusion", type: "sedan", price: 22120 },
  { make: "Ford", model: "Explorer", type: "suv", price: 31660 },
];

/*
? Шукаємо машину за моделлю
 */

// const getCarByModel = (cars, model) => cars.find((car) => car.model === model)

// console.log(getCarByModel(allCars, 'F-150'));
// console.log(getCarByModel(allCars, 'CX-9'));
// console.log(getCarByModel(allCars, 'Cayenne'));

/*
? Шукаємо машину за типом кузова
 */

// const getCarByType = (cars, type) =>
//   cars.find((car) => car.type.toLowerCase() === type.toLowerCase());

// console.log(getCarByType(allCars, "sedan"));
// console.log(getCarByType(allCars, "truck"));
