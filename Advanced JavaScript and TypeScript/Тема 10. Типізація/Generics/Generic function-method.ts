function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("myString"); 
let output2 = identity<number>(100);

let output11 = identity("myString"); 
let output22 = identity(100);




function firstElement<T>(arr: T[]): T {
  return arr[0];
}

let numbers = [1, 2, 3, 4, 5];
let firstNum = firstElement(numbers);

let strings = ['a', 'b', 'c', 'd'];
let firstStr = firstElement(strings);

export { };




function merge(objA: object, objB: object) {
  return Object.assign(objA, objB);
}
// const merged = merge({ name: 'Alisa' }, { age: 28 });
const merged = merge({name: 'Alisa'}, {age: 28}) as {name: string, age: number};
merged.name;
export {};



// function merge2<T, U>(objC: T, objD: U) {
//   return Object.assign(objC, objD);
// }
// const merged2 = merge2({ name: 'Alisa' }, { age: 28 });
// merged.name;

// export {};


// type Person = {
//   name: string;
// };
// type AdditionFields = {
//   age: number;
// };
// function merge<T, U>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }
// const merged = merge<Person, AdditionFields>({ name: 'Alisa' }, { age: 28 });
// merged.name;
// export {};


