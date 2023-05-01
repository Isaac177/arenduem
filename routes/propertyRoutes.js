const express = require('express');
const router = express.Router();
const multer = require('multer');
const propertyController = require('../controllers/propertyController.js');
const path = require("path");


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

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = path.join(__dirname, '..', 'uploads');
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const fileExtension = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + fileExtension);
    },
});

const upload = multer({
    storage: storage,
    fileFilter,
    limits: { fileSize: 1024 * 1024 * 5 }, // Optional: limit file size to 5 MB
    dest: 'uploads/', // Add this line to save files to disk
});


router.post('/users/:userId/properties', upload.array('pictures'), propertyController.createProperty);
router.get('/users/:userId/properties', propertyController.getProperties);
router.get('/users/:userId/properties', propertyController.getUserProperties);
router.delete('/users/:userId/properties/:propertyId', propertyController.deleteProperty);

module.exports = router;
