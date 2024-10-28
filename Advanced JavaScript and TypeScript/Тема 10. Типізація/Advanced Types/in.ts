//Оператор 'in' дозволяє перевірити наявність властивості в об'єкті.

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type AdminOrEmployee = Admin | Employee;

function printDetails(obj: AdminOrEmployee) {
  console.log(`Name: ${obj.name}`);

  if ('privileges' in obj) {
    console.log(`Privileges: ${obj.privileges.join(', ')}`);
  }

  if ('startDate' in obj) {
    console.log(`Start Date: ${obj.startDate}`);
  }
}

export {};