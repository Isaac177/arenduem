const jwt = require('jsonwebtoken');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('../models').User;
require('dotenv').config();
const HousingStatus = require('../models').HousingStatus;


passport.use(new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
    try {
        const user = await User.findOne({ where: { email } });
        console.log('user:', user);
        if (!user) {
            return done(null, false, { message: 'Incorrect email.' });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        console.log('passwordMatch:', passwordMatch);
        if (!passwordMatch) {
            return done(null, false, { message: 'Incorrect email or password.' });
        }

        return done(null, user);
    } catch (error) {
        return done(error);
    }
}));


passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findByPk(id, {
        attributes: { exclude: ['password'] },
        raw: true
    })
        .then(user => {
            done(null, user);
        })
        .catch(err => {
            done(err, null);
        });
});

exports.signin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(401).json({ message: 'Incorrect email or password.' });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Incorrect email or password.' });
        }
        const token = jwt.sign(
            { id: user.id, role: user.get('role') },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRES_IN || '1h',
            }
        );
        return res.status(200).json({ token, role: user.get('role') });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
};

let invalidatedTokens = [];

exports.signout = (req, res) => {
    console.log('This is for the token')
    const { token } = req.body;

    if (!token) {
        return res.status(400).json({ message: 'No token provided.' });
    }

    try {
        jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
        return res.status(400).json({ message: 'Invalid or expired token.' });
    }

    // Remove token from invalidatedTokens array
    const tokenIndex = invalidatedTokens.indexOf(token);
    if (tokenIndex > -1) {
        invalidatedTokens.splice(tokenIndex, 1);
    }

    return res.status(200).json({ message: 'Successful logout.' });
};


exports.isAuthenticated = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (token && !invalidatedTokens.includes(token)) {
        try {
            req.user = jwt.verify(token, process.env.JWT_SECRET);
            return next();
        } catch (error) {
            return res.status(401).json({ message: 'Invalid token.' });
        }
    }
    return res.status(401).json({ message: 'Unauthorized access.' });
};

exports.isNotAuthenticated = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return next();
    }
    return res.status(400).json({ message: 'You are already logged in.' });
};

exports.signup = async (req, res) => {
    const { firstName, lastName, email, password, confirmPassword } = req.body;
    const isOwner = req.body.isOwner || false;
    if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Passwords do not match.' });
    }
    try {
        let user = await User.findOne({ where: { email } });
        if (user) {
            return res.status(400).json({ message: 'Email is already taken' });
        }
        const isAdmin = process.env.ADMIN_EMAILS.split(',').includes(email);
        const newUser = await User.create({
            firstName,
            lastName,
            email,
            password,
            role: isAdmin ? 'admin' : 'user',
        });
        const newHousingStatus = await HousingStatus.create({
            isOwner,
            userId: newUser.id,
        });
        const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN || '1h',
        });
        console.log('newUser:', newUser);
        return res.status(201).json({
            message: 'User created successfully',
            token: token,
            userId: newUser.id,
            user: {
                id: newUser.id,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email,
                role: newUser.role,
                isOwner: isOwner,
                HousingStatusId: newHousingStatus.id,
            },
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
};





