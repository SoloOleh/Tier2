function foo() {
  console.log(this);
}

foo(); // window

("use strict");

function foo() {
  console.log(this);
}

foo(); // undefined
