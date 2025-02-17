const items = document.querySelectorAll(".item");
const numberOfCategories = items.length;
console.log(`Number of categories ${numberOfCategories}`);

items.forEach((item) => {
  console.log(`Categories: ${item.firstElementChild.textContent}`);
});

// categories.forEach((category) => {
//   const categoryTitle = category.querySelector("h2").textContent;
//   const categoryElements = category.querySelectorAll("li").length;
//   console.log(`Category: ${categoryTitle}`);
//   console.log(`Elements: ${categoryElements}`);
// });
