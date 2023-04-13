const express = require('express');
const router = express.Router();
const propertyController = require('../controllers/propertyController.js');

router.post('/users/:userId/properties', propertyController.createProperty);
router.get('/users/:userId/properties', propertyController.getProperties);

module.exports = router;
