// CRUD for Question model
const express = require('express')

const router = new express.Router();

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
 *         description: Successfully created
 *       500:
 *         description: Server error
 */

router.post('questions/', (req, res) => {

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
 *       500:
 *         description: Server error
 */

router.get('questions/', (req, res) => {

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

router.get('questions/:question_id/', (req, res) => {

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

router.put('questions/:question_id/', (req, res) => {

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

router.put('questions/:question_id/', (req, res) => {

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

router.delete('questions/:question_id/', (req, res) => {

});

module.exports = router;
