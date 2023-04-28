// controllers/picture.js

const Picture = require('../models/picture');

exports.create = async (req, res) => {
    const { userId } = req.params;
    const { isMain, isCover } = req.body;
    const path = req.file.path;

    try {
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
