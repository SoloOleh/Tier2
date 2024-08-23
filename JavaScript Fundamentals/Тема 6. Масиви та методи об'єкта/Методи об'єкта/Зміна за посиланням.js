// const bookShelf = {
//   books: ["The Last Kingdom"],
// };

// bookShelf.books.push("The Mist");
// console.log(bookShelf.books); // ["The Last Kingdom", "The Mist"]

const bookShelf = {
  books: ["The Last Kingdom"],
  getBooks() {
    return this.books;
  },
  addBook(bookName) {
    this.books.push(bookName);
  },
};

console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
bookShelf.addBook("The Mist");
bookShelf.addBook("Dream Guardian");
console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist", "Dream Guardian"]
