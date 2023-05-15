const express = require('express');
const router = express.Router();
const multer = require('multer');
const propertyController = require('../controllers/propertyController.js');
const path = require("path");
const {updatePropertyDescription} = require("../controllers/propertyController");


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
        console.log('file', file)
        const uploadPath = path.join(__dirname, '..', 'uploads');
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        console.log('file', file)
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const fileExtension = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + fileExtension);
    },
});

const upload = multer({
    storage: storage,
    fileFilter,
    limits: { fileSize: 1024 * 1024 * 5 },
    dest: 'uploads/',
});


router.post('/users/:userId/properties', upload.array('pictures'), propertyController.createProperty);
router.get('/properties', propertyController.getProperties);
router.get('/users/:userId/properties', propertyController.getUserProperties);
router.get('/properties/:propertyId', propertyController.fetchPropertyById);
router.put('/properties/:propertyId', upload.array('pictures'), propertyController.updateProperty);
router.put('/users/:userId/properties/:propertyId/description', updatePropertyDescription);
router.delete('/users/:userId/properties/:propertyId', propertyController.deleteProperty);


module.exports = router;
