import express, { json } from 'express';
import cors from 'cors';
import './database/connection';

const app = express();
app.use(cors());
app.use(json());

app.listen(3333);
