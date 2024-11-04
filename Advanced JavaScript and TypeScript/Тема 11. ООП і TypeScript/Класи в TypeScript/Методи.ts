class House2 {
  street: string;

  constructor(n: string) {
    this.street = n;
  }

  showAddress(this: House2) {
    console.log('Address: ' + this.street);
  }
}

const house = new House2('Middle-earth');

const houseCopyError = { showAddress: house.showAddress };
// houseCopyError.showAddress(); // Error: Property 'street' is missing in type '{ showAddress: (this: House) => void; }' but required in type 'House'.

const houseCopy = { street: 'Dummy', showAddress: house.showAddress };
houseCopy.showAddress();

export {};

