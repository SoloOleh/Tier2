const saveBtn = document.querySelector('button[data-action="save"]');
console.log(saveBtn.dataset.action); // "save"

const closeBtn = document.querySelector('button[data-action="close"]');
console.log(closeBtn.dataset.action); // "close"

// Змінюємо значення data-action для кнопки saveBtn
saveBtn.dataset.action = "update";

// Додаємо новий data-атрибут data-role
saveBtn.dataset.role = "admin";

// // Перевіримо нові значення
console.log(saveBtn.dataset.action); // "update"
console.log(saveBtn.dataset.role); // "admin"

// // Видаляємо data-атрибут data-action
delete saveBtn.dataset.action;

// // Перевіримо видалення
console.log(saveBtn.dataset.action); // undefined

// const userBlock = document.querySelector('div[data-user-role="admin"]');

// console.log(userBlock);
// // // Додаємо новий data-атрибут data-user-status
// element.dataset.userStatus = "online";

// console.log(element.dataset.userRole); // "admin"
// console.log(element.dataset.userStatus); // "online"
