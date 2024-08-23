const books = [
  { title: "The Last Kingdom", author: "Bernard Cornwell" },
  { title: "Beside Still Waters", author: "Robert Sheckley" },
  { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky" },
];

const authorToSearchFor = "Robert Sheckley";

for (const book of books) {
  if (book.author === authorToSearchFor) {
    console.log(book);
    console.log(book.title);
    console.log(book.rating);
  }
}
