import createUser from './create';
import updateUser  from './put';
import deleteUser from './delete';
import {getUser, getUsers} from './get';

export default {
    post: createUser,
    put: updateUser ,
    delete: deleteUser,
    get: getUser,
    getOne: getUsers,
    utils: {
    }
}
