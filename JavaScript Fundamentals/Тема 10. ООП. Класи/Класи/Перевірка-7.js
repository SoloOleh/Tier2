class Car {
  #price;
  static maxPrice = 50000;

  constructor(params) {
    this.#price = params.price;
  }

  get price() {
    return this.#price;
  }

  //   set price(newPrice) {
  //     if (newPrice > Car.maxPrice) {
  //       console.log(`Ціна вище максимальної`);
  //       return;
  //     } else {
  //       this.#price = newPrice;
  //     }
  //   }
  // }

  set price(newPrice) {
    if (newPrice < Car.maxPrice) {
      this.#price = newPrice;
    }
  }
}
const audi = new Car({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000
