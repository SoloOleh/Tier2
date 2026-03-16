import * as fs from "node:fs/promises";

import Movie from "../db/models/Movie.js";

import cloudinary from "../helpers/cloudinary.js";

export const getMovies = where => Movie.findAll({where});

export const getMovie = where => Movie.findOne({where});

export const addMovie = async (payload, file) => {
  let poster = null;
  if(file) {
    const {secure_url} = await cloudinary.uploader.upload(file.path, {
      folder: "posters",
      use_filename: true,
    });
    await fs.unlink(file.path);
    poster = secure_url;
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
