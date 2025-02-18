class Person {
  constructor(public name: string) {}
}

class Home {
  private tenants: Person[] = [];

  addTenant(name: string) {
    const tenant = new Person(name);
    this.tenants.push(tenant);
  }
}

const home = new Home();

home.addTenant('Max');
home.addTenant('Anton');
home.addTenant('Nikita');








class Captain {
  constructor(public name: string) {}
}

class Ship {
  private captain: Captain;

  setCaptain(name: string) {
    const captain = new Captain(name);
    this.captain = captain;
  }

  sink() {
    console.log(
      `Ship is sinking! Captain ${this.captain.name} goes down with the ship.`
    );
  }
}

const ship = new Ship();
ship.setCaptain('John');
ship.sink();

export {};
