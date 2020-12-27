import React, { useEffect, useRef, useState } from 'react';
import { AppBar,Toolbar,Tab,Tabs} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
   
    tabsContainer:{
      display:"flex",
      justifyContent:"space-around"
    
    },
   
    tab:{
    color: "rgba(16, 124, 16)",
    fontWeight:"bold",
    fontSize:"1.0rem",
    
    
   },
   
    
    
  }),
);

export default function DrawerBar(){
   
    const classes = useStyles();
    
    const [navBackground, setNavBackground] = useState(false)
    
    const navRef = useRef(false)
    
    navRef.current = navBackground
    
    console.log(navRef.current)


    useEffect(() => {
      const handleScroll = () => {
        const show = window.scrollY > 320
        if (navRef.current !== show) {
          setNavBackground(show)
        }
      }
      document.addEventListener('scroll', handleScroll)
      return () => {
        document.removeEventListener('scroll', handleScroll)
      } 
    }, [])
    
    return(
     
        <>
        <AppBar position="fixed" style={{ boxShadow: 'none',transition: '1s ease', backgroundColor: navBackground ? 'rgba(22, 34, 45)' : 'transparent'}} >
            <Toolbar className={classes.tabsContainer}>
            <Tabs>

                  
                  <Tab className={classes.tab} component={Link} to='/projects'label="Projects"/>,
                  <Tab style={{marginRight:"2rem"}}className={classes.tab} component={Link} to='/contact'label="Contact"/>

      
        
            </Tabs> 

            </Toolbar>


        </AppBar>
            
        
       </>
    );

}

