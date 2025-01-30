const propName = "name";
const user = {
  age: 25,
};

user[propName] = "Henry Sibola";
console.log(user.name); // "Henry Sibola"
console.log(user); // { age: 25, name: 'Henry Sibola' }

const propName2 = "name";
const user = {
  age: 25,
  // ключ цієї властивості буде взято зі значення змінної propName
  [propName2]: "Henry Sibola",
};
console.log(user.name); // "Henry Sibola"
