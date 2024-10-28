// Це коли функція ніколи не закінчується та нічого не повертає.

// Функція, яка завжди викидає помилку
function throwError(message: string): never {
  throw new Error(message);
}

// Функція з нескінченним циклом
function infiniteLoop(): never {
  while (true) {}
}

export { };

// помилки компіляції
// let value: never;
// value = 123;
// value = 'hello';
// export {};