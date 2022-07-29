const express = require("express");
const router = express.Router();
const {
  createRestaurant,
  getRestaurants,
  getOneRestaurant,
  deleteRestaurant,
  updateRestaurant,
} = require("../controllers/restaurantController");

router.get("/", getRestaurants).post("/", createRestaurant);
router
  .get("/:uuid", getOneRestaurant)
  .put("/:uuid", updateRestaurant)
  .delete("/:uuid", deleteRestaurant);

module.exports = router;
