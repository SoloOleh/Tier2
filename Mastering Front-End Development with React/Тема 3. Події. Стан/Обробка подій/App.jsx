// const App = () => {
//   return <button>Click me!</button>;
// };

// const App = () => {
//   const handleClick = () => {
//     alert("I'm a button!");
//   };

//   return <button onClick={handleClick}>Click me!</button>;
// };

const App = () => {
  return <button onClick={() => alert("I'm a button!")}>Click me!</button>;
};
