const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism"],
  },
];

// const genres = books.flatMap((book) => {
//   return book.genres;
// });

const genres = books.flatMap((book) => book.genres);
console.log(genres); // ["adventure", "history", "fiction", "horror", "mysticism"].
