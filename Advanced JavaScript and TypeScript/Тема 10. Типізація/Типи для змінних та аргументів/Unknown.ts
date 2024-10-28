// let notSure: unknown = 4;
// notSure = 'maybe a string instead';
// notSure = false;

// let num: number;

// num = notSure;

// export { };
// не вдалося зберегти значення змінної notSure в змінну num

function fetchUserData() {
  return 'Tom';
}

let userData: unknown = fetchUserData(); // fetchUserData повертає невідомі дані
if (typeof userData === 'string') {
  console.log(userData.toUpperCase()); // OK, тепер ми знаємо, що це рядок
}