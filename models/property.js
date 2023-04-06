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
                foreignKey: 'housingStatusId',
            });
            Property.hasOne(models.Address);
            Property.belongsToMany(models.Amenity, { through: 'PropertyAmenity' });
            Property.belongsToMany(models.HouseRule, { through: 'PropertyHouseRule' });
            Property.hasOne(models.Availability);
            Property.hasOne(models.Price);
            Property.hasOne(models.Service);
            Property.hasOne(models.PropertyDetail);
            Property.hasOne(models.Preference);
            Property.hasOne(models.PhoneVerification);
        }
    }
    Property.init(
        {
            propertyType: Sequelize.STRING,
            housingStatusId: Sequelize.INTEGER,
        },
        {
            sequelize,
            modelName: 'Property',
        }
    );
    return Property;
};
