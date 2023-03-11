'use strict';

const { Model } = require('sequelize');
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Picture extends Model {
        static associate(models) {
            Picture.belongsTo(models.User, {
                foreignKey: 'userId',
                as: 'user',
                onDelete: 'CASCADE'
            });
        }
    }

    Picture.init(
        {
            userId: Sequelize.INTEGER,
            fileName: Sequelize.STRING,
            fileUrl: Sequelize.STRING,
            isMain: {
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            isCover: {
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE
        },
        {
            sequelize,
            modelName: 'Picture'
        }
    );

    return Picture;
};

