const { User } = require("../models");

exports.getUserById = async (req, res) => {
    const { userId } = req.params;

    try {
        const user = await User.findByPk(userId);
        if (!user) {
            throw new Error(`User with ID ${userId} not found`);
        }
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

exports.updateUserById = async (req, res) => {
    const { userId } = req.params;
    const { firstName, lastName, email, dateOfBirth, occupation, aboutMe, moveInDate, budget } = req.body;

    try {
        const user = await User.findByPk(userId);
        if (!user) {
            throw new Error(`User with ID ${userId} not found`);
        }
        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.dateOfBirth = dateOfBirth;
        user.occupation = occupation;
        user.aboutMe = aboutMe;
        user.moveInDate = moveInDate;
        user.budget = budget;
        await user.save();

        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};