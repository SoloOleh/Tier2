const propName = "name";
const user = {
  age: 25,
};

user[propName] = "Henry Sibola";
console.log(user.name); // "Henry Sibola"
console.log(user); // { age: 25, name: 'Henry Sibola' }

// const propName = "name";
// const user = {
//   age: 25,
//   // ключ цієї властивості буде взято зі значення змінної propName
//   [propName]: "Henry Sibola",
// };
// console.log(user.name); // "Henry Sibola"
