"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlayers = void 0;
var db_1 = __importDefault(require("../db"));
var getPlayers = function () {
    var sql = "\n  select players.player_name, teams.team_name\n  from Players\n  Join teams on players.team_ID = teams.id;\n  ";
    return db_1.default.query(sql).then(function (res) {
        return res.rows;
    });
};
exports.getPlayers = getPlayers;
