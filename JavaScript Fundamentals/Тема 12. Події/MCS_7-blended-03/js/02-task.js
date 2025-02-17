const refs = {
  mainForm: document.querySelector("#mainForm"),
  list: document.querySelector(".js-list"),
};

/*
0. Створити масив для задач та змінну каунтер для айді
1. Додавання задач в список 
  1.1. Вішаємо обробник подій на сабміт
  1.2. Відміняємо поведінку за замовчуванням
  1.3. отримуємо значення задачі
  1.4. очищуємо поле вводу
  1.5. Додати задачу в список (генерація через шаблон)

2. Генерація задачі
  2.1. збільшуємо каунтер айді на 1
  2.2. створюємо обʼєкт задачі (текст, айді, статус виконаності)
  2.3. пушимо обʼєкт задачі в масив
  2.4. створюємо розмітку задачі (додаємо айді задачі як дата атрибут)


3. Видалення задачі по натисканню на кнопку деліт
  3.1 вішаємо обробник подій на весь список задач
  3.2. перевіряємо що клік відбувся саме на кнопці видалили
  3.3. звертаємось до батьківсього елементу (li) та витягуємо його айді
  3.4. видаляємо ідентичний елемент по айді з масиву обʼєктів (findIndex + splice)
  3.5. видаляємо сам елемент з дом дерева


4. Зміна статусу задачі (виконана чи ні) при натисканні на текст
  4.1 використовуємо тей самий обробник
  4.2. перевіряємо де відбувся клік - нам підходить будь-яке місце крім кнопки
  4.3. звертаємось до батьківсього елементу (li) та витягуємо його айді
  4.4. шукаємо по айді елемент в масиві та перезаписуємо значення поля isDone на протилежне від заданого
  4.5. тоглимо на лішці клас який додасть стиль перекресленості (line-through)
*/

const tasks = [];
let taskId = 0;

refs.mainForm.addEventListener("submit", handleTaskCreate);
refs.list.addEventListener("click", handleTaskClick);

function handleTaskCreate(event) {
  event.preventDefault();

  const form = event.target;
  const taskValue = form.elements.task.value.trim();

  if (!taskValue) {
    alert("Empty field!");
    return;
  }

  form.reset();

  refs.list.insertAdjacentHTML("beforeend", createTaskItem(taskValue));

  console.log(tasks);
}

function handleTaskClick(event) {
  if (event.target === event.currentTarget) {
    return;
  } else if (event.target.tagName === "BUTTON") {
    const liEl = event.target.closest("li");
    const liId = Number(liEl.dataset.id);
    const indexToDelete = tasks.findIndex((task) => task.taskId === liId);
    if (indexToDelete !== -1) {
      tasks.splice(indexToDelete, 1);
    }
    liEl.remove();
    console.log(tasks);
  } else {
    // else if(event.target.tagName === "LI" || event.target.tagName === "SPAN")
    const liEl = event.target.closest("li"); // шукає наближчий елемент по зазаначеному селектору (пошук вгору)
    const liId = Number(liEl.dataset.id);
    const currentTaskData = tasks.find((task) => task.taskId === liId);

    currentTaskData.isDone = !currentTaskData.isDone;

    liEl.classList.toggle("line-through");
    console.log(tasks);
  }
}

function createTaskItem(text) {
  taskId += 1;
  const taskData = {
    text,
    taskId,
    isDone: false,
  };

  tasks.push(taskData);

  return `<li data-id="${taskId}"><span>${text}</span> <button>Delete</button></li>`;
}
