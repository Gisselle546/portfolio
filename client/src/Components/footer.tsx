import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid,Typography } from '@material-ui/core';
import { FaGithub,FaLinkedin } from 'react-icons/fa';




const useStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    height:"20vh",
    backgroundColor:"rgba(58, 58, 58)",
   
        
  },
  firstGrid:{
      marginLeft:"3rem",
      fontSize:"1.1rem",
      color:"rgb(16, 124, 16)"
  },

  links:{
      marginLeft:"2rem",
      fontSize:"3rem",
      color:"rgb(16, 124, 16)"
      
  }
  
  

}),
);




const Footer: React.FC=()=>{
    const classes =  useStyles();

    return(
        <div className={classes.root}>
            <Grid container spacing={3} >
                <Grid item xs={6} >
                         <div className={classes.firstGrid}> 
                          <Typography>Gisselle Rodriguez</Typography>
                            <p>Copyright &copy;2021</p>
                         </div>
                </Grid>
                <Grid item xs={6}>
                <div className={classes.firstGrid}> 
                    <ul style={{listStyleType:"none",display:"flex"}}>
                    <a href="https://github.com/Gisselle546"><li className={classes.links}><FaGithub/></li></a>
                    <a href="https://linkedin.com/in/grodr431"><li className={classes.links}><FaLinkedin/></li></a>
                    </ul>
                </div>
                </Grid>
            </Grid>

        </div>
    )

}

export default Footer;