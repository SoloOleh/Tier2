const obj: object = {};
const obj2: {} = {};

let user = {
  name: "Tom",
  age: 30
};

let user2: { name: string; age: number } = {
  name: "Tom",
  age: 30
};

1.
// let user: { name: string; age: number } = {
//   age: 30,
// };
2.
// let userNameLikeNumber: { name: string; age: number } = {
//   name: 10,
//   age: 30,
// };

// export {};
// У першому випадку ми отримали помилку через те, що відсутня властивість name, а в другому, що там використовується неправильний тип даних.

type User = {
  name: string;
  age: number;
};

let user3: User = {
  name: 'Tom',
  age: 30,
};

let userJack: User = {
  name: 'Jack',
  age: 25,
};

export { };

interface User2 {
  name: string;
  age: number;
}

let user4: User2 = {
  name: 'Tom',
  age: 30,
};

export {};
