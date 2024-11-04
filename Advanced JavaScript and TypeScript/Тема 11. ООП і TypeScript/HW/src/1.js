"use strict";
/*
  Клас Student, який містить три властивості: name, age та grade.
  Замість того, щоб оголошувати ці властивості в тілі класу, потім у конструкторі, і нарешті надавати їм значення,
  напишіть скорочену ініціалізацію.
*/
// Object.defineProperty(exports, "__esModule", { value: true });
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
var Student = /** @class */ (function () {
  function Student(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
  return Student;
})();
var student = new Student("Іван", 20, "A");
console.log(student.name); // "Іван"
console.log(student.age); // 20
console.log(student.grade); // "A"
