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

   console.log(data);


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
        <h2>hoooo</h2>
        
    </div>
);


}

export default Projects;