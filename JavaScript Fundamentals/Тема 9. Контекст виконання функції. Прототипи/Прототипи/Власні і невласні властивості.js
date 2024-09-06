const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = "Mango";

console.log(dog); // {name: "Mango", [[Prototype]]: animal}
console.log(dog.name); // "Mango"
console.log(dog.legs); // 4

console.log(dog.hasOwnProperty("name")); // true
console.log(dog.hasOwnProperty("legs")); // false
