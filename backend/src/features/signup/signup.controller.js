const Service = require('./signup.service');
const signupService = new Service()

class Controller {

    async post(req, res) {
        try {
            const response = await signupService.post(req.body);
            res.status(201).json({
              statusCode: 201,
              body: response  
            });
        } catch (error) {
            console.log('error :>>', error)
            if (error.statusCode) {
                res.status(error.statusCode).json(error);
            } else {
                res.sendStatus(500);
            };
        };
    };

};

module.exports = new Controller;