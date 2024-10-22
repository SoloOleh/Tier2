let globalVariable; // undefined

// Виконуємо HTTP-запит
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    console.log("users inside then callback: ", users);

    // Асинхронно записуємо результат запиту в зовнішню змінну
    globalVariable = users;

    // Усередині колбека методу then усе добре
    console.log("globalVariable inside fetch callback: ", globalVariable);
  });

// Зовні колбека методу then у синхронному коді немає доступу до даних асинхронної відповіді бекенда
console.log("globalVariable outside fetch: ", globalVariable); // undefined
