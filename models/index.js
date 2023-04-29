'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
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
    // db[modelName].associate(db);

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
        db.PropertyDetail.hasMany(db.PropertyPicture, { foreignKey: 'propertyDetailId' });
    }

    if (modelName === 'Preference') {
        db.Preference.belongsTo(db.Property, { foreignKey: 'propertyId' });
    }

    if (modelName === 'PhoneVerification') {
        db.PhoneVerification.belongsTo(db.Property, { foreignKey: 'propertyId' });
    }

    if (modelName === 'PropertyPicture') {
        db.PropertyPicture.belongsTo(db.PropertyDetail, { foreignKey: 'propertyDetailId' });
    }
    // Add other associations for other models

  }
  //console.log(`Associations for ${modelName}:`, db[modelName].associations);
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
