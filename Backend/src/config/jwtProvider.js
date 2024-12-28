import dotenv from 'dotenv';  // Use import instead of require
import jwt from 'jsonwebtoken';

dotenv.config();  // Load environment variables

const SECRET_KEY = process.env.JWT_SECRET || "your_secret_key"; // Ensure your environment variable is named SECRET_KEY

const generateToken = (userId) => {
    const token = jwt.sign({ userId }, SECRET_KEY, { expiresIn: '48h' });
    return token;
};

const getUserIdFromToken = (token) => {
    const decodedToken = jwt.verify(token, SECRET_KEY);
    return decodedToken.userId;
};

export default { generateToken, getUserIdFromToken };
