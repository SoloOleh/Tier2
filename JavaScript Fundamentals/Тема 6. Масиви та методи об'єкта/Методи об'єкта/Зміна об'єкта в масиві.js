const bookShelf = {
  books: [
    { title: "The Last Kingdom", rating: 8 },
    { title: "The Mist", rating: 6 },
  ],
  changeRating(bookName, newRating) {
    for (const book of this.books) {
      if (book.title === bookName) {
        book.rating = newRating;
      }
    }
  },
};

changeRating("The Mist", 9);
changeRating("The Last Kingdom", 4);
