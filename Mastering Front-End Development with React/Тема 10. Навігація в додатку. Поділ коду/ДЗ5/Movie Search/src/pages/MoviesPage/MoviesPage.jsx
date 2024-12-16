// import { useState } from "react";
// import { Link, useSearchParams } from "react-router-dom";

// function MoviesPage() {
//   const [query, setQuery] = useState("");
//   const [movies, setMovies] = useState([]);
//   const [searchParams, setSearchParams] = useSearchParams();

//   const handleSearch = () => {
//     fetch(`https://api.themoviedb.org/3/search/movie?query=${query}`, {
//       headers: {
//         Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNmNiNDA3YjU0Mzg4Zjk4ZTkzYmQxMWRjNjM0MmYyMyIsInN1YiI6IjY3NWIxYzY5ZDlkNTE5NWZhZGFhM2E1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0byKIVcLubUa-Q4fWkOw523lsjZs1Zal0hd4FOaRc9U`,
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => setMovies(data.results || []));
//     setSearchParams({ query });
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder="Search movies"
//       />
//       <button onClick={handleSearch}>Search</button>
//       <ul>
//         {movies.map((movie) => (
//           <li key={movie.id}>
//             <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default MoviesPage;

// робочий варіант
// import { useState, useEffect } from "react";
// import { Link, useSearchParams } from "react-router-dom";

// function MoviesPage() {
//   const [query, setQuery] = useState("");
//   const [movies, setMovies] = useState([]);
//   const [searchParams, setSearchParams] = useSearchParams();

//   useEffect(() => {
//     const queryParam = searchParams.get("query");
//     if (queryParam) {
//       setQuery(queryParam);
//       fetchMovies(queryParam);
//     }
//   }, [searchParams]);

//   const fetchMovies = (searchQuery) => {
//     fetch(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}`, {
//       headers: {
//         Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNmNiNDA3YjU0Mzg4Zjk4ZTkzYmQxMWRjNjM0MmYyMyIsIm5iZiI6MTczNDAyNDI5Ny4wNzgsInN1YiI6IjY3NWIxYzY5ZDlkNTE5NWZhZGFhM2E1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0byKIVcLubUa-Q4fWkOw523lsjZs1Zal0hd4FOaRc9U`,
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => setMovies(data.results || []))
//       .catch((error) => console.error("Error fetching movies:", error));
//   };

//   const handleSearch = () => {
//     setSearchParams({ query });
//     fetchMovies(query);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder="Search movies"
//       />
//       <button onClick={handleSearch}>Search</button>
//       <ul>
//         {movies.map((movie) => (
//           <li key={movie.id}>
//             <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default MoviesPage;

// import { useState } from "react";
// import { Link, useSearchParams } from "react-router-dom";
// import styles from "./MoviesPage.module.css";

// function MoviesPage() {
//   const [query, setQuery] = useState("");
//   const [movies, setMovies] = useState([]);
//   const [, setSearchParams] = useSearchParams();

//   const handleSearch = () => {
//     setSearchParams({ query });
//     fetch(`https://api.themoviedb.org/3/search/movie?query=${query}`, {
//       headers: {
//         Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNmNiNDA3YjU0Mzg4Zjk4ZTkzYmQxMWRjNjM0MmYyMyIsIm5iZiI6MTczNDAyNDI5Ny4wNzgsInN1YiI6IjY3NWIxYzY5ZDlkNTE5NWZhZGFhM2E1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0byKIVcLubUa-Q4fWkOw523lsjZs1Zal0hd4FOaRc9U`,
//       },
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then((data) => setMovies(data.results || []))
//       .catch((error) => console.error("Error fetching movies:", error));
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Search Movies</h1>
//       <div className={styles.searchBar}>
//         <input
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Enter movie name"
//           className={styles.input}
//         />
//         <button onClick={handleSearch} className={styles.button}>
//           Search
//         </button>
//       </div>
//       <ul className={styles.list}>
//         {movies.map((movie) => (
//           <li key={movie.id} className={styles.listItem}>
//             <Link to={`/movies/${movie.id}`} className={styles.link}>
//               <img
//                 src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
//                 alt={movie.title}
//                 className={styles.image}
//               />
//               <p className={styles.movieTitle}>{movie.title}</p>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default MoviesPage;

import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import styles from "./MoviesPage.module.css";

function MoviesPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [, setSearchParams] = useSearchParams();

  const handleSearch = () => {
    setSearchParams({ query });
    fetch(`https://api.themoviedb.org/3/search/movie?query=${query}`, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNmNiNDA3YjU0Mzg4Zjk4ZTkzYmQxMWRjNjM0MmYyMyIsIm5iZiI6MTczNDAyNDI5Ny4wNzgsInN1YiI6IjY3NWIxYzY5ZDlkNTE5NWZhZGFhM2E1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0byKIVcLubUa-Q4fWkOw523lsjZs1Zal0hd4FOaRc9U`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setMovies(data.results || []))
      .catch((error) => console.error("Error fetching movies:", error));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Search Movies</h1>
      <div className={styles.searchBar}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter movie name"
          className={styles.input}
        />
        <button onClick={handleSearch} className={styles.button}>
          Search
        </button>
      </div>
      <ul className={styles.list}>
        {movies.map((movie) => (
          <li key={movie.id} className={styles.listItem}>
            <Link to={`/movies/${movie.id}`} className={styles.link}>
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                className={styles.image}
              />
              <p className={styles.movieTitle}>
                {movie.title} ({new Date(movie.release_date).getFullYear()})
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MoviesPage;
