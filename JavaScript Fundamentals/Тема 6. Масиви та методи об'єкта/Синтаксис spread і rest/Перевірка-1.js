function add(...args) {
  let sum = 0;
  for (let arg of args) {
    sum += arg;
  }
  return sum;
}

console.log(add(32, 6, 13, 19, 8)); // 78
