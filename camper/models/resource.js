module.exports = function(sequelize, DataTypes) {
    const Resource = sequelize.define("Resource", {
      // resource_id: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      //   primaryKey: true
      // },
      technology: {
        type: DataTypes.STRING,
        allowNull: false
      },
      tag: {
        type: DataTypes.STRING,
        allowNull: true
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false
      },
      imgurl: {
        type: DataTypes.STRING,
        allowNull: true
      }
    });

   
    return Resource;
};