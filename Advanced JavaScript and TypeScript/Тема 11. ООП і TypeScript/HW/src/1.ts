/*
  Клас Student, який містить три властивості: name, age та grade. 
  Замість того, щоб оголошувати ці властивості в тілі класу, потім у конструкторі, і нарешті надавати їм значення, 
  напишіть скорочену ініціалізацію.
*/

// class Student {
//   public name: string;
//   public age: number;
//   public grade: string;

//   constructor(name: string, age: number, grade: string) {
//     this.name = name;
//     this.age = age;
//     this.grade = grade;
//   }
// }

// export {};

class Student {
  constructor(public name: string, public age: number, public grade: string) {}
}

// const student = new Student("Іван", 20, "A");
// console.log(student.name);  // "Іван"
// console.log(student.age);   // 20
// console.log(student.grade); // "A"

export {};
