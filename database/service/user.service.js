const userRepository  = require('../repository/user.repository');
const logger = require('../logger/api.logger');

class UserService {

    constructor() {}

    async saveUser(user) {
        return await userRepository.saveUser(user);
    }

    async getUsers() {
        return await userRepository.getUsers();
    }
}

module.exports = new UserService();