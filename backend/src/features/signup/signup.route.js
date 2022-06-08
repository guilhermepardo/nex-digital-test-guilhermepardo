const express = require('express');
const router = express.Router();
const signupController = require('./signup.controller')

router.post('/', signupController.post);

module.exports = router;