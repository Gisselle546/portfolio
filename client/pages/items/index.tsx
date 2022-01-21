import { GetStaticProps } from 'next';
import React from 'react';
import ListItems from '../../Components/ListItems';
import { ItemsWrapper } from '../../styles/items.style';
import { fetchQuery } from '../../utils/fetchqueries';
import {Grid, Row, Col} from '../../Components/Grid/index';

const Items = ({data}:any) => {
  console.log(data);
  return (
    <>
    
    
    
    <ItemsWrapper/>
      <div style={{display:"flex", flexDirection:"column", alignItems:'center', justifyContent:"flex-start",height:'70%', width:'80%',backgroundColor:'#7a7a7a', position:"absolute", top:'22%', left:'10%',boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
          
          
          <h2 style={{color:'#fff',fontWeight:'800', fontSize:'1.8rem',letterSpacing:"1px", fontFamily:" 'Montserrat', sans-serif"}}>Projects</h2>
      
          <Grid>
            <Row>
            {data.map((pro:any,i:any)=>{
              return  <Col size='3'><ListItems key={i} data={pro}/></Col>
            })}
            </Row>
        </Grid>
      
      </div>
    
   
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