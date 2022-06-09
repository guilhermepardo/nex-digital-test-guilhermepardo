const express = require('express');
const router = express.Router();
const signupController = require('./signup.controller')
const validationMiddleware = require('../../middlewares/signupValidation.middleware')

router.post('/', validationMiddleware, signupController.post);

module.exports = router;