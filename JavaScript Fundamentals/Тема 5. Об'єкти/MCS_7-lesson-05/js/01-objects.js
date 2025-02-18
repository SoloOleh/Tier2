/*
 * Об'єкти
 *
 * - Створення об'єкта
 * - Доступ до властивостей через крапку
 * - Доступ до властивостей через квадратні дужки
 * - Вкладені властивості
 * - Доступ до вкладених властивостей
 * - Зміна значення властивостей
 * - Додавання властивостей
 */

// const user = {
//   firstName: "John",
//   lastName: "Dou",
//   age: 35,
// };
// firstName: "John" - властивість (або поле) - property/field
// firstName - ключ (key)
// "John" - значення (value)

const film = {
  title: "Harry Potter",
  description: "Lorem ipsum dolor sit amet consectetur",
  rating: 10,
  actors: ["Mary Morton", "Frances Anderson", "Fanny Phelps", "Carrie Holland"],
  translations: {
    en: "https://en",
    ua: "https://ua",
  }
};

// console.log(["Alex", "Liza", "Tom"]);
// console.log({
//   "0": "Alex",
//   "1": "Liza",
//   "2": "Tom"
// });

console.log(film);

// через крапку ми можемо звертатись, коли знаємо назву ключа в обʼєкті
console.log(film.title);
console.log(film.actors);
console.log(film.www);

// через квадратні дужки ми можемо звертати тоді, коли не знаємо назву ключа, а отримуємо ключ динамічно (наприклад, в циклі, в змінній і тд)
console.log(film["description"]);
console.log(film["rating"]);

const key = "title";

console.log(film[key]); // film['title']
console.log(film.key); //! undefined

console.log(film.translations.ua);
console.log(film["translations"]["ua"]);

film.rating = 9;

film.actors.push("Philip Porter");

film.genre = ["Eula", "Nannie"];

console.log(film);


delete film.genre;

console.log(film);