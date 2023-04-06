const { Model } = require('sequelize');
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Availability extends Model {
        static associate(models) {
            Availability.belongsTo(models.Property, {
                foreignKey: 'propertyId',
            });
        }
    }
    Availability.init(
        {
            startDate: Sequelize.DATE,
            endDate: Sequelize.DATE,
            minStay: Sequelize.INTEGER,
            maxStay: Sequelize.INTEGER,
            propertyId: Sequelize.INTEGER,
        },
        {
            sequelize,
            modelName: 'Availability',
        }
    );
    return Availability;
};
