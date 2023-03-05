import Header from '@/components/Header'
import { API_KEY, CONTEXT_KEY } from '@/keys';
import Response from '@/Response';
import Head from 'next/head'

import React from 'react'
function Search({results}) {
  console.log(results);
  return (
    <div>
      <Head>
        <title>Search results</title>
        <link rel='icon' href='/favicon.ico'/>
      </Head>
      {/* header */}
      <Header/>
      {/* Search results */}
    </div>
  )
}

export default Search;
export async function getServerSideProps(context){
  const useDummyData=true;

 //getting results from google-apis

  const data = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}`).then(response => response.json());
  
  //After server has rendered.... pass results to user-client
 return{
  props:{
    results:data
  }
 }
}
