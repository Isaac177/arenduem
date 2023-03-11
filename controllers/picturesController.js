// controllers/picture.js

const Picture = require('../models/picture');

// POST /users/:userId/pictures
exports.create = async (req, res) => {
    const { userId } = req.params;
    const { isMain, isCover } = req.body;
    const path = req.file.path;
    console.log('req.file.path: ', req.file.path)

    try {
        // Create a new picture record in the database
        const picture = await Picture.create({
            userId,
            path,
            isMain,
            isCover,
        });

        res.status(201).json(picture);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to upload picture.' });
    }
};
