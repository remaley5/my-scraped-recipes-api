//importing modules
const { connect } = require('../config/db.config');
const logger = require('../logger/api.logger');

// Edit
class UserRepository {

    db = {};

    constructor() {
        this.db = connect();
        //For Developement: This clears the database on restart
    //     this.db.sequelize.sync({ force: true }).then(() => {
    //         console.log("Drop and re-sync db.");
    //    });
    }

    async getUsers() {
        
        try {
            const users = await this.db.users.findAll();
            console.log('usrs:::', users);
            return users;
        } catch (err) {
            console.log(err);
            res.send("Could not get users");
        }
    }

    async createUser(user) {
        let data = {};
        console.log('Creating user.... db.users:', this.db.users);
        try {
            const userName = await this.db.users.findOne({
                where: {
                    userName: user.userName,
                },
            });
            //if username exist in the database respond with a status of 409
            if (userName) {
                return res.json(409).send("username already taken");
            }

            //checking if email already exist
            const emailcheck = await this.db.users.findOne({
                where: {
                    email: user.email,
                },
            });

            //if email exist in the database respond with a status of 409
            if (emailcheck) {
                return res.json(409).send("Authentication failed");
            }
            console.log('Creating user: ', user);
            data = await this.db.users.create(user);
        } catch (error) {
            console.log(error);
        }
        console.log('created user...', data);
        return data;
    }

}

module.exports = new UserRepository();