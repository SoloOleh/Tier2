console.log(JSON.parse("5")); // 5
console.log(JSON.parse("false")); // false
console.log(JSON.parse("null")); // null

const json = '{"name":"Mango","age":3,"isGoodBoy":true}';

const dog = JSON.parse(json);
console.log(dog); // {name: "Mango", age: 3, isGoodBoy: true} console.log(dog.name); // "Mango"
