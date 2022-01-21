import styled from 'styled-components';
import { device } from '../utils/device';

export const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
background-color:rgb(0,43,52); 
height:100vh; 
width:100vw; 
margin-top:-1rem;
@media ${device.mobile} {
   border:2px solid blue;
   flex-direction:column;
   justify-content:flex-end;
   align-items:flex-end;
  }


`;


export const LeftContain = styled.div`
display:flex; 
justify-content:center; 
position:absolute;
top:8%; 
left:20%;

@media ${device.mobile} {
    
    left:0%;
  }



`;



export const RightContain = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
border: 3px solid #7a7a7a;
padding:2rem;
width:70%;
height:100%;

@media ${device.mobile} {
    padding:0rem;
    width:100%;
    margin-bottom:2rem;
  }


`;



export const Header = styled.h2`
color:#fff;
font-size:1.5rem;
text-transform:uppercase;
font-family: 'Montserrat', sans-serif;
`;

export const Description = styled.p`
color:#fff;


`;

export const ButtonContainer = styled.div`

display:flex;
width:100%;

`;


export const Button = styled.button`
display:flex;
width:98%;
margin-right:6px;
background-color: #000;
border: none;
color:#fff;
font-size:1rem;
padding: 15px 32px;
text-align: center;
text-decoration: none;
cursor:pointer;


`;