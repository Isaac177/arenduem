const { Model } = require('sequelize');
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class PhoneVerification extends Model {
        static associate(models) {
            PhoneVerification.belongsTo(models.Property, {
                foreignKey: 'propertyId',
            });
        }
    }
    PhoneVerification.init(
        {
            country: Sequelize.STRING,
            phoneNumber: Sequelize.STRING,
            verificationCode: Sequelize.STRING,
            propertyId: Sequelize.INTEGER,
        },
        {
            sequelize,
            modelName: 'PhoneVerification',
        }
    );
    return PhoneVerification;
};
