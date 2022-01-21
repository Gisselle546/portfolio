import React from 'react';
import {Grid, Row, Col} from '../../Components/Grid';
import {Leftdiv, Rightdiv,BoxContainer, Button } from '../../styles/about.style';
import {AiFillGithub} from 'react-icons/ai';

const About = () => {
  
  
  
  return (
      <>
          <Grid>
            <Row>
              <Col size={6}>
                <Leftdiv>
                  <BoxContainer>
                    <h2>Gisselle Rodriguez</h2>
                    <p>Highly self motivated Full Stack developer knowledgeable in a wide variety of languages</p>
                    <a style={{width:'100%',display:'flex',justifyContent:'center'}} href={`https://github.com/Gisselle546`}><Button><AiFillGithub size={32}/></Button></a>
                  </BoxContainer>
                </Leftdiv>
              </Col>
              <Col size={6}>
                <Rightdiv/>
              </Col>
            </Row>
          </Grid>
      </>
  )
};

export default About;
