const User = require('../../../models/User');

const bcrypt = require("bcrypt")

async function createUser(req, res) {
    const { name, email, password } = req.body;

    const hash = await bcrypt.hash(password, 10);


    const user = new User({
        name,
        email,
        password: hash,
    });
    await user.save();
    res.status(201).json(user);
}

module.exports = createUser;
