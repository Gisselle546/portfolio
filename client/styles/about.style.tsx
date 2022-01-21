import styled from 'styled-components';
import { device } from '../utils/device';

export const Leftdiv = styled.div`
display:flex;
flex-direction:column; 
justify-content:center;
align-items:center;
height:100vh;
width:100%;
@media ${device.mobile} {
    background-color:#7a7a7a;
   }

`;


export const Rightdiv = styled.div`
background-color:#7a7a7a;
height:100%;
width:100%;

@media ${device.mobile} {
   display:none;
  }


`;


export const BoxContainer = styled.div`
background: linear-gradient(to right bottom,rgba(0,43,52, 0.6),rgba(0,0,0, 100));
color:#fff;
padding:1rem;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

`;

export const Button = styled.button`
display:flex;
width:55%;
margin-right:6px;
background-color: #fff;
border: none;
color:#000;
font-size:1rem;
padding: 10px 24px;

text-decoration: none;
cursor:pointer;


`;