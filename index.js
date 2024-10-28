import express from 'express';
import process from 'process';
import dotenv from 'dotenv';
import { initializeDatabase } from './config/db.js';
import router from './routes/routes.js';
dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 300;

app.use('/', router);

app.listen(PORT, async () => {
  const db = await initializeDatabase();
  app.locals.db = db;
  console.log(`Hello on port ${PORT}`);
})
