const recipeRepository = require("../repository/recipe.repository");
const logger = require("../logger/api.logger");

class RecipeController {
    async getRecipes() {
        logger.info("Controller: getRecipes");
        return await recipeRepository.getRecipes();
    }

    async createRecipe(recipe) {
        logger.info("Controller: createRecipe", recipe);
        return await recipeRepository.createRecipe(recipe);
    }

    async updateRecipe(recipe) {
        logger.info("Controller: updateRecipe", recipe);
        return await recipeRepository.updateRecipe(recipe);
    }

    async deleteRecipe(recipeId) {
        logger.info("Controller: deleteRecipe", recipeId);
        return await recipeRepository.deleteRecipe(recipeId);
    }
}
module.exports = new RecipeController();
