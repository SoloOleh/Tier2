const el = document.querySelector(".text");
const nested = document.querySelector(".sub-text");

console.log(el.textContent); // "Username: Mango"
console.log(nested.textContent); // "Mango"

el.textContent = "Username: Poly";
console.log(el.textContent); // "Username: Poly"

const textEl = document.querySelector(".article-text");
console.log(textEl.textContent); // text inside p.article-text

const titleEl = document.querySelector(".article-title");
titleEl.textContent = "Welcome to Bahamas!";
