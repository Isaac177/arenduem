'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const constraints = await queryInterface.getForeignKeysForTables(['PropertyPictures']);
    if (constraints['PropertyPictures'].includes('PropertyPictures_propertyId_fkey')) {
      await queryInterface.removeConstraint('PropertyPictures', 'PropertyPictures_propertyId_fkey');
    }
    await queryInterface.renameColumn('PropertyPictures', 'propertyId', 'propertyDetailId');
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
  },

  down: async (queryInterface, Sequelize) => {
    const constraints = await queryInterface.getForeignKeysForTables(['PropertyPictures']);
    if (constraints['PropertyPictures'].includes('PropertyPictures_propertyDetailId_fkey')) {
      await queryInterface.removeConstraint('PropertyPictures', 'PropertyPictures_propertyDetailId_fkey');
    }
    await queryInterface.renameColumn('PropertyPictures', 'propertyDetailId', 'propertyId');
    await queryInterface.addConstraint('PropertyPictures', {
      fields: ['propertyId'],
      type: 'foreign key',
      name: 'PropertyPictures_propertyId_fkey',
      references: {
        table: 'Properties',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  }
};
