const books = [
  { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
  { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 6.8,
  },
];

const titles = [];
for (const book of books) {
  titles.push(book.title);
}
console.log(titles); // ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man"]

let totalRating = 0;
for (const book of books) {
  totalRating += book.rating;
}
const averageRating = totalRating / books.length;
console.log(averageRating); // 8
