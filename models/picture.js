'use strict';

const {
  Model
} = require('sequelize');

const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Picture extends Model {
    static associate(models) {
      models.User = require('./user')(sequelize, DataTypes);
      Picture.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user"
      });
    }
  }
  Picture.init({
    pictureUrl: Sequelize.STRING,
  }, {
    sequelize,
    modelName: 'Picture',
  });
  return Picture;
};