// class User {
//   // Синтаксис оголошення методу класу
//   constructor() {
//     // ...
//   }
// }

// class User {
//   constructor() {
//     console.log("constructor call");
//   }
// }

// const mango = new User(); // "constructor call"
// console.log(mango); // {}

// class User {
//   constructor(name, email) {
//     console.log(name, email);
//   }
// }

// const mango = new User("Mango", "mango@mail.com"); // "Mango mango@mail.com"
// console.log(mango); // {}

class User {
  constructor(name, email) {
    // Ініціалізація властивостей екземпляра
    this.name = name;
    this.email = email;
  }
}

const mango = new User("Mango", "mango@mail.com");
console.log(mango); // { name: 'Mango', email: 'mango@mail.com' }

const poly = new User("Poly", "poly@mail.com");
console.log(poly); // { name: 'Poly', email: 'poly@mail.com' }
