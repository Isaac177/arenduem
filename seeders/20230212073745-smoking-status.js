'use strict';

const faker = require('faker');
const {now} = require("lodash");
const choices = require("lodash");

module.exports = {
  up: async queryInterface => {
    const smokingStatuses = choices.map(choice => ({
      choice,
      userId: 1,
      createdAt: now,
      updatedAt: now
    }));

    await queryInterface.bulkInsert('SmokingStatuses', smokingStatuses, {});
    },

    down: async queryInterface => {
        await queryInterface.bulkDelete('SmokingStatuses', null, {});
    }
};
