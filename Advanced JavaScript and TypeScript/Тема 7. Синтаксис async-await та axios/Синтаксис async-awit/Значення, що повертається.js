const foo = async () => {
  return 5;
};

foo().then((value) => {
  console.log(value); // 5
});

const foo2 = async () => {
  // Не вказуємо значення для повернення
};

foo2().then((value) => {
  console.log(value); // undefined
});
