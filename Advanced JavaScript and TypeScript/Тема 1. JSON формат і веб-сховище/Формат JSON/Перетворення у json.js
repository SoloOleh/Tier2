const dog = {
  name: "Mango",
  age: 3,
  isGoodBoy: true,
};

// const json = JSON.stringify(dog);
// console.log(json); // '{"name":"Mango","age":3,"isGoodBoy":true}'

const json = JSON.stringify(() => console.log("Well, this is awkward"));
console.log(json); // undefined
