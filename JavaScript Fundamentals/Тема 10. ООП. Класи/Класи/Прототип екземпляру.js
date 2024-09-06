class User {
  constructor(params) {
    this.name = params.name;
    this.email = params.email;
  }

  getEmail() {
    return this.email;
  }

  changeEmail(newEmail) {
    this.email = newEmail;
  }
}

console.log(User.prototype); // {constructor: ƒ, getEmail: ƒ, changeEmail: ƒ}
