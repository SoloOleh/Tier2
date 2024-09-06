class User {
  #email;

  constructor(email) {
    this.#email = email;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }
}

class ContentEditor extends User {
  constructor(params) {
    // Виклик конструктора батьківського класу User
    super(params.email);

    this.posts = params.posts;
  }
}

const editor = new ContentEditor({
  email: "mango@mail.com",
  posts: [],
});
console.log(editor); // { #email: "mango@mail.com", posts: [] }
console.log(editor.email); // "mango@mail.com"
