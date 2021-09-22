const express = require('express');
const rescue = require('express-rescue');

const recipesController = require('../controllers/recipesController');

const recipesRouter = express.Router();

recipesRouter.get('/', rescue(recipesController.getAllRecipes));
recipesRouter.get('/:id', rescue(recipesController.getRecipeById));
recipesRouter.put('/:id', rescue(recipesController.updateRecipe));
recipesRouter.delete('/:id', rescue(recipesController.deleteRecipe));
recipesRouter.post('/', rescue(recipesController.createRecipe));

module.exports = recipesRouter;