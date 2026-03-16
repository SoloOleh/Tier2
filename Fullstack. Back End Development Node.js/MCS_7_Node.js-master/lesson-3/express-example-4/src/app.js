import express from "express";
import cors from "cors";

import moviesRoutes from "./routes/moviesRoutes.js";

const app = express();

app.use(cors());

app.use("/api/movies", moviesRoutes);

app.use((req, res)=> {
    res.status(404).json({
        message: `${req.method} ${req.url} not found`
    })
})

app.listen(3000, ()=> console.log("Server running on 3000 port"))