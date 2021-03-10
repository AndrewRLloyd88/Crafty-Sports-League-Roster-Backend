import express, { Router, Request, Response } from 'express';
import { getTeams } from '../db/queries/teamsQueries';
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  getTeams()
    .then((teams) => {
      res.send(teams);
    })
    .catch((err) => {
      console.log(err);
    });
});

export { router as teamsRoute };
