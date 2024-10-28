import sqlite3 from 'sqlite3'; // Import the sqlite3 module
import { open } from 'sqlite'; // Import the open function from the sqlite module

export const initializeDatabase = async () => { // Export an asynchronous function to initialize the database
  const db = await open({ // Open a connection to the database
    filename: './config/taskDB.db', // Specify the database file location
    driver: sqlite3.Database, // Specify the database driver
  });
  
  await db.exec(`
    CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    completed TEXT DEFAULT 'pending'
    )
  `); // Execute SQL commands to set up the database schema
  return db; // Return the database connection
};
