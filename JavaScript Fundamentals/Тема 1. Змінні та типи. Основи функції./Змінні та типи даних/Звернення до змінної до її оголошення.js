// ❌ Неправильно, буде помилка
console.log(age); // ReferenceError: age is not defined

// Оголошення змінної age
let age = 20;

// ✅ Правильно, звертаємося після оголошення
age = 25;
console.log(age); // 25
