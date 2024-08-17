function greet(username = "Guest") {
  console.log(`Hello, ${username}!`);
}

greet("Jacob"); // "Hello, Jacob!"
greet(); // "Hello, Guest!"

function count(from, to, step = 1) {
  console.log(`from: ${from}, to: ${to}, step: ${step}`);

  for (let i = from; i <= to; i += step) {
    // ...
  }
}

count(1, 15, 4); // "from: 1, to: 15, step: 4"
count(1, 15); // "from: 1, to: 15, step: 1"
