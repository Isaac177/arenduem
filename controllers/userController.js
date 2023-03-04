const { User } = require("../models");

const getUserById = async (req, res) => {
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

module.exports = {
    getUserById,
};
