"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var app = express_1.default();
var port = process.env.PORT || 3000;
app.use(morgan_1.default('dev'));
app.get('/', function (req, res) {
    res.send("\n  <div>\n  <h1>Hi There!</h1>\n  <div>\n  ");
});
app.listen(3000, function () {
    console.log("Listening on Port " + port);
});
