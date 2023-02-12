'use strict';
const {
  Model
} = require('sequelize');
const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SmokingStatus extends Model {
    static associate(models) {
      models.User = require("./user")(sequelize, Sequelize.DataTypes);
      SmokingStatus.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user"
      });
    }
  }
  SmokingStatus.init({
    choice: {
      type: Sequelize.STRING,
      values: ['Never', 'Socially', 'Regularly', 'Very often']
    }
  }, {
    sequelize,
    modelName: 'SmokingStatus',
  });
  return SmokingStatus;
};