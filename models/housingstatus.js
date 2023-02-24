'use strict';
const { Model } = require('sequelize');
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class HousingStatus extends Model {
    static associate(models) {
      HousingStatus.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user"
      });
    }
  }
  HousingStatus.init({
    isOwner: Sequelize.BOOLEAN,
    userId: Sequelize.INTEGER
  }, {
    sequelize,
    modelName: 'HousingStatus',
  });

  return HousingStatus;
};
