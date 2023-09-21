
module.exports = (sequelize, DataTypes, Model) => {

    class Steps extends Model {}

    Steps.init({
        // Model attributes are defined here
        number: {
          type: DataTypes.STRING,
        }, 
        text: {
          type: DataTypes.STRING,
        },
        recipe_id: {
          type: DataTypes.STRING,
        }
      }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'steps' // We need to choose the model name
      });
      
      return Steps;
}