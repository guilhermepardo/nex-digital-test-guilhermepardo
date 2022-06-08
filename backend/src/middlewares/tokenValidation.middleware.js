const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {
    try {
        if (!req.headers.authorization) throw { statusCode: 400, message: 'Missing authorization token' }
        
        const [, token] = req.headers.authorization.split(' ')

        console.log('token :>>', token)

        const verifyToken = jwt.verify(token, process.env.TOKEN_SECRET)

        console.log('verifyToken :>>', verifyToken)

        return next();
    } catch (error) {
        console.log('error :>>', error)
        if (error.statusCode) {
            res.status(error.statusCode).json(error);
        } else {
            res.status(403).json({
                statusCode: 403,
                message: 'Invalid token'
            });
        }
    };
};