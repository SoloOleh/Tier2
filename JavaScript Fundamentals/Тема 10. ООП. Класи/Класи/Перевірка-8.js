class Car {
  static #maxPrice = 50000;

  constructor(params) {
    this.price = params.price;
  }
  static checkPrice(price) {
    if (price <= this.#maxPrice) {
      //(price <= Car.#maxPrice) чомусь свариться конкретно в цьому файлі
      return "Success! Price is within acceptable limits";
    } else {
      return "Error! Price exceeds the maximum";
    }
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
