const { Restaurant } = require("../db/models");

// @get route
// get all restaurants

const getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.findAll();
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// @get route
// get one restaurant by id

const getOneRestaurant = async (req, res) => {
  const { uuid } = req.params;
  try {
    const restaurant = await Restaurant.findOne({
      where: { uuid },
    });
    res.status(200).json(restaurant);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// @post route
// create a restaurant

const createRestaurant = async (req, res) => {
  const { name, location, price_range, cuisine } = req.body;
  try {
    const restaurant = await Restaurant.create({
      name,
      location,
      price_range,
      cuisine,
    });
    return res.status(201).json(restaurant);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// update restaurant
// @ put route
const updateRestaurant = async (req, res) => {
  try {
    const { uuid } = req.params;
    const { name, location, price_range, cuisine } = req.body;
    const restaurant = await Restaurant.update(
      { name, location, price_range, cuisine },
      { where: { uuid } }
    );
    res.status(200).json({ name, location, price_range, cuisine });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// @delete route
// delete restaurant by id

const deleteRestaurant = async (req, res) => {
  try {
    const { uuid } = req.params;
    const restaurant = await Restaurant.destroy({
      where: { uuid },
    });
    res.status(200).json({ message: "Restaurant deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getRestaurants,
  getOneRestaurant,
  createRestaurant,
  deleteRestaurant,
  updateRestaurant,
};
