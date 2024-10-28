function greet(): string {
    return "Hello, world!";
}
let result = greet();

// function greet(): string {
//   return 100; // Error: Type 'number' is not assignable to type 'string'
// }
// let result = greet2();
// export {};

const greet2 = (): string => {
  return "Hello, world!";
}
let result2 = greet2();


function greet3() {
  return 'Hello, world!';
}
let result3: string = greet();



type User = {
  id: number;
  name: string;
};

const getUserNames = (users: User[]): string[] => {
  return users.map((user) => user.name);
};

const users: User[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

let result4 = getUserNames(users);
console.log(result); // ['Alice', 'Bob', 'Charlie']

export {};