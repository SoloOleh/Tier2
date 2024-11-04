interface ITest {
  readonly name: string;
}

const person: ITest = {
  name: 'Person Name',
};

// person.name = 'Another Name'; // Error: Cannot assign to 'name' because it is a read-only property.

export {};