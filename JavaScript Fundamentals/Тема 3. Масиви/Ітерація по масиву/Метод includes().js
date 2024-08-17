array.includes(element);

const planets = ["Earth", "Mars", "Venus"];

console.log(planets.includes("Earth")); // true
console.log(planets.includes("Mars")); // true
console.log(planets.includes("Venus")); // true
console.log(planets.includes("Jupiter")); // false

const fruits = ["apple", "banana", "orange"];

if (fruits.includes("banana")) {
  console.log("The array has an element banana");
} else {
  console.log("Array does not contain banana element");
}
