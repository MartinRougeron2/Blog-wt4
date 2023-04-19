// CRUD for Answer model
const express = require('express')

const router = new express.Router();

const handlers = require('handlers/comment');

// swagger
/**
 * @swagger
 * /api/questions/{question_id}/answers/{answer_id}/comments:
 *   post:
 *     tags:
 *       - Comments
 *     description: Create a new comment
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
 *         description: Comment body.
 *         in: body
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully created
 *       500:
 *         description: Server error
 */
router.post('questions/:question_id/answers/:answer_id/comments/', (req, res) => {
    handlers.post(req, res).then(r => r).catch(e => e);
});

// swagger
/**
 * @swagger
 * /api/questions/{question_id}/answers/{answer_id}/comments:
 *  get:
 *     tags:
 *       - Comments
 *     description: Returns all comments
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

router.get('questions/:question_id/answers/:answer_id/comments/', (req, res) => {

});
    handlers.get(req, res).then(r => r).catch(e => e);
// swagger
/**
 * @swagger
 * /api/questions/{question_id}/answers/{answer_id}/comments/{comment_id}:
 *   get:
 *     tags:
 *       - Comments
 *     description: Returns a comment
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
 *       - name: comment_id
 *         description: Comment object id.
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: A successful response
 *       500:
 *         description: Server error
 */

router.get('questions/:question_id/answers/:answer_id/comments/:comment_id/', (req, res) => {
    handlers.getOne(req, res).then(r => r).catch(e => e);
});

// swagger
/**
 * @swagger
 * /api/questions/{question_id}/answers/{answer_id}/comments/{comment_id}:
 *   put:
 *     tags:
 *       - Comments
 *     description: Update a comment
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
 *       - name: comment_id
 *         description: Comment object id.
 *         in: path
 *         required: true
 *         type: string
 *       - name: body
 *         description: Comment body.
 *         in: body
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully updated
 *       500:
 *         description: Server error
 */

router.put('questions/:question_id/answers/:answer_id/comments/:comment_id/', (req, res) => {
    handlers.put(req, res).then(r => r).catch(e => e);
});

// swagger
/**
 * @swagger
 * /api/questions/{question_id}/answers/{answer_id}/comments/{comment_id}:
 *   delete:
 *     tags:
 *       - Comments
 *     description: Delete a comment
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
 *       - name: comment_id
 *         description: Comment object id.
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully deleted
 *       500:
 *         description: Server error
 */

router.delete('questions/:question_id/answers/:answer_id/comments/:comment_id/', (req, res) => {
    handlers.delete(req, res).then(r => r).catch(e => e);
});

module.exports = router;
