import styled from 'styled-components';
import { device } from '../utils/device';



  export const Container = styled.div`
 
  background: linear-gradient(to right bottom,rgba(0,43,52, 0.6),rgba(0,0,0, 100)),url(/Landingpage.jpeg) left center / cover ;
  height:100vh;

  @media ${device.mobile} {
    width:100vw;    
    height:100vh;
  }


 `;
 