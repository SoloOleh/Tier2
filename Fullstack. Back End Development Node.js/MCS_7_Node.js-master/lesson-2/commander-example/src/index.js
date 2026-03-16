import {program} from "commander";

import { getMovies, getMoviesById, addMovie, updateMovieById, deleteMovieById } from "./movies.js";

const invokeAction = async({action, id, ...data})=> {
    switch(action) {
        case "list":
            const allMovies = await getMovies();
            return console.log(allMovies);
        case "getById":
            const oneMovie = await getMoviesById(id);
            return console.log(oneMovie);
        case "add":
            const newMovie = await addMovie(data);
            return console.log(newMovie);
        case "updateById":
            const updateMovie = await updateMovieById(id, data);
            return console.log(updateMovie);
        case "deleteById":
            const deleteMovie = await deleteMovieById(id);
            return console.log(deleteMovie);
        default:
            console.log("Unknown action");

    }
}

program
    .option("-a, --action <type>")
    .option("-i, --id <type>")
    .option("-t, --title <type>")
    .option("-d, --director <type>");

program.parse();

const options = program.opts();
invokeAction(options);