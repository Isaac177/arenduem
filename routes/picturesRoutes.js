const express = require('express');
const multer = require('multer');
const { savePicture, getPictureById } = require('../controllers/picturesController');

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

router.post('/', upload.single('file'), async (req, res) => {
    const { isMain, isCover, userId } = req.body;
    const { originalname, path } = req.file;

    try {
        // save the picture to the database or do any other necessary processing
        // for example, you could use the "savePicture" function that you provided earlier:
        const picture = await savePicture(userId, originalname, path, isMain, isCover);

        res.status(201).json({
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
        res.status(500).json({ message: 'Error saving picture to database' });
    }
});

router.get('/:id', getPictureById);

module.exports = router;
