require('dotenv').config();
import "reflect-metadata";
const port = process.env.PORT || 2000;
import Express from 'express'
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import { createConnection } from "typeorm";
import { createSchema } from './utils/createSchema';

const main = async () => {

  const app = Express();
  app.use(cors({origin:"https://portfoliogise.netlify.app",credentials:true}));

    await createConnection({
        name:"default",
        type:"postgres",
        url:process.env.DATABASE_URL,
        synchronize:true,
        logging:true,
        entities: ["dist/entity/**/*.js"],
        ssl:{
          rejectUnauthorized:false
        }
    });
  
    const schema = await createSchema();
  
    const apolloServer = new ApolloServer({
      schema,
      context: ({ req,res }) => ({ 
       req,
       res
       
      })
    });
  
    
    apolloServer.applyMiddleware({ app, path:'/api',cors:false});
  
    app.listen(port, () => {
      console.log("App started");
      
    });
   
    
};
  
  main();
  