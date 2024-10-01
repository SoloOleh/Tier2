function doStuffWithBook(title, pages, downloads, rating, isPublic) {
  // Робимо щось з параметрами
  console.log(title);
  console.log(numberOfPages);
  // І так далі
}

// ❌ Що таке 736? Що таке 10283? Що таке true?
doStuffWithBook("The Last Kingdom", 736, 10283, 8.38, true);

function doStuffWithBook(book) {
  // Робимо щось з властивостями об'єкта
  console.log(book.title);
  console.log(book.pages);
  // І так далі
}

// ✅ Все зрозуміло
doStuffWithBook({
  title: "The Last Kingdom",
  pages: 736,
  downloads: 10283,
  rating: 8.38,
  isPublic: true,
});

function doStuffWithBook(book) {
  const { title, pages, downloads, rating, isPublic } = book;
  console.log(title);
  console.log(pages);
}

function doStuffWithBook({ title, pages, downloads, rating, isPublic }) {
  console.log(title);
  console.log(pages);
}
