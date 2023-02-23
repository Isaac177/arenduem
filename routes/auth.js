const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');
const { check, validationResult } = require('express-validator');


router.post('/signin', [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists()
], authController.signin);


router.post('/signup', async (req, res) => {
    authController.signup(req, res);
});

//router.get('/signout', authController.isAuthenticated, authController.logout);

router.get('/protected', authMiddleware.verifyToken, (req, res) => {
    res.send('Protected route');
});

module.exports = router;
