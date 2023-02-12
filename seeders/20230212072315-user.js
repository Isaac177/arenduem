'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        password: 'password',
        dateOfBirth: new Date(),
        occupation: 'Software Engineer',
        aboutMe: 'I am a software engineer.',
        moveInDate: new Date(),
        budget: 5000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane.doe@example.com',
        password: 'password',
        dateOfBirth: new Date(),
        occupation: 'Doctor',
        aboutMe: 'I am a doctor.',
        moveInDate: new Date(),
        budget: 6000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
