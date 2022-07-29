"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "reviews",
      [
        {
          name: "John",
          review: "This is a great restaurant",
          uuid: "f8f8f8f8-f8f8-f8f8-f8f8-f8f8f8f8f8f8",
          rating: 4,
          restaurantId: 103,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jane",
          review: "AMAZING!",
          uuid: "f8f8f8f8-f8f8-f8f8-f8f8-f8f8f8f8f8f8",
          rating: 5,
          restaurantId: 104,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Becky",
          review: "not bad",
          uuid: "f8f8f8f8-f8f8-f8f8-f8f8-f8f8f8f8f8f8",
          rating: 2,
          restaurantId: 105,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("reviews", null, {});
  },
};
