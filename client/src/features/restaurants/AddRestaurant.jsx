import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postRestaurant, addRestaurants } from "./restaurantSlice";
import { CgAddR } from "react-icons/cg";

import NavbarPopUp from "../navBar/NavbarPopUp";

const AddRestaurant = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [cuisine, setCuisine] = useState("");
  const { isOpen } = useSelector((store) => store.navBar);
  const [isError, setError] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleTextInput = (e) => {
    const { value } = e.target;
    setName(value);
    value.length < 2 ? setError(true) : setError(false);
  };

  // handle submit
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      postRestaurant({ name, location, price_range: priceRange, cuisine })
    );
    dispatch(
      addRestaurants({ name, location, price_range: priceRange, cuisine })
    );
    setLocation("");
    setName("");
    setPriceRange("");
    setCuisine("");
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  // validate

  // validate text input

  // validate location input

  const handleLocationInput = (e) => {
    const { value } = e.target;
    setLocation(value);
    value.length < 2 ? setError(true) : setError(false);
  };

  // validate cuisine input

  const handleCuisineInput = (e) => {
    const { value } = e.target;
    setCuisine(value);
    value.length <= 5 ? setError(true) : setError(false);
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

  return (
    // creating a form to add a restaurant

    <section className="md:flex md:items-center md:justify-center">
      {isOpen && <NavbarPopUp />}
      <div className="flex items-center justify-center md:justify-evenly md:w-[950px]">
        <article className="max-w-[375px] h-[430px] md:shadow-2xl md:h-[540px] md:rounded-lg md:mt-2 md:max-w-[400px] lg:h-[500px] lg:max-w-[500px]">
          {/* form article */}
          <div className="">
            {/* form start */}
            <div className=" p-14">
              <form className="w-[280px] h-[200px] space-y-3 md:w-[250px] md:h-[150px] lg:w-[260px]">
                <div className="text-lg">
                  Recommend your
                  <span className="text-red-600 "> favorite </span> restaurant!
                </div>

                {/* add restaurant form begin  */}

                <div className="text-gray-500 ">
                  <p> Food brings people together! </p>
                </div>

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
                          className="outline-none border-none w-[125px] h-[20px] mb-2 bg-transparent  placeholder-gray-300 "
                          placeholder="Water Grill, Perch"
                          onChange={(e) => handleTextInput(e)}
                        />
                        {isError ? (
                          <div>
                            <p className="text-red-600 text-[12.0px]">
                              Name must be at least 3 characters <br />
                              No special characters/numbers
                            </p>
                          </div>
                        ) : null}
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
                          className="outline-none border-none w-[125px] h-[20px] bg-transparent  placeholder-gray-300 "
                          placeholder="Los Angeles"
                          onChange={(e) => handleLocationInput(e)}
                        />
                        {isError ? (
                          <div>
                            <p className="text-red-600 text-[12.0px]">
                              City must be at least 3 characters
                            </p>
                          </div>
                        ) : null}
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
                          className="outline-none border-none w-[125px] h-[20px] bg-transparent mt-1   placeholder-gray-300 "
                          placeholder="American, Italian"
                          onChange={(e) => handleCuisineInput(e)}
                        />
                        {isError ? (
                          <div>
                            <p className="text-red-600 text-[12.0px]">
                              Cuisine must be at least 5 characters
                            </p>
                          </div>
                        ) : null}
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
                <div className="flex items-center justify-center relative text-black">
                  <button
                    onClick={onSubmit}
                    type="button"
                    disabled={canSave}
                    className="text-white transition  duration-150 ease-in-out cursor-pointer bg-red-600 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-[#8b0000]/50 font-medium rounded-lg text-sm px-5 py-2.5  dark:focus:ring-[#8b0000]/55 mr-2  disabled:opacity-50 disabled:cursor-not-allowed flex justify-center w-full"
                  >
                    <div className="flex items-center text-[17px] font-light">
                      <div className="w-[20px] text-[22.5px]  mr-3">
                        <CgAddR />
                      </div>

                      <div>Add Restaurant</div>
                    </div>
                  </button>
                </div>
              </form>
            </div>
            {/* add restaurant form end */}
          </div>
        </article>
        {/* picture article */}

        <article className="hidden md:flex">
          <div className="bg-mainBG bg-contain bg-no-repeat bg-transparent mt-14 md:h-[320px] md:w-[260px] lg:w-[350px] h-[350px]"></div>
        </article>

        {/* end of form article */}
      </div>
    </section>
  );
};

export default AddRestaurant;
