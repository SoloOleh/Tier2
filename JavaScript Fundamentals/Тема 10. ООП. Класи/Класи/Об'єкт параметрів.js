class User {
  constructor(params) {
    this.name = params.name;
    this.email = params.email;
  }
}

const mango = new User({
  name: "Mango",
  email: "mango@mail.com",
});

console.log(mango);
// { name: "Mango", email: "mango@mail.com" }
