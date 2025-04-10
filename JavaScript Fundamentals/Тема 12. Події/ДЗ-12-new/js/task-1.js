const categories = document.querySelector("#categories");
console.log(categories);
const numberOfCategories = categories.children.length;
const numberOfCategories2 = categories.childElementCount;
console.log(`Number of categories: ${numberOfCategories}`);
console.log(`Number of categories: ${numberOfCategories2}`);

const categoriesList = document.querySelector("#categories");
const categoriesItems = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const elementsCount = item.querySelectorAll("ul li").length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});
