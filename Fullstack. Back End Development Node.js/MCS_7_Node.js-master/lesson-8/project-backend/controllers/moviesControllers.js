import * as moviesServices from "../services/moviesServices.js";

import HttpError from "../helpers/HttpError.js";

export const getMoviesController = async (req, res) => {
  const { id: owner } = req.user;
  const movies = await moviesServices.getMovies({ owner });

  res.json(movies);
};

export const getMovieByIdController = async (req, res) => {
  const { id } = req.params;
  const { id: owner } = req.user;
  const movie = await moviesServices.getMovie({ id, owner });
  if (!movie) {
    throw HttpError(404, `Movie with id=${id} not found`);
  }

  res.json(movie);
};

export const addMovieController = async (req, res) => {
  const { id: owner } = req.user;
  const newMovie = await moviesServices.addMovie({ ...req.body, owner });

  res.status(201).json(newMovie);
};

export const updateMovieByIdController = async (req, res) => {
  const { id } = req.params;
  const { id: owner } = req.user;
  const updateMovie = await moviesServices.updateMovie({ id, owner }, req.body);
  if (!updateMovie) {
    throw HttpError(404, `Movie with id=${id} not found`);
  }

  res.json(updateMovie);
};

export const deleteMovieByIdController = async (req, res) => {
  const { id } = req.params;
  const { id: owner } = req.user;
  const deleteMovie = await moviesServices.deleteMovie({ id, owner });
  if (!deleteMovie) {
    throw HttpError(404, `Movie with id=${id} not found`);
  }

  res.json({
    message: "Delete successfully",
  });
};
