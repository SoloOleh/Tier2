class User {
  #email;

  constructor(params) {
    this.name = params.name;
    this.#email = params.email;
  }

  // Геттер email
  get email() {
    return this.#email;
  }

  // Сеттер email
  set email(newEmail) {
    if (newEmail === "") {
      console.log("Помилка! Пошта не може бути порожнім рядком!");
      return;
    }

    this.#email = newEmail;
  }
}

const mango = new User({
  name: "Mango",
  email: "mango@mail.com",
});

console.log(mango.email); // mango@mail.com

mango.email = "mango@supermail.com";

console.log(mango.email); // mango@supermail.com
