const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseRefSchema = new Schema({
  exercise: {
    type: Schema.Types.ObjectId,
    ref: "Exercise",
  },
  level: {
    type: Number,
    required: true,
  },
  reps: {
    type: Number,
  },
  duration: {
    type: Date,
  },
});

const sectionSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  set: exerciseRefSchema,
  prev: {
    type: String,
  },
  next: {
    type: String,
  },
});

const pageSchema = new Schema({
  header: {
    type: String,
    required: true,
  },
  day: {
    type: Number,
    required: true,
  },
  section: [sectionSchema],
});

const cycleSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  bpmLevel: {
    type: String,
    required: true,
  },
  intro: {
    type: String,
  },
  type: {
    type: String,
    required: true,
  },
  pages: [pageSchema],
});

const Cycle = mongoose.model("Cycle", cycleSchema);

module.exports = Cycle;
