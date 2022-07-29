import { configureStore } from "@reduxjs/toolkit";
import restaurantSlice from "../features/restaurants/restaurantSlice";
import reviewSlice from "../features/reviews/reviewSlice";
import navSlice from "../features/navBar/navSlice";

export const store = configureStore({
  reducer: {
    restaurants: restaurantSlice,
    reviews: reviewSlice,
    navBar: navSlice,
  },
});
