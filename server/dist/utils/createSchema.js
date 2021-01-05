"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSchema = void 0;
const ProjectResolver_1 = require("./../resolvers/ProjectResolver");
const type_graphql_1 = require("type-graphql");
const createSchema = () => type_graphql_1.buildSchema({
    resolvers: [
        ProjectResolver_1.ProjectResolver
    ]
});
exports.createSchema = createSchema;
