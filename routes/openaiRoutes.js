const express = require('express');
const router = express.Router();
const openaiController = require('../controllers/openaiController.js');


router.post('/openai/suggestions', openaiController.fetchSuggestions);

module.exports = router;
