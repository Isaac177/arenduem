'use strict';

const faker = require('faker');

module.exports = {
  async up(queryInterface, Sequelize) {
    const pictures = [];
    for (let i = 0; i < 100; i++) {
      pictures.push({
        userId: Math.floor(Math.random() * 100) + 1,
        fileName: faker.system.commonFileName(),
        fileUrl: faker.internet.url(),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    await queryInterface.bulkInsert('Pictures', pictures, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pictures', null, {});
  }
};
