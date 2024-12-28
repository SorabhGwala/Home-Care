const jwt = require('jsonwebtoken');

const SECRET_KEY = "YOUR_SECRET_KEY";

const generateToken = (userId) => {
    const token = jwt.sign({ userId }, SECRET_KEY, { expiresIn: '48h' });
    return token;
};

const getUserIdFromToken = (token) => {
    const decodedData = jwt.verify(token, SECRET_KEY);
    return decodedData.userId;
};

module.exports = {
    generateToken,
    getUserIdFromToken
};
