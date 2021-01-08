import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { CircularProgress, Card, CardMedia, CardContent, Typography, Grid, } from '@material-ui/core';
import {useProjectsQuery} from '../generated/graphql';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
   
    root:{
        marginTop:"5rem",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
        
    },


    list:{
      marginTop:'1rem',
      boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
  },

    card:{
     display:"flex",
     justifyContent:"flex-start"
      
    },

    image:{
      height:"40%",
      width:"40%",
     
    },

    details:{
     
    },
    content:{
     
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
    console.log(data);

        const dataSet = data!.projects.map((project)=>{
         
          
          return(

            <div className={classes.list} key={project.id}>
              <Card className={classes.card}>
                <div >
                  <img className={classes.image} src={project.image[0]}/>
                </div>
                
                
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
       <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
             {dataSet}
             </Grid>
        </Grid>
    </div>
);


}

export default Projects;