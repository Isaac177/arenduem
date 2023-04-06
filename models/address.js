const { Model } = require('sequelize');
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Address extends Model {
        static associate(models) {
            models.Property = require('./property')(sequelize, DataTypes);
            Address.belongsTo(models.Property, {
                foreignKey: 'propertyId',
            });
        }
    }
    Address.init(
        {
            country: Sequelize.STRING,
            city: Sequelize.STRING,
            street: Sequelize.STRING,
            floor: Sequelize.INTEGER,
            apartmentNumber: Sequelize.INTEGER,
            propertyId: Sequelize.INTEGER,
        },
        {
            sequelize,
            modelName: 'Address',
        }
    );
    return Address;
};
