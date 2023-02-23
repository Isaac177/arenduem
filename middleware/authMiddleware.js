const jwt = require('jsonwebtoken');
const secretKey = 'secretKey';

exports.verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        req.user = jwt.verify(token, secretKey);
        next();
    } catch (err) {
        return res.status(403).json({ message: 'Invalid token' });
    }
};