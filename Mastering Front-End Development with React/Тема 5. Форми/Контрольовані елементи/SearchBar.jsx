import { useState } from "react";

// const SearchBar = () => {
//   const [inputValue, setInputValue] = useState("");

//   return (
//     <div>
//       <input type="text" />
//       <p>{inputValue}</p>
//     </div>
//   );
// };

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>{inputValue}</p>
    </div>
  );
};
