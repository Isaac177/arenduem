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
        file.mimetype === 'image/jpg'
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
        const { isMain: reqIsMain, isCover: reqIsCover } = req.body;

        const isMain = reqIsMain === 'true' || false;
        const isCover = reqIsCover === 'true' || false;

        const picture = await Picture.create({
            userId: req.params.userId,
            fileUrl: req.file.path,
            isMain, isCover
        });

        if (req.body.isMain === true) {
            // Update previous main picture, if any
            const prevMainPicture = await Picture.findOne({ where: { userId: req.params.userId, isMain: true } });
            if (prevMainPicture && prevMainPicture.id !== picture.id) {
                await prevMainPicture.update({ isMain: false });
            }
            // Update current picture
            await picture.update({ isMain: true, isCover: false });
        } else if (req.body.isMain === false) {
            await picture.update({ isMain: false });
        }

        if (req.body.isCover === true) {
            // Update previous cover picture, if any
            const prevCoverPicture = await Picture.findOne({ where: { userId: req.params.userId, isCover: true } });
            if (prevCoverPicture && prevCoverPicture.id !== picture.id) {
                await prevCoverPicture.update({ isCover: false });
            }
            // Update current picture
            await picture.update({ isCover: true, isMain: false });
        } else if (req.body.isCover === false) {
            await picture.update({ isCover: false });
        }

        res.status(201).json(picture);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to upload picture.' });
    }
});


router.put('/users/:userId/pictures/:id', async (req, res) => {
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

        const picture = await Picture.findByPk(Number(req.params.id));

        if (!picture) {
            return res.status(404).json({ message: 'Picture not found.' });
        }

        if (picture.userId !== userId) {
            return res.status(403).json({ message: 'You are not authorized to update this picture.' });
        }

        if (req.body.isMain) {
            const prevMainPicture = await Picture.findOne({ where: { userId: req.params.userId, isMain: true } });
            if (prevMainPicture && prevMainPicture.id !== picture.id) {
                await prevMainPicture.update({ isMain: false });
            }
            await picture.update({ isMain: true, isCover: false }); // set isCover to false
        } else {
            await picture.update({ isMain: false });
        }

        if (req.body.isCover) {
            const prevCoverPicture = await Picture.findOne({ where: { userId: req.params.userId, isCover: true } });
            if (prevCoverPicture && prevCoverPicture.id !== picture.id) {
                await prevCoverPicture.update({ isCover: false });
            }
            await picture.update({ isCover: true, isMain: false }); // set isMain to false
        } else {
            await picture.update({ isCover: false });
        }

        res.status(200).json(picture);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to update picture.' });
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
router.delete('/users/:userId/pictures/:id', async (req, res) => {
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
        const picture = await Picture.findByPk(Number(req.params.id));
        if (!picture) {
            return res.status(404).json({ message: 'Picture not found.' });
        }
        if (picture.userId === userId) {
            await picture.destroy();
            res.status(204).json({ message: 'Picture deleted.' });
        } else {
            res.status(403).json({ message: 'You are not authorized to delete this picture.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to delete picture.' });
    }
});


module.exports = router;
