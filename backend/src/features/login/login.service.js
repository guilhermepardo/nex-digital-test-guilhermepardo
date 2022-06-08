const database = require('../../../config/sequelize/sequelize.config')
const User = database.users
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class Service {

    async login(body) {
        try {
            const user = await User.findOne({
                where: {
                    email: body.email
                }
            })
            if (!user) throw { statusCode: 400, message: "User doesn't exist" }
            const validLogin = await bcrypt.compare(body.password, user.password)
            if (!validLogin) throw { statusCode: 401, message: "Invalid credentials" }
            const token = jwt.sign(
                { id: user.id, email: user.email },
                 process.env.TOKEN_SECRET,
                { expiresIn: process.env.TOKEN_EXPIRATION  })
            return { token };
        } catch (error) {
            throw error;
        };
    };

};

module.exports = Service;