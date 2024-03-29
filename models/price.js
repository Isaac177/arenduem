const { Model } = require('sequelize');
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Price extends Model {
        static associate(models) {
            Price.belongsTo(models.Property, {
                foreignKey: 'propertyId',
            });
        }
    }
    Price.init(
        {
            propertyId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Properties',
                    key: 'id',
                },
            },
            pricePerMonth: Sequelize.INTEGER,
            billsIncluded: Sequelize.BOOLEAN,
            deposit: Sequelize.INTEGER,
            propertyId: Sequelize.INTEGER,
        },
        {
            sequelize,
            modelName: 'Price',
        }
    );
    return Price;
};
