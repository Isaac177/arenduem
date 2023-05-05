'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('PropertyDetails', 'bedType', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: ''
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('PropertyDetails', 'bedType');
  }
};
