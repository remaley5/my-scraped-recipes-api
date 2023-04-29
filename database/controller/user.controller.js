const userService = require('../service/user.service');
const logger = require('../logger/api.logger');

class userController {

    async createUser(user) {
        logger.info('Controller: saveUser');
        return await userService.createUser(user);
    }

    async getUsers() {
        logger.info('Controller: getUsers')
        return await userService.getUsers();
    }
}

module.exports = new userController();