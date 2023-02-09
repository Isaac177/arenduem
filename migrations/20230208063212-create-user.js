'use strict';
const Sequelize = require("sequelize");
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
      password: Sequelize.STRING,
      dateOfBirth: Sequelize.DATE,
      /*profilePictureId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Picture",
          key: "id"
        }
      },*/
      occupation: Sequelize.STRING,
      aboutMe: Sequelize.TEXT,
      moveInDate: Sequelize.DATEONLY,
      budget: Sequelize.INTEGER,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};