const recipeService = require("../service/recipe.service");
const recipeRepository = require("../repository/recipe.repository.js");
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

    async scrapeRecipe(req, res, next) {
        logger.info("Controller: scrapeRecipe", req.body.url);
        return await recipeService.scrapeRecipe(req, res, next);
    }
}
module.exports = new RecipeController();
