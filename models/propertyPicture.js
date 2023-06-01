'use strict';
const {
  Model
} = require('sequelize');
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PropertyPicture extends Model {
    static associate(models) {
      PropertyPicture.belongsTo(models.Property, {
        foreignKey: 'propertyId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  PropertyPicture.init({
    fileUrl: Sequelize.STRING
  }, {
    sequelize,
    modelName: 'PropertyPicture',
  });
  return PropertyPicture;
};
