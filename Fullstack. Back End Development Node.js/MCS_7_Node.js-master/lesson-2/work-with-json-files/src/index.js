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

// invokeAction({action: "list"});
// invokeAction({action: "getById", id: "u9kgwNWGi3uUUwh0b8V48"});
// invokeAction({action: "add", title: "Avatar 2",  director: "James Cameron"});
// invokeAction({action: "updateById", id: "ABZnm_GK9_7XQKChKR1cd", title: "Avatar 3"});
// invokeAction({action: "deleteById", id: "ABZnm_GK9_7XQKChKR1cd"});