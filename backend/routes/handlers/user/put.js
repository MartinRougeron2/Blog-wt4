const User = require('../../../models/User');

const bcrypt = require("bcrypt")

async function updateUser(req, res) {
    const { id } = req.params;
    const { username, password } = req.body;

    const hash = await bcrypt.hash(password, 10);

    const user = await User.findByIdAndUpdate(id, {
        username,
        password: hash,
    }, { new: true });

    if (!user) {
        return res.status(404).end();
    }
    res.status(200).json(user);
}

module.exports = updateUser;
