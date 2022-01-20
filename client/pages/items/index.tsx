import { GetStaticProps } from 'next';
import React from 'react';
import { fetchQuery } from '../../utils/fetchqueries';

const Items = ({data}:any) => {
  console.log(data);
  return (
    <div>
      <h1>ji</h1>
    </div>
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