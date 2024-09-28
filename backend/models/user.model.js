const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true, // Đảm bảo id là duy nhất
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
},{ versionKey: false, _id: false , timestamps: true});

// Tạo Model từ Schema
const User = mongoose.model("User", userSchema);

module.exports = User;
