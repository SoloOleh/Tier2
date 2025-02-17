const categories = document.querySelectorAll('.item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
  const categoryTitle = category.querySelector('h2').textContent;
  const categoryElements = category.querySelectorAll('li').length;
  console.log(`Category: ${categoryTitle}`);
  // v2
  // console.log(`Categories: ${category.firstElementChild.textContent}`);
  console.log(`Elements: ${categoryElements}`);
});
