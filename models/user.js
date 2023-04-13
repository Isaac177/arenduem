const { Model } = require('sequelize');
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      const {Picture, Gender, SmokingStatus, DrinkingStatus, HousingStatus, Interest, PhoneVerification} = models;

      User.hasMany(Picture, {
        foreignKey: 'userId',
        as: 'pictures',
        onDelete: 'CASCADE'
      });
      User.hasOne(Gender, {
        foreignKey: 'userId',
        as: 'gender'
      });
      User.hasOne(SmokingStatus, {
        foreignKey: 'userId',
        as: 'smokingStatus'
      });
      User.hasOne(DrinkingStatus, {
        foreignKey: 'userId',
        as: 'drinkingStatus'
      });
      User.hasOne(HousingStatus, {
        foreignKey: 'userId',
        as: 'housingStatus'
      });
      User.hasMany(Interest, {
        foreignKey: 'userId',
        as: 'interests',
        onDelete: 'CASCADE'
      });
      User.hasMany(PhoneVerification, {
        foreignKey: 'userId',
        as: 'phoneVerifications',
        onDelete: 'CASCADE'
      });

    }

    async hashPassword() {
      this.password = await bcrypt.hash(this.password, 10);
    }
  }

  User.init({
    firstName: {
      type: Sequelize.STRING,
    },
    lastName: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING,
      // allowNull: false
    },
    dateOfBirth: {
      type: Sequelize.DATEONLY,
      // allowNull: true
    },
    occupation: {
      type: Sequelize.STRING,
      // allowNull: false
    },
    aboutMe: {
      type: Sequelize.TEXT,
      // allowNull: false
    },
    moveInDate: {
      type: Sequelize.DATEONLY,
      // allowNull: false
    },
    budget: {
      type: Sequelize.INTEGER,
      // allowNull: false
    },
    role: {
      type: Sequelize.STRING,
      defaultValue: 'user',
      get() {
        return this.getDataValue('role') === 'admin' ? 'admin' : 'user';
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: async (user) => {
        await user.hashPassword();
      }
    }
  });

  return User;
};
