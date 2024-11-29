// const App = () => {
//   return (
//     <>
//       <h1>Select coffee size</h1>
//       <label>
//         <input type="radio" name="coffeeSize" value="sm" />
//         Small
//       </label>
//       <label>
//         <input type="radio" name="coffeeSize" value="md" />
//         Meduim
//       </label>
//       <label>
//         <input type="radio" name="coffeeSize" value="lg" />
//         Large
//       </label>
//     </>
//   );
// };

// const App = () => {
//   const [coffeeSize, setCoffeeSize] = useState("sm");

//   // Решта коду
// };

// const App = () => {
//   const [coffeeSize, setCoffeeSize] = useState("sm");

//   return (
//     <>
//       <h1>Select coffee size</h1>
//       <label>
//         <input
//           type="radio"
//           name="coffeeSize"
//           value="sm"
//           checked={coffeeSize === "sm"}
//         />
//         Small
//       </label>
//       <label>
//         <input
//           type="radio"
//           name="coffeeSize"
//           value="md"
//           checked={coffeeSize === "md"}
//         />
//         Meduim
//       </label>
//       <label>
//         <input
//           type="radio"
//           name="coffeeSize"
//           value="lg"
//           checked={coffeeSize === "lg"}
//         />
//         Large
//       </label>
//     </>
//   );
// };

const App = () => {
  const [coffeeSize, setCoffeeSize] = useState("sm");

  //   useEffect(() => {
  //     console.log("Вибраний розмір кави:", coffeeSize);
  //   }, [coffeeSize]);

  const handleSizeChange = (evt) => {
    setCoffeeSize(evt.target.value);
  };

  return (
    <>
      <h1>Select coffee size</h1>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="sm"
          checked={coffeeSize === "sm"}
          onChange={handleSizeChange}
        />
        Small
      </label>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="md"
          checked={coffeeSize === "md"}
          onChange={handleSizeChange}
        />
        Meduim
      </label>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="lg"
          checked={coffeeSize === "lg"}
          onChange={handleSizeChange}
        />
        Large
      </label>
      <p>
        <b>Selected size:</b> {coffeeSize}
      </p>
    </>
  );
};
