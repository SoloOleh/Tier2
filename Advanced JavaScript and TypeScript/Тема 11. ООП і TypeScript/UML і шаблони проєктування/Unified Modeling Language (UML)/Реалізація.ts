interface IPerson {
 name: string;
 age: number;
 greet(phrase: string): void;
}

class Person implements IPerson {
 constructor(public name: string, public age: number) {}

 greet(phrase: string): void {
  console.log(phrase + ', мене звати ' + this.name);
 }
}

let john = new Person('John', 25);
john.greet('Привіт');