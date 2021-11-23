"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var dbRoutes_1 = __importDefault(require("./routes/dbRoutes"));
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var app = (0, express_1.default)();
var port = 3000;
(0, typeorm_1.createConnection)();
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/geolocate", dbRoutes_1.default);
app.listen(port, function () {
    console.log("Server express escuchando en http://localhost:" + port);
});
