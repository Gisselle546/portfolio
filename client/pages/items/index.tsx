import { GetStaticProps } from 'next';
import React from 'react';
import ListItems from '../../Components/ListItems';
import { Header, InnerWrapper, ItemsWrapper } from '../../styles/items.style';
import { fetchQuery } from '../../utils/fetchqueries';
import {Grid, Row, Col} from '../../Components/Grid/index';

const Items = ({data}:any) => {
  console.log(data);
  
  
  
  
  
  
  
  return (
    <>
    
    
    
    <ItemsWrapper/>
      <InnerWrapper>
          
          
          <Header>Projects</Header>
      
          <Grid>
            <Row>
            {data.map((pro:any,i:any)=>{
              return  <Col size={1} ><ListItems key={i} data={pro}/></Col>
            })}
            </Row>
        </Grid>
      
      </InnerWrapper>
    
   
   </>
  );
};

export default Items;


export const getStaticProps: GetStaticProps = async (context) => {

  const data = await fetchQuery('sites')

  return {
    props: {
      
      data:data.data
    },
    revalidate: 1,
  };



}