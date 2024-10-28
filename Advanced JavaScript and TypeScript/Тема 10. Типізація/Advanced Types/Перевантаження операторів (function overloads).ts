function combine(input1: number, input2: number): number;
function combine(input1: string, input2: string): string;
function combine(input1: string, input2: number): string;
function combine(input1: number, input2: string): string;
function combine(input1: any, input2: any) {
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    return input1 + input2;
  } else if (typeof input1 === 'string' && typeof input2 === 'string') {
    return input1 + input2;
  } else if (typeof input1 === 'string' && typeof input2 === 'number') {
    return input1 + input2;
  } else if (typeof input1 === 'number' && typeof input2 === 'string') {
    return input1 + input2;
  }
}

console.log(combine(1, 2)); // Outputs: 3
console.log(combine('Hello', 'World')); // Outputs: HelloWorld
console.log(combine('Hello', 2)); // Outputs: Hello2
console.log(combine(1, 'World')); // Outputs: 1World

export {};


    
    
function concatenate(strs: string[]): string;
function concatenate(strs: string[], separator: string): string;
function concatenate(strs: any, separator?: any): any {
  if (separator !== undefined) {
    return strs.join(separator);
  } else {
    return strs.join('');
  }
}

let names = ['Alice', 'Bob', 'Charlie'];

console.log(concatenate(names)); // Outputs: AliceBobCharlie
console.log(concatenate(names, ', ')); // Outputs: Alice, Bob, Charlie

export { };





type AdminType = {
  type: 'admin';
  name: string;
  privileges: string[];
};

type UserType = {
  type: 'user';
  name: string;
  registrationDate: Date;
};

function checkUser(name: string, type: 'user'): UserType;
function checkUser(
  name: string,
  type: 'admin',
  privileges: string[]
): AdminType;
function checkUser(
  name: string,
  type: 'admin' | 'user',
  privilegesOrRegistrationDate?: string[]
): AdminType | UserType {
  if (type === 'admin') {
    return {
      type,
      name,
      privileges: privilegesOrRegistrationDate as string[],
    };
  }

  return {
    type,
    name,
    registrationDate: new Date(),
  };
}

const user = checkUser('Nikita', 'user');
const admin = checkUser('Tonya', 'admin', ['manageUsers', 'deletePosts']);

export {};
