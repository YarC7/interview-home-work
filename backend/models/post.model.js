const mongoose = require("mongoose");

// Định nghĩa Schema cho bài viết
const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false, _id: false, timestamps: true }
);

// Tạo Model từ Schema
const Post = mongoose.model("Post", postSchema);

module.exports = Post;
