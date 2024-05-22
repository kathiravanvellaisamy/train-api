const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const Train = require("./models/trainModel");
const trainRoute = require("./routes/trainRoute");

const app = express();

// middle ware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/trains", trainRoute);

const port = process.env.PORT;

// Mongo Db Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to the Database");
    app.listen(port, () => {
      console.log(`Server is Running on port: ${port}`);
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });
