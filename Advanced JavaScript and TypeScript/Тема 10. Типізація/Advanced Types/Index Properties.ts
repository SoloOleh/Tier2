//Деякі поля нам невідомі, а ми точно знаємо, якого типу вони мають бути.

type IndexType = {
  [prop: string]: string;
}

type Person = {
  name: string;
  [x: string]: string;
};

const user: Person = {
  name: 'Alex',
  gender: 'MAN',
  country: 'Ukraine',
};

export {};


type User2 = {
  id: string;
  name: string;
  email: string;
};

type Users2 = {
  [id: string]: User2;
};

let users2: Users2 = {};

let user2: User2 = {
  id: '1',
  name: 'Alex',
  email: 'alex@example.com',
};

users2[user2.id] = user2;

export {};