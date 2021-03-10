import * as dotenv from 'dotenv';
dotenv.config();

import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { teamsRoute } from './routes/teamsRoute';
import { playersRoute } from './routes/playersRoute';

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));

app.use('/', teamsRoute);

app.use('/players', playersRoute);

app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});
