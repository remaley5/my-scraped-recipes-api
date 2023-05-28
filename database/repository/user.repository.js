//importing modules
const { connect } = require('../config/db.config');

// Added
//------------------------------------------------------------------
const logger = require('../logger/api.logger');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//------------------------------------------------------------------


// Edit
class UserRepository {

    db = {};

    constructor() {
        this.db = connect();
        //     //For Developement: This clears the database on restart
        // //     this.db.sequelize.sync({ force: true }).then(() => {
        // //         console.log("Drop and re-sync db.");
        // //    });
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

    async createUser(res, user) {
        console.log('CREATEUSER REPOSITORY: ', user);
        try {
            const data = {
                username: user.username,
                email: user.email,
                password: await bcrypt.hash(user.password, 10),
            };
            //saving the user
            const newUser = await this.db.users.create(data);

            //if user details is captured
            //generate token with the user's id and the secretKey in the env file
            // set cookie with the token generated
            if (newUser) {
                let token = jwt.sign({ id: newUser.id }, process.env.SECRETKEY, {
                    expiresIn: 1 * 24 * 60 * 60 * 1000,
                });

                res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
                //console.log("user", JSON.stringify(newUser, null, 2));
                //console.log(token);
                //send users details
                //console.log("SENDING 201");
                return res.status(201).send(newUser);
            } else {
                console.log("SENDING 409 2");
                return res.status(409).send("Details are not correct");
            }
        } catch (error) {

            console.log("ERROR", error);
        }
    };


    async loginUser(res, user) {
        try {

            //find a user by their email
            const foundUser = await this.db.users.findOne({
                where: {
                    email: user.email
                }
            });

            //if user email is found, compare password with bcrypt
            if (foundUser) {
                const isSame = await bcrypt.compare(user.password, foundUser.password);

                //if password is the same
                //generate token with the user's id and the secretKey in the env file

                if (isSame) {
                    let token = jwt.sign({ id: user.id }, process.env.SECRETKEY, {
                        expiresIn: 1 * 24 * 60 * 60 * 1000,
                    });

                    //if password matches wit the one in the database
                    //go ahead and generate a cookie for the user
                    res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
                    console.log("user", JSON.stringify(foundUser, null, 2));
                    console.log(token);
                    console.log("SENDING 201");
                    //send user data
                    return res.status(201).send(foundUser);
                } else {
                    console.log("SENDING 401");
                    return res.status(401).send("Authentication failed");
                }
            } else {
                console.log("SENDING 401 2");
                return res.status(401).send("Authentication failed");
            }
        } catch (error) {
            console.log(error);
        }
    };


}

module.exports = new UserRepository();