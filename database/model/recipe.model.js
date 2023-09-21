// edit

module.exports = (sequelize, DataTypes, Model) => {

    class Recipes extends Model {}

    Recipes.init({
        // Model attributes are defined here
        title: {
          type: DataTypes.STRING,
          allowNull: false
        },
        url: {
          type: DataTypes.STRING 
          // allowNull defaults to true
        }, 
        ingredients: {
          type: DataTypes.STRING
        }, 
        steps: {
          type: DataTypes.STRING
        }, 
        user_id: {
          type: DataTypes.INTEGER
        }
      }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'recipes' // We need to choose the model name
      });
      
      return Recipes;
}