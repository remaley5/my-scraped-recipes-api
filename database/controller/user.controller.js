const UserService = require('../service/user.service');
const logger = require('../logger/api.logger');

class userController {

    async saveUser(user) {
        logger.info('Controller: saveUser');
        return await UserService.saveUser(user);
    }

    async getUsers() {
        logger.info('Controller: getUsers')
        return await UserService.getUsers();
    }
}

module.exports = new userController();