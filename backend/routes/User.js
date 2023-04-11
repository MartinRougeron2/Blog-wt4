// CRUD for User model
const express = require('express')

const router = new express.Router();

// swagger
/**
 * @swagger
 * /api/users:
 *   post:
 *     tags:
 *       - Users
 *     description: Create a new user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: name
 *         description: User name.
 *         in: body
 *         required: true
 *         type: string
 *       - name: email
 *         description: User email.
 *         in: body
 *         required: true
 *         type: string
 *       - name: password
 *         description: User password.
 *         in: body
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully created
 *       500:
 *         description: Server error
 */

router.post('users/', (req, res) => {

});

// swagger
/**
 * @swagger
 * /api/users:
 *   get:
 *     tags:
 *       - Users
 *     description: Returns all users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: A successful response
 *       500:
 *         description: Server error
 */

router.get('users/', (req, res) => {

});

// swagger
/**
 * @swagger
 * /api/users/{user_id}:
 *   get:
 *     tags:
 *       - Users
 *     description: Returns a single user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user_id
 *         description: User object id.
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: A successful response
 *       500:
 *         description: Server error
 */

router.get('users/:user_id/', (req, res) => {

});

// swagger
/**
 * @swagger
 * /api/users/{user_id}:
 *   put:
 *     tags:
 *       - Users
 *     description: Updates a single user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user_id
 *         description: User object id.
 *         in: path
 *         required: true
 *         type: string
 *       - name: name
 *         description: User name.
 *         in: body
 *         required: true
 *         type: string
 *       - name: email
 *         description: User email.
 *         in: body
 *         required: true
 *         type: string
 *       - name: password
 *         description: User password.
 *         in: body
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully updated
 *       500:
 *         description: Server error
 */

router.put('users/:user_id/', (req, res) => {

});

// swagger
/**
 * @swagger
 * /api/users/{user_id}:
 *   delete:
 *     tags:
 *       - Users
 *     description: Deletes a single user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user_id
 *         description: User object id.
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully deleted
 *       500:
 *         description: Server error
 */

router.delete('users/:user_id/', (req, res) => {

});

module.exports = router;
