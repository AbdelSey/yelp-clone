const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv").config();
const { sequelize } = require("./db/models");
const { enviroment } = require("./db/config/database");
const isProduction = enviroment === "production";

const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(express.static(path.resolve("../client/build")));

app.use("/api/v1/restaurants", require("./routes/restaurantRoutes"));
app.use("/api/v1/restaurants/", require("./routes/reviewRoutes"));

if (!isProduction) {
  app.use(cors()); // use cors in development
}

app.listen(port, async () => {
  console.log(`Server is listening on port ${port}`);
  await sequelize.authenticate();

  console.log("database connected");
});
