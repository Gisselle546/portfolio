import styled from 'styled-components';

interface IBtn {
    
    size: string
  }

export const Grid = styled.div`


`;


export const Row = styled.div`
    display:flex;

`;

export const Col = styled.div<IBtn>`
    flex: ${(props)=>props.size}

`;