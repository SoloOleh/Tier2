// Дозволяє отримати тип функції, що повертається. Для функцій він має використовуватися з typeof.

type Person = {
  name: string;
  age: number;
  location: string;
};


type PersonWithoutLocation = Omit<Person, 'location'>;

function greeting() {
  return 'Hello, world!';
}

type Greeting = ReturnType<typeof greeting>; // 'string'

function multiply(a: number, b: number) {
  return a * b;
}

type MultiplyResult = ReturnType<typeof multiply>; // 'number'

export { };



type Callback = (...args: unknown[]) => unknown;

function createLoggedFunction<T extends Callback>(func: T) {
  let funcRef = func;

  const loggedFunction = (...args: Parameters<T>) => {
    console.log(`Function ${func.name} was called with arguments:`, args);
    const result = funcRef(...args) as ReturnType<T>;
    return result;
  };

  return loggedFunction;
}

export {};