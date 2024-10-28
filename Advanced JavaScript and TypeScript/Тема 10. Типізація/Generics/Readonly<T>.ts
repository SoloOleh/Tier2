// робить усі властивості у типі T тільки для читання.

type User = {
  id: number;
  name: string;
  email: string;
};

let alice: User = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com',
};

alice.name = 'Bob'; // OK

let aliceReadonly: Readonly<User> = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com',
};

// user.name = 'Bob'; // Error: Cannot assign to 'name' because it is a read-only property.

export {};
