const { Model } = require('sequelize');
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class PropertyDetail extends Model {
        static associate(models) {
            models.Property = require('./property')(sequelize, DataTypes);
            models.PropertyPicture = require('./propertyPicture')(sequelize, DataTypes);

            PropertyDetail.belongsTo(models.Property, {
                foreignKey: 'propertyId',
            });

            PropertyDetail.hasMany(models.PropertyPicture, {
                foreignKey: 'propertyDetailId',
                as: 'propertyPictures',
            });
        }
    }
    PropertyDetail.init(
        {
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
