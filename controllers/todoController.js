import { getAllTasks, getATask, updateTask, deleteTask, createTask } from '../services/todoServices.js'; // Importing task-related service functions
import serverErrorsHandler from '../utils/errorHandler.js'; // Importing error handler utility

// Controller function to get all todo items
export const getAllTodoItems = async (request, response) => {
    try {
        const db = request.app.locals.db; // Accessing the database instance from the app locals
        const tasks = await getAllTasks(db); // Fetching all tasks from the database
        if (tasks) {
            response.status(200).json(tasks); // Sending a 200 response with the tasks if found
        } else {
            response.status(404).json({message: `You've not any todos yet`}); // Sending a 404 response if no tasks are found
        }
    } catch (error) {
        serverErrorsHandler(response, error); // Handling any server errors
    }
}

// Controller function to create a new todo item
export const createTodoItem = async (request, response) => {
    try {
        const db = request.app.locals.db; // Accessing the database instance from the app locals
        const task = await createTask(db, request.body); // Creating a new task with the request body data
        response.status(200).json(task); // Sending a 200 response with the created task
    } catch (error) {
        serverErrorsHandler(response, error); // Handling any server errors
    }
}

// Controller function to update an existing todo item
export const updateTodoItem = async (request, response) => {
    try {
        const db = request.app.locals.db; // Accessing the database instance from the app locals
        const task = await updateTask(db, request.params.todo_id, request.body); // Updating the task with the given ID and request body data
        response.status(200).json(task); // Sending a 200 response with the updated task
    } catch (error) {
        serverErrorsHandler(response, error); // Handling any server errors
    }
}

// Controller function to get a specific todo item by ID
export const getTodoItem = async (request, response) => {
    try {
        const db = request.app.locals.db; // Accessing the database instance from the app locals
        const task = await getATask(db, request.params.todo_id); // Fetching the task with the given ID from the database
        if (task) {
            response.status(200).json(task); // Sending a 200 response with the task if found
        } else {
            response.status(404).json('This task does not exist'); // Sending a 404 response if the task is not found
        }
    } catch (error) {
        serverErrorsHandler(response, error); // Handling any server errors
    }
}

// Controller function to delete a specific todo item by ID
export const deleteTodoItem = async (request, response) => {
    try {
        const db = request.app.locals.db; // Accessing the database instance from the app locals
        await deleteTask(db, request.params.todo_id); // Deleting the task with the given ID from the database
        response.status(200).json({message: 'Task deleted successfully'}); // Sending a 200 response with a success message
    } catch (error) {
        serverErrorsHandler(response, error); // Handling any server errors
    }
}
