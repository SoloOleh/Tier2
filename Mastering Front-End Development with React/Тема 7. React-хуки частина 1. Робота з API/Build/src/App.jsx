import { useState } from "react";
import { SearchForm } from "./SearchForm";
import axios from "axios";

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

axios.defaults.baseURL = "https://hn.algolia.com/api/v1";
const fetchArticlesWithTopic = async (topic) => {
  const response = await axios.get(`/search?query=${topic}`);
  return response.data.hits;
};

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
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      {loading}
      {error}
      {articles.length > 0 && <ArticleList items={articles} />}
    </div>
  );
};
export default App;
