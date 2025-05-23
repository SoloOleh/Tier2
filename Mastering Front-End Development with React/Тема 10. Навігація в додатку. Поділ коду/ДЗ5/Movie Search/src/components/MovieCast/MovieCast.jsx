// робочий варіант
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// function MovieCast() {
//   const { movieId } = useParams();
//   const [cast, setCast] = useState([]);

//   useEffect(() => {
//     fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits`, {
//       headers: {
//         Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNmNiNDA3YjU0Mzg4Zjk4ZTkzYmQxMWRjNjM0MmYyMyIsIm5iZiI6MTczNDAyNDI5Ny4wNzgsInN1YiI6IjY3NWIxYzY5ZDlkNTE5NWZhZGFhM2E1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0byKIVcLubUa-Q4fWkOw523lsjZs1Zal0hd4FOaRc9U`,
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => setCast(data.cast || []));
//   }, [movieId]);

//   return (
//     <div>
//       <h2>Cast</h2>
//       <ul>
//         {cast.map((actor) => (
//           <li key={actor.id}>
//             <img
//               src={
//                 actor.profile_path
//                   ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
//                   : "https://via.placeholder.com/200x300"
//               }
//               alt={actor.name}
//               width={100}
//             />
//             <p>{actor.name}</p>
//             <p>Character: {actor.character}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default MovieCast;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./MovieCast.module.css";

function MovieCast() {
  const { movieId } = useParams(); // Отримуємо movieId з URL
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits`, {
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
      .then((data) => setCast(data.cast || []))
      .catch((error) => console.error("Error fetching cast:", error));
  }, [movieId]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Cast</h2>
      <ul className={styles.list}>
        {cast.map((member) => (
          <li key={member.id} className={styles.listItem}>
            <img
              src={`https://image.tmdb.org/t/p/w200${member.profile_path}`}
              alt={member.name}
              className={styles.image}
            />
            <p className={styles.name}>{member.name}</p>
            <p className={styles.character}>Character: {member.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieCast;
