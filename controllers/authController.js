const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const sequelize = require('../models').sequelize;
const User = require('../models').User;




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

exports.login = passport.authenticate('local', (error, user, info, req, res) => {
    if (error) return res.status(400).json({ error });
    if (!user) return res.status(400).json({ message: info.message });

    req.login(user, error => {
        if (error) return res.status(400).json({ error });
        return res.status(200).json({ message: 'Successful login.' });
    });
});

exports.logout = (req, res) => {
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


exports.register = (req, res) => {
    const { firstName, lastName, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Passwords do not match.' });
    }

    try {
        User.findOne({where: {email: email}})
            .then(user => {
                if (user) {
                    return res.status(400).json({message: 'Email is already taken'});
                } else {
                    const newUser = new User();
                    newUser.firstName = firstName;
                    newUser.lastName = lastName;
                    newUser.email = email;
                    newUser.password = password;
                    newUser.role = 'user';
                    newUser.save();
                    return res.status(201).json({successMessage: 'Registration successful. Please sign in.'});
                }
            })
            .catch(err => {
                console.log(err);
                return res.status(500).json({error: 'Server error'});
            });
    } catch (err) {
        console.log(err);
        return res.status(500).json({error: 'Server error'});
    }
};

