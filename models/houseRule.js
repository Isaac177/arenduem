const { Model } = require('sequelize');
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class HouseRule extends Model {
        static associate(models) {
            HouseRule.belongsToMany(models.Property, { through: 'PropertyHouseRule' });
        }
    }
    HouseRule.init(
        {
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
