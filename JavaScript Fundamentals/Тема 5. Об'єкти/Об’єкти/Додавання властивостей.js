const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

book.pageCount = 836;
book.originalLanguage = "en";
book.translations = ["ua", "ru"];
book.price = {
  hardcover: 39,
  softcover: 29,
};

console.log(book.pageCount); // 836
console.log(book.originalLanguage); // "en"
console.log(book.translations); // ["ua", "ru"]
console.log(book.price); // {hardcover: 39, softcover: 29}

book.translations.push("en");
console.log(book.translations); // ["ua", "ru", "en"]

book.translations = ["de"];
console.log(book.translations); // ["de"]

book.translations.ua = "best";
console.log(book.translations); // ['de', ua: 'best']

book.price.ebook = 19;
console.log(book.price); // {hardcover: 39, softcover: 29, ebook: 19}

book.price = {
  ebook: 15,
};
console.log(book.price); // {ebook: 15}
console.log(book);
