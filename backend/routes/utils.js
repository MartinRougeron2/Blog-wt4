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
 * /api/auth/login:
 *   post:
 *     tags:
 *       - Auth
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

router.post('auth/login/', (req, res) => {

});

// swagger
/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     tags:
 *       - Auth
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

router.post('auth/register/', (req, res) => {

});

// swagger
/**
 * @swagger
 * /api/auth/token/refresh:
 *  post:
 *     tags:
 *       - Auth
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

router.post('auth/token/refresh/', (req, res) => {

});

// swagger
/**
 * @swagger
 * /api/auth/token/verify:
 *  get:
 *     tags:
 *       - Auth
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
router.get('auth/token/verify/', (req, res) => {

});

module.exports = router;
