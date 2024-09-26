import mongoose from "mongoose";

const ingredientSchema = new mongoose.Schema({
  quantity: { type: String, required: true },
  item: { type: String, required: true },
  optional: { type: Boolean, default: false },
});

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  ingredients: [ingredientSchema],
  instructions: [String],
});

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;
