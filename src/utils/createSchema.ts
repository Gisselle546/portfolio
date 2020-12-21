import { ProjectResolver } from './../resolvers/ProjectResolver';
import { buildSchema } from "type-graphql";



export const createSchema = () =>
buildSchema({
  resolvers: [
    ProjectResolver
  ]
});