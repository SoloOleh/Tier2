import SearchBar from "./components/SearchBar/SearchBar";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { getImages } from "./services/api";

function handleSearch() {}

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  useEffect(() => {
    async function fetchImages() {
      const data = await getImages({ query, page });
      setImages((prevImages) => [...prevImages, ...data.results]);
    }

    fetchImages();
  }, [query, page]);

  return (
    <div className="App">
      <SearchBar onSubmit={handleSearch} />
      <Toaster position="top-right" />
    </div>
  );
}
export default App;
