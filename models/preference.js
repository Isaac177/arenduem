const { Model } = require('sequelize');
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Preference extends Model {
        static associate(models) {
            Preference.belongsTo(models.Property, {
                foreignKey: 'propertyId',
            });
        }
    }
    Preference.init(
        {
            tenantGender: Sequelize.STRING,
            tenantMinimumAge: Sequelize.INTEGER,
            tenantMaximumAge: Sequelize.INTEGER,
            tenantOccupation: Sequelize.STRING,
            tenantDrinkingStatus: Sequelize.STRING,
            tenantSmokingStatus: Sequelize.STRING,
            propertyId: Sequelize.INTEGER,
        },
        {
            sequelize,
            modelName: 'Preference',
        }
    );
    return Preference;
};
