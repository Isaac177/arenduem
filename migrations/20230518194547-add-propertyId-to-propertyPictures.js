'use strict';

/** @type {import('sequelize-cli').Migration} */


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query('ALTER TABLE "PropertyPictures" DROP CONSTRAINT IF EXISTS "PropertyPictures_propertyId_fkey"')
        .catch(error => console.log('Constraint did not exist, continuing'));

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

   await queryInterface.sequelize.query('UPDATE "PropertyPictures" SET "propertyId" = 1 WHERE "propertyId" IS NULL');

    // Finally we apply the NOT NULL constraint
    await queryInterface.changeColumn('PropertyPictures', 'propertyId', {
      type: Sequelize.INTEGER,
      allowNull: false
    });
  }

};
