const Sequelize = require("sequelize");

const connection = new Sequelize('prob_db', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = connection;
