const User = require('../../../models/User');
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

async function login(req, res){
    const { username, password } = req.body;

    const user = await User.find({username: username});
    if (!user) {
        return res.status(403).end();
    }
    const hash = await bcrypt.compare(password, user.password);
    if (!hash) {
        return res.status(403).end();
    }
    const token = await jwt.sign({
        id: user._id,
    }, process.env.JWT_SECRET, {
        expiresIn: '1d'
    });
    res.status(200).json({token});
}

module.exports = login;
