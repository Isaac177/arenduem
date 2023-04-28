'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Add a temporary column to store the data
    await queryInterface.addColumn('PropertyDetails', 'pictures_temp', {
      type: Sequelize.ARRAY(Sequelize.JSON),
      allowNull: false,
      defaultValue: []
    });

    // Copy the data from the original column to the temporary column
    await queryInterface.sequelize.query(`
      UPDATE "PropertyDetails"
      SET "pictures_temp" = ARRAY["pictures"]
    `);

    // Remove the original column
    await queryInterface.removeColumn('PropertyDetails', 'pictures');

    // Rename the temporary column to the original column name
    await queryInterface.renameColumn('PropertyDetails', 'pictures_temp', 'pictures');
  },

  down: async (queryInterface, Sequelize) => {
    // Add a temporary column to store the data
    await queryInterface.addColumn('PropertyDetails', 'pictures_temp', {
      type: Sequelize.JSON,
      allowNull: false
    });

    // Copy the data from the original column to the temporary column
    await queryInterface.sequelize.query(`
      UPDATE "PropertyDetails"
      SET "pictures_temp" = "pictures"[1]
    `);

    // Remove the original column
    await queryInterface.removeColumn('PropertyDetails', 'pictures');

    // Rename the temporary column to the original column name
    await queryInterface.renameColumn('PropertyDetails', 'pictures_temp', 'pictures');
  }
};
