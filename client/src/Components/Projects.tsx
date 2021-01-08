import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { CircularProgress, Card, CardMedia, CardContent, Typography, } from '@material-ui/core';
import {useProjectsQuery} from '../generated/graphql';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
   
    root:{
        
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
            <div key={project.id}>
              <Card>
              <CardMedia
                        
                        image={project.image[0]}
                        title="Live from space album cover"
                    />
                <div>
                <Typography variant="subtitle1" color="textSecondary">
                                 {project.name}
                </Typography>
                </div>
              </Card>
  
            </div>
          );
      })



return(
    <div>
        {dataSet}
        
        
    </div>
);


}

export default Projects;