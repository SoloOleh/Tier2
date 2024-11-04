// class House {
//   constructor(private readonly type: string, private street: string) {}
// }

// class StoneHouse extends House {
//   constructor(street: string) {
//     super('stone', street); // Виклик батьківського конструктора
//   }
// }

// const stoneHouse = new StoneHouse('Stone-world');

// export { };



class House {
  private tenants: string[] = [];

  constructor(private readonly type: string, private street: string) {}

  public showAddress(this: House) {
    console.log('Address: ' + this.street);
  }

  public showType(this: House) {
    console.log('House Type: ' + this.type);
  }

  public addTenant(tenant: string) {
    this.tenants.push(tenant);
  }

  public showTenants() {
    console.log(this.tenants);
  }
}

class StoneHouse extends House {
  private chargeOfTheHouse: string; // Головний в домі

  constructor(street: string, generalTenant: string) {
    super('stone', street); // Виклик батьківського конструктора

    // Додаємо власника квартири.

    this.chargeOfTheHouse = generalTenant;

    this.addTenant(generalTenant);
  }

  public showTenants() {
    console.log('General: ' + this.chargeOfTheHouse);

    // Запускаємо батьківський метод showTenants();

    super.showTenants();
  }
}

const stoneHouse = new StoneHouse('Stone-world', 'Max');

stoneHouse.addTenant('Anton');
stoneHouse.addTenant('Nikita');

stoneHouse.showTenants();
stoneHouse.showType();
stoneHouse.showAddress();

export {};

