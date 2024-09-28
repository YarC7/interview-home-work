const axios = require('axios');
const Comment = require('../models/comment.model');

exports.getAllComments = async (req, res) => {
  try {
    // const comments = await axios.get(`https://jsonplaceholder.typicode.com/comments`);

    const comments = await Comment.find();
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching comments' });
  }
};

exports.getCommentsByPostId = async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching comments' });
  }
};

