"use strict";
var Pool = require('pg').Pool;
var pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
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
module.exports = pool;
