import styled from 'styled-components';
import { device } from '../utils/device';

export const ItemsWrapper = styled.div`
background-color:rgb(0,43,52);
clip-path: polygon(100% 0, 0 0, 100% 100%);
height:100vh;
z-index: -1;



`


export const InnerWrapper = styled.div`
display:flex; 
flex-direction:column;
align-items:center; 
justify-content:flex-start;
height:70%;
width:80%;
background-color:#7a7a7a;
position:absolute;
top:22%; 
left:10%;
box-shadow:rgba(0, 0, 0, 0.35) 0px 5px 15px;

@media ${device.mobile} {
    width:80%;    
    height:96%;
    top:5%
  }

 


`;


export const Header = styled.h2`
color:#fff;
font-weight:800; 
font-size:1.8rem;
letter-spacing:1px;
font-family:'Montserrat', sans-serif;

@media ${device.mobile} {
  font-size:1.3rem;
}


`