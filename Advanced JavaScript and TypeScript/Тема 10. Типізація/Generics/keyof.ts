
type Person = {
  name: string;
  age: number;
  location: string;
};

type PersonKeys = keyof Person; // 'name' | 'age' | 'location'

function getPersonInfo(person: Person, key: PersonKeys) {
  return person[key];
}

const john: Person = {
  name: 'John',
  age: 25,
  location: 'NY',
};

console.log(getPersonInfo(john, 'age')); // 25
console.log(getPersonInfo(john, 'name')); // 'John'
// console.log(getPersonInfo(john, 'job')); // Error: Argument of type '"job"' is not assignable to parameter of type 'PersonKeys'.

export {};


// function extractValue<T extends object, U>(obj: T, key: U) {
//   return obj[key]; // Type 'U' cannot be used to index type 'T'
// }

// extractValue({ name: 'John' }, 'name');

// export {};

function extractValue<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

extractValue({ name: 'John' }, 'name');

export {};
