"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Restaurant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Review }) {
      // this needs to be associated with the review model
      // one restaurant can have many reviews
      this.hasMany(Review, { foreignKey: "restaurantId" });
    }
    toJSON() {
      return { ...this.get(), id: undefined };
    }
  }
  Restaurant.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Must have a restaurant name" },
          notEmpty: { msg: "Please don't leave the restaurant name blank" },
          is: "^[a-zA-Z ]*$",
        },
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Must have a location name" },
          notEmpty: { msg: "Please don't leave the location name blank" },
          is: "^[a-zA-Z ]*$",
        },
      },
      cuisine: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Must have a cuisine" },
          notEmpty: { msg: "Please don't leave the cuisine blank " },
          is: "^[a-zA-Z ]*$",
        },
      },
      price_range: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Must have a price_range" },
          notEmpty: { msg: "Please don't leave the price_range name blank" },
        },
      },
    },
    {
      sequelize,
      tableName: "restaurants",
      modelName: "Restaurant",
    }
  );
  return Restaurant;
};
