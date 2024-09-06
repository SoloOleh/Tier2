// class Car {
//   constructor(params) {
//     this.brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }
// }
// const car = new Car({ brand: "Audi", model: "Q3", price: 36000 });
// console.log(car); // { brand: 'Audi', model: 'Q3', price: 36000 }

class Car {
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}

const car = new Car("Audi", "Q3", 36000);
console.log(car); // { brand: 'Audi', model: 'Q3', price: 36000 }
