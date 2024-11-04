/*
  Ваше завдання полягатиме у створенні двох класів - Employee та Manager.

  Клас Employee повинен включати:

  властивість name, яка буде доступна всім.
  властивість department, яка буде доступна лише всередині класу Employee.
  salary, яке буде доступне лише всередині класу Employee та його підкласів.


  Клас Manager повинен бути підклас класу Employee

  Необхідно реалізувати в класі Manager конструктор, який викликатиме конструктор суперкласу та збільшуватиме salary на 10000.

*/

// class Employee {
//   // Заповніть модифікатори доступу
//   name: string;
//   department: string;
//   salary: number;

//   constructor(name: string, department: string, salary: number) {
//     this.name = name;
//     this.department = department;
//     this.salary = salary;
//   }

//   getEmployeeDetails() {
//     return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
//   }
// }

// class Manager extends Employee {
//   // Реалізуйте конструктор та збільшіть salary на 10000
// }

// export {};

// v1
class Employee {
  public name: string;
  private department: string;
  protected salary: number;

  constructor(name: string, department: string, salary: number) {
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  getEmployeeDetails() {
    return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(name: string, department: string, salary: number) {
    super(name, department, salary + 10000);
  }
}

// v2
// class Employee {
//   constructor(
//     public name: string,
//     private department: string,
//     protected salary: number
//   ) {}

//   getEmployeeDetails() {
//     return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
//   }
// }

// class Manager extends Employee {
//   constructor(name: string, department: string, salary: number) {
//     super(name, department, salary);
//     this.salary += 10000;
//   }
// }

// export {};

// Приклад використання
const employee = new Employee("Іван", "IT", 50000);
console.log(employee.getEmployeeDetails()); // "Name: Іван, Department: IT, Salary: 50000"

const manager = new Manager("Петро", "IT", 50000);
console.log(manager.getEmployeeDetails()); // "Name: Петро, Department: IT, Salary: 60000"

// Перевірка модифікаторів доступу:
console.log(manager.name); // працює - public
// console.log(manager.department); // помилка - private
// console.log(manager.salary); // помилка - protected

export {};
