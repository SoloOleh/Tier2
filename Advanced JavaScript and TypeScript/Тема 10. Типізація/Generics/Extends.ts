// const merged = merge({ name: 'Alisa' }, 'TEXT'); // {0: 'T', 1: 'E', 2: 'X', 3: 'T', name: 'Alisa'}

// function merge<T extends object, U extends object>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// const merged = merge({ name: 'Alisa' }, 'TEXT');

// merged.name;

// export {};

type Length = {
  length: number;
};

function getLength<T extends Length>(str: T) {
  return str.length;
}

getLength('text');
getLength([1, 2, 3]);
// getLength(100); // Errro: Argument of type 'number' is not assignable to parameter of type 'ILength'

export { };





function arrayLogger<T extends Array<string>>(array: T): void {
  array.forEach((item) => console.log(item));
}

arrayLogger(['Hello', 'World']); // Ok
// arrayLogger([1, 2, 3]); // Error

export {};