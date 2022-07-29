const express = require("express");
const router = express.Router();
const {
  createReview,
  getAllReviews,
} = require("../controllers/reviewController");

router.get("/:uuid/reviews", getAllReviews);
router.post("/:uuid/addReview", createReview);

module.exports = router;
