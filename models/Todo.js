const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const Todo = sequelize.define('todo', {
  id : {
    type : Sequelize.INTEGER,
    allowNull : false,
    autoIncrement : true,
    primaryKey : true
  },
  expense : Sequelize.STRING,
  description : Sequelize.STRING,
  category : Sequelize.STRING

});

module.exports = Todo; 