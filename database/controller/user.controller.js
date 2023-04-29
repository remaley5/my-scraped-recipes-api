const userService = require('../service/user.service');
const logger = require('../logger/api.logger');

class userController {

    async createUser(res, user) {
        console.log('USER CONTROLLER: ', user);
        logger.info('Controller: saveUser');
        return await userService.createUser(res, user);
    }

    async getUsers() {
        logger.info('Controller: getUsers')
        return await userService.getUsers();
    }

    async loginUser(res, user) {
        logger.info('Controller: loginUsers');
        return await userService.loginUser(res, user);
    }
}

module.exports = new userController();