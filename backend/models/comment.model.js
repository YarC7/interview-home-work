const mongoose = require("mongoose");

// Định nghĩa Schema cho bài viết (comment)
const commentSchema = new mongoose.Schema(
  {
    userId: {
      type: Number,
      required: true,
    },
    postId: {
      type: Number,
      required: true,
    },
    id: {
      type: Number,
      required: true,
      unique: true, // Đảm bảo id là duy nhất
    },
    content: {
      type: String,
      required: true,
    },
  }
);

// Tạo Model từ Schema
const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
