"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
require("reflect-metadata");
const port = process.env.PORT || 2000;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const apollo_server_express_1 = require("apollo-server-express");
const typeorm_1 = require("typeorm");
const createSchema_1 = require("./utils/createSchema");
const main = async () => {
    const app = express_1.default();
    app.use(cors_1.default());
    await typeorm_1.createConnection({
        name: "portfoliogise",
        type: "postgres",
        url: process.env.DATABASE_URL,
        synchronize: true,
        logging: true,
        entities: ["dist/entity/**/*.js"],
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
    apolloServer.applyMiddleware({ app, path: '/api' });
    app.listen(port, () => {
        console.log("App started");
    });
};
main();
