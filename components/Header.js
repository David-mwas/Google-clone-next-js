import React from 'react'
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';
function Header() {
 const router = useRouter();
 const searchInputRef = useRef(null);
 const search = (e) => {

  e.preventDefault();
  const term = searchInputRef.current.value;
  if (!term) return;

  router.push(`/search?term=${term}`);

 }

  return (
    <header className='sticky top-0 bg-white '>
    <div className='flex items-center w-full p-6'>
      <img
       loading="lazy" 
      //  priority={true}
        width={120}
        height={40}
        // '
        src='/../logo.png'
        alt="logo-img"
        onClick={() => router.push("/")}
        className="cursor-pointer"
        />
        <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center ">
            <input className="flex-grow focus:outline-none w-full" ref={searchInputRef} type="text"/>
            <XIcon className='cursor-pointer sm:mr-3 h-7 text-gray-500 transition duration-100 transform 
           hover:scale-125'
           onClick={()=> (searchInputRef.current.value = "")}
           />
           <MicrophoneIcon className='h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300'/>
           <SearchIcon className='h-6 hidden sm:inline-flex text-blue-500'/>
           <button type='submit' onClick={search} className=''></button>
        </form>
        <Avatar className="ml-auto"/>
    </div>
    <HeaderOptions/>
   </header>
  )
}

export default Header;
