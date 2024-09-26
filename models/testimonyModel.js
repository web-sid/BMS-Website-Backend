import mongoose from "mongoose";

const testimonySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Customer must have a name"],
  },
  description: {
    type: String,
    required: [true, "A result description must be shared"],
  },
  age: {
    type: Number,
    required: [true, "Please provide age of the customer"],
  },
  location: {
    type: String,
    required: [true, "Please mention your current location"],
  },
});

const Testimony = mongoose.model("testimony", testimonySchema);

export default Testimony;
