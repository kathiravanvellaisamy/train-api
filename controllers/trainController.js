const Train = require("../models/trainModel");

const getTrains = async (req, res) => {
  try {
    const trains = await Train.find({});
    res.status(200).json(trains);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSingleTrain = async (req, res) => {
  try {
    const { id } = req.params;
    const train = await Train.findById(id);
    if (!train) {
      res.status(404).json({ message: "Train not found" });
    }
    res.status(200).json(train);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const postTrain = async (req, res) => {
  try {
    const train = await Train.create(req.body);
    res.status(201).json(train);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTrain = async (req, res) => {
  try {
    const { id } = req.params;
    const train = await Train.findByIdAndUpdate(id, req.body);
    if (!train) {
      res.status(404).json({ message: "Train not found" });
    }
    const updatedTrain = await Train.findById(id);
    res.status(200).json(updatedTrain);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTrain = async (req, res) => {
  try {
    const { id } = req.params;
    const train = await Train.findByIdAndDelete(id);
    if (!train) {
      res.status(404).json({ message: "Not found" });
    }
    res.status(200).json({ message: "Train has been deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getTrains,
  getSingleTrain,
  postTrain,
  updateTrain,
  deleteTrain,
};
