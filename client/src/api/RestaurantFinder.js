import axios from "axios";

export default axios.create({
  baseURL: "https://yelp-cloned.herokuapp.com/api/v1/restaurants",
});
