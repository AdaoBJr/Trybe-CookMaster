const RecipesModel = require('../model/recipesModel');

const create = async (name, ingredients, preparation) => {
  const response = await RecipesModel.create(name, ingredients, preparation);
  return response;
};

const getAll = async () => {
  const response = await RecipesModel.getAll();
  return response;
};

module.exports = {
  create,
  getAll,
}; 