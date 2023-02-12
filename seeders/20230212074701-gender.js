'use strict';
const faker = require('faker');

module.exports = {
  async up(queryInterface, Sequelize) {
    let users = [];
    for (let i = 0; i < 10; i++) {
      let user = {
        name: faker.name.firstName() + ' ' + faker.name.lastName(),
        email: faker.internet.email(),
        createdAt: new Date(),
        updatedAt: new Date()
      };
      users.push(user);
    }
    await queryInterface.bulkInsert('Users', users);

    let genders = [];
    for (let i = 1; i <= 10; i++) {
      let gender = {
        name: faker.random.arrayElement(['Male', 'Female', 'Other']),
        userId: i,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      genders.push(gender);
    }
    await queryInterface.bulkInsert('Genders', genders);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Genders', null, {});
    await queryInterface.bulkDelete('Users', null, {});
  }
};
