const User = require('../../../models/User');
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

async function refreshToken(req, res){
    const { token } = req.body;
    const user = await jwt.verify(token, process.env.JWT_SECRET);
    if (!user) {
        return res.status(403).end();
    }
    const newToken = await jwt.sign({
        id: user.id,
    }, process.env.JWT_SECRET, {
        expiresIn: '1d'
    });
    res.status(200).json({token: newToken});
}

async function verifyToken(req, res){
    const { token } = req.body;
    const user = await jwt.verify(token, process.env.JWT_SECRET);
    if (!user) {
        return res.status(403).end();
    }
    res.status(200).json({token});
}

module.exports = {
    refreshToken,
    verifyToken,
}
