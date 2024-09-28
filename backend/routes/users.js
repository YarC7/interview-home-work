const express = require('express');
const router = express.Router();
const userController = require('../controllers/users.controller');

// Route cho các bài viết
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);

module.exports = router;
