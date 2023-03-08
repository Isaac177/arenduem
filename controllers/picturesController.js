const path = require('path');
const { Picture } = require('../models');

const savePicture = async (userId, fileName, filePath, isMain, isCover) => {
    try {
        return await Picture.create({
            userId,
            fileName,
            fileUrl: `http://localhost:8000/uploads/${path.basename(filePath)}`,
            isMain,
            isCover,
        });
    } catch (error) {
        console.error(error);
        throw new Error('Error saving picture to database');
    }
};

const getPictureById = async (req, res) => {
    const { id } = req.params;

    try {
        const picture = await Picture.findByPk(id);

        if (!picture) {
            return res.status(404).json({ message: 'Picture not found' });
        }

        res.status(200).json({
            id: picture.id,
            userId: picture.userId,
            fileName: picture.fileName,
            fileUrl: picture.fileUrl,
            createdAt: picture.createdAt,
            updatedAt: picture.updatedAt,
            isMain: picture.isMain,
            isCover: picture.isCover,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving picture from database' });
    }
};

module.exports = {
    savePicture,
    getPictureById,
};
