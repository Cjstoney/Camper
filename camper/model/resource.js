const Sequelize = require('sequelize')

const Resource = sequelize.define('resource', {
    resource_id: Sequelize.INTEGER,
    technology: Sequelize.STRING,
    tag: Sequelize.STRING,
    description: Sequelize.STRING,
    url:Sequelize.STRING
})

Resource.sync()

module.exports = Resource