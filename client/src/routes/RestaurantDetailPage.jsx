import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getOneRestaurant,
  getOneRestaurants,
} from "../features/restaurants/restaurantSlice";
import { useDispatch, useSelector } from "react-redux";
import { getReviews, getAllReviews } from "../features/reviews/reviewSlice";
import { Reviews, AddReview } from "../features/reviews";
import NavbarPopUp from "../features/navBar/NavbarPopUp";

const RestaurantDetailPage = () => {
  const { uuid } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const restaurant = useSelector(getOneRestaurants);
  const reviews = useSelector(getAllReviews);

  useEffect(() => {
    dispatch(getOneRestaurant(uuid));
    dispatch(getReviews(uuid));
  }, [uuid, dispatch]);

  const { isOpen } = useSelector((store) => store.navBar);

  return (
    <>
      <div>
        {restaurant && (
          <>
            {isOpen && <NavbarPopUp />}
            <h1 className="text-center display-1 font-light mt-5 text-[20px] md:text-[22px] lg:text-[24px]">
              Reviews for{" "}
              <span className="text-red-600"> {restaurant.name} </span>
            </h1>

            <div className="text-center"></div>
            <div className="mt-3">
              <Reviews key={reviews.uuid} reviews={reviews} />
            </div>
            <AddReview />
          </>
        )}
      </div>
    </>
  );
};

export default RestaurantDetailPage;
