//для позначення відсутності будь-якого типу взагалі, і зазвичай використовується як тип функцій, що повертається, в якому функції не повертають значення.

function logMessage(message: string): void {
  console.log(message);
}
logMessage('Hello, world!'); 

export { };


function doSomething(callback: () => void) {
  callback();
}
doSomething(() => {
  console.log('Callback function!');
});

export {};