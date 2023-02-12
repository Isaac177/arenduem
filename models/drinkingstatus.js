'use strict';
const {
  Model
} = require('sequelize');
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class DrinkingStatus extends Model {
    static async associate(models) {
      models.User = require("./user")(sequelize, Sequelize.DataTypes);
      await models.User.sync();
      DrinkingStatus.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user"
      });
    }
  }
  DrinkingStatus.init({
    choice: {
      type: Sequelize.ENUM('Never', 'Socially', 'Regularly', 'Very often'),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'DrinkingStatus',
  });
  return DrinkingStatus;
};
