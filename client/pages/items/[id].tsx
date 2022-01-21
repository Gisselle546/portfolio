import React from 'react';
import { GetStaticProps,GetStaticPaths } from "next";
import { fetchQuery } from "../../utils/fetchqueries";



const ProjectItem = ({data}:any) => {

    console.log(data)

  return (
        <div>
            <h1>jo</h1>
        </div>
  );




};





export default  ProjectItem;



export const getStaticProps: GetStaticProps = async ({ params }) => {

    const data = await fetchQuery('sites',`${params!.id}`)

    console.log(data)
  
    return {
      props: {
        
        data
  
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
