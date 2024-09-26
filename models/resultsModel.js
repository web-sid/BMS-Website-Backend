import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name must be provided"],
  },
  age: {
    type: Number,
    requried: [true, "Age must be provided"],
  },
  location: {
    type: String,
  },
  result: {
    type: String,
    required: [true, "You have to share your result"],
  },
});

const Result = mongoose.model("results", resultSchema);

export default Result;
