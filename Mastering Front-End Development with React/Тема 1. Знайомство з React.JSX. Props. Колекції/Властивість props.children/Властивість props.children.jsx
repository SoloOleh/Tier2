// Оголошення
// const Card = ({ text }) => {
//   return <div>{text}</div>;
// };

// // Використання
// <Card text="Message as a text prop" />


// // Оголошення
// const Card = ({ children }) => {
//   return <div>{children}</div>;
// };

// // Використання
// <Card>Text between opening and closing tag</Card>

// Оголошення
const Card = ({ children }) => {
  return <div>{children}</div>;
};

// Використання
<Card>
	<h1>Card title</h1>
	<p>Text between opening and closing tag</p>
</Card>
