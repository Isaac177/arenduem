const { sequelize } = require('./models'); // Adjust the path to your models/index.js file

const showAssociations = () => {
    const models = Object.values(sequelize.models);

    models.forEach((model) => {
        console.log(`\nModel: ${model.name}`);
        console.log('Associations:');

        const associations = Object.values(model.associations);

        if (associations.length === 0) {
            console.log('No associations found');
        } else {
            associations.forEach((association) => {
                console.log(
                    `${association.associationType} with ${association.target.name} as ${association.as}`
                );
            });
        }
    });
};

showAssociations();
