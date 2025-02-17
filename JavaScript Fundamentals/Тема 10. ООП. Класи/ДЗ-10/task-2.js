class Storage {
  #items;

  constructor(items) {
    this.#items = items;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    this.#items = this.#items.filter((item) => item !== itemToRemove);
  }
  // Альтернативний варіанти:
  // removeItem(itemToRemove) {
  //   const index = this.#items.indexOf(itemToRemove);
  //   if (index !== -1) {
  //     this.#items.splice(index, 1);
  //   }
  // }

  // removeItem(itemToRemove) {
  //   const indexToDelete = this.#items.indexOf(itemToRemove);

  //   if (indexToDelete === -1) {
  //     console.error(`${itemToRemove} не існує.`);
  //     return;
  //   }

  //   this.#items.splice(indexToDelete, 1);
  // }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
