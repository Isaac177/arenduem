const Picture = require('../models/Picture');

exports.uploadPicture = async (req, res) => {
    const { isMain, isCover, userId } = req.body;
    console.log(req.file)
    if (!req.file) {
        res.status(400).json({ message: 'No file uploaded' });
        return;
    }
    console.log(req.file)
    const { originalname, path } = req.file;

    try {
        const picture = await Picture.create({
            userId,
            fileName: originalname,
            fileUrl: `http://localhost:8000/${path}`,
            isMain,
            isCover
        });

        res.status(201).json({
            id: picture.id,
            userId: picture.userId,
            fileName: picture.fileName,
            fileUrl: picture.fileUrl,
            createdAt: picture.createdAt,
            updatedAt: picture.updatedAt,
            isMain: picture.isMain,
            isCover: picture.isCover
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error saving picture to database' });
    }
};
