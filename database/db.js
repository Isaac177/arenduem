const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('arenduem', 'postgres', 'francerdc1', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432
});

module.exports = sequelize;