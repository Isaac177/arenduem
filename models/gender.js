'use strict';
const {
  Model
} = require('sequelize');
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Gender extends Model {
    static associate(models) {
      models.User = require("./user")(sequelize, Sequelize.DataTypes);
      Gender.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user"
      })
    }
  }
  Gender.init({
    name: {
      type: Sequelize.ENUM,
      values: ['Male', 'Female', 'Other'],
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Gender',
  });
  return Gender;
};