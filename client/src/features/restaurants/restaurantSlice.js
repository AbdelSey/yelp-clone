import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import RestaurantFinder from "../../api/RestaurantFinder";
const initialState = {
  restaurants: [],
  restaurant: [],
  isLoading: false,
};

// api calls

// get all restaurants
export const getRestaurants = createAsyncThunk(
  "restaurants/fetchRestaurants",
  async () => {
    try {
      const response = await RestaurantFinder.get("/");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

// get one restaurant by id
export const getOneRestaurant = createAsyncThunk(
  "restaurants/getOneRestaurant",
  async (id) => {
    try {
      const response = await RestaurantFinder.get(`/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

// add a restaurant

export const postRestaurant = createAsyncThunk(
  "restaurants/addRestaurant",
  async ({ name, location, price_range, cuisine }) => {
    try {
      const response = await RestaurantFinder.post("/", {
        name,
        location,
        price_range,
        cuisine,
      });
      toast.success("Restaurant added successfully", {
        position: "top-right",
        autoClose: 1000,
      });

      return response.data;
    } catch (error) {
      toast.error("Error Adding Restaurant, Please check form fields again.", {
        autoClose: 3000,
      });
    }
  }
);

// update a restaurant

export const updateRestaurant = createAsyncThunk(
  "restaurants/updateRestaurant",
  async ({ uuid, name, location, price_range, cuisine }) => {
    try {
      const response = await RestaurantFinder.put(`/${uuid}`, {
        uuid,
        name,
        location,
        price_range,
        cuisine,
      });
      toast.success("Restaurant updated successfully", {
        position: "top-right",
        autoClose: 2000,
      });
      return response.data;
    } catch (error) {
      toast("Please try again", error);
    }
  }
);

// delete a restaurant by id
export const deleteRestaurants = createAsyncThunk(
  "restaurants/deleteRestaurants",
  async (id) => {
    try {
      const response = await RestaurantFinder.delete(`/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

// restaurant slice

const restaurantSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {
    addRestaurants: (state, action) => {
      state.restaurants.push(action.payload);
    },
    deleteRestaurant: (state, action) => {
      const uuid = action.payload;
      const newRestaurants = state.restaurants.filter(
        (restaurant) => restaurant.uuid !== uuid
      );
      state.restaurants = newRestaurants;
    },
  },
  extraReducers: {
    [getRestaurants.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getRestaurants.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.restaurants = action.payload;
    },
    [getRestaurants.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [getOneRestaurant.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getOneRestaurant.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.restaurant = action.payload;
    },
    [getOneRestaurant.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const getAllRestaurants = (state) => state.restaurants.restaurants;
export const getOneRestaurants = (state) => state.restaurants.restaurant;

export const { deleteRestaurant, addRestaurants } = restaurantSlice.actions;

export default restaurantSlice.reducer;
