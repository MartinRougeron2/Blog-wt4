const User = require('../../../models/User');

async function deleteUser(req, res) {
    const { id } = req.params;

    await User.findByIdAndDelete(id);
    res.status(204).end();
}

module.exports = deleteUser;
