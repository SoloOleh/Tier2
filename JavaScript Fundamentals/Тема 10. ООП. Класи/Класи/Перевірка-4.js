class Car {
  constructor(params) {
    this.brand = params.brand;
    this.model = params.model;
    this.price = params.price;
  }
  getPrice() {
    return this.price;
  }
  changePrice(newPrice) {
    this.price = newPrice;
  }
}
const car = new Car({
  brand: "Audi",
  model: "Q3",
  price: 36000,
});

console.log(car); // { brand: 'Audi', model: 'Q3', price: 36000 }

console.log(car.getPrice()); // 36000

car.changePrice(35000);

console.log(car.getPrice()); // 35000
