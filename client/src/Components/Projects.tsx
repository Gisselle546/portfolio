import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { CircularProgress, Card, CardMedia, CardContent, Typography, Grid, Button, } from '@material-ui/core';
import {useProjectsQuery} from '../generated/graphql';
import { FaGithub,FaLinkedin } from 'react-icons/fa';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
   
    root:{
        marginTop:"5rem",
        display:"flex",
       
        
    },


    list:{
      marginTop:'4.5rem',
      boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
      
      
    },

    card:{
     display:"flex",
     
      
    },

    links:{
      fontSize:"1rem"
    },

    imageContainer:{
     height:"80%"
    },

    details:{
     
    },
    content:{
     
    }
 
}));




const Projects: React.FC=()=>{
    const classes = useStyles();
    const {data,loading,error} = useProjectsQuery();

    const MAX_LENGTH = 80;

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
                <div className={classes.imageContainer}>
                  <img style={{height:"250px"}} src={project.image[0]}/>
                </div>
                
                
                <div className={classes.details}>
                <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                             {project.name}
                           </Typography>

                           <div>
                            {
                                project.description.length>MAX_LENGTH ?
                                (
                                   `${project.description.substring(0,MAX_LENGTH)}...`
                                ):
                               <p>{project.description}</p>
                            }
                            </div>
                            <div style={{display:"flex"}}>
                            <a href={project.githubLink} className={classes.links}> <FaGithub/>  </a>  
                              <Button>Site</Button>
                         </div>
                           
                </CardContent>
                </div>
              
              
              </Card>
  
            </div>
          );
      })



return(
    <div className={classes.root}>
       <Grid style={{justifyContent:"center"}}container spacing={2}>
          <Grid item xs={12} md={6}>
             {dataSet}
             </Grid>
        </Grid>
    </div>
);


}

export default Projects;