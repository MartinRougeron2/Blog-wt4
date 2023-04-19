// CRUD for Question model
const express = require('express')


const router = new express.Router();

const handlers = require('handlers/question');

// swagger
/**
 * @swagger
 * /api/questions:
 *   post:
 *     tags:
 *       - Questions
 *     description: Create a new question
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Question object request body
 *         description: Question object request body.
 *         in: body
 *         required: true
 *         type: object
 *         schema:
 *           properties:
 *             title:
 *               type: string
 *               required: true
 *               description: Question title
 *               example: "How to create a REST API?"
 *               minLength: 1
 *               maxLength: 100
 *               pattern: "^[a-zA-Z0-9 ]+$"
 *             body:
 *               type: string
 *               required: true
 *               description: Question body
 *               example: "I want to create a REST API using Node.js and Express.js. How can I do that?"
 *               minLength: 1
 *               maxLength: 1000
 *               pattern: "^[a-zA-Z0-9 ]+$"
 *               default: ""
 *     responses:
 *       201:
 *         description: Successfully created
 *         schema:
 *           $ref: '#/definitions/Question'
 *       500:
 *         description: Server error
 */

router.post('/questions/', (req, res) => {
    handlers.post(req, res).then(r => r).catch(e => e);
});

// swagger
/**
 * @swagger
 * /api/questions:
 *   get:
 *     tags:
 *       - Questions
 *     description: Returns all questions
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: A successful response
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/Question'
 *             type: object
 *       500:
 *         description: Server error
 */

router.get('/questions/', (req, res) => {
    handlers.get(req, res).then(r => r).catch(e => e);
});

// swagger
/**
 * @swagger
 * /api/questions/{question_id}:
 *   get:
 *     tags:
 *       - Questions
 *     description: Returns a question
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: question_id
 *         description: Question object id.
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: A successful response
 *       500:
 *         description: Server error
 */

router.get('/questions/:question_id/', (req, res) => {
    handlers.getOne(req, res).then(r => r).catch(e => e);
});

// swagger
/**
 * @swagger
 * /api/questions/{question_id}:
 *   put:
 *     tags:
 *       - Questions
 *     description: Update a question
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: question_id
 *         description: Question object id.
 *         in: path
 *         required: true
 *         type: string
 *       - name: title
 *         description: Question title.
 *         in: body
 *         required: true
 *         type: string
 *       - name: body
 *         description: Question body.
 *         in: body
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully updated
 *       500:
 *         description: Server error
 */

router.put('/questions/:question_id/', (req, res) => {
    handlers.put(req, res).then(r => r).catch(e => e);
});

// swagger
/**
 * @swagger
 * /api/questions/{question_id}:
 *   delete:
 *     tags:
 *       - Questions
 *     description: Delete a question
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: question_id
 *         description: Question object id.
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully deleted
 *       500:
 *         description: Server error
 */

router.put('/questions/:question_id/', (req, res) => {
    handlers.put(req, res).then(r => r).catch(e => e);
});

// swagger
/**
 * @swagger
 * /api/questions/{question_id}:
 *   delete:
 *     tags:
 *       - Questions
 *     description: Delete a question
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: question_id
 *         description: Question object id.
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully deleted
 *       500:
 *         description: Server error
 */

router.delete('/questions/:question_id/', (req, res) => {
    handlers.delete(req, res).then(r => r).catch(e => e);
});

module.exports = router;
