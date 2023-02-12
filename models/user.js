'use strict';
const {
  Model
} = require('sequelize');
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');


module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      models.Gender = require('./gender')(sequelize, DataTypes);
      models.Picture = require('./picture')(sequelize, DataTypes);
      models.SmokingStatus = require('./smokingstatus')(sequelize, DataTypes);
      models.DrinkingStatus = require('./drinkingstatus')(sequelize, DataTypes);
      models.HousingStatus = require('./housingstatus')(sequelize, DataTypes);

      User.hasOne(models.DrinkingStatus, {
        foreignKey: "userId",
        as: "userDrinkingStatus"
      });

      User.hasMany(models.Picture, {
        foreignKey: 'userId',
        as: 'pictures',
        onDelete: 'CASCADE'
      });
      User.hasOne(models.Gender, {
        foreignKey: 'userId',
        as: 'gender'
      });
      User.hasOne(models.SmokingStatus, {
        foreignKey: 'userId',
        as: 'smokingStatus'
      });
      User.hasOne(models.DrinkingStatus, {
        foreignKey: 'userId',
        as: 'drinkingStatus'
      });
      User.hasOne(models.HousingStatus, {
        foreignKey: 'userId',
        as: 'housingStatus'
      });
    }

    static async createUser(user) {
        return await User.create(user);
    }

    async validatePassword(password) {
      return await bcrypt.compare(password, this.password);
    }
  }
  User.init({
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    dateOfBirth: {
      type: Sequelize.DATEONLY,
      allowNull: false
    },
    occupation: {
      type: Sequelize.STRING,
      allowNull: false
    },
    aboutMe: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    moveInDate: {
      type: Sequelize.DATEONLY,
      allowNull: false
    },
    budget: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: async (user) => {
        user.password = await bcrypt.hash(user.password, 10);
      }
    }
  });
  return User;
};
