import { SearchIcon, PhotographIcon, PlayIcon, NewspaperIcon,MapIcon, DotsVerticalIcon } from '@heroicons/react/solid'
import React from 'react'
import HeaderOption from './HeaderOption'

function HeaderOptions() {
  return (
    <div className='flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b'>
        {/* left */}
        <div className='flex space-x-6'>
            <HeaderOption Icon={SearchIcon} title="All" selected
            />
             <HeaderOption Icon={PhotographIcon} title="Image"
            />
             <HeaderOption Icon={PlayIcon} title="Video"
            />
             <HeaderOption Icon={NewspaperIcon} title="News"
            />
             <HeaderOption Icon={MapIcon} title="Maps"
            />
             <HeaderOption Icon={DotsVerticalIcon} title="More"
            />
        </div>
        {/* right */}
      <div className='flex space-x-4'>
        <p className='link'>settings</p>
        <p className='link'>Tools</p>
      </div>

    </div>
  )
}

export default HeaderOptions
