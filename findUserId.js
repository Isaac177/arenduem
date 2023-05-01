const { sequelize } = require('./models'); // Adjust the path to your models/index.js file

const findModelsWithUserId = async () => {
    const models = Object.values(sequelize.models);

    for (const model of models) {
        const attributes = model.rawAttributes;

        if (attributes.userId) {
            console.log(`Model ${model.name} has a userId attribute`);
        }
    }
};

findModelsWithUserId().then(r => process.exit());
