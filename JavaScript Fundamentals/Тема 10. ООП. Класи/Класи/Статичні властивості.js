class MyClass {
  static myProp = "value";
}

console.log(MyClass.myProp); // "value"

const inst = new MyClass();
console.log(inst.myProp); // undefined

class User {
  static roles = {
    admin: "admin",
    editor: "editor",
    basic: "basic",
  };

  #email;
  #role;

  constructor(params) {
    this.#email = params.email;
    this.#role = params.role || User.roles.basic;
  }

  get role() {
    return this.#role;
  }

  set role(newRole) {
    this.#role = newRole;
  }
}

const mango = new User({
  email: "mango@mail.com",
  role: User.roles.admin,
});

console.log(mango.role); // "admin"
mango.role = User.roles.editor;
console.log(mango.role); // "editor"
