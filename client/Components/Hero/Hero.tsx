import React, { useEffect, useRef } from 'react';
import { HeroWrapper, IconContainer, ImageSizer, InnerheroLeft, InnerheroRight } from './Hero.style';
import Image from "next/image";
import partyPic from '../../public/party.png';
import pizzaPic from '../../public/pizza.png';
import tobaccoPic from '../../public/tobacco.png';
import gsap from 'gsap';
import {DiReact} from 'react-icons/di';
import {SiStrapi,SiMongodb} from 'react-icons/si';
import {FaNode} from 'react-icons/fa'




const Hero = () => {


    const imageone = useRef(null);
    const imagetwo = useRef(null);
    const imagethree = useRef(null);

    const TLLOAD = gsap.timeline({
        default: {
          ease: "power2",
          
        }
      });

   
       useEffect(() => {
        TLLOAD.from(imageone.current,{opacity:0, delay:1.4})
        .from(imagetwo.current,{opacity:0, delay:"+=.8"})
        .from(imagethree.current,{opacity:0, delay:"+=.8"})
        .to(imageone.current,  { y: -200 ,duration: 0.6 },)
        .to(imagetwo.current,  { y: -320, duration: 1.3, }, "+=.6")
        .to(imagethree.current, { y: -420, duration: 0.8,}, "+=0.4")
       
        
    },[]);


       



  return (
      <HeroWrapper >
          <InnerheroLeft>
          
          <ImageSizer  ref={imageone}  style={{position:'absolute', left:'17%', bottom:0}}>
            <Image
                src={partyPic}
                width={200}
                height={200}
                />
          </ImageSizer>

            <ImageSizer ref={imagetwo} style={{position:'absolute', bottom:0, left:'47%'}}>
            <Image
              
              src={pizzaPic}
              width={200}
              height={200}
            />
            </ImageSizer>
            <ImageSizer ref={imagethree} style={{position:'absolute', right:'2%', bottom:0}}>
            <Image
              
              src={tobaccoPic}
              width={200}
              height={200}
            />
            </ImageSizer>
          </InnerheroLeft>
          
          
          
          
          
          <InnerheroRight>
            <h1 style={{fontFamily:"font-family: Cairo, sans-serif,Indie Flower, cursive;", color:'#fff'}}>Gisselle's</h1>
            <IconContainer>
                <DiReact size={88} style={{color:'#61DBFB'}}/>
                <SiStrapi size={87} style={{color:'#4e26e0', marginRight:"0.6rem"}}/>
                <FaNode  size={89} style={{color:'#fff'}}/>
                <SiMongodb size={89} style={{color:'#10aa50'}}/>
            </IconContainer>
            <h1 style={{fontFamily:"font-family: Cairo, sans-serif,Indie Flower, cursive;", color:'#fff'}}>Portfolio</h1>
          </InnerheroRight>
      </HeroWrapper>
  )
};

export default Hero;
