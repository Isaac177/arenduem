const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const passport = require('passport');
const cors = require('cors');
const { User } = require("./models");
const authController = require("./controllers/authController");
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./config/passport')(passport);

app.use(passport.initialize());

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use('/api/auth', authRoutes);

app.get('/users', (req, res) => {
    User.findAll()
        .then(users => res.json(users))
        .catch(err => res.status(500).json({ message: err.message }));
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/api/auth/signup', authController.signup);

app.post('/api/auth/signin', authController.signin);

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
