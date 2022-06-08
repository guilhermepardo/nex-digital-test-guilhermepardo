const Service = require('./login.service');
const loginService = new Service()

class Controller {

    async login(req, res) {
        try {
            const response = await loginService.login(req.body);
            res.status(200).json(response);
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