//дозволяє створювати власні функції для перевірки типів

type Dog = {
  bark: () => void;
};

type Cat = {
  meow: () => void;
};


// Тут ми створили функцію isDog, що перевіряє, чи присутня властивість 'bark' в об'єкті animal. Отже, ми можемо визначити, якого типу належить об'єкт.
function isDog(animal: Dog | Cat): animal is Dog {
  return 'bark' in animal;
}

function letAnimalTalk(animal: Dog | Cat) {
  if (isDog(animal)) {
    animal.bark();
  } else {
    animal.meow();
  }
}

export {};


type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type Staff = Admin | Employee;

function isEmployee(staff: Staff): staff is Employee {
  return (staff as Employee).startDate !== undefined;
}

const staffMember: Staff = { name: 'Bob', startDate: new Date() };

if (isEmployee(staffMember)) {
  console.log(
    `Welcome on board, ${staffMember.name}! Your start date is ${staffMember.startDate}`
  );
}

export {};
// У цьому прикладі ми використали as, щоб привести staff до типу Employee і тим самим перевірити чи є в ньому startDate.