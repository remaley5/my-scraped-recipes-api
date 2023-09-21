// const {sequelize, DataTypes, Model} = require('sequelize');
// //const sequelize = new Sequelize('sqlite::memory');

// class User extends Model {}

// User.init({
//   username: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   email: {
//       unique: true, 
//       isEmail: true,
//     type: DataTypes.STRING 
//     // allowNull defaults to true
//   }, 
//   password: {
//       type: DataTypes.STRING, 
//       allowNull: false
//   }
// }, {
//   sequelize, 
//   modelName: 'user'
// }
// );
module.exports = (sequelize, DataTypes, Model) => {

    class Users extends Model {}

    Users.init({
        // Model attributes are defined here
        username: {
          type: DataTypes.STRING,
          allowNull: false
        },
        email: {
            unique: true, 
            isEmail: true,
          type: DataTypes.STRING 
          // allowNull defaults to true
        }, 
        password: {
            type: DataTypes.STRING, 
            allowNull: false
        }
      }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'users' // We need to choose the model name
      });
      
      return Users;
}