const { Model } = require('sequelize');
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Address extends Model {
        static associate(models) {
            models.Property = require('./property')(sequelize, DataTypes);
            Address.belongsTo(models.Property, { foreignKey: 'propertyId' });
        }
        toJSON() {
            const values = Object.assign({}, this.get());
            delete values.PropertyId;
            return values;
        }
    }
    Address.init(
        {
            country: Sequelize.STRING,
            city: Sequelize.STRING,
            street: Sequelize.STRING,
            floor: Sequelize.INTEGER,
            apartmentNumber: Sequelize.INTEGER,
            propertyId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Properties',
                    key: 'id',
                },
            },
        },
        {
            sequelize,
            modelName: 'Address',
        }
    );
    return Address;
};
