const User = require('../../../models/User');
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

async function register(req, res){
    const { username, password } = req.body;

    const hash = await bcrypt.hash(password, 10);

    const user = new User({
        username,
        password: hash,
    });
    await user.save();
    const token = await jwt.sign({
        id: user._id,
    }, process.env.JWT_SECRET, {
        expiresIn: '1d'
    });
    res.status(201).json({token});
}

module.exports = register;
