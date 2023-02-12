'use strict';
const {
  Model
} = require('sequelize');
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Media extends Model {
    static associate(models) {
      models.User = require("./user")(sequelize, Sequelize.DataTypes);
      Media.belongsTo(models.User, {
        foreignKey: "userId",
        onDelete: "CASCADE"
      })
    }
  }
  Media.init({
    fileName: Sequelize.STRING,
    fileUrl: Sequelize.STRING,
    fileType: Sequelize.STRING
  }, {
    sequelize,
    modelName: 'Media',
  });
  return Media;
};