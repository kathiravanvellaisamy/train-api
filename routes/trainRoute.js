const express = require("express");
const Train = require("../models/trainModel");
const {
  getTrains,
  getSingleTrain,
  postTrain,
  updateTrain,
  deleteTrain,
} = require("../controllers/trainController");

const router = express.Router();

router.get("/", getTrains);

router.get("/:id", getSingleTrain);

router.post("/", postTrain);

router.put("/:id", updateTrain);

router.delete("/:id", deleteTrain);

module.exports = router;
