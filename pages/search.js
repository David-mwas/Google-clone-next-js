import Header from '@/components/Header'
import SearchResult from '@/components/SearchResult';
import { API_KEY, CONTEXT_KEY } from '@/keys';
import Response from '@/Response';
import Head from 'next/head'
import { useRouter } from 'next/router';

import React from 'react'
function Search({results}) {
  const router=useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.term}- Google Search</title>
        <link rel='icon' href='/favicon.ico'/>
      </Head>
      {/* header */}
      <Header/>
      {/* Search results */}
      <SearchResult results={results}/>

    </div>
  )
}

export default Search;
export async function getServerSideProps(context){
  const useDummyData=false;
  const startIndex=context.query.start || "0";
 //getting results from google-apis

  const data = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`).then(response => response.json());
  
  //After server has rendered.... pass results to user-client
 return{
  props:{
    results:data
  }
 }
}
