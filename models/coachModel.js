import mongoose, { mongo } from "mongoose";

const coachSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  DOJ: {
    type: Number,
    required: true,
  },
  epereience: {
    type: String,
    required: true,
  },
});

const Coaches = mongoose.model("coaches", coachSchema);

export default Coaches;
