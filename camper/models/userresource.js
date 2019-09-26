module.exports = function(sequelize, DataTypes) {
  const UserResource = sequelize.define("User_Resource", {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    resource_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return UserResource;
};