let someValue: unknown = 'this is a string';

let strLength1: number = (<string>someValue).length;
// or
let strLength2: number = (someValue as string).length;

// let strLength3: number = someValue.length;

export { };


const input = <HTMLInputElement>document.getElementById('inputEmail');
input.value = 'test@test.ts';
export { };

// І є другий, більш універсальний через as.
const input2 = document.getElementById('inputEmail') as HTMLInputElement;
input2.value = 'test@test.ts';
export { };


const input3 = document.getElementById('inputEmail');
if (input3) {
  (input3 as HTMLInputElement).value = 'test@test.ts';
}

export {};