const { Sequelize, Model, DataTypes } = require("sequelize");
//const logger = require('../logger/api.logger');

const connect = () => {
    const hostName = process.env.HOST;
    const userName = process.env.USER;
    const password = process.env.PASSWORD;
    const database = process.env.DB;
    const dialect = process.env.DIALECT;
    console.log(dialect);

    const sequelize = new Sequelize(database, userName, password, {
        host: hostName,
        dialect: dialect,
        operatorsAliases: false,
        pool: {
            max: 10,
            min: 0,
            acquire: 20000,
            idle: 5000,
        },
    });

    const db = {};
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    // Edit
    db.recipes = require("../model/recipe.model.js")(
        sequelize,
        DataTypes,
        Model
    );
    db.users = require("../model/user.model.js")(sequelize, DataTypes, Model);

    return db;
};

module.exports = {
    connect,
};
