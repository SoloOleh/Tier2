// import { useEffect, useState } from "react";
// import { Link, Outlet, useParams, useNavigate } from "react-router-dom";

// function MovieDetailsPage() {
//   const { movieId } = useParams();
//   const navigate = useNavigate();
//   const [movie, setMovie] = useState(null);

//   useEffect(() => {
//     fetch(`https://api.themoviedb.org/3/movie/${movieId}`, {
//       headers: {
//         Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNmNiNDA3YjU0Mzg4Zjk4ZTkzYmQxMWRjNjM0MmYyMyIsIm5iZiI6MTczNDAyNDI5Ny4wNzgsInN1YiI6IjY3NWIxYzY5ZDlkNTE5NWZhZGFhM2E1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0byKIVcLubUa-Q4fWkOw523lsjZs1Zal0hd4FOaRc9U`,
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => setMovie(data));
//   }, [movieId]);

//   if (!movie) return <div>Loading...</div>;

//   return (
//     <div>
//       <button onClick={() => navigate(-1)}>Go back</button>
//       <h1>
//         {movie.title} ({movie.release_date.split("-")[0]})
//       </h1>
//       <p>User Score: {movie.vote_average * 10}%</p>
//       <p>Overview: {movie.overview}</p>
//       <p>Genres: {movie.genres.map((genre) => genre.name).join(", ")}</p>
//       <div>
//         <h2>Additional information</h2>
//         <ul>
//           <li>
//             <Link to={`cast`}>Cast</Link>
//           </li>
//           <li>
//             <Link to={`reviews`}>Reviews</Link>
//           </li>
//         </ul>
//       </div>
//       <Outlet />
//     </div>
//   );
// }

// export default MovieDetailsPage;

// робочий варіант
// import { useEffect, useState } from "react";
// import { Link, Outlet, useParams, useNavigate } from "react-router-dom";

// function MovieDetailsPage() {
//   const { movieId } = useParams();
//   const navigate = useNavigate();
//   const [movie, setMovie] = useState(null);

//   useEffect(() => {
//     fetch(`https://api.themoviedb.org/3/movie/${movieId}`, {
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
//       .then((data) => setMovie(data))
//       .catch((error) => console.error("Error fetching movie details:", error));
//   }, [movieId]);

//   if (!movie) return <div>Loading...</div>;

//   return (
//     <div>
//       <button onClick={() => navigate(-1)}>Go back</button>
//       <h1>
//         {movie.title} ({movie.release_date.split("-")[0]})
//       </h1>
//       <p>User Score: {movie.vote_average * 10}%</p>
//       <p>Overview: {movie.overview}</p>
//       <p>Genres: {movie.genres.map((genre) => genre.name).join(", ")}</p>
//       <div>
//         <h2>Additional information</h2>
//         <ul>
//           <li>
//             <Link to="cast">Cast</Link>
//           </li>
//           <li>
//             <Link to="reviews">Reviews</Link>
//           </li>
//         </ul>
//       </div>
//       <Outlet />
//     </div>
//   );
// }

// export default MovieDetailsPage;

import { useEffect, useState } from "react";
import { Link, Outlet, useParams, useNavigate } from "react-router-dom";
import styles from "./MovieDetailsPage.module.css";

function MovieDetailsPage() {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}`, {
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
      .then((data) => setMovie(data))
      .catch((error) => console.error("Error fetching movie details:", error));
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <button onClick={() => navigate(-1)} className={styles.goBackButton}>
        Go back
      </button>
      <h1 className={styles.title}>
        {movie.title} ({movie.release_date.split("-")[0]})
      </h1>
      <p className={styles.text}>
        <strong>User Score:</strong> {movie.vote_average * 10}%
      </p>
      <p className={styles.text}>
        <strong>Overview:</strong> {movie.overview}
      </p>
      <p className={styles.text}>
        <strong>Genres:</strong>{" "}
        {movie.genres.map((genre) => genre.name).join(", ")}
      </p>
      <div className={styles.additionalInfo}>
        <h2 className={styles.subTitle}>Additional information</h2>
        <ul className={styles.infoList}>
          <li>
            <Link to="cast" className={styles.link}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" className={styles.link}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}

export default MovieDetailsPage;
