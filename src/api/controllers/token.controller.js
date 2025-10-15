const { users } = require('../controllers/user.controller')
const jwt = require('jsonwebtoken');
const { message } = require('../../utils/message')
const secrectKey = "ASBJABSJHDB76348BAJSD";

const generateToken = (userObj) => jwt.sign(userObj, secrectKey, {expiresIn: '1h'});

const validateToken = (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        const jwtToken = authHeader && authHeader.split(' ')[1];
        if(!jwtToken) return res.status(401).json(message('UNAUTHORIZED', 'Unauthorized User'));
        jwt.verify(jwtToken, secrectKey, (err, user) => {
            if(err) return res.status(403).json(message('TOKENEXPIRED', 'Token is expired'));
            req.user = user;
            next();
        })
    } catch (error) {
        res.status(401).json(message('UNAUTHORIZED', 'Unauthorized User'))
    }
}

const getToken = (req, res, next) => {
    const { username, password } = req.body;
    const user = users.find(x => x.username == username);
    if(user) {
        res.status(200).json({
            token: generateToken({
                id: user.id,
                username: user.username,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                roles: user.roles,
            }),
            type: 'bearer'
        });
    } else {
        res.status(401).json(message('NOTFOUND', 'Invalid Username or Password'));
    }
}


module.exports = { getToken, validateToken };