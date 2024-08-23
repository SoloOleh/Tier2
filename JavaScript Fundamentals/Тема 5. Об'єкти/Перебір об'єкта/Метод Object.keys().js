const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};
const keys = Object.keys(book);
console.log(keys); // ['title', 'author', 'genres', 'rating']

for (const key of keys) {
  console.log(key); // Ключ
  console.log(book[key]); // Значення властивості
}
