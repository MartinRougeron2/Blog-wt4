// CRUD for Answer model
const express = require('express')

const router = new express.Router();

const handlers = require('./handlers/answer');


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
 *         description: Answer body object.
 *         in: body
 *         required: true
 *         type: object
 *         properties:
 *           answer:
 *             type: string
 *             example: "This is an answer"
 *             required: true
 *     responses:
 *       200:
 *         description: Successfully created
 *       500:
 *         description: Server error
 */
router.post('/questions/:question_id/answers/', (req, res) => {
    handlers.post(req, res).then(r => r).catch(e => {
        console.error(e);

    });
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

router.get('/questions/:question_id/answers/', (req, res) => {
    handlers.get(req, res).then(r => r).catch(e => {
        console.error(e);

    });
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

router.get('/questions/:question_id/answers/:answer_id/', (req, res) => {
    handlers.getOne(req, res).then(r => r).catch(e => {
        console.error(e);

    });
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
 *         description: Answer body object.
 *         in: body
 *         required: true
 *         type: object
 *         properties:
 *           answer:
 *             type: string
 *             example: "This is an new answer"
 *             required: true
 *     responses:
 *       200:
 *         description: Successfully updated
 *       500:
 *         description: Server error
 */

router.put('/questions/:question_id/answers/:answer_id/', (req, res) => {
    handlers.put(req, res).then(r => r).catch(e => {
        console.error(e);

    });
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

router.delete('/questions/:question_id/answers/:answer_id/', (req, res) => {
    handlers.delete(req, res).then(r => r).catch(e => {
        console.error(e);

    });
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

router.post('/questions/:question_id/answers/:answer_id/approve/', (req, res) => {
    handlers.utils.handleApproveAnswer(req, res).then(r => r).catch(e => {
        console.error(e);

    });
});

// swagger
/**
 * @swagger
 * /api/questions/{question_id}/answers/{answer_id}/upvote:
 *   post:
 *     tags:
 *       - Answers
 *     description: Upvotes a answer
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


router.post('/questions/:question_id/answers/:answer_id/upvote/', (req, res) => {
    handlers.utils.handleUpvoteAnswer(req, res).then(r => r).catch(e => {
        console.error(e);
    });
});

module.exports = router;
