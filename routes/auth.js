const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');


router.post('/signin', authController.signin);

router.post('/signup', async (req, res) => {
    await authController.signup(req, res);
});

router.get('/signout', (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
});

router.get('/protected', authMiddleware.verifyToken, (req, res) => {
    res.send('Protected route');
});

module.exports = router;
