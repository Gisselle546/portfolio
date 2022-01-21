import styled from 'styled-components';
import { device } from '../../utils/device';

interface IBtn {
    
    size: any
    
  }

export const Grid = styled.div`


`;


export const Row = styled.div`
    display:flex;
    @media ${device.mobile} {
        flex-direction:column;
        
      }

`;






export const Col = styled.div<IBtn>`
    flex: ${(props)=>props.size}
   

`;