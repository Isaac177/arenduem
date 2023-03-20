const { User, HousingStatus } = require("../models");
const Picture = require("../models").Picture;



exports.getUserById = async (req, res) => {
    const { userId } = req.params;

    try {
        const user = await User.findByPk(userId, {
            include: [
                {
                    model: Picture,
                    as: 'pictures',
                    attributes: ['id', 'fileName', 'fileUrl', 'isMain', 'isCover'],
                },
            ],
        });

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

exports.updateIsOwner = async (req, res) => {
    const { userId } = req.params;
    const { isOwner } = req.body;

    console.log(userId, isOwner)
    try {
        const housingStatus = await HousingStatus.findOne({ where: { userId } });
        if (!housingStatus) {
            throw new Error(`HousingStatus for user with ID ${userId} not found`);
        }
        housingStatus.isOwner = isOwner;
        await housingStatus.save();

        res.json(housingStatus);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

