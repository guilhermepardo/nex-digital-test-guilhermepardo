const dbConfig = require("../postgres/db.config.js");
const Sequelize = require("sequelize");
const sequelizeConfig = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelizeConfig = sequelizeConfig;
db.users = require("../../src/features/signup/signup.model")(sequelizeConfig, Sequelize);
module.exports = db;