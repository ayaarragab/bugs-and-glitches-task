import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export const initializeDatabase = async () => {
    const db = await open({
      filename: './config/taskDB.db',
      driver: sqlite3.Database,
    });
  
    await db.exec(`
      CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT,
        status TEXT DEFAULT 'pending'
      )
    `);
};
