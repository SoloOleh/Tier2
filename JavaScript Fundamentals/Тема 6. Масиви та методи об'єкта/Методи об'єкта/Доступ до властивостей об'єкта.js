const bookShelf = {
  books: ["The Last Kingdom", "The Mist"],
  getBooks() {
    return this.books;
  },
};

console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist"]
