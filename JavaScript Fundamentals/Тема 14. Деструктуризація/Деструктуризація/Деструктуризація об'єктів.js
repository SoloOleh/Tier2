const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

// const accessType = book.isPublic ? "pulbic" : "private";
// const message = `Book ${book.title} by author ${book.author} with rating ${book.rating} is in ${accessType} access!`;

// Деструктуризуємо
const { title, author, isPublic, rating } = book;

// Використовуємо
const accessType = isPublic ? "pulbic" : "private";
const message = `Book ${title} by author ${author} with rating ${rating} is in ${accessType} access!`;
