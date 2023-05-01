const { User, HousingStatus } = require("../models");
const Picture = require("../models").Picture;
const Interest = require("../models").Interest;
const Address = require("../models").Address;
const Property = require("../models").Property;
const PropertyDetail = require("../models").PropertyDetail;
const PropertyPicture = require("../models").PropertyPicture;
const Preference = require("../models").Preference;
const Availability = require("../models").Availability;
const Price = require("../models").Price;
const Service = require("../models").Service;
const Amenity = require("../models").Amenity;
const HouseRule = require("../models").HouseRule;
const PhoneVerification = require("../models").PhoneVerification;
const Gender = require("../models").Gender;




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


exports.getHousingStatus = async (req, res) => {
    const { userId } = req.params;
    try {
        const housingStatus = await HousingStatus.findOne({ where: { userId } });
        if (!housingStatus) {
            throw new Error(`HousingStatus for user with ID ${userId} not found`);
        }
        res.json(housingStatus);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

exports.getUserInfoById = async (req, res) => {
    const { userId } = req.params;
    try {
        const user = await User.findByPk(userId, {
            include: [
                {model: Gender, as: 'gender'},
                { model: Picture, as: 'pictures' },
                { model: HousingStatus, as: 'housingStatuses' },
                { model: Interest, as: 'interests' },
                {
                    model: Property,
                    as: 'properties',
                    include: [
                        { model: Address },
                        { model: Amenity },
                        { model: Availability },
                        { model: HouseRule },
                        { model: Preference },
                        { model: Price },
                        { model: Service },
                        {
                            model: PropertyDetail,
                            include: [{ model: PropertyPicture }],
                        },
                        {
                            model: PhoneVerification,
                        },
                    ],
                },
            ],
        });
        if (!user) {
            throw new Error(`User with ID ${userId} not found`);
        } else {
            res.json(user);
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};