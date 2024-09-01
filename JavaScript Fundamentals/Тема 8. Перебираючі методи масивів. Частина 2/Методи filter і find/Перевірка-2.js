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
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";

// const topRatedBooks = books;
// const booksByAuthor = books;

const topRatedBooks = books.filter((book) => book.rating > MIN_RATING);

// function topRatedBooks(books, MIN_RATING) {
//   const topBooks = [];
//   for (let book of books) {
//     if (book.rating > MIN_RATING) {
//       topBooks.push(book);
//     }
//   }
//   return topBooks;
// }
// console.log(topRatedBooks(books, MIN_RATING));

const booksByAuthor = books.filter((book) => book.author === AUTHOR);

//
console.log(topRatedBooks); // масив об'єктів книг з рейтингом більше 8
console.log(booksByAuthor); // масив об'єктів книг автора Bernard Cornwell
