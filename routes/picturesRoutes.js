const express = require('express');
const router = express.Router();
const Picture = require('../models').Picture;
const multer = require('multer');
const { User } = require('../models');
const jwt = require('jsonwebtoken');


const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === 'image/jpeg' ||
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/gif'
    ) {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type'), false);
    }
};

const upload = multer({
    dest: 'uploads/',
    fileFilter,
});

router.post('/users/:userId/pictures', upload.single('file'), async (req, res) => {
    try {
        const picture = await Picture.create({
            userId: req.params.userId,
            fileUrl: req.file.path,
            isMain: req.body.isMain,
            isCover: req.body.isCover,
        });

        res.status(201).json(picture);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to upload picture.' });
    }
});


router.get('/users/:userId/pictures', async (req, res) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'Authorization header missing or invalid.' });
        }
        const token = authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Authorization token missing.' });
        }
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        if (!decodedToken) {
            return res.status(401).json({ message: 'Invalid or expired token.' });
        }
        const userId = decodedToken.id;
        const pictures = await Picture.findAll({
            where: {
                userId: userId
            },
            include: {
                model: User,
                as: 'user'
            }
        });
        res.json(pictures);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to retrieve pictures.' });
    }
});

module.exports = router;
