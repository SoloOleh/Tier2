const add = (a, b, c) => {
  console.log(a, b, c);
  return a + b + c;
};

// До
function classicAdd(a, b, c) {
  return a + b + c;
}

// Після
const arrowAdd = (a, b, c) => a + b + c;
