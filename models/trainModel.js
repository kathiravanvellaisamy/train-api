const mongoose = require("mongoose");

const trainSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a train name"],
    },
    tainNumber: {
      type: Number,
      required: [true, "Please enter a train number"],
    },
    trainType: {
      type: String,
      required: [true, "Please enter a train type"],
    },
    connection: {
      type: String,
      required: [true, "Please enter a Connection"],
    },
    speed: {
      type: Number,
      required: [true, "Please enter a Speed"],
    },
    halts: {
      type: Number,
      required: [true, "Please enter a halts"],
    },
    zone: {
      type: String,
      required: [true, "Please enter a zone"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Train", trainSchema);
