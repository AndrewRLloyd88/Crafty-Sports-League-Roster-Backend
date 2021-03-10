"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPlayerWithTeam = exports.deletePlayerById = exports.getPlayerByName = exports.getPlayers = void 0;
var db_1 = __importDefault(require("../db"));
//get all players and their associated teams
var getPlayers = function () {
    var sql = "\n  select players.player_name, players.id, teams.team_name\n  from Players\n Left Join teams on players.team_ID = teams.id\nORDER BY teams.team_name;\n  ";
    return db_1.default.query(sql).then(function (res) {
        return res.rows;
    });
};
exports.getPlayers = getPlayers;
//search for an individual player by name
var getPlayerByName = function (term) {
    var sql = "\n  select players.player_name, players.id, teams.team_name\n  from Players\n Left Join teams on players.team_ID = teams.id\n WHERE players.player_name = '" + term + "'\nORDER BY players;\n  ";
    return db_1.default.query(sql).then(function (res) {
        return res.rows;
    });
};
exports.getPlayerByName = getPlayerByName;
//delete player using their ID
var deletePlayerById = function (id) {
    var sql = "\n  DELETE FROM players WHERE id=" + id + ";\n";
    return db_1.default.query(sql).then(function (res) {
        return res;
    });
};
exports.deletePlayerById = deletePlayerById;
//TODO Create Player and type player properly
var createPlayerWithTeam = function (player_name, team_id) {
    //TODO test out these values and modify as needed
    var sql = "\n  insert into players (player_name, team_ID) values ($1, $2) RETURNING *;\n  ";
    return db_1.default.query(sql, [player_name, team_id]).then(function (response) {
        return response.rows;
    });
};
exports.createPlayerWithTeam = createPlayerWithTeam;
