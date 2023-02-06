const Sequelize = require ("sequelize");
const connection = require ("../database/database");

const Admin = connection.define('admins', {
  cpf: {
    type: Sequelize.STRING,
    allowNull: false
  },
  nome: { 
    type:Sequelize.STRING,
    allowNull: false

  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Admin;