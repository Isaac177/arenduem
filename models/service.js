const { Model } = require('sequelize');
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Service extends Model {
        static associate(models) {
            Service.belongsTo(models.Property, {
                foreignKey: 'propertyId',
            });
        }
    }
    Service.init(
        {
            rentalContract: Sequelize.BOOLEAN,
            cleaningService: Sequelize.BOOLEAN,
            maintenance: Sequelize.BOOLEAN,
            propertyId: Sequelize.INTEGER,
        },
        {
            sequelize,
            modelName: 'Service',
        }
    );
    return Service;
};
