import { DotenvConfigOptions } from 'dotenv';
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));

app.get('/', (req: Request, res: Response) => {
  res.send(`
  <div>
  <h1>Hi There!</h1>
  <div>
  `);
});

app.listen(3000, () => {
  console.log(`Listening on Port ${port}`);
});
