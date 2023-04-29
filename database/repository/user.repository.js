//importing modules
const { connect } = require('../config/db.config');
const logger = require('../logger/api.logger');

// Edit
class UserRepository {

    db = {};

    constructor() {
        this.db = connect();
        //For Developement: This clears the database on restart
        //this.db.sequelize.sync({ force: false }); //.then(() => {
        //     console.log("Drop and re-sync db.");
        // });
    }

    async getUsers() {
        
        try {
            const users = await this.db.users.findAll();
            console.log('usrs:::', users);
            return users;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async saveUser(user) {
        let data = {};
        try {
            const username = await this.db.users.findOne({
                where: {
                    userName: req.body.userName,
                },
            });
            //if username exist in the database respond with a status of 409
            if (username) {
                return res.json(409).send("username already taken");
            }

            //checking if email already exist
            const emailcheck = await this.users.findOne({
                where: {
                    email: req.body.email,
                },
            });

            //if email exist in the database respond with a status of 409
            if (emailcheck) {
                return res.json(409).send("Authentication failed");
            }
            console.log('User: ', user);
            data = await this.db.users.create(user);
        } catch (error) {
            console.log(error);
        }
        console.log('creating user...', data);
        return data;
    }

}

module.exports = new UserRepository();