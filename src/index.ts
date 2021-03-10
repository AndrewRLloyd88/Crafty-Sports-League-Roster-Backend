import * as dotenv from 'dotenv';
dotenv.config();

console.log(process.env.DB_USER);

import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import { teamsRoute } from './routes/teamsRoute';
import { playersRoute } from './routes/playersRoute';

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));

app.use('/', teamsRoute);

app.use('/players', playersRoute);

app.listen(3000, () => {
  console.log(`Listening on Port ${port}`);
});
