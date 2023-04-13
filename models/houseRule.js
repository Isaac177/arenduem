const { Model } = require('sequelize');
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class HouseRule extends Model {
        static associate(models) {
            HouseRule.belongsTo(models.Property, { foreignKey: 'propertyId' });
        }
    }
    HouseRule.init(
        {
            propertyId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Properties',
                    key: 'id',
                },
            },
            noSmoking: Sequelize.BOOLEAN,
            pets: Sequelize.BOOLEAN,
            children: Sequelize.BOOLEAN,
            smoking: Sequelize.BOOLEAN,
            events: Sequelize.BOOLEAN,
            noDrinking: Sequelize.BOOLEAN,
        },
        {
            sequelize,
            modelName: 'HouseRule',
        }
    );
    return HouseRule;
};
