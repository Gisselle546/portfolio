import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { CircularProgress, Card, CardMedia, CardContent, Typography, } from '@material-ui/core';
import {useProjectsQuery} from '../generated/graphql';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
   
    root:{
        marginTop:"5rem",
       
    },


    list:{
      marginTop:'1rem',
      boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
  },

    card:{
     
      
    },

    image:{
      height:"20%",
      width:"20%"
    },

    details:{
     
    },
    content:{
      flex: '1 0 auto',
    }
 
}));




const Projects: React.FC=()=>{
    const classes = useStyles();
    const {data,loading,error} = useProjectsQuery();

    if (loading) {
        return(
          <div style={{
             display:"flex",
             flexDirection:"column",
             alignItems:"center",
             marginTop:"40px"
          }}
          >
             <CircularProgress/>
          </div>
       )
        }
        if (error) {
          return <div>Error</div>
          
        }
    

        const dataSet = data!.projects.map((project)=>{
          
          return(
            <div className={classes.list} key={project.id}>
              <Card className={classes.card}>
                <img className={classes.image} src={project.image[0]}/>
                
                <div className={classes.details}>
                <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                             {project.name}
                           </Typography>
               
                           
                </CardContent>
                </div>
              
              
              </Card>
  
            </div>
          );
      })



return(
    <div className={classes.root}>
        {dataSet}
        
        
    </div>
);


}

export default Projects;