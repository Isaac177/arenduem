const { Model } = require('sequelize');
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class PropertyDetail extends Model {
        static associate(models) {
            PropertyDetail.belongsTo(models.Property, {
                foreignKey: 'propertyId',
            });
        }
    }
    PropertyDetail.init(
        {
            pictures: Sequelize.JSONB,
            title: Sequelize.STRING,
            description: Sequelize.TEXT,
            propertyId: Sequelize.INTEGER,
        },
        {
            sequelize,
            modelName: 'PropertyDetail',
        }
    );
    return PropertyDetail;
};
