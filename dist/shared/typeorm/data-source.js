"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const path_1 = __importDefault(require("path"));
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "docker",
    database: "apifilmes",
    synchronize: true, // ⚠ apenas em desenvolvimento
    logging: false,
    entities: [],
    migrations: [path_1.default.join("src", "shared", "typeorm", "migrations", "*.ts")],
    subscribers: [],
});
//# sourceMappingURL=data-source.js.map