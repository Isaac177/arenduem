const sequelize = require('../database/db');

const createTableIfNotExists = async (tableName, tableDefinition) => {
    /*try {
        const checkIfExistsQuery = `
            SELECT *
            FROM information_schema.tables
            WHERE table_name = '${tableName}' COLLATE "C"
        `;
        const result = await sequelize.query(checkIfExistsQuery, { type: sequelize.QueryTypes.SELECT });
        if (result.length === 0) {
            console.log("tableDefinition: ", tableDefinition);
            const columns = Object.entries(tableDefinition)
                .map(([columnName, columnType]) => `${columnName} ${columnType}`);
            console.log("columns: ", columns);
            const createTableQuery = `CREATE TABLE ${tableName} ( ${columns.join(',\n')} );`;
            await sequelize.query(createTableQuery);
            console.log(`Table ${tableName} created successfully.`);
        } else {
            console.log(`Table ${tableName} already exists.`);
        }
    } catch (error) {
        console.error(error);
    }*/

    try {
        const checkIfExistsQuery = `
      SELECT *
      FROM information_schema.tables
      WHERE table_name = '${tableName}' COLLATE "C"
  `;
        // Write the following another way
        const result = await sequelize.query(checkIfExistsQuery, { type: sequelize.QueryTypes.SELECT });
        if (result.length === 0) {
            console.log("tableDefinition: ", tableDefinition);
            const columns = Object.entries(tableDefinition)
                .map(([columnName, columnType]) => `${columnName} ${columnType}`);
            console.log("columns: ", columns);
            const createTableQuery = `CREATE TABLE ${tableName} ( ${columns.join(',\n')} );`;
            await sequelize.query(createTableQuery);
            console.log(`Table ${tableName} created successfully.`);
        } else {
            console.log(`Table ${tableName} already exists.`);
        }
    } catch (error) {
        console.error(error);
    }
};

//module.exports = createTableIfNotExists;