import Recipe from "../models/recipeModel.js";

const getAllRecipes = async (req, res) => {
  const recipes = await Recipe.find({});
  res.status(201).json({
    status: "success",
    total: recipes.length,
    data: recipes,
  });
};

const getOneRecipe = async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);

  res.status(201).json({
    status: "success",
    data: recipe,
  });
};

export { getAllRecipes, getOneRecipe };
