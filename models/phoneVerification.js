const { Model } = require('sequelize');
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class PhoneVerification extends Model {
        static associate(models) {
            PhoneVerification.belongsTo(models.Property, {
                foreignKey: 'propertyId',
            });

            PhoneVerification.belongsTo(models.User, {
                foreignKey: 'userId',
            });
        }
    }
    PhoneVerification.init(
        {
            propertyId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Properties',
                    key: 'id',
                },
            },
            userId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Users',
                    key: 'id',
                },
            },
            country: Sequelize.STRING,
            phoneNumber: Sequelize.STRING,
            verificationCode: Sequelize.STRING,
         },
        {
            sequelize,
            modelName: 'PhoneVerification',
        }
    );
    return PhoneVerification;
};
