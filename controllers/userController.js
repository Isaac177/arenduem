const User = require('../models').User;


exports.getAlUsers = async (req, res) => {
    User.findAll()
        .then(users => res.status(200).send(users))
        .catch(error => res.status(400).send(error));
};
