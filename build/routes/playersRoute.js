"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.playersRoute = void 0;
var express_1 = __importDefault(require("express"));
var playersQueries_1 = require("../db/queries/playersQueries");
var router = express_1.default.Router();
exports.playersRoute = router;
router.get('/', function (req, res) {
    playersQueries_1.getPlayers()
        .then(function (players) {
        res.send(players);
    })
        .catch(function (err) {
        console.log(err);
    });
});
router.post('/', function (req, res) {
    var _a = req.body, playerName = _a.playerName, teamID = _a.teamID;
    console.log(playerName, teamID);
    playersQueries_1.createPlayerWithTeam(playerName, teamID)
        .then(function (newPlayer) {
        res.send(newPlayer);
    })
        .catch(function (err) {
        console.log(err);
    });
});
router.get('/search', function (req, res) {
    var query = req.query.name;
    playersQueries_1.getPlayerByName(query)
        .then(function (player) {
        res.send(player);
    })
        .catch(function (err) {
        console.log(err);
    });
});
router.put('/update/team', function (req, res) {
    var _a = req.body, player_id = _a.player_id, team_id = _a.team_id;
    playersQueries_1.updatePlayerTeam(player_id, team_id)
        .then(function (player) {
        res.send(player);
    })
        .catch(function (err) {
        console.log(err);
    });
});
router.delete('/:id', function (req, res) {
    var id = parseInt(req.params.id);
    playersQueries_1.deletePlayerById(id)
        .then(function (player) {
        res.send(player);
    })
        .catch(function (err) {
        console.log(err);
    });
});
