class Car {
  #brand;
  //   model;
  //   price;

  constructor(params) {
    this.#brand = params.brand;
    this.model = params.model;
    this.price = params.price;
  }

  getPrice() {
    return this.price;
  }

  changePrice(newPrice) {
    this.price = newPrice;
  }
  getBrand() {
    return this.#brand;
  }

  changeBrand(newBrand) {
    this.#brand = newBrand;
  }
}

console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 }));

console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 }).getBrand());
