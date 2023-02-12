const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const User = require('../models/User');


router.post('/login', [
    check('name', 'Name is required').not().isEmpty().withMessage('Name is required'),
    //check('email', 'Please include a valid email').not().isEmpty().isEmail().withMessage('Please include a valid email'),
    check('password', 'Please enter a password with 6 or more characters').not().isEmpty().isLength({ min: 6 }).withMessage('Please enter a password with 6 or more characters')
], (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}, authController.login);

router.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;
        const hash = await bcrypt.hash(password, 10);
        const user = await User.create({ email, password: hash });
        res.send({
            message: 'User created successfully',
            user
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: 'An error occurred while creating the user',
            error
        });
    }
});

router.get('/logout', authController.isAuthenticated, authController.logout);

router.get('/protected', authController.isAuthenticated, (req, res) => {
    res.send('Protected route');
});

module.exports = router;

