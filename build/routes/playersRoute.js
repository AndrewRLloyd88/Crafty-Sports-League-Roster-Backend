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
