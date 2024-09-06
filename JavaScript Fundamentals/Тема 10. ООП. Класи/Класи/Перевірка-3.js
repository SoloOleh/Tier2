class Car {
  constructor(params) {
    this.brand = params.brand;
    this.model = params.model;
    this.price = params.price;
  }
}
const car = new Car({ brand: "Audi", model: "Q3", price: 36000 });
console.log(car); // { brand: 'Audi', model: 'Q3', price: 36000 }
