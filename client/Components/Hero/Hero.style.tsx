import styled from 'styled-components';
import { device } from '../../utils/device';

export const HeroWrapper = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
height:100%;
@media ${device.mobile} {
        
    justify-conttent:flex-start;
  }



`;


export const InnerheroLeft = styled.div`
align-self:flex-end; 
transform: skewX(-20deg);
margin-left:40px; 
height:100%;
width:50%; 
position:relative;
display:flex;
justify-content:center;
@media ${device.mobile} {
    display:flex;
    justify-content:flex-start;
     height:78%;   
    margin-left:0px;
  }

`
export const InnerheroRight = styled.div`
display:flex;
flex-direction:column;
height:100%;
width:50%; 
justify-content:center; 
align-items:center;




`;

export const IconContainer = styled.div`
padding:1rem; 
display:flex; 
justify-content:space-between;
@media ${device.mobile} {
   
   border:2px solid green;
   width:70%;    
   padding:0rem;
  }


`

export const ImageSizer = styled.div`



@media ${device.mobile} {
    position:relative;
    height:45%;
    width:45%;
   }



`