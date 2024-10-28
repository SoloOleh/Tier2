type Animal2 = {
  name: string;
};

interface Animal {
  name: string;
}

interface Animal {
  age: number;
}

let dog: Animal = {
  name: "Fido",
  age: 5,
};

export {};

interface Dog extends Animal {
  bark: string;
}

// У випадку з типом нам довелося б використовувати intersection (&).
// type AnimalName = {
//   name: string;
// };

// type AnimalAge = {
//   age: number;
// };

// type Animal = AnimalName & AnimalAge;

// let dog: Animal = {
//   name: 'Fido',
//   age: 5,
// };

// export {};

type Cat = {
  meow: () => string;
};

interface Dog2 {
  bark: () => string;
}

type DogOrCat = Dog2 | Cat;
type DogAndCat = Dog2 & Cat;

export { };


    

interface Animal3 {
  name: string;
}

interface Dog3 extends Animal3 {
  bark: string;
}

class MyDog implements Dog3 {
  name = 'Fido';
  bark = 'Woof!';
}

// Error: Property 'name' is missing in type 'OtherDog'
// class OtherDog implements Dog3 {
//   bark = 'Woof!';
// }

// export {};






interface Walkable {
  walk(): void;
}

interface Eatable {
  eat(): void;
}

class Animal4 implements Walkable, Eatable {
  walk() {
    console.log('The animal walks...');
  }

  eat() {
    console.log('The animal eats...');
  }
}

const animality = new Animal4();

export { };






interface AddFunc {
  (n1: number, n2: number): number;
}

let add: AddFunc;

add = (n1:number, n2: number) => {
  return n1 + n2;
}
