const database = require('../../../config/sequelize/sequelize.config')
const User = database.users
const bcrypt = require('bcrypt')

class Service {

    async post(body) {
        try {
            const exists = await User.findOne({
                where: {
                    email: body.email
                }
            })
            if (exists) throw { statusCode: 400, message: 'Email already in use' }
            body.password = await bcrypt.hash(body.password, 8);
            const response = await User.create(body);
            return response;
        } catch (error) {
            throw error;
        };
    };

};

module.exports = Service;