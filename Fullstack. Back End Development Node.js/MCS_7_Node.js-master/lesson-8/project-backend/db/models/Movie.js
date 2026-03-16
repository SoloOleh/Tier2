import { DataTypes } from "sequelize";

import sequlize from "../sequelize.js";

import { categoryList, minReleaseYear } from "../constants/movieConstants.js";

const Movie = sequlize.define("movie", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  director: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  favorite: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  category: {
    type: DataTypes.ENUM(...categoryList),
    defaultValue: categoryList[0]
  },
  releaseYear: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
        min: minReleaseYear
    }
  },
  owner: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "users",
      key: "id"
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
  }
});

// Movie.sync({alter: true});

export default Movie;
