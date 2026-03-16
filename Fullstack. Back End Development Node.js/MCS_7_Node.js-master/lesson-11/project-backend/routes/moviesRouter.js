import { Router } from "express";

import {
  getMoviesController,
  getMovieByIdController,
  addMovieController,
  updateMovieByIdController,
  deleteMovieByIdController,
} from "../controllers/moviesControllers.js";

import validateBody from "../helpers/validateBody.js";

import { movieAddSchema, movieUpdateSchema } from "../schemas/moviesSchemas.js";

import authenticate from "../middlewares/authenticate.js";
import upload from "../middlewares/upload.js";

const moviesRouter = Router();

moviesRouter.use(authenticate);

moviesRouter.get("/", getMoviesController);

moviesRouter.get("/:id", getMovieByIdController);

// upload.fields[
//   {
//     name: "poster",
//     maxCount: 1,
//   },
//   {
//     name: "subposters",
//     maxCount: 3
//   }
// ];
// upload.array("poster", 2);
moviesRouter.post(
  "/",
  upload.single("poster"),
  validateBody(movieAddSchema),
  addMovieController
);

moviesRouter.put(
  "/:id",
  validateBody(movieUpdateSchema),
  updateMovieByIdController
);

moviesRouter.delete("/:id", deleteMovieByIdController);

export default moviesRouter;
