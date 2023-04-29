const userRepository  = require('../repository/user.repository');
const logger = require('../logger/api.logger');

class UserService {

    constructor() {}

    async createUser(user) {
        return await userRepository.createUser(user);
    }

    async getUsers() {
        return await userRepository.getUsers();
    }
}

module.exports = new UserService();