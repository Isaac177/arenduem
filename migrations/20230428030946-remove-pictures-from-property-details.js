'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('PropertyDetails', 'pictures');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('PropertyDetails', 'pictures', {
      type: Sequelize.ARRAY(Sequelize.JSON),
      allowNull: false
    });
  }
};

