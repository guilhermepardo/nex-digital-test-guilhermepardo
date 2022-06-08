const database = require('../../../config/sequelize/sequelize.config')
const User = database.users

class Service {

    async login(body) {
        try {
            const response = await User.findOne({
                where: {
                    email: body.email,
                    password: body.password
                }
            })
            console.log('response :>>', response)
            return response;
        } catch (error) {
            throw error;
        };
    };

};

module.exports = Service;