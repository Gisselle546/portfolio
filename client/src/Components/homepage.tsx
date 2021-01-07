import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Button,Grid } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
    height:"80vh",
    background:"linear-gradient(to right,rgba(250,240,230, 0),rgba(255,245,238, 0)),url(https://images.unsplash.com/photo-1527995145077-f35025789549?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3450&q=80) center/cover",
    display:"flex",
    alignItems:"center",
    justifyContent:"flex-start",
    
  },

  heading:{
    
    display:"flex",
    justifyContent:"center",
    alignItems:"flex-start",
    backgroundColor:"rgba(241, 241, 241)",
    marginLeft:"0.5rem",
    fontFamily:"Open Sans",
    flex:"0 1 400px",
    flexWrap:"wrap",
    height:"240px",
    overflow:"visible",
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
    
    [theme.breakpoints.up('md')]: {
      marginLeft:"1rem"
    }
    
  },

  subButton:{
     
      color: "rgba(16, 124, 16)",
      border:"1px solid rgba(16, 124, 16)",
      marginTop:"-3rem",
      height:"3rem",
      fontFamily:"JetBrains Mono"
  
    
  
  }

}),
);


const Homepage: React.FC=()=>{
  const classes =  useStyles();

    return(
       
     <> 
       <Grid container spacing={3}>
         <Grid item xs={12}>
            <div className={classes.root}>
            <div className={classes.heading} >
                  <h3 style={{margin:"2.6rem"}}> Hi, I'm Gisselle Rodriguez</h3>
                
                  <h3 style={{margin:"-3rem 1rem"}}>I'm a Full-Stack web developer</h3>
                  <Button variant="outlined"  size="small" className={classes.subButton}> View My Works<ArrowForwardIcon/></Button>
                

            </div>

        
       </div>
       </Grid>
      </Grid>
    </>
    
    
    );

}

export default Homepage;