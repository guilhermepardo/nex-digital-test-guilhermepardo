const express = require('express');
require('dotenv').config();
const cors = require('cors');
const db = require("../sequelize/sequelize.config");
const signupRoutes = require('../../src/features/signup/signup.route');
const loginRoutes = require('../../src/features/login/login.route');
const productsRoutes = require('../../src/features/products/products.route');
class App {
    constructor() {
        this.app = express();
        this.port = 5000
        this.initialize();
        this.middlewares();
        this.routes();
    };

    async middlewares() {
        this.app.use(cors())
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
    };

    async routes() {
        this.app.use('/api/v1/signup', signupRoutes);
        this.app.use('/api/v1/login', loginRoutes);
        this.app.use('/api/v1/products', productsRoutes);
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

