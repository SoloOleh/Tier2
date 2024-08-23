const obj = {
  method(value) {
    console.log(`I'm a method with ${value}!`);
  },
};

// obj.method(5); // "I'm a method with 5!"
// obj.method(10); // "I'm a method with 10!"

// ✅ Логічно й синтаксично згруповані сутності
const bookShelf = {
  books: ["The Last Kingdom", "Dream Guardian"],
  // Це метод об'єкта
  getBooks() {
    return "Returning all books";
  },
  // Це метод об'єкта
  addBook(bookName) {
    bookShelf.books.push(bookName); // this.books.push(bookName);
    return `Adding book ${bookName}`;
  },
};

// Виклики методів
bookShelf.getBooks(); // поверне "Returning all books"
bookShelf.addBook("New book 1"); // поверне "Adding book New book 1"
bookShelf.addBook("New book 2"); // поверне "Adding book New book 2"
console.log(bookShelf.books); // ["The Last Kingdom", "Dream Guardian", "New book 1", "New book 2"]
