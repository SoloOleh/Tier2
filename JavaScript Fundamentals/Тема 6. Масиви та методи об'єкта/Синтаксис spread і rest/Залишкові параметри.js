function multiply(a, b) {
  console.log(a, b);
}

multiply(1, 2); // 1 2
multiply(1, 2, 3); // 1 2
multiply(1, 2, 3, 4); // 1 2

function multiply() {
  console.log(arguments);
}

multiply(1, 2); // псевдомасив [1, 2]
multiply(1, 2, 3); // псевдомасив [1, 2, 3]
multiply(1, 2, 3, 4); // псевдомасив [1, 2, 3, 4]

function multiply(...args) {
  console.log(args);
}

multiply(1, 2); // [1, 2]
multiply(1, 2, 3); // [1, 2, 3]
multiply(1, 2, 3, 4); // [1, 2, 3, 4]
