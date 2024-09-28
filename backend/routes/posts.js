const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller');

// Route cho các bài viết
router.get('', postController.getAllPosts);
router.get('/:id', postController.getPostById);
router.get('/:postId/comments', postController.getCommentsForPost);

module.exports = router;