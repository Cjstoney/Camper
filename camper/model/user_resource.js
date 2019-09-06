const Sequelize = require('sequelize');

const sequelize = require('../config/connection');


const User_Resource = sequeize.define('user_resource',{
    user_id: Sequelize.INTEGER, 
    resource_id: Sequelize.INTEGER
})

User_Resource.sync()

module.exports = User_Resource;