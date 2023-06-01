'use strict';

/** @type {import('sequelize-cli').Migration} */


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('PropertyPictures', 'PropertyPictures_propertyDetailId_fkey');
    await queryInterface.removeColumn('PropertyPictures', 'propertyDetailId');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('PropertyPictures', 'propertyDetailId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'PropertyDetails',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
    await queryInterface.addConstraint('PropertyPictures', {
      fields: ['propertyDetailId'],
      type: 'foreign key',
      name: 'PropertyPictures_propertyDetailId_fkey',
      references: {
        table: 'PropertyDetails',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  }
};
