// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// function HomePage() {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     fetch("https://api.themoviedb.org/3/trending/movie/day", {
//       headers: {
//         Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNmNiNDA3YjU0Mzg4Zjk4ZTkzYmQxMWRjNjM0MmYyMyIsIm5iZiI6MTczNDAyNDI5Ny4wNzgsInN1YiI6IjY3NWIxYzY5ZDlkNTE5NWZhZGFhM2E1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0byKIVcLubUa-Q4fWkOw523lsjZs1Zal0hd4FOaRc9U`,
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => setMovies(data.results || []));
//   }, []);

//   return (
//     <div>
//       <h1>Trending today</h1>
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

// export default HomePage;

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// function HomePage() {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     fetch("https://api.themoviedb.org/3/trending/movie/day", {
//       headers: {
//         Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNmNiNDA3YjU0Mzg4Zjk4ZTkzYmQxMWRjNjM0MmYyMyIsIm5iZiI6MTczNDAyNDI5Ny4wNzgsInN1YiI6IjY3NWIxYzY5ZDlkNTE5NWZhZGFhM2E1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0byKIVcLubUa-Q4fWkOw523lsjZs1Zal0hd4FOaRc9U`,
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Trending movies data:", data); // Перевірка даних
//         setMovies(data.results || []);
//       })
//       .catch((error) =>
//         console.error("Error fetching trending movies:", error)
//       );
//   }, []);

//   return (
//     <div>
//       <h1>Trending today</h1>
//       <ul>
//         {movies.length > 0 ? (
//           movies.map((movie) => (
//             <li key={movie.id}>
//               <img
//                 src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
//                 alt={movie.title}
//               />
//               <p>{movie.title}</p>
//             </li>
//           ))
//         ) : (
//           <p>No movies found.</p>
//         )}
//       </ul>
//     </div>
//   );
// }

// export default HomePage;

// Робочий варіант:
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// function HomePage() {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     fetch("https://api.themoviedb.org/3/trending/movie/day", {
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
//       .then((data) => {
//         console.log("Trending movies data:", data);
//         setMovies(data.results || []);
//       })
//       .catch((error) =>
//         console.error("Error fetching trending movies:", error)
//       );
//   }, []);

//   return (
//     <div>
//       <h1>Trending today</h1>
//       <ul>
//         {movies.length > 0 ? (
//           movies.map((movie) => (
//             <li key={movie.id}>
//               <Link to={`/movies/${movie.id}`}>
//                 <img
//                   src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
//                   alt={movie.title}
//                 />
//                 <p>{movie.title}</p>
//               </Link>
//             </li>
//           ))
//         ) : (
//           <p>No movies found.</p>
//         )}
//       </ul>
//     </div>
//   );
// }

// export default HomePage;

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import styles from "./HomePage.module.css";

// function HomePage() {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     fetch("https://api.themoviedb.org/3/trending/movie/day", {
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
//       .then((data) => {
//         console.log("Trending movies data:", data);
//         setMovies(data.results || []);
//       })
//       .catch((error) =>
//         console.error("Error fetching trending movies:", error)
//       );
//   }, []);

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Trending today</h1>
//       <ul className={styles.list}>
//         {movies.length > 0 ? (
//           movies.map((movie) => (
//             <li key={movie.id} className={styles.listItem}>
//               <Link to={`/movies/${movie.id}`} className={styles.link}>
//                 <img
//                   src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
//                   alt={movie.title}
//                   className={styles.image}
//                 />
//                 <p className={styles.movieTitle}>{movie.title}</p>
//               </Link>
//             </li>
//           ))
//         ) : (
//           <p className={styles.noMovies}>No movies found.</p>
//         )}
//       </ul>
//     </div>
//   );
// }

// export default HomePage;

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import styles from "./HomePage.module.css";

// function HomePage() {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     fetch("https://api.themoviedb.org/3/trending/movie/day", {
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
//       .catch((error) =>
//         console.error("Error fetching trending movies:", error)
//       );
//   }, []);

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Trending today</h1>
//       <ul className={styles.movieList}>
//         {movies.map((movie) => (
//           <li key={movie.id} className={styles.movieItem}>
//             <Link to={`/movies/${movie.id}`} className={styles.movieLink}>
//               <img
//                 src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
//                 alt={movie.title}
//                 className={styles.movieImage}
//               />
//               <p className={styles.movieTitle}>{movie.title}</p>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default HomePage;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/trending/movie/day", {
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
      .catch((error) =>
        console.error("Error fetching trending movies:", error)
      );
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Trending today</h1>
      <ul className={styles.movieList}>
        {movies.map((movie) => (
          <li key={movie.id} className={styles.movieItem}>
            <Link to={`/movies/${movie.id}`} className={styles.movieLink}>
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                className={styles.movieImage}
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

export default HomePage;
