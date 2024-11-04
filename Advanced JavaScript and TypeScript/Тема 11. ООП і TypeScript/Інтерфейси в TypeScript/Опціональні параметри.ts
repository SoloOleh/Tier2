// interface IPerson {
//   name?: string;
//   age: number;
// }


// class Person implements IPerson {
//   name?: string;
  
//   constructor (public age: number) {}

//   setName (n:string) {
//     this.name = n;
//   }
// }

interface IPerson {
  name?: string;
  age: number;
}

class Person implements IPerson {
  constructor(public age: number) {}
}

export {};