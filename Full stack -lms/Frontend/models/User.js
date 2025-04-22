const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Store hashed in real apps
  role: { type: String, enum: ['admin', 'user'], required: true },
});

module.exports = mongoose.model('User', userSchema);
