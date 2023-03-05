import { useRouter } from 'next/router';
import Link from 'next/link';
import { ChevronRightIcon,ChevronLeftIcon } from '@heroicons/react/solid';
import React from 'react';

function PaginationButtons() {
    const router = useRouter();
    const startIndex = Number(router.query.start) || 0;
  return (
    <div className='flex justify-between  max-w-lg text-blue-700 mb-10'>
      {startIndex >= 10 &&(
       <Link href={`search?term=${router.query.term}&start=${startIndex - 10}`}>
        <div className='flex items-center flex-grow flex-col cursor-pointer'>
            <ChevronLeftIcon className='h-5'/>
            <p>Previous</p>
        </div>
       </Link>
      )}
       <Link href={`search?term=${router.query.term}&start=${startIndex + 10}`}>
        <div className='flex  flex-grow flex-col cursor-pointer'>
            <ChevronRightIcon className='h-5'/>
            <p>Next</p>
        </div>
       </Link>
    </div>
  )
}

export default PaginationButtons