"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var chalk_1 = __importDefault(require("chalk"));
var pg_1 = __importDefault(require("pg"));
// other dependencies
var Client = pg_1.default.Client;
// PG connection setup
var config = process.env.DATABASE_URL ||
    "postgres://" + process.env.DB_USER + ":" + process.env.DB_PASS + "@" + process.env.DB_HOST + ":" + process.env.DB_PORT + "/" + process.env.DB_NAME;
var client = new Client(config);
client.connect(function () {
    runSchemaFiles();
    runSeedFiles();
});
setTimeout(function () {
    client.end();
}, 5000);
// Loads the schema files from db/schema
var runSchemaFiles = function () {
    console.log(chalk_1.default.cyan("-> Loading Schema Files ..."));
    var schemaFilenames = fs_1.default.readdirSync('./db/schema');
    for (var _i = 0, schemaFilenames_1 = schemaFilenames; _i < schemaFilenames_1.length; _i++) {
        var fn = schemaFilenames_1[_i];
        var sql = fs_1.default.readFileSync("./db/schema/" + fn, 'utf8');
        console.log("\t-> Running " + chalk_1.default.green(fn));
        client.query(sql);
    }
};
var runSeedFiles = function () {
    console.log(chalk_1.default.cyan("-> Loading Seeds ..."));
    var schemaFilenames = fs_1.default.readdirSync('./db/seeds');
    for (var _i = 0, schemaFilenames_2 = schemaFilenames; _i < schemaFilenames_2.length; _i++) {
        var fn = schemaFilenames_2[_i];
        var sql = fs_1.default.readFileSync("./db/seeds/" + fn, 'utf8');
        console.log("\t-> Running " + chalk_1.default.green(fn));
        client.query(sql);
    }
};
