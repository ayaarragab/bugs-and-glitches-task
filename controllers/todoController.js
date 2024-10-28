import { getAllTasks, getATask, updateTask, deleteTask, createTask } from '../services/todoServices.js';
import serverErrorsHandler from '../utils/errorHandler.js';

export const getAllTodoItems = async (request, response) => {
    try {
        const db = request.app.locals.db;
        const tasks = await getAllTasks(db);
        if (tasks) {
            response.status(200).json(tasks);
        } else {
            response.status(404).json({message: `You've not any todos yet`});
        }
    } catch (error) {
        serverErrorsHandler(response, error);
    }
}

export const createTodoItem = async (request, response) => {
    try {
        const db = request.app.locals.db;
        const task = await createTask(db, request.body);
        response.status(200).json(task);
    } catch (error) {
        serverErrorsHandler(response, error);
    }
}

export const updateTodoItem = async (request, response) => {
    try {
        const db = request.app.locals.db;
        
        const task = await updateTask(db, request.params.todo_id, request.body);
        response.status(200).json(task);
    } catch (error) {
        serverErrorsHandler(response, error);
    }
}

export const getTodoItem = async (request, response) => {
    try {
        const db = request.app.locals.db;
        const task = await getATask(db, request.params.todo_id);
        if (task) {
            response.status(200).json(task);
        } else {
            response.status(404).json('This task does not exist');
        }
    } catch (error) {
        serverErrorsHandler(response, error);
    }
}

export const deleteTodoItem = async (request, response) => {
    try {
        const db = request.app.locals.db;
        await deleteTask(db, request.params.todo_id);
        response.status(200).json({message: 'Task deleted successfully'});
    } catch (error) {
        serverErrorsHandler(response, error);
    }
}
