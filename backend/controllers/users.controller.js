const axios = require('axios');
const User = require('../models/user.model');

exports.getAllUsers = async (req, res) => {
  try {
    // const users = await axios.get(`https://jsonplaceholder.typicode.com/users`);

    const users = await User.find(); 
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users' });
  }
};


exports.getUserById = async (req, res) => {
  try {
    const user = await User.findOne({ id: req.params.id }); 
    if (!user) return res.status(404).json({ message: 'user not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user' });
  }
};

