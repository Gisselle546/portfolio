import styled from "styled-components";
import { device } from "../../utils/device";


export const CardContainer = styled.div`
display:flex;
flex-direction:column;
width:95%;
height:100%;
padding:1rem;
align-items:center;
justify-content:space-between;
background: linear-gradient(to right bottom,rgba(0,43,52, 0.6),rgba(0,0,0, 100));
box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;

@media ${device.mobile} {
  margin:0.5rem;
}

`;


export const CardHeader = styled.h3`
color:#fff;

`;



export const CardButton = styled.button`
  background-color: rgb(0,43,52); 
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor:pointer;



`