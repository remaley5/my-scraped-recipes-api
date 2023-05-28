
module.exports = (sequelize, DataTypes, Model) => {

    class Ingredients extends Model {}

    Ingredients.init({
        // Model attributes are defined here
        quantity: {
          type: DataTypes.STRING,
        },
        name : {
          type: DataTypes.STRING 
          // allowNull defaults to true
        }, 
        unit: {
          type: DataTypes.STRING
        }, 
        recipe_id: {
          type: DataTypes.STRING
        }
      }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'ingredients' // We need to choose the model name
      });
      
      return Ingredients;
}