const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/userRoutes');
const picturesRoutes = require('./routes/picturesRoutes');
const interestRoutes = require('./routes/interestRoutes');
const propertyRoutes = require('./routes/propertyRoutes');
const passport = require('passport');
const cors = require('cors');
const { User, HousingStatus } = require("./models");
const authController = require("./controllers/authController");
const userController = require("./controllers/userController");
const interestController = require("./controllers/interestController");
const {createProperty} = require("./controllers/propertyController");
const propertyController = require("./controllers/propertyController");
require('dotenv').config();
require('./config/passport')(passport);
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use('/uploads', express.static('uploads'));
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/api/auth', authRoutes);

// Users routes
app.get('/users', (req, res) => {
    User.findAll()
        .then(users => res.json(users))
        .catch(err => res.status(500).json({ message: err.message }));
});
app.use("/users", userRoutes);
app.post('/api/auth/signup', authController.signup);
app.post('/api/auth/signin', authController.signin);
app.get('/api/auth/signout', authController.signout);
app.get('/users/:userId', userController.getUserById);
app.put('/users/:userId', userController.updateUserById);
app.put('/users/role/:userId', userController.updateIsOwner);
app.get('/housing-status/:userId', userController.getHousingStatus);

// Pictures routes

app.post('/users/:userId/pictures', picturesRoutes);
app.get('/users/:userId/pictures', picturesRoutes);
app.delete('/users/:userId/pictures/:id', picturesRoutes);
app.put('/users/:userId/pictures/:id', picturesRoutes);

// Interests routes

app.post('/users/:userId/interests', interestController.addInterest, interestRoutes);
app.delete('/users/:userId/interests/:id', interestController.removeInterest, interestRoutes);
app.get('/users/:userId/interests', interestController.getInterests, interestRoutes);

// Properties routes

app.post('/users/:userId/properties', propertyController.createProperty, propertyRoutes);
app.get('/users/:userId/properties', propertyController.getProperties, propertyRoutes);

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



