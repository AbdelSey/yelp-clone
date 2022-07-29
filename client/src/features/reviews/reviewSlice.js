import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import RestaurantFinder from "../../api/RestaurantFinder";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  reviews: [],
  isLoading: false,
};

// api calls

// get reviews for a restaurant

export const getReviews = createAsyncThunk("reviews/getReviews", async (id) => {
  try {
    const response = await RestaurantFinder.get(`/${id}/reviews`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

// add a review for a restaurant

export const createReview = createAsyncThunk(
  "reviews/addReview",
  async ({ uuid, name, review, rating }) => {
    try {
      const response = await RestaurantFinder.post(`/${uuid}/addReview`, {
        uuid,
        name,
        review,
        rating,
      });
      toast.success("Review added successfully", {
        position: "top-right",
        autoClose: 2000,
      });
      return response.data;
    } catch (error) {
      toast.error("Error adding review, please check form fields", {
        autoClose: 5000,
      });
      console.log(error);
    }
  }
);

const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    // add a review to the reviews array
    addReview: (state, action) => {
      state.reviews.push(action.payload);
    },
  },
  extraReducers: {
    [getReviews.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getReviews.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.reviews = action.payload;
    },
    [getReviews.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const getAllReviews = (state) => state.reviews.reviews;

export const { addReview } = reviewSlice.actions;
export default reviewSlice.reducer;
