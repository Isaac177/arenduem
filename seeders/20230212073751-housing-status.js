'use strict';

const { random } = require('lodash');

const housingStatuses = [
  { isOwner: true },
  { isOwner: false }
];

/** @type {import('sequelize-cli').Seeder} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('HousingStatuses', housingStatuses.map((status, index) => ({
      ...status,
      userId: random(1, 100),
      createdAt: new Date(),
      updatedAt: new Date()
    })));
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('HousingStatuses', null, {});
  }
};
