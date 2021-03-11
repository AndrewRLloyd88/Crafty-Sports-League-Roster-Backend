"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.teamsRoute = void 0;
var express_1 = __importDefault(require("express"));
var teamsQueries_1 = require("../db/queries/teamsQueries");
var router = express_1.default.Router();
exports.teamsRoute = router;
router.get('/', function (req, res) {
    teamsQueries_1.getTeams()
        .then(function (teams) {
        res.send(teams);
    })
        .catch(function (err) {
        console.log(err);
    });
});
router.get('/:id', function (req, res) {
    var id = parseInt(req.params.id);
    teamsQueries_1.getPlayersByTeamID(id)
        .then(function (players) {
        res.send(players);
    })
        .catch(function (err) {
        console.log(err);
    });
});
