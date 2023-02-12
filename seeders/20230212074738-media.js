'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await queryInterface.sequelize.query(
        `SELECT id from Users`
    );
    const userRows = users[0];

    const media = [
      {
        fileName: 'Image 1',
        fileUrl: 'https://example.com/image1.jpg',
        fileType: 'image',
        userId: userRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fileName: 'Image 2',
        fileUrl: 'https://example.com/image2.jpg',
        fileType: 'image',
        userId: userRows[1].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fileName: 'Image 3',
        fileUrl: 'https://example.com/image3.jpg',
        fileType: 'image',
        userId: userRows[2].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fileName: 'Video 1',
        fileUrl: 'https://example.com/video1.mp4',
        fileType: 'video',
        userId: userRows[3].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fileName: 'Video 2',
        fileUrl: 'https://example.com/video2.mp4',
        fileType: 'video',
        userId: userRows[4].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    await queryInterface.bulkInsert('Media', media, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Media', null, {});
  }
};
