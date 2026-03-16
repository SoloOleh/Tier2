import Movie from "../db/models/Movie.js";

export const getMovies = () => Movie.findAll();

export const getMoviesById = (id) => Movie.findByPk(id);

// export const getMoviesById = (id) => Movie.findOne({
//     where: {
//         id
//     }
// })

export const addMovie = (payload) => Movie.create(payload); // throw new Error("notNull Violation: movie.releaseYear cannot be null")

export const updateMovieById = async (id, payload) => {
  const movie = await getMoviesById(id);
  if (!movie) return null;
  await movie.update(payload);
  return movie;
};

export const deleteMovieById = async (id) => {
    const movie = await getMoviesById(id);
    if (!movie) return null;
    await movie.destroy();
    return movie;
};
