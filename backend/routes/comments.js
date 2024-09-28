const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment.controller');

router.get('/', commentController.getAllComments);
router.get('/:postId', commentController.getCommentsByPostId);

module.exports = router;