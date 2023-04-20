const User = require('../../../models/User');
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

async function refreshToken(req, res){
    if (!req.user) {
        return res.status(403).end();
    }
    const newToken = await jwt.sign({
        id: req.user._id,
    }, process.env.JWT_SECRET, {
        expiresIn: '1d'
    });
    res.status(200).json({token: newToken});
}

async function verifyToken(req, res){
    console.log(req.user)
    if (!req.user) {
        return res.status(403).end();
    }
    res.status(200).json({message: "Token is valid"});
}

module.exports = {
    refreshToken,
    verifyToken,
}
