const Service = require('./signup.service');
const signupService = new Service()

class Controller {

    async post(req, res) {
        try {
            const response = await signupService.post(req.body);
            res.status(201).json(response);
        } catch (error) {
            console.log('error :>>', error)
            if (error.status) {
                res.status(error.status).json(error);
            } else {
                res.sendStatus(500);
            };
        };
    };

};

module.exports = new Controller;