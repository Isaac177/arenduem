'use strict';
const {
  Model
} = require('sequelize');
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Picture extends Model {
    static associate(models) {
      models.User = require("./user")(sequelize, Sequelize.DataTypes);
      Picture.belongsTo(models.User, {
        foreignKey: "userId",
        onDelete: "CASCADE"
      })
    }
  }
  Picture.init({
    userId: Sequelize.INTEGER,
    fileName: Sequelize.STRING,
    fileUrl: Sequelize.STRING,
    isMain: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    isCover: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
  }, {
    sequelize,
    modelName: 'Picture',
  });
  return Picture;
};
