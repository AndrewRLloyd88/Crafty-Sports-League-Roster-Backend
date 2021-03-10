"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTeams = void 0;
var db_1 = __importDefault(require("../db"));
var getTeams = function () {
    var sql = 'SELECT * FROM teams';
    return db_1.default.query(sql).then(function (res) {
        console.log(res.rows);
        return res.rows;
    });
};
exports.getTeams = getTeams;
