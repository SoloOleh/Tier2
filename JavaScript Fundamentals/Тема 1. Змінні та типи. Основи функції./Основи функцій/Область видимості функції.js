// Глобальна змінна
const value = "I'm a global variable";

function foo() {
// Можна звернутися до глобальної змінної
	console.log(value); // "I'm a global variable"
}

foo();
// Можна звернутися до глобальної змінної
console.log(value); 
// "I'm a global variable"




function foo() {
	// Локальна змінна
	const value = "I'm a local variable";
	// Можна звернутися до локальної змінної
	console.log(value); // "I'm a local variable"
}

foo();
  console.log(value); // ReferenceError: value is not defined
                      // Помилка: локальну змінну не видно за межами  
                         функції

