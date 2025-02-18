// const App = () => {
//   useEffect(() => {
//     // Тут будемо виконувати HTTP-запит
//   }, []);

//   return (
//     <div>
//       <h1>Latest articles</h1>
//     </div>
//   );
// };

// const App = () => {
//   useEffect(() => {
//     // 1. Оголошуємо асинхронну функцію
//     async function fetchArticles() {
//       // Тут будемо виконувати HTTP-запит
//     }

//     // 2. Викликаємо її одразу після оголошення
//     fetchArticles();
//   }, []);

//   return (
//     <div>
//       <h1>Latest articles</h1>
//     </div>
//   );
// };

import { useEffect } from "react";
import axios from "axios";

const App = () => {
  useEffect(() => {
    async function fetchArticles() {
      const response = await axios.get(
        "https://hn.algolia.com/api/v1/search?query=react"
      );
      console.log(response);
    }

    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Latest articles</h1>
    </div>
  );
};
