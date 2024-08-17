function sum(a, b) {
  console.log(arguments);
  return a + b;
}

sum(2, 5);

function multiply() {
  let total = 1;

  for (const arg of arguments) {
    total *= arg;
  }

  return total;
}

console.log(multiply(1, 2, 3)); //  6
console.log(multiply(1, 2, 3, 4)); //  24
console.log(multiply(1, 2, 3, 4, 5)); //  120

function foo() {
  // У змінній args буде повноцінний масив з усіх аргументів
  const args = Array.from(arguments);
  return args.join("-");
}

foo(1, 2, 3); // Поверне "1-2-3"
