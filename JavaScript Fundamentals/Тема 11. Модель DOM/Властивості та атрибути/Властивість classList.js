const hasActiveClass = link.classList.contains("is-active"); // true

const hasActiveClass2 = link.classList.contains("title"); // false

link.classList.add("special");
console.log(link.classList);
// ["link", "is-active", "special", length: 3, value: "link is-active special"]

link.classList.remove("is-active");
console.log(link.classList);
// ["link", "special", length: 2, value: "link special"]

link.classList.toggle("is-active");
console.log(link.classList);
// ["link", "special", "is-active", length: 3, value: "link special is-active"]

link.classList.toggle("is-active");
console.log(link.classList); // ["link", "special", length: 2, value: "link special"]

link.classList.replace("special", "regular");
console.log(link.classList);
// ["link", "regular", "is-active", length: 3, value: "link regular is-active"]
