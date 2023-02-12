'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING(60),
        allowNull: false,
        set(password) {
          this.setDataValue('password', bcrypt.hashSync(password, bcrypt.genSaltSync(8), null));
        }
      },
      dateOfBirth: {
        type: Sequelize.DATE
      },
      occupation: {
        type: Sequelize.STRING
      },
      aboutMe: {
        type: Sequelize.STRING
      },
      moveInDate: {
        type: Sequelize.DATE
      },
      budget: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};