/*
? Напиши клас Storage який створює об'єкти для керування складом товарів.
? При виклику отримуватиме один аргумент - початковий масив товарів і
? записуватиме його властивість items.
?
? Додай методи класу:
? - getItems() - повертає масив товарів.
? - addItem(item) - отримує новий товар і додає його до поточних.
? - removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.
 */

class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    if (this.items.includes(item)) {
      console.error(`Товар ${item} вже є на складі.`);
      return;
    }
    this.items.push(item);
  }

  removeItem(item) {
    const indexToDelete = this.items.indexOf(item);

    if (indexToDelete === -1) {
      console.error(`Товару ${item} не існує.`);
      return;
    }

    this.items.splice(indexToDelete, 1);
  }
}

const storage = new Storage(["🍎", "🍋", "🍇", "🍑"]);

const items = storage.getItems();
console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

storage.addItem("🍌");
storage.addItem("🍎");
console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

storage.removeItem("🍋");
console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]

storage.removeItem("🍋");
