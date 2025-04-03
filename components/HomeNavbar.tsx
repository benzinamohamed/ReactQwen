
import React from 'react'
import { CommandLineIcon} from '@heroicons/react/24/outline';
import Link from 'next/link';
import GetStartedOptionsButton from './GetStartedOptionsButton';

export const HomeNavbar = () => {
  return (
    <nav className="container   py-6 ">
    <div className="flex items-center justify-between  w-screen px-16">
      <div className="md:flex md:items-center md:space-x-3 hidden">
        <div className="w-8 h-8 bg-gradient-to-tr from-green-400 to-emerald-500 rounded-md  ">
          <CommandLineIcon className="w-5 h-5 text-black" />
        </div>
        <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
          <Link href={"/"}> ReactQwen
          </Link>
  
          
        </span>
      </div>
     <GetStartedOptionsButton/>
    </div>
  </nav>
  )
}
