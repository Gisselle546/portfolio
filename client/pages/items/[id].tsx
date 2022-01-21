import React from 'react';
import Image from 'next/image'
import { GetStaticProps,GetStaticPaths } from "next";
import { fetchQuery } from "../../utils/fetchqueries";
import { Container,Header,Description, RightContain, ButtonContainer,Button, LeftContain } from '../../styles/indi.style';
import {Grid, Row, Col} from '../../Components/Grid/index';
import {AiFillGithub} from 'react-icons/ai';
import {CgWebsite} from 'react-icons/Cg';








const ProjectItem = ({data}:any) => {

    console.log(data)

    if(!data){
      return <div>Loading..</div>;
    }

  return (
        <Container>
            <Grid>
               <Row>
                <Col size='6'>
                  <LeftContain>
                  <Image
                        alt="Next.js logo"
                        src={data.attributes.image}
                        width={450}
                        height={450}
                      />
                  </LeftContain>

                
                
                </Col>
              
                <Col  size='6'>
                  <RightContain>
                    <Header>{data.attributes.Title}</Header>
                    <Description>{data.attributes.Description}</Description>
                    <ButtonContainer>
                    <a style={{width:'100%'}} href={`${data.attributes.GithubUrl}`}> <Button><AiFillGithub size={28} /></Button></a>
                    <a style={{width:'100%'}}href={`${data.attributes.Url}`}>  <Button><CgWebsite size={28}/></Button></a>
                    </ButtonContainer>

                  </RightContain>
                
                </Col>

               </Row>
            
            </Grid>
        </Container>
  );




};





export default  ProjectItem;



export const getStaticProps: GetStaticProps = async ({ params }) => {

    const data = await fetchQuery('sites',`${params!.id}`)

   
  
    return {
      props: {
        
        data:data.data
  
      },
     
    };
  
  
  
  }


  export const getStaticPaths: GetStaticPaths = async () => {
    const data = await fetchQuery('sites')

    const paths = data.data.map(((article:any)=>{
        return{
            params:{id: String(article.id)}
        }
    }))

    return { 
        paths, 
        fallback:false
    }
}
