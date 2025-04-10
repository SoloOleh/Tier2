/*
 * Додавання прослуховувача подій на кожен елемент
 */

// TODO: Отримай колір квадрата по якому було здійснено клік

// const refs = {
//   boxes: document.querySelectorAll('.js-box'),
// };

// console.log(refs.boxes);

// refs.boxes.forEach(box => {
//   box.addEventListener('click', event => {
//     const boxColor = event.target.dataset.color;

//     console.log(boxColor);
//   });
// });

/*
 * Дегегування подій
 */

// TODO: Отримай колір квадрата по якому було здійснено клік

const refs = {
  boxesContainer: document.querySelector('.js-container'),
};

console.log(refs);

refs.boxesContainer.addEventListener('click', event => {
  // if (event.target === event.currentTarget) {
  //   return;
  // }
  // const boxColor = event.target.dataset.color;
  // console.log(boxColor);
  console.log(event.target);
  console.log(event.currentTarget);
});
