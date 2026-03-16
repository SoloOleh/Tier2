import * as moviesServices from "../services/moviesServices.js";

import HttpError from "../helpers/HttpError.js";

export const getMoviesController = async (req, res) => {
  const movies = await moviesServices.getMovies();

  res.json(movies);
};

export const getMovieByIdController = async(req, res)=> {
    const {id} = req.params;
    const movie = await moviesServices.getMoviesById(id);
    if(!movie) {
        throw HttpError(404, `Movie with id=${id} not found`);
        // const error = new Error(`Movie with id=${id} not found`);
        // error.status = 404;
        // throw error;
        // return res.status(404).json({
        //     message: `Movie with id=${id} not found`
        // });
    }

    res.json(movie);
}

export const addMovieController = async(req, res)=> {
    const newMovie = await moviesServices.addMovie(req.body);
    
    res.status(201).json(newMovie);
}

export const updateMovieByIdController = async(req, res)=> {
    const {id} = req.params;
    const updateMovie = await moviesServices.updateMovieById(id, req.body);
    if(!updateMovie) {
        throw HttpError(404, `Movie with id=${id} not found`);
    }

    res.json(updateMovie);
}

export const deleteMovieByIdController = async(req, res)=> {
    const {id} = req.params;
    const deleteMovie = await moviesServices.deleteMovieById(id);
    if(!deleteMovie) {
        throw HttpError(404, `Movie with id=${id} not found`);
    }

    // res.status(204).send();

    res.json({
        message: "Delete successfully"
    })
}