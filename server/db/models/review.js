"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Restaurant }) {
      // i need an assocaition with the restaurant model
      // one review can only belong to one restaurant

      this.belongsTo(Restaurant, {
        foreignKey: "restaurantId",
      });
    }
    toJSON() {
      return { ...this.get(), id: undefined };
    }
  }
  Review.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Please add your name" },
          notEmpty: { msg: "Please don't leave the name field blank" },
          // is only a regex to check if the name is only letters
          is: "^[a-zA-Z ]*$",
        },
      },
      review: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Must leave a review" },
          notEmpty: { msg: "Please don't leave the review field blank" },
        },
        is: "^[a-zA-Z ]*$",
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
        validate: {
          notNull: { msg: "Must have a rating" },
          notEmpty: { msg: "Please don't leave the rating field blank" },
          isNumeric: { msg: "Rating must be a number" },
          min: { args: 1, msg: "Rating must be at least 1" },
          max: { args: 5, msg: "Rating must be between 1 and 5" },
        },
      },
    },
    {
      sequelize,
      tableName: "reviews",
      modelName: "Review",
    }
  );
  return Review;
};
