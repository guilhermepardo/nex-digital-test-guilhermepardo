const Service = require('./products.service');
const productsService = new Service()

class Controller {

    async get(req, res) {
        try {
            const response = await productsService.get();
            res.status(200).json(response);
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