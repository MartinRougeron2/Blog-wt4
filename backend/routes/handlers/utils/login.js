const User = require('../../../models/User');
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

async function login(req, res){
    const { email, password } = req.body;

    let user = await User.find({email: email});
    user = user[0];
    if (!user) {
        return res.status(403).end();
    }
    console.log(user);
    // hash was created: const hash = await bcrypt.hash(password, 10);
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
