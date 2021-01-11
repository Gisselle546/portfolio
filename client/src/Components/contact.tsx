import React from 'react';
import { Grid } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { FaGithub,FaLinkedin } from 'react-icons/fa';

const useStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
    marginTop:"-40px"
    
  },

  gridstyleone:{
    
    height:"100vh",
    backgroundColor:"rgba(0,60,0)",
    display:"flex",
    flexDirection:"column",
    justifyContent:"flex-start"
  },

  gridstyletwo:{
    height:"100%",
    background:"linear-gradient(to right,rgba(250,240,230, 0),rgba(255,245,238, 0)),url(https://images.unsplash.com/photo-1519987856251-45aa3d9171ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=5432&q=80) center/cover",
    marginLeft:"-26px",
    
    
   
  },

  contact:{
    margin:"4rem",
    height:"34vh",
    backgroundColor:"rgba(247,247,247)",
    width:"80%",
    borderRadius: "50%"
    
  },

  info:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    marginTop:"4rem"
  },

  icons:{
   
    fontSize:"1.8rem",
    marginTop:"2px",
    transition: "0.5s ease-in-out",
      "&:hover":{
        transform: "scale(1.1, 1.1)" 
      }
    
  }
  

}),
);


const Contact: React.FC=()=>{
    
    const classes =  useStyles();

    return(
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={6} md={3}>
                  <div className={classes.gridstyleone}>
                            <div className={classes.contact}>
                               <div className={classes.info}>
                                  <h3 style={{marginLeft:"24px"}}>Email: gissellerodriguez431@gmail.com</h3>
                                  <h3>Phone: (786) 546-0432</h3>
                                  <h3>Github:<a href="https://github.com/Gisselle546"><FaGithub style={{color:"black"}}className={classes.icons}/></a></h3>
                                  <h3>linkedin: <a href="https://linkedin.com/in/grodr431"><FaLinkedin style={{color:"rgb(0, 119, 181)"}}className={classes.icons}/></a></h3>
                              </div>
                           
                          

                           </div>
                  </div>
                
                </Grid>
                <Grid item xs={6} md={9}>
                    <div className={classes.gridstyletwo}>
                          
                    </div>
                 
                </Grid>
            </Grid>
        </div>
    );
}

export default Contact; 

