const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo.controller');

// Get all tasks
router.get('/', todoController.getAllTasks);

// Create a new task
router.post('/', todoController.createTask);

// Update task status
router.patch('/:id', todoController.updateTask);

// Delete task
router.delete('/:id', todoController.deleteTask);

module.exports = router;