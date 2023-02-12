'use strict';

/**
 * @param {import('sequelize-cli').QueryInterface} queryInterface
 * @param {import('sequelize')} Sequelize
 */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await queryInterface.sequelize.query(
        'SELECT id from Users;'
    );
    const userRows = users[0];
    const messages = [];
    for (let i = 0; i < userRows.length; i++) {
      for (let j = 0; j < userRows.length; j++) {
        if (i !== j) {
          messages.push({
            senderId: userRows[i].id,
            receiverId: userRows[j].id,
            message: `Hello from sender ${userRows[i].id} to receiver ${userRows[j].id}!`,
            createdAt: new Date(),
            updatedAt: new Date()
          });
        }
      }
    }
    return queryInterface.bulkInsert('Messages', messages, {});
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Messages', null, {});
  }
};
