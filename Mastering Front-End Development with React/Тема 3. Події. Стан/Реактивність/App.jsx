// const App = () => {
//   let clicks = 0;

//   const handleClick = () => {
//     clicks = clicks + 1;
//   };

//   return <button onClick={handleClick}>Current: {clicks}</button>;
// };

// import { useState } from "react";

// const App = () => {
//   // let clicks = 0;
//   const [clicks, setClicks] = useState(0);

//   const handleClick = () => {
//     clicks = clicks + 1;
//   };

//   return <button onClick={handleClick}>Current: {clicks}</button>;
// };

import { useState } from "react";

const App = () => {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    // clicks = clicks + 1;
    setClicks(clicks + 1);
  };

  return <button onClick={handleClick}>Current: {clicks}</button>;
};
