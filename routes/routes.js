import express from 'express';
import { getAllTodoItems, createTodoItem, updateTodoItem, getTodoItem, deleteTodoItem } from '../controllers/todoController.js';

const router = express.Router();

// Get all tasks
router.get('/todos', getAllTodoItems);

// Get a specific task by ID
router.get('/todos/:todo_id', getTodoItem);

// Create a new task
router.post('/todos', createTodoItem);

// Update a specific task by ID
router.put('/todos/:todo_id', updateTodoItem);

// Delete a specific task by ID
router.delete('/todos/:todo_id', deleteTodoItem);

export default router;
