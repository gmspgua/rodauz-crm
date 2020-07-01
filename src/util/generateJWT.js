const jwt = require('jsonwebtoken');

export const generateToken = (user) => {

    var token = jwt.sign({ user }, "Avila@00", {
        expiresIn: 3000000000
    });
    return token;
}


export const verifyToken = (token) => {
    return jwt.verify(token, 'Avila@00');
}