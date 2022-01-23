import gsap from 'gsap';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import {CardContainer, CardButton, CardHeader} from './index.style'



interface Props{
    data:any
}


const ListItems = ({data}:Props) => {
    const cardcontainer = useRef(null);
  
  
  useEffect(()=>{
    gsap.from(cardcontainer.current, {autoAlpha: 0, y: -80, delay: 0.6, duration:1.5})
  },[])
  
  
  
  
    return (
     <CardContainer ref={cardcontainer} >
         
         <img src={data.attributes.image} height="200px" width="200px"/>

         <CardHeader>{data.attributes.Title}</CardHeader>

         <Link key={data.id} href={`/items/${data.id}`}>
         <CardButton>See More</CardButton>
         </Link>
         
     </CardContainer>
  )
};

export default ListItems;
