interface IPerson {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user: IPerson;

user = {
  name: 'Anthony',
  age: 21,

  greet(phrase) {
    console.log(phrase + ' ' + this.name );
  }
};


user.greet('Вітання всім, я'); // Вітання всім, я Anthony


// user = {
//   name: 'Anthony',
//   age: 21,
//   hobby: 'Flying', // Помилка: Property 'hobby' does not exist on type 'IPerson'.
// }


type IPerson2 = {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user2: IPerson;

user2 = {
  name: 'Anthony',
  age: 21,

  greet(phrase) {
    console.log(phrase + ' ' + this.name );
  },
};
