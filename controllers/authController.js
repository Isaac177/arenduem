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

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {},{
            expiresIn: process.env.JWT_EXPIRES_IN || '1h'
        });

        return res.status(200).json({ token });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
};


exports.signout = (req, res) => {
    req.signout();
    return res.status(200).json({ message: 'Successful logout.' });
};

exports.isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
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

        return res.status(201).json({
            message: 'User created successfully',
            token: token,
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





