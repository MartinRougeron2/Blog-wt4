// CRUD for Answer model
const express = require('express')

const router = new express.Router();


// swagger
/**
 * @swagger
 * /api/questions/{question_id}/answers:
 *   post:
 *     tags:
 *       - Answers
 *     description: Create a new answer
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: question_id
 *         description: Question object id.
 *         in: path
 *         required: true
 *         type: string
 *       - name: body
 *         description: Answer body.
 *         in: body
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully created
 *       500:
 *         description: Server error
 */
router.post('questions/:question_id/answers/', (req, res) => {

});

// swagger
/**
 * @swagger
 * /api/questions/{question_id}/answers:
 *   get:
 *     tags:
 *       - Answers
 *     description: Returns all answers
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

router.get('questions/:question_id/answers/', (req, res) => {

});

// swagger
/**
 * @swagger
 * /api/questions/{question_id}/answers/{answer_id}:
 *   get:
 *     tags:
 *       - Answers
 *     description: Returns a answer
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: question_id
 *         description: Question object id.
 *         in: path
 *         required: true
 *         type: string
 *       - name: answer_id
 *         description: Answer object id.
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: A successful response
 *       500:
 *         description: Server error
 */

router.get('questions/:question_id/answers/:answer_id/', (req, res) => {

});

// swagger
/**
 * @swagger
 * /api/questions/{question_id}/answers/{answer_id}:
 *   put:
 *     tags:
 *       - Answers
 *     description: Updates a answer
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: question_id
 *         description: Question object id.
 *         in: path
 *         required: true
 *         type: string
 *       - name: answer_id
 *         description: Answer object id.
 *         in: path
 *         required: true
 *         type: string
 *       - name: body
 *         description: Answer body.
 *         in: body
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully updated
 *       500:
 *         description: Server error
 */

router.put('questions/:question_id/answers/:answer_id/', (req, res) => {

});

// swagger
/**
 * @swagger
 * /api/questions/{question_id}/answers/{answer_id}:
 *   delete:
 *     tags:
 *       - Answers
 *     description: Deletes a answer
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: question_id
 *         description: Question object id.
 *         in: path
 *         required: true
 *         type: string
 *       - name: answer_id
 *         description: Answer object id.
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully deleted
 *       500:
 *         description: Server error
 */

router.delete('questions/:question_id/answers/:answer_id/', (req, res) => {

});

// swagger
/**
 * @swagger
 * /api/questions/{question_id}/answers/{answer_id}/approve:
 *   post:
 *     tags:
 *       - Answers
 *     description: Approves a answer
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: question_id
 *         description: Question object id.
 *         in: path
 *         required: true
 *         type: string
 *       - name: answer_id
 *         description: Answer object id.
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully approved
 *       500:
 *         description: Server error
 */

router.post('questions/:question_id/answers/:answer_id/approve/', (req, res) => {

});

module.exports = router;
