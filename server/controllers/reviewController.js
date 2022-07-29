const { Restaurant, Review } = require("../db/models");

// @post route
// create a review for a restaurant

const createReview = async (req, res) => {
  try {
    const { uuid } = req.params;
    const { name, review, rating } = req.body;
    const restaurant = await Restaurant.findOne({
      where: { uuid },
    });
    if (!restaurant) {
      return res.status(404).json({ error: "Restaurant not found" });
    }
    const newReview = await Review.create({
      name,
      review,
      rating,
      restaurantId: restaurant.id,
    });
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// @get route
// get all reviews for a restaurant

const getAllReviews = async (req, res) => {
  try {
    const { uuid } = req.params;
    const restaurant = await Restaurant.findOne({
      where: { uuid },
    });
    if (!restaurant) {
      return res.status(404).json({ error: "Restaurant not found" });
    }
    const reviews = await Review.findAll({
      where: { restaurantId: restaurant.id },
    });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createReview,
  getAllReviews,
};
