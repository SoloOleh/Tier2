import { DataTypes } from "sequelize";

import sequlize from "../sequelize.js";

const Movie = sequlize.define(
    "movie",
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        director: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }
);

// Movie.sync();

export default Movie;