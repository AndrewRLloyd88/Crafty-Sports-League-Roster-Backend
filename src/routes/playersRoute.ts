import express, { Router, Request, Response } from 'express';
import {
  getPlayers,
  getPlayerByName,
  deletePlayerById,
  createPlayerWithTeam,
  updatePlayerTeam,
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
  const { playerName, teamID } = req.body;
  createPlayerWithTeam(playerName, teamID)
    .then((newPlayer) => {
      res.send(newPlayer);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/search', (req: Request, res: Response) => {
  const query: any = req.query.name;
  getPlayerByName(query)
    .then((player) => {
      res.send(player);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.put('/update/team', (req: Request, res: Response) => {
  const { player_id, team_id } = req.body;
  updatePlayerTeam(player_id, team_id)
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
