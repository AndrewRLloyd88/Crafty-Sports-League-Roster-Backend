"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlayerByName = exports.getPlayers = void 0;
var db_1 = __importDefault(require("../db"));
var getPlayers = function () {
    var sql = "\n  select players.player_name, players.id, teams.team_name\n  from Players\n Left Join teams on players.team_ID = teams.id\nORDER BY teams.team_name;\n  ";
    return db_1.default.query(sql).then(function (res) {
        return res.rows;
    });
};
exports.getPlayers = getPlayers;
var getPlayerByName = function (term) {
    var sql = "\n  select players.player_name, players.id, teams.team_name\n  from Players\n Left Join teams on players.team_ID = teams.id\n WHERE players.player_name = '" + term + "'\nORDER BY players;\n  ";
    return db_1.default.query(sql).then(function (res) {
        return res.rows;
    });
};
exports.getPlayerByName = getPlayerByName;
