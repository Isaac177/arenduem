const express = require('express');
const router = express.Router();
const interestController = require('../controllers/interestController');
const { authenticateToken } = require('../middleware/authTokenMiddleware');

router.post('/users/:userId/interests', authenticateToken, interestController.addInterest);

router.delete('/users/:userId/interests/:id', authenticateToken, interestController.removeInterest);

module.exports = router;
