'use strict';

/** @type {import('sequelize-cli').Seeder} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const choices = ['Never', 'Socially', 'Regularly', 'Very often'];
    const now = new Date();

    const drinkingStatuses = choices.map(choice => ({
      choice,
      userId: 1,
      createdAt: now,
      updatedAt: now
    }));

    await queryInterface.bulkInsert('DrinkingStatuses', drinkingStatuses, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('DrinkingStatuses', null, {});
  }
};
