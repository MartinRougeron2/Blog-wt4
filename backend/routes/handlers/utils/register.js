const User = require('../../../models/User');
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

async function register(req, res){
    const { name, email, password } = req.body;

    const hash = await bcrypt.hash(password, 10);


    const user = new User({
        name,
        email,
        password: hash,
    });

    try {
        await user.save();
    } catch (error) {
        console.log(error);
        switch (error.code) {
            case 11000:
                return res.status(400).json({error: "Email already exists"});
            default:
                return res.status(500).json({error: "Something went wrong"});
        }
    }


    const token = await jwt.sign({
        id: user._id,
    }, process.env.JWT_SECRET, {
        expiresIn: '1d'
    });
    res.status(201).json({token});
}

module.exports = register;
