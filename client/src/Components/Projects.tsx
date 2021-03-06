import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { CircularProgress, Card, CardContent, Typography, Grid, Button, CardMedia, } from '@material-ui/core';
import {useProjectsQuery} from '../generated/graphql';
import { FaGithub } from 'react-icons/fa';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
   
    root:{
        marginTop:"5rem",
        display:"flex",
        
        
    },


    list:{
      marginTop:'4.5rem',
      boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      
      


    },

    card:{
     display:"flex",
     
      
    },

    links:{
      fontSize:"2.5rem",
      color:"black"
    },

    

    content:{
      display:"flex",
      flexDirection:"column",
      height:"100%",
      justifyContent:"space-around", 
      backgroundColor:"rgba(240,233,222)",
      fontFamily:"JetBrains Mono",
      minWidth:"50%"
    
      
      
    },

    details:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-around",
      marginBottom:"50px"

      
    },

    button:{
      backgroundColor:"rgba(58, 58, 58)",
      color:"rgba(16 124 16)",
      fontSize:"1rem",
      transition: "0.5s ease-in-out",
      "&:hover":{
        transform: "scale(1.2, 1.2)" ,
        backgroundColor:"rgba(58, 58, 58)",

      }
    },
    name:{
      fontFamily:"Open Sans",
      fontWeight:"bold"
    },
    
    media:{
      width: 400
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
         
          console.log(project.image[0].toString())
          
          return(
           
            <div className={classes.list} key={project.id}>
                
             
              <Card className={classes.card}>
                  
              <CardMedia className={classes.media}>
                <img style={{ objectFit: 'cover', height: "100%", width: "100%"}} alt=""src={project.image[0]}/>
              </CardMedia>
                
                  
              

                  
                    <CardContent className={classes.content}>
                                <div>
                                <Typography className={classes.name}component="h5" variant="h5">
                                {project.name}
                                 </Typography>

                             
                              
                                  <p>{project.description}</p>
                                  </div>
                                
                                <div className={classes.details}>
                                  <a href={project.githubLink}> <FaGithub className={classes.links}/>  </a>  
                                  <Button onClick={()=>window.location.href=project.link}className={classes.button}variant="contained"  size="large">Site</Button>
                               </div>
                           
                    </CardContent>
                  
               
              
              
              </Card>
           
            
            </div>
            
           
          );
      })



return(
    <div className={classes.root}>
         <Grid style={{justifyContent:"center"}}container spacing={1}>
            
            <Grid item xs={12} md={6}>
        
             {dataSet}
            </Grid>
        </Grid>
             
    </div>
);


}

export default Projects;