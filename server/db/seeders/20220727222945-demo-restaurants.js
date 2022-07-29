"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "restaurants",
      [
        {
          name: "Wendys",
          location: "New York",
          uuid: "f8f8f8f8-f8f8-f8f8-f8f8-f8f8f8f8f8f8",
          price_range: "$$",
          cuisine: "American",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sushi Palace",
          location: "LA",
          uuid: "f8f8f8f8-f8f8-f8f8-f8f8-f8f8f8f8f8f8",
          price_range: "$",
          cuisine: "Japanese",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chicago Pizzeria",
          uuid: "f8f8f8f8-f8f8-f8f8-f8f8-f8f8f8f8f8f8",
          location: "Chicago",
          price_range: "$",
          cuisine: "American",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("restaurants", null, {});
  },
};
