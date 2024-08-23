Math.max(14, -4, 25, 8, 11);

const temps = [14, -4, 25, 8, 11];
console.log(temps); // [14, -4, 25, 8, 11]
// ❌ Так не спрацює, тому що передаємо цілий масив
console.log(Math.max(temps)); // NaN

console.log(...temps); // 14 -4 25 8 11  набір окремих чисел
// ✅ Передамо колекцію елементів у якості окремих аргументів
console.log(Math.max(...temps)); // 25
