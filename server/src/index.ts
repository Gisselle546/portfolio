
import "reflect-metadata";
require('dotenv').config();
import Express from 'express'
const port = process.env.PORT || 2000;
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import { createConnection } from "typeorm";
import { createSchema } from './utils/createSchema';

const main = async () => {
    await createConnection({
      
        name: "default",
        type: "postgres",
        url: process.env.DATABASE_URL,
        synchronize: true,
        logging: true,
        entities: ["dist/entity/**/*.js"],
        extra: {
          ssl: process.env.SSL || false,
        },
      
    });
  
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
  
    app.listen(port, () => {
      console.log("App started!");
      
    });
   
    
}
  
  main();
  