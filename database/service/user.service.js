const userRepository  = require('../repository/user.repository');
const logger = require('../logger/api.logger');

class UserService {

    constructor() {}

    async createUser(res, user) {
        console.log('CREATE USER: ', user);
        return await userRepository.createUser(res, user);
    }

    async getUsers() {
        return await userRepository.getUsers();
    }

    async loginUser(res, user) {
        return await userRepository.loginUser(res, user)
    }
}

module.exports = new UserService();