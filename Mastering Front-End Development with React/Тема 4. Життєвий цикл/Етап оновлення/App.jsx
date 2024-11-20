import { useState, useEffect } from "react";

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   // ❌ Ефект записаний з помилкою!
//   useEffect(() => {
//     console.log("Clicks updated: ", clicks);
//   }, []);

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };

// import { useState, useEffect } from "react";

const App = () => {
  const [clicks, setClicks] = useState(0);

  // ✅ Залежності вказані правильно
  useEffect(() => {
    console.log("Clicks updated: ", clicks);
  }, [clicks]);

  return (
    <button onClick={() => setClicks(clicks + 1)}>
      You clicked {clicks} times
    </button>
  );
};
