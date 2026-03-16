import {Router} from "express";

import movies from "../data/movies.js";

const moviesRoutes = Router();

moviesRoutes.get("/", (req, res)=> {
    res.json(movies);
})

moviesRoutes.get("/:id", (req,res)=> {
    res.json(movies[0])
})

moviesRoutes.post("/", (req,res)=> {
    res.json(movies[0])
})

moviesRoutes.put("/:id", (req,res)=> {
    res.json(movies[0])
})

moviesRoutes.delete("/:id", (req,res)=> {
    res.json(movies[0])
})

export default moviesRoutes;