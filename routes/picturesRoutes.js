const express = require('express');
const multer = require('multer');
const { uploadPicture } = require('../controllers/picturesController');

const router = express.Router();

const fs = require('fs');
const uploadDir = './uploads';

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

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

router.post('/users/:userId/pictures', upload.single('file'), async (req, res) => {
    console.log(req.file);
    const { isMain, isCover } = req.body;
    const { originalname, path } = req.file;
    const { userId } = req.params;

    try {
        const picture = await uploadPicture({
            userId,
            isMain,
            isCover,
            originalname,
            path
        });


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


module.exports = router;
