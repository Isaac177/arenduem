const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const passport = require('passport');
const {User} = require("./models");


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());

app.use('/api/auth', authRoutes);

app.get('/users', (req, res) => {
    User.findAll()
        .then(users => res.json(users))
        .catch(err => res.status(500).json({ message: err.message }));
});

const PORT = 9000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});
