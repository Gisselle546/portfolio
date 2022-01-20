import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { device } from '../../utils/device';

const Navbar = () => {


    const NavbarWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    position:fixed;
    width:100%;
    padding:0.4rem;
    height:8vh;

    
    

   
    
   
    `;

    const NavItems = styled.ul`
    list-style-type:none;
    display:flex;
    align-items:flex-end;
    
    
    `;


        const NavLink = styled.li`
        color:#fff; 
        font-weight:800;
        font-size:1.3rem;
        letter-spacing:1px;
        font-family: 'Montserrat', sans-serif;
        height:30px;
        cursor:pointer;
        margin-right:30px;

        @media ${device.mobile} {
        
            font-size:0.9rem;
          }

        &:after{
            display:block;
            content: '';
            border-bottom: solid 3px #fff;  
            transform: scaleX(0);  
            transition: transform 350ms ease-in-out;
            padding:0.1rem;
        }



        &:hover:after{
            transform: scaleX(1);
        }


        `;


    const [navBackground, setNavBackground] = useState(false)
    
    const navRef = useRef(false)
    
    navRef.current = navBackground
    
    console.log(navRef.current)


    useEffect(() => {
      const handleScroll = () => {
        const show = window.scrollY > 4
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
       <NavbarWrapper style={{background: navBackground ? "#fcfff9":'transparent' }}>
           <div>

           </div>
           <NavItems>
                <Link href="/"><NavLink>Home</NavLink></Link>
                  <NavLink>Projects</NavLink>
                  <NavLink>About</NavLink>
           </NavItems>
         
       </NavbarWrapper>
    )
};

export default Navbar;
