import React from "react";
import { useSelector } from "react-redux";
import { Spinner } from "../../components";

const Reviews = ({ reviews }) => {
  const { isLoading } = useSelector((store) => store.reviews);

  // display a loading screen while the reviews are loading
  if (isLoading) {
    return <Spinner />;
  }
  // display if there are no reviews
  if (!reviews.length) {
    return (
      <div className="flex items-center justify-center">
        <div className="text-gray-500 text-lg">
          <p> No reviews available! </p>
        </div>
      </div>
    );
  }

  return (
    <article className="flex items-center justify-center ml-3 text-white">
      <div className="flex flex-col mt-4 items-center justify-center text-white w-[375px] md:w-[1000px]">
        <div className="rounded-2xl w-[280px] flex flex-col justify-center md:grid md:grid-cols-3 md:justify-items-center md:items-center md:w-[620px] lg:w-[900px] md:space-x-3">
          {reviews
            ? reviews.map((review) => {
                return (
                  <div
                    className="flex justify-center items-center ml-2"
                    key={review.uuid}
                  >
                    <div className="shadow-3xl mb-5 shadow-2xl  w-[200px] h-[160px] rounded-2xl bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-bl relative   md:w-[190.9px] md:h-[160px] lg:w-[220px]  lg:h-[160px]">
                      <div className=" flex flex-col ml-3 mt-2">
                        <div className="text-2xl font-light">
                          <h1>{review.name}'s review</h1>{" "}
                        </div>
                        <div className="">
                          <div className="w-[52px] bg-review h-[49px] bg-cover bg-no-repeat bg-transparent shadow-2xl float-right mr-2"></div>
                        </div>
                        <div className="space-y-1">
                          <div>
                            <p>
                              <span className="font-semibold mr-1">
                                Rating:{" "}
                              </span>{" "}
                              {review.rating}/5{" "}
                            </p>
                          </div>

                          <div className="text-[12px] w-[190px]">
                            <p>{review.review}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </article>
  );
};

export default Reviews;
