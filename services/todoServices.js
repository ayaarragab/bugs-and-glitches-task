export const getAllTasks = async (db) => {
    try {
      const tasks = await db.all(`SELECT * FROM tasks`); // Retrieve all tasks from the database
      return tasks; // Return the list of tasks
    } catch (error) {
      console.error('Error retrieving tasks:', error); // Log any errors
      throw error; // Rethrow the error to be handled by the caller
    }
};
  
export const getATask = async (db, id) => { // Added id parameter for specific task retrieval
    try {
      const task = await db.get(`SELECT * FROM tasks WHERE id = ?`, [id]); // Retrieve a specific task by id
      return task; // Return the task
    } catch (error) {
      console.error('Error retrieving task:', error); // Log any errors
      throw error; // Rethrow the error to be handled by the caller
    }
};

export const updateTask = async (db, id, updates) => {
    try {
        const fields = Object.keys(updates).map(key => `${key} = ?`).join(', '); // Create a string of fields to update
        const values = Object.values(updates); // Get the values to update
        values.push(id); // Add the id to the values array

        await db.run(`UPDATE tasks SET ${fields} WHERE id = ?`, values); // Execute the update query
        return { id, ...updates }; // Return the updated task
    } catch (error) {
        console.error('Error updating task:', error); // Log any errors
        throw error; // Rethrow the error to be handled by the caller
    }
};

export const deleteTask = async (db, id) => {
    try {
        await db.run(`DELETE FROM tasks WHERE id = ?`, [id]); // Execute the delete query
        return { message: 'Task deleted successfully' }; // Return a success message
    } catch (error) {
        console.error('Error deleting task:', error); // Log any errors
        throw error; // Rethrow the error to be handled by the caller
    }
};

export const createTask = async (db, { title, description = '', completed = false }) => {
    try {
        const result = await db.run(
            `INSERT INTO tasks (title, description, status) VALUES (?, ?, ?)`, // Execute the insert query
            [title, description, completed] // Provide the values for the new task
        );
        return { id: result.lastID, title, description, completed }; // Return the newly created task with its id
    } catch (error) {
        console.error('Error creating task:', error); // Log any errors
        throw error; // Rethrow the error to be handled by the caller
    }
};
