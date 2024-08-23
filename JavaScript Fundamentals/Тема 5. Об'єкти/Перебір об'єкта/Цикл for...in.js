// for (key in object) {
//   // інструкції
// }

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};

for (const key in book) {
  console.log(key); // Ключ
  console.log(book[key]); // Значення властивості з таким ключем
}
