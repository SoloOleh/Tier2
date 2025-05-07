// [1, 2, 3].map(item => {
// 	return <p>{item}</p>;
// })

{
  /* <div>
	{[1, 2, 3].map(item => {
		return <div>{item}</div>;
	})}
</div> */
}

// const favouriteBooks = [
//   { id: "id-1", name: "JS for beginners" },
//   { id: "id-2", name: "React basics" },
//   { id: "id-3", name: "React Router overview" }
// ];

// const BookList = ({ books }) => {
//   return (
//     <ul>
//       {books.map((book) => {
//         return <li>{book.name}</li>;
//       })}
//     </ul>
//   );
// };

// const App = () => {
//   return (
//     <>
// 	  <h1>Books of the week</h1>
//       <BookList books={favouriteBooks} />
//     </>
//   );
// };

// з ключами

// const favouriteBooks = [
//   { id: "id-1", name: "JS for beginners" },
//   { id: "id-2", name: "React basics" },
//   { id: "id-3", name: "React Router overview" }
// ];

// const BookList = ({ books }) => {
//   return (
// 	<ul>
// 	  {books.map((book) => {
// 		return <li key={book.id}>{book.name}</li>;
// 	  })}
// 	</ul>
//   );
// };

// const App = () => {
//   return (
//     <>
// 	  <h1>Books of the week</h1>
//       <BookList books={favouriteBooks} />
//     </>
//   );
// };

// можна використовувати індекси масиву
// Використання індексів для ключів — це крайній випадок. В переважній більшості випадків дані мають унікальні ідентифікатори або інші властивості.
const favouriteBooks = [
  { name: "JS for beginners" },
  { name: "React basics" },
  { name: "React Router overview" },
];

const BookList = ({ books }) => (
  <ul>
    {books.map((book, index) => {
      return <li key={index}>{book.name}</li>;
    })}
  </ul>
);
