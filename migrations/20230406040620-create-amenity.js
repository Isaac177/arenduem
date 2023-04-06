'use strict';

/** @type {import('sequelize-cli').Migration} */


module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Amenities', {
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
      homeType: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      bedroom: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      bathroom: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      roommates: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      livingRoom: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      kitchen: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      wifi: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      tv: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      airConditioning: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      smokeFree: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      laundry: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      elevator: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      parking: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      balcony: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      privateBathroom: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      privateKitchen: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      desktop: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      closet: {
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
    await queryInterface.dropTable('Amenities');
  }
};
