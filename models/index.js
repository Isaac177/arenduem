'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'production';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  //console.log(`Model: ${modelName}`);
  if (db[modelName].associate) {
    //console.log(`Associating model: ${modelName}`);
    //db[modelName].associate(db);

    if (modelName === 'Property') {
      db.Property.hasOne(db.Address, { foreignKey: 'propertyId' });
        db.Property.hasMany(db.Amenity, { foreignKey: 'propertyId' });
        db.Property.hasMany(db.HouseRule, { foreignKey: 'propertyId' });
        db.Property.hasOne(db.Availability, { foreignKey: 'propertyId' });
        db.Property.hasOne(db.Price, { foreignKey: 'propertyId' });
        db.Property.hasOne(db.Service, { foreignKey: 'propertyId' });
        db.Property.hasOne(db.PropertyDetail, { foreignKey: 'propertyId' });
        db.Property.hasOne(db.Preference, { foreignKey: 'propertyId' });
        db.Property.hasOne(db.PhoneVerification, { foreignKey: 'propertyId' });
        db.Property.belongsTo(db.User, { foreignKey: 'userId' });
        db.Property.hasMany(db.PropertyPicture, { foreignKey: 'propertyId'});
    }

    if (modelName === 'Address') {
      db.Address.belongsTo(db.Property, { foreignKey: 'propertyId' });
    }

    if (modelName === 'Amenity') {
        db.Amenity.belongsTo(db.Property, { foreignKey: 'propertyId' });
    }

    if (modelName === 'HouseRule') {
        db.HouseRule.belongsTo(db.Property, { foreignKey: 'propertyId' });
    }

    if (modelName === 'Availability') {
        db.Availability.belongsTo(db.Property, { foreignKey: 'propertyId' });
    }

    if (modelName === 'Price') {
        db.Price.belongsTo(db.Property, { foreignKey: 'propertyId' });
    }

    if (modelName === 'Service') {
        db.Service.belongsTo(db.Property, { foreignKey: 'propertyId' });
    }

    if (modelName === 'PropertyDetail') {
        db.PropertyDetail.belongsTo(db.Property, { foreignKey: 'propertyId' });
    }

    if (modelName === 'Preference') {
        db.Preference.belongsTo(db.Property, { foreignKey: 'propertyId' });
    }

    if (modelName === 'PhoneVerification') {
        db.PhoneVerification.belongsTo(db.Property, { foreignKey: 'propertyId' });
    }

    if (modelName === 'PropertyPicture') {
        db.PropertyPicture.belongsTo(db.Property, { foreignKey: 'propertyId' });
    }

      if (modelName === 'User') {
          db.User.hasOne(db.Gender, { foreignKey: 'userId', as: 'gender' });
          db.User.hasMany(db.Picture, { foreignKey: 'userId', as: 'pictures' });
          db.User.hasMany(db.HousingStatus, { foreignKey: 'userId', as: 'housingStatuses' });
          db.User.hasMany(db.Interest, { foreignKey: 'userId', as: 'interests' });
          db.User.hasMany(db.Property, { foreignKey: 'userId', as: 'properties' });
      }

      if (modelName === 'Picture') {
        db.Picture.belongsTo(db.User, { foreignKey: 'userId' });
    }

    if (modelName === 'HousingStatus') {
        db.HousingStatus.belongsTo(db.User, { foreignKey: 'userId' });
    }

    if (modelName === 'Interest') {
        db.Interest.belongsTo(db.User, { foreignKey: 'userId' });
    }

    if (modelName === 'Property') {
        db.Property.belongsTo(db.User, { foreignKey: 'userId' });
    }

    if (modelName === 'Gender') {
        db.Gender.belongsTo(db.User, { foreignKey: 'userId' });
    }

  }
  //console.log(`Associations for ${modelName}:`, db[modelName].associations);
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
