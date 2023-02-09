const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: Sequelize.STRING,
        lastName: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING,
        dateOfBirth: Sequelize.DATE,
        profilePictureId: {
            type: Sequelize.INTEGER,
            references: {
                model: "Picture",
                key: "id"
            }
        },
        occupation: Sequelize.STRING,
        aboutMe: Sequelize.TEXT,
        moveInDate: Sequelize.DATEONLY,
        budget: Sequelize.INTEGER,
        createdAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.literal('NOW()')
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.literal('NOW()')
        },
    }, {});

    User.beforeCreate(async (user, options) => {
        user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
    });

    return User;
};
