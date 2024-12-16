// Робочий варіант
// import { Suspense, lazy } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   NavLink,
// } from "react-router-dom";
// import "./App.css";

// const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
// const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
// const MovieDetailsPage = lazy(() =>
//   import("./pages/MovieDetailsPage/MovieDetailsPage")
// );
// const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
// const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
// const MovieReviews = lazy(() =>
//   import("./components/MovieReviews/MovieReviews")
// );

// function App() {
//   return (
//     <Router>
//       <nav>
//         <NavLink
//           to="/"
//           className={({ isActive }) => (isActive ? "active" : "")}
//         >
//           Home
//         </NavLink>
//         <NavLink
//           to="/movies"
//           className={({ isActive }) => (isActive ? "active" : "")}
//         >
//           Movies
//         </NavLink>
//       </nav>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/movies" element={<MoviesPage />} />
//           <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
//             <Route path="cast" element={<MovieCast />} />
//             <Route path="reviews" element={<MovieReviews />} />
//           </Route>
//           <Route path="*" element={<NotFoundPage />} />
//         </Routes>
//       </Suspense>
//     </Router>
//   );
// }

// export default App;

// import { Suspense, lazy } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   NavLink,
// } from "react-router-dom";
// import "./App.css";

// const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
// const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
// const MovieDetailsPage = lazy(() =>
//   import("./pages/MovieDetailsPage/MovieDetailsPage")
// );
// const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
// const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
// const MovieReviews = lazy(() =>
//   import("./components/MovieReviews/MovieReviews")
// );

// function App() {
//   return (
//     <Router>
//       <nav>
//         <NavLink
//           to="/"
//           className={({ isActive }) => (isActive ? "active" : "")}
//         >
//           Home
//         </NavLink>
//         <NavLink
//           to="/movies"
//           className={({ isActive }) => (isActive ? "active" : "")}
//         >
//           Movies
//         </NavLink>
//       </nav>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/movies" element={<MoviesPage />} />
//           <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
//             <Route path="cast" element={<MovieCast />} />
//             <Route path="reviews" element={<MovieReviews />} />
//           </Route>
//           <Route path="*" element={<NotFoundPage />} />
//         </Routes>
//       </Suspense>
//     </Router>
//   );
// }

// export default App;

import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.css";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("./components/MovieReviews/MovieReviews")
);

function App() {
  return (
    <Router>
      <nav className="header">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active navLink" : "navLink"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            isActive ? "active navLink" : "navLink"
          }
        >
          Movies
        </NavLink>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
