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
        }
    }
    PropertyDetail.init(
        {
             title: Sequelize.STRING,
            description: Sequelize.TEXT,
            size: Sequelize.INTEGER,
            roommates: Sequelize.INTEGER,
            bedrooms: Sequelize.INTEGER,
            bathrooms: Sequelize.INTEGER,
            bedType: Sequelize.STRING,
            furnished: Sequelize.BOOLEAN,
            propertyId: Sequelize.INTEGER,
        },
        {
            sequelize,
            modelName: 'PropertyDetail',
        }
    );
    return PropertyDetail;
};
