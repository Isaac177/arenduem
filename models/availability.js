const { Model } = require('sequelize');
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Availability extends Model {
        static associate(models) {
            Availability.belongsTo(models.Property, { foreignKey: 'propertyId' });
        }
    }
    Availability.init(
        {
            propertyId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Properties',
                    key: 'id',
                },
            },
            startDate: Sequelize.DATE,
            endDate: Sequelize.DATE,
            minStay: Sequelize.INTEGER,
            maxStay: Sequelize.INTEGER,
        },
        {
            sequelize,
            modelName: 'Availability',
        }
    );
    return Availability;
};
