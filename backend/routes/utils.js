const express = require('express')

const router = new express.Router();

// swagger available authorization types
/**
 * @swagger
 * securityDefinitions:
 *   bearerAuth:
 *     type: apiKey
 *     scheme: bearer
 *     in: header
 *     name: Authorization
 *
 */



// swagger
/**
 * @swagger
 * /api/users/login:
 *   post:
 *     tags:
 *       - Users
 *     description: Login user
 *     produces:
 *       - application/json
 *     parameters:
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
 *         description: A successful response
 *       500:
 *         description: Server error
 */

router.post('users/login/', (req, res) => {

});

// swagger
/**
 * @swagger
 * /api/users/register:
 *   post:
 *     tags:
 *       - Users
 *     description: Register user
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
 *         description: A successful response
 *       500:
 *         description: Server error
 */

router.post('users/register/', (req, res) => {

});

// swagger
/**
 * @swagger
 * /api/users/token/refresh:
 *  post:
 *     tags:
 *       - Users
 *     description: Refresh token
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: Refresh token.
 *         in: body
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: A successful response
 *       500:
 *         description: Server error
 */

router.post('users/token/refresh/', (req, res) => {

});

// swagger
/**
 * @swagger
 * /api/users/token/verify:
 *  post:
 *     tags:
 *       - Users
 *     description: Verify token
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: Refresh token.
 *         in: body
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: A successful response
 *       500:
 *         description: Server error
 */
router.post('users/token/verify/', (req, res) => {

});

module.exports = router;
