"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTeamById = exports.createTeam = exports.getPlayersByTeamID = exports.getTeams = void 0;
var db_1 = __importDefault(require("../db"));
var getTeams = function () {
    var sql = 'SELECT * FROM teams;';
    return db_1.default.query(sql).then(function (res) {
        return res.rows;
    });
};
exports.getTeams = getTeams;
var getPlayersByTeamID = function (id) {
    var sql = "\n  select players.player_name, players.id\n  from Players\n Left Join teams on players.team_ID = teams.id\n WHERE players.team_ID = '" + id + "'\nORDER BY players;\n  ";
    return db_1.default.query(sql).then(function (res) {
        return res.rows;
    });
};
exports.getPlayersByTeamID = getPlayersByTeamID;
var createTeam = function (name) {
    var sql = "\n  insert into teams (team_name) values ($1) RETURNING *;\n  ";
    return db_1.default.query(sql, [name]).then(function (response) {
        return response.rows;
    });
};
exports.createTeam = createTeam;
var deleteTeamById = function (id) {
    var sql = "\n  DELETE FROM teams WHERE id=" + id + ";\n";
    return db_1.default.query(sql).then(function (res) {
        return res;
    });
};
exports.deleteTeamById = deleteTeamById;
