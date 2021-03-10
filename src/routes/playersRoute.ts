import express, { Router, Request, Response } from 'express';
import {
  getPlayers,
  getPlayerByName,
  deletePlayerById,
  createPlayerWithTeam,
} from '../db/queries/playersQueries';
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

router.post('/', (req: Request, res: Response) => {
  const { player_name, team_ID } = req.body;
  createPlayerWithTeam(player_name, team_ID)
    .then((newPlayer) => {
      res.send(newPlayer);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/:id', (req: Request, res: Response) => {
  const query = req.params.id;
  getPlayerByName(query)
    .then((player) => {
      res.send(player);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.delete('/:id', (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  deletePlayerById(id)
    .then((player) => {
      res.send(player);
    })
    .catch((err) => {
      console.log(err);
    });
});

export { router as playersRoute };
