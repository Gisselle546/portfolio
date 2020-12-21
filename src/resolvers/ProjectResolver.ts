import { Project } from './../entity/Project';
import { Resolver, Query, InputType,Field, Mutation,Arg, UseMiddleware } from "type-graphql";


@Resolver()
export class ProjectResolver {

    @Query(() => [Project])
  async projects(
  
  
  ) {
    
    
    const tours = await Project.find()


    return tours;
  }

}