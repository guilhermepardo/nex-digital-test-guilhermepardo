module.exports = async (req, res, next) => {
    try {
        if (!req.body.name) throw { statusCode: 400, message: 'Missing name attribute' }
        if (!req.body.email) throw { statusCode: 400, message: 'Missing email attribute' }
        if (!req.body.password) throw { statusCode: 400, message: 'Missing password attribute' }
        return next();
    } catch (error) {
        res.status(error.statusCode).json(error);
    };
};