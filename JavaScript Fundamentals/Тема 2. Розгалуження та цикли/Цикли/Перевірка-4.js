const start = 6;
const end = 17;
let number;

for (let i = start; i <= end; i++) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}

for (let count = start; count <= end; count += 1) {
  if (count % 5 === 0) {
    number = count;
    break;
  }
}
