// src/components/SearchForm.jsx

// export const SearchForm = ({ onSearch }) => {
//   const handleSubmit = (evt) => {
//     evt.preventDefault();
//     const form = evt.target;
//     const topic = form.elements.topic.value;
//     onSearch(topic);
//     form.reset();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="topic" placeholder="Search articles..." />
//       <button>Search</button>
//     </form>
//   );
// };

// src/components/SearchForm.jsx

export const SearchForm = ({ onSearch }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.topic.value;

    // Якщо текстове поле порожнє, виводимо повідомлення
    // і припиняємо виконання функції.
    if (form.elements.topic.value.trim() === "") {
      alert("Please enter search term!");
      return;
    }

    // У протилежному випадку викликаємо пропс
    // і передаємо йому значення поля
    onSearch(topic);
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="topic" placeholder="Пошук статей..." />
      <button>Пошук</button>
    </form>
  );
};

// src/components/App.jsx

// import { SearchForm } from "./SearchForm";

// const App = () => {

//   const handleSearch = topic => {
// 	// ...
//   };

//   return (
//     <div>
//       <SearchForm onSearch={handleSearch} />
//       {loading && <Loader />}
//       {error && <Error />}
//       {articles.length > 0 && <ArticleList items={articles} />}
//     </div>
//   );
// };

// src/components/App.jsx

const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (topic) => {
    try {
      setArticles([]);
      setError(false);
      setLoading(true);
      const data = await fetchArticlesWithTopic(topic);
      setArticles(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <Error />}
      {articles.length > 0 && <ArticleList items={articles} />}
    </div>
  );
};
