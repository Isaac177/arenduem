'use strict';
const {
  Model
} = require('sequelize');
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    static associate(models) {
      //
    }
  }
  Message.init({
    senderId: Sequelize.INTEGER,
    receiverId: Sequelize.INTEGER,
    message: Sequelize.TEXT
  }, {
    sequelize,
    modelName: 'Message',
  });
  return Message;
};