const image = document.querySelector(".image");

console.log(image.attributes); // NamedNodeMap {0: class, 1: src, 2: alt, length: 3}

console.log(image.hasAttribute("src")); // true
console.log(image.hasAttribute("href")); // false

console.log(image.getAttribute("alt")); // "Rocks and waterfall"

image.setAttribute("alt", "Amazing nature");
console.log(image.getAttribute("alt")); // Amazing nature

image.alt = "Test";
console.log(image.alt);

image.removeAttribute("alt");
console.log(image.hasAttribute("alt")); // false
