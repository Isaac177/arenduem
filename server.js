const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const passport = require('passport');
const cors = require('cors');
const { User } = require("./models");
const authController = require("./controllers/authController");
require('dotenv').config();
require('./config/passport')(passport);
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/api/auth', authRoutes);
app.get('/users', (req, res) => {
    User.findAll()
        .then(users => res.json(users))
        .catch(err => res.status(500).json({ message: err.message }));
});
app.post('/api/auth/signup', authController.signup);
app.post('/api/auth/signin', authController.signin);
app.get('/api/auth/signout', authController.signout);

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


