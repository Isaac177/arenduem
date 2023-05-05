'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('PropertyPictures', 'propertyDetailId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'PropertyDetails',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('PropertyPictures', 'propertyDetailId');
  },
};
