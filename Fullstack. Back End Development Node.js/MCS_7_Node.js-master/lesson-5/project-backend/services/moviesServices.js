import Movie from "../db/models/Movie.js";

export const getMovies = () => Movie.findAll();

// export const getMoviesById = async (id) => {
//   const movies = await getMovies();
//   const result = movies.find((item) => item.id === id);
//   return result || null;
// };

export const addMovie = (payload) => Movie.create(payload);

// export const updateMovieById = async (id, payload) => {
//   const movies = await getMovies();
//   const index = movies.findIndex((item) => item.id === id);
//   if (index === -1) return null;
//   movies[index] = { ...movies[index], ...payload };
//   await updateMovies(movies);
//   return movies[index];
// };

// export const deleteMovieById = async (id) => {
//   const movies = await getMovies();
//   const index = movies.findIndex((item) => item.id === id);
//   if (index === -1) return null;
//   const [result] = movies.splice(index, 1);
//   await updateMovies(movies);
//   return result;
// };
