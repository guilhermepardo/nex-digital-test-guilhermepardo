const express = require('express');
require('dotenv').config();
const db = require("../sequelize/sequelize.config");
const signupRoutes = require('../../src/features/signup/signup.route');
const loginRoutes = require('../../src/features/login/login.route');
class App {
    constructor() {
        this.app = express();
        this.port = 3000
        this.initialize();
        this.middlewares();
        this.routes();
    };

    async middlewares() {
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
    };

    async routes() {
        this.app.use('/api/v1/signup', signupRoutes);
        this.app.use('/api/v1/login', loginRoutes);
    };

    async initialize() {
        try {
            db.sequelizeConfig.sync();
            this.app.listen(this.port, () => console.log(`Listening on port ${this.port}`));
        } catch (error) {
            console.log('error :>>', error);
            throw error;
        };
    };

};

module.exports = new App().app;

