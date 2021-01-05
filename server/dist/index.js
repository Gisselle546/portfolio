"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require('dotenv').config();
const port = process.env.PORT || 2000;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const apollo_server_express_1 = require("apollo-server-express");
const typeorm_1 = require("typeorm");
const createSchema_1 = require("./utils/createSchema");
const main = async () => {
    await typeorm_1.createConnection({
        name: "default",
        type: "postgres",
        url: process.env.DATABASE_URL,
        synchronize: true,
        logging: true,
        entities: ["dist/entity/**/*.js"],
        ssl: true,
        extra: {
            ssl: process.env.SSL || false,
        },
    });
    const schema = await createSchema_1.createSchema();
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema,
        context: ({ req, res }) => ({
            req,
            res
        })
    });
    const app = express_1.default();
    app.use(cors_1.default());
    const corsOptions = {
        origin: "http://localhost:3000",
        credentials: true
    };
    apolloServer.applyMiddleware({ app, cors: corsOptions, path: '/api' });
    app.listen(port, () => {
        console.log("App started");
    });
};
main();
