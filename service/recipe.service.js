const recipeRepository  = require('../repository/recipe.repository');
const logger = require('../logger/api.logger');

class RecipeService {

    constructor() {}

    async getRecipes() {
        return await recipeRepository.getRecipes();
    }

    async createRecipe(recipe) {
        return await recipeRepository.createRecipe(recipe);
    }

    async updateRecipe(recipe) {
        return await recipeRepository.updateRecipe(recipe);
    }

    async deleteRecipe(recipeId) {
        return await recipeRepository.deleteRecipe(recipeId);
    }

}

module.exports = new RecipeService();