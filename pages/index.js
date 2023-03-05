// import Head from 'next/head'
import Avatar from "@/components/Avatar";
import Footer from "@/components/Footer";
import { MicrophoneIcon, ViewGridIcon, SearchIcon, SearchCircleIcon} from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
export default function Home() {

  const  SearchInputRef = useRef(null);
  const router = useRouter();

  const search = (e) => {

    e.preventDefault();
    const term = SearchInputRef.current.value;
    if (!term) return;

    router.push(`/search?term=${term}`);

  }
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {/* header */}
      <header className="flex w-full justify-between p-5 text-gray-700 text-sm sticky t-0">
        <div className="flex space-x-4 items-center">
          <p className='link'>About</p>
          <p className='link'>Store</p>
        </div>
        <div className="flex space-x-4 items-center">
          <p className='link'>Gmail</p>
          <p className='link'>Images</p>
        <ViewGridIcon className="h-10 p-2 w-10 rounded-full hover:bg-gray-100 cursor-pointer"/>
        <Avatar/>
        </div>
      </header>

      {/* body */}
      <form className="flex flex-col mt-[6rem] items-center flex-grow w-4/5">
        <img
        loading="lazy"
        height={100}
        width={300}
         src='/../logo.gif'
         alt="google-gif"
        />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 py-3 px-5 items-center sm:max-w-xl lg:max-w-2xl mb-5">
          <SearchIcon className="h-5 mr-3 text-gray-500"/>
          <input ref={SearchInputRef} type="text" className=" focus:outline-none flex-grow"/>
          <MicrophoneIcon className="h-5"/>
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt:8 sma:space-y-0 sm:flex-row sm:space-x-4 items-center ">
          <button onClick={search} className="btn">Google</button>
          <button onClick={search} className="btn">I'am hacking!!</button>
        </div>
      </form>

      {/* footer */}

      <Footer/>
    </div>
  )
}
