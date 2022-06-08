const database = require('../../../config/sequelize/sequelize.config')
const User = database.users
const bcrypt = require('bcrypt')

class Service {

    async login(body) {
        try {
            const exists = await User.findOne({
                where: {
                    email: body.email
                }
            })
            if (!exists) throw { statusCode: 400, message: "User doesn't exist" }
            const validLogin = await bcrypt.compare(body.password, exists.password)
            if (!validLogin) throw { statusCode: 401, message: "Invalid credentials" }
            return exists;
        } catch (error) {
            throw error;
        };
    };

};

module.exports = Service;