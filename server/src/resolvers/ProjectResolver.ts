import {Project} from '../entity/Project';
import { Resolver, Query, InputType,Field, Mutation,Arg, UseMiddleware } from "type-graphql";


@Resolver()
export class ProjectResolver {

    @Query(() => [Project])
    async projects() {
      const projects = await Project.find({});

      return projects;



    }
  


}