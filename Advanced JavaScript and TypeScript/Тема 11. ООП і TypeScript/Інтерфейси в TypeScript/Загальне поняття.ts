interface Person {
  firstName: string;
  lastName: string;
  age?: number; // Необов'язкове поле
}

function greet(person: Person) {
  console.log(`Hello, ${person.firstName} ${person.lastName}`);
}

const john: Person = {
  firstName: 'John',
  lastName: 'Doe',
};

greet(john); // Виведе: "Hello, John Doe"