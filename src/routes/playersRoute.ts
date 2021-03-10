import express, { Router, Request, Response } from 'express';
import { getPlayers } from '../db/queries/playersQueries';
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  getPlayers()
    .then((players) => {
      res.send(players);
    })
    .catch((err) => {
      console.log(err);
    });
});

export { router as playersRoute };
