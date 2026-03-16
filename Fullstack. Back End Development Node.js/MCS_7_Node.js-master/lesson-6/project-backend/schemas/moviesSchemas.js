import Joi from "joi";

import { categoryList, minReleaseYear } from "../db/constants/movieConstants.js";

export const movieAddSchema = Joi.object({
    title: Joi.string().required().messages({
        "any.required": "title must be exist",
        "string.base": "title must be string"
    }),
    director: Joi.string().required(),
    favorite: Joi.boolean(),
    category: Joi.string().valid(...categoryList),
    releaseYear: Joi.number().min(minReleaseYear).required()
})

export const movieUpdateSchema = Joi.object({
    title: Joi.string().messages({
        "string.base": "title must be string"
    }),
    director: Joi.string(),
    favorite: Joi.boolean(),
    category: Joi.string().valid(...categoryList),
    releaseYear: Joi.number().min(minReleaseYear)
}).min(1)
