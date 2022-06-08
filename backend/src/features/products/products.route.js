const express = require('express');
const router = express.Router();
const productsController = require('./products.controller')
const validationMiddleware= require('../../middlewares/tokenValidation.middleware')

router.get('/', validationMiddleware, productsController.get);

module.exports = router;