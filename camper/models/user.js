module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define("User", {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
    return User;

    User.belongsToMany(Resource, { through: 'UserResource' })

    // user belongss to many resources
};