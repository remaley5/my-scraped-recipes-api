const userRepository = require("../repository/user.repository.js");
const logger = require("../logger/api.logger");

class userController {
    async createUser(res, user) {
        console.log("USER CONTROLLER: ", user);
        logger.info("Controller: saveUser");
        return await userRepository.createUser(res, user);
    }

    async getUsers() {
        logger.info("Controller: getUsers");
        return await userRepository.getUsers();
    }

    async loginUser(res, user) {
        logger.info("Controller: loginUsers");
        return await userRepository.loginUser(res, user);
    }
}

module.exports = new userController();
