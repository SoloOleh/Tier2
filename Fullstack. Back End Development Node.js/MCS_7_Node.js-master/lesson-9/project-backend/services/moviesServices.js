import * as fs from "node:fs/promises";
import path from "node:path";

import Movie from "../db/models/Movie.js";

const postersDir = path.resolve("public", "posters");

export const getMovies = where => Movie.findAll({where});

export const getMovie = where => Movie.findOne({where});

export const addMovie = async (payload, file) => {
  let poster = null;
  if(file) {
    const newPath = path.join(postersDir, file.filename);
    await fs.rename(file.path, newPath);
    poster = path.join("posters", file.filename);
  }
  return Movie.create({...payload, poster});
};

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
