class House5 {
  constructor(private readonly type: string, private street: string) {}

  changeType(type: string) {
    // this.type = type; // Помилка: Неможливо змінити властивість "type", оскільки вона "readonly".
  }
}

export { };

    
    

class House6 {
  constructor(public readonly tenants: string[]) {}

  addTenant(tenant: string) {
    this.tenants.push(tenant); // Не виникне жодних помилок, навіть якщо 'tenants' є 'readonly'.
  }
}



const house = new House6([]);

house.addTenant('Alice');

console.log(house.tenants); // Виведе: ['Alice']

export { };

    
    

class House {
  constructor(public readonly address: { street: string; number: number }) {}
}

// const house = new House({ street: 'Main St', number: 42 });

// Це призведе до помилки компіляції.

// house.address = { street: 'High St', number: 1 };

// Але це працюватиме.

// house.address.number = 43;

export {};