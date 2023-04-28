'use strict';
const {
  Model
} = require('sequelize');
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PropertyPicture extends Model {
    static associate(models) {
      PropertyPicture.belongsTo(models.PropertyDetail, {
        foreignKey: 'propertyDetailId',
        onDelete: 'CASCADE',
      });
    }
  }
  PropertyPicture.init({
    propertyDetailId: Sequelize.INTEGER,
    fileUrl: Sequelize.STRING
  }, {
    sequelize,
    modelName: 'PropertyPicture',
  });
  return PropertyPicture;
};
