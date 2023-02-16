const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const passport = require('passport');
const sequelize = require('./models').sequelize;
sequelize.log = console.log;


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
