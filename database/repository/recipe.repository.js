const { connect } = require('../config/db.config');
const logger = require('../logger/api.logger');

// Edit
class RecipeRepository {

    db = {};

    constructor() {
        this.db = connect();
        // For Developement: This clears the database on restart
        this.db.sequelize.sync({ force: true }).then(() => {
             console.log("Drop and re-sync db.");
        });
    }

    async getRecipes() {
        console.log('recipes db: ', this.db);
        try {
            const recipes = await this.db.recipes.findAll();
            console.log('recipes:::', recipes);
            return recipes;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async createRecipe(recipe) {
        let data = {};
        try {
            recipe.createdate = new Date().toISOString();
            data = await this.db.recipes.create(recipe);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async updateRecipe(recipe) {
        let data = {};
        try {
            recipe.updateddate = new Date().toISOString();
            data = await this.db.recipes.update({...recipes}, {
                where: {
                    id: recipe.id
                }
            });
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async deleteRecipe(recipeId) {
        let data = {};
        try {
            data = await this.db.recipes.destroy({
                where: {
                    id: recipeId
                }
            });
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

}

module.exports = new RecipeRepository();