
import "reflect-metadata";
require('dotenv').config();
import Express from 'express'
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import { createConnection } from "typeorm";
import { createSchema } from './utils/createSchema';

const main = async () => {
    await createConnection();
  
    const schema = await createSchema();
  
    const apolloServer = new ApolloServer({
      schema,
      context: ({ req,res }) => ({ 
       req,
       res
       
      })
    });
  
    const app = Express();
    app.use(cors());

    const corsOptions={
        origin: "http://localhost:3000",
        credentials: true
      }
    apolloServer.applyMiddleware({ app, cors: corsOptions, path:'/api'});
  
    app.listen(process.env.PORT, () => {
      console.log("App started");
      
    });
   
    
}
  
  main();
  