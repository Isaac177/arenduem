'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HouseRules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      propertyId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Properties',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      noSmoking: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      pets: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      children: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      smoking: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      events: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      noDrinking: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
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
    await queryInterface.dropTable('HouseRules');
  }
};
