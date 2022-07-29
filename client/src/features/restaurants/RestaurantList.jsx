import React from "react";
import {
  getRestaurants,
  getAllRestaurants,
  deleteRestaurants,
  deleteRestaurant,
} from "./restaurantSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GrUpdate } from "react-icons/gr";
import Spinner from "../../components/Spinner";

const RestaurantList = () => {
  const dispatch = useDispatch();
  const restaurants = useSelector(getAllRestaurants);
  const { isLoading } = useSelector((store) => store.restaurants);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch, navigate]);

  const handleUpdate = (e, id) => {
    e.stopPropagation();
    navigate(`/restaurants/${id}/update`);
  };

  const handleDelete = (e, id) => {
    e.stopPropagation();
    dispatch(deleteRestaurant(id)); // from current state
    dispatch(deleteRestaurants(id)); // making the axios call to delete from server
  };

  const handleRestaurantSelect = (e, uuid) => {
    e.preventDefault();
    navigate(`/restaurants/${uuid}`);
  };

  // loading restaurants
  if (isLoading) {
    return <Spinner />;
  }

  // display if there are no restaurants
  if (!restaurants.length) {
    return (
      <div className="flex items-center justify-center md:mt-10">
        <div className="text-gray-500 text-lg md:text-xl lg:text-2xl">
          <p> No restaurants yet! </p>
        </div>
      </div>
    );
  }

  return (
    <section className="flex items-center justify-center">
      <div className="flex flex-col mt-4 items-center justify-center text-white w-[375px] md:w-[900px] lg:ml-10">
        <div className="rounded-2xl w-[280px] flex items-center flex-col justify-center md:grid md:grid-cols-3 md:w-[620px] lg:w-[900px]">
          <h1 className=" text-[25px] text-center md:text-[29px] mb-8 font-light md:col-span-3 lg:md:col-span-3 text-red-600 mt-4 lg:text-[32px] lg:mb-8">
            Restaurants
          </h1>
          {/* restaurant list */}
          {restaurants &&
            restaurants.map((restaurant) => {
              return (
                <div
                  className="flex items-center justify-center text-white"
                  key={restaurant.uuid}
                >
                  <div className="shadow-3xl mb-5 shadow-2xl w-[245px] h-[160px]  rounded-2xl bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-bl relative md:w-[200px] md:mr-1 md:h-[170px] lg:w-[250px] lg:h-[200px] md:ml-2 md:mt-2">
                    {/* restaurant info */}
                    <div className="flex flex-col ml-3 mt-2 ">
                      {/* restaurant name */}
                      <div className="text-xl font-light">
                        {" "}
                        {restaurant.name}
                      </div>
                      {/* image */}
                      <div className="">
                        <div className="w-[52px] bg-dish h-[49px] bg-cover bg-no-repeat bg-transparent shadow-2xl float-right mr-2"></div>
                      </div>

                      {/* restaurant card info */}
                      <div className="space-y-1 font-medium">
                        {/* location */}
                        <div className="text-[12px] md:text-[13.5px] lg:text-[14.5px]">
                          <div className="">
                            <span className="font-semibold">
                              {" "}
                              {restaurant.location}{" "}
                            </span>
                          </div>
                        </div>

                        <div className="flex space-x-5">
                          {/* cuisine */}
                          <div>
                            {" "}
                            <div className="text-[12px] md:text-[13px] lg:text-[14.5px] font-semibold">
                              {restaurant.cuisine}
                            </div>{" "}
                          </div>

                          <div className="text-[12px] md:text-[13px] lg:text-[14.5px] text-green-500">
                            {restaurant.price_range}
                          </div>
                        </div>
                        {/* price range */}
                      </div>

                      {/* add review */}

                      <div className="text-[11.5px] md:text-[12.5px] hover:text-[12.5px] md:hover:text-[13.5px] lg:text-[14.5px] lg:hover:text-[15.5px] mt-2 lg:mt-4">
                        <button
                          onClick={(e) =>
                            handleRestaurantSelect(e, restaurant.uuid)
                          }
                          className="underline "
                        >
                          Add Review
                        </button>
                      </div>
                    </div>

                    {/* button div */}
                    <div>
                      {/* update button */}
                      <div className="absolute right-[-9.0px] bottom-5 bg-black w-[40px] hover:text-lg">
                        <div>
                          <button
                            onClick={(e) => handleUpdate(e, restaurant.uuid)}
                            className="bg-[#FFD700] absolute p-2 rounded-br-full hover:bg-yellow-300 shadow-2xl "
                          >
                            <GrUpdate className="text-white" />
                          </button>
                        </div>
                      </div>

                      {/* delete button */}
                      <div className="absolute top-[-9px] right-[-10px] hover:animate-bounce">
                        <button
                          className=""
                          onClick={(e) => handleDelete(e, restaurant.uuid)}
                        >
                          <div className="">
                            <div className="text-white bg-remove bg-contain bg-transparent bg-no-repeat w-[30px] h-[25px]"></div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default RestaurantList;
