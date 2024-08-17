// function declaration
// ✅ Працює виклик перед оголошенням
multiply(1, 2, 3);

function multiply(x, y, z) {
  console.log(x * y * z);
}
// ✅ Працює виклик після оголошення
multiply(4, 5, 6);

// function expression
// ❌ Помилка! Не працює виклик до оголошення
multiply(1, 2, 3);

const multiply = function (x, y, z) {
  console.log(x * y * z);
};

// ✅ Працює виклик після оголошення
multiply(4, 5, 6);
