function multiply(x, y, z) {
  console.log(`Result: ${x * y * z}`);
}

console.log("Log before multiply execution");
multiply(2, 3, 5); // "Result: 30"
console.log("Log after multiply execution");


console.log("A");

function logStuff() {
	console.log("B");
}

console.log("C");

logStuff();

console.log("D");

// A > C > B > D