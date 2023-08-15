const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const progressionSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});

const exerciseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  table: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  progressions: [progressionSchema],
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
