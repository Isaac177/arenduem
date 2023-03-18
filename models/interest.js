// models/Interest.js

const { Model } = require('sequelize');
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Interest extends Model {
        static associate(models) {
            Interest.belongsTo(models.User, {
                foreignKey: 'userId',
                as: 'user',
                onDelete: 'CASCADE'
            });
        }
    }

    Interest.init(
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            userId: Sequelize.INTEGER,
            interest: Sequelize.STRING,
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE
        },
        {
            sequelize,
            modelName: 'Interest'
        }
    );

    return Interest;
};
