// try {
//   // Блок коду, де можуть виникати помилки
// } catch (error) {
//   // Блок коду для обробки помилок, що виникли у блоці try
// }

console.log("Before try...catch");

try {
  const result = 10 / a;
  console.log(result); // Цей рядок не виконається через помилку
} catch (error) {
  // Обробимо помилку
  console.error(error.message);
}

console.log("After try...catch");
