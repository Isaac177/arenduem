'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('PropertyPictures', 'isMain');
    await queryInterface.removeColumn('PropertyPictures', 'isCover');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('PropertyPictures', 'isMain', {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    });

    await queryInterface.addColumn('PropertyPictures', 'isCover', {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    });
  }
};
