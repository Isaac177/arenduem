const jwt = require('jsonwebtoken');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const sequelize = require('../models').sequelize;
const User = require('../models').User;
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;

passport.use(new LocalStrategy((username, password, done) => {
    console.log("1");
    console.log(username)
    User.findOne({where: {email: username}})
        .then(user => {
            if (!user) {
                return done(null, false, {message: 'Incorrect username.'});
            }
            bcrypt.compare(password, user.password, (err, res) => {
                if (res) {
                    return done(null, user);
                } else {
                    return done(null, false, {message: 'Incorrect password.'});
                }
            });
        })
        .catch(err => {
            return done(err);
        });
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findByPk(id)
        .then(user => {
            done(null, user);
        })
        .catch(err => {
            done(err, null);
        });
});

exports.signin = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(401).json({ message: info.message });
        }
        req.signin(user, (err) => {
            if (err) {
                return next(err);
            }
            const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });
            return res.status(200).json({ token: token });
        });
    })(req, res, next);
};

exports.signout = (req, res) => {
    req.logout();
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

    if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Passwords do not match.' });
    }

    try {
        let user = await User.findOne({ where: { email } });
        if (user) {
            return res.status(400).json({ message: 'Email is already taken' });
        }

        const newUser = await User.create({
            firstName,
            lastName,
            email,
            password: bcrypt.hashSync(password, 10),
            role: 'user'
        });

        const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN
        }, (err, token) => {
            if (err) {
                console.log(err);
                return res.status(500).json({message: 'Server error'});
            }
            return res.status(201).json({ message: 'User created successfully', token: token });
        });

        return res.status(201).json({
            message: 'User created successfully',
            token: token,
            user: {
                id: newUser.id,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email,
                role: newUser.role
            }
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
};


