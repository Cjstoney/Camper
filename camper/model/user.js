const Sequelize = require("sequelize");

const sequelize = require('../config/connection');


const User = sequelize.define('resource', {
    user_id: Sequelize.INTEGER, 
    name: Sequelize.STRING, 
    email: Sequelize.STRING, 
    password: Sequelize.STRING
})

User.sync()

module.exports = User;