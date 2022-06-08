const database = require('../../../config/sequelize/sequelize.config')
const User = database.users

class Service {

    async post(body) {
        try {
            const response = await User.create(body)
            console.log('response :>>', response)
            return response;
        } catch (error) {
            throw error;
        };
    };

};

module.exports = Service;