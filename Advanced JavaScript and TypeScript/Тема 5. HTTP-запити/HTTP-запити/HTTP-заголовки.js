// fetch("some-url", {
//   headers: {
//     "Content-Type": "application/json",
//     "X-Custom-Header": "custom value",
//   },
// });

// User-Agent: Ідентифікує клієнтське програмне забезпечення, яке виконує запит.
// Accept: Вказує, які типи медіа клієнт може обробляти.
// Content-Type: Вказує тип контенту в тілі запиту або відповіді.
// Authorization: Використовується для передачі облікових даних для аутентифікації.
// Cache-Control: Директиви для керування кешуванням.
// Host: Доменне ім'я ресурсу, до якого виконується запит.

fetch("<https://jsonplaceholder.typicode.com/users>", {
  headers: {
    Accept: "application/json",
  },
}).then((response) => {
  // ...
});
