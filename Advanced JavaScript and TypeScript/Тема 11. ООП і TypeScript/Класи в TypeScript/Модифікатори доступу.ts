// class A {
//   private someProperty = 'str';
// }

// class B extends A {
//   showProperty() {
//     console.log(this.someProperty); // Помилка: 'someProperty' можна викликати лише в класі A
//   }
// }

// export {};

// class A {
//   protected someProperty = 'str';
// }

// class B extends A {
//   showProperty() {
//     console.log(this.someProperty); //Немає помилки
//   }
// }

// const a = new A();

// const b = new B();

// a.someProperty; // Помилка: 'someProperty' можна викликати лише в межах класу

// b.someProperty; // Та ж помилка

// b.showProperty(); // Помилки немає, оскільки 'showProperty' звертається до 'someProperty' всередині класу.

// export {};

class House {
  private street: string;

  private tenants: string[] = [];

  constructor(n: string) {
    this.street = n;
  }

  public showAddress(this: House) {
    console.log('Address: ' + this.street);
  }

  public addTenant(tenant: string) {
    this.tenants.push(tenant);
  }

  public showTenants() {
    console.log(this.tenants);
  }
}

const house = new House('Middle-earth');

house.addTenant('Anton');
house.addTenant('Nikita');

house.showTenants(); // ["Anton", "Nikita"]

// house.tenants.push('Anton'); // Помилка: 'tenants' можна викликати лише в межах класу 'House'.

export {};
