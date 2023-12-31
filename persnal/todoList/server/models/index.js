const Sequelize = require('sequelize');
const env = process.env.DB_ENV || 'local';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Todo = require('./Todo')(sequelize, Sequelize);

module.exports = db;
