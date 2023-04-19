const createUser = require('./create');
const updateUser  = require('./put');
const deleteUser = require('./delete');
const {getUser, getUsers} = require('./get');

module.exports = {
    post: createUser,
    put: updateUser ,
    delete: deleteUser,
    get: getUser,
    getOne: getUsers,
    utils: {
    }
}
