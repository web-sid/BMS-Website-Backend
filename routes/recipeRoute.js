import express from "express";
import {
  getAllRecipes,
  getOneRecipe,
} from "../controllers/recipeController.js";

const recipeRouter = express.Router();

recipeRouter.get("/", getAllRecipes);

recipeRouter.get("/:id", getOneRecipe);

export default recipeRouter;
