import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { router } from './routes';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

export { app };
