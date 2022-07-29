import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getOneRestaurant,
  getOneRestaurants,
  updateRestaurant,
} from "./restaurantSlice";
import NavbarPopUp from "../navBar/NavbarPopUp";
import Spinner from "../../components/Spinner";
import { MdOutlineUpdate } from "react-icons/md";

const UpdateRestaurant = () => {
  const { uuid } = useParams();
  const { isOpen } = useSelector((store) => store.navBar);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const restaurant = useSelector(getOneRestaurants);
  const { isLoading } = useSelector((state) => state.restaurants);

  useEffect(() => {
    dispatch(getOneRestaurant(uuid));
  }, [dispatch, uuid, navigate]);

  const [name, setName] = useState(restaurant.name);
  const [location, setLocation] = useState(restaurant.location);
  const [priceRange, setPriceRange] = useState(restaurant.price_range);
  const [cuisine, setCuisine] = useState(restaurant.cuisine);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateRestaurant({
        uuid,
        name,
        location,
        price_range: priceRange,
        cuisine,
      })
    );
    navigate("/");
  };
  // function to enable/disable submit button
  const canSave =
    !name ||
    !location ||
    !priceRange ||
    !cuisine ||
    name.length < 2 ||
    location.length < 2 ||
    cuisine.length <= 5;

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section>
      <article className="md:flex md:items-center md:justify-center md:mb-20">
        {isOpen && <NavbarPopUp />}
        <div className="flex items-center justify-center md:justify-evenly md:w-[950px]">
          <article className="max-w-[375px]  h-[430px] md:shadow-2xl md:h-[400px] md:mt-3 md:rounded">
            {/* form article */}
            <div className="">
              {/* form start */}
              <div className=" p-14">
                <form className="w-[280px] h-[200px] space-y-3 md:w-[250px] md:h-[150px] lg:w-[260px] ">
                  <div className="text-[19px]  mb-4 ">
                    Update
                    <span className="text-red-600"> {restaurant.name} </span>
                  </div>

                  {/* add restaurant form begin  */}

                  {/* restaurant name input field */}
                  <div className="space-y-2">
                    <div className="">
                      <div className="flex items-center space-x-7">
                        {/* display label next to input */}

                        <div className="mt-1 mb-2">
                          <label className="" htmlFor="name">
                            Name
                          </label>
                        </div>

                        <div className="">
                          <input
                            value={name}
                            type="text"
                            name="name"
                            id="name"
                            className="outline-none border-none w-[125px] h-[20px] bg-transparent  placeholder-gray-200 "
                            placeholder="IHOP, Catch LA"
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </div>
                      <hr />
                    </div>

                    {/* restaurant location input field */}
                    <div className=" w-[220px]">
                      <div className="flex items-center space-x-4">
                        <div className="">
                          <label className="" htmlFor="location">
                            City
                          </label>
                        </div>

                        <div className="">
                          <input
                            type="text"
                            name="location"
                            value={location}
                            id="location"
                            className="outline-none border-none w-[125px] h-[20px] bg-transparent   placeholder-gray-200 "
                            placeholder="Los Angeles, New York"
                            onChange={(e) => setLocation(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <hr />
                    {/* restaurant cuisine input field */}
                    <div className="">
                      <div className="flex items-center space-x-5">
                        <div className="mt-1">
                          <label className=" " htmlFor="cuisine">
                            Cuisine
                          </label>
                        </div>

                        <div className="">
                          <input
                            type="text"
                            name="location"
                            value={cuisine}
                            id="cuisine"
                            className="outline-none border-none w-[125px] h-[20px] bg-transparent  placeholder-gray-200 "
                            placeholder="American, Italian, etc."
                            onChange={(e) => setCuisine(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <hr />
                    {/* restaurant price range input field */}
                    <div>
                      <div className="">
                        <div className="">
                          <div className="mt-1">
                            <label className="" htmlFor="price_range">
                              Price Range
                            </label>
                          </div>

                          <div>
                            <select
                              className="w-[150px] bg-transparent"
                              id="price_range"
                              name="price_range"
                              value={priceRange}
                              onChange={(e) => setPriceRange(e.target.value)}
                            >
                              <option value=""></option>
                              <option value="$">$</option>
                              <option value="$$">$$</option>
                              <option value="$$$">$$$</option>
                              <option value="$$$$">$$$$</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                  </div>
                  {/* end of labels and form inputs */}

                  {/* update button */}
                  <div className="flex items-center justify-center">
                    <button
                      onClick={onSubmit}
                      type="button"
                      disabled={canSave}
                      className="text-white transition duration-150 ease-in-out bg-red-600 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-[#8b0000]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center
                      items-center mr-2 mb-2 disabled:opacity-50 disabled:cursor-not-allowed mt-3 w-full flex justify-center"
                    >
                      <div className="flex items-center text-[17px] font-light">
                        <div className="w-[20px] text-[22.5px] mr-3">
                          <MdOutlineUpdate />
                        </div>

                        <div>Update Restaurant</div>
                      </div>
                    </button>
                  </div>
                </form>
              </div>
              {/* add restaurant form end */}
            </div>
          </article>

          <article className="hidden md:flex md:rotate-[45deg] ">
            <div className="bg-updatedBG bg-contain bg-no-repeat bg-transparent mt-14 md:h-[320px] md:w-[260px] lg:w-[300px] h-[320px] "></div>
          </article>

          {/* end of form article */}
        </div>
      </article>
    </section>
  );
};

export default UpdateRestaurant;
