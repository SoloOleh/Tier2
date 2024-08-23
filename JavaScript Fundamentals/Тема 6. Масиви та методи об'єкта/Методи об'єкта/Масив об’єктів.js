const bookShelf = {
  books: [
    { title: "The Last Kingdom", rating: 8 },
    { title: "The Mist", rating: 6 },
  ],
  getBooks() {
    return this.books;
  },
  addBook(newBook) {
    this.books.push(newBook);
  },
};

bookShelf.addBook({ title: "Dream Guardian", rating: 9 });
console.log(bookShelf.getBooks());

const bookShelf2 = {
  books: [
    { title: "The Last Kingdom", rating: 8 },
    { title: "The Mist", rating: 6 },
  ],
  getAvarageRating() {
    let totalRating = 0;

    for (const book of this.books) {
      totalRating += book.rating;
    }

    return totalRating / this.books.length;
  },
};

console.log(bookShelf2.getAvarageRating()); // 7
