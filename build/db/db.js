"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
var pool = new pg_1.Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || ''),
});
pool.connect(function () {
    console.log('connected to database');
});
pool.on('close', function () {
    pool.removeAllListeners();
    console.log('removed all listeners');
});
pool.on('end', function () {
    pool.end();
    console.log('closed database connection');
});
exports.default = pool;
