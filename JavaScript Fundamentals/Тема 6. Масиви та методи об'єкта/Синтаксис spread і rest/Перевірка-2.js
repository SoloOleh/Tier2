function addOverNum(value, ...args) {
  let sum = 0;
  for (let arg of args) {
    if (arg > value) {
      sum += arg;
    }
  }
  return sum;
}

console.log(addOverNum(20, 74, 11, 62, 46, 12, 36)); // 74 + 62 + 46 + 36 = 218
