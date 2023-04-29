const recipeService  = require('../service/recipe.service');
const logger = require('../logger/api.logger');

class RecipeController {

    async getRecipes() {
        logger.info('Controller: getRecipes')
        return await recipeService.getRecipes();
    }

    async createRecipe(recipe) {
        logger.info('Controller: createRecipe', recipe);
        return await recipeService.createRecipe(recipe);
    }

    async updateRecipe(recipe) {
        logger.info('Controller: updateRecipe', recipe);
        return await recipeService.updateRecipe(recipe);
    }

    async deleteRecipe(recipeId) {
        logger.info('Controller: deleteRecipe', recipeId);
        return await recipeService.deleteRecipe(recipeId);
    }
}
module.exports = new RecipeController();