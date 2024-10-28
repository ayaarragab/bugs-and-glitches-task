import express from 'express'; // Import the express module
import process from 'process'; // Import the process module
import dotenv from 'dotenv'; // Import the dotenv module to load environment variables
import { initializeDatabase } from './config/db.js'; // Import the initializeDatabase function from db.js
import router from './routes/routes.js'; // Import the router from routes.js

dotenv.config(); // Load environment variables from a .env file

const app = express(); // Create an instance of an Express application

app.use(express.json()); // Middleware to parse JSON bodies

const PORT = process.env.PORT || 300; // Set the port from environment variables or default to 300

app.use('/', router); // Use the imported router for handling routes starting from '/'

app.listen(PORT, async () => { // Start the server and listen on the specified port
  const db = await initializeDatabase(); // Initialize the database and wait for it to complete
  app.locals.db = db; // Store the database instance in the app's locals
  console.log(`Hello on port ${PORT}`); // Log a message indicating the server is running
});
