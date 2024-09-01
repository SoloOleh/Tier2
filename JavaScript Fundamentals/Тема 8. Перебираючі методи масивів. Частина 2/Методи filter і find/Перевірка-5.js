const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
];

const BOOK_TITLE = "The Dream of a Ridiculous Man";
const AUTHOR = "Robert Sheckley";

const bookWithTitle = (books) =>
  books.find((book) => book.title === BOOK_TITLE);

const bookByAuthor = books.find((book) => book.author === AUTHOR);

console.log(bookWithTitle(books)); // { title: "The Dream of a Ridiculous Man" }
// console.log(bookByAuthor); // { title: "Beside Still Waters" }
