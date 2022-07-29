import React from "react";
import { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addReview, createReview } from "./reviewSlice";
import { CgAddR } from "react-icons/cg";

const AddReview = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { uuid } = useParams();
  const location = useLocation();
  const [isError, setError] = useState(false);

  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(1);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createReview({ uuid, name, review, rating }));
    dispatch(addReview({ uuid, name, review, rating }));
    setName("");
    setReview("");
    navigate(location.pathname);
  };

  //  VALIDATION

  // validation for name input

  const handleNameInput = (e) => {
    const { value } = e.target;
    setName(value);
    value.length < 3 ? setError(true) : setError(false);
  };

  // validation for review input

  const handleReviewInput = (e) => {
    const { value } = e.target;
    setReview(value);
    value.length > 50 ? setError(true) : setError(false);
  };

  // function to enable/disable submit button

  const canSave =
    !name || !review || !rating || name.length < 3 || review.length > 50;

  return (
    <div className="md:flex md:items-center md:justify-center">
      <section className="flex items-center justify-center md:justify-around md:w-[895px] ">
        <article className="flex items-center  md:h-[400px] md:w-[] md:mt-3 ">
          {/* form article */}
          <div className=" ">
            <div className=" md:top-0 md:left-0 md:bg-white p-14 md:shadow-2xl md:rounded-2xl">
              <form className="w-[280px] h-[250px] space-y-3 ">
                <div className="text-[20px]">
                  Leave a <span className="text-red-600"> review</span>
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
                          className="outline-none border-none w-[125px] h-[20px] bg-transparent  placeholder-gray-300 "
                          placeholder="First Name"
                          onChange={(e) => {
                            handleNameInput(e);
                          }}
                        />
                        {isError ? (
                          <div>
                            <p className="text-red-600 text-[12.0px]">
                              Name must be at least 3 characters
                            </p>
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <hr />
                  </div>

                  {/* restaurant location input field */}
                  <div className=" w-[220px] ">
                    <div className="flex items-center space-x-4">
                      <div className="">
                        <label className="" htmlFor="review">
                          Review
                        </label>
                      </div>

                      <div className="">
                        <div className="mt-2">
                          <textarea
                            type="text"
                            name="review"
                            value={review}
                            id="review"
                            className="outline-none border-none w-[200px] h-[22px] bg-transparent mb-1  placeholder-gray-300 resize-none"
                            placeholder="Review your experience"
                            onChange={(e) => {
                              handleReviewInput(e);
                            }}
                          />
                          {isError ? (
                            <div>
                              <p className="text-red-600 text-[12.0px]">
                                Review must be less than 50 characters
                              </p>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />

                  {/* restaurant price range input field */}
                  <div>
                    <div className="">
                      <div className="">
                        <div className="mt-1">
                          <label className="" htmlFor="rating">
                            Rating
                          </label>
                        </div>

                        <div>
                          <select
                            className="w-[150px] bg-transparent"
                            id="rating"
                            name="rating"
                            value={rating}
                            onChange={({ target }) => {
                              setRating(target.value);
                            }}
                          >
                            <option value=""></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
                {/* end of labels and form inputs */}
                <div className="flex items-center justify-center">
                  <button
                    onClick={onSubmit}
                    disabled={canSave}
                    type="button"
                    className="text-white w-full transition  duration-150 ease-in-out bg-red-600 focus:ring-4 focus:outline-none focus:ring-[#8b0000]/50 font-medium rounded-lg text-sm px-5 py-2.5  hover:bg-red-500
                    mr-2 mb-2 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center mt-2 "
                  >
                    <div className="flex items-center text-[17px] font-light">
                      <div className="w-[20px] text-[22.5px] mr-3 ">
                        <div>
                          <CgAddR />
                        </div>
                      </div>

                      <div>Add Review</div>
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </article>

        <article className="hidden md:flex">
          <div className="bg-reviewBG bg-contain bg-no-repeat bg-transparent mt-14 md:h-[320px] md:w-[260px] lg:w-[300px] h-[320px]"></div>
        </article>
      </section>
    </div>
  );
};

export default AddReview;
