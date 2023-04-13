'use strict';

const { Model } = require('sequelize');
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Property extends Model {
        static associate(models) {
            models.HousingStatus = require('./housingStatus')(sequelize, DataTypes);
            models.Address = require('./address')(sequelize, DataTypes);
            models.Amenity = require('./amenity')(sequelize, DataTypes);
            models.HouseRule = require('./houseRule')(sequelize, DataTypes);
            models.Availability = require('./availability')(sequelize, DataTypes);
            models.Price = require('./price')(sequelize, DataTypes);
            models.Service = require('./service')(sequelize, DataTypes);
            models.PropertyDetail = require('./propertyDetail')(sequelize, DataTypes);
            models.Preference = require('./preference')(sequelize, DataTypes);
            models.PhoneVerification = require('./phoneVerification')(sequelize, DataTypes);

            Property.belongsTo(models.HousingStatus, {
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
            Property.hasOne(models.PhoneVerification, { foreignKey: 'propertyId' });
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
