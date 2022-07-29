import React from "react";
import { RestaurantList, AddRestaurant } from "../features/restaurants";
const Home = () => {
  return (
    <main>
      <div className="flex flex-col">
        <AddRestaurant />
        <RestaurantList />
      </div>
    </main>
  );
};

export default Home;
