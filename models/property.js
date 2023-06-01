'use strict';

const { Model } = require('sequelize');
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Property extends Model {
        static associate(models) {
            Property.hasMany(models.PropertyPicture, { foreignKey: 'propertyId'});
                /*Property.belongsTo(models.HousingStatus, {
                foreignKey: 'userId',
                targetKey: 'userId',
                as: 'housingStatus'
            });
            Property.hasOne(models.Address, { foreignKey: 'propertyId' });
            Property.hasMany(models.Amenity, { foreignKey: 'propertyId' });
            Property.hasMany(models.HouseRule, { foreignKey: 'propertyId' });
            Property.hasOne(models.Availability, { foreignKey: 'propertyId' });
            Property.hasOne(models.Price, { foreignKey: 'propertyId' });
            Property.hasOne(models.Service, { foreignKey: 'propertyId' });
            Property.hasOne(models.PropertyDetail, { foreignKey: 'propertyId' });
            Property.hasOne(models.Preference, { foreignKey: 'propertyId' });
            Property.hasOne(models.PhoneVerification, { foreignKey: 'propertyId' });*/
        }
    }

    Property.init(
        {
            propertyType: Sequelize.STRING,
            userId: Sequelize.INTEGER,
        },
        {
            sequelize,
            modelName: 'Property',
        }
    );
    return Property;

};