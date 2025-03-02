'use client'
import React, { JSX } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { ChevronDown, ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';


function Navbar() : JSX.Element {

    const [position, setPosition] = React.useState<string>("bottom")
    const [isopen, setIsOpen] = React.useState<boolean>(false)
    const handellcilck = ():void => {
        setIsOpen((prev)=> !prev)
    }

  return (
    <nav>
  <div className=" md:flex items-center justify-between p-4 bg-background border-b-gray-300 border-b-[0.2px] shadow-sm shadow-boxes ">
   
<div className='hidden md:flex justify-between items-center flex-[.5] ml-6'>
<div className=" font-inter font-semibold  text-primary text-xl" >
  <button>
    ReactQwen
  </button>
</div>
    <div className="flex flex-[0.8] justify-between items-center  mr-12 ml-6 ">
<div className="font-inter font-medium text-sm text-primary md:text-lg    ">
  <button>
    Home
  </button>
</div>
<div className="font-inter font-medium text-sm text-primary md:text-lg mx-8" >
  <button >
    Components
  </button>
</div>
<div className="font-inter font-medium text-sm text-primary md:text-lg " >
  <button>
  Comumnity
  </button>
</div>

</div>
</div>
<div className="hidden md:font-inter font-medium text-sm text-secondary md:text-xl md:flex   " >
  <button className='mr-4 bg-gray-200 rounded-xl px-4 py-1  font-semibold text-[1.15rem] font-inter'>
    Login
  </button>
  <button className='mr-4 bg-boxes rounded-xl px-4 py-1  font- text-white text-[1.15rem] font-inter'>
    Sign Up
  </button>
</div>
  <div className='flex justify-between md:hidden'>
  <div className=" font-inter font-semibold  text-primary text-xl  " >
  <button>
    ReactQwen
  </button>
</div>
<div className=''>
  <DropdownMenu onOpenChange={handellcilck}  >
  <DropdownMenuTrigger  >{isopen ? <ChevronDown size={30}/> : <ChevronLeft size={30}/>}</DropdownMenuTrigger>
  <DropdownMenuContent  className="w-56  bg-primary shadow-sm raduis-xl" >
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup  value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top" className='text-white font-inter font-semibold'>Home</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom" className='text-white font-inter font-semibold'>Components</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right" className='text-white font-inter font-semibold'>Comumnity</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
</DropdownMenu>
</div>
  </div>


  </div>
 
</nav>
  )
}

export default Navbar