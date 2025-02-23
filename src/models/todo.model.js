const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  taskName: {
    type: String,
    required: true,
    trim: true
  },
  status: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Todo', todoSchema);