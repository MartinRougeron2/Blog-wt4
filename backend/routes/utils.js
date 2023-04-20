const express = require('express')

const router = new express.Router();

const handlers = require('./handlers/utils');

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
 *       - name: Login object request body
 *         description: Login object request body.
 *         in: body
 *         required: true
 *         type: object
 *         schema:
 *           properties:
 *             email:
 *               type: string
 *               required: true
 *             password:
 *               type: string
 *               required: true
 *     responses:
 *       200:
 *         description: A successful response
 *       500:
 *         description: Server error
 */

router.post('/auth/login/', (req, res) => {
    handlers.login(req, res).then(r => r).catch(e => {
        console.error(e);

    });
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
 *        - name: Question object request body
 *          description: Question object request body.
 *          in: body
 *          required: true
 *          type: object
 *          schema:
 *           properties:
 *             name:
 *               type: string
 *               required: true
 *               description: User name
 *               example: "John Doe"
 *               minLength: 1
 *               maxLength: 100
 *             email:
 *               type: string
 *               required: true
 *               description: User email
 *               example: "admin@node.com"
 *               minLength: 1
 *               maxLength: 100
 *             password:
 *               type: string
 *               required: true
 *               description: User password
 *               example: "123456"
 *     responses:
 *       200:
 *         description: A successful response
 *       500:
 *         description: Server error
 */

router.post('/auth/register/', (req, res) => {
    handlers.register(req, res).then(r => r).catch(e => {
        console.error(e);

    });
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

router.post('/auth/token/refresh/', (req, res) => {
    handlers.refreshToken(req, res).then(r => r).catch(e => {
        console.error(e);

    });
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
 *     responses:
 *       200:
 *         description: A successful response
 *       500:
 *         description: Server error
 */
router.get('/auth/token/verify/', (req, res) => {
    handlers.verifyToken(req, res).then(r => r).catch(e => {
        console.error(e);

    });
});

module.exports = router;
