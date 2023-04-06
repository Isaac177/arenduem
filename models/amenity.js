const { Model } = require('sequelize');
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Amenity extends Model {
        static associate(models) {
            Amenity.belongsToMany(models.Property, { through: 'PropertyAmenity' });
        }
    }
    Amenity.init(
        {
            homeType: Sequelize.BOOLEAN,
            bedroom: Sequelize.BOOLEAN,
            bathroom: Sequelize.BOOLEAN,
            roommates: Sequelize.BOOLEAN,
            livingRoom: Sequelize.BOOLEAN,
            kitchen: Sequelize.BOOLEAN,
            wifi: Sequelize.BOOLEAN,
            tv: Sequelize.BOOLEAN,
            airConditioning: Sequelize.BOOLEAN,
            smokeFree: Sequelize.BOOLEAN,
            laundry: Sequelize.BOOLEAN,
            elevator: Sequelize.BOOLEAN,
            parking: Sequelize.BOOLEAN,
            balcony: Sequelize.BOOLEAN,
            privateBathroom: Sequelize.BOOLEAN,
            privateKitchen: Sequelize.BOOLEAN,
            desktop: Sequelize.BOOLEAN,
            closet: Sequelize.BOOLEAN,
        },
        {
            sequelize,
            modelName: 'Amenity',
        }
    );
    return Amenity;
};
