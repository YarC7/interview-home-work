const axios = require("axios");
const Post = require("../models/post.model");
const Comment = require("../models/comment.model");

exports.getAllPosts = async (req, res) => {
  const searchQuery = req.query.q;
  try {
    let posts;

    if (searchQuery) {

      posts = await Post.find({
        $or: [
          { title: { $regex: searchQuery, $options: "i" } }, 
          { content: { $regex: searchQuery, $options: "i" } }, 
        ],
      });
    } else {
 
      posts = await Post.find();
    }

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving posts", error });
  }
};


exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findOne({ id: req.params.id }); 
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: "Error fetching post" });
  }
};

exports.getCommentsForPost = async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching comments for post" });
  }
};
