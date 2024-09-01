const numbers = [5, 10, 15, 20, 25];

// Звичайна анонімна функція
numbers.forEach(function (number, index) {
  console.log(`Index ${index}, value ${number}`);
});

// Стрілочна анонімна функція
numbers.forEach((number, index) => {
  console.log(`Index ${index}, value ${number}`);
});

const logMessage = (number, index) => {
  console.log(`Index ${index}, value ${number}`);
};
numbers.forEach(logMessage);
