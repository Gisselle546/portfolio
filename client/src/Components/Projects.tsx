import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';
import {useProjectsQuery} from '../generated/graphql';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
   
    root:{
        
    }

    
 
}));




const Projects: React.FC=()=>{
    const classes = useStyles();
    const {data,loading,error} = useProjectsQuery();

    const dataass =data!.projects.map(project=>{
        return(
            <h1>{project.name}</h1>
        )
    })


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
    





return(
    <div>
        {dataass}
    </div>
)


}

export default Projects;