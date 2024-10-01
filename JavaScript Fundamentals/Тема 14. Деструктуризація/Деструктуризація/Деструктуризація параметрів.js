function printUserInfo(user) {
  console.log(`Name: ${user.name}, Age: ${user.age}, Hobby: ${user.hobby}`);
}

printUserInfo({
  name: "Alice",
  age: 25,
  hobby: "dancing",
}); // Name: Alice, Age: 25, Hobby: dancing

function printUserInfo(user) {
  const { name, age, hobby } = user;
  console.log(`Name: ${name}, Age: ${age}, Hobby: ${hobby}`);
}

printUserInfo({
  name: "Alice",
  age: 25,
  hobby: "dancing",
}); // Name: Alice, Age: 25, Hobby: dancing

function printUserInfo({ name, age, hobby }) {
  console.log(`Name: ${name}, Age: ${age}, Hobby: ${hobby}`);
}

printUserInfo({
  name: "Alice",
  age: 25,
  hobby: "dancing",
}); // Name: Alice, Age: 25, Hobby: dancing
