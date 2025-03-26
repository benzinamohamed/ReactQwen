
import React from 'react'
import { CommandLineIcon} from '@heroicons/react/24/outline';
import Link from 'next/link';

export const HomeNavbar = () => {
  return (
    <nav className="container   py-6 ">
    <div className="flex items-center justify-between  w-screen px-16">
      <div className="md:flex md:items-center md:space-x-3 hidden">
        <div className="w-8 h-8 bg-gradient-to-tr from-green-400 to-emerald-500 rounded-md  ">
          <CommandLineIcon className="w-5 h-5 text-black" />
        </div>
        <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
          ReactForge
        </span>
      </div>
      <div className="flex w-screen justify-between items-center md:w-auto md:space-x-6">
        <Link href="https://ko-fi.com/hamodcode"target='_blank'  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:opacity-60 text-black px-6 py-2.5 rounded-lg transition-all" >Donate ❤️ </Link>
        <Link  href='/?show=true' className="bg-gradient-to-r from-green-500 to-emerald-600 hover:opacity-60 text-black px-6 py-2.5 rounded-lg transition-all cursor-pointer">
          Get Started
        </Link>
      </div>
    </div>
  </nav>
  )
}
