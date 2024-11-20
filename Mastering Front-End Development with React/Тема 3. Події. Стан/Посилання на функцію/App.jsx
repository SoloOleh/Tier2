// // ✅ Передача функції (правильно)
// <button onClick={handleClick}>

// // ❌ Виклик функції (неправильно)
// <button onClick={handleClick()}>

// Для інлайн функцій діють ті ж правила. Цей alert викликається при рендерингу компонента, а не при кліці!
{
  /* <button onClick={alert('You clicked me!')}> */
}

// Замість виконання коду при кожному рендерінгу, це створює функцію, яка буде викликана пізніше.
{
  /* <button onClick={() => alert('You clicked me!')}> */
}
