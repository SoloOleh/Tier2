import Movie from "../db/models/Movie.js";

export const getMovies = where => Movie.findAll({where});

export const getMovie = where => Movie.findOne({where});

export const addMovie = (payload) => Movie.create(payload); // throw new Error("notNull Violation: movie.releaseYear cannot be null")

export const updateMovie = async (where, payload) => {
  const movie = await getMovie(where);
  if (!movie) return null;
  await movie.update(payload);
  return movie;
};

export const deleteMovie = async where => {
    const movie = await getMovie(where);
    if (!movie) return null;
    await movie.destroy();
    return movie;
};
