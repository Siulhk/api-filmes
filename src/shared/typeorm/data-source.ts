import "reflect-metadata";
import { DataSource } from "typeorm";
import path from "path";
import Filme from "./entities/Filme";
export const AppDataSource = new DataSource({
 type: "postgres",
 host: "localhost",
 port: 5432,
 username: "postgres",
 password: "docker",
 database: "apifilmes",
 synchronize: true,
 logging: false,
 entities: [Filme],
 migrations: [path.join("src", "shared", "typeorm", "migrations", "*.ts")],
 subscribers: [],
});