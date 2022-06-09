const express = require('express');
const router = express.Router();
const loginController = require('./login.controller')
const validationMiddleware = require('../../middlewares/loginValidation.middleware')

router.post('/', validationMiddleware, loginController.login);

module.exports = router;