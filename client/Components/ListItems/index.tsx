import Link from 'next/link';
import React from 'react';
import {CardContainer, CardButton, CardHeader} from './index.style'



interface Props{
    data:any
}


const ListItems = ({data}:Props) => {
    console.log(data)
  return (
     <CardContainer  >
         
         <img src={data.attributes.image} height="200px" width="200px"/>

         <CardHeader>{data.attributes.Title}</CardHeader>

         <Link key={data.id} href={`/items/${data.id}`}>
         <CardButton>See More</CardButton>
         </Link>
         
     </CardContainer>
  )
};

export default ListItems;
