import { useEffect, useState } from "react";
import axios from "axios";
import { ArticleList } from "./ArticleList";

const ArticleList = ({ items }) => (
  <ul>
    {items.map(({ objectID, url, title }) => (
      <li key={objectID}>
        <a href={url} target="_blank" rel="noreferrer noopener">
          {title}
        </a>
      </li>
    ))}
  </ul>
);

// const App = () => {
//   // 1. Оголошуємо стан
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     async function fetchArticles() {
//       const response = await axios.get(
//         "https://hn.algolia.com/api/v1/search?query=react"
//       );
//       // 2. Записуємо дані в стан
//       setArticles(response.data.hits);
//     }

//     fetchArticles();
//   }, []);

//   return (
//     <div>
//       <h1>Latest articles</h1>
//     </div>
//   );
// };

// const App = () => {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     async function fetchArticles() {
//       const response = await axios.get(
//         "https://hn.algolia.com/api/v1/search?query=react"
//       );
//       setArticles(response.data.hits);
//     }

//     fetchArticles();
//   }, []);

//   return (
//     <div>
//       <h1>Latest articles</h1>

//       {articles.length > 0 && (
//         <ul>
//           {articles.map(({ objectID, url, title }) => (
//             <li key={objectID}>
//               <a href={url} target="_blank" rel="noreferrer noopener">
//                 {title}
//               </a>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      const response = await axios.get(
        "https://hn.algolia.com/api/v1/search?query=react"
      );
      setArticles(response.data.hits);
    }

    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Latest articles</h1>
      {articles.length > 0 && <ArticleList items={articles} />}
    </div>
  );
};
