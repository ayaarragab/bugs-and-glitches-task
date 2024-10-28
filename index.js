import express from 'express';
import process from 'process';
import dotenv from 'dotenv';
import { initializeDatabase } from './config/db';

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 300;

app.use('/', router);

app.listen(PORT, async () => {
  await initializeDatabase();
  console.log(`Hello on port ${PORT}`);
})
