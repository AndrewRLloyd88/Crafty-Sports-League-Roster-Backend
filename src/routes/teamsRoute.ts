import express, { Router, Request, Response } from 'express';
import { getTeams, getPlayersByTeamID } from '../db/queries/teamsQueries';
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

router.get('/:id', (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  getPlayersByTeamID(id)
    .then((players) => {
      res.send(players);
    })
    .catch((err) => {
      console.log(err);
    });
});

export { router as teamsRoute };
